"use client";

import { useEffect, useRef, useState } from "react";

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; [k: number]: { transcript: string } }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

declare global {
  interface Window {
    SpeechRecognition?: { new (): SpeechRecognitionLike };
    webkitSpeechRecognition?: { new (): SpeechRecognitionLike };
  }
}

// Azure Speech SDK 객체(런타임 동적 import). recognizer/synthesizer는 any로 다룬다.
type AzureRecognizer = { stopContinuousRecognitionAsync: (cb?: () => void) => void; close: () => void };
type AzureSynthesizer = { speakTextAsync: (text: string, cb?: () => void, err?: (e: string) => void) => void; close: () => void };

const AZURE_VOICE = "ko-KR-SunHiNeural"; // 어르신 친화 한국어 여성 뉴럴 보이스

export default function AITeacherClient() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);

  // 브라우저 Web Speech 폴백
  const recogRef = useRef<SpeechRecognitionLike | null>(null);
  const listeningRef = useRef(false);

  // Azure
  const azureRecogRef = useRef<AzureRecognizer | null>(null);
  const azureFinalRef = useRef("");
  const tokenCacheRef = useRef<{ token: string; region: string; ts: number } | null>(null);

  const browserSttSupported =
    typeof window === "undefined" || Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);

  // 브라우저 STT 초기화 (Azure 실패 시 폴백)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return;
    const recog = new Ctor();
    recog.lang = "ko-KR";
    recog.continuous = true;
    recog.interimResults = true;
    recog.onresult = (event) => {
      let interim = "";
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const r = event.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interim += r[0].transcript;
      }
      setQuestion(finalText + interim);
    };
    recog.onerror = (e) => {
      console.error("STT error:", e.error);
    };
    recog.onend = () => {
      if (listeningRef.current) {
        try {
          recog.start();
        } catch {}
      }
    };
    recogRef.current = recog;
    return () => {
      try {
        recog.stop();
      } catch {}
    };
  }, []);

  // 언마운트 시 Azure 리소스 정리
  useEffect(() => {
    return () => {
      try {
        azureRecogRef.current?.close();
      } catch {}
    };
  }, []);

  // Azure 단기 토큰 (9분 캐시)
  const getAzureToken = async (): Promise<{ token: string; region: string } | null> => {
    const cached = tokenCacheRef.current;
    if (cached && Date.now() - cached.ts < 9 * 60 * 1000) {
      return { token: cached.token, region: cached.region };
    }
    try {
      const res = await fetch("/api/speech-token", { cache: "no-store" });
      if (!res.ok) return null;
      const data = (await res.json()) as { token?: string; region?: string };
      if (!data.token || !data.region) return null;
      tokenCacheRef.current = { token: data.token, region: data.region, ts: Date.now() };
      return { token: data.token, region: data.region };
    } catch {
      return null;
    }
  };

  // ---- STT ----
  const startBrowserStt = () => {
    if (!recogRef.current) {
      setError("이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 사용을 권장합니다.");
      return;
    }
    try {
      recogRef.current.start();
      listeningRef.current = true;
      setListening(true);
    } catch {}
  };

  const startAzureStt = async (): Promise<boolean> => {
    const auth = await getAzureToken();
    if (!auth) return false;
    try {
      const SpeechSDK = await import("microsoft-cognitiveservices-speech-sdk");
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(auth.token, auth.region);
      speechConfig.speechRecognitionLanguage = "ko-KR";
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
      azureFinalRef.current = "";

      recognizer.recognizing = (_s, e) => {
        setQuestion(azureFinalRef.current + e.result.text);
      };
      recognizer.recognized = (_s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech && e.result.text) {
          azureFinalRef.current += e.result.text;
          setQuestion(azureFinalRef.current);
        }
      };
      recognizer.canceled = (_s, e) => {
        if (e.reason === SpeechSDK.CancellationReason.Error) {
          console.error("Azure STT canceled:", e.errorDetails);
        }
      };

      recognizer.startContinuousRecognitionAsync(
        () => {
          azureRecogRef.current = recognizer as unknown as AzureRecognizer;
          setListening(true);
        },
        (err) => {
          console.error("Azure STT start failed:", err);
          try {
            recognizer.close();
          } catch {}
        }
      );
      return true;
    } catch (e) {
      console.error("Azure SDK load/init failed:", e);
      return false;
    }
  };

  const stopListening = () => {
    listeningRef.current = false;
    if (azureRecogRef.current) {
      try {
        azureRecogRef.current.stopContinuousRecognitionAsync(() => {
          try {
            azureRecogRef.current?.close();
          } catch {}
          azureRecogRef.current = null;
        });
      } catch {
        azureRecogRef.current = null;
      }
    }
    if (recogRef.current) {
      try {
        recogRef.current.stop();
      } catch {}
    }
    setListening(false);
  };

  const toggleListen = async () => {
    if (listening) {
      stopListening();
      return;
    }
    setError(null);
    // Azure 우선, 실패 시 브라우저 폴백
    const ok = await startAzureStt();
    if (!ok) startBrowserStt();
  };

  // ---- TTS ----
  const speakBrowser = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (synth.speaking) synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ko-KR";
    u.rate = 1.0;
    synth.speak(u);
  };

  const speak = async (text: string) => {
    const auth = await getAzureToken();
    if (!auth) {
      speakBrowser(text);
      return;
    }
    try {
      const SpeechSDK = await import("microsoft-cognitiveservices-speech-sdk");
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(auth.token, auth.region);
      speechConfig.speechSynthesisVoiceName = AZURE_VOICE;
      const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig) as unknown as AzureSynthesizer;
      synthesizer.speakTextAsync(
        text,
        () => {
          try {
            synthesizer.close();
          } catch {}
        },
        (err) => {
          console.error("Azure TTS failed:", err);
          try {
            synthesizer.close();
          } catch {}
          speakBrowser(text);
        }
      );
    } catch (e) {
      console.error("Azure TTS init failed:", e);
      speakBrowser(text);
    }
  };

  const ask = async () => {
    const q = question.trim();
    if (!q) {
      setError("질문할 내용을 입력하거나 마이크 버튼으로 말씀해주세요.");
      return;
    }
    setError(null);
    setAnswer("");
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || `요청 실패 (${res.status})`);
      }
      const text = (data.answer as string)
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\*(.+?)\*/g, "$1")
        .replace(/^#{1,6}\s+/gm, "")
        .replace(/^\s*[\*\-]\s+/gm, "")
        .replace(/`(.+?)`/g, "$1");
      setAnswer(text);
      void speak(text);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "오류가 발생했습니다.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const micAvailable = true; // Azure 또는 브라우저 폴백으로 항상 시도 가능

  return (
    <div className="mx-auto max-w-[1180px] overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card-lg sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="min-w-0 rounded-2xl border border-line bg-[#FFFBEB] p-4 md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <label htmlFor="student-input" className="break-keep text-lg font-extrabold text-text md:text-2xl">
              학생들의 말
            </label>
            {micAvailable ? (
              <button
                type="button"
                onClick={toggleListen}
                className={`rounded-full px-4 py-2 text-sm font-extrabold transition-all sm:px-5 ${
                  listening
                    ? "bg-red text-white shadow-[0_6px_18px_rgba(229,57,53,0.30)]"
                    : "bg-navy text-white hover:bg-navy-deep"
                }`}
              >
                {listening ? "듣는 중 · 정지" : "마이크 시작"}
              </button>
            ) : (
              <span className="text-xs font-semibold text-red">Chrome 음성 인식 권장</span>
            )}
          </div>
          <textarea
            id="student-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="여기에 질문이 표시됩니다. 오타를 고쳐주세요."
            className="h-[210px] w-full resize-y rounded-xl border-2 border-line bg-white p-4 text-[20px] leading-[1.55] outline-none transition-colors focus:border-blue md:h-[260px] md:text-[28px]"
          />

          <button
            type="button"
            onClick={ask}
            disabled={loading}
            className="mt-4 block w-full rounded-xl bg-green px-4 py-5 text-[22px] font-extrabold leading-tight text-white transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:bg-text-light md:text-[30px]"
          >
            {loading ? "생각 중입니다..." : "OST 똑똑이 선생님에게 물어보기"}
          </button>

          {error && (
            <div className="mt-4 rounded-xl border-l-4 border-yellow-strong bg-yellow p-4 font-semibold leading-[1.7] text-[#7C2D12]">
              {error}
            </div>
          )}
        </div>

        <div className="min-w-0 rounded-2xl border border-line p-4 md:p-6">
          <label className="mb-4 block break-keep text-lg font-extrabold text-text md:text-2xl">
            OST 똑똑이 선생님의 답변
          </label>
          <div className="min-h-[360px] w-full whitespace-pre-wrap break-words rounded-2xl bg-[#ECF0F1] p-5 text-[28px] font-extrabold leading-[1.35] text-[#1A1A1A] md:text-[44px] lg:text-[52px]">
            {answer || (loading ? "답변 생성 중..." : "답변이 여기에 크게 표시됩니다.")}
          </div>
        </div>
      </div>
    </div>
  );
}

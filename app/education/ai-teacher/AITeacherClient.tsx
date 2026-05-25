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

export default function AITeacherClient() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const recogRef = useRef<SpeechRecognitionLike | null>(null);
  const listeningRef = useRef(false);
  const sttSupported =
    typeof window === "undefined" || Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);

  // STT 초기화
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

  const toggleListen = () => {
    if (!sttSupported || !recogRef.current) return;
    if (listening) {
      try {
        recogRef.current.stop();
      } catch {}
      listeningRef.current = false;
      setListening(false);
    } else {
      try {
        recogRef.current.start();
        listeningRef.current = true;
        setListening(true);
      } catch {}
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

      // TTS
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const synth = window.speechSynthesis;
        if (synth.speaking) synth.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "ko-KR";
        u.rate = 1.0;
        synth.speak(u);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "오류가 발생했습니다.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[1300px] overflow-hidden rounded-2xl bg-white p-4 shadow-card-md sm:p-6 md:rounded-3xl md:p-10">
      {/* 학생용 입력창 */}
      <div className="mb-7 rounded-2xl border border-line p-4 md:p-6">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
          <label htmlFor="student-input" className="break-keep text-lg font-bold text-text md:text-2xl">
            학생들의 말 (실시간 음성 인식):
          </label>
          {sttSupported ? (
            <button
              type="button"
              onClick={toggleListen}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all sm:px-5 ${
                listening
                  ? "bg-red text-white shadow-[0_6px_18px_rgba(229,57,53,0.30)]"
                  : "bg-navy text-white hover:bg-navy-deep"
              }`}
            >
              {listening ? "듣는 중... (탭하면 정지)" : "마이크 시작"}
            </button>
          ) : (
            <span className="text-xs text-red font-semibold">⚠ 이 브라우저는 음성 인식 미지원 (Chrome 권장)</span>
          )}
        </div>
        <textarea
          id="student-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="여기에 질문이 표시됩니다. 오타를 고쳐주세요."
          className="h-[180px] w-full resize-y rounded-xl border-2 border-line p-4 text-[20px] outline-none focus:border-blue md:h-[200px] md:text-[32px]"
        />
      </div>

      {/* 전송 버튼 */}
      <button
        type="button"
        onClick={ask}
        disabled={loading}
        className="mb-7 block w-full rounded-xl bg-green px-4 py-5 text-[23px] font-extrabold leading-tight text-white transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:bg-text-light md:py-6 md:text-[36px]"
      >
        {loading ? "AI 선생님이 생각 중입니다..." : "AI 선생님에게 물어보기"}
      </button>

      {/* 오류 */}
      {error && (
        <div className="mb-5 p-4 rounded-xl bg-yellow text-[#7C2D12] font-semibold border-l-4 border-yellow-strong">
          {error}
        </div>
      )}

      {/* AI 답변 */}
      <div className="rounded-2xl border border-line p-4 md:p-6">
        <label className="mb-3 block break-keep text-lg font-bold text-text md:text-2xl">
          AI 선생님의 답변 (스피커로 함께 출력):
        </label>
        <div className="min-h-[260px] w-full whitespace-pre-wrap break-all rounded-xl bg-[#ecf0f1] p-5 text-[27px] font-extrabold leading-[1.3] text-[#1a1a1a] md:min-h-[300px] md:text-[60px]">
          {answer || (loading ? "답변 생성 중…" : "답변이 여기에 크게 표시됩니다.")}
        </div>
      </div>
    </div>
  );
}

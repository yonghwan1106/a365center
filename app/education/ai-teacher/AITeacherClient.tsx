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
  const [sttSupported, setSttSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const recogRef = useRef<SpeechRecognitionLike | null>(null);

  // STT 초기화
  useEffect(() => {
    if (typeof window === "undefined") return;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) {
      setSttSupported(false);
      return;
    }
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
      if (listening) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleListen = () => {
    if (!sttSupported || !recogRef.current) return;
    if (listening) {
      try {
        recogRef.current.stop();
      } catch {}
      setListening(false);
    } else {
      try {
        recogRef.current.start();
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
      const text = data.answer as string;
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
    <div className="max-w-[1300px] mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-card-md">
      {/* 학생용 입력창 */}
      <div className="mb-7 p-6 border border-line rounded-2xl">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
          <label htmlFor="student-input" className="text-xl md:text-2xl font-bold text-text">
            학생들의 말 (실시간 음성 인식):
          </label>
          {sttSupported ? (
            <button
              type="button"
              onClick={toggleListen}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                listening
                  ? "bg-red text-white shadow-[0_6px_18px_rgba(229,57,53,0.30)]"
                  : "bg-navy text-white hover:bg-navy-deep"
              }`}
            >
              {listening ? "🎙️ 듣는 중… (탭하면 정지)" : "🎙️ 마이크 시작"}
            </button>
          ) : (
            <span className="text-xs text-red font-semibold">⚠ 이 브라우저는 음성 인식 미지원 (Chrome 권장)</span>
          )}
        </div>
        <textarea
          id="student-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="학생들이 마이크에 대고 말하면 여기에 글씨로 나옵니다. 선생님이 오타를 고쳐주세요."
          className="w-full h-[200px] text-2xl md:text-[32px] p-4 rounded-xl border-2 border-line focus:border-blue outline-none resize-vertical"
        />
      </div>

      {/* 전송 버튼 */}
      <button
        type="button"
        onClick={ask}
        disabled={loading}
        className="block w-full py-6 rounded-xl text-2xl md:text-[36px] font-extrabold bg-green text-white hover:brightness-95 disabled:bg-text-light disabled:cursor-not-allowed transition-all mb-7"
      >
        {loading ? "AI 선생님이 생각 중입니다..." : "검토 완료! AI 선생님에게 물어보기 🚀"}
      </button>

      {/* 오류 */}
      {error && (
        <div className="mb-5 p-4 rounded-xl bg-yellow text-[#7C2D12] font-semibold border-l-4 border-yellow-strong">
          {error}
        </div>
      )}

      {/* AI 답변 */}
      <div className="p-6 border border-line rounded-2xl">
        <label className="block text-xl md:text-2xl font-bold text-text mb-3">
          AI 선생님의 답변 (스피커로 함께 출력):
        </label>
        <div className="w-full min-h-[300px] text-3xl md:text-[60px] font-extrabold text-[#1a1a1a] bg-[#ecf0f1] p-5 rounded-xl whitespace-pre-wrap leading-[1.3]">
          {answer || (loading ? "답변 생성 중…" : "여기에 답변이 큰 글씨로 표시됩니다.")}
        </div>
      </div>
    </div>
  );
}

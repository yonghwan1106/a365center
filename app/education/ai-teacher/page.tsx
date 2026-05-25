import AITeacherClient from "./AITeacherClient";

export const metadata = {
  title: "AI 선생님 · 어르신 12명 교실 — 우리함께 평생교육·나눔센터",
  description:
    "50인치 모니터 앞에서 어르신 12명이 함께 배우는 AI 선생님 파일럿. 음성 인식·음성 출력·60px 큰 글씨. Gemini API 기반.",
};

export default function AITeacherPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="wrap py-10">
        <a
          href="/"
          className="inline-block text-text-light text-sm font-semibold hover:text-red mb-8"
        >
          ← 메인으로 돌아가기
        </a>
        <header className="text-center mb-10">
          <span className="inline-block bg-navy text-white px-4 py-[6px] rounded-md text-xs font-extrabold tracking-wider mb-4">
            ★ AI 선생님 파일럿 v1
          </span>
          <h1 className="font-black text-3xl md:text-[40px] text-text leading-[1.2] tracking-tight mb-4">
            🗣️ 12인용 교육용 AI 선생님 🤖
          </h1>
          <p className="text-text-mute text-base leading-[1.75] max-w-2xl mx-auto">
            마이크에 말씀하시거나 직접 입력 후 초록 버튼을 눌러주세요.
            <br />
            AI 선생님이 어르신 눈높이로 쉽게 답해드립니다.
          </p>
        </header>

        <AITeacherClient />

        <footer className="text-center mt-10 text-xs text-text-light">
          ⚠ 안전 안내 · API 키는 서버 환경변수로 분리됨. 클라이언트는 키에 직접 접근하지 않습니다.
        </footer>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function AITeacherIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FFFBEB]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy text-white px-4 py-[6px] rounded-md text-xs font-extrabold tracking-wider mb-4">
            ★ NEW · 차별화 운영
          </span>
          <h2 className="font-extrabold text-3xl md:text-[34px] text-text tracking-tight mb-4">
            50인치 모니터 앞 어르신 12명 교실
            <br />
            <span className="text-yellow-strong">AI 선생님이 직접 가르칩니다</span>
          </h2>
          <p className="text-text-mute text-[17px] leading-[1.75] max-w-2xl mx-auto">
            대표가 직접 코딩한 AI 선생님 파일럿. 음성 인식·음성 출력·60px 큰 글씨로
            <br className="hidden md:block" />
            컴맹·저시력 어르신도 함께 배우는 진짜 교실입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          {/* 12명 SVG 교실 배치도 */}
          <div className="bg-white rounded-2xl p-8 shadow-card-md">
            <div className="text-center mb-4">
              <div className="inline-block bg-navy text-white text-[11px] font-extrabold px-4 py-2 rounded-md">
                📺 50인치 모니터
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center text-2xl shadow-card-sm"
                >
                  {["👵🏻", "👴🏻", "👵🏼", "👴🏼"][i % 4]}
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-text-light mt-4 font-semibold">
              메디스타워 213호 · 3×4 배치 · 정원 12명
            </div>
          </div>

          {/* 4특징 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { ic: "🎙️", title: "음성 인식 (STT)", desc: "마이크에 말하면 자동으로 글씨가 됩니다. 손가락 어려우셔도 OK" },
              { ic: "🔊", title: "음성 출력 (TTS)", desc: "AI 답변을 큰 소리로 읽어드립니다. 시력 약하셔도 OK" },
              { ic: "🔠", title: "60px 큰 글씨", desc: "50인치 모니터에서도 잘 보이는 어르신 전용 큰 글씨" },
              { ic: "🤖", title: "Gemini AI", desc: "어르신 눈높이로 쉽게 답해주는 한국어 전용 AI 선생님" },
            ].map((it, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card-sm hover:shadow-card-md transition-shadow">
                <div className="text-4xl mb-3">{it.ic}</div>
                <h4 className="font-extrabold text-base text-text mb-2 tracking-tight">{it.title}</h4>
                <p className="text-[13.5px] text-text-mute leading-[1.7]">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/education/ai-teacher"
            className="inline-flex items-center gap-2 bg-yellow-strong text-white px-8 py-4 rounded-full font-extrabold text-base shadow-[0_8px_22px_rgba(245,180,0,0.28)] hover:bg-orange hover:-translate-y-[2px] transition-all"
          >
            AI 선생님 직접 체험해보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

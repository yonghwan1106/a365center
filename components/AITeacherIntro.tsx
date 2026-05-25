import Link from "next/link";
import Image from "next/image";

export default function AITeacherIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FFFBEB]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy text-white px-4 py-[6px] rounded-md text-xs font-extrabold tracking-wider mb-4">
            ★ NEW · 차별화 운영
          </span>
          <h2 className="text-[28px] font-extrabold leading-[1.28] tracking-tight text-text md:text-[34px]">
            50인치 모니터 앞
            <br className="sm:hidden" /> 어르신 12명 교실
            <br />
            <span className="text-yellow-strong">
              AI 선생님이
              <br className="sm:hidden" /> 직접 가르칩니다
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] leading-[1.75] text-text-mute md:text-[17px]">
            대표가 직접 코딩한 AI 선생님 파일럿.
            <br className="hidden md:block" />
            음성 인식·음성 출력·큰 글씨로 함께 배우는 교실입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-card-md">
            <Image
              src="/images/generated/ai-teacher-classroom-card.png"
              alt="AI 선생님 교실 카드뉴스"
              width={2048}
              height={1280}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="h-auto w-full"
            />
            <div className="px-5 py-4 text-center text-xs font-semibold text-text-light">
              메디스타워 213호 · 3×4 배치 · 정원 12명
            </div>
          </div>

          {/* 4특징 */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { ic: "🎙️", title: "음성 인식 (STT)", desc: "마이크에 말하면 자동으로 글씨가 됩니다. 손가락 어려우셔도 OK" },
              { ic: "🔊", title: "음성 출력 (TTS)", desc: "AI 답변을 큰 소리로 읽어드립니다. 시력 약하셔도 OK" },
              { ic: "🔠", title: "60px 큰 글씨", desc: "50인치 모니터에서도 잘 보이는 어르신 전용 큰 글씨" },
              { ic: "🤖", title: "Gemini AI", desc: "어르신 눈높이로 쉽게 답해주는 한국어 전용 AI 선생님" },
            ].map((it, i) => (
              <div key={i} className="min-w-0 rounded-2xl bg-white p-6 shadow-card-sm transition-shadow hover:shadow-card-md">
                <div className="text-4xl mb-3" aria-hidden="true">{it.ic}</div>
                <h4 className="font-extrabold text-base text-text mb-2 tracking-tight">{it.title}</h4>
                <p className="text-[13.5px] text-text-mute leading-[1.7]">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/education/ai-teacher"
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-yellow-strong px-6 py-4 text-base font-extrabold text-white shadow-[0_8px_22px_rgba(245,180,0,0.28)] transition-all hover:-translate-y-[2px] hover:bg-orange sm:px-8"
          >
            AI 선생님 직접 체험해보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

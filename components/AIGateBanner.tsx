// 챗지피티·제미나이 배움터 바로가기 — 전 페이지 공통 하단 띠배너 (2026-07-09 김재완 대표 요청)
// 복제 사이트: gpt.a365.or.kr / gemini.a365.or.kr (Vercel a365-gpt · a365-gemini)
const GATES = [
  {
    href: "https://gpt.a365.or.kr",
    label: "챗지피티 가는 길",
    desc: "챗GPT(ChatGPT)와 함께 배우는 곳",
    addr: "gpt.a365.or.kr",
    chipClass: "bg-[#10A37F]",
    arrowClass: "bg-[#10A37F]",
    icon: (
      // 말풍선 (챗GPT)
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path
          d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.6 3.2 6.1L5.5 21l4-1.7c.8.2 1.6.3 2.5.3 5 0 9-3.6 9-8S17 3 12 3Z"
          fill="#fff"
        />
        <circle cx="8.5" cy="11" r="1.3" fill="#10A37F" />
        <circle cx="12" cy="11" r="1.3" fill="#10A37F" />
        <circle cx="15.5" cy="11" r="1.3" fill="#10A37F" />
      </svg>
    ),
  },
  {
    href: "https://gemini.a365.or.kr",
    label: "제미나이 가는 길",
    desc: "구글 제미나이(Gemini)와 함께 배우는 곳",
    addr: "gemini.a365.or.kr",
    chipClass: "bg-[linear-gradient(135deg,#4285F4,#9B72CB)]",
    arrowClass: "bg-[#4285F4]",
    icon: (
      // 네 꼭지 반짝별 (제미나이)
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path
          d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

export default function AIGateBanner() {
  return (
    <section className="bg-navy py-10 md:py-12" aria-label="AI 배움터 바로가기">
      <div className="wrap">
        <div className="mb-6 text-center md:mb-8">
          <p className="text-[21px] font-extrabold leading-[1.4] text-white md:text-[24px]">
            인공지능(AI) 배움터 <span className="text-yellow-strong">바로가기</span>
          </p>
          <p className="mt-2 text-[15px] leading-[1.7] text-white/70 md:text-[16px]">
            아래 배너를 누르시면 새 화면으로 열립니다
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-4 md:flex-row md:gap-6">
          {GATES.map((g) => (
            <a
              key={g.addr}
              href={g.href}
              target="_blank"
              rel="noopener"
              aria-label={`${g.label} — ${g.desc} (새 창으로 열림)`}
              className="flex flex-1 items-center gap-4 rounded-2xl bg-bg-card p-5 shadow-card-md transition-transform hover:-translate-y-[3px] md:p-6"
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full md:h-16 md:w-16 ${g.chipClass}`}
              >
                {g.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block break-keep text-[20px] font-extrabold leading-[1.35] text-text md:text-[22px]">
                  {g.label}
                </span>
                <span className="mt-1 block break-keep text-[14px] leading-[1.6] text-text-mute md:text-[14.5px]">
                  {g.desc}
                </span>
                <span className="mt-0.5 block text-[13px] font-semibold text-text-light">
                  {g.addr}
                </span>
              </span>
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[22px] font-extrabold text-white ${g.arrowClass}`}
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

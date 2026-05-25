export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(251,245,235,0.94)] backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-between min-h-[72px] gap-3 py-3 lg:h-[74px] lg:gap-5 lg:py-0">
        <a href="/" aria-label="우리함께 평생교육·나눔센터 홈" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80">
          <div className="relative h-11 w-11 flex-shrink-0 md:h-12 md:w-12">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g transform="translate(24 24)">
                <circle r="3" fill="#E53935" />
                <ellipse cx="0" cy="-12" rx="4" ry="6" fill="#F59E0B" opacity="0.85" />
                <ellipse cx="11" cy="-4" rx="4" ry="6" fill="#F59E0B" opacity="0.85" transform="rotate(72)" />
                <ellipse cx="7" cy="10" rx="4" ry="6" fill="#F59E0B" opacity="0.85" transform="rotate(144)" />
                <ellipse cx="-7" cy="10" rx="4" ry="6" fill="#F59E0B" opacity="0.85" transform="rotate(216)" />
                <ellipse cx="-11" cy="-4" rx="4" ry="6" fill="#F59E0B" opacity="0.85" transform="rotate(288)" />
              </g>
              <text x="24" y="46" textAnchor="middle" fontFamily="Pretendard" fontWeight="800" fontSize="8" fill="#1F2937">함께</text>
            </svg>
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-extrabold tracking-tight text-text sm:text-[17px]">우리함께 평생교육·나눔센터</span>
            <span className="mt-px truncate text-[10.5px] tracking-wide text-text-light sm:text-[11px]">경인장애인선교회 · 경인 공익네트워크</span>
          </div>
        </a>
        <nav className="hidden lg:block">
          <ul className="flex list-none gap-4 xl:gap-6">
            {[
              { href: "/about", label: "소개" },
              { href: "/education", label: "디지털 교육" },
              { href: "/education/ai-teacher", label: "AI 선생님" },
              { href: "/certificate", label: "자격과정" },
              { href: "/pillars", label: "나눔 사역" },
              { href: "/citizen-journalist", label: "시민기자단" },
              { href: "/support", label: "참여·후원" },
              { href: "/contact", label: "오시는 길" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="py-2 text-[13.5px] font-bold text-text transition-colors hover:text-red xl:text-[14.5px]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="tel:010-9867-3121"
          className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-red px-3 py-2.5 text-[13px] font-extrabold text-white shadow-[0_6px_18px_rgba(229,57,53,0.30)] transition-all hover:-translate-y-px hover:bg-red-dark sm:gap-2 sm:px-4 sm:py-[11px] sm:text-[14px] xl:px-[22px] xl:text-[15px]"
        >
          <span aria-hidden="true">☎</span>
          <span className="hidden sm:inline">010-9867-3121</span>
          <span className="sm:hidden">상담</span>
        </a>
      </div>
    </header>
  );
}

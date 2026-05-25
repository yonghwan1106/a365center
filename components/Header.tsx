export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(251,245,235,0.94)] backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-between h-[74px] gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex-shrink-0 relative">
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
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-[17px] text-text tracking-tight">우리함께 평생교육·나눔센터</span>
            <span className="text-[11px] text-text-light mt-px tracking-wide">경인장애인선교회 · 경인 공익네트워크</span>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            {[
              { href: "#about", label: "센터소개" },
              { href: "#education", label: "디지털 교육" },
              { href: "/education/ai-teacher", label: "AI 선생님" },
              { href: "#pillars", label: "나눔 사역" },
              { href: "#pillars", label: "푸드뱅크" },
              { href: "#pillars", label: "시민기자단" },
              { href: "#contact", label: "오시는 길" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="font-semibold text-[15px] text-text py-2 hover:text-red transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="tel:010-9867-3121"
          className="inline-flex items-center gap-2 bg-red text-white px-[22px] py-[11px] rounded-full font-extrabold text-[15px] shadow-[0_6px_18px_rgba(229,57,53,0.30)] hover:bg-red-dark hover:-translate-y-px transition-all"
        >
          <span>📞</span>010-9867-3121
        </a>
      </div>
    </header>
  );
}

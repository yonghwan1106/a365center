export default function Footer() {
  return (
    <footer className="relative bg-navy-deep pt-12 pb-8 text-[13.5px] text-white/75">
      <div className="wrap">
        <div className="mb-6 max-w-4xl text-xs leading-[1.7] text-white/55">
          사단법인 경인교회 · 경인장애인선교회 부설 · 우리함께 평생교육·나눔센터 · 경인AI디지털교육자격협회 · 연합푸드뱅크 · 경인 평생교육·나눔 사회적협동조합 통합 운영
        </div>

        <div className="mb-9 grid grid-cols-2 gap-7 md:grid-cols-4">
          {/* 1. 소개 */}
          <div>
            <h5 className="mb-[14px] text-[13.5px] font-extrabold tracking-wide text-white">소개</h5>
            <ul className="list-none space-y-1.5">
              {[
                ["/about", "센터 개요"],
                ["/about/greeting", "대표 인사말"],
                ["/about/identity", "정체성 (4조직)"],
                ["/about/history", "연혁"],
                ["/about/organization", "조직도"],
                ["/about/certificate", "고유번호증"],
                ["/about/documents", "정관·규정"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. 사업 */}
          <div>
            <h5 className="mb-[14px] text-[13.5px] font-extrabold tracking-wide text-white">사업</h5>
            <ul className="list-none space-y-1.5">
              {[
                ["/education", "디지털 교육"],
                ["/education/curriculum", "4단계 커리큘럼"],
                ["/education/ai-teacher", "AI 선생님 교실"],
                ["/education/apply", "온라인 신청"],
                ["/certificate", "민간자격 (준비 중)"],
                ["/foodbank", "연합푸드뱅크"],
                ["/pillars", "나눔 사역"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 자료 */}
          <div>
            <h5 className="mb-[14px] text-[13.5px] font-extrabold tracking-wide text-white">자료</h5>
            <ul className="list-none space-y-1.5">
              {[
                ["/about/certificate", "고유번호증 (워터마크)"],
                ["/about/documents", "정관·운영규정 PDF"],
                ["/citizen-journalist", "시민기자단"],
                ["/news", "알림마당"],
                ["/education/faq", "교육 FAQ"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. 연락 */}
          <div>
            <h5 className="mb-[14px] text-[13.5px] font-extrabold tracking-wide text-white">연락</h5>
            <ul className="list-none space-y-2 text-[13px] leading-[1.7]">
              <li>📍 경기도 용인특례시 기흥구<br />동백죽전대로 341, 213호<br />(메디스타워)</li>
              <li>☎ 010-9867-3121<br />· 010-7708-7006</li>
              <li>✉ admin@a365center.or.kr</li>
              <li>🌐 a365center.or.kr</li>
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a href="/support/donate" className="inline-flex items-center justify-center rounded-md bg-yellow-strong/90 px-3 py-2 text-[12.5px] font-extrabold text-[#3F2700] hover:bg-yellow-strong">
                💛 후원 안내
              </a>
              <a href="/support/volunteer" className="inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2 text-[12.5px] font-extrabold text-white hover:bg-white/10">
                🤝 봉사 신청
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs leading-[1.6] text-white/45">
          <div>© 2026 경인장애인선교회 · 우리함께 평생교육·나눔센터. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/about/certificate" className="hover:text-white">고유번호증</a>
            <a href="/about/documents" className="hover:text-white">정관 PDF</a>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

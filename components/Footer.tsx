export default function Footer() {
  return (
    <footer className="relative bg-navy-deep pt-12 pb-8 text-[13.5px] text-white/75">
      <div className="wrap">
        <div className="mb-6 max-w-4xl text-xs leading-[1.7] text-white/55">
          사단법인 베수공동체 부설 우리함께 평생교육·나눔센터 · 경인장애인선교회 부설 · 시민기자단 협력 운영기관
        </div>
        <div className="mb-9 grid grid-cols-1 gap-9 md:grid-cols-[1.35fr_0.85fr_1.15fr]">
          <div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-lg font-extrabold">우리함께 평생교육·나눔센터</span>
              <span className="text-white/55 text-xs mt-[2px]">경인장애인선교회 · 경인 공익네트워크</span>
            </div>
            <p className="mt-4 text-[13px] leading-[1.9]">
              경기도 용인특례시 기흥구
              <br />
              동백죽전대로 341, 213호 (메디스타워)
              <br />
              <br />
              ☎ 010-9867-3121 · 010-7708-7006
              <br />
              ✉ admin@a365center.or.kr
            </p>
          </div>
          <div>
            <h5 className="text-white text-[13.5px] font-extrabold mb-[14px] tracking-wide">바로가기</h5>
            <ul className="list-none space-y-1">
              {[
                ["/about", "센터 소개"],
                ["/education", "디지털 교육"],
                ["/education/ai-teacher", "AI 선생님"],
                ["/pillars", "나눔 사역"],
                ["/citizen-journalist", "시민기자단"],
                ["/foodbank", "푸드뱅크"],
              ].map(([h, l], i) => (
                <li key={i}>
                  <a href={h} className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[13.5px] font-extrabold mb-[14px] tracking-wide">연락처</h5>
            <ul className="list-none space-y-2 leading-[1.75]">
              <li>주소: 경기도 용인특례시 기흥구 동백죽전대로 341, 213호</li>
              <li>전화: 010-9867-3121 · 010-7708-7006</li>
              <li>이메일: admin@a365center.or.kr</li>
              <li>홈페이지: a365center.or.kr</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs leading-[1.6] text-white/45">
          <div>© 2026 경인장애인선교회 · 우리함께 평생교육·나눔센터. All rights reserved.</div>
          <div>고유번호증 · 정관 PDF · 개인정보처리방침</div>
        </div>
      </div>
    </footer>
  );
}

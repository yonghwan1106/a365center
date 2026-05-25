export default function Hero() {
  return (
    <section className="py-[60px] pb-20">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <span className="inline-block bg-yellow text-[#92400E] font-bold text-sm px-4 py-[7px] rounded-md mb-6 tracking-tight">
            메디스타워 213호 작은 공간에서 시작된 큰 기적
          </span>
          <h1 className="font-black text-[34px] md:text-[50px] leading-[1.2] tracking-tighter text-text mb-6">
            <span className="text-red">스마트폰 못하셔도 됩니다</span>
            <br />
            지금부터 배우고,
            <br />
            일자리까지 연결해드립니다
          </h1>
          <div className="text-text-mute text-[17px] leading-[1.75] mb-8">
            <b className="text-text font-bold">40~70대 어르신·장애인 대상</b>
            <br />
            100% 무료 · 교재비 없음 · 바로 시작 가능
          </div>
          <div className="flex gap-3 mb-6 flex-wrap">
            <a
              href="tel:010-9867-3121"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-extrabold text-base bg-red text-white shadow-[0_8px_22px_rgba(229,57,53,0.28)] hover:bg-red-dark hover:-translate-y-[2px] transition-all"
            >
              📞 지금 전화 상담
            </a>
            <a
              href="#education"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-extrabold text-base bg-navy text-white hover:bg-navy-deep hover:-translate-y-[2px] transition-all"
            >
              📝 무료 수업 신청
            </a>
          </div>
          <div className="flex items-center gap-[10px] px-5 py-[14px] bg-yellow rounded-xl text-sm text-[#7C2D12] font-semibold border-l-4 border-yellow-strong">
            <span className="text-xl">👉</span>
            <span>
              <strong>5월 교육생 모집 중</strong> (선착순 10명) · 창소반 곧 마감입니다.
            </span>
          </div>
        </div>
        <div className="relative">
          <div
            className="aspect-[1.2/1] rounded-3xl overflow-hidden relative flex items-center justify-center shadow-[0_24px_48px_rgba(31,41,55,0.18)]"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 50%), linear-gradient(135deg, #E8C99B 0%, #C9A678 60%, #8E7050 100%)",
            }}
          >
            <div className="text-center text-[64px] md:text-[96px] leading-[1.05] tracking-widest drop-shadow-md">
              👨🏻‍🦳👵🏻📱
              <br />
              👴🏻📱👵🏼
            </div>
            <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs font-bold text-text whitespace-nowrap shadow-card-sm">
              📷 메디스타워 213호 · 실제 교육 현장 (실사 교체 예정)
            </div>
          </div>
          <div className="md:absolute md:-bottom-8 md:-right-3 mt-4 md:mt-0 bg-white rounded-2xl px-[22px] py-[18px] shadow-card-lg flex gap-[18px]">
            {[
              { ic: "🚇", label: "동백역 도보\n5분", bg: "bg-yellow", color: "text-[#92400E]" },
              { ic: "🏠", label: "213호 실제\n교육 현장", bg: "bg-[#DBEAFE]", color: "text-[#1E40AF]" },
              { ic: "💼", label: "수강 후\n일자리 연계", bg: "bg-[#D1FAE5]", color: "text-[#065F46]" },
            ].map((it, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center min-w-[90px]">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-[22px] ${it.bg} ${it.color}`}>
                  {it.ic}
                </div>
                <div className="text-[12.5px] font-bold text-text leading-[1.4] whitespace-pre-line">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

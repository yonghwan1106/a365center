import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-10 pb-14 md:pt-12 md:pb-16">
      <div className="wrap grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0">
          <span className="mb-5 inline-block rounded-md bg-yellow px-4 py-[7px] text-sm font-bold tracking-tight text-[#92400E]">
            메디스타워 213호 작은 공간에서 시작된 큰 기적
          </span>
          <h1 className="break-keep text-[34px] font-black leading-[1.18] tracking-tight text-text md:text-[48px] lg:text-[50px]">
            <span className="text-red">스마트폰 못하셔도 됩니다</span>
            <br />
            지금부터 배우고,
            <br />
            일자리까지 연결해드립니다
          </h1>
          <div className="mb-8 text-[17px] leading-[1.75] text-text-mute">
            <b className="text-text font-bold">40~70대 어르신·장애인 대상</b>
            <br />
            100% 무료 · 교재비 없음 · 바로 시작 가능
          </div>
          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href="tel:010-9867-3121"
              className="inline-flex items-center gap-2 rounded-xl bg-red px-6 py-4 text-base font-extrabold text-white shadow-[0_8px_22px_rgba(229,57,53,0.28)] transition-all hover:-translate-y-[2px] hover:bg-red-dark sm:px-7"
            >
              ☎ 지금 전화 상담
            </a>
            <a
              href="#education"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-4 text-base font-extrabold text-white transition-all hover:-translate-y-[2px] hover:bg-navy-deep sm:px-7"
            >
              📝 무료 수업 신청
            </a>
          </div>
          <div className="flex max-w-xl items-start gap-[10px] rounded-xl border border-[#F7D981] border-l-4 border-l-yellow-strong bg-yellow px-5 py-[14px] text-sm font-semibold leading-[1.65] text-[#7C2D12] shadow-card-sm">
            <span className="text-xl leading-none">☞</span>
            <span>
              <strong>5월 교육생 모집 중</strong> (선착순 10명) · 창업반 곧 마감입니다.
            </span>
          </div>
        </div>
        <div className="relative min-w-0">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_24px_48px_rgba(31,41,55,0.16)] md:rounded-3xl">
            <Image
              src="/images/generated/hero-senior-smartphone-class.png"
              alt="어르신들이 강사와 함께 스마트폰을 배우는 교육 현장"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-white/92 px-4 py-2 text-xs font-bold leading-none text-text shadow-card-sm backdrop-blur">
              메디스타워 213호 · 어르신 디지털 교육 현장
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 rounded-2xl border border-line bg-white px-4 py-4 shadow-card-lg sm:grid-cols-3 md:gap-3 md:px-5 md:py-5">
            {[
              { ic: "🚇", label: "동백역 도보\n5분", bg: "bg-yellow", color: "text-[#92400E]" },
              { ic: "🏠", label: "213호 실제\n교육 현장", bg: "bg-[#DBEAFE]", color: "text-[#1E40AF]" },
              { ic: "💼", label: "수강 후\n일자리 연계", bg: "bg-[#D1FAE5]", color: "text-[#065F46]" },
            ].map((it, i) => (
              <div key={i} className="flex min-w-0 flex-row items-center justify-center gap-3 text-center sm:flex-col sm:gap-2 md:min-w-[90px]">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-[20px] sm:h-11 sm:w-11 sm:text-[22px] ${it.bg} ${it.color}`}>
                  {it.ic}
                </div>
                <div className="whitespace-pre-line text-[12px] font-bold leading-[1.4] text-text sm:text-[12.5px]">
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

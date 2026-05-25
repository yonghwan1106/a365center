import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 pb-16 md:py-[60px] md:pb-20">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="min-w-0">
          <span className="inline-block bg-yellow text-[#92400E] font-bold text-sm px-4 py-[7px] rounded-md mb-6 tracking-tight">
            메디스타워 213호 작은 공간에서 시작된 큰 기적
          </span>
          <h1 className="break-keep text-[34px] font-black leading-[1.2] tracking-tight text-text md:text-[50px]">
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
          <div className="flex items-start gap-[10px] rounded-xl border-l-4 border-yellow-strong bg-yellow px-5 py-[14px] text-sm font-semibold text-[#7C2D12]">
            <span className="text-xl leading-none">☞</span>
            <span>
              <strong>5월 교육생 모집 중</strong> (선착순 10명) · 창소반 곧 마감입니다.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_24px_48px_rgba(31,41,55,0.16)] md:rounded-3xl">
            <Image
              src="/images/generated/hero-senior-smartphone-class.png"
              alt="어르신들이 강사와 함께 스마트폰을 배우는 교육 현장"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-full bg-white/92 px-4 py-2 text-center text-xs font-bold text-text shadow-card-sm backdrop-blur">
              메디스타워 213호 · 어르신 디지털 교육 현장
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 rounded-2xl bg-white px-4 py-4 shadow-card-lg sm:grid-cols-3 md:absolute md:-bottom-8 md:-right-3 md:mt-0 md:flex md:gap-[18px] md:px-[22px] md:py-[18px]">
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

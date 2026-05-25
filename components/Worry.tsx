export default function Worry() {
  return (
    <section className="bg-bg pt-12 pb-10 md:pt-14 md:pb-12">
      <div className="wrap">
        <h2 className="mb-8 text-center text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:mb-10 md:text-3xl">
          혹시 이런 고민 있으신가요?
        </h2>
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[repeat(3,1fr)_56px_1.1fr] md:gap-5">
          {[
            { face: "📱", text: "스마트폰이\n너무 어렵다" },
            { face: "🏥", text: "병원 예약을\n혼자 못 한다" },
            { face: "💰", text: "나도 돈 벌 수 있을까\n고민된다" },
          ].map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-white px-5 py-7 text-center shadow-card-sm transition-all hover:-translate-y-[3px] hover:shadow-card-md"
            >
              <div className="mb-3 text-[42px] leading-none">{it.face}</div>
              <p className="font-bold text-[15.5px] text-text leading-[1.55] whitespace-pre-line">{it.text}</p>
            </div>
          ))}
          <div className="hidden items-center justify-center text-4xl font-black text-yellow-strong md:flex">
            ➜
          </div>
          <div className="flex rotate-90 items-center justify-center py-2 text-4xl font-black text-yellow-strong md:hidden">
            ➜
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-[#F7D981] bg-yellow px-6 py-7 text-center text-2xl font-extrabold leading-[1.35] tracking-tight text-yellow-strong shadow-card-sm">
            <div>
              여기서
              <br />
              <span className="text-red block">모두 해결됩니다!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

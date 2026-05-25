export default function Worry() {
  return (
    <section className="pt-20 pb-[60px]">
      <div className="wrap">
        <h2 className="mb-12 text-center text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:text-3xl">
          혹시 이런 고민 있으신가요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(3,1fr)_auto_1fr] gap-5 items-stretch">
          {[
            { face: "📱", text: "스마트폰이\n너무 어렵다" },
            { face: "🏥", text: "병원 예약을\n혼자 못 한다" },
            { face: "💰", text: "나도 돈 벌 수 있을까\n고민된다" },
          ].map((it, i) => (
            <div
              key={i}
              className="bg-white px-[22px] py-8 rounded-[18px] text-center border border-line hover:-translate-y-[3px] hover:shadow-card-md transition-all"
            >
              <div className="text-5xl mb-3">{it.face}</div>
              <p className="font-bold text-[15.5px] text-text leading-[1.55] whitespace-pre-line">{it.text}</p>
            </div>
          ))}
          <div className="hidden md:flex items-center justify-center text-yellow-strong text-4xl font-black">
            ➜
          </div>
          <div className="md:hidden flex items-center justify-center text-yellow-strong text-4xl font-black rotate-90 py-2">
            ➜
          </div>
          <div className="flex items-center justify-center text-center font-extrabold text-2xl text-yellow-strong leading-[1.4] tracking-tight p-6">
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

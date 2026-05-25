export default function Proof() {
  return (
    <section className="py-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-9">
        {/* 후기 */}
        <div>
          <div className="text-center mb-6">
            <h3 className="font-extrabold text-[22px] text-text tracking-tight">실제 수강생 이야기</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { initial: "김", quote: "스마트폰도 몰랐는데 지금은 손주랑 카톡합니다.", who: "— 김○○님 (68세)", grad: "from-[#E8C99B] to-[#8E7050]" },
              { initial: "박", quote: "처음으로 온라인 수익이 생겼어요.", who: "— 박○○님 (63세)", grad: "from-[#A8B5A0] to-[#5C7060]" },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-line rounded-[18px] p-[22px] flex gap-[14px] items-start">
                <div className={`w-16 h-16 rounded-full flex-shrink-0 bg-gradient-to-br ${r.grad} flex items-center justify-center text-white font-extrabold text-2xl shadow-card-sm`}>
                  {r.initial}
                </div>
                <div>
                  <div className="font-bold text-[15px] text-text leading-[1.65]">
                    <span className="text-yellow-strong text-lg mr-px">“</span>
                    {r.quote}
                    <span className="text-yellow-strong text-lg ml-px">”</span>
                  </div>
                  <div className="text-[12.5px] text-text-light mt-2 font-semibold">{r.who}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 숫자 */}
        <div>
          <div className="text-center mb-6">
            <h3 className="font-extrabold text-[22px] text-text tracking-tight">숫자로 보는 우리함께</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { ic: "🏠", v: "213호", l: "메디스타워 현장", bg: "bg-yellow", color: "text-[#92400E]" },
              { ic: "🎓", v: "4단계", l: "디지털 교육", bg: "bg-[#DBEAFE]", color: "text-[#1E40AF]" },
              { ic: "🤝", v: "3사역", l: "나눔 활동", bg: "bg-[#FED7AA]", color: "text-[#9A3412]" },
              { ic: "💝", v: "100%", l: "무료 운영", bg: "bg-[#FEE2E2]", color: "text-[#991B1B]" },
            ].map((n, i) => (
              <div key={i} className="bg-white border border-line rounded-2xl p-5 flex gap-[14px] items-center">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${n.bg} ${n.color}`}>
                  {n.ic}
                </div>
                <div>
                  <div className="font-extrabold text-[22px] text-text tracking-tight leading-[1.1]">{n.v}</div>
                  <div className="text-[12.5px] text-text-light font-semibold mt-[3px]">{n.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

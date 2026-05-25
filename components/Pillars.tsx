export default function Pillars() {
  const items = [
    {
      tag: "01",
      tagBg: "bg-[#92400E]",
      thumbGrad: "from-[#FED7AA] to-[#FBBF24]",
      thumb: "🍱",
      title: "푸드뱅크",
      desc: "지역 협력 네트워크 기반 정기적인 식품 나눔 사업.",
      stat: (
        <>
          연간 <b className="text-text font-extrabold">500가구 지원</b>
          <br />월 <b className="text-text font-extrabold">120kg 식품 배송</b>
        </>
      ),
    },
    {
      tag: "02",
      tagBg: "bg-[#1E40AF]",
      thumbGrad: "from-[#BFDBFE] to-[#3B82F6]",
      thumb: "🏫",
      title: "공간 공유",
      desc: "14평 공간을 작은 모임, 교육 프로그램에 무료로 개방합니다.",
      stat: (
        <>
          계약요금 무료 제공
          <br />
          <b className="text-text font-extrabold">비영리 단체</b> 활동
        </>
      ),
    },
    {
      tag: "03",
      tagBg: "bg-[#4338CA]",
      thumbGrad: "from-[#C7D2FE] to-[#6366F1]",
      thumb: "📰",
      title: "시민기자단",
      desc: "경인블루저널과 연계한 시민기자단 활동.",
      stat: (
        <>
          지역 어르신 양성
          <br />
          <b className="text-text font-extrabold">월간 5건 활동</b>
        </>
      ),
    },
  ];

  return (
    <section id="pillars" className="py-20">
      <div className="wrap">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-3xl text-text tracking-tight">이웃과 함께하는 세 가지 사역</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href="#" className="group bg-white border border-line rounded-[20px] overflow-hidden hover:-translate-y-[6px] hover:shadow-card-lg transition-all">
              <div className={`aspect-[16/10] relative overflow-hidden flex items-center justify-center text-[56px] bg-gradient-to-br ${p.thumbGrad}`}>
                {p.thumb}
              </div>
              <div className="p-6 pb-7">
                <span className={`inline-block text-white font-extrabold text-[11.5px] px-[10px] py-[3px] rounded-md tracking-wider mb-[10px] ${p.tagBg}`}>
                  {p.tag}
                </span>
                <h4 className="font-extrabold text-[19px] text-text mb-2 tracking-tight">{p.title}</h4>
                <p className="text-sm text-text-mute leading-[1.75]">{p.desc}</p>
                <div className="mt-[14px] pt-[14px] border-t border-dashed border-line text-[13px] text-text-light font-semibold">
                  {p.stat}
                </div>
                <div className="mt-[14px] text-text font-bold text-[13.5px] inline-flex gap-1 border-b border-text pb-[2px] group-hover:text-red group-hover:border-red">
                  자세히 보기 →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

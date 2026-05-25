import Image from "next/image";

export default function Steps() {
  const steps = [
    { ribbon: "STEP 01", color: "bg-green", face: "📱", title: "스마트폰 기초반", desc: "전원 켜기부터\n카카오톡·카메라까지" },
    { ribbon: "STEP 02", color: "bg-blue", face: "💳", title: "생활 활용반", desc: "은행·쇼핑·예약\n일상을 편리하게" },
    { ribbon: "STEP 03", color: "bg-orange", face: "🤖", title: "AI 실무반", desc: "챗GPT·공부·창작\n내 인생을 업그레이드" },
    { ribbon: "STEP 04", color: "bg-red-step", face: "📈", title: "수익창출반", desc: "스마트스토어·유튜브\n재능 마켓 등\n수익 만들기" },
  ];

  return (
    <section id="education" className="py-20">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="text-text-light font-semibold text-sm tracking-wider mb-[10px]">
            배우고 끝이 아닙니다
          </div>
          <h2 className="text-[27px] font-extrabold leading-[1.3] tracking-tight text-text md:text-3xl">
            일상 자립 <span className="text-yellow-strong">+</span>
            <br className="sm:hidden" /> 실제 수익까지 연결합니다
          </h2>
        </div>
        <div className="mb-8 min-w-0 overflow-hidden rounded-2xl border border-line bg-white shadow-card-md">
          <Image
            src="/images/generated/education-roadmap-card.png"
            alt="스마트폰 기초부터 수익 창출까지 이어지는 4단계 교육 로드맵"
            width={2048}
            height={1280}
            sizes="(max-width: 768px) 100vw, 1180px"
            className="h-auto w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative bg-white border border-line rounded-[18px] px-[22px] py-7 min-h-[200px] flex flex-col hover:-translate-y-1 hover:shadow-card-md transition-all"
            >
              <span className={`absolute -top-3 left-[18px] px-[14px] py-[5px] rounded-md text-white font-extrabold text-xs tracking-wider ${s.color}`}>
                {s.ribbon}
              </span>
              <div className="text-[38px] my-2 mb-[10px]">{s.face}</div>
              <h5 className="font-extrabold text-[17px] text-text mb-2 tracking-tight">{s.title}</h5>
              <p className="text-[13.5px] text-text-mute leading-[1.7] whitespace-pre-line">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <a href="#" className="text-text font-bold text-sm border-b border-text pb-[2px] hover:text-red hover:border-red transition-colors">
            전체 교육 과정 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

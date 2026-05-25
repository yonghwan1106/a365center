import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  const steps = [
    { ribbon: "STEP 01", color: "bg-green", face: "📱", title: "스마트폰 기초반", desc: "전원 켜기부터\n카카오톡·카메라까지", href: "/education/smartphone-basic" },
    { ribbon: "STEP 02", color: "bg-blue", face: "💳", title: "생활 활용반", desc: "은행·쇼핑·예약\n일상을 편리하게", href: "/education/life-use" },
    { ribbon: "STEP 03", color: "bg-orange", face: "🤖", title: "AI 실무반", desc: "챗GPT·공부·창작\n내 인생을 업그레이드", href: "/education/ai-practical" },
    { ribbon: "STEP 04", color: "bg-red-step", face: "📈", title: "수익창출반", desc: "스마트스토어·유튜브\n재능 마켓 등\n수익 만들기", href: "/education/income" },
  ];

  return (
    <section id="education" className="scroll-mt-24 py-12 md:py-14">
      <div className="wrap">
        <div className="mb-10 text-center md:mb-12">
          <div className="text-text-light font-semibold text-sm tracking-wider mb-[10px]">
            배우고 끝이 아닙니다
          </div>
          <h2 className="text-[27px] font-extrabold leading-[1.3] tracking-tight text-text md:text-3xl">
            일상 자립 <span className="text-yellow-strong">+</span>
            <br className="sm:hidden" /> 실제 수익까지 연결합니다
          </h2>
        </div>
        <div className="mx-auto mb-9 flex min-w-0 justify-center overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-card-md md:max-w-[940px] md:p-4">
          <Image
            src="/images/generated/education-roadmap-card.png"
            alt="스마트폰 기초부터 수익 창출까지 이어지는 4단계 교육 로드맵"
            width={2048}
            height={1280}
            sizes="(max-width: 768px) 100vw, 940px"
            className="h-auto w-full object-contain md:max-h-[520px] md:w-auto"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="relative flex min-h-[148px] flex-col rounded-2xl border border-line bg-white px-5 py-6 shadow-card-sm transition-all hover:-translate-y-1 hover:shadow-card-md"
            >
              <span className={`absolute -top-3 left-[18px] px-[14px] py-[5px] rounded-md text-white font-extrabold text-xs tracking-wider ${s.color}`}>
                {s.ribbon}
              </span>
              <div className="mb-3 mt-1 text-[34px] leading-none">{s.face}</div>
              <h5 className="mb-2 text-[17px] font-extrabold tracking-tight text-text">{s.title}</h5>
              <p className="text-[13.5px] text-text-mute leading-[1.7] whitespace-pre-line">{s.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/education" className="text-sm font-bold text-text border-b border-text pb-[2px] transition-colors hover:border-red hover:text-red">
            전체 교육 과정 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

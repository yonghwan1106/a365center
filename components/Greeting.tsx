import Link from "next/link";

export default function Greeting() {
  return (
    <section id="greeting" className="bg-bg py-14 md:py-16">
      <div className="wrap">
        <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-white p-8 shadow-card-md md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-deep text-2xl font-extrabold text-white shadow-card-md md:h-20 md:w-20 md:text-[28px]">
              김
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-text-light">경인 공익네트워크 · 경인장애인선교회</div>
              <div className="text-xl font-extrabold tracking-tight text-text md:text-2xl">대표 김재완 인사말</div>
            </div>
          </div>

          <blockquote className="mb-6 break-keep rounded-xl border-l-4 border-yellow-strong bg-bg-soft px-6 py-5 text-[18px] font-bold leading-[1.7] text-text md:text-[20px]">
            “사랑의 복지와 미래를 여는 AI 기술로,<br />
            소외된 이웃과 늘 함께하겠습니다.”
          </blockquote>

          <div className="space-y-4 break-keep text-[15.5px] leading-[1.9] text-text-mute">
            <p>안녕하십니까. 경인 공익네트워크 대표 김재완입니다.</p>
            <p>
              저희 경인 공익네트워크는 <strong className="text-text">사단법인 경인교회와 경인장애인선교회의 신앙적 뿌리</strong> 위에서
              소외계층, 장애인, 어르신 등 우리 사회의 가장 따뜻한 손길이 필요한 이웃들을 보듬어 왔습니다.
            </p>
            <p>
              이제 우리는 한 걸음 더 나아가, 4차 산업혁명의 핵심인 <strong className="text-text">AI와 디지털 기술을 복지에 융합</strong>하고자 합니다.
              ‘우리함께 평생교육·나눔센터’와 ‘경인AI디지털교육자격협회’를 통해 누구나 디지털 시대의 주역이 될 수 있도록
              혁신적인 교육과 민간자격 과정을 전면 지원하며, ‘경인푸드뱅크’를 통해 이웃들의 든든한 삶의 울타리가 되어드리고 있습니다.
            </p>
            <p>
              복지와 교육, 그리고 미디어가 하나로 연결되는 이 거대한 사랑의 전선에 여러분의 따뜻한 관심과 동행을 부탁드립니다.
              <strong className="text-text"> 절망이 있는 곳에 소망을, 소외가 있는 곳에 디지털의 기회를 전하는 가장 투명하고 공신력 있는 동반자</strong>가 되겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <div className="text-sm font-bold text-text">경인 공익네트워크 대표 · 김재완</div>
            <Link
              href="/about/greeting"
              className="inline-flex items-center gap-1 text-sm font-bold text-navy-deep hover:text-red"
            >
              인사말 전문 보기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

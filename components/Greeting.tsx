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
              <div className="text-xl font-extrabold tracking-tight text-text md:text-2xl">AI교육센터장 김재완 인사말</div>
            </div>
          </div>

          <blockquote className="mb-6 break-keep rounded-xl border-l-4 border-yellow-strong bg-bg-soft px-6 py-5 text-[18px] font-bold leading-[1.7] text-text md:text-[20px]">
            “사랑의 복지와 미래를 여는 AI 기술로,<br />
            소외된 이웃과 늘 함께하겠습니다.”
          </blockquote>

          <div className="space-y-4 break-keep text-[15.5px] leading-[1.9] text-text-mute">
            <p>안녕하십니까. 경인 공익네트워크 AI교육센터장 김재완입니다.</p>
            <p>
              경인 공익네트워크는 지역사회 안에서 도움이 필요한 이웃과 함께하며, <strong className="text-text">교육·복지·나눔을 연결하는 공익 활동</strong>을 실천하고 있습니다.
            </p>
            <p>
              저희는 장애인, 어르신, AI와 디지털 활용이 낯선 시민들이 변화하는 시대 속에서 소외되지 않도록,
              <strong className="text-text"> 누구나 참여할 수 있는 무상 AI·디지털 교육</strong>을 준비하고 있습니다.
            </p>
            <p>
              또한 우리함께 평생교육·나눔센터, 경인AI디지털교육자격협회, 경인푸드뱅크 등과 연계하여
              교육, 민간자격 과정, 나눔, 지역 협력 활동을 단계적으로 넓혀가고자 합니다.
            </p>
            <p>
              복지와 교육, 그리고 공익 미디어가 함께 연결될 때 더 많은 이웃에게 실제적인 도움이 전해질 수 있다고 믿습니다.
            </p>
            <p>
              경인 공익네트워크는 앞으로도 투명하고 책임 있는 운영을 바탕으로,
              <strong className="text-text"> 절망이 있는 곳에 소망을, 배움이 필요한 곳에 기회를, 도움이 필요한 곳에 따뜻한 나눔을 전하는 동반자</strong>가 되겠습니다.
            </p>
            <p>따뜻한 관심과 동행을 부탁드립니다. 감사합니다.</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <div className="text-sm font-bold text-text">경인 공익네트워크 AI교육센터장 · 김재완</div>
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

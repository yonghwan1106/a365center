import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "AI교육센터장 인사말 — 우리함께 평생교육·나눔센터",
  description: "경인 공익네트워크 AI교육센터장 김재완 인사말 — 교육·복지·나눔을 연결하여 소외된 이웃과 늘 함께하겠습니다.",
};

export default function GreetingPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="AI교육센터장 인사말"
        title="교육·복지·나눔을 하나로 연결하여,"
        accent="소외된 이웃과 늘 함께하겠습니다."
        description="경인 공익네트워크 AI교육센터장 김재완이 전하는 인사말입니다. 누구나 참여할 수 있는 무상 AI·디지털 교육으로 변화하는 시대 속 소외를 줄여가는 단체의 철학과 비전을 담았습니다."
        image="/images/generated/representative-greeting-card.png"
        imageAlt="경인 공익네트워크 대표 김재완 인사말 이미지"
        actions={[
          { href: "/about/identity", label: "단체 정체성 보기", tone: "navy" },
          { href: "/about/history", label: "연혁 보기" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-8 shadow-card-md md:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-deep text-2xl font-extrabold text-white shadow-card-md md:h-20 md:w-20 md:text-[28px]">
                김
              </div>
              <div>
                <div className="text-sm font-semibold text-text-light">경인 공익네트워크</div>
                <div className="text-xl font-extrabold text-text md:text-2xl">AI교육센터장 · 김재완</div>
              </div>
            </div>

            <div className="space-y-5 break-keep text-[16px] leading-[1.95] text-text-mute md:text-[17px]">
              <p>안녕하십니까. 경인 공익네트워크 AI교육센터장 김재완입니다.</p>
              <p>
                경인 공익네트워크는 지역사회 안에서 도움이 필요한 이웃과 함께하며,
                <strong className="text-text"> 교육·복지·나눔을 연결하는 공익 활동</strong>을 실천하고 있습니다.
              </p>
              <p>
                저희는 장애인, 어르신, AI와 디지털 활용이 낯선 시민들이 변화하는 시대 속에서 소외되지 않도록,
                <strong className="text-text"> 누구나 참여할 수 있는 무상 AI·디지털 교육</strong>을 준비하고 있습니다.
              </p>
              <p>
                또한 ‘우리함께 평생교육·나눔센터’, ‘경인AI디지털교육자격협회’, ‘경인푸드뱅크’ 등과 연계하여
                교육, 민간자격 과정, 나눔, 지역 협력 활동을 단계적으로 넓혀가고자 합니다.
                복지와 교육, 그리고 공익 미디어가 함께 연결될 때 더 많은 이웃에게 실제적인 도움이 전해질 수 있다고 믿습니다.
              </p>
              <p>
                경인 공익네트워크는 앞으로도 투명하고 책임 있는 운영을 바탕으로,
                <strong className="text-text"> 절망이 있는 곳에 소망을, 배움이 필요한 곳에 기회를, 도움이 필요한 곳에 따뜻한 나눔을 전하는 동반자</strong>가 되겠습니다.
              </p>
              <p>따뜻한 관심과 동행을 부탁드립니다. 감사합니다.</p>
            </div>

            <div className="mt-8 border-t border-line pt-5 text-right">
              <div className="text-sm font-semibold text-text-light">경인 공익네트워크 AI교육센터장</div>
              <div className="mt-1 text-xl font-extrabold tracking-tight text-text">김재완</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="공모·취재·후원 문의는 전화 한 통으로"
        description="대표 직통 010-9867-3121 — 김재완 대표가 직접 응대합니다."
      />
    </SiteChrome>
  );
}

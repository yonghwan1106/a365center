import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "나눔 사역 — 우리함께 평생교육·나눔센터",
  description: "푸드뱅크, 공간 공유, 시민기자단으로 이어지는 우리함께의 세 가지 지역 사역.",
};

const pillars = [
  { href: "/foodbank", icon: "🥬", title: "푸드뱅크", desc: "지역 협력 네트워크를 통해 필요한 가정에 정기적인 식품 나눔을 연결합니다." },
  { href: "/space-sharing", icon: "🏠", title: "공간 공유", desc: "작은 모임, 교육, 비영리 활동에 213호 공간을 무료 또는 협력 방식으로 개방합니다." },
  { href: "/citizen-journalist", icon: "📝", title: "시민기자단", desc: "경인블루저널과 함께 지역 어르신의 이야기와 공익 활동을 기록합니다." },
];

export default function PillarsPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="나눔 사역"
        title="교육에서 끝나지 않고"
        accent="지역의 돌봄으로 이어집니다"
        description="우리함께는 배움의 공간이면서 동시에 나눔의 거점입니다. 푸드뱅크, 공간 공유, 시민기자단 활동을 통해 사람과 기관, 기록과 돌봄을 연결합니다."
        image="/images/generated/space-sharing-card.png"
        imageAlt="공간 공유와 지역 모임 카드뉴스"
        actions={[
          { href: "/foodbank", label: "푸드뱅크 보기" },
          { href: "/citizen-journalist", label: "시민기자단 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="세 가지 축"
            title="필요한 것을 나누고, 가능한 것을 함께 씁니다"
            description="각 사역은 따로 보이지만 현장에서는 서로 이어집니다. 교육에서 만난 이웃이 나눔을 받고, 기록자로 성장하고, 다시 지역을 돕는 구조입니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href} className="group block">
                <InfoCard icon={p.icon} title={p.title}>
                  <p>{p.desc}</p>
                  <span className="mt-4 inline-block border-b border-text pb-1 font-extrabold text-text group-hover:border-red group-hover:text-red">
                    자세히 보기 →
                  </span>
                </InfoCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-2">
          <InfoCard title="운영 기준">
            사역은 보여주기식 행사가 아니라 반복 가능한 연결이어야 합니다. 월별 기록, 수혜자 개인정보 보호, 협력기관 신뢰를 기준으로 운영합니다.
          </InfoCard>
          <InfoCard title="협력 제안">
            식품 후원, 강사 협력, 공간 이용, 지역 기록 활동을 함께할 기관과 개인을 환영합니다. 작은 협력도 현장에서는 큰 변화가 됩니다.
          </InfoCard>
        </div>
      </section>

      <CTASection
        title="함께할 방법이 있다면 연락주세요"
        description="후원, 봉사, 공간 이용, 기자단 활동을 한 번에 안내해드립니다."
      />
    </SiteChrome>
  );
}

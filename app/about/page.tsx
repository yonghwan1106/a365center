import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "센터소개 — 우리함께 평생교육·나눔센터",
  description: "메디스타워 213호에서 시작하는 어르신·장애인 디지털 교육과 나눔 사역의 운영 철학.",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="센터소개"
        title="작은 공간이지만"
        accent="다시 시작하는 힘을 만듭니다"
        description="우리함께 평생교육·나눔센터는 경인장애인선교회와 경인 공익네트워크가 함께 운영하는 지역 기반 배움·돌봄 허브입니다. 스마트폰을 어려워하는 어르신과 장애인이 일상 자립을 되찾고, 나눔 사역과 연결될 수 있도록 실제 현장에서 돕습니다."
        image="/images/generated/hero-senior-smartphone-class.png"
        imageAlt="어르신들이 스마트폰을 배우는 우리함께 교육 현장"
        actions={[
          { href: "tel:010-9867-3121", label: "전화 상담하기" },
          { href: "/education", label: "교육 과정 보기", tone: "navy" },
        ]}
      >
        <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3">
          {[
            ["213호", "현장 중심"],
            ["100%", "무료 운영"],
            ["3사역", "교육·나눔·기록"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-2xl border border-line bg-white px-4 py-4 text-center shadow-card-sm">
              <div className="text-2xl font-black text-text">{value}</div>
              <div className="mt-1 text-xs font-bold text-text-light">{label}</div>
            </div>
          ))}
        </div>
      </SubpageHero>

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="운영 철학"
            title="배움이 곧 생활의 자신감이 되도록"
            description="멋진 홍보보다 중요한 것은 매주 찾아와도 부담 없는 현장입니다. 어르신 눈높이, 장애 접근성, 지역 협력성을 기준으로 운영합니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="🧭" title="찾아가기 쉬운 현장">
              동백역 도보권의 메디스타워 213호를 중심으로 운영합니다. 작지만 반복 학습과 상담이 가능한 실제 교육 공간입니다.
            </InfoCard>
            <InfoCard icon="🤝" title="교회와 지역의 연결">
              경인장애인선교회, 경인블루저널, 지역 협력기관의 네트워크를 교육·나눔·기록 활동으로 연결합니다.
            </InfoCard>
            <InfoCard icon="📱" title="일상 문제 해결">
              카카오톡, 병원 예약, 교통, 금융, AI 활용처럼 당장 생활에서 막히는 문제부터 천천히 다룹니다.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-2">
          <InfoCard title="누구를 위한 곳인가요?">
            40~70대 어르신, 장애인, 스마트폰 사용이 두려운 분, 온라인 행정·예약·소통이 막막한 분을 우선합니다. 수업은 느리게 반복하고, 이해보다 먼저 안심할 수 있게 진행합니다.
          </InfoCard>
          <InfoCard title="무엇을 목표로 하나요?">
            단순한 기기 사용법을 넘어 일상 자립, 온라인 소통, 작은 수익 활동, 시민기록 활동까지 이어지는 실질적인 변화를 목표로 합니다.
          </InfoCard>
        </div>
      </section>

      <CTASection
        title="방문 전 전화 한 통이면 충분합니다"
        description="수업 가능 시간, 접근 동선, 가족 동반 여부를 먼저 확인해드립니다."
      />
    </SiteChrome>
  );
}

import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "푸드뱅크 — 우리함께 평생교육·나눔센터",
  description: "지역 협력 네트워크 기반 식품 나눔 사역과 운영 절차.",
};

export default function FoodbankPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="푸드뱅크"
        title="먹거리 나눔은"
        accent="가장 가까운 돌봄입니다"
        description="푸드뱅크 사역은 필요한 가정에 식품을 전달하는 일에서 끝나지 않습니다. 안부를 묻고, 생활의 어려움을 듣고, 교육과 복지 연결이 필요한 이웃을 발견하는 현장입니다."
        image="/images/generated/foodbank-sharing-card.png"
        imageAlt="푸드뱅크 식품 나눔 활동 카드뉴스"
        actions={[
          { href: "tel:010-9867-3121", label: "후원·협력 문의" },
          { href: "/pillars", label: "나눔 사역 전체", tone: "navy" },
        ]}
      >
        <div className="mt-7 grid max-w-xl grid-cols-2 gap-3">
          <div className="rounded-2xl border border-line bg-white px-4 py-4 text-center shadow-card-sm">
            <div className="text-2xl font-black text-text">500가구</div>
            <div className="mt-1 text-xs font-bold text-text-light">연간 지원 목표</div>
          </div>
          <div className="rounded-2xl border border-line bg-white px-4 py-4 text-center shadow-card-sm">
            <div className="text-2xl font-black text-text">120kg</div>
            <div className="mt-1 text-xs font-bold text-text-light">월 식품 배송</div>
          </div>
        </div>
      </SubpageHero>

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="운영 흐름"
            title="받고, 나누고, 기록합니다"
            description="식품 나눔은 신뢰가 중요합니다. 들어온 물품과 전달 과정을 확인 가능한 흐름으로 관리합니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <InfoCard icon="📦" title="물품 연결">협력기관과 후원자가 제공한 식품을 일정과 보관 조건에 맞춰 확인합니다.</InfoCard>
            <InfoCard icon="🧺" title="분류·포장">가정 상황과 수량을 고려해 필요한 품목을 나누고 포장합니다.</InfoCard>
            <InfoCard icon="🚗" title="전달">방문 또는 거점 수령 방식으로 안전하게 전달합니다.</InfoCard>
            <InfoCard icon="🗒️" title="기록">지원 내역과 다음 필요를 기록해 사역의 지속성을 높입니다.</InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-2">
          <InfoCard title="필요한 협력">
            유통기한이 충분한 식품, 정기 배송 협력, 분류 봉사, 수혜 가정 추천이 필요합니다. 개인 후원도 기관 협력도 모두 가능합니다.
          </InfoCard>
          <InfoCard title="지켜야 할 원칙">
            수혜자 개인정보 보호, 식품 안전, 전달 기록, 후원 물품의 투명한 사용을 기준으로 합니다. 사진이나 홍보보다 신뢰를 우선합니다.
          </InfoCard>
        </div>
      </section>

      <CTASection title="식품 후원과 봉사를 연결해드립니다" description="가능한 품목과 전달 일정을 전화로 먼저 조율해주세요." />
    </SiteChrome>
  );
}

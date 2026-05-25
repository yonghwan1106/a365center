import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "공간 공유 — 우리함께 평생교육·나눔센터",
  description: "메디스타워 213호를 작은 모임과 비영리 교육 활동에 연결하는 공간 공유 안내.",
};

export default function SpaceSharingPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="공간 공유"
        title="14평 작은 공간도"
        accent="지역 모임의 시작점이 됩니다"
        description="메디스타워 213호는 교육만 하는 곳이 아닙니다. 지역 모임, 공익 교육, 비영리 활동이 부담 없이 모일 수 있도록 공간 공유를 운영합니다."
        image="/images/generated/space-sharing-card.png"
        imageAlt="공간 공유 활동 카드뉴스"
        actions={[
          { href: "tel:010-9867-3121", label: "공간 이용 문의" },
          { href: "/pillars", label: "나눔 사역 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="이용 안내"
            title="작은 모임, 교육, 상담을 위한 실제 공간"
            description="무료 또는 협력 방식으로 운영하며, 이용 목적과 일정은 사전 상담 후 조율합니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="🪑" title="가능한 활동">
              어르신 교육, 소규모 모임, 공익 상담, 시민기자단 회의, 비영리 단체 활동에 사용할 수 있습니다.
            </InfoCard>
            <InfoCard icon="📅" title="예약 방식">
              전화로 목적과 인원, 필요한 시간을 먼저 알려주세요. 기존 수업 일정과 겹치지 않게 조율합니다.
            </InfoCard>
            <InfoCard icon="🤝" title="운영 원칙">
              상업 홍보나 소음이 큰 행사는 어렵습니다. 지역에 도움이 되는 활동과 안전한 이용을 우선합니다.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-2">
          <InfoCard title="기본 환경">
            50인치 화면, 책상과 의자, 스마트폰 교육에 필요한 기본 장비를 갖춘 공간입니다. 세부 장비는 방문 전 확인해주세요.
          </InfoCard>
          <InfoCard title="함께 지켜주세요">
            사용 후 정리, 개인정보 보호, 다음 수업을 위한 장비 원상복구를 부탁드립니다. 작은 공간이라 서로의 배려가 중요합니다.
          </InfoCard>
        </div>
      </section>

      <CTASection title="공간 이용 가능 시간을 확인해드립니다" description="모임 목적과 예상 인원을 알려주시면 일정 조율을 도와드립니다." />
    </SiteChrome>
  );
}

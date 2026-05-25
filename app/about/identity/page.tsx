import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "단체 정체성 — 4조직 ‘큰 우산’ 구조",
  description: "경인장애인선교회를 큰 우산으로, 평생교육나눔센터·AI디지털교육자격협회·연합푸드뱅크·사회적협동조합 4개 조직을 하나로 묶은 통합 허브.",
};

export default function IdentityPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="단체 정체성"
        title="4개 조직을 하나로 묶는"
        accent="‘큰 우산’ 구조"
        description="경인장애인선교회를 큰 우산으로, 4개의 독립된 사업 조직이 긴밀하게 연동되는 통합 운영 체계입니다. 신뢰도·공신력·전문성을 한 곳에서 보여드립니다."
        image="/images/generated/identity-umbrella-card.png"
        imageAlt="4개 조직을 하나의 우산으로 묶는 단체 정체성 다이어그램"
        actions={[
          { href: "/about/organization", label: "조직도 보기", tone: "navy" },
          { href: "/about/certificate", label: "고유번호증 확인" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="우산 구조"
            title="경인장애인선교회 = 큰 우산"
            description="신앙적 뿌리(경인교회·경인장애인선교회) 위에 4개의 전문 사업 조직이 함께 운영됩니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon="📚" title="① 우리함께 평생교육·나눔센터">
              어르신·장애인 디지털 교육의 현장 운영 주체. 메디스타워 213호에서 4단계 커리큘럼과 AI 선생님 12인 교실을 운영합니다.
            </InfoCard>
            <InfoCard icon="🎓" title="② 경인AI디지털교육자격협회">
              민간자격 3종(2026년 6월 1일 등록 신청 예정)을 통해 디지털 교육의 전문성을 제도화합니다. 현재 준비 중.
            </InfoCard>
            <InfoCard icon="🥫" title="③ 연합푸드뱅크">
              정관·운영규정·공동운영 협약 완비. 지역 이웃의 든든한 식탁을 책임지는 나눔 사역의 핵심.
            </InfoCard>
            <InfoCard icon="🤝" title="④ 경인 평생교육·나눔 사회적협동조합">
              교육·나눔의 지속가능성을 위한 협동조합 모델. 5월 21일자 정상 사용 인가 확보.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="왜 ‘큰 우산’인가"
            title="공공기관·언론·후원자에게 한 곳에서 보여집니다"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard title="공신력 통합">
              4개 조직의 정관·협약·인가 서류를 한 사이트에서 확인할 수 있어, 공모·심사에서 빠르게 신뢰를 얻습니다.
            </InfoCard>
            <InfoCard title="시너지 운영">
              교육생이 자연스럽게 시민기자단·푸드뱅크 봉사·자격 과정으로 이어지는 ‘배움→나눔→자립’ 사이클이 작동합니다.
            </InfoCard>
            <InfoCard title="투명한 거버넌스">
              대표 김재완을 명확히 노출하고, 실무진은 AI 아바타+직책으로 정갈하게 표기. 책임 경영의 신호.
            </InfoCard>
          </div>
        </div>
      </section>

      <CTASection
        title="단체 협력·MOU 문의"
        description="기관·기업·교회 모두 환영합니다. 대표 직통으로 빠르게 응답드립니다."
      />
    </SiteChrome>
  );
}

import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "시민기자단 — 우리함께 평생교육·나눔센터",
  description: "경인블루저널과 함께하는 지역 어르신 시민기자단 양성 및 기록 활동.",
};

export default function CitizenJournalistPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="시민기자단"
        title="우리 동네 이야기를"
        accent="직접 기록합니다"
        description="시민기자단은 잘 쓰는 사람만을 위한 활동이 아닙니다. 사진 한 장, 인터뷰 한 문장, 현장에서 본 작은 변화부터 지역 기록이 됩니다. 경인블루저널과 연계해 어르신도 시민기자로 성장할 수 있도록 돕습니다."
        image="/images/generated/citizen-journalist-card.png"
        imageAlt="시민기자단 활동 카드뉴스"
        actions={[
          { href: "tel:010-9867-3121", label: "기자단 문의" },
          { href: "/education", label: "교육 과정 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="활동 과정"
            title="사진, 인터뷰, 기사 작성까지 천천히"
            description="스마트폰 교육과 연결해 사진 촬영, 음성 기록, 기사 초안 작성, 편집 검토를 단계별로 배웁니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <InfoCard icon="📸" title="현장 촬영">지역 행사, 나눔 활동, 동네 소식을 스마트폰으로 촬영합니다.</InfoCard>
            <InfoCard icon="🎙️" title="짧은 인터뷰">어르신 눈높이에 맞는 질문지로 부담 없이 이야기를 듣습니다.</InfoCard>
            <InfoCard icon="✍️" title="기사 초안">OST 똑똑이 선생님과 함께 말한 내용을 글로 정리하고 제목을 다듬습니다.</InfoCard>
            <InfoCard icon="📰" title="발행 연계">경인블루저널과 협력해 공익 기록으로 남길 수 있게 검토합니다.</InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard title="참여 대상">
            글쓰기가 처음이어도 괜찮습니다. 스마트폰 사진 촬영과 지역 이야기 기록에 관심 있는 어르신, 장애인, 봉사자를 환영합니다.
          </InfoCard>
          <InfoCard title="활동 주제">
            동네 소식, 장애인 접근성, 복지 정보, 나눔 현장, 교회와 지역의 공익 활동을 중심으로 기록합니다.
          </InfoCard>
          <InfoCard title="지원 도구">
            큰 글씨 편집, 음성 입력, AI 초안 정리, 사진 고르기까지 함께합니다. 결과보다 참여 경험을 중요하게 봅니다.
          </InfoCard>
        </div>
      </section>

      <CTASection title="지역 이야기를 함께 기록해요" description="기자단 교육과 활동 일정은 전화로 안내해드립니다." />
    </SiteChrome>
  );
}

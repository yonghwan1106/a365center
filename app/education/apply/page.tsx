import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";
import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "온라인 신청서 — 디지털 교육 등록",
  description: "우리함께 평생교육·나눔센터 디지털 교육 온라인 신청서. 접수: admin@a365center.or.kr · 전화 010-9867-3121.",
};

export default function ApplyPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="온라인 신청"
        title="디지털 교육 신청서"
        accent="3분이면 충분합니다"
        description="이름·연락처·희망 과정만 알려주시면 됩니다. 접수 후 대표가 직접 연락드려 가능 시간과 교실 접근성을 안내해드립니다. 작성이 어려우시면 전화로도 신청 가능합니다."
        image="/images/generated/apply-form-card.png"
        imageAlt="디지털 교육 온라인 신청 안내 이미지"
        actions={[
          { href: "tel:010-9867-3121", label: "📞 전화로 신청 (010-9867-3121)" },
          { href: "/education/curriculum", label: "4단계 커리큘럼", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="신청서"
              title="아래 정보를 입력해 주세요"
              description="필수 항목만 채워주시면 됩니다. 접수처: admin@a365center.or.kr"
            />
            <ApplyForm />
          </div>
        </div>
      </section>

      <CTASection
        title="전화 한 통이 가장 빠릅니다"
        description="010-9867-3121 · 대표가 직접 안내합니다."
      />
    </SiteChrome>
  );
}

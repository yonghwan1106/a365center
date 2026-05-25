import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "민간자격 3종 — 준비 중 (2026.06.01 등록 신청 예정)",
  description: "경인AI디지털교육자격협회 민간자격 3종은 2026년 6월 1일 국가 등록 신청 예정입니다. 허위 광고 방지를 위해 ‘준비 중’ 라벨로 안내합니다.",
};

const CERTIFICATES = [
  {
    title: "AI 디지털 교육 지도사",
    summary: "어르신·장애인 디지털 교육 현장에서 AI 도구를 활용해 1:1 맞춤 교육을 진행할 수 있는 지도사 자격.",
    target: "디지털 교육 강사, 사회복지사, 평생교육사",
    icon: "🤖",
  },
  {
    title: "시민기록 미디어 기획사",
    summary: "지역 기록·시민기자단 활동 기획·코디네이션을 담당할 수 있는 미디어 기획 자격.",
    target: "마을미디어 활동가, 시민기자단 코디",
    icon: "📰",
  },
  {
    title: "나눔·푸드뱅크 운영관리사",
    summary: "푸드뱅크 물품 수거·분류·배송 시스템과 사회적 협동조합 운영을 관리할 수 있는 자격.",
    target: "푸드뱅크 운영진, 협동조합 사무국, 자원봉사 코디",
    icon: "🥫",
  },
];

export default function CertificatePage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="민간자격 (준비 중)"
        title="경인AI디지털교육자격협회"
        accent="민간자격 3종 운영 예정"
        description="경인AI디지털교육자격협회는 디지털 교육·시민기록·나눔 사역의 전문성을 제도화하기 위해 민간자격 3종 등록을 준비 중입니다. 2026년 6월 1일 국가 등록 신청 예정입니다."
        image="/images/generated/certificate-program-card.png"
        imageAlt="민간자격 3종 안내 카드 이미지"
        actions={[
          { href: "/about/documents", label: "자격관리운영규정 보기", tone: "navy" },
          { href: "tel:010-9867-3121", label: "대표 직통 문의" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-yellow-strong/40 bg-yellow/60 p-6 text-[14px] leading-[1.85] text-[#7C2D12]">
            <strong className="text-base text-[#5C1D11]">⚠ 안내 — ‘자격과정 준비 중’</strong><br />
            대표 회신 사항입니다. 6월 1일 국가 등록 신청 전까지는 허위 광고를 피하기 위해 모든 자격 안내에
            <strong> ‘준비 중’ 라벨</strong>을 부착합니다. 등록 완료 후 정식 자격증 발급 및 교육 과정이 개설됩니다.
          </div>

          <SectionHeader
            eyebrow="3 CERTIFICATES"
            title="개설 예정 자격 3종"
            description="우리 단체가 운영하는 교육·미디어·나눔 사역과 정확히 맞물리는 전문 자격입니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CERTIFICATES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow px-3 py-1 text-[12px] font-extrabold text-[#92400E]">
                  🚧 준비 중
                </div>
                <div className="mb-3 text-3xl">{c.icon}</div>
                <h3 className="break-keep text-lg font-extrabold tracking-tight text-text">{c.title}</h3>
                <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute">{c.summary}</p>
                <div className="mt-4 rounded-lg bg-bg-soft p-3 text-xs leading-[1.6] text-text-mute">
                  <strong className="text-text">대상</strong> · {c.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="ROADMAP" title="등록 일정" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["2026.05", "운영규정 정비", "자격관리운영규정·정관 정비 완료"],
              ["2026.06.01", "★ 국가 등록 신청", "민간자격 3종 정식 등록 신청"],
              ["2026.Q3", "심사·등록 완료", "‘준비 중’ 라벨 해제 예정"],
              ["2026.Q4~", "1기 수강 모집", "자격 취득 과정 정식 개설"],
            ].map(([when, title, desc], i) => (
              <div key={i} className="rounded-xl border border-line bg-white p-5 shadow-card-sm">
                <div className="text-xs font-extrabold tracking-wide text-yellow-strong">{when}</div>
                <div className="mt-1 text-base font-extrabold text-text">{title}</div>
                <div className="mt-2 text-xs leading-[1.6] text-text-mute">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="자격 과정 대기자 등록"
        description="개설 시 우선 안내드립니다. 전화 또는 이메일로 신청해 주세요."
      />
    </SiteChrome>
  );
}

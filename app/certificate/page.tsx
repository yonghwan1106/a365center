import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "민간자격 7종 — 준비 중 (2026.06.01 등록 신청 예정)",
  description:
    "경인AI디지털교육자격협회 민간자격 7종(디지털·시니어 3종 / 예술·무용 4종)은 2026년 6월 1일 국가 등록 신청 예정입니다. 허위 광고 방지를 위해 ‘준비 중’ 라벨로 안내합니다.",
};

// 디지털·시니어 3종
const DIGITAL = [
  { title: "디지털생활AI교육지도사", desc: "스마트폰·인터넷·생활민원·문서작성·생성형 AI 기초 활용을 교육·지도합니다.", icon: "📱" },
  { title: "챗봇활용교육지도사", desc: "생성형 AI 챗봇의 질문 작성법·문서작성·교육·상담·홍보 활용을 교육·지도합니다.", icon: "💬" },
  { title: "시니어AI디지털지도사", desc: "고령층 눈높이로 스마트폰·생활 앱·보이스피싱 예방·키오스크·AI 챗봇 기초를 지도합니다.", icon: "🧓" },
];

// 예술·무용 4종
const ART = [
  { title: "AI공연예술콘텐츠지도사", desc: "공연예술 기획·홍보·교육자료·기록·영상 콘텐츠 제작에 생성형 AI를 활용하도록 지도합니다.", icon: "🎭" },
  { title: "AI무용콘텐츠지도사", desc: "무용 콘텐츠 기획·촬영·편집·홍보·교육자료 제작에 AI 도구를 활용하도록 지도합니다.", icon: "💃" },
  { title: "AI전통무용콘텐츠지도사", desc: "한국무용·전통예술의 기록·보존·교육·홍보 콘텐츠 제작에 AI를 활용하도록 지도합니다.", icon: "🪭" },
  { title: "AI무용영상제작지도사", desc: "무용 공연·연습·교육 장면을 기획·촬영·편집하고 쇼츠·홍보·교육영상을 AI로 제작하도록 지도합니다.", icon: "🎬" },
];

function CertCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow px-3 py-1 text-[12px] font-extrabold text-[#92400E]">
        🚧 준비 중
      </div>
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="break-keep text-[17px] font-extrabold leading-[1.35] tracking-tight text-text">{title}</h3>
      <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute">{desc}</p>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="민간자격 (준비 중)"
        title="경인AI디지털교육자격협회"
        accent="민간자격 7종 운영 예정"
        description="디지털·시니어 교육 3종과 예술·무용 콘텐츠 4종, 모두 7종의 민간자격 등록을 준비 중입니다. 2026년 6월 1일 국가 등록 신청 예정입니다."
        image="/images/generated/certificate-program-card.png"
        imageAlt="민간자격 7종 안내 카드 이미지"
        actions={[
          { href: "/about/documents", label: "자격관리운영규정 보기", tone: "navy" },
          { href: "tel:010-9867-3121", label: "대표 직통 문의" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-yellow-strong/40 bg-yellow/60 p-6 text-[14px] leading-[1.85] text-[#7C2D12]">
            <strong className="text-base text-[#5C1D11]">⚠ 안내 — ‘자격과정 준비 중’</strong><br />
            6월 1일 국가 등록 신청 전까지는 허위 광고를 피하기 위해 모든 자격 안내에
            <strong> ‘준비 중’ 라벨</strong>을 부착합니다. 등록 완료 후 정식 자격증 발급 및 교육 과정이 개설됩니다.
          </div>

          <SectionHeader
            eyebrow="GROUP 1 · 디지털·시니어 3종"
            title="디지털·시니어 교육 자격 3종"
            description="어르신·디지털 취약계층을 대상으로 한 생성형 AI 활용 교육 지도 자격입니다."
          />
          <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {DIGITAL.map((c) => (
              <CertCard key={c.title} {...c} />
            ))}
          </div>

          <SectionHeader
            eyebrow="GROUP 2 · 예술·무용 4종"
            title="예술·무용 콘텐츠 자격 4종"
            description="공연예술·무용 분야의 기획·기록·홍보·영상 제작에 AI를 접목하는 지도 자격입니다."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ART.map((c) => (
              <CertCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="ROADMAP" title="등록 일정" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["2026.05", "운영규정 정비", "7종 자격관리운영규정·정관 정비 완료"],
              ["2026.06.01", "★ 국가 등록 신청", "민간자격 7종 정식 등록 신청"],
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

import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "기업·기관 협력 — MOU·CSR·ESG·공익광고",
  description: "기업·기관·교회·교육청·언론사와의 협력 제안. MOU, CSR·ESG 지정후원, 공익광고, 강사 파견, 공간 기부 등 다양한 협력 방식 제안.",
};

const PARTNERSHIPS = [
  { icon: "🤝", title: "MOU 체결", desc: "지자체·교육청·복지관·기업과 정식 협약. 4개 사업 조직 어디든 단일 창구 운영." },
  { icon: "💼", title: "CSR·ESG 지정후원", desc: "디지털 교육, AI 선생님 운영, 푸드뱅크 등 사업별 지정후원 가능. 결산 보고서 제공." },
  { icon: "📺", title: "공익광고·홍보 협력", desc: "방송사·언론사·플랫폼과의 공익 캠페인. 어르신 디지털 격차 해소 메시지." },
  { icon: "👨‍🏫", title: "강사·전문가 파견", desc: "IT 기업·연구소의 전문 인력 강사 파견 환영. 사례 발표·시연 기회 제공." },
  { icon: "🏛️", title: "공간·물품 기부", desc: "교육 공간, 50인치 모니터, 태블릿, 스마트폰, 푸드뱅크 보관·운반 차량 등." },
  { icon: "🎓", title: "자격 과정 협력", desc: "민간자격 3종 등록 후 산업체·기관 연계 자격 취득 과정 공동 운영." },
];

export default function SponsorPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="기업·기관 협력"
        title="공익 사업의"
        accent="신뢰할 수 있는 파트너"
        description="우리함께 평생교육·나눔센터는 4개 사업 조직(평생교육·자격협회·푸드뱅크·협동조합)을 통합 운영하는 큰 우산 단체입니다. 협력 제안은 단일 창구(대표 직통)에서 한 번에 진행됩니다."
        image="/images/generated/sponsor-card.png"
        imageAlt="기업·기관 협력 안내 이미지"
        actions={[
          { href: "mailto:admin@a365center.or.kr?subject=%5B%EA%B8%B0%EC%97%85%C2%B7%EA%B8%B0%EA%B4%80%20%ED%98%91%EB%A0%A5%20%EC%A0%9C%EC%95%88%5D&body=%EA%B8%B0%EA%B4%80%EB%AA%85%3A%0A%EB%8B%B4%EB%8B%B9%EC%9E%90%3A%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%0A%ED%98%91%EB%A0%A5%20%EC%A0%9C%EC%95%88%20%EC%9C%A0%ED%98%95%3A%0A%EC%A0%9C%EC%95%88%20%EB%82%B4%EC%9A%A9%3A", label: "✉ 협력 제안서 보내기" },
          { href: "/about/documents", label: "법인 서류 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="6 WAYS" title="협력 방식 6가지" description="아래 외에도 자유로운 협력 제안 환영합니다." />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIPS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
                <div className="mb-3 text-3xl">{p.icon}</div>
                <h3 className="break-keep text-lg font-extrabold tracking-tight text-text">{p.title}</h3>
                <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="WHY US" title="왜 우리와 협력해야 할까요?" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="📜" title="공신력 100% 공개">고유번호증·정관·운영규정·협약서 모두 사이트에서 다운로드 가능.</InfoCard>
            <InfoCard icon="🤖" title="차별화된 운영 실체">AI 선생님 12인 교실은 전국 어디에도 없는 고유 자산. 공모·취재에서 즉시 차별화.</InfoCard>
            <InfoCard icon="🌐" title="4사업부 통합 채널">한 번의 협력으로 교육·자격·푸드뱅크·협동조합 4영역에 동시 접근 가능.</InfoCard>
          </div>
        </div>
      </section>

      <CTASection
        title="협력 제안은 대표 직통이 가장 빠릅니다"
        description="010-9867-3121 · 김재완 대표가 직접 응대 · 24시간 내 회신 원칙."
      />
    </SiteChrome>
  );
}

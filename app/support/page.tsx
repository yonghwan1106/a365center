import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "참여·후원 — 함께해 주세요",
  description: "후원, 자원봉사, 기업·기관 협력. 어르신·장애인 디지털 교육과 나눔 사역에 동참하는 3가지 방법.",
};

const WAYS = [
  {
    href: "/support/donate",
    color: "from-[#FEF3C7] to-white",
    border: "border-yellow-strong",
    icon: "💛",
    title: "후원",
    eyebrow: "DONATE",
    desc: "법인 통장 개설 행정 절차가 마무리되는 대로 후원 계좌를 공개합니다. 현재 ‘계좌 개설 중’.",
    cta: "후원 안내 보기",
  },
  {
    href: "/support/volunteer",
    color: "from-[#D1FAE5] to-white",
    border: "border-green",
    icon: "🤝",
    title: "자원봉사",
    eyebrow: "VOLUNTEER",
    desc: "디지털 교육 보조, 푸드뱅크 분류·배달, 시민기자단 취재 등 다양한 영역에서 활동할 수 있습니다.",
    cta: "봉사 신청하기",
  },
  {
    href: "/support/sponsor",
    color: "from-[#DBEAFE] to-white",
    border: "border-[#3B82F6]",
    icon: "🏢",
    title: "기업·기관 협력",
    eyebrow: "PARTNER",
    desc: "ESG·사회공헌·CSR·MOU·공익광고 등 기관·기업 협력 제안을 환영합니다.",
    cta: "협력 제안하기",
  },
];

export default function SupportPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="참여·후원"
        title="작은 손길이"
        accent="큰 변화를 만듭니다"
        description="우리함께 평생교육·나눔센터의 사명은 후원자·자원봉사자·협력기관의 동행 없이는 이루어지지 않습니다. 3가지 방법 중 편하신 것으로 함께해 주세요."
        image="/images/generated/support-cta-card.png"
        imageAlt="후원·봉사·기업협력 3가지 참여 방법 안내 이미지"
        actions={[
          { href: "tel:010-9867-3121", label: "📞 전화 상담" },
          { href: "/about/certificate", label: "고유번호증 확인", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="3 WAYS" title="함께하는 3가지 방법" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {WAYS.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className={`flex flex-col rounded-2xl border-2 ${w.border} bg-gradient-to-b ${w.color} p-7 shadow-card-sm transition-all hover:-translate-y-px hover:shadow-card-md md:p-8`}
              >
                <div className="mb-3 text-xs font-extrabold tracking-wide text-text-light">{w.eyebrow}</div>
                <div className="mb-3 text-4xl">{w.icon}</div>
                <h3 className="break-keep text-xl font-extrabold tracking-tight text-text md:text-2xl">{w.title}</h3>
                <p className="mt-3 flex-1 break-keep text-sm leading-[1.8] text-text-mute">{w.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-text">
                  {w.cta} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="가장 빠른 방법은 전화 한 통입니다"
        description="010-9867-3121 · 김재완 대표가 직접 응대합니다."
      />
    </SiteChrome>
  );
}

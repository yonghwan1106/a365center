import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "조직도 — 대표 김재완 + AI 아바타 실무진",
  description: "대표 김재완 책임경영 체계. 실무진은 사진 없이 AI 일러스트 아바타와 직책으로 정갈하게 표기.",
};

const TEAM = [
  { role: "AI 교육 디렉터", avatar: "🤖", color: "from-[#FEE2E2] to-[#FECACA]", desc: "AI 선생님 12인 교실 운영" },
  { role: "디지털 강사", avatar: "📱", color: "from-[#DBEAFE] to-[#BFDBFE]", desc: "4단계 커리큘럼 진행" },
  { role: "푸드뱅크 매니저", avatar: "🥫", color: "from-[#D1FAE5] to-[#A7F3D0]", desc: "물품 수거·분류·배송" },
  { role: "협동조합 운영", avatar: "🤝", color: "from-[#FEF3C7] to-[#FDE68A]", desc: "사회적협동조합 사업 기획" },
  { role: "시민기자단 코디", avatar: "📰", color: "from-[#E0E7FF] to-[#C7D2FE]", desc: "취재·기록·게시 지원" },
  { role: "회계·행정", avatar: "📊", color: "from-[#F3E8FF] to-[#E9D5FF]", desc: "공시·정산·서류" },
];

export default function OrganizationPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="조직도"
        title="대표 김재완 책임경영 +"
        accent="AI 아바타 실무진"
        description="대표 이름은 명확히 노출하되, 실무진은 사진 없이 AI 일러스트 아바타와 직책으로 정갈하게 표기합니다. 투명한 거버넌스와 깔끔한 시각 정보를 동시에 제공합니다."
        image="/images/generated/organization-chart-card.png"
        imageAlt="대표 김재완과 AI 아바타 실무진으로 구성된 조직도 이미지"
        actions={[
          { href: "/about/greeting", label: "대표 인사말", tone: "navy" },
          { href: "/about/documents", label: "정관·운영규정" },
        ]}
      />

      {/* 대표 */}
      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="REPRESENTATIVE" title="대표 책임경영" />
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-yellow-strong bg-gradient-to-b from-[#FFFBEB] to-white p-8 text-center shadow-card-md">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-deep text-3xl font-extrabold text-white shadow-card-lg">
              김
            </div>
            <div className="text-sm font-semibold text-text-light">경인 공익네트워크 · 경인장애인선교회</div>
            <div className="mt-1 text-2xl font-black tracking-tight text-text md:text-[28px]">대표 · 김재완</div>
            <p className="mx-auto mt-4 max-w-md break-keep text-sm leading-[1.8] text-text-mute">
              4개 조직의 책임경영자. 신앙적 뿌리 위에서 AI·디지털 기술을 복지에 융합하는 단체의 방향을 직접 결정·집행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실무진 */}
      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="TEAM"
            title="실무진 (AI 아바타 · 직책 표기)"
            description="개인정보 보호와 정갈한 시각 표현을 위해 사진 대신 AI 일러스트 아바타와 직책으로 표기합니다."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {TEAM.map((t) => (
              <div key={t.role} className="rounded-2xl border border-line bg-white p-5 text-center shadow-card-sm">
                <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-3xl`}>
                  {t.avatar}
                </div>
                <div className="text-sm font-extrabold text-text">{t.role}</div>
                <div className="mt-1 text-xs text-text-light">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon="📞" title="대표 직통 연락처">
              010-9867-3121 · admin@a365center.or.kr<br />
              공모·기사·후원 문의는 대표가 직접 응대합니다.
            </InfoCard>
            <InfoCard icon="🏛️" title="감사·자문">
              정관·운영규정에 따른 감사 및 외부 자문 체계를 운영합니다. 공시 의무 사항은 알림마당에 게시.
            </InfoCard>
          </div>
        </div>
      </section>

      <CTASection
        title="조직 협력·MOU 문의"
        description="공공기관·기업·교회·언론사 모두 환영합니다."
      />
    </SiteChrome>
  );
}

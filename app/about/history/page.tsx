import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "연혁 — 6단계 타임라인",
  description: "선교회 설립부터 민간자격 3종 신청까지, 경인장애인선교회·경인 공익네트워크의 6단계 발자취.",
};

const TIMELINE = [
  {
    step: "STEP 01",
    title: "사단법인 경인교회·경인장애인선교회 설립",
    body: "장애인·소외계층을 향한 신앙적 뿌리. 모든 사업의 시작점이 된 ‘큰 우산’ 단체의 출범.",
    color: "from-[#1F2937] to-[#0F172A]",
  },
  {
    step: "STEP 02",
    title: "국세청 고유번호 발급",
    body: "단체 정식 등록. 공공·민간 협력 및 후원의 법적 기반 확보. (★ 워터마크 처리 후 100% 공개 운영)",
    color: "from-[#1E40AF] to-[#1E3A8A]",
  },
  {
    step: "STEP 03",
    title: "우리함께 평생교육·나눔센터 시작",
    body: "메디스타워 213호 현장 운영 개시. 어르신·장애인 디지털 교육과 나눔 사역의 거점 확보.",
    color: "from-[#0E7490] to-[#155E75]",
  },
  {
    step: "STEP 04",
    title: "연합푸드뱅크 공동운영 협약",
    body: "지역 이웃의 식탁을 책임지는 나눔 사역. 정관·운영규정·협약서 3종 정비 완료.",
    color: "from-[#15803D] to-[#166534]",
  },
  {
    step: "STEP 05",
    title: "경인 평생교육·나눔 사회적협동조합 발기",
    body: "교육·나눔의 지속가능성 확보. 2026년 5월 21일자 정상 사용 인가.",
    color: "from-[#A16207] to-[#854D0E]",
  },
  {
    step: "STEP 06",
    title: "민간자격 3종 등록 신청 (2026.06.01 예정)",
    body: "경인AI디지털교육자격협회를 통한 디지털 교육 전문성 제도화. 등록 완료 시 ‘준비 중’ 라벨 해제 예정.",
    color: "from-[#B91C1C] to-[#991B1B]",
  },
];

export default function HistoryPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="연혁"
        title="신앙적 뿌리에서 시작해"
        accent="AI 복지로 이어지는 6단계 발자취"
        description="단체 설립부터 민간자격 신청까지 — 경인장애인선교회·경인 공익네트워크가 걸어온 길을 단계별로 정리했습니다."
        image="/images/generated/history-timeline-card.png"
        imageAlt="단체 6단계 연혁 타임라인 이미지"
        actions={[
          { href: "/about/identity", label: "정체성 보기", tone: "navy" },
          { href: "/about/documents", label: "정관·규정 자료" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <SectionHeader
            eyebrow="TIMELINE"
            title="6단계 연혁"
            description="대표 회신으로 확정된 정식 타임라인입니다."
          />
          <ol className="relative mx-auto max-w-4xl space-y-6 border-l-2 border-line pl-6 md:pl-8">
            {TIMELINE.map((t, i) => (
              <li key={i} className="relative">
                <div
                  className={`absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-extrabold text-white shadow-card-md md:-left-[38px]`}
                >
                  {i + 1}
                </div>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
                  <div className="mb-2 text-xs font-extrabold tracking-wide text-yellow-strong">{t.step}</div>
                  <h3 className="break-keep text-lg font-extrabold tracking-tight text-text md:text-xl">{t.title}</h3>
                  <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute md:text-[15px]">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="단체 연혁 자료가 필요하신가요?"
        description="공모·기사·심사용 자료를 요청하시면 PDF로 빠르게 전달드립니다."
      />
    </SiteChrome>
  );
}

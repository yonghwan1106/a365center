import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "4단계 커리큘럼 — 우리함께 평생교육·나눔센터",
  description: "스마트폰 기초 → 생활 활용 → AI 실무 → 수익 창출. 어르신·장애인이 무리 없이 따라올 수 있는 4단계 학습 로드맵.",
};

const STEPS = [
  {
    no: "01",
    color: "bg-[#EF4444]",
    title: "스마트폰 기초반",
    accent: "전원 켜기부터 천천히",
    desc: "처음 만지는 분도 안심하고 따라올 수 있는 반복 실습. 카카오톡, 사진, 전화·문자, 글자 크기 조절 등.",
    slug: "smartphone-basic",
  },
  {
    no: "02",
    color: "bg-[#F59E0B]",
    title: "생활 활용반",
    accent: "예약·결제를 혼자 해봅니다",
    desc: "병원 예약, 교통 확인, QR 코드, 간편 결제 등 일상에서 자주 막히는 부분을 실제 상황 중심으로.",
    slug: "life-use",
  },
  {
    no: "03",
    color: "bg-[#3B82F6]",
    title: "AI 실무반",
    accent: "말로 묻고 글로 정리",
    desc: "OST 똑똑이 선생님에게 질문하기, 음성 입력 글쓰기, 생활 정보 검색·확인, 기사·홍보글 초안 만들기.",
    slug: "ai-practical",
  },
  {
    no: "04",
    color: "bg-[#10B981]",
    title: "수익 창출반",
    accent: "작은 재능을 온라인으로",
    desc: "스마트스토어, 유튜브, 재능마켓, 지역 기록 활동 등 무리하지 않는 작은 수익 활동.",
    slug: "income",
  },
];

export default function CurriculumPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="4단계 커리큘럼"
        title="스마트폰 기초부터"
        accent="작은 수익 창출까지"
        description="어르신·장애인이 무리 없이 따라올 수 있도록 설계된 4단계 학습 로드맵. 각 단계는 12명 정원의 소규모 교실에서 반복 실습 중심으로 진행됩니다."
        image="/images/generated/education-roadmap-card.png"
        imageAlt="4단계 커리큘럼 학습 로드맵 카드뉴스"
        actions={[
          { href: "/education/apply", label: "온라인 신청", tone: "navy" },
          { href: "/education/ai-teacher", label: "OST 똑똑이 선생님 교실" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <SectionHeader
            eyebrow="STEPS"
            title="4단계 로드맵"
            description="각 단계는 독립적으로 수강할 수도, 순차적으로 이어질 수도 있습니다."
          />
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <Link
                key={s.no}
                href={`/education/${s.slug}`}
                className="block rounded-2xl border border-line bg-white p-6 shadow-card-sm transition-all hover:-translate-y-px hover:shadow-card-md md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${s.color} text-2xl font-black text-white shadow-card-md md:h-20 md:w-20 md:text-3xl`}>
                    {s.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-extrabold tracking-wide text-yellow-strong">STEP {s.no}</div>
                    <h3 className="mt-1 break-keep text-xl font-extrabold tracking-tight text-text md:text-2xl">
                      {s.title} <span className="text-red">— {s.accent}</span>
                    </h3>
                    <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute md:text-[15px]">{s.desc}</p>
                  </div>
                  <div className="hidden text-2xl text-text-light md:block">→</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-yellow-strong/40 bg-yellow/60 p-5 text-[14px] leading-[1.75] text-[#7C2D12]">
            ⏳ 현재 단체는 <strong>‘준비·구상 단계’</strong>입니다. 정식 개강 일정은 알림마당과 전화로 안내드립니다.
            대기자 명단 등록은 <Link href="/education/apply" className="font-extrabold underline">온라인 신청서</Link>를 이용해 주세요.
          </div>
        </div>
      </section>

      <CTASection
        title="대기자 명단 등록 / 강의 일정 문의"
        description="전화 한 통으로 가능 시간·교실 접근성·가족 동반 여부를 안내해드립니다."
      />
    </SiteChrome>
  );
}

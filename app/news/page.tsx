import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "알림마당 — 공지·보도자료·결산 공시",
  description: "단체 공지사항, 보도자료, 결산 공시, 자격 등록 진행 상황 등 운영 투명성을 위한 알림마당.",
};

const POSTS = [
  {
    date: "2026.05.23",
    tag: "공지",
    title: "홈페이지 v3 시안 공개 — OST 똑똑이 선생님 12인 교실 격상",
    desc: "‘OST 똑똑이 선생님이 직접 가르치는 12인 교실’을 메인 두 번째 섹션으로 격상한 사이트맵 v3가 공개되었습니다.",
  },
  {
    date: "2026.05.21",
    tag: "행정",
    title: "사회적협동조합 정상 사용 인가 확보",
    desc: "‘경인 평생교육·나눔 사회적협동조합’의 5월 21일자 정상 사용 인가가 확보되었습니다.",
  },
  {
    date: "2026.05.20",
    tag: "예정",
    title: "민간자격 7종 — 2026.06.01 국가 등록 신청 예정",
    desc: "AI 디지털 교육 지도사 외 2종 자격에 대한 국가 등록 신청을 6월 1일 진행할 예정입니다.",
  },
  {
    date: "2026.05.18",
    tag: "운영",
    title: "OST 똑똑이 선생님 파일럿 v1 가동",
    desc: "김재완 대표가 직접 코딩한 OST 똑똑이 선생님 파일럿(생성형 AI + STT/TTS + 60px 출력)이 가동되었습니다.",
  },
  {
    date: "2026.05.10",
    tag: "행정",
    title: "법인 후원 통장 개설 절차 진행 중",
    desc: "법인 후원 계좌는 행정 절차 완료 후 별도 공지드립니다. 그 사이 후원 관심 등록은 이메일·전화로 가능합니다.",
  },
];

const TAG_COLORS: Record<string, string> = {
  공지: "bg-yellow text-[#92400E]",
  행정: "bg-[#DBEAFE] text-[#1E3A8A]",
  예정: "bg-[#D1FAE5] text-[#065F46]",
  운영: "bg-[#F3E8FF] text-[#5B21B6]",
};

export default function NewsPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="알림마당"
        title="투명한 운영을 위한"
        accent="공지·결산 공시"
        description="단체 공지사항, 행정 진행 상황, 자격 등록, 결산 공시 등을 모두 이곳에 게시합니다. 보도자료 요청은 대표 직통으로 부탁드립니다."
        image="/images/generated/news-board-card.png"
        imageAlt="알림마당 게시판 이미지"
        actions={[
          { href: "tel:010-9867-3121", label: "📞 보도자료 요청" },
          { href: "/about/documents", label: "공시 자료 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="LATEST" title="최근 공지" />
          <div className="mx-auto max-w-4xl space-y-3">
            {POSTS.map((p, i) => (
              <article
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-card-sm transition-all hover:-translate-y-px hover:shadow-card-md md:flex-row md:items-start md:gap-6"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <div className="text-sm font-extrabold text-text-light">{p.date}</div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold ${TAG_COLORS[p.tag] || "bg-bg-soft text-text"}`}>
                    {p.tag}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="break-keep text-lg font-extrabold tracking-tight text-text md:text-xl">{p.title}</h3>
                  <p className="mt-2 break-keep text-sm leading-[1.8] text-text-mute md:text-[15px]">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-yellow-strong/40 bg-yellow/60 p-5 text-[14px] leading-[1.75] text-[#7C2D12]">
            💡 본 알림마당은 시안 단계 페이지입니다. 정식 운영 시 결산 공시(분기), 자격 등록 진행 상황, 보도자료, 자원봉사 모집,
            교육 기수 모집 공지 등이 자동으로 게시됩니다.
          </div>
        </div>
      </section>

      <CTASection
        title="언론·기관 보도자료 요청"
        description="공식 보도자료·기관 소개서·심사용 자료는 대표 직통으로 송부드립니다."
      />
    </SiteChrome>
  );
}

import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "정관·운영규정 — 법인 서류 전체 공개",
  description: "경인AI디지털교육자격협회 정관, 민간자격 7종 운영규정, 연합푸드뱅크 정관·협약서, 사회적협동조합 운영규정 등 PDF 일괄 공개.",
};

const DOC_GROUPS = [
  {
    title: "경인AI디지털교육자격협회",
    docs: [
      { name: "정관", file: "경인AI디지털교육자격협회_정관.pdf", ready: true },
      { name: "민간자격 7종목 자격관리운영규정", file: "민간자격_7종목_운영규정.pdf", ready: true },
    ],
  },
  {
    title: "연합푸드뱅크",
    docs: [
      { name: "정관", file: "연합푸드뱅크_정관.pdf", ready: true },
      { name: "공동운영 협약서", file: "연합푸드뱅크_공동운영_협약서.pdf", ready: true },
      { name: "내부 운영규정", file: "연합푸드뱅크_내부_운영규정.pdf", ready: true },
    ],
  },
  {
    title: "경인 평생교육·나눔 사회적협동조합",
    docs: [
      { name: "운영규정", file: "사회적협동조합_운영규정.pdf", ready: true },
      { name: "5월 21일 정상 사용 인가", file: "사회적협동조합_5월21일_정상사용.pdf", ready: true },
    ],
  },
  {
    title: "우리함께 평생교육·나눔센터",
    docs: [
      { name: "내부 기부금규정", file: "내부지부기부금규정.pdf", ready: false },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="법인 서류"
        title="정관·운영규정"
        accent="전체 공개"
        description="우리 단체의 핵심 서류를 모두 PDF로 공개합니다. 공모·심사·취재에 필요한 자료는 이 페이지에서 직접 다운로드하실 수 있습니다."
        image="/images/generated/documents-archive-card.png"
        imageAlt="법인 정관과 운영규정 PDF 아카이브 이미지"
        actions={[
          { href: "/about/certificate", label: "고유번호증 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap space-y-8">
          {DOC_GROUPS.map((group) => (
            <div key={group.title}>
              <SectionHeader title={group.title} />
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {group.docs.map((doc) =>
                  doc.ready ? (
                    <a
                      key={doc.file}
                      href={`/docs/${doc.file}`}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4 shadow-card-sm transition-all hover:-translate-y-[1px] hover:shadow-card-md"
                    >
                      <div className="min-w-0">
                        <div className="break-keep text-sm font-extrabold text-text">{doc.name}</div>
                        <div className="mt-0.5 truncate text-xs text-text-light">{doc.file}</div>
                      </div>
                      <span className="ml-3 inline-flex shrink-0 items-center gap-1 rounded-full bg-red px-3 py-1 text-xs font-extrabold text-white">
                        ⬇ PDF
                      </span>
                    </a>
                  ) : (
                    <div
                      key={doc.file}
                      className="flex items-center justify-between rounded-xl border border-line bg-bg-soft px-5 py-4"
                    >
                      <div className="min-w-0">
                        <div className="break-keep text-sm font-extrabold text-text-mute">{doc.name}</div>
                        <div className="mt-0.5 text-xs text-text-light">준비 중 — 곧 공개됩니다</div>
                      </div>
                      <span className="ml-3 inline-flex shrink-0 items-center rounded-full bg-yellow px-3 py-1 text-xs font-extrabold text-[#92400E]">
                        준비 중
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-line bg-bg-soft p-5 text-[14px] leading-[1.75] text-text-mute">
            💡 위 서류는 PDF로 바로 다운로드하실 수 있습니다(클릭 시 새 창). 추가 자료가 필요하시면
            <a href="mailto:a365center@gmail.com" className="ml-1 font-extrabold text-text underline">a365center@gmail.com</a>로 요청해 주세요.
          </div>
        </div>
      </section>

      <CTASection
        title="자료 요청·원본 송부"
        description="공모·심사·언론용 원본은 대표 직통으로 빠르게 전달드립니다."
      />
    </SiteChrome>
  );
}

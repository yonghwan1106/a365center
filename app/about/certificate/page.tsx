import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader } from "@/components/SubpageBlocks";

export const metadata = {
  title: "고유번호증 — 100% 전면 공개 (워터마크 처리)",
  description: "국세청 고유번호증 원본 100% 공개. 도용·위조 방지를 위해 정중앙 대각선 -24° 2줄 반투명 워터마크 적용.",
};

export default function CertificatePage() {
  return (
    <SiteChrome>
      <section className="bg-bg pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="wrap">
          <span className="mb-5 inline-block rounded-md bg-yellow px-4 py-[7px] text-sm font-extrabold text-[#92400E]">
            ★ 가장 중요 — 투명성
          </span>
          <h1 className="break-keep text-[34px] font-black leading-[1.18] tracking-tight text-text md:text-[48px]">
            국세청 고유번호증
            <br />
            <span className="text-red">100% 전면 공개</span>
          </h1>
          <p className="mt-5 max-w-3xl break-keep text-[17px] leading-[1.8] text-text-mute">
            과거 구글 등 외부 기관 심사 시 홈페이지에 고유번호증이 노출되지 않아 반려된 경험이 있습니다.
            우리 단체의 최우선 철학은 <strong className="text-text">‘투명성’</strong>이므로, 숨기지 않고 당당하게 100% 공개합니다.
            단, 무단 도용·직인 위조 등의 범죄를 원천 차단하기 위해
            <strong className="text-text"> 이미지 정중앙에 대각선 반투명 워터마크</strong>를 적용했습니다.
          </p>
        </div>
      </section>

      {/* 고유번호증 본체 */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="wrap">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-3xl border-2 border-line bg-white p-4 shadow-card-lg md:p-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-bg-soft">
                <Image
                  src="/images/legal/certificate.jpg"
                  alt="경인장애인선교회 고유번호증 원본"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
                {/* 워터마크: 정중앙 대각선 -24°, 2줄 반투명 */}
                <div
                  className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                  style={{ transform: "rotate(-24deg)" }}
                  aria-hidden="true"
                >
                  <div className="text-[clamp(16px,4.2vw,40px)] font-black tracking-[0.18em] text-red/35 drop-shadow-sm">
                    경인 공익네트워크 공식 게시용
                  </div>
                  <div className="mt-2 text-[clamp(14px,3.6vw,34px)] font-black tracking-[0.18em] text-red/35 drop-shadow-sm">
                    무단 복제 및 도용 금지
                  </div>
                </div>
              </div>
              <div className="mt-4 px-2 text-center text-[13px] leading-[1.6] text-text-light">
                ※ 이미지 정중앙 대각선 -24° / 2줄 반투명 워터마크 처리 — 대표 강력 지시 사항
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="WHY"
            title="왜 워터마크인가"
            description="투명성과 도용 방어를 동시에 달성하는 균형 잡힌 운영 원칙입니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="🛡️" title="도용 방어">
              직인 캡처·합성 시도를 즉시 무력화. 반투명이라 정보 확인은 가능하지만 위조에는 사용할 수 없습니다.
            </InfoCard>
            <InfoCard icon="🔍" title="신원 확인 가능">
              번호·명칭·발급일은 그대로 식별 가능. 공공기관 심사용 자료로 그대로 활용할 수 있습니다.
            </InfoCard>
            <InfoCard icon="📜" title="공식 게시용 표기">
              ‘경인 공익네트워크 공식 게시용’ 문구로 출처 명확화. 우리 사이트 외 배포는 비공식 자료임을 명시.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="DOCUMENTS" title="함께 공개하는 핵심 서류" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["경인AI디지털교육자격협회 정관", "PDF"],
              ["민간자격 3종목 자격관리운영규정", "PDF"],
              ["연합푸드뱅크 정관", "PDF"],
              ["연합푸드뱅크 공동운영 협약서", "PDF"],
              ["연합푸드뱅크 내부 운영규정", "PDF"],
              ["경인 평생교육·나눔 사회적협동조합 운영규정", "PDF"],
              ["사회적협동조합 5월21일 정상사용", "PDF"],
              ["우리함께 평생교육·나눔센터 내부 기부금규정", "PDF"],
            ].map(([label, type]) => (
              <a
                key={label}
                href="/about/documents"
                className="flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4 transition-colors hover:bg-yellow"
              >
                <span className="break-keep text-sm font-bold text-text">{label}</span>
                <span className="ml-2 inline-flex items-center rounded-full bg-bg-soft px-3 py-1 text-xs font-extrabold text-text-light">{type}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="서류 원본 요청·공모 제출용 자료 안내"
        description="공공기관·언론사·심사기관용 원본 PDF는 대표 직통으로 빠르게 전달드립니다."
      />
    </SiteChrome>
  );
}

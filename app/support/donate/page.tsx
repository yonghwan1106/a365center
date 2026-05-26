import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "후원 안내 — 법인 통장 개설 중",
  description: "법인 후원 계좌는 행정 절차 완료 후 공개 예정. 현재는 ‘계좌 개설 중’ 상태로, 후원 관심 등록 및 정기·일시 후원 안내를 받으실 수 있습니다.",
};

export default function DonatePage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="후원"
        title="법인 통장"
        accent="개설 중입니다"
        description="대표 회신에 따라 법인 후원 계좌는 행정 절차 완료 후 별도 공지드립니다. 그 사이 후원 관심 등록을 남겨주시면 계좌 개설 즉시 가장 먼저 안내드립니다."
        image="/images/generated/donate-card.png"
        imageAlt="후원 안내 이미지 — 법인 계좌 개설 중"
        actions={[
          { href: "mailto:a365center@gmail.com?subject=%5B%ED%9B%84%EC%9B%90%20%EA%B4%80%EC%8B%AC%20%EB%93%B1%EB%A1%9D%5D&body=%EC%9D%B4%EB%A6%84%3A%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%0A%ED%9B%84%EC%9B%90%20%EC%9C%A0%ED%98%95(%EC%9D%BC%EC%8B%9C%2F%EC%A0%95%EA%B8%B0)%3A%0A%EB%A9%94%EB%AA%A8%3A", label: "✉ 후원 관심 등록" },
          { href: "tel:010-9867-3121", label: "📞 대표 직통", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-yellow-strong bg-gradient-to-b from-[#FFFBEB] to-white p-8 text-center shadow-card-md md:p-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-strong/15 px-4 py-1.5 text-sm font-extrabold text-[#7C2D12]">
              🚧 계좌 개설 중
            </div>
            <h2 className="break-keep text-2xl font-black tracking-tight text-text md:text-3xl">
              법인 통장 개설 행정 절차 진행 중
            </h2>
            <p className="mx-auto mt-4 max-w-xl break-keep text-[15px] leading-[1.8] text-text-mute">
              우리 단체의 후원 계좌는 사단법인 부설 단체 통장 개설 절차를 거쳐 공개됩니다.
              <br className="hidden md:block" />
              절차 완료 즉시 본 페이지와 알림마당에 공지하며, 사전 등록하신 분께 가장 먼저 안내드립니다.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <a
                href="mailto:a365center@gmail.com?subject=%5B%ED%9B%84%EC%9B%90%20%EA%B4%80%EC%8B%AC%20%EB%93%B1%EB%A1%9D%5D"
                className="inline-flex items-center justify-center rounded-xl bg-red px-6 py-4 text-base font-extrabold text-white shadow-card-md transition-all hover:-translate-y-px hover:bg-red-dark"
              >
                ✉ 이메일로 관심 등록
              </a>
              <a
                href="tel:010-9867-3121"
                className="inline-flex items-center justify-center rounded-xl bg-navy-deep px-6 py-4 text-base font-extrabold text-white shadow-card-md transition-all hover:-translate-y-px hover:bg-navy"
              >
                📞 010-9867-3121
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="WHERE IT GOES" title="후원금은 이렇게 사용됩니다" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="📱" title="디지털 교육 운영">
              어르신·장애인 디지털 교육 교재·교구·강사 인건비. 100% 무료 운영의 재원.
            </InfoCard>
            <InfoCard icon="🤖" title="AI 선생님 API 비용">
              구글 Gemini API + 음성 인식·TTS 운영비. 12인 교실 1회 운영 비용은 별도 공시 예정.
            </InfoCard>
            <InfoCard icon="🥫" title="푸드뱅크 나눔">
              연합푸드뱅크 물품 수거·분류·배송 운영비. 지역 이웃 식탁 지원.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="TRANSPARENCY" title="투명성 약속" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon="📜" title="정관·운영규정 100% 공개">
              내부 기부금규정, 협동조합 운영규정, 푸드뱅크 정관·협약서 모두 PDF로 공개합니다.
            </InfoCard>
            <InfoCard icon="🛡️" title="공시 의무 준수">
              계좌 개설 후에는 정기 결산 공시와 분기별 사용 보고서를 알림마당에 게시합니다.
            </InfoCard>
          </div>
        </div>
      </section>

      <CTASection
        title="기업·기관 대규모 후원 문의"
        description="MOU·CSR·지정후원금 등은 별도 협의 가능합니다. 대표 직통으로 연락 주세요."
      />
    </SiteChrome>
  );
}

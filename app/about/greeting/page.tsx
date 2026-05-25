import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "대표 인사말 — 우리함께 평생교육·나눔센터",
  description: "경인 공익네트워크 대표 김재완 인사말 — 사랑의 복지와 미래를 여는 AI 기술로, 소외된 이웃과 늘 함께하겠습니다.",
};

export default function GreetingPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="대표 인사말"
        title="사랑의 복지와 미래를 여는 AI 기술로,"
        accent="소외된 이웃과 늘 함께하겠습니다."
        description="경인 공익네트워크 대표 김재완이 전하는 인사말입니다. 신앙적 뿌리 위에서 AI와 디지털 기술을 복지에 융합하는 단체의 철학과 비전을 담았습니다."
        image="/images/generated/representative-greeting-card.png"
        imageAlt="경인 공익네트워크 대표 김재완 인사말 이미지"
        actions={[
          { href: "/about/identity", label: "단체 정체성 보기", tone: "navy" },
          { href: "/about/history", label: "연혁 보기" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-8 shadow-card-md md:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-deep text-2xl font-extrabold text-white shadow-card-md md:h-20 md:w-20 md:text-[28px]">
                김
              </div>
              <div>
                <div className="text-sm font-semibold text-text-light">경인 공익네트워크</div>
                <div className="text-xl font-extrabold text-text md:text-2xl">대표 · 김재완</div>
              </div>
            </div>

            <div className="space-y-5 break-keep text-[16px] leading-[1.95] text-text-mute md:text-[17px]">
              <p>안녕하십니까. 경인 공익네트워크 대표 김재완입니다.</p>
              <p>
                저희 경인 공익네트워크는 <strong className="text-text">사단법인 경인교회와 경인장애인선교회의 신앙적 뿌리</strong> 위에서
                소외계층, 장애인, 어르신 등 우리 사회의 가장 따뜻한 손길이 필요한 이웃들을 보듬어 왔습니다.
              </p>
              <p>
                이제 우리는 한 걸음 더 나아가, 4차 산업혁명의 핵심인 <strong className="text-text">AI와 디지털 기술을 복지에 융합</strong>하고자 합니다.
                ‘우리함께 평생교육·나눔센터’와 ‘경인AI디지털교육자격협회’를 통해 누구나 디지털 시대의 주역이 될 수 있도록 혁신적인 교육과 민간자격 과정을
                전면 지원하며, ‘경인푸드뱅크’를 통해 이웃들의 든든한 삶의 울타리가 되어드리고 있습니다.
              </p>
              <p>
                복지와 교육, 그리고 미디어가 하나로 연결되는 이 거대한 사랑의 전선에 여러분의 따뜻한 관심과 동행을 부탁드립니다.
                <strong className="text-text"> 절망이 있는 곳에 소망을, 소외가 있는 곳에 디지털의 기회를 전하는 가장 투명하고 공신력 있는 동반자</strong>가 되겠습니다.
              </p>
              <p>감사합니다.</p>
            </div>

            <div className="mt-8 border-t border-line pt-5 text-right">
              <div className="text-sm font-semibold text-text-light">경인 공익네트워크 대표</div>
              <div className="mt-1 text-xl font-extrabold tracking-tight text-text">김재완</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="공모·취재·후원 문의는 전화 한 통으로"
        description="대표 직통 010-9867-3121 — 김재완 대표가 직접 응대합니다."
      />
    </SiteChrome>
  );
}

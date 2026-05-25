import SiteChrome from "@/components/SiteChrome";
import { InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";
import AITeacherClient from "./AITeacherClient";

export const metadata = {
  title: "AI 선생님 · 어르신 12명 교실 — 우리함께 평생교육·나눔센터",
  description:
    "50인치 모니터 앞에서 어르신 12명이 함께 배우는 AI 선생님 파일럿. 음성 인식·음성 출력·60px 큰 글씨. Gemini API 기반.",
};

export default function AITeacherPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="AI 선생님 파일럿 v1"
        title="50인치 화면 앞에서"
        accent="AI 선생님과 함께 배웁니다"
        description="마이크에 말씀하시거나 직접 입력하면 AI 선생님이 어르신 눈높이로 쉽게 답해드립니다. 큰 글씨, 음성 출력, 한국어 설명을 기준으로 만든 12인용 교육 파일럿입니다."
        image="/images/generated/ai-teacher-classroom-card.png"
        imageAlt="AI 선생님 교실 카드뉴스"
        actions={[
          { href: "#ai-teacher-lab", label: "바로 체험하기" },
          { href: "/education", label: "교육 과정 보기", tone: "navy" },
        ]}
      />

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="수업 환경"
            title="어르신이 놓치지 않도록 크게, 천천히"
            description="교실에서 바로 쓰기 위한 조건을 중심으로 구성했습니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <InfoCard icon="🎙️" title="음성 인식">
              손가락 입력이 어려운 분도 질문을 말로 남길 수 있습니다.
            </InfoCard>
            <InfoCard icon="🔊" title="음성 출력">
              답변을 화면뿐 아니라 스피커로 함께 들을 수 있습니다.
            </InfoCard>
            <InfoCard icon="🔠" title="큰 글씨">
              50인치 모니터에서도 멀리서 읽히도록 답변 영역을 크게 구성했습니다.
            </InfoCard>
            <InfoCard icon="🤖" title="쉬운 설명">
              어려운 용어보다 생활 예시와 짧은 문장으로 안내하도록 설계했습니다.
            </InfoCard>
          </div>
        </div>
      </section>

      <section id="ai-teacher-lab" className="scroll-mt-24 py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="체험실"
            title="AI 선생님에게 직접 물어보기"
            description="실제 수업에서는 강사가 질문을 정리하고, 답변을 함께 읽으며 필요한 부분을 다시 설명합니다."
          />
        <AITeacherClient />
          <p className="mt-6 text-center text-xs font-semibold leading-[1.7] text-text-light">
            안전 안내 · API 키는 서버 환경변수로 분리되어 있으며 클라이언트는 키에 직접 접근하지 않습니다.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}

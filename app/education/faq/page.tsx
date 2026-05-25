import SiteChrome from "@/components/SiteChrome";
import { CTASection, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "교육 FAQ — 자주 묻는 질문",
  description: "수강료, 신청 방법, 교실 접근성, AI 선생님, 자격증, 보호자 동반 등 디지털 교육에 대한 자주 묻는 질문 모음.",
};

const FAQS = [
  {
    q: "수강료는 얼마인가요?",
    a: "100% 무료입니다. 단체의 운영 철학상 어르신·장애인 디지털 교육은 전 과정 무료로 제공합니다. 별도 자료비·교재비도 없습니다.",
  },
  {
    q: "스마트폰을 못 다루는데도 신청할 수 있나요?",
    a: "물론입니다. STEP 01 ‘스마트폰 기초반’이 바로 그런 분들을 위한 과정입니다. 전원 켜기와 글자 크기 조절부터 천천히 반복 실습합니다.",
  },
  {
    q: "어디서 수업이 진행되나요?",
    a: "메디스타워 213호 (경기도 용인특례시 기흥구 동백죽전대로 341). 동백역 1번 출구에서 도보 5분이며, 휠체어·유모차 접근 가능합니다.",
  },
  {
    q: "한 반에 몇 명까지 수강하나요?",
    a: "12명 정원입니다. 50인치 모니터를 보면서 강사 + AI 선생님이 함께 가르치는 소규모 교실 구조입니다.",
  },
  {
    q: "보호자나 가족과 함께 가도 되나요?",
    a: "환영합니다. 신청서에 ‘보호자 동반’ 체크하시면 됩니다. 휠체어 이용·수어 통역 요청도 사전 안내 부탁드립니다.",
  },
  {
    q: "AI 선생님이 뭔가요?",
    a: "구글 Gemini API + 음성 인식(STT) + 음성 출력(TTS) + 60px 큰 글씨 출력으로 어르신 눈높이에서 답해주는 AI 보조 강사입니다. 김재완 대표가 직접 코딩한 파일럿 v1이 가동 중입니다.",
  },
  {
    q: "민간자격증을 받을 수 있나요?",
    a: "현재 민간자격 3종은 2026년 6월 1일 등록 신청 예정입니다. 등록 완료 후 정식 자격증 발급이 가능해지며, 지금은 ‘준비 중’ 상태입니다.",
  },
  {
    q: "신청 후 언제 연락이 오나요?",
    a: "온라인 신청 후 영업일 기준 1~2일 내 대표가 직접 전화로 연락드립니다. 급하신 경우 010-9867-3121로 직접 전화 주세요.",
  },
  {
    q: "주차는 가능한가요?",
    a: "메디스타워 지하 무료 주차가 가능합니다. 동백역 도보권이라 대중교통 이용도 편리합니다.",
  },
  {
    q: "수료 후에는 무엇을 할 수 있나요?",
    a: "시민기자단 활동, 푸드뱅크 봉사, 협동조합 사업 참여, 수익 창출반 후속 과정 등으로 자연스럽게 연결됩니다.",
  },
];

export default function FAQPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="FAQ"
        title="자주 묻는 질문"
        accent="궁금증을 한 번에 풀어드립니다"
        description="수강료, 신청 방법, 교실 접근성, AI 선생님, 자격증, 보호자 동반 등 디지털 교육에 관한 모든 질문에 답변드립니다."
        image="/images/generated/faq-card.png"
        imageAlt="교육 FAQ 안내 이미지"
        actions={[
          { href: "/education/apply", label: "온라인 신청서", tone: "navy" },
          { href: "tel:010-9867-3121", label: "전화로 문의" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="wrap">
          <div className="mx-auto max-w-4xl space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-line bg-white p-6 shadow-card-sm transition-all open:bg-bg-soft md:p-7"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 break-keep text-base font-extrabold text-text md:text-lg">
                  <span className="flex items-start gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-yellow text-sm font-black text-[#92400E]">
                      Q
                    </span>
                    {f.q}
                  </span>
                  <span className="ml-2 text-text-light transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="mt-4 flex items-start gap-3 break-keep text-sm leading-[1.85] text-text-mute md:text-[15px]">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-bg-soft text-sm font-black text-text-light">
                    A
                  </span>
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="더 궁금한 점이 있다면"
        description="대표 직통 010-9867-3121로 언제든 전화 주세요."
      />
    </SiteChrome>
  );
}

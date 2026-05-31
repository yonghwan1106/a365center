import { notFound } from "next/navigation";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

const courses = {
  "smartphone-basic": {
    eyebrow: "STEP 01",
    title: "스마트폰 기초반",
    accent: "전원 켜기부터 천천히",
    description:
      "스마트폰을 처음 만지는 분도 불안하지 않도록 화면 켜기, 글자 크기 조절, 전화·문자·카카오톡·사진 촬영을 반복 실습합니다.",
    image: "/images/generated/smartphone-basic-class-card.png",
    imageAlt: "스마트폰 기초반 카드뉴스",
    goal: "혼자서 가족과 연락하고 사진을 찍어 보낼 수 있게 됩니다.",
    modules: ["전원·잠금 화면 익히기", "글자 크기와 소리 조절", "전화·문자·연락처 저장", "카카오톡과 사진 보내기"],
    outcome: ["손주에게 사진 보내기", "문자 확인하기", "긴급 연락 바로 걸기"],
  },
  "life-use": {
    eyebrow: "STEP 02",
    title: "생활 활용반",
    accent: "예약과 결제를 혼자 해봅니다",
    description:
      "병원 예약, 교통 확인, QR 코드, 간편 결제처럼 일상에서 자주 막히는 스마트폰 사용을 실제 상황 중심으로 배웁니다.",
    image: "/images/generated/life-use-class-card.png",
    imageAlt: "생활 활용반 카드뉴스",
    goal: "가족에게 매번 부탁하지 않고 기본 생활 서비스를 직접 이용할 수 있게 됩니다.",
    modules: ["병원 예약 화면 이해", "버스·지하철 경로 확인", "QR 코드와 전자문서", "간편 결제와 안전 주의"],
    outcome: ["병원 예약 확인", "대중교통 길 찾기", "위험한 문자 구별하기"],
  },
  "ai-practical": {
    eyebrow: "STEP 03",
    title: "AI 실무반",
    accent: "말로 묻고 글로 정리합니다",
    description:
      "OST 똑똑이 선생님에게 질문하고, 음성 입력으로 글을 만들고, 생활 정보와 공익 활동 기록을 쉽게 정리하는 방법을 배웁니다.",
    image: "/images/generated/ai-teacher-classroom-card.png",
    imageAlt: "OST 똑똑이 선생님 교실 카드뉴스",
    goal: "AI를 어려운 기술이 아니라 생활을 돕는 도구로 사용할 수 있게 됩니다.",
    modules: ["AI에게 질문하는 법", "음성 입력으로 글쓰기", "생활 정보 검색과 확인", "기사·홍보글 초안 만들기"],
    outcome: ["질문을 쉬운 말로 바꾸기", "짧은 안내문 작성", "시민기자단 글 초안 만들기"],
  },
  income: {
    eyebrow: "STEP 04",
    title: "수익창출반",
    accent: "작은 재능을 온라인으로 연결합니다",
    description:
      "스마트스토어, 유튜브, 재능마켓, 지역 기록 활동처럼 어르신이 무리하지 않고 시도할 수 있는 작은 수익 활동을 익힙니다.",
    image: "/images/generated/income-creation-class-card.png",
    imageAlt: "수익창출반 카드뉴스",
    goal: "큰돈보다 지속 가능한 소소한 활동과 자신감을 만드는 것을 목표로 합니다.",
    modules: ["팔 수 있는 재능 찾기", "상품 사진과 설명 작성", "짧은 영상 촬영 기초", "사기·과장 광고 피하기"],
    outcome: ["상품 소개글 작성", "짧은 영상 기획", "안전한 거래 원칙 이해"],
  },
} satisfies Record<
  string,
  {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    image: string;
    imageAlt: string;
    goal: string;
    modules: string[];
    outcome: string[];
  }
>;

type CourseKey = keyof typeof courses;

export function generateStaticParams() {
  return Object.keys(courses).map((course) => ({ course }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const item = courses[course as CourseKey];
  if (!item) return {};
  return {
    title: `${item.title} — 우리함께 평생교육·나눔센터`,
    description: item.description,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const item = courses[course as CourseKey];
  if (!item) notFound();

  return (
    <SiteChrome>
      <SubpageHero
        eyebrow={item.eyebrow}
        title={item.title}
        accent={item.accent}
        description={item.description}
        image={item.image}
        imageAlt={item.imageAlt}
        actions={[
          { href: "tel:010-9867-3121", label: "수업 문의하기" },
          { href: "/education", label: "전체 과정 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="수업 목표" title={item.goal} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon="🧩" title="무엇을 배우나요?">
              <ul className="space-y-2">
                {item.modules.map((module) => (
                  <li key={module}>· {module}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard icon="✅" title="수업 후 할 수 있는 일">
              <ul className="space-y-2">
                {item.outcome.map((outcome) => (
                  <li key={outcome}>· {outcome}</li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard title="수업 방식">
            큰 화면, 큰 글씨, 반복 실습으로 진행합니다. 강사가 옆에서 천천히 확인하며 넘어갑니다.
          </InfoCard>
          <InfoCard title="준비물">
            본인 스마트폰을 가져오시면 가장 좋습니다. 충전기와 자주 쓰는 앱 비밀번호도 함께 확인해주세요.
          </InfoCard>
          <InfoCard title="비용">
            수업료와 교재비는 무료입니다. 정원과 일정은 전화 상담 후 안내합니다.
          </InfoCard>
        </div>
      </section>

      <CTASection
        title={`${item.title} 접수를 안내해드립니다`}
        description="현재 수준을 먼저 확인하고 가장 맞는 반으로 연결해드립니다."
      />
    </SiteChrome>
  );
}

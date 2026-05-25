import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "디지털 교육 — 우리함께 평생교육·나눔센터",
  description: "스마트폰 기초부터 생활 활용, AI 실무, 수익 창출까지 이어지는 어르신·장애인 무료 교육 과정.",
};

const curriculum = [
  ["📱", "스마트폰 기초반", "전원 켜기, 글자 키우기, 카카오톡, 사진 촬영처럼 가장 자주 쓰는 기능부터 배웁니다.", "/education/smartphone-basic"],
  ["💳", "생활 활용반", "병원 예약, 교통 앱, 간편 결제, 온라인 민원처럼 혼자 하기 어려웠던 생활 과제를 함께 해결합니다.", "/education/life-use"],
  ["🤖", "AI 실무반", "AI 선생님, 음성 질문, 글쓰기 도움, 정보 검색처럼 새로운 도구를 어르신 눈높이로 익힙니다.", "/education/ai-practical"],
  ["📈", "수익창출반", "스마트스토어, 유튜브, 재능 마켓, 지역 기록 활동 등 작은 수익 가능성까지 연결합니다.", "/education/income"],
];

export default function EducationPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="디지털 교육"
        title="못해서가 아니라"
        accent="배울 기회가 부족했을 뿐입니다"
        description="우리함께의 교육은 빠른 진도보다 실제 생활 변화를 우선합니다. 스마트폰을 처음 켜는 단계부터 AI를 활용한 글쓰기와 수익 활동까지 네 단계로 천천히 이어갑니다."
        image="/images/generated/smartphone-basic-class-card.png"
        imageAlt="스마트폰 기초반 카드뉴스"
        actions={[
          { href: "tel:010-9867-3121", label: "수업 문의하기" },
          { href: "/education/ai-teacher", label: "AI 선생님 체험", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="4단계 과정"
            title="기초, 생활, AI, 수익까지 한 흐름으로"
            description="각 단계는 별도 과목이 아니라 실제 생활 문제를 해결하는 순서입니다."
          />
          <div className="mx-auto mb-9 max-w-[940px] rounded-2xl border border-line bg-white p-3 shadow-card-md md:p-4">
            <Image
              src="/images/generated/education-roadmap-card.png"
              alt="스마트폰 기초부터 수익 창출까지 이어지는 4단계 교육 로드맵"
              width={2048}
              height={1280}
              sizes="(max-width: 768px) 100vw, 940px"
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map(([icon, title, desc, href]) => (
              <Link key={title} href={href} className="group block">
                <InfoCard icon={icon} title={title}>
                  <p>{desc}</p>
                  <span className="mt-4 inline-block border-b border-text pb-1 font-extrabold text-text group-hover:border-red group-hover:text-red">
                    상세보기 →
                  </span>
                </InfoCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEB] py-12 md:py-14">
        <div className="wrap grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard title="수업 대상">
            40~70대 어르신, 장애인, 스마트폰 초보자, 가족 도움 없이 앱 사용이 어려운 분을 우선합니다.
          </InfoCard>
          <InfoCard title="수업 방식">
            50인치 모니터, 큰 글씨, 반복 실습, 음성 안내를 사용합니다. 혼자 뒤처지지 않도록 12명 안팎의 소규모 수업으로 운영합니다.
          </InfoCard>
          <InfoCard title="수업 비용">
            수업료와 교재비는 100% 무료입니다. 준비물은 본인 스마트폰과 천천히 배워보겠다는 마음이면 충분합니다.
          </InfoCard>
        </div>
      </section>

      <CTASection
        title="5월 교육생 모집 중입니다"
        description="정원과 시간표는 전화로 먼저 확인해주세요. 선착순 접수로 조기 마감될 수 있습니다."
      />
    </SiteChrome>
  );
}

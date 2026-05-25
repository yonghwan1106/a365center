import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "오시는 길 — 우리함께 평생교육·나눔센터",
  description: "경기도 용인특례시 기흥구 동백죽전대로 341, 메디스타워 213호. 동백역 도보 5분.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="오시는 길"
        title="메디스타워 213호"
        accent="동백역에서 도보 5분"
        description="수업과 상담은 경기도 용인특례시 기흥구 동백죽전대로 341, 메디스타워 213호에서 진행합니다. 처음 오시는 분은 전화로 위치와 접근 동선을 먼저 안내받으시면 편합니다."
        image="/images/generated/hero-senior-smartphone-class.png"
        imageAlt="우리함께 평생교육 나눔센터 교육 현장"
        actions={[
          { href: "tel:010-9867-3121", label: "전화로 길 안내 받기" },
          { href: "/education", label: "수업 보기", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader
            eyebrow="방문 안내"
            title="처음 오셔도 헤매지 않게"
            description="주소, 대중교통, 주차, 접근성 정보를 한 곳에 정리했습니다."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-line bg-white p-4 shadow-card-md md:p-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#CFE1D1] bg-[#EEF8EF]">
                <Image
                  src="/images/generated/access-map-card.png"
                  alt="동백역 1번 출구에서 메디스타워 213호까지 도보 5분 안내 지도"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <InfoCard icon="🏢" title="주소">
                경기도 용인특례시 기흥구 동백죽전대로 341, 메디스타워 213호
              </InfoCard>
              <InfoCard icon="🚇" title="대중교통">
                동백역 1번 출구에서 도보 약 5분입니다. 길이 헷갈리시면 도착 전 전화주세요.
              </InfoCard>
              <InfoCard icon="♿" title="주차·접근성">
                무료 주차가 가능하며 휠체어·유모차 접근을 고려해 안내합니다. 방문 전 상황을 알려주시면 동선을 확인해드립니다.
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="방문 전 연락주시면 더 편합니다" description="수업 시간, 상담 가능 시간, 주차와 접근 동선을 미리 안내해드립니다." />
    </SiteChrome>
  );
}

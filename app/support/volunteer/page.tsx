import SiteChrome from "@/components/SiteChrome";
import { CTASection, InfoCard, SectionHeader, SubpageHero } from "@/components/SubpageBlocks";

export const metadata = {
  title: "자원봉사 신청 — 함께 일할 분을 찾습니다",
  description: "디지털 교육 보조, 푸드뱅크 분류·배달, 시민기자단 취재, AI 선생님 보조 등 다양한 자원봉사 영역. 상시 모집.",
};

const ROLES = [
  { icon: "📱", title: "디지털 교육 보조", time: "주 1~2회, 2시간", desc: "어르신 1:1 보조 강사. 스마트폰 기초·생활 활용반에서 학생 옆자리 보조." },
  { icon: "🤖", title: "AI 선생님 보조", time: "주 1회, 2시간", desc: "12인 교실에서 음성 인식 결과 검토·오답 보고. IT 기초만 있으면 OK." },
  { icon: "🥫", title: "푸드뱅크 분류·배달", time: "주 1~2회, 3시간", desc: "수거된 식품 분류·포장·배달. 차량 없어도 가능 (배달 동행 보조 가능)." },
  { icon: "📰", title: "시민기자단 취재", time: "월 1~2회, 자율", desc: "지역 기록·기관 취재·기사 작성. 카메라·녹음기 지급. 글쓰기 기초 교육 제공." },
  { icon: "🎨", title: "교재·홍보물 제작", time: "재택 가능", desc: "큰 글씨 교재, 카드뉴스, SNS 콘텐츠 제작. 디자인 도구 사용 가능자 환영." },
  { icon: "📊", title: "회계·행정 보조", time: "월 1~2회, 3시간", desc: "영수증 정리, 공시 자료 보조. 회계 자격증·경험자 우대." },
];

export default function VolunteerPage() {
  return (
    <SiteChrome>
      <SubpageHero
        eyebrow="자원봉사"
        title="함께 일할 분을"
        accent="찾습니다"
        description="우리함께 평생교육·나눔센터의 모든 사역은 자원봉사자의 손길로 운영됩니다. 디지털·미디어·나눔 어느 영역이든 환영합니다. 본인의 강점과 가능한 시간만 알려주세요."
        image="/images/generated/volunteer-card.png"
        imageAlt="자원봉사 모집 안내 이미지"
        actions={[
          { href: "mailto:a365center@gmail.com?subject=%5B%EC%9E%90%EC%9B%90%EB%B4%89%EC%82%AC%20%EC%8B%A0%EC%B2%AD%5D&body=%EC%9D%B4%EB%A6%84%3A%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%0A%ED%9D%AC%EB%A7%9D%20%EC%98%81%EC%97%AD%3A%0A%EA%B0%80%EB%8A%A5%20%EC%8B%9C%EA%B0%84%EB%8C%80%3A%0A%EA%B0%95%EC%A0%90%2F%EA%B2%BD%ED%97%98%3A", label: "✉ 봉사 신청서 보내기" },
          { href: "tel:010-9867-3121", label: "📞 전화 문의", tone: "navy" },
        ]}
      />

      <section className="py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="ROLES" title="자원봉사 영역" description="모든 영역 상시 모집 중입니다." />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <div key={r.title} className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
                <div className="mb-3 text-3xl">{r.icon}</div>
                <h3 className="break-keep text-lg font-extrabold tracking-tight text-text">{r.title}</h3>
                <div className="mt-1 text-xs font-bold text-yellow-strong">{r.time}</div>
                <p className="mt-3 break-keep text-sm leading-[1.8] text-text-mute">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-14">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT WE OFFER" title="자원봉사자 지원" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard icon="✅" title="봉사 시간 인증">VMS·1365 자원봉사 시간 인증 가능 (개설 즉시 등록 예정).</InfoCard>
            <InfoCard icon="🍱" title="식사·교통 지원">활동 시간에 따라 식사·교통비 일부 지원.</InfoCard>
            <InfoCard icon="🎓" title="역량 교육">디지털 교육 기초, 미디어 기획, 푸드뱅크 운영 교육 무료 제공.</InfoCard>
          </div>
        </div>
      </section>

      <CTASection
        title="단체 자원봉사 (기업·교회·학교) 환영"
        description="10명 이상 단체 봉사는 사전 협의가 필요합니다. 대표 직통으로 연락 주세요."
      />
    </SiteChrome>
  );
}

import Link from "next/link";

export default function Closing() {
  return (
    <section id="cta" className="bg-bg py-14 md:py-16">
      <div className="wrap">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-2 text-sm font-extrabold tracking-wide text-yellow-strong">함께해 주세요</div>
          <h2 className="break-keep text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:text-3xl">
            전화 한 통, 작은 후원, 따뜻한 손길이 큰 변화를 만듭니다
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* 전화 (가장 큰 강조) */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-red bg-gradient-to-b from-[#FEF3C7] to-[#FFFBEB] p-7 text-center shadow-card-md md:p-8">
            <div className="mb-2 text-sm font-extrabold text-red">📞 전화 상담</div>
            <div className="my-2 text-[32px] font-black tracking-tight text-text md:text-[36px]">
              010-9867-3121
            </div>
            <div className="mb-5 text-[13.5px] leading-[1.7] text-text-mute">
              어르신·장애인·교회 사역자 모두 환영합니다.
              <br />언제든 편하게 연락 주세요.
            </div>
            <a
              href="tel:010-9867-3121"
              className="inline-flex items-center justify-center rounded-full bg-red px-8 py-[14px] text-[15px] font-extrabold text-white shadow-[0_8px_20px_rgba(229,57,53,0.30)] transition-all hover:-translate-y-px hover:bg-red-dark"
            >
              지금 전화하기
            </a>
          </div>

          {/* 후원 */}
          <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-7 text-center shadow-card-sm md:p-8">
            <div className="mb-2 text-sm font-extrabold text-yellow-strong">💛 후원</div>
            <div className="my-2 text-xl font-extrabold tracking-tight text-text md:text-[22px]">
              법인 후원 계좌
            </div>
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-yellow px-3 py-1 text-[12.5px] font-extrabold text-[#92400E]">
              🚧 계좌 개설 중
            </div>
            <div className="mb-5 text-[13.5px] leading-[1.7] text-text-mute">
              법인 통장 개설 행정 절차 완료 후 별도 공지드립니다.
              <br />문의는 전화·이메일로 부탁드립니다.
            </div>
            <Link
              href="/support/donate"
              className="inline-flex items-center justify-center rounded-full bg-navy-deep px-6 py-[13px] text-[14px] font-extrabold text-white transition-all hover:-translate-y-px hover:bg-navy"
            >
              후원 안내 보기
            </Link>
          </div>

          {/* 자원봉사 */}
          <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-7 text-center shadow-card-sm md:p-8">
            <div className="mb-2 text-sm font-extrabold text-green">🤝 자원봉사</div>
            <div className="my-2 text-xl font-extrabold tracking-tight text-text md:text-[22px]">
              함께 일할 분을 찾습니다
            </div>
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] px-3 py-1 text-[12.5px] font-extrabold text-[#065F46]">
              ✅ 상시 모집
            </div>
            <div className="mb-5 text-[13.5px] leading-[1.7] text-text-mute">
              디지털 교육 보조, 푸드뱅크 분류·배달, 시민기자단 취재
              <br />등 다양한 영역에서 참여 가능합니다.
            </div>
            <Link
              href="/support/volunteer"
              className="inline-flex items-center justify-center rounded-full bg-green px-6 py-[13px] text-[14px] font-extrabold text-white transition-all hover:-translate-y-px hover:opacity-90"
            >
              봉사 신청하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

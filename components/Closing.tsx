import Image from "next/image";

export default function Closing() {
  return (
    <section id="contact" className="scroll-mt-24 pt-10 pb-14 md:pt-12 md:pb-16">
      <div className="wrap">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {/* 대표 인사말 */}
          <div className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card-sm lg:p-8">
            <div className="flex gap-[14px] items-center mb-[18px]">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#94A3B8] to-[#475569] text-[26px] font-extrabold text-white shadow-card-md lg:h-20 lg:w-20 lg:text-[30px]">
                김
              </div>
              <div className="min-w-0">
                <div className="text-[12.5px] font-semibold leading-[1.45] text-text-light lg:text-[13px]">우리함께 평생교육·나눔센터</div>
                <div className="text-lg font-extrabold tracking-tight text-text lg:text-xl">센터장 · 김재완</div>
              </div>
            </div>
            <p className="break-words rounded-xl border-l-[3px] border-yellow-strong bg-bg-soft px-5 py-4 text-sm leading-[1.85] text-text-mute">
              “메디스타워 213호 작은 공간이 어르신들의 인생을 다시 시작할 수 있는 새로운 출발점이 되길 진심으로 응원합니다.”
            </p>
          </div>

          {/* 전화 */}
          <div className="flex flex-col items-center rounded-2xl border border-[#F7D981] bg-gradient-to-b from-[#FEF3C7] to-[#FFFBEB] p-7 text-center shadow-card-sm lg:p-8">
            <div className="font-bold text-[#92400E] text-sm mb-[10px]">전화 한 통이면 됩니다.</div>
            <h4 className="mb-3 flex max-w-full flex-wrap items-center justify-center gap-2 break-all text-[29px] font-extrabold tracking-tight text-text lg:text-[34px]">
              <span className="text-[30px] text-red">📞</span>010-9867-3121
            </h4>
            <div className="mb-6 text-[13.5px] leading-[1.7] text-text-mute">
              따뜻한 환영
              <br />
              어르신·장애인·교회 사역자 모두 환영합니다.
            </div>
            <a
              href="tel:010-9867-3121"
              className="bg-red text-white px-8 py-[14px] rounded-full font-extrabold text-[15px] shadow-[0_8px_20px_rgba(229,57,53,0.30)] hover:bg-red-dark hover:-translate-y-[2px] transition-all"
            >
              지금 전화하기
            </a>
          </div>

          {/* 오시는 길 */}
          <div className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card-sm lg:p-8">
            <h4 className="mb-[10px] flex items-center gap-[6px] text-sm font-bold text-text-mute">🗺️ 오시는 길</h4>
            <div className="mb-[14px] text-base font-extrabold leading-[1.55] tracking-tight text-text">
              경기도 용인특례시 기흥구 동백죽전대로 341, 213호
            </div>
            <div
              className="relative mb-[14px] min-h-[150px] flex-1 overflow-hidden rounded-xl border border-[#CFE1D1] bg-[#EEF8EF]"
            >
              <Image
                src="/images/generated/access-map-card.png"
                alt="동백역 1번 출구에서 메디스타워 213호까지 도보 5분 안내 지도"
                fill
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
            <div className="text-[13.5px] text-text-mute leading-[1.8]">
              <b className="text-text font-bold">🚇 동백역</b> 1번 출구 도보 5분
              <br />
              <b className="text-text font-bold">🚗 무료 주차</b> · 휠체어·유모차 접근 가능
            </div>
            <a href="/contact" className="mt-[14px] self-start text-text font-bold text-[13px] border-b border-text pb-[2px]">
              지도 보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

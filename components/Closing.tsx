export default function Closing() {
  return (
    <section id="contact" className="py-20">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 대표 인사말 */}
          <div className="bg-white border border-line rounded-[20px] p-8 flex flex-col">
            <div className="flex gap-[14px] items-center mb-[18px]">
              <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-[#94A3B8] to-[#475569] flex items-center justify-center text-white font-extrabold text-[30px] shadow-card-md">
                김
              </div>
              <div>
                <div className="text-[13px] text-text-light font-semibold">우리함께 평생교육·나눔센터</div>
                <div className="font-extrabold text-xl text-text tracking-wider">센터장 · 김재완</div>
              </div>
            </div>
            <p className="text-sm text-text-mute leading-[1.8] px-[18px] py-[14px] bg-bg-soft rounded-xl border-l-[3px] border-yellow-strong">
              “메디스타워 213호 작은 공간이 어르신들의 인생을 다시 시작할 수 있는 새로운 출발점이 되길 진심으로 응원합니다.”
            </p>
          </div>

          {/* 전화 */}
          <div className="bg-gradient-to-b from-[#FEF3C7] to-[#FFFBEB] rounded-[20px] p-8 flex flex-col items-center text-center">
            <div className="font-bold text-[#92400E] text-sm mb-[10px]">전화 한 통이면 됩니다.</div>
            <h4 className="font-extrabold text-[36px] text-text tracking-tight mb-2 flex items-center gap-2">
              <span className="text-red text-[32px]">📞</span>010-9867-3121
            </h4>
            <div className="text-[13.5px] text-text-mute mb-6 leading-[1.7]">
              따뜻한 환영
              <br />
              어르신·장애인·교회 사역자 모두 환영합니다.
            </div>
            <a
              href="tel:010-9867-3121"
              className="mt-auto bg-red text-white px-8 py-[14px] rounded-full font-extrabold text-[15px] shadow-[0_8px_20px_rgba(229,57,53,0.30)] hover:bg-red-dark hover:-translate-y-[2px] transition-all"
            >
              지금 전화하기
            </a>
          </div>

          {/* 오시는 길 */}
          <div className="bg-white border border-line rounded-[20px] p-8 flex flex-col">
            <h4 className="font-bold text-sm text-text-mute mb-[10px] flex items-center gap-[6px]">🗺️ 오시는 길</h4>
            <div className="font-extrabold text-base text-text leading-[1.55] mb-[14px] tracking-tight">
              경기도 용인특례시 기흥구 동백죽전대로 341, 213호
            </div>
            <div
              className="flex-1 min-h-[120px] rounded-xl mb-[14px] relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #D6E4D8 0%, #B5D2B5 100%)" }}
            >
              <div className="absolute inset-0 opacity-60" style={{
                background: "linear-gradient(90deg, transparent 0 49.5%, rgba(255,255,255,0.5) 49.5% 50.5%, transparent 50.5% 100%), linear-gradient(0deg, transparent 0 49.5%, rgba(255,255,255,0.5) 49.5% 50.5%, transparent 50.5% 100%)",
                backgroundSize: "28px 28px",
              }} />
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-full text-[26px] drop-shadow-md">
                📍
              </div>
            </div>
            <div className="text-[13.5px] text-text-mute leading-[1.8]">
              <b className="text-text font-bold">🚇 동백역</b> 1번 출구 도보 5분
              <br />
              <b className="text-text font-bold">🚗 무료 주차</b> · 휠체어·유모차 접근 가능
            </div>
            <a href="#" className="mt-[14px] self-start text-text font-bold text-[13px] border-b border-text pb-[2px]">
              지도 보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

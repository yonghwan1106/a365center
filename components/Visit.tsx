import Image from "next/image";
import Link from "next/link";

export default function Visit() {
  return (
    <section id="visit" className="bg-bg-soft py-14 md:py-16">
      <div className="wrap">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-2 text-sm font-extrabold tracking-wide text-yellow-strong">FIND US</div>
          <h2 className="break-keep text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:text-3xl">
            🗺️ 오시는 길
          </h2>
          <p className="mt-3 break-keep text-[15.5px] leading-[1.75] text-text-mute">
            동백역 1번 출구에서 도보 5분, 메디스타워 213호. 휠체어·유모차 접근 가능합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-card-md">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-bg-soft">
              <Image
                src="/images/generated/access-map-card.png"
                alt="동백역 1번 출구에서 메디스타워 213호까지 도보 5분 안내 지도"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
              <div className="mb-2 text-xs font-bold tracking-wide text-yellow-strong">주소</div>
              <div className="break-keep text-lg font-extrabold leading-[1.5] text-text">
                경기도 용인특례시 기흥구 동백죽전대로 341, 213호 (메디스타워)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="text-[13px] font-bold text-text-light">🚇 지하철</div>
                <div className="mt-1 text-sm font-extrabold text-text">동백역 1번 출구</div>
                <div className="text-xs text-text-mute">도보 5분</div>
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="text-[13px] font-bold text-text-light">🚗 주차</div>
                <div className="mt-1 text-sm font-extrabold text-text">무료 주차</div>
                <div className="text-xs text-text-mute">메디스타워 지하</div>
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="text-[13px] font-bold text-text-light">♿ 배리어프리</div>
                <div className="mt-1 text-sm font-extrabold text-text">휠체어 접근</div>
                <div className="text-xs text-text-mute">유모차 OK</div>
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="text-[13px] font-bold text-text-light">📞 전화</div>
                <a href="tel:010-9867-3121" className="mt-1 block text-sm font-extrabold text-red">010-9867-3121</a>
                <div className="text-xs text-text-mute">상담·예약</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-navy-deep px-5 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-px hover:bg-navy"
            >
              상세 약도 페이지 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

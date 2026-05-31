import Image from "next/image";
import Link from "next/link";

export default function TrustBadge() {
  return (
    <section id="trust" className="bg-bg-soft py-14 md:py-16">
      <div className="wrap">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-2 text-sm font-extrabold tracking-wide text-yellow-strong">신뢰 · 투명성</div>
          <h2 className="break-keep text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:text-3xl">
            ★ 고유번호증 100% 전면 공개
          </h2>
          <p className="mt-3 break-keep text-[15.5px] leading-[1.75] text-text-mute">
            국세청에서 발급한 고유번호증을 그대로 공개합니다. 도용·위조 방지를 위해 반투명 워터마크를 정중앙에 표기했으며,
            법인 정관·운영규정 등 핵심 서류도 모두 다운로드하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 고유번호증 이미지 + 워터마크 */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-card-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-bg-soft">
              <Image
                src="/images/legal/certificate.png"
                alt="경인장애인선교회 고유번호증"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
              />
              {/* 워터마크: 정중앙 대각선 -24°, 2줄 반투명 */}
              <div
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                style={{ transform: "rotate(-24deg)" }}
                aria-hidden="true"
              >
                <div className="text-[clamp(14px,3vw,28px)] font-black tracking-[0.18em] text-red/35 drop-shadow-sm">
                  경인 공익네트워크 공식 게시용
                </div>
                <div className="mt-1 text-[clamp(12px,2.6vw,24px)] font-black tracking-[0.18em] text-red/35 drop-shadow-sm">
                  무단 복제 및 도용 금지
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 text-center text-[12.5px] text-text-light">
              ※ 무단 도용 방지를 위해 반투명 워터마크가 표기되어 있습니다.
            </div>
          </div>

          {/* 정관·규정 PDF 다운로드 */}
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
              <h3 className="mb-4 text-lg font-extrabold tracking-tight text-text">📄 법인 서류 다운로드</h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["경인AI디지털교육자격협회 정관", "/docs/경인AI디지털교육자격협회_정관.pdf"],
                  ["민간자격 7종목 자격관리운영규정", "/docs/민간자격_7종목_운영규정.pdf"],
                  ["연합푸드뱅크 정관", "/docs/연합푸드뱅크_정관.pdf"],
                  ["연합푸드뱅크 공동운영 협약서", "/docs/연합푸드뱅크_공동운영_협약서.pdf"],
                  ["연합푸드뱅크 내부 운영규정", "/docs/연합푸드뱅크_내부_운영규정.pdf"],
                  ["경인 평생교육·나눔 사회적협동조합 운영규정", "/docs/사회적협동조합_운영규정.pdf"],
                  ["사회적협동조합 5월21일 정상사용", "/docs/사회적협동조합_5월21일_정상사용.pdf"],
                  ["우리함께 평생교육·나눔센터 내부 기부금규정", "/docs/내부지부기부금규정.pdf"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href="/about/documents"
                      className="flex items-center justify-between rounded-lg border border-line bg-bg-soft px-4 py-3 transition-colors hover:bg-yellow"
                    >
                      <span className="break-keep font-semibold text-text">{label}</span>
                      <span className="ml-2 text-xs font-bold text-text-light">PDF</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/about/documents"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-deep hover:text-red"
              >
                전체 서류 보기 →
              </Link>
            </div>
            <div className="rounded-xl border border-yellow-strong/40 bg-yellow/60 p-4 text-[13px] leading-[1.7] text-[#7C2D12]">
              💡 과거 외부 기관 심사 시 고유번호증 미노출로 반려된 경험을 바탕으로,
              <strong> 우리 기관의 최우선 철학인 ‘투명성’</strong>에 따라 핵심 서류를 모두 공개합니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const MAILTO =
  "mailto:ost@a365.or.kr?subject=" + encodeURIComponent("[희망우체국] 사연·문의 접수");

// 희망우체국 — 전 페이지 공통 하단 배너 (C-1~C-4)
// 의뢰인 제공 우체통 이미지(hope-post-box.png)를 비주얼로 사용.
// ※ 이미지에 표기된 메일은 'ost.@'(점) 오타이나, 실제 클릭·발송은 정확한 ost@a365.or.kr 로 연결.
export default function HopePost() {
  return (
    <section className="bg-bg-soft py-10 md:py-12" aria-label="희망우체국 사연 접수">
      <div className="wrap">
        <div className="flex flex-col items-center gap-7 md:flex-row md:justify-center md:gap-12">
          {/* 우체통 이미지 (클릭 시 메일 작성창) */}
          <a
            href={MAILTO}
            className="block shrink-0 transition-transform hover:-translate-y-[2px]"
            aria-label="희망우체국으로 사연·문의 메일 보내기"
          >
            <Image
              src="/images/generated/hope-post-box.png"
              alt="희망우체국 — 작은 이야기 하나도 소중히 듣겠습니다. 사연·문의는 OST 똑똑이 선생님에게"
              width={1689}
              height={2403}
              sizes="(max-width: 768px) 200px, 240px"
              className="h-auto w-[200px] drop-shadow-lg md:w-[240px]"
            />
          </a>

          {/* 안내 + 큰 버튼 (정확한 ost@a365.or.kr) */}
          <div className="flex max-w-md flex-col items-center gap-5 text-center md:items-start md:text-left">
            <p className="text-[20px] font-extrabold leading-[1.5] text-text md:text-[23px]">
              작은 이야기 하나도 소중히 듣겠습니다
            </p>
            <p className="text-[15.5px] leading-[1.75] text-text-mute md:text-[16.5px]">
              AI 교육문의 · 사연접수 · 나눔요청 · 협력제안은
              <br className="hidden sm:block" />
              <strong className="text-red">OST 똑똑이 선생님</strong>에게 보내주세요.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-[18px] text-[17px] font-extrabold text-white shadow-card-md transition-transform hover:-translate-y-[2px] md:text-[18px]"
              >
                ✉ 사연·문의 보내기
              </a>
              <a
                href="tel:010-9867-3121"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-red px-7 py-[18px] text-[17px] font-extrabold text-red transition-transform hover:-translate-y-[2px] md:text-[18px]"
              >
                ☎ 010-9867-3121
              </a>
            </div>
            <p className="text-[13px] font-semibold text-text-light">받는 곳 · ost@a365.or.kr</p>
          </div>
        </div>
      </div>
    </section>
  );
}

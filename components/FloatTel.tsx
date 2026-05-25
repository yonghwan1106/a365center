export default function FloatTel() {
  return (
    <>
      <a
        href="tel:010-9867-3121"
        aria-label="전화하기"
        className="group fixed right-5 bottom-5 z-[100] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-red text-[24px] text-white shadow-[0_12px_28px_rgba(229,57,53,0.45)] transition-transform hover:scale-105 sm:right-[30px] sm:bottom-[30px] sm:h-[62px] sm:w-[62px] sm:text-[26px]"
      >
        📞
        <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-red opacity-50 animate-[ring_1.6s_ease-out_infinite]" />
      </a>
    </>
  );
}

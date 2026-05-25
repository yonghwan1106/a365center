export default function FloatTel() {
  return (
    <>
      <a
        href="tel:010-9867-3121"
        aria-label="전화하기"
        className="fixed bottom-[30px] right-[30px] z-[100] w-[62px] h-[62px] rounded-full bg-red text-white flex items-center justify-center text-[26px] shadow-[0_12px_28px_rgba(229,57,53,0.45)] hover:scale-110 transition-transform group"
      >
        📞
        <span className="absolute inset-[-6px] rounded-full border-2 border-red opacity-50 animate-[ring_1.6s_ease-out_infinite]" />
      </a>
      <div className="fixed bottom-6 left-6 z-[100] hidden rounded-full bg-navy px-[18px] py-[10px] text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.20)] sm:flex sm:items-center sm:gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-[blink_2s_ease-in-out_infinite]" />
        Preview v1 · 01번 메인안 (D-5 사전 셋업)
      </div>
    </>
  );
}

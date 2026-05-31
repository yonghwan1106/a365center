"use client";

import { useState } from "react";

const COURSES = [
  { value: "smartphone-basic", label: "STEP 01 · 스마트폰 기초반" },
  { value: "life-use", label: "STEP 02 · 생활 활용반" },
  { value: "ai-practical", label: "STEP 03 · AI 실무반" },
  { value: "income", label: "STEP 04 · 수익 창출반" },
  { value: "ai-teacher", label: "★ OST 똑똑이 선생님 12인 교실" },
  { value: "all", label: "전체 과정 (4단계 + OST 똑똑이 선생님)" },
  { value: "undecided", label: "아직 정하지 못함 (상담 희망)" },
];

export default function ApplyForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState(COURSES[0].value);
  const [accessibility, setAccessibility] = useState<string[]>([]);
  const [memo, setMemo] = useState("");

  function toggle(option: string) {
    setAccessibility((prev) =>
      prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const courseLabel = COURSES.find((c) => c.value === course)?.label ?? course;
    const subject = `[디지털 교육 신청] ${name || "신청자"} · ${courseLabel}`;
    const body = [
      "우리함께 평생교육·나눔센터 디지털 교육 신청서",
      "",
      `이름: ${name}`,
      `연락처: ${phone}`,
      `연령대: ${age || "미입력"}`,
      `희망 과정: ${courseLabel}`,
      `접근성 요청: ${accessibility.length ? accessibility.join(", ") : "없음"}`,
      "",
      "추가 메모:",
      memo || "(없음)",
      "",
      "— 본 신청서는 a365center.or.kr/education/apply 에서 작성되었습니다.",
    ].join("\n");

    const mailto = `mailto:a365center@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  const labelCls = "block text-sm font-extrabold text-text mb-2";
  const inputCls =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-text shadow-sm transition-colors focus:border-yellow-strong focus:outline-none focus:ring-2 focus:ring-yellow/40";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-card-md md:p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className={labelCls}>
            이름 <span className="text-red">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>
            연락처 <span className="text-red">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>연령대</label>
          <select value={age} onChange={(e) => setAge(e.target.value)} className={inputCls}>
            <option value="">선택 안 함</option>
            <option>40대</option>
            <option>50대</option>
            <option>60대</option>
            <option>70대</option>
            <option>80대 이상</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>
            희망 과정 <span className="text-red">*</span>
          </label>
          <select required value={course} onChange={(e) => setCourse(e.target.value)} className={inputCls}>
            {COURSES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <div className={labelCls}>접근성·동반 요청 (해당 사항 모두 체크)</div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {["휠체어 이용", "보호자 동반", "수어 통역 필요", "큰 글씨 자료", "1:1 보조 강사", "기타"].map((opt) => (
            <label
              key={opt}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm transition-colors ${
                accessibility.includes(opt)
                  ? "border-yellow-strong bg-yellow"
                  : "border-line bg-white hover:bg-bg-soft"
              }`}
            >
              <input
                type="checkbox"
                checked={accessibility.includes(opt)}
                onChange={() => toggle(opt)}
                className="h-4 w-4 accent-yellow-strong"
              />
              <span className="font-semibold text-text">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className={labelCls}>추가 메모 (희망 시간대·기타 요청)</label>
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          rows={4}
          placeholder="예) 평일 오후가 좋습니다. 가족과 함께 방문하고 싶어요."
          className={inputCls}
        />
      </div>

      <div className="mt-6 rounded-xl bg-bg-soft p-4 text-xs leading-[1.7] text-text-mute">
        ⓘ <strong className="text-text">개인정보 처리 안내</strong> — 입력하신 정보는 본 신청 처리 외 용도로 사용되지 않으며,
        접수 완료 후 60일 이내 파기됩니다. 접수처: a365center@gmail.com · 010-9867-3121
      </div>

      <div className="mt-7 flex flex-col gap-3 md:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-red px-6 py-4 text-base font-extrabold text-white shadow-card-md transition-all hover:-translate-y-px hover:bg-red-dark"
        >
          ✉ 이메일로 신청서 보내기
        </button>
        <a
          href="tel:010-9867-3121"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-navy-deep px-6 py-4 text-base font-extrabold text-white shadow-card-md transition-all hover:-translate-y-px hover:bg-navy"
        >
          📞 전화로 바로 신청
        </a>
      </div>
    </form>
  );
}

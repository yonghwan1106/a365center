<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# app/education/ — 디지털 교육 + AI 선생님 축

## Purpose
사이트의 **핵심 차별화 축**. 4단계 커리큘럼(스마트폰 기초→생활 활용→AI 실무→수익창출)과 김재완 대표가 직접 코딩한 'AI 선생님 12인 교실'을 라이브로 구현합니다. 정적 페이지는 Server Component, 인터랙티브 위젯만 클라이언트로 분리.

## Routes & Files
| Route / File | 종류 | metadata title | Purpose |
|--------------|------|----------------|---------|
| `/education` | Server page | 디지털 교육 | 로드맵 이미지 + 4과정 그리드 허브 |
| `/education/curriculum` | Server page | 4단계 커리큘럼 | 4단계 전체 개요, 단계 카드 → `/education/[slug]` |
| `/education/[course]` | Server page (동적) | `{course.title} — …` (과정별 생성) | 4개 과정 상세 (모듈·성과·수업정보) |
| `/education/ai-teacher` | Server page | AI 선생님 · 어르신 12명 교실 | AI 교실 환경 설명 셸 + `AITeacherClient` 마운트 |
| `ai-teacher/AITeacherClient.tsx` | **Client** 자식 | — | STT/TTS + `/api/gemini` 라이브 채팅 위젯 |
| `/education/apply` | Server page | 온라인 신청서 | 신청 셸 + 전화 CTA + `ApplyForm` 마운트 |
| `apply/ApplyForm.tsx` | **Client** 자식 | — | 수강 신청 폼 (mailto 제출) |
| `/education/faq` | Server page | 교육 FAQ | 아코디언 10문항 (비용·접근·AI선생님·자격) |

## 동적 라우트 — `[course]`
- 지원 slug 4종: `smartphone-basic`(스마트폰 기초반), `life-use`(생활 활용반), `ai-practical`(AI 실무반), `income`(수익창출반).
- `generateStaticParams`로 4 slug 정적 생성, `generateMetadata`(async, `await params`)로 과정별 title/description 생성. 미지원 slug → `notFound()`.
- 과정 데이터는 `[course]/page.tsx` 내 `courses` 상수에 인라인. 과정 추가 = 이 상수에 항목 추가 + 대응 카드 이미지.

## 클라이언트 위젯 2종
- **`AITeacherClient.tsx`**: `window.SpeechRecognition`/`webkitSpeechRecognition`(`ko-KR`, continuous, interimResults)로 음성 입력 → `/api/gemini`에 `{question}` POST(키는 서버에만) → 응답 마크다운 제거 후 `text-[52px]`로 표시(50인치 모니터 가독성) → `speechSynthesis`로 `ko-KR` 음성 출력(rate 1.0). 원본은 `../../../07_AI선생님_파일럿/AI선생님_v1.html`.
- **`ApplyForm.tsx`**: 6필드(이름·연락처·연령대·희망과정·접근성요청 멀티체크·메모) 컨트롤드 폼. **백엔드 미호출** — `mailto:a365center@gmail.com` URI를 만들어 `window.location.href`로 로컬 메일 클라이언트 실행.

## For AI Agents

### Working In This Directory
- AI 선생님 위젯 수정 시 키 격리 유지: 클라이언트는 절대 Gemini 키를 다루지 않음. 반드시 `/api/gemini` 경유 (see `../api/AGENTS.md`).
- 50인치 교실 모니터 대상이므로 답변 글씨(`text-[52px]`)·버튼 크게 유지.
- `ApplyForm`은 의도적으로 서버 없이 mailto 방식 (프로토타입 단계). 실제 제출 백엔드 도입 시 이 컴포넌트 교체.
- 동적 라우트 `params`는 await 필요 (Next.js 16).

## Dependencies

### Internal
- `@/components/SiteChrome`, `@/components/SubpageBlocks`
- `AITeacherClient` → `/api/gemini`
- 이미지 `/images/generated/{education-roadmap,ai-teacher-classroom,apply-form,faq,smartphone-basic-class,life-use-class,income-creation-class}-card.png`

### External
- Web Speech API (SpeechRecognition / SpeechSynthesis) — 브라우저 네이티브, Chrome 권장
- `next` (Metadata, generateStaticParams, generateMetadata, notFound)

<!-- MANUAL: -->

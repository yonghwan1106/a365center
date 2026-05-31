<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# app/api/ — 서버 라우트 🔐

## Purpose
클라이언트가 Google Gemini API 키를 절대 알지 못하도록 격리하는 **서버 전용 프록시 레이어**. AI 선생님 데모(`AITeacherClient`)의 모든 LLM 호출이 이 라우트를 통과합니다. 기존 `../../../07_AI선생님_파일럿/AI선생님_v1.html` 키 노출 사고를 구조적으로 차단하기 위한 D-5 핵심 설계.

## Routes
| Route | File | Method | Purpose |
|-------|------|--------|---------|
| `/api/gemini` | `gemini/route.ts` | POST | `{question}` 받아 서버에서 Gemini 호출 → `{answer}` 반환 |

## 동작 (`gemini/route.ts`)
- `export const runtime = "nodejs"`.
- 모델: `process.env.GEMINI_MODEL || "gemini-2.0-flash"` (env로 오버라이드). ⚠ `gemini-1.5-flash`는 2026-05 시점 deprecated.
- 키: `process.env.GEMINI_API_KEY`. 없으면 500 + `{error:"…GEMINI_API_KEY가 설정되지 않았습니다…"}`.
- 입력 검증: 빈 질문/비문자열 → 400, 2000자 초과 → 400, 잘못된 JSON → catch 500.
- 프롬프트: 사용자 질문 뒤에 '교육용 AI 선생님으로서 아주 쉽고 크고 간단한 한국어로' 지시 부착 (어르신 대상).
- `generationConfig`: maxOutputTokens 1500, temperature 0.7.
- upstream 실패 → 502 + 모델명·detail(앞 500자). 응답 텍스트는 `data.candidates[0].content.parts[0].text`.

## For AI Agents

### Working In This Directory
- **키를 응답으로 반환하거나 로그에 남기지 말 것.** 클라이언트엔 `answer`/`error`만.
- 모델 교체는 코드 수정 없이 `GEMINI_MODEL` 환경변수로. 새 라우트 추가 시에도 동일한 키-격리·입력검증 패턴 유지.
- Vercel 배포 시 `GEMINI_API_KEY`(+ 필요시 `GEMINI_MODEL`)를 대시보드 환경변수(Production·Preview)에 등록.

### Testing
- `curl -X POST localhost:3000/api/gemini -H "Content-Type: application/json" -d '{"question":"테스트"}'` — 키 없으면 500(정상), 키 있으면 `{answer}` 반환.

## Dependencies

### Internal
- 호출처: `app/education/ai-teacher/AITeacherClient.tsx`
- 키 출처: `.env.local`의 `GEMINI_API_KEY` (`.env.local.example` 템플릿)

### External
- Google Generative Language API `v1beta/models/{model}:generateContent`
- `next/server` (NextRequest, NextResponse)

<!-- MANUAL: -->

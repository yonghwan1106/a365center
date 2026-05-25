# a365center-preview — 경인장애인선교회 통합 홈페이지 라이브 프로토타입

> 제작 박용환 · 의뢰 경인장애인선교회·경인 공익네트워크 김재완 대표 · 도메인 a365center.or.kr (예정)
> 생성 2026-05-25 (D-5 사전 셋업)
> 기반 Next.js 16.2.6 + React 19.2.4 + Tailwind CSS v4 + TypeScript 5

---

## 🎯 이 프로젝트는

`경인장애인선교회/06_디자인_시안/01_의뢰인추천_샘플재현.html` (846줄 단일 HTML) 의 메인안 톤을 **그대로 살린 라이브 React 컴포넌트**입니다.

대표 회신을 기다리는 동안 박용환이 사전에 셋업해두고, 회신 OK가 오면 즉시 Vercel 비공개 프리뷰로 배포하는 것이 D-5 목표.

---

## 🏗 프로젝트 구조

```
a365center-preview/
├─ app/
│  ├─ layout.tsx              ← 한국어 SEO 메타데이터 + Pretendard 폰트
│  ├─ page.tsx                ← 메인 (9개 컴포넌트 조립)
│  ├─ globals.css             ← 01번 시안 디자인 토큰 + @theme inline
│  ├─ api/
│  │  └─ gemini/route.ts      ← 🔐 Gemini API 서버 라우트 (키 서버 격리)
│  └─ education/
│     └─ ai-teacher/
│        ├─ page.tsx          ← AI 선생님 별도 라우트 (SSR)
│        └─ AITeacherClient.tsx ← STT/TTS 클라이언트 컴포넌트
├─ components/
│  ├─ Header.tsx              ← sticky 헤더 + 7메뉴 + 빨간 전화 CTA
│  ├─ Hero.tsx                ← "스마트폰 못하셔도 됩니다" + 신뢰 3종
│  ├─ AITeacherIntro.tsx      ★ 12명 교실 배치도 + 4특징 + CTA → /education/ai-teacher
│  ├─ Worry.tsx               ← 3 고민 → 해결
│  ├─ Steps.tsx               ← 4단계 컬러 코딩
│  ├─ Proof.tsx               ← 후기 2 + 숫자 4
│  ├─ Pillars.tsx             ← 푸드뱅크·공간공유·시민기자단
│  ├─ Closing.tsx             ← 대표 인사말·전화 카드·오시는 길
│  ├─ Footer.tsx              ← navy-deep 다크 모드
│  └─ FloatTel.tsx            ← 우측 빨간 전화 + 시안 배지
├─ .env.local                 ← 🔐 실제 GEMINI_API_KEY (.gitignore 제외)
├─ .env.local.example         ← 환경변수 템플릿
└─ .gitignore                 ← .env*·.bak·*_원본_키포함_* 차단
```

---

## 🔐 보안 설계 (D-5 핵심)

기존 `AI선생님_v1.html` 의 보안 사고를 다시 일으키지 않기 위한 격리 설계:

| 레이어 | 메커니즘 |
|-------|---------|
| **키 저장소** | `.env.local` 의 `GEMINI_API_KEY` 만, git·Vercel 환경변수로만 주입 |
| **클라이언트** | 키를 절대 알지 못함. `/api/gemini` 로만 통신 |
| **서버 라우트** | `app/api/gemini/route.ts` 가 `process.env.GEMINI_API_KEY` 로 호출 후 답변만 반환 |
| **gitignore** | `.env*` 패턴 + `*.bak` + `*_원본_키포함_*` 패턴 모두 차단 |
| **입력 검증** | 빈 질문·2000자 초과·잘못된 JSON 거부 |

→ 클라이언트는 `fetch("/api/gemini", { method: "POST", body: JSON.stringify({question}) })` 만 호출, 키가 노출될 경로 0.

---

## ⚠ 알려진 이슈

**Turbopack ↔ 한글 경로 비호환** — Next.js 16.2.6 Turbopack은 `경인블루저널` 같은 한글 디렉토리에서 Rust char-boundary panic을 일으킵니다. 그래서 `package.json` scripts.dev를 `next dev --webpack` 으로 잠금. Webpack 모드에서 모든 라우트 정상.

→ 라이브 배포 시 Vercel은 자체 Linux 빌더 환경이라 한글 영향 없음. 단 로컬 dev만 webpack 필수.

---

## 🚀 실행 방법

### 1. 환경변수 설정

```bash
# .env.local 파일을 열어 실제 키 입력
GEMINI_API_KEY=AIzaSyXXXXXXX...   # ← Google AI Studio 에서 받은 키
```

### 2. 의존성 설치

```bash
npm install   # 이미 설치됨 (29초 소요됨)
```

### 3. 개발 서버 실행 (Webpack 모드, 박용환 락-인)

```bash
npm run dev
# → http://localhost:3000 접속
# → AI 선생님 페이지: http://localhost:3000/education/ai-teacher
# → API 라우트: POST http://localhost:3000/api/gemini  body:{question}
```

**2026-05-25 검증 결과**
- `/` 메인 → HTTP 200 (첫 컴파일 3.67초, 그 후 캐시)
- `/education/ai-teacher` → HTTP 200 (0.54초)
- `/api/gemini` POST → HTTP 500 + `{"error":"서버에 GEMINI_API_KEY가 설정되지 않았습니다"}` (의도된 동작, 키 채우면 정상)

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

### 5. Vercel 배포 (회신 OK 후)

```bash
vercel --prod
# → 또는 GitHub 연동 → main push 자동 배포
# → Vercel 대시보드에서 GEMINI_API_KEY 환경변수 등록 (Production·Preview)
```

---

## 📐 디자인 토큰 (01번 시안 그대로)

| 카테고리 | 토큰 |
|---------|------|
| **베이스** | `--bg #FBF5EB`, `--bg-card #fff`, `--bg-soft #F6EEDF` |
| **텍스트** | `--text #1F2937`, `--text-mute #4B5563`, `--text-light #6B7280` |
| **포인트** | `--red #E53935`, `--red-dark #C62828` (전화 CTA) |
| **악센트** | `--yellow #FEF3C7`, `--yellow-strong #F59E0B` |
| **다크** | `--navy #1F2937`, `--navy-deep #111827` |
| **STEP** | green / blue / orange / red-step (4단계 컬러 코딩) |
| **그림자** | shadow-sm / md / lg (3단계) |

Tailwind v4의 `@theme inline` 패턴 → 클래스에서 `bg-red`, `text-yellow-strong` 직접 사용.

---

## 🎨 메인 11섹션 흐름

01번 시안 + v3 격상(AI 선생님)을 통합한 라이브 흐름:

1. **HEADER** sticky · 7메뉴 · 010-9867-3121 빨간 전화 CTA
2. **HERO** "스마트폰 못하셔도 됩니다" + 100% 무료 + 신뢰 3종(동백역·213호·일자리)
3. **★ AI TEACHER INTRO (NEW)** 12명 배치도 + 4특징 + → /education/ai-teacher
4. **WORRY** 3 고민 → 해결
5. **STEPS** 스마트폰→생활→AI→수익 (컬러 4단계)
6. **PROOF** 후기 2건 + 숫자 4종 (213호·4단계·3사역·100%)
7. **PILLARS** 푸드뱅크·공간공유·시민기자단
8. **CLOSING** 대표 인사말 + 전화 카드 + 오시는 길
9. **FOOTER** navy-deep + 3 grid
10. **FLOAT-TEL** 우측 빨간 전화 (애니메이션 ring)
11. **DRAFT TAG** 좌측 "Preview v1 · 01번 메인안 (D-5 사전 셋업)" 배지

---

## 🧪 검토 체크리스트 (박용환 본인용)

- [ ] localhost:3000 메인 페이지 11섹션 시각 검수
- [ ] /education/ai-teacher STT/TTS 실제 동작 (Chrome 마이크 권한)
- [ ] /api/gemini POST 호출 시 답변 정상 반환 (.env.local 키 입력 후)
- [ ] 모바일 반응형 (Chrome DevTools 980px·iPhone Pro)
- [ ] HEADER sticky 동작
- [ ] FloatTel 우측 빨간 전화 애니메이션 ring
- [ ] DRAFT TAG 좌측 시안 배지 노출
- [ ] Lighthouse 성능·SEO·접근성 측정 → 라이브 배포 전 90+ 목표
- [ ] 김재완 대표 회신 OK 후 통합 보완 사항:
  - [ ] 어르신 일러스트 자리 교체 (실사·SVG)
  - [ ] 후기·숫자 데이터 확정
  - [ ] 마스코트(B-2) 추가 (회신 후)
  - [ ] 영문·TTS 추가 (회신 후)
  - [ ] 고유번호증 워터마크 섹션 추가 (메모리 v3 결정사항)
  - [ ] 법인 후원 계좌 확정 시 후원 영역 추가

---

## 🔗 관련 자료 (이 폴더는 경인장애인선교회/ 내부)

- 원본 시안 `../06_디자인_시안/01_의뢰인추천_샘플재현.html`
- IA v3 `../04_홈페이지_설계서/경인장애인선교회_사이트맵_IA설계서_v3.pdf`
- AI 선생님 가이드 `../07_AI선생님_파일럿/README_가이드_단계별.md`
- 5/26 할 일 `../_내일_할_일_20260526.md`
- 카톡 멘트 초안 `../D1_카톡멘트_초안_20260525.md`
- 메모리 `C:\Users\user\.claude\projects\C--Windows-System32\memory\project_kca_homepage.md`
- GitHub 원격 https://github.com/yonghwan1106/a365center

---

## 📝 갱신 이력

- 2026-05-25 v1 박용환 작성 (P2 자율 판단 산출, 회신 무관 D-5 사전 셋업)

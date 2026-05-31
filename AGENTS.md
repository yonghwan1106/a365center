<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# a365center-preview (코드 루트)

## Purpose
경인장애인선교회·경인 공익네트워크 통합 홈페이지의 **라이브 React 프로토타입**. `../06_디자인_시안/01_의뢰인추천_샘플재현.html`(846줄 단일 HTML 메인안)의 톤을 Next.js 16 App Router 컴포넌트로 옮긴 것이며, `../04_홈페이지_설계서`의 IA v3(7개 메뉴 축)를 실제 라우트로 구현합니다. 대상 사용자는 40~70대 어르신·장애인이라 **큰 글씨·고대비·단순 동선**이 최우선입니다.

## Tech Stack
- **Next.js 16.2.6** (App Router) · **React 19.2.4** · **TypeScript 5** · **Tailwind CSS v4** (`@theme inline`)
- 외부 런타임 의존성은 `next`/`react`/`react-dom` 3개뿐. UI 라이브러리·아이콘 패키지 없음 — 아이콘은 인라인 SVG/이모지, 스타일은 Tailwind 유틸 + `globals.css` 토큰.
- 유일한 외부 API: 서버 라우트 `/api/gemini`를 통한 Google **Gemini** 호출 (AI 선생님 데모).

## Key Files
| File | Description |
|------|-------------|
| `app/layout.tsx` | 루트 레이아웃. `lang="ko"`, 한국어 SEO 메타데이터, viewport(maximumScale 5 — 확대 허용). `globals.css` import |
| `app/page.tsx` | 홈(`/`). 13개 섹션 컴포넌트를 **직접** 조립 (SiteChrome 미사용) |
| `app/globals.css` | Tailwind v4 진입점 + 01번 시안 디자인 토큰(`:root` + `@theme inline`) + Pretendard 폰트 + `.wrap` + 애니메이션 |
| `next.config.ts` | `outputFileTracingRoot`/`turbopack.root`를 `process.cwd()`로 고정 (한글 경로 트레이싱 안정화) |
| `package.json` | scripts의 `dev`/`build`가 **`--webpack`** 으로 잠김 (아래 ⚠ 참조) |
| `.env.local.example` | 환경변수 템플릿 — `GEMINI_API_KEY` |
| `README.md` | 실행·배포·검토 체크리스트 (사람용 상세 매뉴얼) |
| `CLAUDE.md` | `@AGENTS.md` 만 import — 이 파일이 곧 Claude 컨텍스트 |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `app/` | App Router 라우트 전체 (홈 + 7개 메뉴 축 + 동적/API 라우트) (see `app/AGENTS.md`) |
| `components/` | 홈 섹션 컴포넌트 14종 + 공용 레이아웃 프리미티브 (see `components/AGENTS.md`) |
| `public/` | 정적 자산 — 생성 이미지 25종, 법인 증빙, SVG (see `public/AGENTS.md`) |

## Architecture (핵심 2-레이아웃 패턴)
이 사이트의 페이지는 **두 가지 조립 방식** 중 하나를 따릅니다 — 새 페이지를 만들 때 반드시 구분하세요.

1. **홈(`/`)** — `app/page.tsx`가 `Header → Hero → AITeacherIntro → Worry → Steps → Proof → Pillars → TrustBadge → Greeting → Closing → Visit → Footer → FloatTel` 13개 컴포넌트를 직접 나열. (랜딩 전용 풀스크롤 구성)
2. **그 외 모든 서브페이지** — `SiteChrome`(Header+main+Footer+FloatTel 셸)로 감싸고, 본문은 `SubpageBlocks`의 프리미티브 4종(`SubpageHero`/`SectionHeader`/`InfoCard`/`CTASection`)을 조합. → 새 서브페이지는 이 패턴을 그대로 복제하면 됨.

대부분 **Server Component**. 클라이언트 컴포넌트는 단 2개: `app/education/ai-teacher/AITeacherClient.tsx`(STT/TTS+Gemini), `app/education/apply/ApplyForm.tsx`(폼).

## For AI Agents

### Working In This Directory
- **새 서브페이지**: 기존 서브페이지(예: `app/foodbank/page.tsx`) 하나를 복사 → `SiteChrome` + `SubpageHero` + 섹션 조합 → 영문 slug 라우트 폴더 생성 → `SubpageHero image`에 대응하는 `public/images/generated/<slug>-card.png` 준비.
- **디자인 토큰만 사용**: 색/그림자는 하드코딩 금지. `bg-red`, `text-text-mute`, `shadow-card-md` 등 `globals.css`에 정의된 Tailwind v4 토큰 클래스만 사용 (토큰 표는 `README.md` 참조).
- **접근성 우선**: 폰트 크게, 대비 높게, 동선 짧게. 어르신·장애인 대상 — 작은 글씨·저대비·복잡한 인터랙션 금지.
- **Next.js 16은 학습 데이터와 다름** (상단 nextjs-agent-rules 블록). 동적 라우트의 `params`는 **async**(예: `[course]`에서 `await params`). 새 API/컨벤션은 `node_modules/next/dist/docs/` 확인.
- **하드코딩 데이터**: 전화번호 `010-9867-3121`, 주소(메디스타워 213호), 정원 12명, 통계 수치 등이 여러 컴포넌트에 분산 하드코딩됨. 변경 시 전역 검색 필요 (단일 출처 상수 없음).

### Testing Requirements
- `npm run dev` (webpack 모드) → `http://localhost:3000` 시각 검수. `npm run lint`로 ESLint(`eslint-config-next`).
- 검증된 동작(2026-05-25): `/` 200, `/education/ai-teacher` 200, `/api/gemini` POST는 키 없으면 500(의도된 동작).
- 정식 테스트 스위트 없음 — 변경 후 dev 서버 수동 시각 검수가 1차 검증.

### ⚠ 알려진 이슈 / 보안
- **Turbopack ↔ 한글 경로 비호환**: `경인블루저널` 한글 디렉토리에서 Turbopack이 Rust char-boundary panic. 그래서 `dev`/`build`가 **`--webpack`** 으로 잠김. 절대 `--turbopack`으로 되돌리지 말 것. (Vercel Linux 빌더는 영향 없음)
- **Gemini 키 격리**: 키는 `.env.local`의 `GEMINI_API_KEY`에만. 클라이언트는 절대 키를 알지 못하고 `/api/gemini`로만 통신. `.gitignore`가 `.env*`·`*.bak`·`*_원본_키포함_*` 차단. 키를 클라이언트 코드/컴포넌트에 박지 말 것.

## Dependencies

### Internal (워크스페이스)
- 원본 메인안 `../06_디자인_시안/01_의뢰인추천_샘플재현.html`
- IA v3 `../04_홈페이지_설계서/경인장애인선교회_사이트맵_IA설계서_v3.pdf`
- AI 선생님 원본/가이드 `../07_AI선생님_파일럿/`

### External
- `next@16.2.6`, `react@19.2.4`, `react-dom@19.2.4`
- Google Gemini API (서버 라우트 경유) · Pretendard 폰트(jsDelivr CDN)
- 배포 Vercel · 원격 `github.com/yonghwan1106/a365center`

<!-- MANUAL: 이 줄 아래 수동 메모는 재생성 시 보존됩니다 -->

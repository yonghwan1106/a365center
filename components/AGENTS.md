<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# components/ — 홈 섹션 + 공용 레이아웃 프리미티브

## Purpose
홈(`app/page.tsx`)을 구성하는 섹션 컴포넌트 14종과, 모든 서브페이지가 공유하는 레이아웃 프리미티브(`SiteChrome`, `SubpageBlocks`)를 담습니다. 대부분 props 없는 정적 Server Component이며, 01번 시안의 섹션 흐름을 컴포넌트로 분해한 것입니다.

## 공용 레이아웃 프리미티브 (먼저 읽으세요)
| File | Export | Purpose |
|------|--------|---------|
| `SiteChrome.tsx` | default `SiteChrome({children})` | **모든 서브페이지 셸** — `Header + main{children} + Footer + FloatTel`. 서브페이지는 이걸로 감싸면 공통 헤더/푸터/FAB 자동 |
| `SubpageBlocks.tsx` | named ×4 (default 없음) | 서브페이지 본문 빌딩블록 — 아래 표 |

`SubpageBlocks` API:
| Export | 주요 props | 용도 |
|--------|-----------|------|
| `SubpageHero` | `eyebrow, title, accent?, description, image, imageAlt, actions?: {href,label,tone?:"red"\|"navy"}[], children?` | 서브페이지 상단 히어로 (accent는 h1 둘째 줄 빨강) |
| `SectionHeader` | `eyebrow?, title, description?` | 중앙 정렬 섹션 타이틀 |
| `InfoCard` | `icon?, title, children` | 흰색 둥근 카드 (본문 children) |
| `CTASection` | `title, description, href?, label?` | 노란 배경 CTA (기본 `tel:010-9867-3121`) |

## 홈 섹션 컴포넌트 (app/page.tsx 조립 순서)
| File | C/S | Purpose | 하드코딩 주의 |
|------|-----|---------|--------------|
| `Header.tsx` | S | sticky 상단 헤더 — 인라인 SVG 로고 + 8메뉴 + 전화 버튼 | `010-9867-3121`; 모바일 메뉴 `lg:hidden`(햄버거 없음) |
| `Hero.tsx` | S | "스마트폰 못하셔도 됩니다" 히어로 + CTA | "5월 모집 선착순 10명", `010-9867-3121` |
| `AITeacherIntro.tsx` | S | ★ AI 선생님 교실 소개 + 4특징 → `/education/ai-teacher` | 정원 12명, 213호 |
| `Worry.tsx` | S | "이런 고민?" 페인포인트 3 → 해결 | 고민 항목 배열 |
| `Steps.tsx` | S | 4단계 커리큘럼 카드 + 로드맵 | 4단계 → `/education/*` |
| `Proof.tsx` | S | 후기 2 + 숫자 4 통계 | 익명 후기, 213호·4단계·3사역·100% |
| `Pillars.tsx` | S | 3대 나눔 사역 카드 | 연 500가구·월 120kg·월 5건 |
| `TrustBadge.tsx` | S | 고유번호증 전면 공개 + 서류 8종 PDF | 워터마크 텍스트, PDF 8개 파일명 |
| `Greeting.tsx` | S | 대표 김재완 인사말 요약 → `/about/greeting` | 인사말 본문, 이니셜 아바타 |
| `Closing.tsx` | S | 하단 CTA 3카드 (전화·후원·봉사) | `010-9867-3121`, 후원 '개설 중' |
| `Visit.tsx` | S | 오시는 길 — 지도 + 4정보 카드 | 주소, "동백역 도보 5분", `010-9867-3121` |
| `Footer.tsx` | S | 전역 푸터 — 4열 네비 + 법인정보 | 전화 2종, `a365center@gmail.com`, © 2026 |
| `FloatTel.tsx` | S | 우하단 고정 빨간 전화 FAB (ring 펄스) | `010-9867-3121`, `z-[100]` |

> 실제 메인 조립 순서는 `app/page.tsx` 기준 (`Header→Hero→AITeacherIntro→Worry→Steps→Proof→Pillars→TrustBadge→Greeting→Closing→Visit→Footer→FloatTel`). README의 11섹션 서술과 미세하게 다를 수 있으니 코드 기준으로.

## For AI Agents

### Working In This Directory
- **연락처·통계는 다수 컴포넌트에 하드코딩**되어 단일 출처가 없음. `010-9867-3121` 변경 등은 전역 검색 필요.
- ⚠ 이메일 불일치: 코드(`Footer`/`ApplyForm`)는 `a365center@gmail.com`, 워크스페이스 `00_README.md`는 `admin@a365center.or.kr`. 확정 전 임의 변경 금지 — 박용환 확인 사항.
- 새 홈 섹션 추가 시 `app/page.tsx` import + JSX 순서에 삽입. 서브페이지용이면 여기 말고 `SubpageBlocks` 조합 사용.
- 색/그림자/폰트는 `globals.css` 토큰 클래스만 사용.

## Dependencies

### Internal
- `Header`/`Footer`/`FloatTel` ← `SiteChrome`와 `app/page.tsx` 양쪽에서 사용
- 이미지 `public/images/generated/*`, 법인 증빙 `public/images/legal/certificate.png`
- 라우트 링크 `app/**`

### External
- `react`, `next` (Image/Link 사용 시), Tailwind v4 유틸

<!-- MANUAL: -->

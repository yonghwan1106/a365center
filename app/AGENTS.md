<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# app/ — App Router 라우트

## Purpose
Next.js 16 App Router 라우트 전체. IA v3의 7개 메뉴 축(소개·디지털 교육·AI 선생님·자격과정·나눔 사역·시민기자단·오시는 길)과 후원·알림 라우트를 구현합니다. 홈(`page.tsx`)만 풀스크롤 랜딩이고, 나머지는 모두 `SiteChrome` + `SubpageBlocks` 패턴.

## Key Files
| File | Description |
|------|-------------|
| `layout.tsx` | 루트 레이아웃 — `lang="ko"`, 한국어 SEO 메타, `globals.css` import |
| `page.tsx` | 홈 `/` — 13개 섹션 컴포넌트 직접 조립 (SiteChrome 미사용) |
| `globals.css` | Tailwind v4 + 디자인 토큰 + Pretendard + `.wrap` + 애니메이션 |
| `favicon.ico` | 파비콘 |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `about/` | 센터 소개 축 — 인사말·연혁·정체성·조직도·고유번호증·자료실 (see `about/AGENTS.md`) |
| `education/` | 디지털 교육 + AI 선생님 + 동적 과정 + 신청서 (see `education/AGENTS.md`) |
| `support/` | 참여·후원 — 후원·기업협력·자원봉사 (see `support/AGENTS.md`) |
| `api/` | 🔐 서버 라우트 — Gemini 프록시 (see `api/AGENTS.md`) |

## Leaf 라우트 (이 디렉토리 직속, 단일 page.tsx)
모두 Server Component, `SiteChrome` + `SubpageBlocks` 사용. 별도 AGENTS.md 없이 여기서 관리.

| Route | metadata title | Purpose |
|-------|----------------|---------|
| `/certificate` | 민간자격 3종 — 준비 중 (2026.06.01 등록 신청 예정) | 민간자격 3종 + 4단계 등록 로드맵, 전부 '준비 중' 라벨 |
| `/citizen-journalist` | 시민기자단 | 현장 취재→경인블루저널 게재 4단계 프로그램 |
| `/contact` | 오시는 길 | 주소·동백역 도보 5분·주차·지도 이미지 |
| `/foodbank` | 푸드뱅크 | 수령→분류→배송→기록 4단계 + 연 500가구/월 120kg 통계 |
| `/news` | 알림마당 — 공지·보도자료·결산 공시 | 공지 5건(색상 태그) 게시판 |
| `/pillars` | 나눔 사역 | 3대 사역(푸드뱅크·공간공유·시민기자단) 허브 |
| `/space-sharing` | 공간 공유 | 메디스타워 213호 대관 안내·예약·이용 규칙 |

> ⚠ 메뉴 축이 두 라우트에 나뉘는 경우 있음 — 예: 나눔 사역은 `/pillars`(허브) + 개별 `/foodbank`·`/space-sharing`·`/citizen-journalist`. 새 메뉴 연결 시 `components/Header.tsx`의 메뉴 배열과 실제 라우트 경로 일치 확인.

## For AI Agents

### Working In This Directory
- 새 서브페이지: leaf 라우트(예: `foodbank/page.tsx`)를 복제하는 게 가장 빠름. `export const metadata` 한국어 title 필수, `SiteChrome`로 감싸기.
- 동적 라우트 추가 시 `params`는 async — `education/[course]/page.tsx` 참고.
- 클라이언트 인터랙션이 필요한 부분만 별도 `"use client"` 자식 컴포넌트로 분리 (페이지 자체는 Server 유지).

### Common Patterns
- 페이지 = `SiteChrome` > `SubpageHero`(상단) + `SectionHeader`/`InfoCard` 본문 + `CTASection`(하단 전화 CTA).
- 모든 `SubpageHero image`는 `/images/generated/<slug>-card.png` 형식.

## Dependencies

### Internal
- `@/components/SiteChrome`, `@/components/SubpageBlocks` (거의 모든 서브페이지)
- 홈은 `@/components/*` 섹션 13종

### External
- `next` (Metadata, dynamic params, notFound)

<!-- MANUAL: -->

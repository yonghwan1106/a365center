<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# app/support/ — 참여·후원 축

## Purpose
후원자·자원봉사자·협력 기업을 모으는 참여 동선. IA v3의 '참여·후원' 메뉴. 법인 통장이 아직 '개설 중'이라 후원 페이지는 계좌 대신 안내·약속 중심. 전 페이지 Server Component + `SiteChrome` + `SubpageBlocks`.

## Routes (이 디렉토리)
| Route | page | metadata title | Purpose |
|-------|------|----------------|---------|
| `/support` | `page.tsx` | 참여·후원 — 함께해 주세요 | 후원·자원봉사·기업협력 3갈래 허브 |
| `/support/donate` | `donate/page.tsx` | 후원 안내 — 법인 통장 개설 중 | 후원금 사용처·투명성 약속 ('계좌 개설 중' 상태) |
| `/support/sponsor` | `sponsor/page.tsx` | 기업·기관 협력 — MOU·CSR·ESG·공익광고 | 6종 협력 유형 안내 |
| `/support/volunteer` | `volunteer/page.tsx` | 자원봉사 신청 — 함께 일할 분을 찾습니다 | 6개 역할·시간 약정 + 봉사자 지원 혜택 |

## For AI Agents

### Working In This Directory
- `/support/donate`의 '계좌 개설 중'은 김재완 대표 회신(A-1) 상태값. 법인 통장 확정 시 실제 계좌 정보 박스로 교체 (메모리 v3 결정사항).
- 후원/봉사 신청 동선도 현재 전화 CTA 중심 — 백엔드 폼 없음.

## Dependencies

### Internal
- `@/components/SiteChrome`, `@/components/SubpageBlocks`(`SubpageHero`/`SectionHeader`/`InfoCard`/`CTASection`)
- 이미지 `/images/generated/{support-cta,donate,sponsor,volunteer}-card.png`

### External
- `next` (Metadata)

<!-- MANUAL: -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# app/about/ — 센터 소개 축

## Purpose
기관 소개 메뉴 축. 단체 정체성·신뢰도(법인 증빙)·의사결정 근거(연혁·조직)를 어르신도 이해하기 쉽게 제시합니다. IA v3의 '소개' 메뉴에 대응. 전 페이지 Server Component + `SiteChrome` + `SubpageBlocks`.

## Routes (이 디렉토리)
| Route | page | metadata title | Purpose |
|-------|------|----------------|---------|
| `/about` | `page.tsx` | 센터소개 | 운영 철학·대상·핵심 통계(213호·무료·3사역) 허브 |
| `/about/greeting` | `greeting/page.tsx` | 대표 인사말 | 대표 김재완 인사말 전문 (아바타 카드) |
| `/about/history` | `history/page.tsx` | 연혁 — 6단계 타임라인 | 설립→고유번호→평생교육→푸드뱅크→협동조합→자격 3종 |
| `/about/identity` | `identity/page.tsx` | 단체 정체성 — 4조직 '큰 우산' 구조 | 4개 산하 조직 통합 거버넌스 설명 |
| `/about/organization` | `organization/page.tsx` | 조직도 | 대표 + 이모지 아바타 실무진 6 (실사 없음) |
| `/about/certificate` | `certificate/page.tsx` | 고유번호증 — 100% 전면 공개 (워터마크) | 고유번호증 이미지 + CSS 워터마크 오버레이 |
| `/about/documents` | `documents/page.tsx` | 정관·운영규정 — 법인 서류 전체 공개 | 4개 조직 법적 문서 PDF 다운로드 목록 |

## For AI Agents

### Working In This Directory
- `/about/certificate`의 워터마크는 김재완 대표 A-5 지시(2026-05-23)로 **강제** — '경인 공익네트워크 공식 게시용 / 무단 복제 및 도용 금지' 대각선 오버레이. 제거 금지.
- `/about/documents`가 가리키는 PDF는 워크스페이스 `../../../01_정관_규정/` 원본과 같은 8종이지만, 라이브 배포 시에는 `public/`로 복사된 자산을 가리켜야 함 (배포 전 경로 확인). 파일명은 `components/TrustBadge.tsx`에도 하드코딩됨.
- `/about/organization` 실무진은 **이모지 아바타** — 실제 인물 사진 없음(개인정보). 실사 교체는 대표 회신 후.

## Dependencies

### Internal
- `@/components/SiteChrome`, `@/components/SubpageBlocks`
- 이미지 `/images/generated/{representative-greeting,history-timeline,identity-umbrella,organization-chart,documents-archive}-card.png`, `/images/legal/certificate.png`

### External
- `next` (Metadata)

<!-- MANUAL: -->

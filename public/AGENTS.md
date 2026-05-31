<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-05-31 | Updated: 2026-05-31 -->

# public/ — 정적 자산

## Purpose
Next.js 정적 자산 루트. 페이지 히어로/카드 이미지(AI 생성), 법인 증빙 이미지, 기본 SVG 아이콘을 담습니다. `/` 절대경로로 서빙됨 (예: `/images/generated/foodbank-sharing-card.png`).

## Key Files / Subdirectories
| Path | Description |
|------|-------------|
| `*.svg` (file/globe/next/vercel/window) | Next.js 스캐폴드 기본 SVG (대부분 미사용) |
| `images/generated/` | AI 생성 카드/히어로 이미지 25종 (`<slug>-card.png`) + 프롬프트 로그 2종 |
| `images/legal/` | 법인 증빙 — `certificate.png`(고유번호증 렌더), `certificate_pic.jpg`(사진본) |

## images/generated/ 규칙
- **명명**: `<slug>-card.png` 가 각 페이지 `SubpageHero image` prop에 1:1 대응 (+ 홈 히어로 `hero-senior-smartphone-class.png`).
- 예: `donate-card`, `volunteer-card`, `foodbank-sharing-card`, `access-map-card`, `news-board-card`, `ai-teacher-classroom-card`, `education-roadmap-card` 등.
- 규격: 대체로 2048×1280 (히어로 2048×1152, v3 신규 16:11 2048×1408).
- `image-prompt-log.md`: 1차 8종 생성 로그(파일명↔용도↔규격 + 이미지 내 한국어 텍스트 'Korean Text Locks').
- `image-prompts-v3-new-pages.md`: v3 확장 13종 마스터 프롬프트(공통 스타일 브리프 — warm Korean editorial, 크림 `#FBF5EB` 배경/네이비 타이포/옐로 하이라이트/레드 악센트 + 한글 정확도 규칙).

## For AI Agents

### Working In This Directory
- 새 서브페이지를 만들면 대응 `<slug>-card.png`를 여기 추가하고, 스타일 일관성을 위해 `image-prompts-v3-new-pages.md`의 공통 브리프(크림 배경·네이비·옐로·레드)를 따를 것.
- 이미지 생성 도구는 박용환 워크플로(나노바나나/GPT Image 2.0). 한글 텍스트가 이미지에 들어가면 'Korean Text Locks'로 정확도 확인.
- `certificate*`는 신뢰도 증빙 — `/about/certificate`·`components/TrustBadge.tsx`에서 워터마크와 함께 노출. 원본 교체 시 두 곳 모두 확인.

## Dependencies

### Internal
- 모든 `<slug>-card.png` ← `app/**/page.tsx`의 `SubpageHero image` 및 홈 섹션 컴포넌트

### External
- 없음 (정적 파일). 생성 도구는 외부(나노바나나/GPT Image)지만 산출물만 보관.

<!-- MANUAL: -->

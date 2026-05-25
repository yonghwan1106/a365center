import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우리함께 평생교육·나눔센터 — 스마트폰 못하셔도 됩니다",
  description:
    "40~70대 어르신·장애인 100% 무료 디지털 교육. 메디스타워 213호 작은 공간에서 시작된 큰 기적. 경인장애인선교회·경인 공익네트워크 통합 허브.",
  keywords: [
    "우리함께 평생교육 나눔센터",
    "경인장애인선교회",
    "경인 공익네트워크",
    "어르신 디지털 교육",
    "스마트폰 교실",
    "AI 선생님",
    "용인 동백",
  ],
  openGraph: {
    title: "우리함께 평생교육·나눔센터",
    description: "스마트폰 못하셔도 됩니다. 지금부터 배우고, 일자리까지 연결해드립니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

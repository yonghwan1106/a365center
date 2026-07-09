import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatTel from "@/components/FloatTel";
import HopePost from "@/components/HopePost";
import AIGateBanner from "@/components/AIGateBanner";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <AIGateBanner />
      <HopePost />
      <Footer />
      <FloatTel />
    </>
  );
}

import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatTel from "@/components/FloatTel";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatTel />
    </>
  );
}

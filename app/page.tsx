import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AITeacherIntro from "@/components/AITeacherIntro";
import Worry from "@/components/Worry";
import Steps from "@/components/Steps";
import Proof from "@/components/Proof";
import Pillars from "@/components/Pillars";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import FloatTel from "@/components/FloatTel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AITeacherIntro />
        <Worry />
        <Steps />
        <Proof />
        <Pillars />
        <Closing />
      </main>
      <Footer />
      <FloatTel />
    </>
  );
}

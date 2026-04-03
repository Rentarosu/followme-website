import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhyUgc from "@/components/sections/WhyUgc";
import Service from "@/components/sections/Service";
import Mission from "@/components/sections/Mission";
import Platform from "@/components/sections/Platform";
import Member from "@/components/sections/Member";
import Company from "@/components/sections/Company";
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUgc />
        <Service />
        <Mission />
        <Platform />
        <Member />
        <News />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

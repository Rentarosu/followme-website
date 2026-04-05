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

      {/* Mobile fixed contact button */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a
          href="#contact"
          className="inline-flex items-center justify-center text-white font-bold text-sm py-4 rounded-full border-2 border-white shadow-lg w-full"
          style={{ background: "linear-gradient(135deg, #02a1f2 0%, #6ec4ff 100%)" }}
        >
          <span>お問い合わせ</span>
          <span className="absolute right-9 w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#02a1f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
      </div>
    </>
  );
}

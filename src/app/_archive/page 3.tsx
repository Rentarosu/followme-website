import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhyUgc from "@/components/sections/WhyUgc";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUgc />
      </main>
      <Footer />
    </>
  );
}

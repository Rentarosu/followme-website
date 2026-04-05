"use client";

export default function Mission() {
  return (
    <section id="mission" className="relative py-16 md:py-20 overflow-hidden rounded-br-[80px] md:rounded-br-[140px]" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <p
          className="animate-fade-in-up text-sm font-bold text-primary tracking-[0.2em] uppercase mb-8"
        >
          Our Mission
        </p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-dark leading-tight tracking-tight mb-8">
          <span
            className="animate-fade-in-up block"
            style={{ animationDelay: "0.15s" }}
          >
            AIが仕事を奪っていく時代に、
          </span>
          <span
            className="animate-fade-in-up gradient-text-primary block"
            style={{ animationDelay: "0.3s" }}
          >
            私たちは人の表現に価値をつける。
          </span>
        </h2>

        <p
          className="animate-fade-in-up text-sm md:text-base text-dark/45 leading-relaxed max-w-xl mx-auto"
          style={{ animationDelay: "0.45s" }}
        >
          テクノロジーが進化するほど、人のリアルな声や表現の価値は高まる。
          <br className="hidden md:block" />
          私たちは、一人ひとりの「らしさ」をコンテンツに変え、
          <br className="hidden md:block" />
          ブランドと人をつなぐ新しい仕組みをつくります。
        </p>
      </div>
    </section>
  );
}

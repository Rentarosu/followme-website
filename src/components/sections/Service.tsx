import Image from "next/image";

const services = [
  {
    number: "01",
    title: "マルチアカウント戦略",
    subtitle: "Multi-Account Strategy",
    desc: "1つの公式アカウントに頼らず、複数の若者アカウントから同時発信。SNS上に「みんなが使ってる」状態を意図的につくり出します。",
    why: "ユーザーは日常的に「また別の誰かがこの商品を使っている」という投稿を目にすることで、「今、これが流行っているんだ」という認知が自然に形成されます。広告ではなく、トレンドとして届ける。それがマルチアカウント戦略の強みです。",
    image: "/images/service/service_01.webp",
  },
  {
    number: "02",
    title: "Z世代クリエイター",
    subtitle: "Gen-Z Creators",
    desc: "大学生・若者がリアルなコンテンツを制作。広告臭のない等身大の投稿だからこそ、ユーザーの共感を生みます。",
    why: "インフルエンサーの「PR案件」はスキップされる時代。等身大のZ世代が日常の延長として投稿するからこそ、リアルな「使ってみた」として届き、高いエンゲージメントと購買行動への転換を実現します。",
    image: "/images/service/service_02.webp",
  },
  {
    number: "03",
    title: "バズ分析",
    subtitle: "Buzz Analytics",
    desc: "月間数百〜数千の投稿データを常に分析し、伸びるパターンを抽出。再現性のある拡散を実現します。",
    why: "感覚やトレンドの後追いではなく、データで「伸びる型」を把握。動画フォーマット・テキスト・キャプションを最適化し、「なんとなくバズった」ではなく「狙ってバズらせる」仕組みを構築します。",
    image: "/images/service/service_03.webp",
  },
];

export default function Service() {
  return (
    <section id="service" className="relative py-28 md:py-36 bg-white overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full top-[5%] right-[-10%]" style={{ background: "radial-gradient(circle, rgba(2,161,242,0.3) 0%, transparent 70%)", filter: "blur(100px)" }} />
      <div className="absolute w-[450px] h-[450px] rounded-full bottom-[10%] left-[-8%]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full top-[45%] left-[50%]" style={{ background: "radial-gradient(circle, rgba(110,196,255,0.2) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="relative z-10 mx-auto max-w-[480px] md:max-w-[1100px] px-6">
        <div className="animate-fade-in-up mb-20">
          <p className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 text-center md:text-left">Our Service</p>
          <h2 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-center md:text-left gradient-text-mesh">Hack UGC</h2>
          <p className="text-base md:text-lg text-dark/50 mt-4 md:mt-6 text-center md:text-left max-w-xl">SNSのアルゴリズムをハックし、UGCでトレンドをつくる。</p>
        </div>
        <div className="flex flex-col gap-16">
          {services.map((service, i) => (
            <div key={service.number} className={`animate-fade-in-up flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative w-full md:w-[42%] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-2xl">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" loading="lazy" />
              </div>
              <div className="flex-1">
                <span className="text-4xl font-black gradient-text-primary leading-none">{service.number}</span>
                <h3 className="text-xl md:text-2xl font-black text-dark mt-2 mb-1">{service.title}</h3>
                <p className="text-xs font-bold text-dark/30 uppercase tracking-wide mb-3">{service.subtitle}</p>
                <p className="text-sm md:text-base text-dark/50 leading-relaxed mb-5">{service.desc}</p>
                <div className="rounded-xl px-5 py-4" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
                  <p className="text-xs font-black text-primary uppercase tracking-wide mb-2">Why?</p>
                  <p className="text-sm text-dark/60 leading-relaxed">{service.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

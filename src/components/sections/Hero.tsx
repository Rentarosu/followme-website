"use client";

import Image from "next/image";

const marqueeWords = [
  "Hack UGC",
  "Z世代クリエイター",
  "マルチアカウント",
  "バズ分析",
  "TikTok",
  "Instagram",
  "YouTube Shorts",
  "トレンドメイク",
  "SNSハック",
];

const floatingCards = [
  // Around phone - varied angles and spread
  { src: "/images/hero/IMG_8398.webp", x: -155, y: -50, rotate: -18, delay: 0.45, w: 100, h: 134, tag: "レビュー" },
  { src: "/images/hero/IMG_8399.webp", x: 175, y: 80, rotate: 25, delay: 0.5, w: 95, h: 128, tag: "How-to" },
  { src: "/images/hero/IMG_8403.webp", x: -190, y: -190, rotate: 8, delay: 0.55, w: 120, h: 160, tag: "開封動画" },
  { src: "/images/hero/IMG_8405.webp", x: 150, y: -180, rotate: -22, delay: 0.6, w: 115, h: 155, tag: "Vlog" },
  { src: "/images/hero/IMG_8414.webp", x: 160, y: -15, rotate: 30, delay: 0.58, w: 90, h: 120, tag: "コスメ" },
  { src: "/images/hero/IMG_8417.webp", x: -200, y: 130, rotate: 15, delay: 0.78, w: 85, h: 115, tag: "比較" },
  { src: "/images/hero/IMG_8421.webp", x: 140, y: 200, rotate: -28, delay: 0.85, w: 88, h: 118, tag: "購入品紹介" },
  { src: "/images/hero/IMG_0201.webp", x: -120, y: 250, rotate: -35, delay: 0.95, w: 60, h: 80, tag: "GRWM" },
  { src: "/images/hero/JPEG画像-442E-800B-2B-0.webp", x: -280, y: -110, rotate: -14, delay: 1.0, w: 56, h: 75, tag: "体験談" },
  { src: "/images/hero/IMG_8405.webp", x: 280, y: -120, rotate: 20, delay: 1.1, w: 44, h: 58, tag: "日常" },
  { src: "/images/hero/IMG_8411.webp", x: -250, y: 30, rotate: -25, delay: 0.68, w: 80, h: 108, tag: "ルーティン" },
  { src: "/images/hero/IMG_8412.webp", x: 230, y: 140, rotate: 12, delay: 0.72, w: 70, h: 94, tag: "お気に入り" },
  { src: "/images/hero/IMG_8415.webp", x: 50, y: 260, rotate: -20, delay: 1.05, w: 75, h: 100, tag: "スキンケア" },
  { src: "/images/hero/IMG_8419.webp", x: -60, y: -260, rotate: 32, delay: 0.92, w: 65, h: 88, tag: "ヘアケア" },
  { src: "/images/hero/IMG_8424.webp", x: 260, y: 10, rotate: -16, delay: 0.88, w: 50, h: 68, tag: "食レポ" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen md:h-screen overflow-clip"
    >
      {/* Animated mesh gradient background - orbiting blurred circles */}
      <div className="absolute inset-0 bg-white pointer-events-none">
        {/* Blue 1 - large */}
        <div
          className="absolute w-[750px] h-[750px] md:w-[1050px] md:h-[1050px] rounded-full opacity-60 top-[-10%] left-[-5%]"
          style={{ background: "radial-gradient(circle, #02a1f2 0%, transparent 70%)", filter: "blur(120px)", animation: "orbit-1 14s ease-in-out infinite" }}
        />
        {/* Blue 2 - medium */}
        <div
          className="absolute w-[525px] h-[525px] md:w-[750px] md:h-[750px] rounded-full opacity-50 top-[40%] right-[5%]"
          style={{ background: "radial-gradient(circle, #6ec4ff 0%, transparent 70%)", filter: "blur(105px)", animation: "orbit-4 15s ease-in-out infinite" }}
        />
        {/* Blue 3 - small */}
        <div
          className="absolute w-[450px] h-[450px] md:w-[675px] md:h-[675px] rounded-full opacity-55 bottom-[5%] left-[15%]"
          style={{ background: "radial-gradient(circle, #29a8f7 0%, transparent 70%)", filter: "blur(105px)", animation: "orbit-6 17s ease-in-out infinite" }}
        />
        {/* Blue 4 - small */}
        <div
          className="absolute w-[420px] h-[420px] md:w-[630px] md:h-[630px] rounded-full opacity-50 top-[25%] left-[5%]"
          style={{ background: "radial-gradient(circle, #02a1f2 0%, transparent 70%)", filter: "blur(100px)", animation: "orbit-7 13s ease-in-out infinite" }}
        />
        {/* Purple 1 - large */}
        <div
          className="absolute w-[675px] h-[675px] md:w-[975px] md:h-[975px] rounded-full opacity-55 top-[5%] right-[-5%]"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", filter: "blur(120px)", animation: "orbit-2 16s ease-in-out infinite" }}
        />
        {/* Purple 2 - medium */}
        <div
          className="absolute w-[525px] h-[525px] md:w-[750px] md:h-[750px] rounded-full opacity-45 bottom-[15%] right-[20%]"
          style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)", filter: "blur(105px)", animation: "orbit-5 18s ease-in-out infinite" }}
        />
        {/* White 1 */}
        <div
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-60 bottom-[0%] left-[25%]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(90px)", animation: "orbit-3 12s ease-in-out infinite" }}
        />
        {/* White 2 */}
        <div
          className="absolute w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full opacity-55 top-[15%] right-[15%]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(85px)", animation: "orbit-6 19s ease-in-out infinite" }}
        />
      </div>

      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-dark opacity-[0.04] whitespace-nowrap tracking-tight">
          FOLLOW ME
        </span>
      </div>

      {/* Main 2-column layout */}
      <div className="relative z-10 min-h-full mx-auto max-w-[1400px] flex flex-col md:flex-row items-center pb-20 md:pb-0">
        {/* Left: Text area */}
        {/* Left: Text + Buttons */}
        <div className="flex-1 flex flex-col justify-center px-8 md:pl-24 lg:pl-32 pt-20 md:pt-0 md:max-w-[55%] order-1">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-tight">
            あなたらしさが、<br /><span className="gradient-text-primary">トレンドに。</span>
          </h1>
          <p className="text-sm md:text-base font-bold text-dark/45 mt-4 mb-2 md:mb-8">
            AIの時代だからこそ、あなたの表現に価値がある。
          </p>
          {/* Buttons - PC only (mobile buttons are below phone) */}
          <div className="hidden md:flex flex-col gap-3 w-full max-w-[400px]">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center text-white font-bold text-sm px-10 py-4 rounded-full border-2 border-white shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-300 w-full"
              style={{ background: "linear-gradient(135deg, #02a1f2 0%, #6ec4ff 100%)" }}
            >
              <span>お問い合わせ</span>
              <span className="absolute right-5 w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#02a1f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
            <a
              href="#service"
              className="relative inline-flex items-center justify-center text-white font-bold text-sm px-10 py-4 rounded-full border-2 border-white shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-300 w-full"
              style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)" }}
            >
              <span>サービスについて</span>
              <span className="absolute right-5 w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right: Phone with flying content */}
        <div className="flex flex-1 relative items-center justify-center md:max-w-[45%] h-[350px] md:h-full scale-[0.5] md:scale-100 origin-center order-2 -mt-16 md:mt-0 pointer-events-none">
          {/* Floating video cards bursting out */}
          {floatingCards.map((card, i) => (
            <div
              key={`card-${i}`}
              className="absolute z-20 animate-card-appear"
              style={{ transform: `translate(${card.x}px, ${card.y}px) rotate(${card.rotate}deg)`, animationDelay: `${card.delay}s` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-2 border-white/80" style={{ width: card.w, height: card.h }}>
                <Image src={card.src} alt="" fill className="object-cover brightness-110" sizes={`${card.w}px`} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1B1A1F">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </div>
                {card.w >= 80 && (
                  <div className="absolute bottom-1.5 left-1.5">
                    <span className="bg-white/80 backdrop-blur-sm text-dark/70 text-[8px] font-bold px-1.5 py-0.5 rounded-md">
                      {card.tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Main phone - center */}
          <div
            className="relative z-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s", transform: "rotate(8deg)" }}
          >
            <div className="relative w-[240px] h-[480px] rounded-[32px] bg-dark border-[3px] border-dark/10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-dark rounded-b-2xl z-10" />
              <div className="absolute inset-[3px] rounded-[28px] overflow-hidden">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <Image src="/logo.webp" alt="フォロミー" width={100} height={100} className="object-contain" priority />
                </div>
              </div>
            </div>
          </div>

          {/* Floating reaction badges */}
          {/* Hearts */}
          {[
            { top: "70%", right: "3%", size: 48, anim: "float 3s ease-in-out infinite", delay: 1.2 },
            { top: "70%", left: "2%", size: 32, anim: "float-reverse 3.4s ease-in-out 0.3s infinite", delay: 1.35 },
            { top: "35%", right: "0%", size: 26, anim: "float 3.7s ease-in-out 0.6s infinite", delay: 1.45 },
            { top: "85%", left: "50%", size: 42, anim: "float-reverse 3.2s ease-in-out 0.9s infinite", delay: 1.55 },
            { top: "15%", left: "60%", size: 22, anim: "float 3.5s ease-in-out 1.1s infinite", delay: 1.6 },
            { top: "50%", left: "-3%", size: 38, anim: "float 3.3s ease-in-out 0.5s infinite", delay: 1.4 },
            { top: "22%", left: "30%", size: 28, anim: "float-reverse 3.6s ease-in-out 0.8s infinite", delay: 1.5 },
          ].map((h, i) => (
            <div
              key={`heart-${i}`}
              className="block absolute z-30"
              style={{ top: h.top, left: h.left, right: h.right, animation: h.anim }}
            >
              <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="#FF4466" stroke="none" style={{ filter: "drop-shadow(0 2px 4px rgba(255,68,102,0.3))" }}>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
          ))}

          {/* Play count */}
          <div
            className="absolute z-30 bottom-[10%] left-[2%] md:left-[-2%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 flex items-center gap-1.5"
            style={{ animation: "float-reverse 3.5s ease-in-out infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1B1A1F">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-dark text-[11px] font-bold">128K</span>
          </div>

          {/* Buzz */}
          <div
            className="absolute z-30 top-[15%] left-[-2%] md:left-[-10%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80"
            style={{ animation: "float 4s ease-in-out 0.5s infinite" }}
          >
            <span className="text-dark/70 text-[11px] font-medium">🔥 バズってる！</span>
          </div>

          {/* Like count */}
          <div
            className="flex absolute z-30 bottom-[8%] right-[-5%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float-reverse 3s ease-in-out 1s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4466" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">2.4K</span>
          </div>

          {/* Comment */}
          <div
            className="flex absolute z-30 top-[30%] left-[-2%] md:left-[-10%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float 3.2s ease-in-out 0.3s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">356</span>
          </div>

          {/* Share */}
          <div
            className="block absolute z-30 top-[5%] left-[10%] bg-white/70 backdrop-blur-md rounded-full p-2.5 shadow-md border border-white/80"
            style={{ animation: "float 3.2s ease-in-out 0.8s infinite" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>

          {/* Bookmark */}
          <div
            className="flex absolute z-30 bottom-[5%] right-[15%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float-reverse 3.8s ease-in-out 0.6s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">保存</span>
          </div>

          {/* Followers */}
          <div
            className="flex absolute z-30 bottom-[5%] left-[-8%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float 3.5s ease-in-out 1.2s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            <span className="text-dark text-[11px] font-bold">+1.2K</span>
          </div>

          {/* Comment bubbles — scattered from center to outer */}
          {[
            { text: "買いました！", top: "12%", left: "60%", anim: "float-reverse 3.6s ease-in-out 0.4s infinite", delay: 1.3, front: true },
            { text: "リピ確定 ✨", top: "78%", left: "65%", anim: "float 3.1s ease-in-out 1.1s infinite", delay: 1.35, front: true },
            { text: "どこで売ってるの？", top: "18%", left: "8%", anim: "float 3.8s ease-in-out 0.7s infinite", delay: 1.4, front: false },
            { text: "友達にシェアした！", top: "82%", left: "15%", anim: "float-reverse 3.3s ease-in-out 0.9s infinite", delay: 1.45, front: true },
            { text: "まじでおすすめ！", top: "10%", left: "20%", anim: "float 3.2s ease-in-out 0.3s infinite", delay: 1.25, front: false },
            { text: "神コスメ発見 🙌", top: "70%", left: "2%", anim: "float-reverse 3.7s ease-in-out 0.5s infinite", delay: 1.5, front: false },
            { text: "めっちゃバズってる", top: "85%", left: "42%", anim: "float 3.3s ease-in-out 1.3s infinite", delay: 1.65, front: true },
          ].map((c, i) => (
            <div
              key={`comment-${i}`}
              className={`block absolute bg-white/80 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-md border border-white/80 ${c.front ? "z-30" : "z-[5]"}`}
              style={{ top: c.top, left: c.left, animation: c.anim }}
            >
              <span className="text-dark/70 text-[10px] font-medium">{c.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee */}
      <div
        className="absolute bottom-12 left-0 right-0 z-20 overflow-hidden"
      >
        <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="text-sm font-bold text-dark/30 flex items-center gap-8">
              {word}
              <span className="text-primary/40">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <div
          className="w-px h-6 bg-gradient-to-b from-dark/25 to-transparent"
        />
      </div>
    </section>
  );
}

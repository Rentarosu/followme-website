"use client";

import { motion } from "framer-motion";
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
  // Center / near-phone cards — offset to leave logo visible
  { src: "/images/IMG_8398.jpg", x: -75, y: -80, rotate: -6, delay: 0.45, w: 100, h: 134 },
  { src: "/images/IMG_8399.jpg", x: 80, y: 75, rotate: 8, delay: 0.5, w: 95, h: 128 },
  { src: "/images/IMG_8400.jpg", x: -80, y: 90, rotate: -10, delay: 0.52, w: 88, h: 118 },
  { src: "/images/IMG_8401.jpg", x: 75, y: -85, rotate: 5, delay: 0.48, w: 92, h: 124 },
  // Large cards
  { src: "/images/IMG_8403.jpg", x: -140, y: -120, rotate: -12, delay: 0.55, w: 120, h: 160 },
  { src: "/images/IMG_8405.jpg", x: 150, y: -100, rotate: 10, delay: 0.6, w: 115, h: 155 },
  { src: "/images/IMG_8411.jpg", x: -130, y: 100, rotate: -7, delay: 0.65, w: 120, h: 160 },
  { src: "/images/IMG_8412.jpg", x: 140, y: 110, rotate: 13, delay: 0.68, w: 115, h: 155 },
  // Medium cards
  { src: "/images/IMG_8414.JPG", x: 15, y: -180, rotate: 5, delay: 0.58, w: 90, h: 120 },
  { src: "/images/IMG_8415.JPG", x: -20, y: 185, rotate: -9, delay: 0.72, w: 90, h: 120 },
  { src: "/images/IMG_8417.jpg", x: -210, y: -20, rotate: -15, delay: 0.78, w: 85, h: 115 },
  { src: "/images/IMG_8419.jpg", x: 220, y: 15, rotate: 14, delay: 0.82, w: 85, h: 115 },
  { src: "/images/IMG_8421.jpg", x: -180, y: -180, rotate: 11, delay: 0.85, w: 88, h: 118 },
  { src: "/images/IMG_8424.JPG", x: 180, y: 185, rotate: -11, delay: 0.88, w: 88, h: 118 },
  // Small cards
  { src: "/images/0C0632DB-5F63-4407-8124-D6C8E7F149BA.JPG", x: 100, y: -250, rotate: -18, delay: 0.92, w: 60, h: 80 },
  { src: "/images/IMG_0201.JPG", x: -100, y: 255, rotate: 16, delay: 0.95, w: 60, h: 80 },
  { src: "/images/JPEG画像-442E-800B-2B-0.JPEG", x: -280, y: -140, rotate: 22, delay: 1.0, w: 56, h: 75 },
  { src: "/images/JPEG画像-4532-BC2A-8F-0.JPEG", x: 285, y: 140, rotate: -20, delay: 1.02, w: 56, h: 75 },
  // Tiny cards
  { src: "/images/IMG_8398.jpg", x: -320, y: 50, rotate: 15, delay: 1.08, w: 44, h: 58 },
  { src: "/images/IMG_8405.jpg", x: 330, y: -50, rotate: -13, delay: 1.1, w: 44, h: 58 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Animated mesh gradient background - orbiting blurred circles */}
      <div className="absolute inset-0 bg-white">
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
      <div className="relative z-10 h-full mx-auto max-w-[1400px] flex flex-col md:flex-row items-center">
        {/* Left: Text area */}
        <div className="flex-1 flex flex-col justify-center px-8 md:pl-24 lg:pl-32 pt-24 md:pt-0 md:max-w-[55%]">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-tight">
            あなたらしさを<br /><span className="gradient-text-primary">トレンドに。</span>
          </h1>
          <p className="text-sm md:text-base font-bold text-dark/45 mt-4 mb-8">
            AIの時代だからこそ、あなたの表現に価値がある。
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-48 bg-primary text-white font-bold text-sm py-4 rounded-full hover:scale-[1.04] hover:shadow-lg transition-all duration-300"
            >
              お問い合わせ
            </a>
            <a
              href="#service"
              className="inline-flex items-center justify-center w-48 bg-dark text-white font-bold text-sm py-4 rounded-full hover:scale-[1.04] hover:shadow-lg transition-all duration-300"
            >
              サービスについて
            </a>
          </div>
        </div>

        {/* Right: Phone with flying content */}
        <div className="flex-1 relative flex items-center justify-center md:max-w-[45%] mt-8 md:mt-0 h-[40vh] md:h-full">
          {/* Floating video cards bursting out */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={`card-${i}`}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.3, rotate: 0 }}
              animate={{ opacity: 1, x: card.x, y: card.y, scale: 1, rotate: card.rotate }}
              transition={{ duration: 1, delay: card.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden md:block absolute z-20"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-2 border-white/80" style={{ width: card.w, height: card.h }}>
                <Image src={card.src} alt="" fill className="object-cover brightness-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1B1A1F">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Main phone - center */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] rounded-[32px] bg-dark border-[3px] border-dark/10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-dark rounded-b-2xl z-10" />
              <div className="absolute inset-[3px] rounded-[28px] overflow-hidden">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <Image src="/logo.png" alt="フォロミー" width={100} height={100} className="object-contain" priority />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating reaction badges */}
          {/* Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute z-30 top-[16%] right-[6%] md:right-[2%] bg-white/70 backdrop-blur-md rounded-full p-2.5 shadow-md border border-white/80"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4466" stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </motion.div>

          {/* Play count */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute z-30 bottom-[22%] left-[5%] md:left-[0%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 flex items-center gap-1.5"
            style={{ animation: "float-reverse 3.5s ease-in-out infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1B1A1F">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-dark text-[11px] font-bold">128K</span>
          </motion.div>

          {/* Buzz */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.35 }}
            className="absolute z-30 top-[38%] left-[0%] md:left-[-8%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80"
            style={{ animation: "float 4s ease-in-out 0.5s infinite" }}
          >
            <span className="text-dark/70 text-[11px] font-medium">🔥 バズってる！</span>
          </motion.div>

          {/* Like count */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="hidden md:flex absolute z-30 bottom-[38%] right-[-3%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float-reverse 3s ease-in-out 1s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4466" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">2.4K</span>
          </motion.div>

          {/* Comment */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden md:flex absolute z-30 top-[25%] left-[2%] md:left-[-5%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float 3.2s ease-in-out 0.3s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">356</span>
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.55 }}
            className="hidden md:block absolute z-30 top-[8%] left-[25%] bg-white/70 backdrop-blur-md rounded-full p-2.5 shadow-md border border-white/80"
            style={{ animation: "float 3.2s ease-in-out 0.8s infinite" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </motion.div>

          {/* Bookmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.45 }}
            className="hidden md:flex absolute z-30 bottom-[12%] right-[10%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float-reverse 3.8s ease-in-out 0.6s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            <span className="text-dark text-[11px] font-bold">保存</span>
          </motion.div>

          {/* Followers */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="hidden md:flex absolute z-30 bottom-[30%] left-[-6%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float 3.5s ease-in-out 1.2s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            <span className="text-dark text-[11px] font-bold">+1.2K</span>
          </motion.div>

          {/* Comment bubbles — scattered from center to outer */}
          {[
            // Center (on/near phone)
{ text: "買いました！", top: "52%", left: "50%", anim: "float-reverse 3.6s ease-in-out 0.4s infinite", delay: 1.3, front: true },
            { text: "即ポチした", top: "38%", left: "52%", anim: "float 3.9s ease-in-out 1.0s infinite", delay: 1.6, front: false },
            // Inner ring
            { text: "どこで売ってるの？", top: "30%", left: "30%", anim: "float 3.8s ease-in-out 0.7s infinite", delay: 1.4, front: false },
            { text: "リピ確定 ✨", top: "55%", left: "60%", anim: "float 3.1s ease-in-out 1.1s infinite", delay: 1.35, front: true },
            { text: "共感しかない 🥹", top: "60%", left: "35%", anim: "float 3.6s ease-in-out 0.5s infinite", delay: 1.42, front: false },
            { text: "保存した！", top: "35%", left: "62%", anim: "float-reverse 3.2s ease-in-out 1.2s infinite", delay: 1.7, front: true },
            // Middle ring
            { text: "友達にシェアした！", top: "22%", left: "20%", anim: "float-reverse 3.3s ease-in-out 0.9s infinite", delay: 1.45, front: true },
            { text: "まじでおすすめ！", top: "25%", left: "58%", anim: "float 3.2s ease-in-out 0.3s infinite", delay: 1.25, front: false },
            { text: "私も使ってる 💕", top: "65%", left: "55%", anim: "float-reverse 3.5s ease-in-out 0.8s infinite", delay: 1.55, front: false },
            { text: "レビュー助かる！", top: "68%", left: "25%", anim: "float-reverse 3.0s ease-in-out 0.6s infinite", delay: 1.38, front: true },
            // Outer ring
            { text: "神コスメ発見 🙌", top: "12%", left: "35%", anim: "float-reverse 3.7s ease-in-out 0.5s infinite", delay: 1.5, front: false },
            { text: "これ気になってた！", top: "18%", left: "65%", anim: "float-reverse 3.4s ease-in-out 0.1s infinite", delay: 1.28, front: true },
            { text: "めっちゃバズってる", top: "75%", left: "40%", anim: "float 3.3s ease-in-out 1.3s infinite", delay: 1.65, front: true },
            { text: "フォローした 🙋‍♀️", top: "72%", left: "12%", anim: "float 3.5s ease-in-out 0.9s infinite", delay: 1.58, front: false },
          ].map((c, i) => (
            <motion.div
              key={`comment-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: c.delay }}
              className={`hidden md:block absolute bg-white/80 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-md border border-white/80 ${c.front ? "z-30" : "z-[5]"}`}
              style={{ top: c.top, left: c.left, animation: c.anim }}
            >
              <span className="text-dark/70 text-[10px] font-medium">{c.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-dark/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}

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

function PhoneMockup({
  imageSrc,
  className,
  priority = false,
}: {
  imageSrc: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] rounded-[32px] bg-dark border-[3px] border-dark/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden ${className ?? ""}`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-dark rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="absolute inset-[3px] rounded-[28px] overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}

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
        {/* Blue 4 - small */}
        <div
          className="absolute w-[420px] h-[420px] md:w-[630px] md:h-[630px] rounded-full opacity-50 top-[25%] left-[5%]"
          style={{ background: "radial-gradient(circle, #02a1f2 0%, transparent 70%)", filter: "blur(100px)", animation: "orbit-7 13s ease-in-out infinite" }}
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm md:text-base font-bold text-dark/40 tracking-wide mb-3"
          >
            UGCマーケティングの企画・運用代行
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-4"
          >
            <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-dark leading-tight tracking-tight">
              あなたらしさを、
            </span>
            <span className="block text-5xl md:text-6xl lg:text-8xl font-black gradient-text-primary leading-none tracking-tight mt-1">
              トレンドに。
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm md:text-[15px] text-dark/50 leading-relaxed max-w-md mb-8"
          >
            SNSで話題になるUGCを、企画から制作・運用まで一気通貫で。
            <br />
            TikTok・Instagram・YouTubeショートに対応。
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-dark text-white font-bold text-sm px-8 py-4 rounded-full hover:scale-[1.04] hover:shadow-lg transition-all duration-300"
            >
              お問い合わせ
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#service"
              className="inline-flex items-center gap-2 text-dark/50 hover:text-dark text-sm font-bold transition-colors duration-300 py-4"
            >
              サービスを見る
            </a>
          </motion.div>
        </div>

        {/* Right: Phone mockups */}
        <div className="flex-1 relative flex items-center justify-center md:max-w-[45%] mt-8 md:mt-0 h-[40vh] md:h-full">
          {/* Main phone - center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10"
          >
            <PhoneMockup imageSrc="/images/creator-1.jpg" priority />
          </motion.div>

          {/* Sub phone - left, tilted (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden md:block absolute z-0 -left-4 lg:left-0 top-[18%]"
            style={{ transform: "rotate(-10deg) scale(0.6)" }}
          >
            <PhoneMockup imageSrc="/images/creator-2.jpg" />
          </motion.div>

          {/* Sub phone - right, tilted (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block absolute z-0 -right-4 lg:right-0 bottom-[15%]"
            style={{ transform: "rotate(8deg) scale(0.6)" }}
          >
            <PhoneMockup imageSrc="/images/creator-3.jpg" />
          </motion.div>

          {/* Floating SNS icons */}
          {/* Heart */}
          <div
            className="absolute z-20 top-[15%] right-[10%] md:right-[5%] bg-white/70 backdrop-blur-md rounded-full p-2.5 shadow-md border border-white/80"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4466" stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>

          {/* Play count */}
          <div
            className="absolute z-20 bottom-[20%] left-[5%] md:left-[0%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 flex items-center gap-1.5"
            style={{ animation: "float-reverse 3.5s ease-in-out infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1B1A1F">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-dark text-[11px] font-bold">128K</span>
          </div>

          {/* Comment bubble */}
          <div
            className="absolute z-20 top-[35%] left-[0%] md:left-[-8%] bg-white/70 backdrop-blur-md rounded-2xl px-3 py-2 shadow-md border border-white/80"
            style={{ animation: "float 4s ease-in-out 0.5s infinite" }}
          >
            <span className="text-dark/70 text-[11px] font-medium">🔥 バズってる！</span>
          </div>

          {/* Like count */}
          <div
            className="hidden md:flex absolute z-20 bottom-[35%] right-[-5%] bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/80 items-center gap-1.5"
            style={{ animation: "float-reverse 3s ease-in-out 1s infinite" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
            </svg>
            <span className="text-dark text-[11px] font-bold">2.4K</span>
          </div>

          {/* Share icon */}
          <div
            className="hidden md:block absolute z-20 top-[8%] left-[25%] bg-white/70 backdrop-blur-md rounded-full p-2.5 shadow-md border border-white/80"
            style={{ animation: "float 3.2s ease-in-out 0.8s infinite" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
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

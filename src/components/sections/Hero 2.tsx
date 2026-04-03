"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  {
    href: "#why-ugc",
    label: "Why UGC",
    desc: "なぜUGCなのか",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    href: "#service",
    label: "Service",
    desc: "3つの強み",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    href: "#how-it-works",
    label: "How it Works",
    desc: "ご利用の流れ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    desc: "お問い合わせ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
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
      {/* Animated mesh gradient background - bright & pop */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 hero-mesh-1"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 15% 25%, rgba(2,161,242,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 70% 70% at 80% 15%, rgba(139,92,246,0.3) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 50% 80%, rgba(110,196,255,0.3) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 90% 75%, rgba(167,139,250,0.25) 0%, transparent 45%)
            `,
          }}
        />
        <div className="absolute inset-0 hero-mesh-2"
          style={{
            background: `
              radial-gradient(ellipse 70% 70% at 60% 50%, rgba(2,161,242,0.2) 0%, transparent 50%),
              radial-gradient(ellipse 80% 80% at 5% 65%, rgba(139,92,246,0.25) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 45% 10%, rgba(110,196,255,0.25) 0%, transparent 45%),
              radial-gradient(ellipse 60% 60% at 85% 35%, rgba(255,105,180,0.15) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0 hero-mesh-3"
          style={{
            background: `
              radial-gradient(ellipse 55% 55% at 25% 55%, rgba(167,139,250,0.2) 0%, transparent 50%),
              radial-gradient(ellipse 65% 65% at 75% 50%, rgba(2,161,242,0.25) 0%, transparent 50%),
              radial-gradient(ellipse 45% 45% at 10% 10%, rgba(255,105,180,0.12) 0%, transparent 45%)
            `,
          }}
        />
      </div>

      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black font-[family-name:var(--font-display)] text-dark opacity-[0.04] whitespace-nowrap tracking-tight">
          FOLLOW ME
        </span>
      </div>

      {/* Logo - absolute top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 left-8 md:top-10 md:left-10 z-20 flex items-center gap-2.5"
      >
        <Image src="/logo.png" alt="フォロミー" width={36} height={36} className="object-cover" priority />
        <span className="font-bold text-base text-dark tracking-tight">フォロミー</span>
      </motion.div>

      {/* Main 2-column layout */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center">
        {/* Left: Text area */}
        <div className="flex-1 flex flex-col justify-center px-8 md:pl-16 lg:pl-24 pt-24 md:pt-0 md:max-w-[55%]">
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
              「流行ってる」を、
            </span>
            <span className="block text-5xl md:text-6xl lg:text-8xl font-black gradient-text-primary leading-none tracking-tight mt-1">
              つくる。
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

          {/* Nav links - 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="grid grid-cols-2 gap-3 max-w-sm"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 bg-white/60 hover:bg-white/80 backdrop-blur-sm border border-white/80 hover:border-primary/20 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-primary/80 group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <div>
                  <span className="block text-[11px] font-[family-name:var(--font-display)] text-dark/70 group-hover:text-dark tracking-wide uppercase transition-colors">
                    {item.label}
                  </span>
                  <span className="block text-[10px] text-dark/35 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </a>
            ))}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-dark/25 uppercase font-[family-name:var(--font-display)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-dark/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

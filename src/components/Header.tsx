"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#why-ugc", label: "Why UGC" },
  { href: "#service", label: "Service" },
  { href: "#mission", label: "Mission" },
  { href: "#member", label: "Member" },
  { href: "#company", label: "Company" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="フォロミー" width={52} height={52} className="object-cover" />
          <span className="font-bold text-lg tracking-tight text-dark">フォロミー</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-bold text-dark-light hover:text-primary transition-colors uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] font-bold text-white bg-dark px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.04] transition-all"
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-b border-gray-100"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-3 text-base font-medium text-dark hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center font-bold text-white bg-dark px-5 py-3 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

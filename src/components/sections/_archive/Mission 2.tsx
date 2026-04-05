"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="relative py-32 md:py-44 overflow-hidden" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-8"
        >
          Our Mission
        </motion.p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-dark leading-tight tracking-tight mb-8">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block"
          >
            AIが仕事を奪っていく時代に、
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="gradient-text-primary block"
          >
            私たちは人の表現に価値をつける。
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-sm md:text-base text-dark/45 leading-relaxed max-w-xl mx-auto"
        >
          テクノロジーが進化するほど、人のリアルな声や表現の価値は高まる。
          <br className="hidden md:block" />
          私たちは、一人ひとりの「らしさ」をコンテンツに変え、
          <br className="hidden md:block" />
          ブランドと人をつなぐ新しい仕組みをつくります。
        </motion.p>
      </div>
    </section>
  );
}

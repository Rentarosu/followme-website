"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "84",
    unit: "%",
    label: "UGC信頼度",
    desc: "消費者の84%が、企業広告よりもユーザーの口コミ・投稿を信頼しています。",
  },
  {
    number: "4.5",
    unit: "倍",
    label: "購買意欲向上",
    desc: "UGCに触れた消費者は、そうでない消費者と比べ購買意欲が4.5倍に向上します。",
  },
  {
    number: "6.9",
    unit: "倍",
    label: "エンゲージメント率",
    desc: "UGCはブランド公式コンテンツと比較して、6.9倍のエンゲージメントを獲得します。",
  },
];

export default function WhyUgc() {
  return (
    <section id="why-ugc" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-3">
            Why UGC
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-5">
            なぜ、UGCなのか
          </h2>
          <p className="text-sm md:text-base text-dark/50 leading-relaxed max-w-lg mx-auto">
            広告に慣れた消費者が増える中、リアルな声＝UGCが
            <br className="hidden md:block" />
            購買行動に最も大きな影響を与えています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 md:p-10 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-400"
            >
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-black gradient-text-primary leading-none">
                  {stat.number}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-primary ml-1">
                  {stat.unit}
                </span>
              </div>
              <h3 className="text-base font-bold text-dark mb-3">
                {stat.label}
              </h3>
              <p className="text-sm text-dark/45 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

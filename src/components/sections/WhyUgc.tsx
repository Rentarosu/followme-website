"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "92",
    unit: "%",
    label: "信頼性",
    desc: "消費者の92%が従来のブランド広告よりも口コミやUGCを信頼しています。",
    note: "※1",
  },
  {
    number: "4",
    unit: "倍",
    label: "広告効率",
    desc: "UGC広告はCTRが4倍、CPCを50%削減します。",
    note: "※2",
  },
  {
    number: "161",
    unit: "%",
    label: "売上直結",
    desc: "UGC掲載で購買コンバージョン率が最大161%向上します。",
    note: "※3",
  },
];

const footnotes = [
  "※1 Nielsen「Global Trust in Advertising Report」",
  "※2 Bazaarvoice調べ",
  "※3 Bazaarvoice等の複数調査により確認",
];

export default function WhyUgc() {
  return (
    <section id="why-ugc" className="relative pt-16 pb-10 md:pt-24 md:pb-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
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
              <h3 className="text-base font-bold text-dark mb-3">
                {stat.label}
              </h3>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-black gradient-text-primary leading-none">
                  {stat.number}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-primary ml-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-sm text-dark/45 leading-relaxed">
                {stat.desc}
                <span className="text-[10px] text-dark/30 ml-0.5">{stat.note}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-right">
          {footnotes.map((fn) => (
            <p key={fn} className="text-[10px] text-dark/30 leading-relaxed">
              {fn}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

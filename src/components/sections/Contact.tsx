"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[480px] md:max-w-[700px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <h2 className="text-[11vw] md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter uppercase leading-none gradient-text-mesh mb-6">
            CONTACT
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          {/* 会社名 */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-dark mb-2">
              会社名
            </label>
            <input
              type="text"
              placeholder="株式会社〇〇"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* お名前 */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-dark mb-2">
              お名前
              <span className="text-xs text-primary ml-2">必須</span>
            </label>
            <input
              type="text"
              placeholder="山田 太郎"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* メールアドレス */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-dark mb-2">
              メールアドレス
              <span className="text-xs text-primary ml-2">必須</span>
            </label>
            <input
              type="email"
              placeholder="example@company.co.jp"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* お問い合わせ内容 */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-dark mb-2">
              お問い合わせ内容
              <span className="text-xs text-primary ml-2">必須</span>
            </label>
            <textarea
              rows={5}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-dark text-white font-bold text-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            送信する
          </button>
        </motion.form>
      </div>
    </section>
  );
}

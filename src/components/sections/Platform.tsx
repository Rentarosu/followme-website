"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Platform() {
  return (
    <section id="platform" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[480px] md:max-w-[900px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black gradient-text-primary">企業も、クリエイターも。</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-col gap-8">
          {/* For Business */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden">
            <div className="relative w-full md:w-[40%] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden">
              <Image src="/images/mission-bg.jpg" alt="企業の方へ" fill className="object-cover" />
            </div>
            <div className="flex-1 px-6 pb-6 md:px-0 md:pr-8 md:py-8">
              <p className="text-xs font-bold text-primary tracking-[0.15em] uppercase mb-2">For Business</p>
              <h3 className="text-2xl md:text-3xl font-black gradient-text-blue mb-4">月1,000本の&quot;リアル&quot;が、ブランドを動かす。<br />若者共創型UGCマーケティング</h3>
              <p className="text-sm text-dark/50 leading-relaxed mb-5">Z世代クリエイターに特化した、UGC型SNSマーケティング支援サービスです。全国の若者クリエイターネットワークを通じて、TikTok・Instagram・YouTubeショートに&quot;消費者目線&quot;のショート動画を大量配信。月350本〜最大1,800本・3プランから選べる料金体系で、スケーラブルかつ高コスパなSNS運用を実現します。</p>
              <a href="#" className="inline-flex items-center gap-3 text-white font-bold text-sm px-10 py-3 rounded-full border-2 border-white shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-300" style={{ background: "linear-gradient(135deg, #02a1f2 0%, #6ec4ff 100%)" }}>
                詳細はこちら
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#02a1f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </div>
          </div>
          {/* For Creators */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 overflow-hidden">
            <div className="relative w-full md:w-[40%] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden">
              <Image src="/images/hero.jpg" alt="クリエイターの方へ" fill className="object-cover" />
            </div>
            <div className="flex-1 px-6 pb-6 md:px-0 md:pl-8 md:py-8">
              <p className="text-xs font-bold text-accent tracking-[0.15em] uppercase mb-2">For Creators</p>
              <h3 className="text-2xl md:text-3xl font-black gradient-text-purple mb-4">AIに仕事を奪われる時代、<br />&quot;あなたの表現&quot;には価値がある。</h3>
              <p className="text-sm text-dark/50 leading-relaxed mb-5">Z世代の皆さま向けの、ショート動画制作サービスです。1本あたり最高10万円以上の報酬を、毎週お振込み。公式LINEにご登録後、関心のある案件にご応募いただき、選ばれたら企業のショート動画をスマホで撮影・投稿するだけです。顔出しは不要、特別な機材や経験も必要ありません。マニュアルとフィードバックを通じてSNSスキルも自然と身につく仕組みで運営しております。</p>
              <a href="#" className="inline-flex items-center gap-3 text-white font-bold text-sm px-10 py-3 rounded-full border-2 border-white shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-300" style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)" }}>
                詳細はこちら
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

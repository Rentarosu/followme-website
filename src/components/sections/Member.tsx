"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "井上 蓮",
    role: "CEO",
    desc: "早稲田大学在学中に営業代理店を立ち上げ、2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。",
    image: "/images/member-1.jpg",
  },
  {
    name: "太田 健介",
    role: "COO",
    desc: "早稲田大学在学中に営業代理店を立ち上げ、2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。",
    image: "/images/member-2.jpg",
  },
  {
    name: "岡崎 新",
    role: "CTO",
    desc: "早稲田大学在学中に営業代理店を立ち上げ、2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。",
    image: "/images/member-3.jpg",
  },
  {
    name: "伊藤 由莉奈",
    role: "Sales Manager",
    desc: "早稲田大学在学中に営業代理店を立ち上げ、2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。",
    image: "/images/hero.jpg",
  },
];

export default function Member() {
  return (
    <section id="member" className="relative py-28 md:py-36 overflow-hidden rounded-tl-[80px] md:rounded-tl-[140px]" style={{ background: "#272727" }}>
      <div className="mx-auto max-w-[480px] md:max-w-[1100px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-[11vw] md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter uppercase leading-none gradient-text-mesh mb-6">
            MEMBER
          </h2>
          <p className="text-base md:text-lg font-bold text-white/80 leading-relaxed">
            平均年齢20歳以下。Z世代を中心としたメンバーで
            <br />
            トレンドをハックします。
          </p>
        </motion.div>

        {/* Member cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#383838] rounded-2xl border border-white/10 overflow-hidden pb-6"
            >
              {/* Photo + overlapping avatar */}
              <div className="relative mb-0">
                <div className="relative w-full aspect-[2/1] rounded-t-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Avatar + Name & Role */}
              <div className="relative z-10 flex items-end gap-4 pl-4 -mt-[40px] mb-5">
                {/* Circle avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#383838]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pb-1">
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wide mt-[3px]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed px-5 pb-2">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-white/50 font-bold text-4xl md:text-5xl mt-16"
        >
          + 2 Members
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-white/50 font-bold text-4xl md:text-5xl mt-4"
        >
          +
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-white/50 font-bold text-4xl md:text-5xl mt-4"
        >
          Hundreds of Young Creators
        </motion.p>
      </div>
    </section>
  );
}

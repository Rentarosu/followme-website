"use client";

import Image from "next/image";

const members = [
  {
    name: "井上 蓮",
    role: "CEO",
    desc: `小学6年時にSNSアフィリエイトで初めてのマネタイズに成功。中学時代にはせどり・物販事業を展開し、高校2年時にはAI×Web制作事業で法人を設立。個人から中小企業まで幅広いクライアントのWeb制作を手がける。高校卒業と同時に上京し、「ホームページは今後AIに取って代わられる」という確信のもと、SNSにおける人間の表現力に着目し新たな事業を構想。その中で、一緒に事業をできる仲間を求めて全国を飛び回っていたCOO太田賢介と出会い、理念で意気投合しフォロミーを設立。CEOとしてビジネスモデルの設計からマーケティング・デザイン・営業まで全領域を統括する。`,
    image: "/images/members/inoue_ren_icon2.webp",
    cover: "/images/members/inoue_ren_cover4.webp",
    avatarScale: 1.3, avatarPos: "45% 25%",
  },
  {
    name: "太田 健介",
    role: "COO",
    desc: `中国にルーツを持ち、日中バイリンガルとして育つ。海外研修への参加を目的に高校へ進学し、在学中に高卒認定を取得したうえで中退。その後、一緒に事業をできる仲間を求めて全国を飛び回る中でCEO井上蓮と出会い、理念で意気投合しフォロミーを共同で設立。仲間を集めてチームを立ち上げ、COOとして事業企画・戦略立案からタスク設計・実行管理までを一手に担う。日中英トリリンガルの視野と「最短で動き、走りながら考える」突破力を武器に、事業を前に進める。`,
    image: "/images/members/ota_kensuke.webp",
    cover: "/images/members/ota_kensuke_cover7.webp",
    avatarScale: 1, avatarPos: "center",
  },
  {
    name: "岡崎 新",
    role: "CTO",
    desc: "慶應義塾大学在学中のシステムエンジニア。高校時代にロボットアイデア甲子園全国大会受賞・ロボカップジュニアジャパン全国大会7位入賞など技術分野で実績を残す一方、高校生ビジネスプラングランプリベスト100・プレゼン甲子園地区大会優秀賞とビジネス領域でも成果を上げる。大学では複数の学生団体に所属し、HP・LP・アプリの開発を経験。全国を飛び回りエンジニアを探していたCOO太田賢介と出会い、理念と事業内容に共感しフォロミーに参画。CTOとして管理システムや自社アプリの開発を担う。",
    image: "/images/members/okazaki_arata_icon4.webp",
    cover: "/images/members/okazaki_arata.webp",
    avatarScale: 1.2, avatarPos: "center 15%",
  },
  {
    name: "伊藤 由莉奈",
    role: "Sales Manager",

    desc: `早稲田大学在学中。大学1年次よりライバーやTikTokの大手ベンチャーで動画制作のインターンを経験。自社アカウント運用を担当する中で、公式アカウント方式に加えUGC型の運用を自ら提案し実行するなど、早くから企画力を発揮する。また、個人でも複数のSNSアカウントを立ち上げ、初投稿から万再生以上を連発。ショート動画のアルゴリズムに対する深い知見を持つ。CEO井上蓮と出会いビジョンや理念に共感し、SNSの事業を立ち上げると聞きフォロミーに参画。SALES MANAGERとして柔軟な発想力と論理的な思考力を活かし、営業および動画の分析を担当する。`,
    image: "/images/members/ito_yurina_icon2.webp",
    cover: "",
    avatarScale: 1.6, avatarPos: "45% 25%",
  },
];

export default function Member() {
  return (
    <section id="member" className="relative py-28 md:py-36 overflow-hidden rounded-tl-[80px] md:rounded-tl-[140px]" style={{ background: "#272727" }}>
      <div className="mx-auto max-w-[480px] md:max-w-[1100px] px-6">
        {/* Section header */}
        <div
          className="animate-fade-in-up text-center mb-16"
        >
          <h2 className="text-[11vw] md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter uppercase leading-none gradient-text-mesh mb-6">
            MEMBER
          </h2>
          <p className="text-base md:text-lg font-bold text-white/80 leading-relaxed">
            平均年齢20歳以下。Z世代を中心としたメンバーで
            <br />
            トレンドをハックします。
          </p>
        </div>

        {/* Member cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="animate-fade-in-up bg-[#383838] rounded-2xl border border-white/10 overflow-hidden pb-6"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Photo + overlapping avatar */}
              <div className="relative mb-0">
                <div className="relative w-full aspect-[2/1] rounded-t-2xl overflow-hidden">
                  {member.cover ? (
                    <Image
                      src={member.cover}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#2f2f2f] flex items-center justify-center">
                      <span className="text-white/20 text-sm font-bold">Coming Soon</span>
                    </div>
                  )}
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
                    sizes="112px"
                    loading="lazy"
                    style={{ transform: `scale(${member.avatarScale})`, objectPosition: member.avatarPos }}
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
            </div>
          ))}
        </div>

        <p
          className="animate-fade-in-up text-center text-white/50 font-bold text-4xl md:text-5xl mt-16"
        >
          + 2 Members
        </p>
        <p
          className="animate-fade-in-up text-center text-white/50 font-bold text-4xl md:text-5xl mt-4"
          style={{ animationDelay: "0.1s" }}
        >
          +
        </p>
        <p
          className="animate-fade-in-up text-center text-white/50 font-bold text-4xl md:text-5xl mt-4"
          style={{ animationDelay: "0.2s" }}
        >
          Hundreds of Young Creators
        </p>
      </div>
    </section>
  );
}

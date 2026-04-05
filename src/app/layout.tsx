import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "フォロミー | UGCマーケティングの企画・運用代行",
  description:
    "「流行ってる」を、つくる。フォロミーは、UGC（ユーザー生成コンテンツ）を活用したSNSマーケティングの企画・運用代行サービスです。TikTok・Instagram・YouTubeショートに対応。",
  openGraph: {
    title: "フォロミー | UGCマーケティングの企画・運用代行",
    description:
      "「流行ってる」を、つくる。UGCを活用したSNSマーケティングの企画・運用代行サービスです。",
    type: "website",
    locale: "ja_JP",
    siteName: "フォロミー",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

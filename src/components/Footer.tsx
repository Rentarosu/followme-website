import Image from "next/image";

const footerLinks = [
  { href: "#why-ugc", label: "Why UGC" },
  { href: "#service", label: "Service" },
  { href: "#mission", label: "Mission" },
  { href: "#member", label: "Member" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/40 pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="フォロミー" width={44} height={44} className="object-cover" />
              <span className="font-bold text-lg text-white">フォロミー</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>フォロミー（株式会社フォロミー 2026年4月設立予定）</li>
              <li>事業内容：UGCマーケティングの企画・運用代行</li>
              <li>
                <a href="mailto:info@followme.co.jp" className="hover:text-primary transition-colors">
                  info@followme.co.jp
                </a>
              </li>
            </ul>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-primary transition-colors uppercase tracking-wide text-xs font-bold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs">
          &copy; 2026 フォロミー All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

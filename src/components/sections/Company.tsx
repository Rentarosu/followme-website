const companyInfo = [
  { label: "Company", value: "フォロミー（法人登記準備中）" },
  { label: "Founded", value: "2026年4月（予定）" },
  { label: "CEO", value: "井上 蓮" },
  { label: "Location", value: "東京都渋谷区" },
  { label: "Member", value: "6名（業務委託含む）" },
  { label: "Business", value: "Hack UGC / UGCマーケティングの企画・運用代行" },
];

export default function Company() {
  return (
    <section id="company" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #eef8ff 0%, #f3eeff 50%, #e8f4ff 100%)" }}>
      <div className="mx-auto max-w-[480px] md:max-w-[800px] px-6">
        {/* Section header */}
        <div
          className="animate-fade-in-up text-center mb-16"
        >
          <h2 className="text-[11vw] md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter uppercase leading-none gradient-text-mesh mb-6">
            COMPANY
          </h2>
        </div>

        {/* Company info table */}
        <div>
          {companyInfo.map((item, i) => (
            <div
              key={item.label}
              className={`animate-fade-in-up flex flex-col md:flex-row md:items-center py-6 ${i !== companyInfo.length - 1 ? "border-b border-gray-200" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-base md:text-lg font-bold gradient-text-primary md:w-[200px] flex-shrink-0 mb-1 md:mb-0 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-base md:text-lg text-dark">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

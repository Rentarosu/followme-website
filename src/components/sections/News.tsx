"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type NewsItem = {
  date: string;
  title: string;
  body: string;
};

const PER_PAGE = 3;

export default function News() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then(setAllNews);
  }, []);

  const totalPages = Math.max(1, Math.ceil(allNews.length / PER_PAGE));
  const news = allNews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section id="news" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[800px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-3">
            News
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight">
            お知らせ
          </h2>
        </motion.div>

        <div>
          {news.map((item, i) => (
            <motion.div
              key={`${item.date}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-6 ${i !== news.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <span className="text-xs font-bold text-primary tracking-wide">
                {item.date}
              </span>
              <h3 className="text-base md:text-lg font-bold text-dark mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-dark/50 leading-relaxed mt-2">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-full text-sm font-bold transition-all ${
                  n === page
                    ? "bg-primary text-white"
                    : "text-dark/40 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

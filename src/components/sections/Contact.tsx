"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ company: "", name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ company: "", name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[480px] md:max-w-[700px] px-6">
        {/* Section header */}
        <div
          className="animate-fade-in-up text-center mb-12"
        >
          <h2 className="text-[11vw] md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter uppercase leading-none gradient-text-mesh mb-6">
            CONTACT
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-up bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          style={{ animationDelay: "0.15s" }}
        >
          {/* 会社名 */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-dark mb-2">
              会社名
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
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
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
            />
          </div>

          {/* Status messages */}
          {status === "sent" && (
            <p className="text-center text-sm text-green-600 font-bold mb-4">
              送信が完了しました。確認メールをお送りしましたのでご確認ください。
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-500 font-bold mb-4">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 rounded-full bg-dark text-white font-bold text-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>
        </form>
      </div>
    </section>
  );
}

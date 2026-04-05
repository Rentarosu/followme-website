import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { company, name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "必須項目を入力してください" }, { status: 400 });
  }

  try {
    // 自分への通知メール
    await resend.emails.send({
      from: "FollowMe お問い合わせ <info@followme.co.jp>",
      to: "info@followme.co.jp",
      subject: `【お問い合わせ】${name}様（${company || "個人"}）`,
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>会社名:</strong> ${company || "未記入"}</p>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 相手への確認メール
    await resend.emails.send({
      from: "FollowMe <noreply@followme.co.jp>",
      to: email,
      subject: "【FollowMe】お問い合わせを受け付けました",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B1A1F;">お問い合わせありがとうございます</h2>
          <p>${name} 様</p>
          <p>以下の内容でお問い合わせを受け付けました。<br>担当者より2営業日以内にご連絡いたします。</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p><strong>会社名:</strong> ${company || "未記入"}</p>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>お問い合わせ内容:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">
            ※このメールは自動送信です。<br>
            FollowMe（フォロミー）
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}

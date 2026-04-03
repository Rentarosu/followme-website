---
name: Gradient direction
description: グラデーションは常に左上から右下（135deg）方向で統一する
type: feedback
---

グラデーションを入れる際は、左上から右下にかけて入れる。

**Why:** ユーザーの指定。デザインの統一感を保つため。

**How to apply:** CSSの`linear-gradient`は`135deg`を使用。Tailwindの場合は`bg-gradient-to-br`を使用。

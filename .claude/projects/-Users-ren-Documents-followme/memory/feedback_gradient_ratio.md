---
name: Gradient color ratio
description: グラデーションは水色25%→紫100%の比率で統一する
type: feedback
---

グラデーション（水色→紫）は、水色が25%まで続いてから紫に遷移させる。

**Why:** ユーザー確認済み。水色多すぎず少なすぎずのバランス。

**How to apply:** `linear-gradient(135deg, #02a1f2 0%, #29a8f7 25%, #8B5CF6 100%)` をベースにする。

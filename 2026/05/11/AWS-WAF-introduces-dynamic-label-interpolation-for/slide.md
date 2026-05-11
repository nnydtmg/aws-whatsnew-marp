---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAF が動的ラベル補間でカスタムリクエスト/レスポンス処理を強化

AWS WAF introduces dynamic label interpolation for custom request and response handling

**What's New** | 2026-05-07T15:00:00

---

## 概要

- AWS WAFの動的ラベル補間機能により、セキュリティエンジニアは${namespace:}構文を使用してカスタムリクエスト/レスポンスヘッダーおよびレスポンスボディにWAFの分類シグナルを埋め込むことができるようになりました。
- この機能はすべてのAWSリージョンで追加費用なしで利用可能であり、クライアントIPやJA3/JA4フィンガープリントなどの合成ラベルも提供され、適応的なセキュリティ対応と誤検知対応が実現されます。

---

## 前提・背景

### 関連する最近の動向

- **AWS WAF introduces dynamic label interpolation for custom request and response handling - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-waf-dynamic-label-interpolation/)

- **Web request labeling in AWS WAF**
  [詳細](https://docs.aws.amazon.com/waf/latest/developerguide/waf-labels.html)

---

## 変更内容・新機能

- 動的ラベル補間はAWS WAFが利用可能なすべてのAWSリージョンで追加費用なしで利用可能です。

- ヘッダーはネームスペースに新しいラベルが追加されると自動的に適応し、複数のラベルがマッチする場合は値がカンマ区切りリストに解決されます。

---

## ユースケース

- TLSフィンガープリントをアプリケーションに転送して、適応認証の決定に活用することができます。

---

## まとめ

- AWS WAF introduces dynamic label interpolation for custom request and response handling について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-waf-dynamic-label-interpolation/)

### 関連情報

- [AWS WAF introduces dynamic label interpolation for custom request and response handling - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-waf-dynamic-label-interpolation/)
- [Web request labeling in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-labels.html)
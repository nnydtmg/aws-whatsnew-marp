---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAFのAIトラフィック収益化がStripeによる法定通貨払い出しに対応

AWS WAF AI traffic monetization now supports fiat payouts through Stripe

**What's New** | 2026-11-05T08:00:00

---

## 概要

- AWS WAFのAIトラフィック収益化がStripe連携により法定通貨払い出しに対応しました。
- パブリッシャーやコンテンツ所有者、APIプロバイダーは、暗号資産を保有せずに収益をStripe残高で受け取ることができます。
- AIボット・エージェントからのステーブルコイン支払いを現地通貨でStripe残高に決済できます。

---

## 前提・背景

### これまでの課題

背景: 2026年6月にAWS WAFはAIトラフィック収益化を発表。当初の払い出しはCoinbaseのx402 Facilitator経由のステーブルコイン（Base・Solana等）のみで、Stripe連携はComing soonだった。メディア企業の財務チームにとってUSDC受領・保有・消込の政策がなく導入の障壁だったため、本アップデートで法定通貨受領が可能になった。

---

### 関連する最近の動向

- **AWS WAF AI traffic monetization now supports fiat payouts through Stripe - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts)

- **...

---

## 変更内容・新機能

AWS WAF AI traffic monetizationがStripeと連携し、法定通貨（fiat）での払い出しをサポートしました。パブリッシャー、コンテンツ所有者、APIプロバイダーは、AIボットやエージェントからのステーブルコイン支払いを現地通貨でStripe残高へ直接受け取れます。ステーブルコインや暗号資産ウォレットを管理せずにエージェントアクセスを収益化できます。Stripeは既存のステーブルコイン払い出しに加えた新しい払い出し方法として利用可能です。

利用対象: Amazon CloudFrontを利用するAWS WAFのお客様。CloudFrontディストリビューションにAWS WAF Web ACLが関連付けられているすべてのエッジロケーションで追加料金なしで利用可能です。標準のAWS WAF料金およびStripe処理手数料は別途適用されます。

---

## まとめ

- AWS WAF AI traffic monetization now supports fiat payouts through Stripe について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts/)

### 関連情報

- [AWS WAF AI traffic monetization now supports fiat payouts through Stripe - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts)
- [AWS WAF AI Traffic Monetization - Returning HTTP 402](https://hidekazu-konishi.com/entry/aws_waf_ai_traffic_monetization_publisher_side.html)
- [What is AWS WAF AI traffic monetization](https://blankspace.so/blog/what-is-aws-waf-ai-traffic-monetization-publishers)
- [AWS WAF announces AI traffic monetization](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-waf-ai-traffic-monetization)
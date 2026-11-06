# AWS WAFのAIトラフィック収益化がStripeによる法定通貨払い出しに対応

AWS WAF AI traffic monetization now supports fiat payouts through Stripe

**カテゴリ:** What's New
**公開日:** 2026-11-05T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts/)

このページでは、AWS What's Newで発表された「AWS WAF AI traffic monetization now supports fiat payouts through Stripe」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS WAFのAIトラフィック収益化がStripe連携により法定通貨払い出しに対応しました。パブリッシャーやコンテンツ所有者、APIプロバイダーは、暗号資産を保有せずに収益をStripe残高で受け取ることができます。AIボット・エージェントからのステーブルコイン支払いを現地通貨でStripe残高に決済できます。

## このアップデートで何が変わったか

AWS WAF AI traffic monetizationがStripeと連携し、法定通貨（fiat）での払い出しをサポートしました。パブリッシャー、コンテンツ所有者、APIプロバイダーは、AIボットやエージェントからのステーブルコイン支払いを現地通貨でStripe残高へ直接受け取れます。ステーブルコインや暗号資産ウォレットを管理せずにエージェントアクセスを収益化できます。Stripeは既存のステーブルコイン払い出しに加えた新しい払い出し方法として利用可能です。

利用対象: Amazon CloudFrontを利用するAWS WAFのお客様。CloudFrontディストリビューションにAWS WAF Web ACLが関連付けられているすべてのエッジロケーションで追加料金なしで利用可能です。標準のAWS WAF料金およびStripe処理手数料は別途適用されます。

## 対象ユーザー

利用対象: Amazon CloudFrontを利用するAWS WAFのお客様。CloudFrontディストリビューションにAWS WAF Web ACLが関連付けられているすべてのエッジロケーションで追加料金なしで利用可能です。標準のAWS WAF料金およびStripe処理手数料は別途適用されます。

## 詳細

AWS WAF AI traffic monetizationがStripeと連携し、法定通貨（fiat）での払い出しをサポートしました。パブリッシャー、コンテンツ所有者、APIプロバイダーは、AIボットやエージェントからのステーブルコイン支払いを現地通貨でStripe残高へ直接受け取れます。ステーブルコインや暗号資産ウォレットを管理せずにエージェントアクセスを収益化できます。Stripeは既存のステーブルコイン払い出しに加えた新しい払い出し方法として利用可能です。

開始方法: AWS WAFコンソールのStripe ConnectからStripeアカウントを接続します。既存の料金設定とエージェントポリシーはそのまま利用できます。エージェントが保護コンテンツにリクエストすると、AWS WAFは受け入れ可能な支払い認証情報とともにHTTP 402を返します。有効な支払い認証情報とともに再リクエストされるとコンテンツが解除されます。すべての支払いプロバイダーからの収益はAWS WAFコンソールの収益アナリティクスに表示されます。

利用対象: Amazon CloudFrontを利用するAWS WAFのお客様。CloudFrontディストリビューションにAWS WAF Web ACLが関連付けられているすべてのエッジロケーションで追加料金なしで利用可能です。標準のAWS WAF料金およびStripe処理手数料は別途適用されます。

背景: 2026年6月にAWS WAFはAIトラフィック収益化を発表。当初の払い出しはCoinbaseのx402 Facilitator経由のステーブルコイン（Base・Solana等）のみで、Stripe連携はComing soonだった。メディア企業の財務チームにとってUSDC受領・保有・消込の政策がなく導入の障壁だったため、本アップデートで法定通貨受領が可能になった。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-stripe-fiat-payouts/)
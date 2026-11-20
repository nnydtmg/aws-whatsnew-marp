---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront が SaaS Manager に IPベースルーティングと接続ログを追加

Amazon CloudFront adds IP based routing and connection logs to SaaS Manager

**What's New** | 2026-11-19T20:26:00

---

## 概要

- Amazon CloudFrontは、同一ワイルドカードドメイン上でIPアドレスに基づくルーティングと接続ログをSaaS Managerに追加しました。
- Web開発およびSaaSプラットフォームは、同一ワイルドカードドメイン上で、IPアドレスを使って異なる顧客層を適切な設定へルーティングできます。
- たとえば、プレミアム・プロ顧客は専用のAnycast静的IPアドレスリストから、無料ティアの顧客は共有CloudFront IPから、すべて*.example.com下で配信できます。
-...

---

## 前提・背景

### これまでの課題

Amazon CloudFrontがSaaS ManagerにIPベースのルーティングと接続ログを追加しました。同一のワイルドカードドメイン上で、IPアドレスによりプレミアム層や無料層などの顧客を適切な設定へルーティングできます。以前はCloudFrontがドメイン名だけから設定を選択していたため、同一ドメインは常に同じ設定に到達していました。Address-based selectionにより、同じワイルドカードドメインを複数のIPリストへ登録し、各リストを独自のテナントへ送信できます。どのク

---

### 関連する最近の動向

- **Amazon CloudFront in 2026: From CDN to Programmable Edge Platform**
  [詳細](https://builder.aws.com/content/3Ji6...

---

## 変更内容・新機能

Amazon CloudFrontがSaaS ManagerにIPベースのルーティングと接続ログを追加しました。同一のワイルドカードドメイン上で、IPアドレスによりプレミアム層や無料層などの顧客を適切な設定へルーティングできます。以前はCloudFrontがドメイン名だけから設定を選択していたため、同一ドメインは常に同じ設定に到達していました。Address-based selectionにより、同じワイルドカードドメインを複数のIPリストへ登録し、各リストを独自のテナントへ送信できます。どのクライアントがどのIPリストに解決されるかを制御できるため、顧客側の変更なしでサービスタイア間のトラフィック移行が可能です。SNI（Server Name Indication）なしでIPアドレスに接続するIoTデバイス、埋め込みSDK、古いTLSクライアントにも対応できます。Viewer fallbackでこれらの接続を受け入れるディストリビューションを選択すると、CloudFrontが各リクエストのHostヘッダーを使って適切なコンテンツを配信します。接続ログはこれらのテナントへのHTTPS接

---

## まとめ

- Amazon CloudFront adds IP based routing and connection logs to SaaS Manager について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-ip-based-routing-connection-logging)

### 関連情報

- [Amazon CloudFront in 2026: From CDN to Programmable Edge Platform](https://builder.aws.com/content/3Ji635loBqJjrbIOA3MjTFyAR2g/amazon-cloudfront-in-2026-from-cdn-to-programmable-edge-platform)
- [Document history - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/WhatsNew.html)
- [Amazon CloudFront Functions now supports logging to CloudFront access logs](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs)
- [Key Features of Amazon CloudFront](https://aws.amazon.com/cloudfront/features)
- [Amazon CloudFront SaaS Manager Explainer](https://www.youtube.com/watch?v=mXeFBk1OLh0)
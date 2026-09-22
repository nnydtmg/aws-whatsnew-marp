---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Billing Transferが二階層転送向けの自動請求グループ作成をサポート

Billing Transfer now supports automatic billing group creation for two-level transfers

**What's New** | 2026-09-22T20:08:00

---

## 概要

- AWS Billing Transferは二階層転送向けの自動請求グループ作成機能を新たにサポートします。
- 本機能はAWSディストリビューターによる請求管理を効率化します。
- AWS Billing Transferユーザーは、二階層請求転送における手動の請求グループ設定を不要にするAuto-Billing Transfer Billing Group Creationを有効化できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Creating billing groups - AWS Billing Conductor**
  [詳細](https://docs.aws.amazon.com/billingconductor/latest/userguide/create-billing-group.html)

- **Transfer billing management to external accounts - AWS Billing**
  [詳細](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/orgs_transfer_billing.html)

- **Billing Transfer now supports automatic billing group creation f...

---

## 変更内容・新機能

- 新機能は二階層の請求転送における自動請求グループ作成を可能にするAuto-Billing Transfer Billing Group Creationです。
- エンドカスタマーが下流のセラーパートナーからの請求転送を受け入れた際に請求グループが自動作成され、プロフォーマコストデータが直ちに利用可能になります。
- このアップデートは下流のセラーパートナーとそのエンドカスタマーの請求を管理するAWSディストリビューターに適しています。
- 入力転送リレーションごとの一回限りのプリファレンス設定で、パートナーアカウント経由の新規間接転送に対して請求グループの自動作成をリクエストできます。
- 自動作成される請求グループに適用するAWS Billing Conductorの価格プランを指定可能です。
- プリファレンスは2つの新規API操作およびAWS Management ConsoleのBilling Transfer詳細ページから設定可能です。

---

## まとめ

- Billing Transfer now supports automatic billing group creation for two-level transfers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-billing-transfer-supports-automatic-billing-group-creation/)

### 関連情報

- [Creating billing groups - AWS Billing Conductor](https://docs.aws.amazon.com/billingconductor/latest/userguide/create-billing-group.html)
- [Transfer billing management to external accounts - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/orgs_transfer_billing.html)
- [Billing Transfer now supports automatic billing group creation for two-level transfers](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-billing-transfer-supports-automatic-billing-group-creation/)
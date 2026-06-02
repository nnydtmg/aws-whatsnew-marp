# AWS Config が内部サービスリンクルールをサポート

AWS Config now supports internal service linked rules

**カテゴリ:** What's New
**公開日:** 2026-06-02T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-supports-internal-service-linked-rules)

このページでは、AWS What's Newで発表された「AWS Config now supports internal service linked rules」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Configが内部サービスリンクルール機能をサポートするようになり、AWS Security HubなどのAWSサービスがAWS Configマネージドルールを使用してリソース構成を評価できるようになりました。この機能により、顧客は既存のAWS Config運用を継続しながら、AWSサービスがサービス固有の評価を独立して管理でき、追加費用なしで統合されたセキュリティおよびコンプライアンス機能を享受できるようになります。

## このアップデートで何が変わったか

- AWS Configが内部サービスリンクルール機能をサポートするようになりました。
- このルールにより、AWSサービスはAWS Configマネージドルールを使用してAWSリソース構成を評価できるようになりました。
- 内部サービスリンクルールは、既存のサービスリンクレコーダー機能を拡張するものです。
- AWS Security Hub CSPMなどのAWSサービスが、サービス固有の機能に対するルール評価をデプロイおよび管理できるようになりました。
- 評価結果は、ルールをデプロイしたAWSサービスに直接配信されます。
- AWS Configから顧客への課金は発生しません。
- 内部サービスリンクルールは、既存の顧客管理型AWS Configレコーダーおよびルールとは独立して動作します。
- 顧客は引き続きAWS Configをインベントリ、ガバナンス、コンプライアンス、監査用途に使用できます。
- AWS Security Hub CSPMの内部サービスリンクルールは、すべてのコマーシャル、GovCloud、および中国リージョンで利用可能です。

## 詳細

- AWS Configが内部サービスリンクルール機能をサポートするようになりました。
- このルールにより、AWSサービスはAWS Configマネージドルールを使用してAWSリソース構成を評価できるようになりました。
- 内部サービスリンクルールは、既存のサービスリンクレコーダー機能を拡張するものです。
- AWS Security Hub CSPMなどのAWSサービスが、サービス固有の機能に対するルール評価をデプロイおよび管理できるようになりました。
- 評価結果は、ルールをデプロイしたAWSサービスに直接配信されます。
- AWS Configから顧客への課金は発生しません。
- 内部サービスリンクルールは、既存の顧客管理型AWS Configレコーダーおよびルールとは独立して動作します。
- 顧客は引き続きAWS Configをインベントリ、ガバナンス、コンプライアンス、監査用途に使用できます。
- AWS Security Hub CSPMの内部サービスリンクルールは、すべてのコマーシャル、GovCloud、および中国リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-supports-internal-service-linked-rules)
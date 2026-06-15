# AWS Cost Explorer、請求グループのアカウントで過去の請求データ保持が可能に

AWS launches Cost Explorer historical data retention for accounts in billing groups

**カテゴリ:** What's New
**公開日:** 2026-06-15T16:07:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-explorer/)

このページでは、AWS What's Newで発表された「AWS launches Cost Explorer historical data retention for accounts in billing groups」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Cost Explorerが、請求グループにマップされたアカウントの過去の請求データへのアクセスを保持できるようになり、顧客はAWS Billing ConductorおよびBilling Transferを導入する際にレポート継続性を維持できるようになりました。この機能は、複数アカウント環境で請求管理を一元化し、プロフォーマレートでの請求データ表示を必要とする組織に有効です。

## このアップデートで何が変わったか

- この新機能により、請求グループに含まれるアカウントは、元の課金レートでCost Explorerの過去の請求データへのアクセスを保持できるようになりました。

- 既にBilling ConductorおよびBilling Transferにオンボードされたアカウントは、追加のアクション不要で過去データへのアクセスが可能になります。

## 詳細

- AWS Cost Explorerが、請求グループにマップされたアカウントの過去の請求データを保持できるようになりました。

- AWS Billing ConductorおよびBilling Transferを使用して、アカウントを請求グループにマップし、ペイアーアカウントまたはBill-Transferアカウントから提供されるプロフォーマレートで請求データを表示できるようになりました。

- これまでは、請求グループ設定によって、請求グループにマップされたアカウントの過去の請求データ（AWS課金レートで価格設定）へのアクセスが制限されていました。

- この新機能により、請求グループに含まれるアカウントは、元の課金レートでCost Explorerの過去の請求データへのアクセスを保持できるようになりました。

- 既にBilling ConductorおよびBilling Transferにオンボードされたアカウントは、追加のアクション不要で過去データへのアクセスが可能になります。

- この機能により、AWS Billing ConductorおよびBilling Transferを導入する顧客のレポート継続性が実現されます。

- Billing Transferは、GovCloud、China (Beijing)、およびChina (Ningxia)リージョンを除くすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-explorer/)
- [AWS Billing Conductor Documentation](https://docs.aws.amazon.com/billingconductor/)
- [AWS Cost Management](https://aws.amazon.com/aws-cost-management/)
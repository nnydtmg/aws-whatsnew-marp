---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cost Explorer、請求グループのアカウントで過去の請求データ保持が可能に

AWS launches Cost Explorer historical data retention for accounts in billing groups

**What's New** | 2026-06-15T16:07:00

---

## 概要

- AWS Cost Explorerが、請求グループにマップされたアカウントの過去の請求データへのアクセスを保持できるようになり、顧客はAWS Billing ConductorおよびBilling Transferを導入する際にレポート継続性を維持できるようになりました。
- この機能は、複数アカウント環境で請求管理を一元化し、プロフォーマレートでの請求データ表示を必要とする組織に有効です。

---

## 前提・背景

### これまでの課題

- これまでは、請求グループ設定によって、請求グループにマップされたアカウントの過去の請求データ（AWS課金レートで価格設定）へのアクセスが制限されていました。

### 関連する最近の動向

- **Performing ad hoc analysis on pro forma costs in AWS Cost Explorer**
  Billing Conductor pro forma reports analyze Savings Plans utilization, coverage metrics, billing group configuration variance.

- **AWS Billing Conductor launches Passthrough Pricing Plan**
  AWS Billing Conductor now supports the Passthrough Pricing Plan, a new managed pricing plan for Billing Transfer users.

---

## 変更内容・新機能

### 過去データへのアクセス保持

- この新機能により、請求グループに含まれるアカウントは、元の課金レートでCost Explorerの過去の請求データへのアクセスを保持できるようになりました。

### シームレスな移行

- 既にBilling ConductorおよびBilling Transferにオンボードされたアカウントは、追加のアクション不要で過去データへのアクセスが可能になります。

### 複数アカウント環境での統一的な請求管理

- AWS Billing ConductorおよびBilling Transferを使用して、アカウントを請求グループにマップし、ペイアーアカウントまたはBill-Transferアカウントから提供されるプロフォーマレートで請求データを表示できます。

---

## 効果・メリット

- **レポート継続性の維持**: 請求グループ導入後も過去の請求データにアクセス可能
- **データ分析の一貫性**: 元の課金レートのままアクセスでき、レート比較分析が可能
- **運用効率の向上**: 追加のアクション不要で自動的に機能が有効化される
- **複数アカウント管理の簡素化**: 一元化された請求管理を実現

---

## ユースケース

### 大規模な組織での複数アカウント管理

- 複数のAWSアカウントを使用している組織が、AWS Billing Conductorを導入する場合、請求グループにアカウントをマップした後も、過去の請求データにアクセスしてトレンド分析を継続できます。

### 請求の最適化と分析

- プロフォーマレートと元の課金レートの両方のデータを比較することで、請求管理の効果を可視化できます。

### コスト分析の高度化

- AWS Billing Conductor導入前後のコスト動向を一貫して追跡し、最適化効果を定量化できます。

---

## 利用可能なリージョン

- **対応リージョン**: GovCloud、China (Beijing)、およびChina (Ningxia)リージョンを除くすべてのAWSリージョン

---

## まとめ

### 主なポイント

- AWS Cost Explorerで過去の請求データへのアクセスが保持される
- AWS Billing Conductor、Billing Transfer導入時のレポート継続性が保証される
- 複数アカウント環境での統一的な請求管理が実現
- 追加のアクション不要で自動的に機能が有効化される

### 次のステップ

1. AWS Billing Conductorの利用を検討している場合、この新機能を活用して過去データの継続利用を計画
2. 既に導入済みの場合は、追加のアクション不要で新機能が有効化される
3. 複数アカウント環境での請求管理の最適化を進める

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-explorer/)

### 関連情報

- [Performing ad hoc analysis on pro forma costs in AWS Cost Explorer](https://docs.aws.amazon.com/billingconductor/latest/userguide/ad-hoc-cost-explorer-analysis.html)
- [AWS Billing Conductor launches Passthrough Pricing Plan](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-billing-conductor-launches-passthrough)
- [AWS Billing Conductor Documentation](https://docs.aws.amazon.com/billingconductor/)
- [AWS Cost Management](https://aws.amazon.com/aws-cost-management/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
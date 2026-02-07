---
marp: true
theme: default
paginate: true
---

# AWS Config now supports 30 new resource types

**What's New** | 2026-02-06T16:00:00

---

## 概要

- AWS Configが30の新しいリソースタイプをサポートするようになり、Amazon EKS、Amazon Q、AWS IoTなどの主要サービスにおけるリソースの発見、評価、監査、修復がより効果的に実施できるようになりました。
- このアップデートは、AWS環境全体の包括的な管理とコンプライアンス監視を必要とする組織に特に有益です。

---

## 前提・背景

### 関連する最近の動向

- **AWS Config now supports 30 new resource types**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-new-resource-types)

- **AWS Config Supports 21 New Resource Types**
  [詳細](https://www.linkedin.com/posts/ayronlegion_aws-config-now-supports-21-new-resource-types-activity-7414324864276328448-_xSb)

- **AWS Config now supports 49 new resource types**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/11/aws-config-new-resource-types/)

---

## 変更内容・新機能

- すべてのリソースタイプの記録を有効にしている場合、AWS Configは新しく追加されたリソースを自動的に追跡します。

- 新しくサポートされるリソースタイプはConfig rulesおよびConfig aggregatorsで利用可能です。

- EKS Nodegroup、IoT BillingGroup、Glue Crawlerなど、多様なAWSサービスのリソースが監視対象に追加されました。

---

## 効果・メリット

- AWS環境全体の発見、評価、監査、および修復をより効果的に実施できるようになります

- 対応するAWSリソースが利用可能なすべてのAWSリージョンで新しいリソースタイプが監視可能

- 複数のサービス領域にわたる包括的なリソース管理が実現

---

## 新しくサポートされるリソースタイプの例

| リソースタイプ | 説明 |
|---|---|
| AWS::EKS::Nodegroup | Amazon EKS Nodegroup |
| AWS::IoT::BillingGroup | AWS IoT BillingGroup |
| AWS::Glue::Crawler | AWS Glue Crawler |
| AWS::QuickSight::Dashboard | Amazon QuickSight Dashboard |
| AWS::Route53::DNSSEC | Amazon Route 53 DNSSEC |

---

## まとめ

- AWS Config now supports 30 new resource types について紹介しました
- AWS環境全体のリソース監視カバレッジが大幅に拡大
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-new-resource-types)

### 関連情報

- [AWS Config now supports 30 new resource types](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-new-resource-types)
- [AWS Config Supports 21 New Resource Types](https://www.linkedin.com/posts/ayronlegion_aws-config-now-supports-21-new-resource-types-activity-7414324864276328448-_xSb)
- [AWS Config now supports 49 new resource types](https://aws.amazon.com/about-aws/whats-new/2025/11/aws-config-new-resource-types/)
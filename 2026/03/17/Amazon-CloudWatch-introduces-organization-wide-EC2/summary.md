# Amazon CloudWatch introduces organization-wide EC2 detailed monitoring enablement

**カテゴリ:** What's New
**公開日:** 2026-03-16T23:10:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-org-enablement-ec2-metrics/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-org-enablement-ec2-metrics/)

---

## 要約

Amazon CloudWatchは、AWS Organization全体でEC2詳細モニタリングを自動的に有効化できるenablement rules機能を導入いたしました。この機能により、DevOpsチームは組織、アカウント、またはリソースタグに基づいてスコープを設定し、既存および新規のEC2インスタンスに対して1分間隔でのメトリクス収集を一貫して確保できるようになります。

## 詳細

### 主な機能

- **自動有効化機能**: Amazon CloudWatchが、AWS Organization全体でAmazon EC2の詳細モニタリングを自動的に有効化する機能を導入
- **Enablement Rules**: CloudWatch Ingestionでenablement rulesを作成することにより、ルールスコープに一致する既存および新規に起動されたEC2インスタンスの詳細モニタリングが自動的に有効化
- **メトリクス収集間隔**: 詳細モニタリングは1分間隔でメトリクスを収集し、EC2インスタンス全体で一貫したメトリクス収集を確保
- **柔軟なスコープ設定**: enablement rulesは、組織全体、特定のアカウント、またはリソースタグに基づいた特定のリソースにスコープを設定が可能

### ユースケース例

中央のDevOpsチームは、例えば「env:production」などの特定のタグを持つEC2インスタンスの詳細モニタリングを自動的に有効化し、Auto Scalingポリシーがインスタンス使用率の変化に迅速に対応できるようにすることが可能です。

### 利用可能性

- **対応リージョン**: すべてのAWSコマーシャルリージョン
- **料金**: 詳細モニタリングメトリクスはCloudWatchの料金体系に従って課金

### メリット

- **運用効率化**: 手動での詳細モニタリング設定が不要
- **一貫性確保**: 組織全体で統一されたモニタリング設定
- **スケーラビリティ**: 大規模環境での管理負荷を軽減
- **迅速な対応**: 1分間隔のメトリクスで障害検知が高速化

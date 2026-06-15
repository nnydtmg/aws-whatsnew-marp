---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatchが複数アカウント対応のメトリクス一元管理に対応

Amazon CloudWatch now supports cross-account metrics centralization

**What's New** | 2026-06-15T10:00:00

---

## 概要

- Amazon CloudWatch Metrics Centralizationは、複数のAWSアカウントとリージョンからのメトリクスを単一の中央アカウントに自動集約する機能であり、エンタープライズの複雑なマルチアカウント環境における統一的な運用可視化とガバナンス管理を実現します。
- 本機能はCloudWatchおよびOpenTelemetryメトリクスに対応し、既存のCloudWatchツールとの完全な互換性を備えております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch launches cross-account observability**
  [詳細](https://aws-news.com/article/01964aea-8afa-8ceb-6ef9-460cca92eb02)

- **Monitor across accounts and Regions - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Cross-Account-Methods.html)

- **Cross-account cross-Region log centralization**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_Centralization.html)

---

## 変更内容・新機能

- Amazon CloudWatch Metrics Centralizationが一般提供開始

- AWS Organizationsを通じて集約ルールを定義可能

- CloudWatchメトリクスとOpenTelemetryメトリクスの両方に対応

- Metrics Insights、ダッシュボード、アラーム、Metric Math、異常検知と完全に互換性あり

- 17のAWSリージョンで利用可能

---

## 効果・メリット

- 複数のAWSアカウント・リージョンからのメトリクスを単一の中央アカウントに自動集約

- 中央チームがデータに対する完全な所有権を得られ、クエリ・アラーム・コンプライアンス・ガバナンスを一元管理

- ソースアカウントとリージョンからのメトリクスが自動的に中央集約アカウントに複製

- 複雑なマルチアカウント、マルチリージョン環境の統一的な運用可視化を実現

---

## ユースケース

- **エンタープライズ向け運用監視**: 複数の開発部門・本番環境を一元管理

- **コンプライアンス要件対応**: 統一的なガバナンス管理が必要な組織

- **マルチリージョン運用**: 複数リージョンにわたるインフラの一元的な把握

- **混合クラウド監視**: CloudWatch + OpenTelemetryメトリクスを統合管理

---

## まとめ

- Amazon CloudWatch Metrics Centralizationは、複雑なマルチアカウント・マルチリージョン環境を運用するエンタープライズに最適

- AWS Organizations統合により、集約ルールの定義と運用が簡素化

- 既存のCloudWatchツール・OpenTelemetryとの完全な互換性で導入障壁が低い

- インフラストラクチャ全体の統一的な可視化とガバナンス管理を実現

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cross-account-metrics-centralization)

### 関連情報

- [Amazon CloudWatch launches cross-account observability](https://aws-news.com/article/01964aea-8afa-8ceb-6ef9-460cca92eb02)
- [Monitor across accounts and Regions - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Cross-Account-Methods.html)
- [Cross-account cross-Region log centralization](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_Centralization.html)
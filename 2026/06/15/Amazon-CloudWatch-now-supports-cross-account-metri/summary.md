# Amazon CloudWatchが複数アカウント対応のメトリクス一元管理に対応

Amazon CloudWatch now supports cross-account metrics centralization

**カテゴリ:** What's New
**公開日:** 2026-06-15T10:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cross-account-metrics-centralization)

このページでは、AWS What's Newで発表された「Amazon CloudWatch now supports cross-account metrics centralization」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Metrics Centralizationは、複数のAWSアカウントとリージョンからのメトリクスを単一の中央アカウントに自動集約する機能であり、エンタープライズの複雑なマルチアカウント環境における統一的な運用可視化とガバナンス管理を実現します。本機能はCloudWatchおよびOpenTelemetryメトリクスに対応し、既存のCloudWatchツールとの完全な互換性を備えております。

## このアップデートで何が変わったか

- 17のAWSリージョンで利用可能です。

- このアップデートは、複雑なマルチアカウント、マルチリージョン環境を運用するエンタープライズチームに適しています。

## 詳細

- Amazon CloudWatch Metrics Centralizationが一般提供開始となり、複数のAWSアカウントとリージョンにわたるCloudWatchメトリクスを単一の宛先アカウントに集約できるようになりました。

- AWS Organizationsを通じて集約ルールを定義することで、ソースアカウントとリージョンからのメトリクスが自動的に中央集約アカウントに複製されます。

- 中央チームはデータに対する完全な所有権を得られ、クエリ、アラーム、コンプライアンス、ガバナンスを一元管理できます。

- CloudWatchメトリクスとOpenTelemetryメトリクスの両方に対応しており、Metrics Insights、ダッシュボード、アラーム、Metric Math、異常検知、Metric Streams、PromQLと完全に互換性があります。

- 17のAWSリージョンで利用可能です。

- このアップデートは、複雑なマルチアカウント、マルチリージョン環境を運用するエンタープライズチームに適しています。

- インフラストラクチャ全体の運用状況を統一的に把握する必要がある組織に最適です。

- 複数リージョンにわたるメトリクス管理を一元化したい企業に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cross-account-metrics-centralization)
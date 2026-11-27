---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatchが基本OpenTelemetryエンリッチメントを追加料金なしで提供開始

Amazon CloudWatch announces basic OpenTelemetry enrichment at no additional cost

**What's New** | 2026-11-27T21:03:00

---

## 概要

- Amazon CloudWatchは、追加料金なしで基本OpenTelemetryエンリッチメントを提供します。
- 本機能により、AWSサービスメトリクスをPromQLでクエリできるようになります。

---

## 前提・背景

### 関連する最近の動向

- **CloudWatch Now Speaks PromQL. Do You Still Need Prometheus? | AWS re:Post**
  [詳細](https://repost.aws/articles/AR3qH9zynbTNCE9yY2IKTmdQ/cloudwatch-now-speaks-promql-do-you-still-need-prometheus)

- **This Month in AWS Observability: June 2026 | AWS Cloud Operations Blog**
  [詳細](https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-june-2026)

- **Introducing OpenTelem...

---

## 変更内容・新機能

-新機能は、追加料金なしでAWSサービスメトリクス向けに提供される基本OpenTelemetryエンリッチメントです。
- 本機能はAWSサービスが公開するメトリクスをPromQLでクエリ可能なOpenTelemetryデータポイントに変換し、ARNやリージョンなどのリソース属性を付与します。
- CloudWatch Omniの設定時にデフォルトで有効になり、コンソールやCLI、SDKからも有効化できます。
- 本アップデートは、PromQLでAWSサービスメトリクスをすぐにクエリしたいお客様に適しています。

---

## まとめ

- Amazon CloudWatch announces basic OpenTelemetry enrichment at no additional cost について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-opentelemetry-enrichment/)

### 関連情報

- [CloudWatch Now Speaks PromQL. Do You Still Need Prometheus? | AWS re:Post](https://repost.aws/articles/AR3qH9zynbTNCE9yY2IKTmdQ/cloudwatch-now-speaks-promql-do-you-still-need-prometheus)
- [This Month in AWS Observability: June 2026 | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-june-2026)
- [Introducing OpenTelemetry and PromQL support in Amazon CloudWatch | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/introducing-opentelemetry-promql-support-in-amazon-cloudwatch)
- [PromQL querying - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-PromQL-Querying.html)
- [Amazon CloudWatch introduces native OpenTelemetry metrics with PromQL querying and per-GB pricing](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-metrics)
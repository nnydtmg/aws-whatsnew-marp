---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Batch がジョブメトリクスを Amazon CloudWatch に公開

AWS Batch now publishes job metrics to Amazon CloudWatch

**What's New** | 2026-10-06T17:30:00

---

## 概要

- AWS BatchがジョブメトリクスをAmazon CloudWatchに公開するようになり、バッチワークロードの可観測性が向上します。
- 本機能はジョブの状態や期間を監視したい利用者に有用です。

---

## 前提・背景

### 関連する最近の動向

- **Using CloudWatch Metrics with AWS Batch - AWS Batch**
  [詳細](https://docs.aws.amazon.com/batch/latest/userguide/using_cloudwatch_metrics.html)

- **AWS Batch CloudWatch Container Insights - AWS Batch**
  [詳細](https://docs.aws.amazon.com/batch/latest/userguide/cloudwatch-container-insights.html)

- **Using CloudWatch Logs with AWS Batch - AWS Batch**
  [詳細](https://docs.aws.amazo...

---

## 変更内容・新機能

- 新機能は、AWS BatchがジョブメトリクスをAmazon CloudWatchに自動公開し、バッチワークロードのネイティブな可観測性を提供することです。
- ジョブの状態遷移と期間のメトリクスがAWS/Batch名前空間に公開され、コンソールやCLIから確認できます。
- このアップデートは、ジョブキューの健全性、失敗率、ジョブ期間を把握したいAWS Batch利用者に適しております。

---

## 効果・メリット

- AWS BatchがジョブメトリクスをAmazon CloudWatchに公開するようになり、バッチワークロードの可観測性が向上します。
- 本機能はジョブの状態や期間を監視したい利用者に有用です。

---

## まとめ

- AWS Batch now publishes job metrics to Amazon CloudWatch について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-batch-job-cloudwatch-metrics/)

### 関連情報

- [Using CloudWatch Metrics with AWS Batch - AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/using_cloudwatch_metrics.html)
- [AWS Batch CloudWatch Container Insights - AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/cloudwatch-container-insights.html)
- [Using CloudWatch Logs with AWS Batch - AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/using_cloudwatch_logs.html)
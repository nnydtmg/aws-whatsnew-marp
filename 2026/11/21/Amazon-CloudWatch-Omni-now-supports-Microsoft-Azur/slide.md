---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch OmniがMicrosoft Azureのログ・メトリクス・トレースに対応

Amazon CloudWatch Omni now supports Microsoft Azure platform logs, metrics and traces

**What's New** | 2026-11-21T01:10:00

---

## 概要

- Amazon CloudWatch Omniは、Microsoft Azureのプラットフォームログ、メトリクス、トレースの収集を新たにサポートします。
- AWSとAzureの両方でワークロードを運用するチームは、別々の監視ツールやカスタムパイプラインなしに、AzureテレメトリをAWSテレメトリと同じ場所で確認できます。
- 中央運用、DevOps、SREチームに適しています。

---

## 前提・背景

### 関連する最近の動向

- **This Month in AWS Observability: August – September 2026**
  [詳細](https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-august-september-2026)

- **How CloudWatch Omni Narrows the Gap with Third-Party Observability Platforms**
  [詳細](https://dev.to/aws-builders/how-cloudwatch-omni-narrows-the-gap-with-third-party-observability-platforms-4777)

- **CloudWatch Omni - Ama...

---

## 変更内容・新機能

新機能:
- Azureリソースログの収集
- Azure Monitorのプラットフォームメトリクスの収集
- 仮想ネットワーク (VNet) フローログの収集
- Application Insightsのトレースの収集

利用可能領域:
- Azureテレメトリ収集はすべてのAzure Public Regionsで利用可能
- CloudWatch Omniが利用可能なすべてのリージョンへ取り込み可能

---

## ユースケース

To get started, connect a Microsoft Entra ID tenant to your AWS account and Region. You can choose the telemetry types, subscriptions, Azure regions, resource types, and tags to collect. Azure telemetry lands in Amazon CloudWatch, and Omni spaces can monitor applications and infrastructure across cl

---

## まとめ

- Amazon CloudWatch Omni now supports Microsoft Azure platform logs, metrics and traces について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-microsoft-azure)

### 関連情報

- [This Month in AWS Observability: August – September 2026](https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-august-september-2026)
- [How CloudWatch Omni Narrows the Gap with Third-Party Observability Platforms](https://dev.to/aws-builders/how-cloudwatch-omni-narrows-the-gap-with-third-party-observability-platforms-4777)
- [CloudWatch Omni - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-omni.html)
- [Now on Amazon CloudWatch Omni: collaborative AI-powered observability for your applications](https://aws.amazon.com/blogs/aws/introducing-amazon-cloudwatch-omni-collaborative-ai-powered-observability-for-your-applications)
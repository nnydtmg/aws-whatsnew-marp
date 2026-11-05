---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon MWAAがコスト配分タグをサポート開始

Amazon MWAA now supports cost allocation tags

**What's New** | 2026-11-04T23:00:00

---

## 概要

- Amazon MWAAがコスト配分タグをサポートするようになりました。
- プラットフォームチームは環境ごとのコストを追跡および配分できるようになります。
- 環境に適用したタグはワーカー、スケジューラー、ウェブサーバーに伝播され、AWS Cost ExplorerとAWS Cost and Usage Reportsでタグごとに支出を追跡できます。

---

## 前提・背景

### 関連する最近の動向

- **The Ultimate Guide to AWS Cloud Cost Allocation in 2026 | nOps**
  [詳細](https://www.nops.io/blog/aws-cloud-cost-allocation)

- **AWS Cost Allocation Tags: Activation, Limits & Best Practices**
  [詳細](https://www.finout.io/blog/aws-cost-allocation)

- **Announcing Cost Allocation Tags support for Account Tags - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/12/cost-...

---

## 変更内容・新機能

Amazon Managed Workflows for Apache Airflow (Amazon MWAA) がコスト配分タグをサポートしました。環境に適用したタグがワーカー、スケジューラー、ウェブサーバーなどの実行コンピュートに伝播されます。AWS Cost ExplorerとAWS Cost and Usage ReportsでタグごとにAmazon MWAAの支出を追跡できます。プラットフォームチームは、各環境を所有するチーム、プロジェクト、コストセンターへAirflowコストをショーバックまたはチャージバックできます。新規環境の作成時または既存環境の更新時にコスト配分タグを使用できます。Amazon MWAAコンソール、AWS CLI、またはAmazon MWAA APIで環境にタグを付与し、AWS Billing and Cost Managementコンソールでタグキーをコスト配分タグとして有効化します。本機能はAmazon MWAAが利用可能なすべてのAWSリージョンで利用できます。

---

## まとめ

- Amazon MWAA now supports cost allocation tags について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-cost-allocation-tags/)

### 関連情報

- [The Ultimate Guide to AWS Cloud Cost Allocation in 2026 | nOps](https://www.nops.io/blog/aws-cloud-cost-allocation)
- [AWS Cost Allocation Tags: Activation, Limits & Best Practices](https://www.finout.io/blog/aws-cost-allocation)
- [Announcing Cost Allocation Tags support for Account Tags - AWS](https://aws.amazon.com/about-aws/whats-new/2025/12/cost-allocation-tags)
- [Using user-defined cost allocation tags - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html)
- [Amazon MWAA now supports cost allocation tags - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-cost-allocation-tags/)
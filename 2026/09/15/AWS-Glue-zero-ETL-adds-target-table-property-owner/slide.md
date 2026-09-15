---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Glue zero-ETLがターゲットテーブルの所有権追跡と競合検出を追加

AWS Glue zero-ETL adds target table property ownership and conflict detection

**What's New** | 2026-09-14T08:00:00

---

## 概要

- AWS GlueゼロETL統合に、テーブルプロパティの所有権追跡と競合検出機能が追加されました。
- 複数の統合を運用するデータチームは、ターゲットの衝突を防ぎ、データを意図した場所へ配置できます。

---

## 前提・背景

### 関連する最近の動向

- **Zero-ETL Integrations on AWS - The Source and Target Matrix Across Amazon Redshift, AWS Glue, and Amazon OpenSearch Service**
  [詳細](https://hidekazu-konishi.com/entry/zero_etl_integrations_on_aws.html)

- **Configuring a target for a zero-ETL integration - AWS Glue**
  [詳細](https://docs.aws.amazon.com/glue/latest/dg/zero-etl-target.html)

- **Amazon Aurora MySQL zero-ETL integr...

---

## 変更内容・新機能

AWS Glue zero-ETL integrations now detect table property conflicts and track integration ownership. When you configure a source table and target catalog, Glue associates the resulting table properties with the owning integration, so two integrations can no longer be pointed at the same target table without your knowledge. This works across Amazon S3 Tables and SageMaker Lakehouse catalogs. Data teams running multiple zero-ETL integrations gain predictable control over where each source table lan

---

## まとめ

- AWS Glue zero-ETL adds target table property ownership and conflict detection について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/glue-zero-etl-ownership-conflicts/)

### 関連情報

- [Zero-ETL Integrations on AWS - The Source and Target Matrix Across Amazon Redshift, AWS Glue, and Amazon OpenSearch Service](https://hidekazu-konishi.com/entry/zero_etl_integrations_on_aws.html)
- [Configuring a target for a zero-ETL integration - AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/zero-etl-target.html)
- [Amazon Aurora MySQL zero-ETL integration with Amazon SageMaker Lakehouse](https://aws.amazon.com/blogs/database/amazon-aurora-mysql-zero-etl-integration-with-amazon-sagemaker-lakehouse)
- [Improve DynamoDB analytics with AWS Glue zero-ETL schema and partition controls](https://aws.amazon.com/blogs/big-data/improve-dynamodb-analytics-with-aws-glue-zero-etl-schema-and-partition-controls)
# AWS Glue zero-ETLがターゲットテーブルの所有権追跡と競合検出を追加

AWS Glue zero-ETL adds target table property ownership and conflict detection

**カテゴリ:** What's New
**公開日:** 2026-09-14T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/glue-zero-etl-ownership-conflicts/)

このページでは、AWS What's Newで発表された「AWS Glue zero-ETL adds target table property ownership and conflict detection」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS GlueゼロETL統合に、テーブルプロパティの所有権追跡と競合検出機能が追加されました。複数の統合を運用するデータチームは、ターゲットの衝突を防ぎ、データを意図した場所へ配置できます。

## このアップデートで何が変わったか

AWS Glue zero-ETL integrations now detect table property conflicts and track integration ownership. When you configure a source table and target catalog, Glue associates the resulting table properties with the owning integration, so two integrations can no longer be pointed at the same target table without your knowledge. This works across Amazon S3 Tables and SageMaker Lakehouse catalogs. Data teams running multiple zero-ETL integrations gain predictable control over where each source table lan

## 詳細

AWS Glue zero-ETL integrations now detect table property conflicts and track integration ownership. When you configure a source table and target catalog, Glue associates the resulting table properties with the owning integration, so two integrations can no longer be pointed at the same target table without your knowledge. This works across Amazon S3 Tables and SageMaker Lakehouse catalogs. Data teams running multiple zero-ETL integrations gain predictable control over where each source table lands. If you attempt to create or modify an integration whose table properties are owned by another integration, Glue identifies the owning integration and guides you to choose a different target or update the existing one, so your pipelines stay isolated and your data lands exactly where you intend. This feature is available in all AWS Commercial and AWS GovCloud (US) Regions where AWS Glue zero-ETL integrations are supported. 新機能は、AWS GlueゼロETL統合におけるテーブルプロパティの競合検出と統合所有権の追跡です。ソーステーブルとターゲットカタログを設定すると、テーブルプロパティが所有統合に関連付けられます。2つの統合が同じターゲットテーブルを意図せず指すことを防ぎます。本機能はAmazon S3 TablesおよびSageMaker Lakehouseカタログでご利用いただけます。本アップデートは、複数のゼロETL統合を運用するデータチームに適しております。パイプラインを分離し、データを意図した場所へ配置できるようになります。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/glue-zero-etl-ownership-conflicts/)
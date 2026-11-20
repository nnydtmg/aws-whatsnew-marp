# AWS Glue Data Catalogがカタログとデータベースのデータ品質監視を発表

AWS Glue Data Catalog introduces data quality monitoring for catalogs and databases

**カテゴリ:** What's New
**公開日:** 2026-11-20T19:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/glue-catalog-data-quality-monitoring/)

このページでは、AWS What's Newで発表された「AWS Glue Data Catalog introduces data quality monitoring for catalogs and databases」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Glue Data Catalogに、単一の設定でカタログおよびデータベースのデータ品質を監視する新機能が導入されました。テーブルごとの設定なしに品質問題を検出し、下流への不良データ到達防止に役立ちます。

## このアップデートで何が変わったか

AWS Glue Data Catalogに、単一の設定でカタログおよびデータベースのデータ品質を監視する新機能が導入されました。テーブルごとの設定なしに品質問題を検出し、下流への不良データ到達防止に役立ちます。

## 対象ユーザー

AWS Glue Data Catalog introduces data quality monitoring for catalogs and databases, powered by AWS Glue Data Quality, which profiles and evaluates your tables at catalog scale from a single configuration. You define data quality checks once for a catalog, a database, or a single table, and AWS Glue

## 詳細

AWS Glue Data Catalog introduces data quality monitoring for catalogs and databases, powered by AWS Glue Data Quality, which profiles and evaluates your tables at catalog scale from a single configuration. You define data quality checks once for a catalog, a database, or a single table, and AWS Glue Data Quality evaluates every table in scope, including tables added later, on the cadence you choose. Quality issues surface as data changes, without per-table setup or manual runs, which helps keep bad data from reaching downstream consumers.

You can use built-in profiling options that AWS Glue provides for common baseline statistics or provide your own Data Quality Definition Language (DQDL) ruleset with analyzers, rules, or both to hold every table in a database to the same quality standards. You have the flexibility to run evaluations once when you create the configuration or set up triggers, so evaluations run on a schedule or whenever table metadata changes, including every Apache Iceberg commit. After three runs on a table, AWS Glue Data Quality flags anomalous statistics that drift outside expected bounds, surfacing changes that no rule covers. Results are accessible through the existing AWS Glue Data Quality APIs, or you can opt-in to write them to Apache Iceberg tables in the AWS Glue Data Catalog or to Amazon S3.

Data quality monitoring for catalogs and databases in AWS Glue Data Catalog is available in all AWS Commercial, AWS GovCloud (US), and AWS China regions.

To get started, create a data quality configuration by using the AWS CLI, API, or SDKs, which support built-in profiling and custom DQDL rulesets at the catalog, database, or table level. In Amazon SageMaker Unified Studio, you can turn on profiling for a catalog or database from the catalog page.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/glue-catalog-data-quality-monitoring/)
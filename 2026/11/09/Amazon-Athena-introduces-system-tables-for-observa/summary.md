# Amazon Athenaがオブザーバビリティ・監柄・利用分析向けシステムテーブルを発表

Amazon Athena introduces system tables for observability, auditing, and usage analytics

**カテゴリ:** What's New
**公開日:** 2026-11-09T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)

このページでは、AWS What's Newで発表された「Amazon Athena introduces system tables for observability, auditing, and usage analytics」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Athenaにシステムテーブルが追加され、利用データを読み取り専用のIcebergテーブルとして直接照会できるようになりました。本機能は、運用負担なくコスト分析や監柄を行いたいプラットフォームチームに適しております。

## このアップデートで何が変わったか

Amazon Athenaはオブザーバビリティ、監柄、利用分析向けのシステムテーブルを導入しました。システムテーブルを有効化すると、利用データがクエリ完了後数分以内に、サービス管理の読み取り専用IcebergテーブルとしてAmazon S3 Tablesへ保存されます。保留期間は設定可能です。AWSがスキーマ定義、パーティショニング、コンパクション、スナップショット保守を管理し、運用負担をなくします。これまではGetQueryExecution API、CloudWatchメトリクス、CloudTrailログで利用データを取得していましたが、本機能ではカスタムパイプラインなしでAthenaから直接検索・フィルタリング・集計・結合が可能です。プラットフォームチームはquery_executionsテーブルを簡単なSQLで照会し、ワークグループ・ユーザー・テーブル別のスキャンデータ量を示すコスト配分ダッシュボードを構築できます。AWS Agent Toolkitはシステムテーブルを照会し、利用パターンと最適化提案を表示するスキルを提供します。Apache Iceberg形式で保存されるため

## 対象ユーザー

Amazon Athenaはオブザーバビリティ、監柄、利用分析向けのシステムテーブルを導入しました。システムテーブルを有効化すると、利用データがクエリ完了後数分以内に、サービス管理の読み取り専用IcebergテーブルとしてAmazon S3 Tablesへ保存されます。保留期間は設定可能です。AWSがスキーマ定義、パーティショニング、コンパクション、スナップショット保守を管理し、運用負担をなくします。これまではGetQueryExecution API、CloudWatchメトリクス、CloudTrailログで利用データを取得していましたが、本機能ではカスタムパイプラインなしでAthenaから

## 詳細

Amazon Athenaはオブザーバビリティ、監柄、利用分析向けのシステムテーブルを導入しました。システムテーブルを有効化すると、利用データがクエリ完了後数分以内に、サービス管理の読み取り専用IcebergテーブルとしてAmazon S3 Tablesへ保存されます。保留期間は設定可能です。AWSがスキーマ定義、パーティショニング、コンパクション、スナップショット保守を管理し、運用負担をなくします。これまではGetQueryExecution API、CloudWatchメトリクス、CloudTrailログで利用データを取得していましたが、本機能ではカスタムパイプラインなしでAthenaから直接検索・フィルタリング・集計・結合が可能です。プラットフォームチームはquery_executionsテーブルを簡単なSQLで照会し、ワークグループ・ユーザー・テーブル別のスキャンデータ量を示すコスト配分ダッシュボードを構築できます。AWS Agent Toolkitはシステムテーブルを照会し、利用パターンと最適化提案を表示するスキルを提供します。Apache Iceberg形式で保存されるため、DuckDB、Amazon Redshift、Amazon EMRなどのIceberg対応エンジンからも照会できます。AthenaとAmazon S3 Tablesが利用できるすべてのAWSリージョンで利用可能です。AthenaコンソールまたはAPIから有効化できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)
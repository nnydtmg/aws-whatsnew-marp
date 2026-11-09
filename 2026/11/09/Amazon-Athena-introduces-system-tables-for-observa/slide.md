---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Athenaがオブザーバビリティ・監柄・利用分析向けシステムテーブルを発表

Amazon Athena introduces system tables for observability, auditing, and usage analytics

**What's New** | 2026-11-09T16:00:00

---

## 概要

- Amazon Athenaにシステムテーブルが追加され、利用データを読み取り専用のIcebergテーブルとして直接照会できるようになりました。
- 本機能は、運用負担なくコスト分析や監柄を行いたいプラットフォームチームに適しております。

---

## 前提・背景

### これまでの課題

Amazon Athenaはオブザーバビリティ、監柄、利用分析向けのシステムテーブルを導入しました。システムテーブルを有効化すると、利用データがクエリ完了後数分以内に、サービス管理の読み取り専用IcebergテーブルとしてAmazon S3 Tablesへ保存されます。保留期間は設定可能です。AWSがスキーマ定義、パーティショニング、コンパクション、スナップショット保守を管理し、運用負担をなくします。これまではGetQueryExecution API、CloudWatchメトリクス、Cloud

---

### 関連する最近の動向

- **Amazon Athena introduces system tables for observability, auditing, and usage analytics - AWS**
  [詳細](https://...

---

## 変更内容・新機能

Amazon Athenaはオブザーバビリティ、監柄、利用分析向けのシステムテーブルを導入しました。システムテーブルを有効化すると、利用データがクエリ完了後数分以内に、サービス管理の読み取り専用IcebergテーブルとしてAmazon S3 Tablesへ保存されます。保留期間は設定可能です。AWSがスキーマ定義、パーティショニング、コンパクション、スナップショット保守を管理し、運用負担をなくします。これまではGetQueryExecution API、CloudWatchメトリクス、CloudTrailログで利用データを取得していましたが、本機能ではカスタムパイプラインなしでAthenaから直接検索・フィルタリング・集計・結合が可能です。プラットフォームチームはquery_executionsテーブルを簡単なSQLで照会し、ワークグループ・ユーザー・テーブル別のスキャンデータ量を示すコスト配分ダッシュボードを構築できます。AWS Agent Toolkitはシステムテーブルを照会し、利用パターンと最適化提案を表示するスキルを提供します。Apache Iceberg形式で保存されるため

---

## まとめ

- Amazon Athena introduces system tables for observability, auditing, and usage analytics について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)

### 関連情報

- [Amazon Athena introduces system tables for observability, auditing, and usage analytics - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)
- [Auditing, inspecting, and visualizing Amazon Athena usage and cost | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/auditing-inspecting-and-visualizing-amazon-athena-usage-and-cost)
- [Amazon Athena Audit Trail](https://www.datasunrise.com/knowledge-center/amazon-athena-audit-trail)
- [How to monitor Athena resource usage per user identity | AWS re:Post](https://repost.aws/questions/QUh838Jia0S0OGs7p40aKCPA/how-to-monitor-athena-resource-usage-per-user-identity)
- [Amazon Athena system tables documentation](https://docs.aws.amazon.com/athena/latest/ug/athena-system-tables.html)
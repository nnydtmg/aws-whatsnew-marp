---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Query Studioが保存クエリをサポート

Amazon CloudWatch Query Studio now supports saved queries

**What's New** | 2026-11-21T03:00:00

---

## 概要

- Amazon CloudWatch Query StudioでPromQLおよびSQLメトリクスクエリの保存と再利用が可能になり、頻繁に同一クエリを実行する運用担当者の作業が効率化されます。
- 事故対応時に確認するレイテンシクエリなど、よく使うクエリを書き直す必要がなくなります。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Query Studio now supports saved queries - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-query-studio-saved-queries)

- **Running PromQL queries in Query Studio - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-PromQL-QueryStudio.html)

- **Amazon CloudWatch Logs Insights no...

---

## 変更内容・新機能

- 新機能は、Amazon CloudWatch Query StudioにおけるPromQLおよびSQLメトリクスクエリの保存と再利用です。
- クエリ名に「/」を使用してフォルダ整理が可能です（例: team/errors）。
- QueriesパネルのSavedタブで検索、ソート、プレビューができます。
- 保存クエリはスタジオ内容の置換・追加・編集・削除が可能です。
- 保存クエリはアカウントおよびリージョン単位で保管され、各リージョンで最大1,000件まで保存可能です。
- IAM権限で作成・参照・削除のアクセス制御が可能です。
- PutMetricDataQueryDefinition、GetMetricDataQueryDefinition、ListMetricDataQueryDefinitions、DeleteMetricDataQueryDefinition APIでプログラマティックに管理可能です。
- 対応リージョン: 米国東部（バージニア北部・オハイオ）、米国西部（カリフォルニア北部・オレゴン）、カナダ（中部）、南米（サンパウロ）、欧州（アイルランド・ロンド

---

## まとめ

- Amazon CloudWatch Query Studio now supports saved queries について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-query-studio-saved-queries)

### 関連情報

- [Amazon CloudWatch Query Studio now supports saved queries - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-query-studio-saved-queries)
- [Running PromQL queries in Query Studio - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-PromQL-QueryStudio.html)
- [Amazon CloudWatch Logs Insights now supports saved queries with parameters - AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-logs-insights-query-params)
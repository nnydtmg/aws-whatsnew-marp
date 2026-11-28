---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch Serviceの最適化エンジンがAmazon S3 Tablesへのデータ公開に対応

Amazon OpenSearch Service optimised engine now publishes data to Amazon S3 Tables

**What's New** | 2026-11-25T17:00:00

---

## 概要

- Amazon OpenSearch Serviceの最適化エンジンは、オブザーバビリティデータをAmazon S3 Tablesに公開できるようになりました。
- 本機能は、OpenSearchへデータを直接送信し、他の分析ツールで再利用したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Publishing indices to Amazon S3 Tables**
  [詳細](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/publishing-indices-s3-tables.html)

- **Optimized for log analytics**
  [詳細](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/optimized-log-analytics.html)

- **Amazon S3 Tables now support all Apache Iceberg V3 data types**
  [詳細](https://aws....

---

## 変更内容・新機能

公開ポリシー（Publish policy）により、選択したインデックスがAWSアカウント内のApache Icebergテーブルとして利用可能になります。エンジニアやAIエージェントは、Amazon EMR Serverless、DuckDBなどIceberg互換ツールで同一のオブザーバビリティデータを、OpenSearchにクエリ負荷をかけずに参照できます。履歴調査、クロスデータセット分析、監査、長期トレンド分析に再利用でき、低コストで保持できます。

本機能はOpenSearch 3.9のオブザーバビリティ向け新エンジンで追加料金なしで利用できます。対応リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (Ireland), Eur

---

## ユースケース

OptimizedエンジンはデータをApache Parquet形式で保存しているため、公開時にドキュメントの再エンコードは不要でファイルをコピーするだけです。テーブルはIceberg v3形式で、DuckDB、Amazon EMR Serverless上のApache SparkなどでIAM権限のみで参照可能です。ISMポリシーで古い世代をテーブルに公開し、コミット成功後にドメインから削除するコールドティアとして活用できます。

---

## まとめ

- Amazon OpenSearch Service optimised engine now publishes data to Amazon S3 Tables について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-publish-s3-tables)

### 関連情報

- [Publishing indices to Amazon S3 Tables](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/publishing-indices-s3-tables.html)
- [Optimized for log analytics](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/optimized-log-analytics.html)
- [Amazon S3 Tables now support all Apache Iceberg V3 data types](https://aws.amazon.com/blogs/aws/amazon-s3-tables-now-support-all-apache-iceberg-v3-data-types)
- [Amazon S3 Tables now provide a simple, cost-effective path for data lake modernization](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-managed-migration-hive-to-iceberg)
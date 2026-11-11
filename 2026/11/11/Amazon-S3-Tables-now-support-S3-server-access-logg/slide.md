---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 Tables がサーバーアクセスログをサポート

Amazon S3 Tables now support S3 server access logging

**What's New** | 2026-11-10T08:00:00

---

## 概要

- Amazon S3 Tablesがサーバーアクセスログに対応し、テーブルバケットへのリクエストを詳細に記録できるようになりました。
- 本機能はセキュリティ監査、アクセス分析、コスト帰属を必要とするお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon S3 Tables now support S3 server access logging - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-server-access-logging)

- **Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables)

- **Logging requests with s...

---

## 変更内容・新機能

Amazon S3 Tablesがサーバーアクセスログをサポートし、テーブルバケットへのリクエストの詳細な記録を提供するようになりました。テーブル操作、名前空間管理、データアクセスを追跡でき、セキュリティ監査、アクセス分析、コスト帰属を支援します。ログ配信は追加料金なしで、ログファイルのストレージ料金のみが発生します。テーブルバケットで有効化すると、そのバケット内のすべてのテーブルと名前空間へのリクエストログが、同一アカウント・同一リージョンの汎用バケットへ配信されます。各レコードにはリクエスター、操作、テーブル名、名前空間、レスポンスステータス、リクエスト時刻が含まれ、汎用バケットのS3サーバーアクセスログと同じ空白区切り形式です。Amazon AthenaやDuckDBなどの既存ログ分析ワークフローを再利用できます。S3 Tablesが利用できるすべてのAWSリージョンで利用可能で、AWS Management Console、AWS CLI、AWS SDKs、AWS CloudFormationから有効化できます。

---

## まとめ

- Amazon S3 Tables now support S3 server access logging について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-server-access-logging/)

### 関連情報

- [Amazon S3 Tables now support S3 server access logging - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-server-access-logging)
- [Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables)
- [Logging requests with server access logging - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html)
- [Amazon S3 Tables overview](https://aws.amazon.com/s3/features/tables/)
- [S3 Tables server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-server-logs)
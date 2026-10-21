---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 サーバーアクセスログの CloudWatch Logs 配信が5つの追加リージョンで利用可能に

Amazon S3 server access log delivery to Amazon CloudWatch Logs now available in five additional AWS Regions

**What's New** | 2026-10-21T13:00:00

---

## 概要

- Amazon S3のサーバーアクセスログをCloudWatch Logsに配信する新機能が追加リージョンで利用可能になり、リアルタイムの監視と分析が可能になりました。
- この更新はアクセス活動を詳細に把握したいユーザーに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables)

- **Delivering server access logs to CloudWatch Logs - Amazon Simple Storage Service**
  [詳細](https://docs.aws.amazon.com/AmazonS3/latest/userguide/sal-cw-enabling.html)

- **Using Amazon S3 S...

---

## 変更内容・新機能

- Amazon S3サーバーアクセスログのAmazon CloudWatch Logsへの配信が、5つの追加のAWSリージョンで利用可能になりました。
- 対象となるのは、AWS GovCloud (US) リージョン、AWS欧州主権クラウド、およびAWS中国リージョンです。
- ログを到着時にクエリしたり、アラームを設定したり、AWS KMSキーで暗号化したりできます。
- 既存のS3汎用バケットへの配信を補完し、監視と分析の柔軟性を高めます。
- この更新は、S3へのアクセスを監視および分析したいユーザーに適しています。
- エラー率にアラームを設定し、トラフィックパターンを監視し、アクセスインシデントを調査したい方に有益です。

---

## まとめ

- Amazon S3 server access log delivery to Amazon CloudWatch Logs now available in five additional AWS Regions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-s3-server-access-logs-cloudwatch-logs-regions/)

### 関連情報

- [Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables)
- [Delivering server access logs to CloudWatch Logs - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/sal-cw-enabling.html)
- [Using Amazon S3 Server Access Logs with Amazon CloudWatch Logs | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/using-amazon-s3-server-access-logs-with-amazon-cloudwatch-logs)
- [Logging requests with server access logging - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html)
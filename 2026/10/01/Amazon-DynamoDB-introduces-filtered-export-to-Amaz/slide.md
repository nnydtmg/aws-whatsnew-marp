---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon DynamoDB が Amazon S3 へのフィルタ付きエクスポート機能を発表

Amazon DynamoDB introduces filtered export to Amazon S3

**What's New** | 2026-10-01T17:00:00

---

## 概要

- Amazon DynamoDBはAmazon S3へのフィルタリングされたエクスポート機能を導入しました。
- この機能は分析やデータ復旧を行うお客様に適しています。
- キー条件式・フィルター式・投影式を使用し、エクスポートするアイテムと属性を精度に指定できます。
- フルエクスポートと増分エクスポートの両方で利用可能で、AWS GovCloud (US) を除くすべてのAWSリージョンで利用できます。

---

## 前提・背景

### これまでの課題

Amazon DynamoDB export to Amazon S3 にフィルタ付きエクスポート機能が追加されました。これまではテーブル全体または時間窓の増分データをまるごとエクスポートする必要がありましたが、新機能では使用用途に関連するデータのみを含むデータセットを生成できます。

---

### 関連する最近の動向

- **DynamoDB data export to Amazon S3: how it works**
  [詳細](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html)

- **Filter, transform, and load your DynamoDB table exports using ...

---

## 変更内容・新機能

Amazon DynamoDB export to Amazon S3 にフィルタ付きエクスポート機能が追加されました。これまではテーブル全体または時間窓の増分データをまるごとエクスポートする必要がありましたが、新機能では使用用途に関連するデータのみを含むデータセットを生成できます。

利用可能リージョン: AWS GovCloud (US) を除くすべてのAWSリージョン

---

## ユースケース

ユースケース:
- 分析、データ共有、オフライン用途のためのテーブルデータエクスポート
- 粒度の細かいデータ復旧
- アカウント間でのデータの一部移動
- コンプライアンスルールを満たしながらの分析

---

## まとめ

- Amazon DynamoDB introduces filtered export to Amazon S3 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)

### 関連情報

- [DynamoDB data export to Amazon S3: how it works](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html)
- [Filter, transform, and load your DynamoDB table exports using AWS Glue](https://aws.amazon.com/blogs/database/filter-transform-and-load-your-dynamodb-table-exports-using-aws-glue)
- [New – Export Amazon DynamoDB Table Data to Your Data Lake in Amazon S3](https://aws.amazon.com/blogs/aws/new-export-amazon-dynamodb-table-data-to-data-lake-amazon-s3)
- [Introducing incremental export from Amazon DynamoDB to Amazon S3](https://aws.amazon.com/blogs/database/introducing-incremental-export-from-amazon-dynamodb-to-amazon-s3)
- [Amazon DynamoDB introduces filtered export to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)
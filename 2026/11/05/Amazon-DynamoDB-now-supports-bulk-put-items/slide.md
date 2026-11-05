---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon DynamoDBが既存テーブルへのバルクプットアイテム機能を一般提供開始

Amazon DynamoDB now supports bulk put items

**What's New** | 2026-11-05T18:00:00

---

## 概要

- Amazon DynamoDBがAmazon S3から既存テーブルへデータを書き込むバルクプットアイテム機能の一般提供を開始しました。
- 本機能は開発者およびデータエンジニアがカスタムパイプラインなしで効率的にデータを投入するのに適しています。
- S3の入力ファイル位置を指定するだけで、既存ワークロードに影響せず、コスト効率よくデータを書き込めます。

---

## 前提・背景

### これまでの課題

Amazon DynamoDBは、バルクプットアイテム機能の一般提供を開始しました。本機能はAmazon S3から既存のDynamoDBテーブルへデータを書き込むフルマネージド機能です。入力ファイルのS3ロケーションを指定するだけで、DynamoDBが処理を実施します。書き込みは専用のシステムキャパシティで実行されるため、既存ワークロードの読み書き性能に影響せず、テーブルの読み書きキャパシティも消費しません。各アイテムは独自の条件式（attribute_not_existsによる挿入のみ、バージ

---

### 関連する最近の動向

- **Amazon DynamoDB now supports bulk put items**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-...

---

## 変更内容・新機能

Amazon DynamoDBは、バルクプットアイテム機能の一般提供を開始しました。本機能はAmazon S3から既存のDynamoDBテーブルへデータを書き込むフルマネージド機能です。入力ファイルのS3ロケーションを指定するだけで、DynamoDBが処理を実施します。書き込みは専用のシステムキャパシティで実行されるため、既存ワークロードの読み書き性能に影響せず、テーブルの読み書きキャパシティも消費しません。各アイテムは独自の条件式（attribute_not_existsによる挿入のみ、バージョン属性によるバージョンガード付き書き込み）をサポートします。スタンダードティアとアクセラレーテッドティアが提供されており、スタンダードはコスト効率な背景処理向け、アクセラレーテッドは締め切りのある移行や回復シナリオ向けです。入力形式は行区切りDynamoDB JSONまたはAmazon Ionで、gzip/zstd圧縮に対応します。2022年のImport from S3は新規テーブル向けだったのに対し、本機能は既存テーブルへの書き込みが可能です。日次リフレッシュ、大規模カタログ拡充、バックフ

---

## まとめ

- Amazon DynamoDB now supports bulk put items について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)

### 関連情報

- [Amazon DynamoDB now supports bulk put items](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-dynamodb-now-supports-bulk-put-items/)
- [Introducing bulk put items for Amazon DynamoDB: Load data from Amazon S3 into existing tables at scale](https://aws.amazon.com/blogs/database/introducing-bulk-put-items-for-amazon-dynamodb-load-data-from-amazon-s3-into-existing-tables-at-scale/)
- [Working with bulk put items - Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BulkPutItems.HowItWorks.html)
- [Amazon DynamoDB now supports bulk imports from Amazon S3 to new DynamoDB tables](https://www.amazonaws.cn/en/new/2022/amazon-dynamodb-bulk-imports-amazon-s3-dynamodb-tables)
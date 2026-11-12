---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon MWAA ServerlessがDuckDBオペレーターをサポート

Amazon MWAA Serverless supports DuckDB operators

**What's New** | 2026-11-10T18:00:00

---

## 概要

- Amazon MWAA ServerlessがDuckDBオペレーターに対応し、S3データのインメモリ分析をワークフロー内で簡単に実行できるようになりました。
- 本機能はMWAA ServerlessおよびSageMaker Unified Studioをご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon MWAA now supports DuckDB operators - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators)

- **Amazon MWAA now supports DuckDB operators | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-11-10-amazon-mwaa-now-supports-duckdb-operators)

- **Amazon MWAA Serverless now supports custom and provider package operat...

---

## 変更内容・新機能

-新機能は、Amazon MWAA ServerlessにおけるDuckDBオペレーターのサポートです。
-ワークフロー内でS3データの高性能インメモリ分析と変換を、認証情報の手動設定なしで実行できます。
-SageMaker Unified Studioのビジュアルワークフローでも本オペレーターをご利用いただけます。
-MWAA Serverlessではワークフロー定義にDuckDBタスクを追加するだけで開始可能。事前作成されたデフォルト接続がワークフローの実行ロール認証情報を自動でS3アクセスに使用します。
-SageMaker Unified StudioではタスクパネルからDuckDBオペレーターをビジュアルワークフローキャンバスに追加可能です。
-Amazon MWAA Serverlessが利用可能なすべてのリージョンで利用可能です。
-本アップデートは、MWAA ServerlessやSageMaker Unified Studioでデータ分析を行うお客様に適しております。

---

## まとめ

- Amazon MWAA Serverless supports DuckDB operators について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-serverless-duckdb-operators/)

### 関連情報

- [Amazon MWAA now supports DuckDB operators - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators)
- [Amazon MWAA now supports DuckDB operators | The AWS News Feed](https://aws-news.com/article/2026-11-10-amazon-mwaa-now-supports-duckdb-operators)
- [Amazon MWAA Serverless now supports custom and provider package operators - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/mwaa-serverless-custom-operators)
- [Using DuckDB with Amazon MWAA - Amazon Managed Workflows for Apache Airflow](https://docs.aws.amazon.com/mwaa/latest/userguide/samples-duckdb.html)
- [Amazon MWAA Serverless supports DuckDB operators - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-serverless-duckdb-operators/)
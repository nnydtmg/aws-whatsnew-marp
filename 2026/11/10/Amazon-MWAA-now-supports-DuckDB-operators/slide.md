---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon MWAAがDuckDBオペレーターのネイティブサポートを開始

Amazon MWAA now supports DuckDB operators

**What's New** | 2026-11-09T18:00:00

---

## 概要

- Amazon MWAAはAirflow 3.3.1環境においてDuckDBオペレーターのネイティブサポートを開始いたしました。
- 本更新はデータ品質チェックや変換を実施されたいMWAAご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon MWAA now supports DuckDB operators - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators)

- **Amazon MWAA supports Apache Airflow version 3.3.1 - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-mwaa-apache-airflow-3-3-1)

- **Apache Airflow versions on Amazon MWAA**
  [詳細](https://docs.aws.amazon.co...

---

## 変更内容・新機能

Amazon MWAAがDuckDBオペレーターを新たにサポートいたしました。DuckDBは組み込み型の分析データベースであり、Amazon S3を含む対応データソースに対するデータ品質チェック、要約、変換を可能にいたします。Apache Airflow 3.3.1を実行するAmazon MWAAプロビジョンド環境でネイティブサポートがご利用いただけます。DuckDBは最新のMWAA Airflow 3.3.1アップデートに事前インストールおよびAWS接続用に事前設定されております。環境をAirflow 3.3.1に更新し実行ロールのアクセスを追加すれば、追加設定なしでDuckDBExecuteQueryOperatorをご利用いただけます。本機能はAmazon MWAAが利用可能なすべてのAWSリージョンでご利用いただけます。本更新はAmazon MWAAをご利用のお客様およびデータ品質チェックや変換を行いたいお客様に適しております。

---

## まとめ

- Amazon MWAA now supports DuckDB operators について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators/)

### 関連情報

- [Amazon MWAA now supports DuckDB operators - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators)
- [Amazon MWAA supports Apache Airflow version 3.3.1 - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-mwaa-apache-airflow-3-3-1)
- [Apache Airflow versions on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html)
- [Using DuckDB with Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/samples-duckdb.html)
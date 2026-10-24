---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch ServiceがS3上のログ・ドキュメント向けインテリジェント取り込みを発表

Amazon OpenSearch Service introduces intelligent ingestion for logs and documents in Amazon S3

**What's New** | 2026-10-22T20:54:00

---

## 概要

- Amazon OpenSearch Serviceは、S3上のログとドキュメントを自動で検索可能にするインテリジェント取り込みをOpenSearch Serverless（NextGen）向けに提供開始いたしました。
- インフラ管理不要で、構造化・非構造化データや画像を含む文書の取り込みに適した機能でございます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon OpenSearch Service introduces intelligent ingestion for logs and documents in Amazon S3 - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-intelligent-ingestion-logs-documents-s3)

- **Overview of Amazon OpenSearch intelligent ingestion - Amazon OpenSearch Service**
  [詳細](https://docs.aws.amazon.com/opensearch-service/latest/developerguid...

---

## 変更内容・新機能

-新機能は、Amazon S3上のログおよびドキュメントをAmazon OpenSearch Serverless（NextGen）コレクションで検索可能にするインテリジェント取り込みでございます。
- フルマネージドであり、数回のクリックまたは単一のAPI呼び出しで設定でき、取り込みインフラの管理は不要でございます。
- 構造化データ（JSON、NDJSON、JSON配列）とPDF、Word、プレーンテキスト、Markdownなどの非構造化ファイルに対応し、解析、画像説明、チャンク化、埋め込み生成、インデックス作成を自動で行います。
- 本アップデートは、取り込み基盤を管理せずにS3のデータを検索したいお客様に適しております。
- 移行やバックフィル、継続同期、セマンティック検索および画像を含む文書の検索を求めるお客様に有用でございます。

---

## まとめ

- Amazon OpenSearch Service introduces intelligent ingestion for logs and documents in Amazon S3 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-intelligent-ingestion-logs-documents-s3)

### 関連情報

- [Amazon OpenSearch Service introduces intelligent ingestion for logs and documents in Amazon S3 - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-intelligent-ingestion-logs-documents-s3)
- [Overview of Amazon OpenSearch intelligent ingestion - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-intelligent-ingestion.html)
- [Build RAG-ready indexes from Amazon S3 with Amazon OpenSearch intelligent ingestion | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/build-rag-ready-indexes-from-amazon-s3-with-amazon-opensearch-intelligent-ingestion)
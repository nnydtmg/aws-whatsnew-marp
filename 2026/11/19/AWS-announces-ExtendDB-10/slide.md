---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWSがExtendDB 1.0を発表 — DynamoDB互換アダプターが本番利用可能に

AWS announces ExtendDB 1.0

**What's New** | 2026-11-18T20:00:00

---

## 概要

- AWSは本番利用可能なオープンソースのDynamoDB互換アダプターExtendDB 1.0を発表いたしました。
- 本アップデートは、コードを変更せずにオンプレミスやクラウド、エッジでDynamoDBワークロードを実行したい開発者およびインフラストラクチャチームに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Introducing ExtendDB: an open source DynamoDB-compatible adapter with pluggable storage backends**
  [詳細](https://extenddb.org)

- **ExtendDB · Database of Databases**
  [詳細](https://dbdb.io/db/extenddb/revisions/4)

- **AWS announces ExtendDB, an open source DynamoDB-compatible adapter - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-extenddb-dynamodb)

---

## 変更内容・新機能

AWSは本番利用向けのオープンソースAmazon DynamoDB互換アダプターであるExtendDB 1.0を発表いたしました。新機能は、選択したデータベースバックエンド上でDynamoDB APIと完全に互換して動作することです。PostgreSQL、SQLite、Cassandra、MongoDBの4つのストレージバックエンドをサポートいたします。ローカル開発およびCI向けに、extenddb-devコンテナイメージと@extenddb/dev npmパッケージが提供されます。本アップデートは、アプリケーションコードを書き換えずにオンプレミスデータセンター、プライベートまたはパブリッククラウド、エッジでDynamoDBワークロードを実行したい開発者およびインフラストラクチャチームに適しております。ExtendDBはAWSがメンテナンスし、Apache 2.0ライセンスでGitHub上で公開開発されています。プロジェクトページはhttps://extenddb.org、GitHubリポジトリはhttps://github.com/ExtendDB/extenddbです。

---

## まとめ

- AWS announces ExtendDB 1.0 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/)

### 関連情報

- [Introducing ExtendDB: an open source DynamoDB-compatible adapter with pluggable storage backends](https://extenddb.org)
- [ExtendDB · Database of Databases](https://dbdb.io/db/extenddb/revisions/4)
- [AWS announces ExtendDB, an open source DynamoDB-compatible adapter - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-extenddb-dynamodb)
- [Introducing ExtendDB: An open source DynamoDB-compatible adapter with pluggable storage backends | AWS Database Blog](https://aws.amazon.com/blogs/database/introducing-extenddb-an-open-source-dynamodb-compatible-adapter-with-pluggable-storage-backends)
- [AWS announces ExtendDB 1.0 - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポート

Aurora PostgreSQL with express configuration now supports Amazon VPC

**What's New** | 2026-11-19T17:00:00

---

## 概要

- Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートし、単一の操作でデータの移行なしにVPCへ移行できるようになりました。
- 本機能は、AIプロトタイプを本番環境へ移行したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Aurora PostgreSQL Express: 30-Second Production DB**
  [詳細](https://darryl-ruggles.cloud/aurora-postgresql-express-configuration-from-zero-to-production-database-in-30-seconds)

- **Create with express configuration - Amazon Aurora**
  [詳細](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.AuroraPostgreSQL.ExpressConfig.html)

- **Aurora Post...

---

## 変更内容・新機能

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL databases created with express configuration can now move into an Amazon Virtual Private Cloud (VPC) with a single API call or a modify action in the Amazon RDS console. This helps you take AI-built 

---

## ユースケース

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL

---

## まとめ

- Aurora PostgreSQL with express configuration now supports Amazon VPC について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-express-vpc/)

### 関連情報

- [Aurora PostgreSQL Express: 30-Second Production DB](https://darryl-ruggles.cloud/aurora-postgresql-express-configuration-from-zero-to-production-database-in-30-seconds)
- [Create with express configuration - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.AuroraPostgreSQL.ExpressConfig.html)
- [Aurora PostgreSQL with express configuration now supported in CloudFormation](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation)
- [Announcing Amazon Aurora PostgreSQL serverless database creation in seconds](https://aws.amazon.com/blogs/aws/announcing-amazon-aurora-postgresql-serverless-database-creation-in-seconds)
- [rds: support Aurora Postgres Express](https://github.com/aws/aws-cdk/issues/37537)
# Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポート

Aurora PostgreSQL with express configuration now supports Amazon VPC

**カテゴリ:** What's New
**公開日:** 2026-11-19T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-express-vpc/)

このページでは、AWS What's Newで発表された「Aurora PostgreSQL with express configuration now supports Amazon VPC」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートし、単一の操作でデータの移行なしにVPCへ移行できるようになりました。本機能は、AIプロトタイプを本番環境へ移行したいお客様に適しております。

## このアップデートで何が変わったか

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL databases created with express configuration can now move into an Amazon Virtual Private Cloud (VPC) with a single API call or a modify action in the Amazon RDS console. This helps you take AI-built 

## 対象ユーザー

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL

## 活用シーン

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL

## 詳細

新機能は、Aurora PostgreSQLのエクスプレス設定がAmazon VPCをサポートすることです。単一のAPI呼び出しまたはAmazon RDSコンソールの変更操作により、データベースをVPCへ移行できます。データの移行は不要であり、クラスターエンドポイントは同一のままです。エクスプレス設定を用いて、VPC内に新しいデータベースクラスターを作成することもできます。本アップデートは、AIで構築したプロトタイプを本番環境へ移行したいお客様に適しております。迅速なプロトタイピングやセキュリティおよびコンプライアンス要件を満たしたいお客様にも適しております。Aurora PostgreSQL databases created with express configuration can now move into an Amazon Virtual Private Cloud (VPC) with a single API call or a modify action in the Amazon RDS console. This helps you take AI-built prototypes and other applications to production without migrating data, while meeting your security and compliance requirements. You can also create a new database cluster inside a VPC using express configuration. With express configuration, Aurora PostgreSQL lets you create and query a serverless database in seconds. Connectivity runs through an internet access gateway, which makes this a good fit for rapid prototyping and AI agent-driven development. When your application is ready for production, a single ModifyDBCluster API call moves the cluster into a VPC and turns off the internet access gateway. That gives you security groups, private subnets, and features such as Aurora Global Database, Amazon RDS Blue/Green Deployments, and Amazon RDS Proxy. The move requires no data migration, keeps your cluster endpoint the same, and interrupts connectivity only briefly. You can also reverse it with the same API call. This feature is available in all AWS Regions where Aurora PostgreSQL with express configuration is available.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-express-vpc/)
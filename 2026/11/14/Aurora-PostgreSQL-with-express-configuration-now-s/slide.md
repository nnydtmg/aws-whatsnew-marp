---
marp: true
theme: aws-whatsnew
paginate: true
---

# Aurora PostgreSQLのエクスプレス設定がCloudFormationで利用可能に

Aurora PostgreSQL with express configuration now supported in CloudFormation

**What's New** | 2026-11-13T16:00:00

---

## 概要

- Aurora PostgreSQLのエクスプレス設定がCloudFormationで利用可能になり、クラスターとプライマリインスタンスを1つのプロパティで作成できるようになりました。
- 本機能は、インフラストラクチャのコード化を簡素化したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Aurora PostgreSQL with express configuration now supported in CloudFormation - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)

- **Create with express configuration - Amazon Aurora**
  [詳細](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.AuroraPostgreSQL.ExpressConfig.html)

- **rds: suppo...

---

## 変更内容・新機能

Aurora PostgreSQLのエクスプレス設定が、AWS CloudFormationでサポートされるようになりました。AWS::RDS::DBClusterリソースに、新しいwithExpressConfigurationプロパティが追加されました。本プロパティにより、クラスターとプライマリデータベースインスタンスを1つの宣言から作成できます。エクスプレス設定では、Auroraサーバーレスデータベースを数秒で作成およびクエリできます。本アップデートは、CloudFormationでインフラストラクチャを自動デプロイしたいお客様に適しております。テンプレートを簡素化し、エクスプレス設定のAuroraクラスターを管理しやすくしたい方にとって有益です。

---

## まとめ

- Aurora PostgreSQL with express configuration now supported in CloudFormation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)

### 関連情報

- [Aurora PostgreSQL with express configuration now supported in CloudFormation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)
- [Create with express configuration - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.AuroraPostgreSQL.ExpressConfig.html)
- [rds: support Aurora Postgres Express · Issue #37537 · aws/aws-cdk](https://github.com/aws/aws-cdk/issues/37537)
- [Aurora PostgreSQL Serverless (Express configuration) with CDK and Drizzle](https://johanneskonings.dev/blog/2026-03-28-aurora-express-drizzle)
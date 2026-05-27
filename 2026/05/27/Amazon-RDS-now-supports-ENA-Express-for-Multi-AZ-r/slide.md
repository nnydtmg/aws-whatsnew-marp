---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon RDS が Multi-AZ レプリケーションで ENA Express をサポート

Amazon RDS now supports ENA Express for Multi-AZ replication

**What's New** | 2026-05-26T19:00:00

---

## 概要

- Amazon RDS Multi-AZ インスタンスが ENA Express によるレプリケーション機能をサポートするようになり、SRD プロトコルを活用して最大 25 Gbps のシングルフロー帯域幅と低レイテンシを実現します。
- このアップデートは、複数のデータベースエンジンで追加料金なく利用でき、書き込み集約的なワークロードのパフォーマンス向上に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon RDS now supports ENA Express for Multi-AZ replication - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ)

- **Amazon RDS Multi AZ Deployments | Cloud Relational Database | Amazon Web Services**
  [詳細](https://aws.amazon.com/rds/features/multi-az)

- **ENA Express for Amazon EC2 instances now supports traffic between Availabil...

---

## 変更内容・新機能

- MariaDB、MySQL、PostgreSQL、Db2、および Oracle 向けの Amazon RDS で、追加料金なしで利用できます。

---

## 効果・メリット

- - 高度な輻輳制御とマルチパス機能により、Multi-AZ デプロイメントのレイテンシ変動性が削減されます。
- - 書き込み集約的なデータベース ワークロードの書き込みスループットが向上し、書き込みレイテンシが低下します。

---

## まとめ

- Amazon RDS now supports ENA Express for Multi-AZ replication について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ/)

### 関連情報

- [Amazon RDS now supports ENA Express for Multi-AZ replication - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ)
- [Amazon RDS Multi AZ Deployments | Cloud Relational Database | Amazon Web Services](https://aws.amazon.com/rds/features/multi-az)
- [ENA Express for Amazon EC2 instances now supports traffic between Availability Zones - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/ena-express-availability-zones)
- [Cross-Availability Zone ENA Express support for Multi-AZ deployments - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.CrossAZENAExpress.html)
- [Multi-AZ DB cluster deployments for Amazon RDS - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html)
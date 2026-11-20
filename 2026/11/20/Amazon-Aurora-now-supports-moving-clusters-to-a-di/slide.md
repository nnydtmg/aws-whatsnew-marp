---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Auroraがクラスターの別VPCへの移動をサポート

Amazon Aurora now supports moving clusters to a different VPC

**What's New** | 2026-11-19T17:00:00

---

## 概要

- Amazon Auroraは、データ移行を行わずに既存クラスターを別のVPCへ移動できる機能を提供します。
- ネットワーク構成の変更やコンプライアンス対応が必要なお客様に有用です。
- Aurora PostgreSQLおよびAurora MySQLクラスターを、単一のAPIコールまたはAmazon RDSコンソールの変更操作で別VPCへ移動できます。
- データはそのまま残り、クラスターエンドポイントは変更されず、接続の中断は短時間のみです。

---

## 前提・背景

### これまでの課題

Aurora PostgreSQLおよびAurora MySQLクラスターをデータ移行なしで別のVPCへ移動できます。単一のModifyDBCluster APIコールまたはAmazon RDSコンソールの変更操作でクラスターを移動できます。より広いIPアドレス空間や重複しないCIDR範囲への移動、ネットワーク統合、セキュリティおよびコンプライアンス要件の変更に対応したいお客様に適しています。以前は、ターゲットVPCに新しいクラスターを作成し、データを移行し、アプリケーションの接続文字列を更新す

---

### 関連する最近の動向

- **Amazon Aurora now supports moving clusters to a different VPC - AWS**
  [詳細](https://aws.amazon.com/about-aws/w...

---

## 変更内容・新機能

Aurora PostgreSQLおよびAurora MySQLクラスターをデータ移行なしで別のVPCへ移動できます。単一のModifyDBCluster APIコールまたはAmazon RDSコンソールの変更操作でクラスターを移動できます。より広いIPアドレス空間や重複しないCIDR範囲への移動、ネットワーク統合、セキュリティおよびコンプライアンス要件の変更に対応したいお客様に適しています。以前は、ターゲットVPCに新しいクラスターを作成し、データを移行し、アプリケーションの接続文字列を更新する必要がありました。現在は単一のModifyDBCluster APIコールで既存クラスターを新しいVPCに移動できます。データはそのまま残り、クラスターエンドポイントは同じまま、移動中の接続中断は短時間のみです。開始前に、Aurora Global Database、Amazon RDS Proxy、Amazon RDS Blue/Green Deploymentsなど、現在のVPCに紐づく機能をオフにする必要があります。移動後に新しいVPCで再設定できます。この機能は、Aurora Post

---

## まとめ

- Amazon Aurora now supports moving clusters to a different VPC について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-move-clusters-to-different-vpc/)

### 関連情報

- [Amazon Aurora now supports moving clusters to a different VPC - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-move-clusters-to-different-vpc/)
- [Change the VPC of an Amazon Aurora cluster | AWS re:Post](https://repost.aws/knowledge-center/rds-vpc-aurora-cluster)
- [Cross-VPC cloning with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.Cross-VPC.html)
- [Move Amazon Aurora instances from public subnets to private subnets with minimal downtime](https://aws.amazon.com/blogs/database/move-amazon-aurora-instances-from-public-subnets-to-private-subnets-with-minimal-downtime)
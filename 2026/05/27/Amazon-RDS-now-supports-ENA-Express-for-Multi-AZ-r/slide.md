---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon RDS で Multi-AZ レプリケーション用 ENA Express をサポート開始

Amazon RDS now supports ENA Express for Multi-AZ replication

**What's New** | 2026-05-26T19:00:00

---

## 概要

- Amazon RDS Multi-AZ インスタンスが ENA Express によるレプリケーション機能をサポートするようになり、SRD プロトコルを活用して最大 25 Gbps のシングルフロー帯域幅と低レイテンシを実現します。
- このアップデートは、複数のデータベースエンジンで追加料金なく利用でき、書き込み集約的なワークロードのパフォーマンス向上に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Multi-AZ DB cluster deployments for Amazon RDS**
  [詳細](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html)

- **ENA Express for Amazon EC2 instances now supports traffic between Availability Zones**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/ena-express-availability-zones)

- **Cross-Availability Zone ENA Express support for Multi-AZ deployments**
  [詳細](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.CrossAZENAExpress.html)

---

## 変更内容・新機能

### ENA Express サポートの追加

- Amazon RDS Multi-AZ インスタンスが、可用性ゾーン間のレプリケーション トラフィックに対して ENA Express をサポート
- AWS の Scalable Reliable Datagram（SRD）プロトコルを使用
- クロスAZ レプリケーション トラフィックに対して最大 **25 Gbps** のシングルフロー帯域幅を提供

### 対応データベースエンジン

- **MariaDB**
- **MySQL**
- **PostgreSQL**
- **Db2**
- **Oracle**

追加料金なしで利用可能

---

## 効果・メリット

### パフォーマンス向上

- 高度な輻輳制御とマルチパス機能により、Multi-AZ デプロイメントのレイテンシ変動性が削減
- 書き込み集約的なデータベース ワークロードの書き込みスループットが向上
- 書き込みレイテンシが低下

### 対応リージョン

- Africa（ケープタウン）
- Asia Pacific（香港、ハイデラバード、ジャカルタ、マレーシア、メルボルン、ムンバイ、ニュージーランド、大阪、ソウル、シンガポール、シドニー、台北、タイ、東京）
- カナダ、ヨーロッパ、イスラエル、メキシコ
- US East、US West
- AWS GovCloud（US）

---

## 有効化方法

### 既存インスタンスでの有効化

既存の Amazon RDS インスタンスで有効にするには、以下のいずれかのアクションを実行：

1. **開始停止** - インスタンスを再起動
2. **コンピュート スケーリング** - インスタンスタイプを変更

---

## まとめ

### 主なポイント

- Amazon RDS Multi-AZ レプリケーションが ENA Express でハイパフォーマンス化
- 最大 25 Gbps の帯域幅と低レイテンシを実現
- 複数のデータベースエンジンで追加料金なく利用可能
- 書き込み集約的なワークロードに最適

### 次のステップ

1. 現在の Multi-AZ デプロイメントを確認
2. 既存インスタンスで ENA Express を有効化
3. パフォーマンス改善を検証

---

## 参考URL

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ/)
- [Multi-AZ DB cluster deployments for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html)
- [ENA Express for Amazon EC2 instances now supports traffic between Availability Zones](https://aws.amazon.com/about-aws/whats-new/2026/05/ena-express-availability-zones)
- [Cross-Availability Zone ENA Express support for Multi-AZ deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.CrossAZENAExpress.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
# Amazon RDS が Multi-AZ レプリケーションで ENA Express をサポート

Amazon RDS now supports ENA Express for Multi-AZ replication

**カテゴリ:** What's New
**公開日:** 2026-05-26T19:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ/)

このページでは、AWS What's Newで発表された「Amazon RDS now supports ENA Express for Multi-AZ replication」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon RDS Multi-AZ インスタンスが ENA Express によるレプリケーション機能をサポートするようになり、SRD プロトコルを活用して最大 25 Gbps のシングルフロー帯域幅と低レイテンシを実現します。このアップデートは、複数のデータベースエンジンで追加料金なく利用でき、書き込み集約的なワークロードのパフォーマンス向上に適しています。

## このアップデートで何が変わったか

- MariaDB、MySQL、PostgreSQL、Db2、および Oracle 向けの Amazon RDS で、追加料金なしで利用できます。

## 対象ユーザー

- MariaDB、MySQL、PostgreSQL、Db2、および Oracle 向けの Amazon RDS で、追加料金なしで利用できます。

## 詳細

- Amazon RDS Multi-AZ インスタンスが、可用性ゾーン間のレプリケーション トラフィックに対して ENA Express をサポートするようになりました。

- ENA Express は AWS の Scalable Reliable Datagram（SRD）プロトコルを使用して、クロスAZ レプリケーション トラフィックに対して最大 25 Gbps のシングルフロー帯域幅を提供します。

- 高度な輻輳制御とマルチパス機能により、Multi-AZ デプロイメントのレイテンシ変動性が削減されます。

- MariaDB、MySQL、PostgreSQL、Db2、および Oracle 向けの Amazon RDS で、追加料金なしで利用できます。

- Africa（ケープタウン）、Asia Pacific（香港、ハイデラバード、ジャカルタ、マレーシア、メルボルン、ムンバイ、ニュージーランド、大阪、ソウル、シンガポール、シドニー、台北、タイ、東京）、カナダ、ヨーロッパ、イスラエル、メキシコ、US East、US West、AWS GovCloud（US）リージョンで対応しています。

- 既存の Amazon RDS インスタンスで有効にするには、開始停止またはコンピュート スケーリング アクションを実行します。

- 書き込み集約的なデータベース ワークロードの書き込みスループットが向上し、書き込みレイテンシが低下します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-ena-express-multiAZ/)
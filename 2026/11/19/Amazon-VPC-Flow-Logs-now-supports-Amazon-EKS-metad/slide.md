---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon VPC Flow Logs が Amazon EKS メタデータをサポート

Amazon VPC Flow Logs now supports Amazon EKS metadata

**What's New** | 2026-11-19T08:00:00

---

## 概要

- Amazon VPCフローログがEKSメタデータに対応し、ポッドや名前空間などの情報を記録できるようになりました。
- ノード上の監視ソフトウェアなしで調査を迅速化したいEKS利用者に適しております。

---

## 前提・背景

### これまでの課題

Amazon VPC Flow Logsが、Amazon EKSメタデータをフローログレコードへ追加する機能を提供いたします。各レコードは、トラフィックを送受信したポッドと、クラスター、名前空間、ラベルを識別いたします。ノード上で監視ソフトウェアを実行せずに、セキュリティ調査やトラフィック把握、ネットワーク問題の切り分けが迅速になります。フローログを作成し、ログ形式にEKSフィールドを追加するだけでご利用いただけます。クラスターやアプリケーションの変更は不要です。対象はAmazon VPC CN

---

### 関連する最近の動向

- **Amazon VPC Flow Logs now supports Amazon EKS metadata - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new...

---

## 変更内容・新機能

Amazon VPC Flow Logsが、Amazon EKSメタデータをフローログレコードへ追加する機能を提供いたします。各レコードは、トラフィックを送受信したポッドと、クラスター、名前空間、ラベルを識別いたします。ノード上で監視ソフトウェアを実行せずに、セキュリティ調査やトラフィック把握、ネットワーク問題の切り分けが迅速になります。フローログを作成し、ログ形式にEKSフィールドを追加するだけでご利用いただけます。クラスターやアプリケーションの変更は不要です。対象はAmazon VPC CNIプラグインを使用するEC2インスタンス上のポッド（EKS Auto Mode、マネージドノードグループ、セルフマネージドノードを含む）です。既存のログ送信先（CloudWatch Logs、S3、Data Firehose）にそのまま出力できます。EKSメタデータ自体の追加料金は無料で、標準のVPC Flow Logsの配信・保管料金が適用されます。Amazon EKSが利用可能なすべてのAWSリージョンで使えます。これまではカスタムツールや全ノード監視が必要でしたが、一つのログでVPCとKu

---

## まとめ

- Amazon VPC Flow Logs now supports Amazon EKS metadata について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-vpc-flow-logs-amazon-eks-metadata/)

### 関連情報

- [Amazon VPC Flow Logs now supports Amazon EKS metadata - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-vpc-flow-logs-amazon-eks-metadata/)
- [Simplify VPC Flow Logs with EC2 resource tags and next-hop metadata](https://aws.amazon.com/blogs/networking-and-content-delivery/simplify-vpc-flow-logs-with-ec2-resource-tags-and-next-hop-metadata)
- [Amazon VPC Flow Logs introduces additional metadata](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-flow-logs-metadata)
- [Flow log records - Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html)
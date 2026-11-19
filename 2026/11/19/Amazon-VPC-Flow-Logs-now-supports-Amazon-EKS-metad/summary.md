# Amazon VPC Flow Logs が Amazon EKS メタデータをサポート

Amazon VPC Flow Logs now supports Amazon EKS metadata

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-vpc-flow-logs-amazon-eks-metadata/)

このページでは、AWS What's Newで発表された「Amazon VPC Flow Logs now supports Amazon EKS metadata」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon VPCフローログがEKSメタデータに対応し、ポッドや名前空間などの情報を記録できるようになりました。ノード上の監視ソフトウェアなしで調査を迅速化したいEKS利用者に適しております。

## このアップデートで何が変わったか

Amazon VPC Flow Logsが、Amazon EKSメタデータをフローログレコードへ追加する機能を提供いたします。各レコードは、トラフィックを送受信したポッドと、クラスター、名前空間、ラベルを識別いたします。ノード上で監視ソフトウェアを実行せずに、セキュリティ調査やトラフィック把握、ネットワーク問題の切り分けが迅速になります。フローログを作成し、ログ形式にEKSフィールドを追加するだけでご利用いただけます。クラスターやアプリケーションの変更は不要です。対象はAmazon VPC CNIプラグインを使用するEC2インスタンス上のポッド（EKS Auto Mode、マネージドノードグループ、セルフマネージドノードを含む）です。既存のログ送信先（CloudWatch Logs、S3、Data Firehose）にそのまま出力できます。EKSメタデータ自体の追加料金は無料で、標準のVPC Flow Logsの配信・保管料金が適用されます。Amazon EKSが利用可能なすべてのAWSリージョンで使えます。

## 対象ユーザー

Amazon VPC Flow Logsが、Amazon EKSメタデータをフローログレコードへ追加する機能を提供いたします。各レコードは、トラフィックを送受信したポッドと、クラスター、名前空間、ラベルを識別いたします。ノード上で監視ソフトウェアを実行せずに、セキュリティ調査やトラフィック把握、ネットワーク問題の切り分けが迅速になります。フローログを作成し、ログ形式にEKSフィールドを追加するだけでご利用いただけます。クラスターやアプリケーションの変更は不要です。対象はAmazon VPC CNIプラグインを使用するEC2インスタンス上のポッド（EKS Auto Mode、マネージドノードグル

## 詳細

Amazon VPC Flow Logsが、Amazon EKSメタデータをフローログレコードへ追加する機能を提供いたします。各レコードは、トラフィックを送受信したポッドと、クラスター、名前空間、ラベルを識別いたします。ノード上で監視ソフトウェアを実行せずに、セキュリティ調査やトラフィック把握、ネットワーク問題の切り分けが迅速になります。フローログを作成し、ログ形式にEKSフィールドを追加するだけでご利用いただけます。クラスターやアプリケーションの変更は不要です。対象はAmazon VPC CNIプラグインを使用するEC2インスタンス上のポッド（EKS Auto Mode、マネージドノードグループ、セルフマネージドノードを含む）です。既存のログ送信先（CloudWatch Logs、S3、Data Firehose）にそのまま出力できます。EKSメタデータ自体の追加料金は無料で、標準のVPC Flow Logsの配信・保管料金が適用されます。Amazon EKSが利用可能なすべてのAWSリージョンで使えます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-vpc-flow-logs-amazon-eks-metadata/)
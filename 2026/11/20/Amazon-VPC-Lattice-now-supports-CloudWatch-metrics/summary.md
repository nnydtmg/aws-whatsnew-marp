# Amazon VPC LatticeがVPCリソース向けCloudWatchメトリクスをサポート

Amazon VPC Lattice now supports CloudWatch metrics for VPC resources

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-lattice-cloudwatch-metrics/)

このページでは、AWS What's Newで発表された「Amazon VPC Lattice now supports CloudWatch metrics for VPC resources」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon VPC LatticeはVPCリソース向けのCloudWatchメトリクスを新たに提供し、リソース所有者と利用者がレイヤー4トラフィックを直接監視できるようになりました。

## このアップデートで何が変わったか

以前はリソースアクセスログがトラフィック確認の主な手段でしたが、追加の処理が必要でリアルタイム可視性が限定的でした。今回CloudWatchでレイヤー4リソースを直接監視できるようになりました。

容量計画メトリクス（BytesProcessed、NewFlows、ActiveFlows）により、リソース所有者はリソースゲートウェイおよびリソース設定ごとのトラフィックを監視できます。信頼性メトリクス（PacketsDropped）で接続性の問題を早期検知できます。リソースゲートウェイはポート割り当てエラーも報告し、ENIあたりのIPv4アドレス追加が必要かどうかを判断できます。

## 対象ユーザー

Amazon VPC LatticeがVPCリソース向けにAmazon CloudWatchメトリクスを公開するようになりました。リソース所有者（VPC Lattice経由でリソースを共有する側）とリソース利用者（共有リソースにアクセスする側）は、データベースやクラスター、オンプレミスエンドポイントなどのリソースへのTCPトラフィックをCloudWatchで直接確認できます。

## 詳細

Amazon VPC LatticeがVPCリソース向けにAmazon CloudWatchメトリクスを公開するようになりました。リソース所有者（VPC Lattice経由でリソースを共有する側）とリソース利用者（共有リソースにアクセスする側）は、データベースやクラスター、オンプレミスエンドポイントなどのリソースへのTCPトラフィックをCloudWatchで直接確認できます。

リソース所有者はリソースゲートウェイとリソース設定のメトリクスを取得できます。利用者はリソースエンドポイント、サービスネットワークエンドポイント、サービスネットワークVPC関連のメトリクスを取得できます。

以前はリソースアクセスログがトラフィック確認の主な手段でしたが、追加の処理が必要でリアルタイム可視性が限定的でした。今回CloudWatchでレイヤー4リソースを直接監視できるようになりました。

容量計画メトリクス（BytesProcessed、NewFlows、ActiveFlows）により、リソース所有者はリソースゲートウェイおよびリソース設定ごとのトラフィックを監視できます。信頼性メトリクス（PacketsDropped）で接続性の問題を早期検知できます。リソースゲートウェイはポート割り当てエラーも報告し、ENIあたりのIPv4アドレス追加が必要かどうかを判断できます。

利用者は新規フローがゼロに落ちた場合やドロップパケットが増加した場合にCloudWatchアラームを設定でき、アプリケーションが影響を受ける前に到達不能なリソースを検知できます。所有者・利用者ともにAvailability Zone別にメトリクスを分解し、ゾーナルの問題切り分けや設定変更後の接続確認が可能です。

メトリクスはAWS/VpcLatticeネームスペースに1分ごとに公開されます。Amazon VPC Latticeが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-lattice-cloudwatch-metrics/)
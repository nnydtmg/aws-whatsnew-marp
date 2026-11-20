# Amazon Auroraがクラスターの別VPCへの移動をサポート

Amazon Aurora now supports moving clusters to a different VPC

**カテゴリ:** What's New
**公開日:** 2026-11-19T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-move-clusters-to-different-vpc/)

このページでは、AWS What's Newで発表された「Amazon Aurora now supports moving clusters to a different VPC」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Auroraは、データ移行を行わずに既存クラスターを別のVPCへ移動できる機能を提供します。ネットワーク構成の変更やコンプライアンス対応が必要なお客様に有用です。Aurora PostgreSQLおよびAurora MySQLクラスターを、単一のAPIコールまたはAmazon RDSコンソールの変更操作で別VPCへ移動できます。データはそのまま残り、クラスターエンドポイントは変更されず、接続の中断は短時間のみです。

## このアップデートで何が変わったか

Aurora PostgreSQLおよびAurora MySQLクラスターをデータ移行なしで別のVPCへ移動できます。単一のModifyDBCluster APIコールまたはAmazon RDSコンソールの変更操作でクラスターを移動できます。より広いIPアドレス空間や重複しないCIDR範囲への移動、ネットワーク統合、セキュリティおよびコンプライアンス要件の変更に対応したいお客様に適しています。以前は、ターゲットVPCに新しいクラスターを作成し、データを移行し、アプリケーションの接続文字列を更新する必要がありました。現在は単一のModifyDBCluster APIコールで既存クラスターを新しいVPCに移動できます。データはそのまま残り、クラスターエンドポイントは同じまま、移動中の接続中断は短時間のみです。開始前に、Aurora Global Database、Amazon RDS Proxy、Amazon RDS Blue/Green Deploymentsなど、現在のVPCに紐づく機能をオフにする必要があります。移動後に新しいVPCで再設定できます。この機能は、Aurora Post

## 詳細

Aurora PostgreSQLおよびAurora MySQLクラスターをデータ移行なしで別のVPCへ移動できます。単一のModifyDBCluster APIコールまたはAmazon RDSコンソールの変更操作でクラスターを移動できます。より広いIPアドレス空間や重複しないCIDR範囲への移動、ネットワーク統合、セキュリティおよびコンプライアンス要件の変更に対応したいお客様に適しています。以前は、ターゲットVPCに新しいクラスターを作成し、データを移行し、アプリケーションの接続文字列を更新する必要がありました。現在は単一のModifyDBCluster APIコールで既存クラスターを新しいVPCに移動できます。データはそのまま残り、クラスターエンドポイントは同じまま、移動中の接続中断は短時間のみです。開始前に、Aurora Global Database、Amazon RDS Proxy、Amazon RDS Blue/Green Deploymentsなど、現在のVPCに紐づく機能をオフにする必要があります。移動後に新しいVPCで再設定できます。この機能は、Aurora PostgreSQLのexpress configurationが利用可能なすべてのAWSリージョンで、Aurora PostgreSQLおよびAurora MySQLで利用できます。Amazon RDSコンソール、AWS CLI、AWS SDKから開始できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-move-clusters-to-different-vpc/)
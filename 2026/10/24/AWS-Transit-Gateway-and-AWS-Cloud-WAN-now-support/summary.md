# AWS Transit GatewayとAWS Cloud WANが1:1 NATをサポート

AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT

**カテゴリ:** What's New
**公開日:** 2026-10-23T15:43:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)

このページでは、AWS What's Newで発表された「AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transit GatewayとAWS Cloud WANがアタッチメント上でマネージドな1対1NATを提供するようになりました。重複するIPアドレス範囲を持つネットワークを容易に接続できるようになりました。

## このアップデートで何が変わったか

AWS Transit GatewayとAWS Cloud WANがRegional Private NAT Gatewayとの統合により、アタッチメント上でマネージドな1対1NATを直接提供します。お客様は重複するIPアドレス範囲を持つプライベートネットワークを、番号の再割り当てやNATアプライアンスの導入、戻りトラフィックルールの作成なしに接続できます。合併・買収、パートナーネットワーク接続、マルチクラウド接続、独立してプロビジョニングされたVPC間の相互接続が必要なお客様に適しています。アタッチメント上でアドレス変換ルールを定義し、ソースCIDRが変換されるプライベートIP範囲を指定できます。Amazon VPC、AWS Site-to-Site VPN、AWS Direct Connect、Transit Gateway Connect経由のSD-WANアプライアンスに対応。双方向に自動変換され、戻りトラフィックルールは不要。AWS Management Console、AWS CLI、AWS SDKs、AWS CloudFormationで数分でセットアップ可能。Amazon

## 対象ユーザー

AWS Transit GatewayとAWS Cloud WANがRegional Private NAT Gatewayとの統合により、アタッチメント上でマネージドな1対1NATを直接提供します。お客様は重複するIPアドレス範囲を持つプライベートネットワークを、番号の再割り当てやNATアプライアンスの導入、戻りトラフィックルールの作成なしに接続できます。合併・買収、パートナーネットワーク接続、マルチクラウド接続、独立してプロビジョニングされたVPC間の相互接続が必要なお客様に適しています。アタッチメント上でアドレス変換ルールを定義し、ソースCIDRが変換されるプライベートIP範囲を指定でき

## 詳細

AWS Transit GatewayとAWS Cloud WANがRegional Private NAT Gatewayとの統合により、アタッチメント上でマネージドな1対1NATを直接提供します。お客様は重複するIPアドレス範囲を持つプライベートネットワークを、番号の再割り当てやNATアプライアンスの導入、戻りトラフィックルールの作成なしに接続できます。合併・買収、パートナーネットワーク接続、マルチクラウド接続、独立してプロビジョニングされたVPC間の相互接続が必要なお客様に適しています。アタッチメント上でアドレス変換ルールを定義し、ソースCIDRが変換されるプライベートIP範囲を指定できます。Amazon VPC、AWS Site-to-Site VPN、AWS Direct Connect、Transit Gateway Connect経由のSD-WANアプライアンスに対応。双方向に自動変換され、戻りトラフィックルールは不要。AWS Management Console、AWS CLI、AWS SDKs、AWS CloudFormationで数分でセットアップ可能。Amazon CloudWatchメトリクスとAmazon EventBridgeイベントで監視。すべてのAWS商用リージョンで利用可能。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)
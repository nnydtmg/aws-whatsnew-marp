# AWS Transit Gatewayがファイアウォールとリソースコンテキストを共有可能に

AWS Transit Gateway now shares resource context with firewalls for segmentation policies

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-firewall-context-sharing/)

このページでは、AWS What's Newで発表された「AWS Transit Gateway now shares resource context with firewalls for segmentation policies」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transit Gatewayはファイアウォールとのリソースコンテキスト共有により、ワークロード定義に基づくセグメンテーションを最初のパケットから実現します。本機能は、動的な環境や複数階層のセキュリティを運用するお客様に適しています。

## このアップデートで何が変わったか

- 本アップデートの新機能は、AWS Transit Gatewayが接続されたファイアウォールなどのセキュリティサービスとリソースコンテキストを共有できるようになったことです。
- お客様は、Amazon VPC、VPCサブネット、VPCセキュリティグループ、およびトランジットゲートウェイアタッチメントを、IPアドレスと併せてファイアウォールポリシーで使用できます。
- トランジットゲートウェイはファイアウォールへ送信するトラフィックにリソースコンテキストを埋め込み、最初のパケットから適切なポリシーを適用できます。
- 本アップデートは、IPアドレスによるセグメンテーションの計画と維持が難しいお客様に適しています。
- リソースタグの同期漏れを避けたいお客様や、短命なAWS Lambda関数に即座にポリシーを適用したいお客様に適しています。
- 開発VPCと本番VPCの分離や、AWS Direct ConnectおよびAWS Site-to-Site VPN経由トラフィックへの共通検査を求めるお客様に適しています。
- AWS Network FirewallまたはPalo Alto

## 詳細

- 本アップデートの新機能は、AWS Transit Gatewayが接続されたファイアウォールなどのセキュリティサービスとリソースコンテキストを共有できるようになったことです。
- お客様は、Amazon VPC、VPCサブネット、VPCセキュリティグループ、およびトランジットゲートウェイアタッチメントを、IPアドレスと併せてファイアウォールポリシーで使用できます。
- トランジットゲートウェイはファイアウォールへ送信するトラフィックにリソースコンテキストを埋め込み、最初のパケットから適切なポリシーを適用できます。
- 本アップデートは、IPアドレスによるセグメンテーションの計画と維持が難しいお客様に適しています。
- リソースタグの同期漏れを避けたいお客様や、短命なAWS Lambda関数に即座にポリシーを適用したいお客様に適しています。
- 開発VPCと本番VPCの分離や、AWS Direct ConnectおよびAWS Site-to-Site VPN経由トラフィックへの共通検査を求めるお客様に適しています。
- AWS Network FirewallまたはPalo Alto Networks Software Firewallsをご利用のお客様に適しています。
- AWS Network Managerでコンテキストストアを作成し、Transit Gatewayを関連付けることで開始できます。
- 本機能は、AWS Transit Gatewayが利用可能なすべての商用AWSリージョン（Middle East (Bahrain)およびMiddle East (UAE)を除く）で利用できます。AWS GovCloud (US-East)およびAWS GovCloud (US-West)でも利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-firewall-context-sharing/)
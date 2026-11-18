# AWS Transit GatewayがGateway Load Balancerとのネイティブ統合をサポート

AWS Transit Gateway supports native integration with Gateway Load Balancer

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-gwlb-integration/)

このページでは、AWS What's Newで発表された「AWS Transit Gateway supports native integration with Gateway Load Balancer」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transit GatewayがGateway Load Balancerとのネイティブ統合をサポートし、ネットワークセキュリティの展開と管理が簡素化されました。本機能は、ファイアウォールを用いてセグメンテーションポリシーを適用するお客様に適しています。

## このアップデートで何が変わったか

AWS Transit GatewayがGateway Load Balancerタイプのネットワーク機能アタッチメントをサポートするようになりました。複雑なVPC設定なしにTransit GatewayをGateway Load BalancerのVPCエンドポイントサービスへ接続できます。Transit Gatewayがエンドポイントを作成および管理するため、専用サブネットやルートテーブルは不要になります。エンドポイントサービスは別のAWSアカウントでも利用可能です。リソースコンテキストの共有により、ファイアウォールでセグメンテーションポリシーを適用できます。Transit Gatewayはファイアウォールへ送信するトラフィックに、Transit Gatewayアタッチメント、VPC、サブネット、セキュリティグループなどのリソースコンテキストを付与します。本機能は、AWS Transit GatewayとGateway Load Balancerの両方が利用可能なすべての商用AWSリージョン（中東（バーレーン）および中東（UAE）を除く）で利用できます。AWS GovCloud（U

## 詳細

AWS Transit GatewayがGateway Load Balancerタイプのネットワーク機能アタッチメントをサポートするようになりました。複雑なVPC設定なしにTransit GatewayをGateway Load BalancerのVPCエンドポイントサービスへ接続できます。Transit Gatewayがエンドポイントを作成および管理するため、専用サブネットやルートテーブルは不要になります。エンドポイントサービスは別のAWSアカウントでも利用可能です。リソースコンテキストの共有により、ファイアウォールでセグメンテーションポリシーを適用できます。Transit Gatewayはファイアウォールへ送信するトラフィックに、Transit Gatewayアタッチメント、VPC、サブネット、セキュリティグループなどのリソースコンテキストを付与します。本機能は、AWS Transit GatewayとGateway Load Balancerの両方が利用可能なすべての商用AWSリージョン（中東（バーレーン）および中東（UAE）を除く）で利用できます。AWS GovCloud（US-East）およびAWS GovCloud（US-West）リージョンでも利用可能です。本アップデートは、AWSネットワーク全体のセキュリティを簡素化したいお客様に適しています。ファイアウォールやセキュリティアプライアンスを利用するお客様に有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-gwlb-integration/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Transit GatewayがGateway Load Balancerとのネイティブ統合をサポート

AWS Transit Gateway supports native integration with Gateway Load Balancer

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWS Transit GatewayがGateway Load Balancerとのネイティブ統合をサポートし、ネットワークセキュリティの展開と管理が簡素化されました。
- 本機能は、ファイアウォールを用いてセグメンテーションポリシーを適用するお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Using Gateway Load Balancer with Transit Gateway for centralized network security**
  [詳細](https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/using-gwlb-with-tg-for-cns.html)

- **Centralized inspection architecture with AWS Gateway Load Balancer and AWS Transit Gateway**
  [詳細](https://aws.amazon.com/blogs/networking-and-con...

---

## 変更内容・新機能

AWS Transit GatewayがGateway Load Balancerタイプのネットワーク機能アタッチメントをサポートするようになりました。複雑なVPC設定なしにTransit GatewayをGateway Load BalancerのVPCエンドポイントサービスへ接続できます。Transit Gatewayがエンドポイントを作成および管理するため、専用サブネットやルートテーブルは不要になります。エンドポイントサービスは別のAWSアカウントでも利用可能です。リソースコンテキストの共有により、ファイアウォールでセグメンテーションポリシーを適用できます。Transit Gatewayはファイアウォールへ送信するトラフィックに、Transit Gatewayアタッチメント、VPC、サブネット、セキュリティグループなどのリソースコンテキストを付与します。本機能は、AWS Transit GatewayとGateway Load Balancerの両方が利用可能なすべての商用AWSリージョン（中東（バーレーン）および中東（UAE）を除く）で利用できます。AWS GovCloud（U

---

## まとめ

- AWS Transit Gateway supports native integration with Gateway Load Balancer について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-gwlb-integration/)

### 関連情報

- [Using Gateway Load Balancer with Transit Gateway for centralized network security](https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/using-gwlb-with-tg-for-cns.html)
- [Centralized inspection architecture with AWS Gateway Load Balancer and AWS Transit Gateway](https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-inspection-architecture-with-aws-gateway-load-balancer-and-aws-transit-gateway)
- [Introducing AWS Gateway Load Balancer: Supported architecture patterns](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-gateway-load-balancer-supported-architecture-patterns)
- [AWS Transit Gateway supports native integration with Gateway Load Balancer](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-gwlb-integration/)
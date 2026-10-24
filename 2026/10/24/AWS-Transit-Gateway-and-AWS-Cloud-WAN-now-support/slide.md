---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Transit GatewayとAWS Cloud WANが1:1 NATをサポート

AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT

**What's New** | 2026-10-23T15:43:00

---

## 概要

- AWS Transit GatewayとAWS Cloud WANがアタッチメント上でマネージドな1対1NATを提供するようになりました。
- 重複するIPアドレス範囲を持つネットワークを容易に接続できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat)

- **Regional NAT gateways for automatic multi-AZ expansion**
  [詳細](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html)

- **AWS NAT Gateway now supports regional availability**
  [詳細](https:/...

---

## 変更内容・新機能

AWS Transit GatewayとAWS Cloud WANがRegional Private NAT Gatewayとの統合により、アタッチメント上でマネージドな1対1NATを直接提供します。お客様は重複するIPアドレス範囲を持つプライベートネットワークを、番号の再割り当てやNATアプライアンスの導入、戻りトラフィックルールの作成なしに接続できます。合併・買収、パートナーネットワーク接続、マルチクラウド接続、独立してプロビジョニングされたVPC間の相互接続が必要なお客様に適しています。アタッチメント上でアドレス変換ルールを定義し、ソースCIDRが変換されるプライベートIP範囲を指定できます。Amazon VPC、AWS Site-to-Site VPN、AWS Direct Connect、Transit Gateway Connect経由のSD-WANアプライアンスに対応。双方向に自動変換され、戻りトラフィックルールは不要。AWS Management Console、AWS CLI、AWS SDKs、AWS CloudFormationで数分でセットアップ可能。Amazon

---

## まとめ

- AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)

### 関連情報

- [AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat)
- [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html)
- [AWS NAT Gateway now supports regional availability](https://aws.amazon.com/about-aws/whats-new/2025/11/aws-nat-gateway-regional-availability)
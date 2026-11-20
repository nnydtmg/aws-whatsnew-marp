---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewallが明示的プロキシとNAT Gateway連携を開始

AWS Network Firewall launches explicit proxy functionality and NAT Gateway association

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS Network FirewallがNAT Gatewayと関連付けられ、明示的プロキシと透過型ファイアウォールとして利用できるようになりました。
- トラフィックのフィルタリングとAWSリソースの保護を行うお客様に適した機能です。

---

## 前提・背景

### 関連する最近の動向

- **What is AWS Network Firewall? - AWS Network Firewall**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)

- **AWS Network Firewall no-source-preservation mode - AWS Network Firewall**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/nfw-no-source-preservation.html)

- **AWS Launches Network Firew...

---

## 変更内容・新機能

- AWS Network FirewallをNAT Gatewayと関連付け、明示的プロキシおよびネイティブなネットワークアドレス変換を備えた透過型ファイアウォールとして使用できるようになりました。
- 既存のNetwork Firewall機能と組み合わせて、アプリケーションのトラフィックをフィルタリングし、データ洩漏とマルウェア注入を防止できます。
- 単一のセキュリティポリシーにより、明示的プロキシとルーテッドフィルタリングの両方を中央で管理できます。
- VPCエンドポイントを使用して重複したIP CIDR空間を持つVPCからもアクセスでき、フィルタリングされたトラフィックはNAT GatewayのIPアドレスで退出します。
- この更新は、トラフィックをフィルタリングしてAWSリソースを保護するお客様に適しております。

---

## まとめ

- AWS Network Firewall launches explicit proxy functionality and NAT Gateway association について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-proxy-nat-gateway/)

### 関連情報

- [What is AWS Network Firewall? - AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)
- [AWS Network Firewall no-source-preservation mode - AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/nfw-no-source-preservation.html)
- [AWS Launches Network Firewall Proxy in Preview to Simplify Managed Egress Security - InfoQ](https://www.infoq.com/news/2025/12/aws-network-firewall-proxy)
- [Securing Egress Architectures with Network Firewall Proxy | Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/securing-egress-architectures-with-network-firewall-proxy)
- [Building a Centralized Egress Control with AWS Network Firewall Explicit Proxy](https://medium.com/@rushabhmahale222/building-a-centralized-egress-control-with-aws-network-firewall-explicit-proxy-over-vpc-peering-dc7be88c13ac)
# AWS Network Firewallが明示的プロキシとNAT Gateway連携を開始

AWS Network Firewall launches explicit proxy functionality and NAT Gateway association

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-proxy-nat-gateway/)

このページでは、AWS What's Newで発表された「AWS Network Firewall launches explicit proxy functionality and NAT Gateway association」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Network FirewallがNAT Gatewayと関連付けられ、明示的プロキシと透過型ファイアウォールとして利用できるようになりました。トラフィックのフィルタリングとAWSリソースの保護を行うお客様に適した機能です。

## このアップデートで何が変わったか

- AWS Network FirewallをNAT Gatewayと関連付け、明示的プロキシおよびネイティブなネットワークアドレス変換を備えた透過型ファイアウォールとして使用できるようになりました。
- 既存のNetwork Firewall機能と組み合わせて、アプリケーションのトラフィックをフィルタリングし、データ洩漏とマルウェア注入を防止できます。
- 単一のセキュリティポリシーにより、明示的プロキシとルーテッドフィルタリングの両方を中央で管理できます。
- VPCエンドポイントを使用して重複したIP CIDR空間を持つVPCからもアクセスでき、フィルタリングされたトラフィックはNAT GatewayのIPアドレスで退出します。
- この更新は、トラフィックをフィルタリングしてAWSリソースを保護するお客様に適しております。

## 詳細

- AWS Network FirewallをNAT Gatewayと関連付け、明示的プロキシおよびネイティブなネットワークアドレス変換を備えた透過型ファイアウォールとして使用できるようになりました。
- 既存のNetwork Firewall機能と組み合わせて、アプリケーションのトラフィックをフィルタリングし、データ洩漏とマルウェア注入を防止できます。
- 単一のセキュリティポリシーにより、明示的プロキシとルーテッドフィルタリングの両方を中央で管理できます。
- VPCエンドポイントを使用して重複したIP CIDR空間を持つVPCからもアクセスでき、フィルタリングされたトラフィックはNAT GatewayのIPアドレスで退出します。
- この更新は、トラフィックをフィルタリングしてAWSリソースを保護するお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-proxy-nat-gateway/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network FirewallがTransit Gateway接続でコンテキスト対応ルールをサポート

AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls

**What's New** | 2026-11-16T08:00:00

---

## 概要

- AWS Transit Gateway接続のNetwork Firewallで、IPアドレスではなくVPCリソースのコンテキストを参照するルールがご利用いただけるようになりました。
- 本更新は、組織の拡大に合わせて一貫したセキュリティ管理を自動化したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-context-aware-rules/)

- **Context-aware rules in AWS Network Firewall**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/context-aware-rules.html)

- **Transit gateway-attached fir...

---

## 変更内容・新機能

AWS Transit Gatewayに接続されたAWS Network Firewallでコンテキスト対応ルール（context-aware rules）が利用可能になりました。コンテキスト対応ルールでは、IPアドレスではなくVPC、サブネット、セキュリティグループおよびTransit Gatewayアタッチメント識別子（コンテキスト識別子）を参照してトラフィックを照合できます。送信元コンテキストは全プロトコルで利用でき、宛先コンテキストはHTTP、TLS、SSHなどのTCPベースプロトコルで利用できます。既存のルールが新しいワークロードを自動的にカバーするため、ルールを手動で更新する必要がありません。FlowログとAlertログにはコンテキスト識別子が含まれるため、コンテキストに基づいた調査が可能です。本機能は追加料金なしで、すべての商用リージョンおよびAWS GovCloud (US)リージョンで利用できます。Transit Gateway接続ファイアウォールでのみサポートされ、Transit Gatewayに関連付けられたコンテキストストアが必要です。組織の成長に伴い一貫したセ

---

## まとめ

- AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-context-aware-rules/)

### 関連情報

- [AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-context-aware-rules/)
- [Context-aware rules in AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/context-aware-rules.html)
- [Transit gateway-attached firewalls in Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tgw-firewall.html)
- [Choosing the right inspection architecture for AWS Network Firewall](https://aws.amazon.com/blogs/networking-and-content-delivery/choosing-the-right-inspection-architecture-for-aws-network-firewall)
- [Why and how to migrate to a Transit Gateway-attached AWS Network Firewall](https://aws.amazon.com/blogs/security/why-and-how-to-migrate-to-a-transit-gateway-attached-aws-network-firewall)
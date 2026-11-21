---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon VPC IPAMポリシーがFirewallとLambdaのIP割り当てに対応

Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs

**What's New** | 2026-11-20T08:06:00

---

## 概要

- Amazon VPC IPAMポリシーが、AWS Network Firewallの自動インターネットファイアウォールおよびLambda Web FunctionsとMicroVMsへのパブリックIPv4割り当てを新たにサポートします。
- これにより、セキュリティ運用の簡素化とBYOIPによるコスト削減が可能になります。

---

## 前提・背景

### これまでの課題

Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。これ

---

### 関連する最近の動向

- **Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs - AW...

---

## 変更内容・新機能

Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。これにより、より強固なセキュリティ姿勢、ネットワーク・セキュリティ運用の簡素化、BYOIP利用時のパブリックIPv4コスト削減が可能になります。多くのお客様はAWSリソースのパブリックIPをACLやファイアウォールの許可リストに登録しています。以前はこれらのリソースを許可リスト済みアドレスに維持することが各アプリケーションチームに依存していました。本リリースにより、既存のリソースタイプと同様に割り当てルールを定義できるため、セキュリティチームはこれらのリソースが承認済み範囲からアドレスを取得すること

---

## 効果・メリット

- Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。
- お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。
- これにより、より強固なセキュリティ姿勢、ネットワーク・セキュリティ運用の簡素化、BYOIP利用時のパブリックIPv4コスト削減が可能になります。
- 多くのお客様はAWSリソースのパブリックIPをACLやファイアウォールの許可リストに登録しています。
- 以前はこれらのリソースを許可リス

---

## まとめ

- Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-ipam-policies-firewall-lambda/)

### 関連情報

- [Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-ipam-policies-firewall-lambda/)
- [Build scalable IPv4 addressing with AWS NAT gateway in regional availability mode, Amazon VPC IPAM policies and Prefix Lists](https://aws.amazon.com/blogs/networking-and-content-delivery/build-scalable-ipv4-addressing-with-aws-nat-gateway-in-regional-availability-mode-amazon-vpc-ipam-policies-and-prefix-lists)
- [IPAM policies documentation](https://docs.aws.amazon.com/vpc/latest/ipam/define-public-ipv4-allocation-strategy-with-ipam-policies.html)
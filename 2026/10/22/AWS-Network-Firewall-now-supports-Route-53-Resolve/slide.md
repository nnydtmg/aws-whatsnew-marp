---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network FirewallがRoute 53 Resolved IP Validationをサポート

AWS Network Firewall now supports Route 53 Resolved IP Validation

**What's New** | 2026-10-21T08:00:00

---

## 概要

- AWS Network FirewallはRoute 53 Resolved IP Validationを新たにサポートし、HTTP/HTTPS以外のプロトコルにもドメインベースのフィルタリングを適用できるようになりました。
- 本機能は、SNIスプーフィング対策と一貫したセキュリティポリシーを必要とするお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Network Firewall now supports Route 53 Resolved IP Validation - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation)

- **Keep your firewall rules up-to-date with Network Firewall features | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/keep-your-firewall-rules-up-to-date-with-network-firewall-features)

...

---

## 変更内容・新機能

- 新機能は、AWS Network FirewallがRoute 53 Resolved IP Validationをサポートするようになったことです。
- 本機能は、HTTP/HTTPSを超えてSFTPやSSHなどのプロトコルにもドメインベースのフィルタリングを拡張いたします。
- 接続先のIPアドレスがVPCのAmazon Route 53 VPC Resolverを通じて解決されたことを検証いたします。
- クライアントがドメインルールを回避できるセキュリティギャップを解消いたします。
- 本更新は、任意のプロトコルにドメインフィルタリングを実装したいNetwork Firewallのお客様に適しております。
- SNIスプーフィング対策や、すべてのアウトバウンドトラフィックに一貫したセキュリティポリシーを求める組織に有益でございます。

---

## まとめ

- AWS Network Firewall now supports Route 53 Resolved IP Validation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)

### 関連情報

- [AWS Network Firewall now supports Route 53 Resolved IP Validation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation)
- [Keep your firewall rules up-to-date with Network Firewall features | AWS Security Blog](https://aws.amazon.com/blogs/security/keep-your-firewall-rules-up-to-date-with-network-firewall-features)
- [AWS Route 53 Resolver DNS Firewall — The First Line of Egress Defense](https://dev.to/aws-builders/aws-route-53-resolver-dns-firewall-the-first-line-of-egress-defense-4gba)
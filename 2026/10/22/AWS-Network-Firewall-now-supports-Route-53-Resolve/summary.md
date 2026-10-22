# AWS Network FirewallがRoute 53 Resolved IP Validationをサポート

AWS Network Firewall now supports Route 53 Resolved IP Validation

**カテゴリ:** What's New
**公開日:** 2026-10-21T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)

このページでは、AWS What's Newで発表された「AWS Network Firewall now supports Route 53 Resolved IP Validation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Network FirewallはRoute 53 Resolved IP Validationを新たにサポートし、HTTP/HTTPS以外のプロトコルにもドメインベースのフィルタリングを適用できるようになりました。本機能は、SNIスプーフィング対策と一貫したセキュリティポリシーを必要とするお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、AWS Network FirewallがRoute 53 Resolved IP Validationをサポートするようになったことです。
- 本機能は、HTTP/HTTPSを超えてSFTPやSSHなどのプロトコルにもドメインベースのフィルタリングを拡張いたします。
- 接続先のIPアドレスがVPCのAmazon Route 53 VPC Resolverを通じて解決されたことを検証いたします。
- クライアントがドメインルールを回避できるセキュリティギャップを解消いたします。
- 本更新は、任意のプロトコルにドメインフィルタリングを実装したいNetwork Firewallのお客様に適しております。
- SNIスプーフィング対策や、すべてのアウトバウンドトラフィックに一貫したセキュリティポリシーを求める組織に有益でございます。

## 詳細

- 新機能は、AWS Network FirewallがRoute 53 Resolved IP Validationをサポートするようになったことです。
- 本機能は、HTTP/HTTPSを超えてSFTPやSSHなどのプロトコルにもドメインベースのフィルタリングを拡張いたします。
- 接続先のIPアドレスがVPCのAmazon Route 53 VPC Resolverを通じて解決されたことを検証いたします。
- クライアントがドメインルールを回避できるセキュリティギャップを解消いたします。
- 本更新は、任意のプロトコルにドメインフィルタリングを実装したいNetwork Firewallのお客様に適しております。
- SNIスプーフィング対策や、すべてのアウトバウンドトラフィックに一貫したセキュリティポリシーを求める組織に有益でございます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/network-firewall-route-53-ip-validation/)
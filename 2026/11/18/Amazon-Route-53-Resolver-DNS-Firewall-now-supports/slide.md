---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 Resolver DNS Firewallが許可リストの自動生成をサポート

Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation

**What's New** | 2026-11-17T08:00:00

---

## 概要

- Amazon Route 53 Resolver DNS Firewallに観測トラフィックからの許可リスト自動生成機能が追加され、セキュリティチームの運用負荷を軽減いたします。
- DNS Firewall Advancedのお客様は追加費用なしでご利用いただけます。

---

## 前提・背景

### これまでの課題

Amazon Route 53 Resolver DNS Firewallは、VPCの観測されたDNSクエリトラフィックからドメイン許可リストを自動生成する機能をサポートしました。この機能は最小権限のDNSアクセスを強制し、DNSベースのデータ流出リスクを低減するのに役立ちます。ルックバックウィンドウは1時間から7日間で設定可能で、新たに観測されたドメインをフラグします。従来、最小権限モデルの実装にはセキュリティチームがDNSクエリログを手動分析し、VPCが依存するドメインを特定してから許可リス

---

### 関連する最近の動向

- **Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation - AWS**
  [詳細](https://aws.a...

---

## 変更内容・新機能

Amazon Route 53 Resolver DNS Firewallは、VPCの観測されたDNSクエリトラフィックからドメイン許可リストを自動生成する機能をサポートしました。この機能は最小権限のDNSアクセスを強制し、DNSベースのデータ流出リスクを低減するのに役立ちます。ルックバックウィンドウは1時間から7日間で設定可能で、新たに観測されたドメインをフラグします。従来、最小権限モデルの実装にはセキュリティチームがDNSクエリログを手動分析し、VPCが依存するドメインを特定してから許可リストルールをデプロイする必要がありました。これにより運用負荷が発生し、deny-by-default（walled-garden）姿勢の適用が遅れていました。自動許可リスト生成では、DNS Firewallがルックバックウィンドウ（1時間〜7日間）でDNSクエリトラフィックを分析し、観測されたドメインの許可リストを作成します。その後、継続的にDNSクエリを監視し、新たに観測されたドメインにフラグを立てるため、許可リストに追加する前にレビューできます。AWS Firewall ManagerまたはR

---

## まとめ

- Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-dns-firewall-auto-allowlists/)

### 関連情報

- [Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-dns-firewall-auto-allowlists/)
- [Amazon Route 53 Resolver DNS Firewall Automation Examples](https://github.com/aws-samples/amazon-route-53-resolver-dns-firewall-automation-examples)
- [Protect against advanced DNS threats with Amazon Route 53 Resolver DNS Firewall](https://aws.amazon.com/blogs/security/protect-against-advanced-dns-threats-with-amazon-route-53-resolver-dns-firewall)
- [How Resolver DNS Firewall works - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall-overview.html)
- [How to automate updates for your domain list in Route 53 Resolver DNS Firewall](https://aws.amazon.com/blogs/security/how-to-automate-updates-for-your-domain-list-in-route-53-resolver-dns-firewall)
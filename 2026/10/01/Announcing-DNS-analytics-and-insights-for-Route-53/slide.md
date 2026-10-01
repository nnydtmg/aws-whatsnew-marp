---
marp: true
theme: aws-whatsnew
paginate: true
---

# Route 53 Global ResolverとDNS FirewallでDNS分析・インサイトが利用可能に

Announcing DNS analytics and insights for Route 53 Global Resolver and DNS Firewall

**What's New** | 2026-10-01T08:00:00

---

## 概要

- Route 53 Global ResolverおよびDNS Firewallが、Amazon CloudWatchとのネイティブ統合によりDNS分析とインサイトを提供するようになりました。
- 本機能はネットワーク管理者およびセキュリティチームに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Announcing DNS analytics and insights for Route 53 Global Resolver and DNS Firewall**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/route-53-dns-analytics-insights/)

- **Monitoring DNS activity and performance with Route 53 Global Resolver**
  [詳細](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/gr-monitoring.html)

- **Introducing Amazon Route 53 Global R...

---

## 変更内容・新機能

Route 53 Global ResolverおよびDNS Firewallが、Amazon CloudWatchとのネイティブ統合によりDNS分析とインサイトを提供するようになりました。ネットワーク管理者およびセキュリティチームは、DNSクエリパターンの完全な可観測性の獲得、DNS Firewallルールの有効性監視、異常アクティビティの検出、DNSインフラストラクチャのパフォーマンス最適化が可能になります。CloudWatch MetricsとContributor Insightsを使用して、DNSクエリログの検索・分析、ブロックされたクエリやDNSレスポンスコードなどの特定パターン向けメトリクスフィルタの作成、自動アラームの設定ができます。Global ResolverとDNS Firewallの両コンソールに新しいAnalyticsタブが追加され、すべての分析機能に一箇所からアクセスできます。例えば、VPCごとにブロックされたDNSクエリのメトリクスフィルタを作成し、1時間以内に10件以上のクエリがブロックされた場合にアラームを発火させることで、潜在的なセキュリティ脅威への

---

## ユースケース

Route 53 Global ResolverおよびDNS Firewallが、Amazon CloudWatchとのネイティブ統合によりDNS分析とインサイトを提供するようになりました。ネットワーク管理者およびセキュリティチームは、DNSクエリパターンの完全な可観測性の獲得、DNS Firewallルールの有効性監視、異常アクティビティの検出、DNSインフラストラクチャのパフォーマンス最適化が可能になります。CloudWatch MetricsとContributor Insightsを使用して、DNSクエリログの検索・分析、ブロックされたクエリやDNSレスポンスコードなどの特定パターン向

---

## まとめ

- Announcing DNS analytics and insights for Route 53 Global Resolver and DNS Firewall について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/route-53-dns-analytics-insights/)

### 関連情報

- [Announcing DNS analytics and insights for Route 53 Global Resolver and DNS Firewall](https://aws.amazon.com/about-aws/whats-new/2026/10/route-53-dns-analytics-insights/)
- [Monitoring DNS activity and performance with Route 53 Global Resolver](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/gr-monitoring.html)
- [Introducing Amazon Route 53 Global Resolver for secure anycast DNS resolution](https://aws.amazon.com/blogs/aws/introducing-amazon-route-53-global-resolver-for-secure-anycast-dns-resolution-preview)
- [Using Route 53 Resolver DNS Firewall Logs with CloudWatch Contributor Insights and Anomaly Detection](https://aws.amazon.com/blogs/networking-and-content-delivery/using-route-53-resolver-dns-firewall-logs-with-cloudwatch-contributor-insights-and-anomaly-detection)
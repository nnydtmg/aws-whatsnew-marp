---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 Global Resolver が AWS Cloud WAN 経由でハイブリッドネットワーク向けに利用可能に

Amazon Route 53 Global Resolver is now available over AWS Cloud WAN for hybrid networks

**What's New** | 2026-11-17T08:00:00

---

## 概要

- Amazon Route 53 Global Resolverは、AWS Cloud WAN経由のプライベート接続でエニーキャストDNS解決をサポートするようになりました。
- ハイブリッドネットワークをお持ちのお客様は、高可用性と簡素化されたDNS解決をご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Route 53 Global Resolver: Hybrid DNS Without a VPN**
  [詳細](https://cambelo.com/posts/route53-global-resolver-hybrid-dns-without-vpn)

- **Amazon Route 53 Global Resolver is now available over AWS Cloud WAN for hybrid networks - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-global-resolver-cloud-wan)

- **Global Resolver**
  [詳細](https://aws.amazon.com...

---

## 変更内容・新機能

- 新機能は、Amazon Route 53 Global ResolverがAWS Cloud WANで管理されるプライベート接続向けのエニーキャストDNS解決をサポートすることです。
- 既存のAWS Direct ConnectまたはAWS VPN接続を介して、パブリックおよびプライベートドメインへのDNSクエリを解決できます。
- 自動的なマルチリージョンフェイルオーバーにより、高可用性が提供されます。
- 本アップデートは、ハイブリッドネットワークをお持ちの組織に適しております。
- インターネットアクセスのないクライアントや、コンプライアンス要件により制限されているお客様に適しております。

---

## まとめ

- Amazon Route 53 Global Resolver is now available over AWS Cloud WAN for hybrid networks について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-global-resolver-cloud-wan/)

### 関連情報

- [Route 53 Global Resolver: Hybrid DNS Without a VPN](https://cambelo.com/posts/route53-global-resolver-hybrid-dns-without-vpn)
- [Amazon Route 53 Global Resolver is now available over AWS Cloud WAN for hybrid networks - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-global-resolver-cloud-wan)
- [Global Resolver](https://aws.amazon.com/route53/global-resolver)
- [Introducing Amazon Route 53 Global Resolver for secure anycast DNS resolution (preview)](https://aws.amazon.com/blogs/aws/introducing-amazon-route-53-global-resolver-for-secure-anycast-dns-resolution-preview)
- [Set up DNS resolution for hybrid networks in a multi-account AWS environment](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/set-up-dns-resolution-for-hybrid-networks-in-a-multi-account-aws-environment.html)
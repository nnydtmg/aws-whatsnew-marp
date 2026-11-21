---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 が Advanced Hosted Zones の提供を開始

Amazon Route 53 now offers Advanced Hosted Zones

**What's New** | 2026-11-20T08:00:00

---

## 概要

- Amazon Route 53のAdvanced Hosted Zonesはガードレールと変更履歴によりDNS変更の事故を防ぎます。
- この機能はドメインの安全性を高めたいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Route 53 now offers Advanced Hosted Zones - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)

- **Protect your Amazon Route 53 DNS zones and records**
  [詳細](https://aws.amazon.com/blogs/networking-and-content-delivery/protect-your-amazon-route-53-dns-zones-and-records)

- **Protecting records from changes - Amazon Ro...

---

## 変更内容・新機能

Amazon Route 53はAdvanced Hosted Zonesという新しいホストゾーン層を提供します。この機能はChange Guardrails、レコードレベルの変更履歴、プライベートホストゾーンのパブリックDNSフォールバックを含みます。Change Guardrailsは使用中のレコード削除を防ぎ、違反時はリクエスト全体を拒否します。変更履歴は365日間保持され、変更内容と時期を確認できます。

---

## ユースケース

A single mistaken DNS change can take part of your domain offline, such as deleting a record that is still serving traffic or removing a delegation that resolvers are still using. To protect against this, customers build their own validation pipelines, review processes, and audit tooling. With Chang

---

## まとめ

- Amazon Route 53 now offers Advanced Hosted Zones について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)

### 関連情報

- [Amazon Route 53 now offers Advanced Hosted Zones - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)
- [Protect your Amazon Route 53 DNS zones and records](https://aws.amazon.com/blogs/networking-and-content-delivery/protect-your-amazon-route-53-dns-zones-and-records)
- [Protecting records from changes - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrset-protection.html)
- [DNS best practices for Amazon Route 53](https://aws.amazon.com/blogs/networking-and-content-delivery/dns-best-practices-for-amazon-route-53)
- [Advanced Hosted Zones - Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-tiers.html)
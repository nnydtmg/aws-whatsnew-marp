---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 がレコードセット保護をサポート

Amazon Route 53 now supports record set protection

**What's New** | 2026-11-12T08:00:00

---

## 概要

- Amazon Route 53は、重要なDNSレコードの誤変更を防ぐレコードセット保護を新たにサポートします。
- 本機能は、ホストゾーン内のレコードを直接保護したいDNS管理者に適しています。
- ゾーン頂点やMXレコード、本番エンドポイントなどを名前とタイプで直接保護でき、権限のあるユーザーが保護を解除するまで変更がブロックされます。

---

## 前提・背景

### これまでの課題

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and pr

---

### 関連する最近の動向

- **Amazon Route 53 now supports record set protection - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/20...

---

## 変更内容・新機能

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. Any change to a protected record is blocked until the protection is removed by an authorized user. Previously, to lock specific records, you had to write record-level conditions into the IAM policies of

---

## ユースケース

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. An

---

## まとめ

- Amazon Route 53 now supports record set protection について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)

### 関連情報

- [Amazon Route 53 now supports record set protection - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)
- [Protect your Amazon Route 53 DNS zones and records](https://aws.amazon.com/blogs/networking-and-content-delivery/protect-your-amazon-route-53-dns-zones-and-records)
- [Protecting records from changes - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrset-protection.html)
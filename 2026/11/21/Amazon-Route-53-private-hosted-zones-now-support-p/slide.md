---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポート

Amazon Route 53 private hosted zones now support public DNS fallback

**What's New** | 2026-11-20T08:00:00

---

## 概要

- Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックに対応し、ゾーンにない名前はパブリックDNSから解決されるようになりました。
- 一部の名前のみをプライベートに解決したいお客様にとって、レコードの同期が不要になる更新です。

---

## 前提・背景

### これまでの課題

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベート

---

### 関連する最近の動向

- **Working with private hosted zones - Amazon Route 53**
  [詳細](https://docs.aws.amazon.com/Route53/latest/Develop...

---

## 変更内容・新機能

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.example.comはパブリックDNSにのみ存在するケースでは、以前はpartner.example.comのルックアップがNXDOMAINを返していましたが、現在はパブリックDNSから解決されます。利用開始には、プライベートAdvanced Hosted Zoneを作成するか既存のプライベートホストゾーンをアップグレードし、パブリックDNSフォールバックを有効にします。Route 53コンソール、API、

---

## ユースケース

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.exampl

---

## まとめ

- Amazon Route 53 private hosted zones now support public DNS fallback について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-public-dns-fallback/)

### 関連情報

- [Working with private hosted zones - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html)
- [route53 private zone forward to public zone | AWS re:Post](https://repost.aws/questions/QUGr8txwQ1R5qfY0mBVgkdoA/route53-private-zone-forward-to-public-zone)
- [Enabling public DNS fallback for a private hosted zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-public-dns-fallback.html)
- [Route 53 Advanced Hosted Zones](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)
- [Amazon Route 53 pricing](https://aws.amazon.com/route53/pricing/)
# Amazon Route 53 がレコードセット保護をサポート

Amazon Route 53 now supports record set protection

**カテゴリ:** What's New
**公開日:** 2026-11-12T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)

このページでは、AWS What's Newで発表された「Amazon Route 53 now supports record set protection」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53は、重要なDNSレコードの誤変更を防ぐレコードセット保護を新たにサポートします。本機能は、ホストゾーン内のレコードを直接保護したいDNS管理者に適しています。ゾーン頂点やMXレコード、本番エンドポイントなどを名前とタイプで直接保護でき、権限のあるユーザーが保護を解除するまで変更がブロックされます。

## このアップデートで何が変わったか

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. Any change to a protected record is blocked until the protection is removed by an authorized user. Previously, to lock specific records, you had to write record-level conditions into the IAM policies of

## 対象ユーザー

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. An

## 活用シーン

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. An

## 詳細

Amazon Route 53 now supports record set protection, which helps DNS administrators prevent accidental changes to critical DNS records in their hosted zones. This feature allows you to protect records such as those at the zone apex, MX records, and production endpoints directly in the hosted zone. Any change to a protected record is blocked until the protection is removed by an authorized user. Previously, to lock specific records, you had to write record-level conditions into the IAM policies of every user and role that could change your hosted zones. When those policies blocked a change, the caller had no indication of whether the record was protected or why. Now you can protect records by name and type directly in the hosted zone. A single protection covers all records with that name and type, including records with different set identifiers; weighted, latency, and other routing policy records are protected together. You can also create a protection proactively before the record exists, preventing records from being created for that name and type. Each protection can include an optional comment of up to 256 characters, allowing you to indicate the reason for the protection. You can manage protections using the Route 53 console, AWS CLI, or AWS SDKs through the CreateResourceRecordSetProtections, DeleteResourceRecordSetProtections, and ListResourceRecordSetProtections API actions. To control who can remove protections, restrict the DeleteResourceRecordSetProtections permission in IAM policies. Record set protection is available in all AWS commercial Regions where public and private hosted zones are available today.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)
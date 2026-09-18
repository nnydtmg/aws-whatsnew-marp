---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS PrivateLink、ネットワークセグメントへのアクセスを実現するトンネルエンドポイントを発表

AWS PrivateLink announces Tunnel Endpoints to access network segments

**What's New** | 2026-09-18

---

## 概要

- AWS PrivateLinkにトンネルエンドポイントが追加され、ネットワークセグメントへのプライベートかつセキュアなアクセスが可能になりました。
- この機能はリソースを効率的に共有したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS PrivateLink 2026: VPC Endpoint vs Direct Connect**
  [詳細](https://k21academy.com/aws-cloud/aws-privatelink)

- **Access network segments through AWS PrivateLink**
  [詳細](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-cidr-ranges.html)

- **AWS PrivateLink, Explained**
  [詳細](https://www.megaport.com/blog/aws-privatelink-explained)

---

## 変更内容・新機能

AWS PrivateLinkのお客様は、新しいタイプのVPCエンドポイントであるトンネルエンドポイントを使用して、別のVPCやアカウントのネットワークセグメントにプライベートかつ安全にアクセスできるようになりました。お客様はネットワーク内のCIDR範囲を表すリソース設定を作成し、AWS Resource Access Managerを通じてベンダーと共有することができます。ベンダーはトンネルエンドポイントを作成し、GENEVEカプセル化を使用して顧客のVPCにトンネルし、指定されたCIDR範囲内のリソースにアクセスすることができます。このアップデートは、外部ベンダーなどの別の当事者とリソースを共有したいAWS PrivateLinkのお客様に適しています。

---

## まとめ

- AWS PrivateLink announces Tunnel Endpoints to access network segments について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/9/privatelink-tunnel-endpoint/)

### 関連情報

- [AWS PrivateLink 2026: VPC Endpoint vs Direct Connect](https://k21academy.com/aws-cloud/aws-privatelink)
- [Access network segments through AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-cidr-ranges.html)
- [AWS PrivateLink, Explained](https://www.megaport.com/blog/aws-privatelink-explained)
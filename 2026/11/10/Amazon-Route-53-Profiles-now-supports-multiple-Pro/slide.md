---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 ProfilesがVPCあたり複数プロファイルの関連付けをサポート

Amazon Route 53 Profiles now supports multiple Profiles per VPC

**What's New** | 2026-11-09T08:00:00

---

## 概要

- Amazon Route 53 Profilesは、1つのVPCに複数のプロファイルを優先度付きで関連付けられるようになりました。
- チームごとの設定分離と最小権限管理が可能になります。

---

## 前提・背景

### これまでの課題

- 新機能は、Amazon Route 53 Profilesが1つのVPCに複数のプロファイルを関連付けられるようになったことです。
- 各プロファイルに優先度を設定でき、Route 53は番号が小さいものから順に評価します。
- 共有設定とチーム固有の設定を別々のプロファイルで管理できます。
- 本更新は、設定を分担するセキュリティチームやインフラ・ネットワーク管理チームに適しています。
- 最小権限のIAM許可と組み合わせ、セキュリティ体制を強化したい組織にも有用です。
- 以前は1つのV

---

### 関連する最近の動向

- **Amazon Route 53 Profiles now supports multiple Profiles per VPC - AWS**
  [詳細](https://aws.amazon.com/about-aws...

---

## 変更内容・新機能

- 新機能は、Amazon Route 53 Profilesが1つのVPCに複数のプロファイルを関連付けられるようになったことです。
- 各プロファイルに優先度を設定でき、Route 53は番号が小さいものから順に評価します。
- 共有設定とチーム固有の設定を別々のプロファイルで管理できます。
- 本更新は、設定を分担するセキュリティチームやインフラ・ネットワーク管理チームに適しています。
- 最小権限のIAM許可と組み合わせ、セキュリティ体制を強化したい組織にも有用です。
- 以前は1つのVPCに1つのProfileしか関連付けられませんでした。たとえばセキュリティチームがDNS Firewallルールグループを管理し、クラウドインフラ・ネットワーク管理チームがプライベートホスティッドゾーンやResolver転送ルールを管理する場合でも、全てのチームが1つのProfileを共有して資源を関連付ける必要がありました。
- 2026年3月にリリースされたgranular IAM権限と組み合わせることで、各チームが自分のProfileを最小権限で所有・管理でき、セキュリティ体制が向上しま

---

## 効果・メリット

- - 新機能は、Amazon Route 53 Profilesが1つのVPCに複数のプロファイルを関連付けられるようになったことです。
- - 各プロファイルに優先度を設定でき、Route 53は番号が小さいものから順に評価します。
- - 共有設定とチーム固有の設定を別々のプロファイルで管理できます。

---

## まとめ

- Amazon Route 53 Profiles now supports multiple Profiles per VPC について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-profiles-multiple-per-vpc/)

### 関連情報

- [Amazon Route 53 Profiles now supports multiple Profiles per VPC - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-profiles-multiple-per-vpc/)
- [Unify DNS management using Amazon Route 53 Profiles with multiple VPCs and AWS accounts](https://aws.amazon.com/blogs/aws/unify-dns-management-using-amazon-route-53-profiles-with-multiple-vpcs-and-aws-accounts)
- [Achieve least-privilege access for Amazon Route 53 Profiles](https://aws.amazon.com/blogs/networking-and-content-delivery/achieve-least-privilege-access-for-amazon-route-53-profiles)
- [Using Amazon Route 53 Profiles for scalable multi-account AWS environments](https://aws.amazon.com/blogs/networking-and-content-delivery/using-amazon-route-53-profiles-for-scalable-multi-account-aws-environments)
- [Amazon Route 53 Profiles now supports granular IAM permissions for resource and VPC associations](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-profiles-granular-iam)
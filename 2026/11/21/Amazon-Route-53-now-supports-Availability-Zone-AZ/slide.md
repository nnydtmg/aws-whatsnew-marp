---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 が AZ アフィニティルーティングをサポート

Amazon Route 53 now supports Availability Zone (AZ) affinity routing

**What's New** | 2026-11-20T08:21:00

---

## 概要

- Amazon Route 53は、同一AZへDNSクエリを誘導するAZアフィニティルーティングを新たに提供し、レイテンシー低減と性能向上を実現いたします。
- 本機能は、同一AZ内通信や低遅延を重視するお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS NLB AZ DNS affinity | AWS re:Post**
  [詳細](https://repost.aws/questions/QUekjUUCa6SYKTUrXoJsZNog/aws-nlb-az-dns-affinity)

- **Improving Performance and Reducing Cost Using Availability Zone Affinity | AWS Architecture Blog**
  [詳細](https://aws.amazon.com/blogs/architecture/improving-performance-and-reducing-cost-using-availability-zone-affinity)

- **Choosing a routing poli...

---

## 変更内容・新機能

- Amazon Route 53は、Availability Zone（AZ）アフィニティルーティングを新たにサポートいたしました。
- 本機能は、VPC内クライアントからのDNSクエリを同一AZ内のリソースへルーティングいたします。
- トラフィックを同一AZ内に維持し、レイテンシーの低減とアプリケーション性能の向上を実現いたします。
- 該当AZにレコードがない場合は、ゾーングループ、AWSリージョン、グローバルの順にフォールバックいたします。
- ヘルスチェックの関連付けが可能で、パブリックおよびプライベートホストゾーンの双方でご利用いただけます。
- 本アップデートは、低レイテンシーや同一AZ内通信を求めるお客様に適しております。

---

## 効果・メリット

- - Amazon Route 53は、Availability Zone（AZ）アフィニティルーティングを新たにサポートいたしました。
- - 本機能は、VPC内クライアントからのDNSクエリを同一AZ内のリソースへルーティングいたします。
- - トラフィックを同一AZ内に維持し、レイテンシーの低減とアプリケーション性能の向上を実現いたします。

---

## まとめ

- Amazon Route 53 now supports Availability Zone (AZ) affinity routing について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-affinity-routing/)

### 関連情報

- [AWS NLB AZ DNS affinity | AWS re:Post](https://repost.aws/questions/QUekjUUCa6SYKTUrXoJsZNog/aws-nlb-az-dns-affinity)
- [Improving Performance and Reducing Cost Using Availability Zone Affinity | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/improving-performance-and-reducing-cost-using-availability-zone-affinity)
- [Choosing a routing policy - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)
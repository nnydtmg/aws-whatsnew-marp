# Amazon Route 53 が AZ アフィニティルーティングをサポート

Amazon Route 53 now supports Availability Zone (AZ) affinity routing

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:21:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-affinity-routing/)

このページでは、AWS What's Newで発表された「Amazon Route 53 now supports Availability Zone (AZ) affinity routing」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53は、同一AZへDNSクエリを誘導するAZアフィニティルーティングを新たに提供し、レイテンシー低減と性能向上を実現いたします。本機能は、同一AZ内通信や低遅延を重視するお客様に適しております。

## このアップデートで何が変わったか

- Amazon Route 53は、Availability Zone（AZ）アフィニティルーティングを新たにサポートいたしました。
- 本機能は、VPC内クライアントからのDNSクエリを同一AZ内のリソースへルーティングいたします。
- トラフィックを同一AZ内に維持し、レイテンシーの低減とアプリケーション性能の向上を実現いたします。
- 該当AZにレコードがない場合は、ゾーングループ、AWSリージョン、グローバルの順にフォールバックいたします。
- ヘルスチェックの関連付けが可能で、パブリックおよびプライベートホストゾーンの双方でご利用いただけます。
- 本アップデートは、低レイテンシーや同一AZ内通信を求めるお客様に適しております。

## 詳細

- Amazon Route 53は、Availability Zone（AZ）アフィニティルーティングを新たにサポートいたしました。
- 本機能は、VPC内クライアントからのDNSクエリを同一AZ内のリソースへルーティングいたします。
- トラフィックを同一AZ内に維持し、レイテンシーの低減とアプリケーション性能の向上を実現いたします。
- 該当AZにレコードがない場合は、ゾーングループ、AWSリージョン、グローバルの順にフォールバックいたします。
- ヘルスチェックの関連付けが可能で、パブリックおよびプライベートホストゾーンの双方でご利用いただけます。
- 本アップデートは、低レイテンシーや同一AZ内通信を求めるお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-affinity-routing/)
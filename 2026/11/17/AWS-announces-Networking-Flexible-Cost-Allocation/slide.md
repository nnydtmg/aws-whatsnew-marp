---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon VPC で Networking Flexible Cost Allocation が利用可能に

AWS announces Networking Flexible Cost Allocation for Amazon VPC

**What's New** | 2026-11-16T08:00:00

---

## 概要

- Amazon VPCにNetworking Flexible Cost Allocation（FCA）が追加され、共有ネットワーキングコストを実際に発生させたリソース単位で分割表示できるようになりました。
- 複数チームでNATゲートウェイなどのリソースを共有するお客様の正確なコスト把握に役立ちます。
- CURでは1行で表示されていたネットワーキング使用量をリソースごとに分割し、カスタムスクリプトや固定割合按分が不要になります。
- 請求額自体は変更せず、レポート上の表示のみが変わります。

---

## 前提・背景

### 関連する最近の動向

- **Networking Flexible Cost Allocation - Amazon Virtual Private Cloud**
  [詳細](https://docs.aws.amazon.com/vpc/latest/userguide/networking-flexible-cost-allocation.html)

- **AWS announces Networking Flexible Cost Allocation for Amazon VPC**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/networking-flexible-cost-allocation/)

- **Introducing Flexible Cost Allocation for ...

---

## 変更内容・新機能

【重要な特徴】
- FCAはレポート上の表示方法のみを変更し、請求額と総費用は変わらない
- 追加料金なし
- トラフィックのルーティングや計量に影響なし
- 逆効力の適用はない
- 関連付けの有効化は作成後60分を起こし次の正時以降

【提供リージョン】
- 追加料金なしで利用可能
- Middle East (Bahrain)、Middle East (UAE)を除くすべてのAWS商用リージョン
- 中国リージョンでも利用可能
- AWS GovCloud (US) リージョンでは未提供

---

## まとめ

- AWS announces Networking Flexible Cost Allocation for Amazon VPC について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/networking-flexible-cost-allocation/)

### 関連情報

- [Networking Flexible Cost Allocation - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/networking-flexible-cost-allocation.html)
- [AWS announces Networking Flexible Cost Allocation for Amazon VPC](https://aws.amazon.com/about-aws/whats-new/2026/11/networking-flexible-cost-allocation/)
- [Introducing Flexible Cost Allocation for AWS Transit Gateway](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-flexible-cost-allocation-for-aws-transit-gateway)
- [Finally! AWS Transit Gateway Gets Flexible Cost Allocation](https://sjramblings.io/aws-transit-gateway-flexible-cost-allocation)
- [Amazon VPC Pricing: 4 Charges Hiding Behind the Free VPC](https://cloudburn.io/blog/amazon-vpc-pricing)
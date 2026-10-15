---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront が VPC オリジンのデュアルスタックをサポート

Amazon CloudFront announces dual-stack support for VPC origins

**What's New** | 2026-10-15T16:00:00

---

## 概要

- Amazon CloudFrontのデュアルスタックVPCオリジン機能により、お客様はセキュリティを維持したままエンドツーエンドのIPv6を利用できます。

---

## 前提・背景

### これまでの課題

Amazon CloudFrontはVPCオリジン向けのデュアルスタックサポートを発表し、プライベートオリジンへのエンドツーエンドIPv6配信を可能にします。このアップデートは、IPv6アーキテクチャと規制要件を満たしつつオリジンをプライベートに保ちたいお客様に適しています。以前は公開オリジンのみデュアルスタックに対応し、VPCオリジンへはIPv4のみ接続していました。お客様は、IPv6対応のためオリジンを公開サブネットに移動してVPCオリジンのセキュリティを放棄するか、プライベートなままIPv

---

### 関連する最近の動向

- **Amazon CloudFront announces dual-stack support for VPC origins**
  [詳細](https://aws.amazon.com/about-aws/whats-...

---

## 変更内容・新機能

Amazon CloudFrontはVPCオリジン向けのデュアルスタックサポートを発表し、プライベートオリジンへのエンドツーエンドIPv6配信を可能にします。このアップデートは、IPv6アーキテクチャと規制要件を満たしつつオリジンをプライベートに保ちたいお客様に適しています。以前は公開オリジンのみデュアルスタックに対応し、VPCオリジンへはIPv4のみ接続していました。お客様は、IPv6対応のためオリジンを公開サブネットに移動してVPCオリジンのセキュリティを放棄するか、プライベートなままIPv4にとどまるかのトレードオフに直面していました。今回のロンチで、VPCオリジンをデュアルスタックに設定することで、セキュリティを犠牲にせずエンドツーエンドIPv6を実現できます。ALB、NLB、EC2インスタンスをプライベートサブネットに置きながらIPv6トラフィックを送信可能です。VPCオリジンがサポートされているすべてのAWS商用リージョンで利用可能で、追加費用はありません。

---

## まとめ

- Amazon CloudFront announces dual-stack support for VPC origins について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-vpc-origin-dualstack/)

### 関連情報

- [Amazon CloudFront announces dual-stack support for VPC origins](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-vpc-origin-dualstack/)
- [Amazon CloudFront announces support for IPv6 origins](https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-cloudfront-ipv6-origins)
- [Amazon CloudFront now supports IPv6 origins for end-to-end IPv6 delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-now-supports-ipv6-origins-for-end-to-end-ipv6-delivery)
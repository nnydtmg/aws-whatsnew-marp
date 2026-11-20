---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontがSaaS Manager向けドメイン無停止移行をサポート

Amazon CloudFront simplifies domain moves and onboarding for SaaS Manager

**What's New** | 2026-11-19T20:22:00

---

## 概要

- Amazon CloudFrontは、SaaSプロバイダーがお客様ドメインを無停止で移行し、証明書設定中も配信できる新機能を提供します。
- ウェブ開発プラットフォームやSaaSプロバイダーは、単一リクエストでお客様ドメインを自社プラットフォームへダウンタイムなしに移行でき、TLS証明書の設定中もドメインへのリクエストを配信できます。
- CloudFrontのマルチテナントディストリビューションにより、多数のお客様ドメインを1つの共有設定から配信できます。
- これらの機能はすべてのエッジ...

---

## 前提・背景

### これまでの課題

Amazon CloudFrontは、ウェブ開発プラットフォームおよびSaaSプロバイダーがお客様ドメインを単一リクエストでダウンタイムなしに自社プラットフォームへ移行し、TLS証明書の設定中もドメインへのリクエストを配信できるようになりました。CloudFrontのマルチテナントディストリビューションにより、多数のお客様ドメインを1つの共有設定から配信できます。これらの機能を組み合わせることで、既存のAWSお客様をトラフィックに影響を与えることなくマルチテナントディストリビューションへ移行でき

---

### 関連する最近の動向

- **From ingress-nginx to the edge: Migrating 1,000+ Websites to CloudFront SaaS Manager**
  [詳細](https://builder.a...

---

## 変更内容・新機能

Amazon CloudFrontは、ウェブ開発プラットフォームおよびSaaSプロバイダーがお客様ドメインを単一リクエストでダウンタイムなしに自社プラットフォームへ移行し、TLS証明書の設定中もドメインへのリクエストを配信できるようになりました。CloudFrontのマルチテナントディストリビューションにより、多数のお客様ドメインを1つの共有設定から配信できます。これらの機能を組み合わせることで、既存のAWSお客様をトラフィックに影響を与えることなくマルチテナントディストリビューションへ移行できます。従来、すでに使用中のドメインを移行するには、元のディストリビューションを無効化する、ワイルドカードの回避策を使う、またはAWSサポートに連絡する必要がありました。今後は、テナントの作成または更新の一環として、お客様ドメインをマルチテナント構成に取り込めます。新しいOnDomainTakeoverオプションにより、CloudFrontはDNSレコードでドメイン所有権を確認したうえで、1つまたは複数のドメインを単一リクエストで移行します。これは同一AWSアカウント内でもアカウントをまたいでも動

---

## まとめ

- Amazon CloudFront simplifies domain moves and onboarding for SaaS Manager について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-domain-moves-distribution-tenants)

### 関連情報

- [From ingress-nginx to the edge: Migrating 1,000+ Websites to CloudFront SaaS Manager](https://builder.aws.com/content/3ABa1Qo4YuBYMuW8olzp3ZWEqrG/from-ingress-nginx-to-the-edge-migrating-1000-websites-to-cloudfront-saas-manager)
- [Goodbye Distribution Sprawl: How CloudFront SaaS Manager Streamlines Multi-Domain Delivery](https://aws.plainenglish.io/title-goodbye-distribution-sprawl-how-cloudfront-saas-manager-streamlines-multi-domain-delivery-5d71bb411a37)
- [Scale your SaaS application at the edge with the new Amazon CloudFront SaaS Manager](https://aws.amazon.com/blogs/networking-and-content-delivery/scale-your-saas-application-at-the-edge-with-the-new-amazon-cloudfront-saas-manager)
- [Reduce your operational overhead today with Amazon CloudFront SaaS Manager](https://aws.amazon.com/blogs/aws/reduce-your-operational-overhead-today-with-amazon-cloudfront-saas-manager)
- [Amazon CloudFront simplifies domain moves and onboarding for SaaS Manager](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-domain-moves-distribution-tenants)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront の定額料金プランが API で管理可能に

Amazon CloudFront announces API support for flat-rate pricing plans

**What's New** | 2026-09-03

---

## 概要

- Amazon CloudFrontの定額料金プランをAPIおよびIaCでプログラム管理できるようになりました。
- 有料プランは承認後に課金が開始される二段階フローに対応しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudFront Pricing 2026: Rates, Plans & Cost Guide**
  [詳細](https://perfsys.com/blog/cloudfront-pricing-guide)

- **Amazon CloudFront Pricing 2026 | Costs Plans & Savings Guide**
  [詳細](https://go-cloud.io/amazon-cloudfront-pricing)

- **Understanding CloudFront Flat-Rate Pricing Plans**
  [詳細](https://repost.aws/articles/ARW8IO6PlQQsW9F33olXhG0w/understanding-cloudfront-flat-rate-pricing-plans-predictable-cdn-and-data-transfer-costs)

---

## 変更内容・新機能

新機能は、Amazon CloudFrontの定額料金プランをAWS CLI、AWS SDK、CloudFormation、CDK、またはPricingPlanManager APIでプログラムから購読および管理できるようになったことです。本アップデートは、APIやIaCでディストリビューションを管理するお客様、およびインフラを自動プロビジョニングするワークフローやエージェントに適しております。

---

## まとめ

- Amazon CloudFront announces API support for flat-rate pricing plans について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudfront-flat-rate-pricing-plans-api/)

### 関連情報

- [Amazon CloudFront Pricing 2026: Rates, Plans & Cost Guide](https://perfsys.com/blog/cloudfront-pricing-guide)
- [Amazon CloudFront Pricing 2026 | Costs Plans & Savings Guide](https://go-cloud.io/amazon-cloudfront-pricing)
- [Understanding CloudFront Flat-Rate Pricing Plans](https://repost.aws/articles/ARW8IO6PlQQsW9F33olXhG0w/understanding-cloudfront-flat-rate-pricing-plans-predictable-cdn-and-data-transfer-costs)
- [AWS CloudFront Pricing: Cost Per GB, Tiers and Real Examples](https://blog.blazingcdn.com/en-us/what-is-the-price-per-gb-of-aws-cloudfront-cdn)
- [CloudFront Pricing in 2026: Costs, Fees, and CDNsun Comparison](https://blog.cdnsun.com/cloudfront-pricing)
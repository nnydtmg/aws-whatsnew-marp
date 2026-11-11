---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon SESがメールID・テナント・設定セットの上限を引き上げ

Amazon SES now supports higher limits for email identities, tenants, and configuration sets

**What's New** | 2026-11-11T08:00:00

---

## 概要

- Amazon SESはメールID、テナント、設定セットの上限を引き上げ、単一アカウントでマルチテナントワークロードの成長に対応できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Tenants - Amazon Simple Email Service**
  [詳細](https://docs.aws.amazon.com/ses/latest/dg/tenants.html)

- **How Amazon SES’s New Multi-Tenancy Changes the Game for SaaS Platforms**
  [詳細](https://www.linkedin.com/pulse/how-amazon-sess-new-multi-tenancy-changes-game-saas-platforms-meyi-aoxwc)

- **Improve email deliverability with tenant management in Amazon SES**
  [詳細](https://...

---

## 変更内容・新機能

-新機能は、Amazon SESにおけるメールID、テナント、および設定セットの上限引き上げです。
- AWS Service Quotasコンソールで使用状況の確認と上限引き上げのリクエストが可能になりました。
- 単一アカウントで成長に対応でき、名前またはステータスによるリソース検索も可能になりました。
- 本アップデートは、顧客、ブランド、AIエージェントごとにリソースを作成するマルチテナントワークロードのお客様に適しています。

---

## まとめ

- Amazon SES now supports higher limits for email identities, tenants, and configuration sets について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ses-higher-resource-limits/)

### 関連情報

- [Tenants - Amazon Simple Email Service](https://docs.aws.amazon.com/ses/latest/dg/tenants.html)
- [How Amazon SES’s New Multi-Tenancy Changes the Game for SaaS Platforms](https://www.linkedin.com/pulse/how-amazon-sess-new-multi-tenancy-changes-game-saas-platforms-meyi-aoxwc)
- [Improve email deliverability with tenant management in Amazon SES](https://aws.amazon.com/blogs/messaging-and-targeting/improve-email-deliverability-with-tenant-management-in-amazon-ses)
- [How to implement multi tenancy with Amazon SES](https://aws.amazon.com/blogs/messaging-and-targeting/how-to-manage-email-sending-for-multiple-end-customers-using-amazon-ses)
- [Implement Tenants in your Amazon SES environment, Part 3](https://aws.amazon.com/blogs/messaging-and-targeting/implement-tenants-in-your-amazon-ses-environment-part-3-implementation-guide)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Billing and Cost ManagementがListBillingViewSegments APIで請求コンテキストを提供

AWS Billing and Cost Management now provides billing context for your account through a new API

**What's New** | 2026-09-25T00:58:00

---

## 概要

- AWS Billing and Cost Managementに、指定期間の請求コンテキストを返すListBillingViewSegments APIが追加されました。
- 本APIは請求階層や料金設定の変化をセグメント単位で把握でき、すべての商用リージョンで追加料金なしでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Billing and Cost Management now provides billing context for your account through a new API**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-billing-and-cost-management-billing-context-api)

- **Welcome - AWS Billing and Cost Management**
  [詳細](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html)

- **What is AWS Billing and Cost ...

---

## 変更内容・新機能

- 新機能は、指定期間のアカウントの請求コンテキストを返すListBillingViewSegments APIです。
- 請求階層上の位置づけ、請求関係の管理アカウント、料金設定を取得できます。
- 請求コンテキストのみを返し、期間途中の変更は時間セグメントに分割します。
- すべての商用AWSリージョンで追加料金なしでご利用いただけます。
- 本アップデートは、請求階層の変化を把握したい管理者やBilling Conductor利用者に適しています。
- AIエージェント経由で請求コンテキストを取得したいお客様にも有用です。

---

## まとめ

- AWS Billing and Cost Management now provides billing context for your account through a new API について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-billing-and-cost-management-billing-context-api/)

### 関連情報

- [AWS Billing and Cost Management now provides billing context for your account through a new API](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-billing-and-cost-management-billing-context-api)
- [Welcome - AWS Billing and Cost Management](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html)
- [What is AWS Billing and Cost Management?](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)
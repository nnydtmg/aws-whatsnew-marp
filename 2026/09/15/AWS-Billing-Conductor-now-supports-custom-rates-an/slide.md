---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Billing Conductorがカスタムレートと使用量ティアの料金設定に対応

AWS Billing Conductor now supports custom rates and usage tier pricing configurations

**What's New** | 2026-09-15T18:58:00

---

## 概要

- AWS Billing Conductorがカスタムレートおよびカスタム使用量ティアの料金設定に対応し、商業契約に基づく正確なプロフォーマ請求のモデル化が可能になりました。
- 本機能は子会社やエンドカスタマーとの契約を反映したいお客様およびパートナー様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Billing Conductor Pricing Calculator & Guide (Sep 2026)**
  [詳細](https://costgoat.com/pricing/aws-billing-conductor)

- **Pricing**
  [詳細](https://aws.amazon.com/aws-cost-management/aws-billing-conductor/pricing)

- **Pricing rules - AWS Billing Conductor**
  [詳細](https://docs.aws.amazon.com/billingconductor/latest/userguide/create-pricingrule.html)

---

## 変更内容・新機能

- 新機能として、AWS Billing ConductorはAWSサービスのカスタムレート料金設定と、希望する使用量に応じたカスタム使用量ティアの定義をサポートするようになりました。
- SKUスコープの料金ルールを用いることで、パブリックオンデマンド料金からのマークアップやマークダウンではなく、カスタムレートと使用量ティアのしきい値を直接設定できます。
- これにより、パブリックオンデマンド料金に対するパーセンテージベースの計算が不要となり、プロフォーマ請求設定を正確に制御できます。
- 本アップデートは、子会社、関連会社、またはエンドカスタマーとの商業契約をモデル化するAWS Billing Conductorをご利用のお客様およびパートナー様に適しております。
- 交渉済みの料金をプロフォーマ請求データにより容易に反映したいお客様にとって有用です。

---

## まとめ

- AWS Billing Conductor now supports custom rates and usage tier pricing configurations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/AWS-Billing-Conductor-custom-rates-usage-tier)

### 関連情報

- [AWS Billing Conductor Pricing Calculator & Guide (Sep 2026)](https://costgoat.com/pricing/aws-billing-conductor)
- [Pricing](https://aws.amazon.com/aws-cost-management/aws-billing-conductor/pricing)
- [Pricing rules - AWS Billing Conductor](https://docs.aws.amazon.com/billingconductor/latest/userguide/create-pricingrule.html)
- [AWS Billing Conductor – Amazon Web Services](https://aws.amazon.com/aws-cost-management/aws-billing-conductor)
- [AWS announces enhanced custom line item controls for AWS Billing Conductor - AWS](https://aws.amazon.com/about-aws/whats-new/2025/12/enhanced-custom-line-item-controls-aws-billing-conductor)
# CUR 2.0とCost Explorerに標準コスト・レート列が追加

AWS launches standardized cost and rate columns in CUR 2.0 and Cost Explorer

**カテゴリ:** What's New
**公開日:** 2026-11-20T14:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cur-cost-explorer/)

このページでは、AWS What's Newで発表された「AWS launches standardized cost and rate columns in CUR 2.0 and Cost Explorer」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

CUR 2.0およびCost Explorerに標準化されたコストおよびレート列が追加され、購入オプションを問わず節約額と償却コストを一貫して分析できるようになりました。本機能は追加料金なしでご利用いただけます。

## このアップデートで何が変わったか

CUR 2.0およびCost Explorerに標準化されたコストおよびレート列が追加され、購入オプションを問わず節約額と償却コストを一貫して分析できるようになりました。本機能は追加料金なしでご利用いただけます。

## 対象ユーザー

AWS Data Exports for Cost and Usage Report (CUR) 2.0 now includes standardized cost and rate columns that represent cost consistently across AWS purchase options, including On Demand, Savings Plans, Reserved Instances, EC2 Spot, and EC2 Capacity Blocks for ML. These 14 columns are added when you ena

## 詳細

AWS Data Exports for Cost and Usage Report (CUR) 2.0 now includes standardized cost and rate columns that represent cost consistently across AWS purchase options, including On Demand, Savings Plans, Reserved Instances, EC2 Spot, and EC2 Capacity Blocks for ML. These 14 columns are added when you enable Include Standardized cost and rate columns while setting up a new CUR 2.0 export or editing an existing CUR 2.0 and these columns have the prefix cost_analytics_. With these new columns, you can quantify the savings you realize from commitments, discounts, and tiered pricing, and analyze amortized cost the same way for every pricing model with multiple payment options, directly in CUR 2.0. Previously, calculating savings required combining CUR with Savings Plans rates and public price lists, and amortized cost used different columns for each pricing model. Now each line item carries billed, effective, list, contracted, public on-demand cost, the public equivalent of billed and effective cost before discounts, and a rate for each, so you can measure savings and amortized cost without building your own calculations. To add the columns, select Include standardized cost and rate columns when you create or edit a CUR 2.0 export. In Cost Explorer, choose the new cost types under Advanced options to see the same costs. Standardized cost and rate columns are available at no additional charge in all AWS Regions except the AWS GovCloud (US) Regions and the China Regions.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cur-cost-explorer/)
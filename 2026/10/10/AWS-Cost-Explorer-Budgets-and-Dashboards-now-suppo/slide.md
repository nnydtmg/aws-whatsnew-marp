---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cost Explorer、Budgets、DashboardsがAmazon Bedrockの製品属性をサポート

AWS Cost Explorer, Budgets, and Dashboards now support Amazon Bedrock product attributes

**What's New** | 2026-10-08T18:51:00

---

## 概要

- AWS Cost Explorer、Budgets、DashboardsでAmazon Bedrockの製品属性によるコスト分析が可能になり、財務・プラットフォームチームがモデル別の支出を既存ツールで把握できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Introducing granular cost attribution for Amazon Bedrock**
  [詳細](https://aws.amazon.com/blogs/machine-learning/introducing-granular-cost-attribution-for-amazon-bedrock)

- **Amazon Bedrock now supports cost allocation by IAM user and role**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-iam-cost-allocation)

- **Track generative AI costs with Amazon Bedrock i...

---

## 変更内容・新機能

AWS Cost Explorer、AWS Budgets、およびAWS Cost Management Dashboardsが、Amazon Bedrockの製品属性によるコスト分析を新たにサポート。モデル（Claude Sonnet 5、Claude Haiku 4.5など）、モデルプロバイダー（Anthropic、Cohereなど）、推論タイプ（入力トークン、出力トークン）、機能（オンデマンド推論、rerankerなど）といったディメンションでBedrockのコストを分類可能。Cost ExplorerとDashboardsでは属性によるグループ化とフィルタリングが可能で、Budgetsでは同じ属性で予算をフィルタリング可能。アプリケーション推論プロファイル、プロジェクト、ワークスペースのコスト配分タグやIAMプリンシパルタグと組み合わせることも可能。追加料金なしで全AWSリージョンで利用可能（GovCloud（US）および中国リージョンを除く）。財務チームおよびプラットフォームチーム向け。

---

## まとめ

- AWS Cost Explorer, Budgets, and Dashboards now support Amazon Bedrock product attributes について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-bedrock-attributes-in-cost-explorer/)

### 関連情報

- [Introducing granular cost attribution for Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/introducing-granular-cost-attribution-for-amazon-bedrock)
- [Amazon Bedrock now supports cost allocation by IAM user and role](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-iam-cost-allocation)
- [Track generative AI costs with Amazon Bedrock inference profiles](https://aws.amazon.com/blogs/architecture/track-generative-ai-costs-with-amazon-bedrock-inference-profiles)
- [Track usage and costs in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/cost-management.html)
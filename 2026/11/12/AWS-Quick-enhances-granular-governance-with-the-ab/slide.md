---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Quickが構造化データソースの制限機能を発表、きめ細かなガバナンスを強化

AWS Quick enhances granular governance with the ability to restrict structured data sources

**What's New** | 2026-11-12T09:00:00

---

## 概要

- AWS Quickは、管理者がデータソースの作成・更新・共有をきめ細かく制限できる構造化データコネクタ制限機能を一般提供しました。
- 本機能は、ガバナンスとセルフサービス分析の両立を求める組織に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Establishing enterprise governance in Amazon Quick using custom permissions | AWS Business Intelligence Blog**
  [詳細](https://aws.amazon.com/blogs/business-intelligence/establishing-enterprise-governance-in-amazon-quick-using-custom-permissions)

- **Automate governance of Amazon Quick features using custom permissions**
  [詳細](https://community.amazonquicksight.com/t/automate-g...

---

## 変更内容・新機能

AWS Quickは、カスタム権限による構造化データコネクタ制限機能の一般提供を発表しました。管理者は、ユーザーが作成、更新、または共有できるデータソースの種類をきめ細かく制御できます。Enterprise editionでは、Quick UI、API、またはAWS Command Line Interfaceからカスタム権限プロファイルを設定できます。例えば、Amazon Redshiftデータソースの作成は許可し、ファイルアップロードデータソースの作成は制限するといった運用が可能です。作成、更新、共有の制限は独立して構成でき、特定コネクタのみの制限も可能です。全データソース種別に一律適用される制限より精度な制御が可能になりました。本機能はAWS Quickがサポートするすべてのリージョンで利用可能です。データガバナンスを強化しつつセルフサービス分析を推進したい組織の管理者に適しています。

---

## ユースケース

AWS Quickは、カスタム権限による構造化データコネクタ制限機能の一般提供を発表しました。管理者は、ユーザーが作成、更新、または共有できるデータソースの種類をきめ細かく制御できます。Enterprise editionでは、Quick UI、API、またはAWS Command Line Interfaceからカスタム権限プロファイルを設定できます。例えば、Amazon Redshiftデータソースの作成は許可し、ファイルアップロードデータソースの作成は制限するといった運用が可能です。作成、更新、共有の制限は独立して構成でき、特定コネクタのみの制限も可能です。全データソース種別に一律適用さ

---

## まとめ

- AWS Quick enhances granular governance with the ability to restrict structured data sources について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-structured-data-source-restrictions/)

### 関連情報

- [Establishing enterprise governance in Amazon Quick using custom permissions | AWS Business Intelligence Blog](https://aws.amazon.com/blogs/business-intelligence/establishing-enterprise-governance-in-amazon-quick-using-custom-permissions)
- [Automate governance of Amazon Quick features using custom permissions](https://community.amazonquicksight.com/t/automate-governance-of-amazon-quick-suite-features-using-custom-permissions/50104)
- [Bring structured and unstructured data together with Amazon Quick](https://aws.amazon.com/blogs/machine-learning/bring-structured-and-unstructured-data-together-with-amazon-quick)
- [Custom permissions - AWS Quick User Guide](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions.html)
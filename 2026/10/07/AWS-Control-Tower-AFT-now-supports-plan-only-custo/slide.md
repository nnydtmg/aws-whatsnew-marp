---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Control Tower AFTがplan-onlyカスタマイズ実行をサポート

AWS Control Tower AFT now supports plan-only customization runs

**What's New** | 2026-10-05T19:31:00

---

## 概要

- AWS Control Tower Account Factory for Terraform（AFT）がプランのみのカスタマイズ実行をサポートするようになりました。
- 管理者は適用前にTerraformの変更をプレビューでき、安全な事前検証とドリフト検出が可能になります。

---

## 前提・背景

### これまでの課題

AWS Control Tower Account Factory for Terraform（AFT）がplan-only（読み取り専用）のカスタマイズ実行をサポートします。これまでカスタマイズの実行は常にフルのTerraform applyをトリガーし、変更を事前にプレビューする方法がありませんでした。これにより、想定どおりの結果の検証や意図しない構成ドリフトの検出が大規模ロールアウト前に困難でした。plan-only実行では、管理者はグローバルおよびアカウントカスタマイズに対してTerra

---

### 関連する最近の動向

- **AWS Control Tower AFT now supports plan-only customization runs - AWS**
  [詳細](https://aws.amazon.com/about-aws...

---

## 変更内容・新機能

AWS Control Tower Account Factory for Terraform（AFT）がplan-only（読み取り専用）のカスタマイズ実行をサポートします。これまでカスタマイズの実行は常にフルのTerraform applyをトリガーし、変更を事前にプレビューする方法がありませんでした。これにより、想定どおりの結果の検証や意図しない構成ドリフトの検出が大規模ロールアウト前に困難でした。plan-only実行では、管理者はグローバルおよびアカウントカスタマイズに対してTerraform planをトリガーし、変更を適用せずにプレビューできます。この機能は安全な事前検証、ドリフト検出、CI/CDレビューワークフローへの統合をサポートします。すべてのAFT対応Terraformディストリビューション（オープンソース、Terraform Cloud、Terraform Enterprise）で利用可能です。

この機能はAWS Control Tower Account Factory for TerraformがサポートされているすべてのAWSリージョンで利用可能です。

---

## まとめ

- AWS Control Tower AFT now supports plan-only customization runs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)

### 関連情報

- [AWS Control Tower AFT now supports plan-only customization runs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)
- [Release 1.22.0 · aws-ia/terraform-aws-control_tower_account_factory](https://github.com/aws-ia/terraform-aws-control_tower_account_factory/releases/tag/1.22.0)
- [Overview of AWS Control Tower Account Factory for Terraform (AFT)](https://docs.aws.amazon.com/controltower/latest/userguide/aft-overview.html)
- [Account customizations - AWS Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/aft-account-customization-options.html)
# AWS Control Tower AFTがplan-onlyカスタマイズ実行をサポート

AWS Control Tower AFT now supports plan-only customization runs

**カテゴリ:** What's New
**公開日:** 2026-10-05T19:31:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)

このページでは、AWS What's Newで発表された「AWS Control Tower AFT now supports plan-only customization runs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Control Tower Account Factory for Terraform（AFT）がプランのみのカスタマイズ実行をサポートするようになりました。管理者は適用前にTerraformの変更をプレビューでき、安全な事前検証とドリフト検出が可能になります。

## このアップデートで何が変わったか

AWS Control Tower Account Factory for Terraform（AFT）がplan-only（読み取り専用）のカスタマイズ実行をサポートします。これまでカスタマイズの実行は常にフルのTerraform applyをトリガーし、変更を事前にプレビューする方法がありませんでした。これにより、想定どおりの結果の検証や意図しない構成ドリフトの検出が大規模ロールアウト前に困難でした。plan-only実行では、管理者はグローバルおよびアカウントカスタマイズに対してTerraform planをトリガーし、変更を適用せずにプレビューできます。この機能は安全な事前検証、ドリフト検出、CI/CDレビューワークフローへの統合をサポートします。すべてのAFT対応Terraformディストリビューション（オープンソース、Terraform Cloud、Terraform Enterprise）で利用可能です。

この機能はAWS Control Tower Account Factory for TerraformがサポートされているすべてのAWSリージョンで利用可能です。

## 対象ユーザー

AWS Control Tower Account Factory for Terraform（AFT）がplan-only（読み取り専用）のカスタマイズ実行をサポートします。これまでカスタマイズの実行は常にフルのTerraform applyをトリガーし、変更を事前にプレビューする方法がありませんでした。これにより、想定どおりの結果の検証や意図しない構成ドリフトの検出が大規模ロールアウト前に困難でした。plan-only実行では、管理者はグローバルおよびアカウントカスタマイズに対してTerraform planをトリガーし、変更を適用せずにプレビューできます。この機能は安全な事前検証、ドリフ

## 詳細

AWS Control Tower Account Factory for Terraform（AFT）がplan-only（読み取り専用）のカスタマイズ実行をサポートします。これまでカスタマイズの実行は常にフルのTerraform applyをトリガーし、変更を事前にプレビューする方法がありませんでした。これにより、想定どおりの結果の検証や意図しない構成ドリフトの検出が大規模ロールアウト前に困難でした。plan-only実行では、管理者はグローバルおよびアカウントカスタマイズに対してTerraform planをトリガーし、変更を適用せずにプレビューできます。この機能は安全な事前検証、ドリフト検出、CI/CDレビューワークフローへの統合をサポートします。すべてのAFT対応Terraformディストリビューション（オープンソース、Terraform Cloud、Terraform Enterprise）で利用可能です。

AFT 1.22.0の主な変更点:
- aft-invoke-customizationsステートマシンの入力に "plan_only": true を渡すことでplan-only実行をトリガー
- Terraform Cloud/Enterpriseパスでは、planのJSON出力をAFT管理アカウント内の専用暗号化S3バケットにエクスポート可能（aft_plan_output_export_enabled = true）
- エクスポートされたplanはデフォルト30日間保持（aft_plan_output_retention_daysで変更可能）
- S3バケットはAFT KMSキーで暗号化、バージョニング有効、パブリックアクセスブロック、AFTカスタマイズビルドロールのみ書き込み可能
- バグ修正: 分割ステージパイプラインでのアカウントプロビジョニング失敗を修正
- バグ修正: 新規AFTデプロイ時のTerraform stateバックエンドバケットのレプリケーション設定失敗を修正

この機能はAWS Control Tower Account Factory for TerraformがサポートされているすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-control-tower-aft/)
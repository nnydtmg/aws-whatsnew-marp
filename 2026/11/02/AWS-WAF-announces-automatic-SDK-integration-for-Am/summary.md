# AWS WAFがAmazon CloudFront向け自動SDK統合を発表

AWS WAF announces automatic SDK integration for Amazon CloudFront distributions

**カテゴリ:** What's New
**公開日:** 2026-10-30T15:57:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront/)

このページでは、AWS What's Newで発表された「AWS WAF announces automatic SDK integration for Amazon CloudFront distributions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS WAFは、CloudFront向けにアプリケーション変更不要の自動SDK統合を提供し、対象マネージドルールグループのクライアント側シグナルを収集できるようになりました。多数のアプリや管理外ページを扱うチームの運用負担と設定漏れを軽減いたします。

## このアップデートで何が変わったか

新機能は、Amazon CloudFrontディストリビューション向けのAWS WAF自動SDK統合です。有効化すると、CloudFrontが配信するHTMLへAWS WAF JavaScript SDKのスクリプトタグを追加します。アプリケーションコード、ビルドプロセス、デプロイの変更は不要です。SDKは、Bot Controlのtargeted検査、Fraud Control ATP、Fraud Control ACFP向けのクライアント側シグナルを提供します。本更新は、多数のアプリケーションを運用するチームや、管理外システムが生成するページを配信するチームに適しています。コンソール、CLI、SDK、CDK、CloudFormationで設定でき、追加料金はありません。Automatic SDK integration is available for web ACLs that are used with Amazon CloudFront and contain at least one of those managed rule groups. In the AWS WAF 

## 対象ユーザー

新機能は、Amazon CloudFrontディストリビューション向けのAWS WAF自動SDK統合です。有効化すると、CloudFrontが配信するHTMLへAWS WAF JavaScript SDKのスクリプトタグを追加します。アプリケーションコード、ビルドプロセス、デプロイの変更は不要です。SDKは、Bot Controlのtargeted検査、Fraud Control ATP、Fraud Control ACFP向けのクライアント側シグナルを提供します。本更新は、多数のアプリケーションを運用するチームや、管理外システムが生成するページを配信するチームに適しています。コンソール、CL

## 詳細

新機能は、Amazon CloudFrontディストリビューション向けのAWS WAF自動SDK統合です。有効化すると、CloudFrontが配信するHTMLへAWS WAF JavaScript SDKのスクリプトタグを追加します。アプリケーションコード、ビルドプロセス、デプロイの変更は不要です。SDKは、Bot Controlのtargeted検査、Fraud Control ATP、Fraud Control ACFP向けのクライアント側シグナルを提供します。本更新は、多数のアプリケーションを運用するチームや、管理外システムが生成するページを配信するチームに適しています。コンソール、CLI、SDK、CDK、CloudFormationで設定でき、追加料金はありません。Automatic SDK integration is available for web ACLs that are used with Amazon CloudFront and contain at least one of those managed rule groups. In the AWS WAF console, the setting appears with the managed rule group settings and is on by default for new web ACLs that you create with one of those rule groups. When you create a web ACL programmatically, the setting is off by default. Through the API, add the ChallengeJavascriptSdkInjection setting to the AssociationConfig of the web ACL, using the CLOUDFRONT map key.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront/)
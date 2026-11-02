---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAFがAmazon CloudFront向け自動SDK統合を発表

AWS WAF announces automatic SDK integration for Amazon CloudFront distributions

**What's New** | 2026-10-30T15:57:00

---

## 概要

- AWS WAFは、CloudFront向けにアプリケーション変更不要の自動SDK統合を提供し、対象マネージドルールグループのクライアント側シグナルを収集できるようになりました。
- 多数のアプリや管理外ページを扱うチームの運用負担と設定漏れを軽減いたします。

---

## 前提・背景

### これまでの課題

新機能は、Amazon CloudFrontディストリビューション向けのAWS WAF自動SDK統合です。有効化すると、CloudFrontが配信するHTMLへAWS WAF JavaScript SDKのスクリプトタグを追加します。アプリケーションコード、ビルドプロセス、デプロイの変更は不要です。SDKは、Bot Controlのtargeted検査、Fraud Control ATP、Fraud Control ACFP向けのクライアント側シグナルを提供します。本更新は、多数のアプリケーショ

---

### 関連する最近の動向

- **I Enabled the AWS WAF SDK Automatic Integration for CloudFront and Checked the Script Tag Insertion into HTML a...

---

## 変更内容・新機能

新機能は、Amazon CloudFrontディストリビューション向けのAWS WAF自動SDK統合です。有効化すると、CloudFrontが配信するHTMLへAWS WAF JavaScript SDKのスクリプトタグを追加します。アプリケーションコード、ビルドプロセス、デプロイの変更は不要です。SDKは、Bot Controlのtargeted検査、Fraud Control ATP、Fraud Control ACFP向けのクライアント側シグナルを提供します。本更新は、多数のアプリケーションを運用するチームや、管理外システムが生成するページを配信するチームに適しています。コンソール、CLI、SDK、CDK、CloudFormationで設定でき、追加料金はありません。Automatic SDK integration is available for web ACLs that are used with Amazon CloudFront and contain at least one of those managed rule groups. In the AWS WAF 

---

## まとめ

- AWS WAF announces automatic SDK integration for Amazon CloudFront distributions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront/)

### 関連情報

- [I Enabled the AWS WAF SDK Automatic Integration for CloudFront and Checked the Script Tag Insertion into HTML and the Changes in Responses | DevelopersIO](https://dev.classmethod.jp/en/articles/waf-cloudfront-automatic-sdk-integration)
- [AWS WAF announces automatic SDK integration for Amazon CloudFront distributions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront)
- [Automatic SDK integration for CloudFront distributions - AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-challenge-javascript-sdk-injection.html)
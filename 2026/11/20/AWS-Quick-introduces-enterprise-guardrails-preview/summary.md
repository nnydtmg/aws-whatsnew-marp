# AWS Quickがエンタープライズガードレールをプレビュー提供開始

AWS Quick introduces enterprise guardrails (preview)

**カテゴリ:** What's New
**公開日:** 2026-11-20T20:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-enterprise-guardrails-preview/)

このページでは、AWS What's Newで発表された「AWS Quick introduces enterprise guardrails (preview)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Quickにエンタープライズガードレールがプレビューとして追加され、管理者はユーザープロンプトのコンテンツ安全性と機密情報を制御できます。本機能はProfessionalおよびEnterpriseプランの一部顧客向けです。

## このアップデートで何が変わったか

AWS Quickにエンタープライズガードレールがプレビューとして追加され、管理者はユーザープロンプトのコンテンツ安全性と機密情報を制御できます。本機能はProfessionalおよびEnterpriseプランの一部顧客向けです。

## 対象ユーザー

AWS Quick now includes enterprise guardrails, giving administrators configurable content safety and sensitive-information controls for user prompts. Administrators can apply guardrail policies to individual users or enterprise identity provider (IdP) groups or set a policy as the account default. Us

## 活用シーン

AWS Quick now includes enterprise guardrails, giving administrators configurable content safety and sensitive-information controls for user prompts. Administrators can apply guardrail policies to individual users or enterprise identity provider (IdP) groups or set a policy as the account default. Us

## 詳細

AWS Quick now includes enterprise guardrails, giving administrators configurable content safety and sensitive-information controls for user prompts. Administrators can apply guardrail policies to individual users or enterprise identity provider (IdP) groups or set a policy as the account default. User-level policies take precedence over group policies and account defaults. When multiple group policies apply, Quick combines their content restrictions, using the stricter setting when controls overlap. Administrators create guardrail policies in the Quick administration console using content filters, denied topics, blocked words and phrases, prompt-attack detection, and controls for selected types of personally identifiable information (PII). For example, an administrator can create a policy that blocks prompts containing confidential project names and assign it to an IdP group. Detect-only mode lets administrators test prompt-filtering rules against real production traffic before enforcing them. In this mode, Quick evaluates user prompts and logs policy matches without blocking requests, so administrators can assess the impact on business workflows and refine policies. When administrators enable enforcement, Quick blocks matching prompts and displays a message to the user. Administrators can review detected and blocked events in Amazon CloudWatch Logs. Enterprise guardrails are available in preview for select Quick customers with Professional and Enterprise plans.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-enterprise-guardrails-preview/)
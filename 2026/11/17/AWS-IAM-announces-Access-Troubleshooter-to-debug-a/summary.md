# AWS IAMがAccess Troubleshooterを発表、アクセス拒否エラーのデバッグが可能に

AWS IAM announces Access Troubleshooter to debug access denied errors

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-access-troubleshooter/)

このページでは、AWS What's Newで発表された「AWS IAM announces Access Troubleshooter to debug access denied errors」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAMのAccess Troubleshooterは、アクセス拒否エラーの認可コンテキストを可視化し、開発者が迅速に根本原因を特定できる新機能です。

## このアップデートで何が変わったか

AWS Identity and Access Management (IAM) に Access Troubleshooter が追加されました。アクセス拒否エラーの完全な認可コンテキストを可視化し、試行錯誤なしに解決できるようになります。これまで開発者は拒否したポリシーのARNだけを頼りにデバッグしており、認可コンテキストや他の評価対象ポリシーは見えませんでした。今回から、対応サービス・APIのアクセス拒否エラーメッセージに一意の識別子（authorization ID）が含まれ、評価されたポリシー、認可コンテキスト、評価結果を確認できます。コンソールのリンク、または GetRequestAuthorizationDetails API / aws iam-toolbox get-request-authorization-details CLI で詳細を取得します。評価結果は Allow / Explicit deny / Implicit deny として表示され、identity-based、resource-based、SCP、RCP、permissions boundar

## 対象ユーザー

AWS Identity and Access Management (IAM) に Access Troubleshooter が追加されました。アクセス拒否エラーの完全な認可コンテキストを可視化し、試行錯誤なしに解決できるようになります。これまで開発者は拒否したポリシーのARNだけを頼りにデバッグしており、認可コンテキストや他の評価対象ポリシーは見えませんでした。今回から、対応サービス・APIのアクセス拒否エラーメッセージに一意の識別子（authorization ID）が含まれ、評価されたポリシー、認可コンテキスト、評価結果を確認できます。コンソールのリンク、または GetRequest

## 詳細

AWS Identity and Access Management (IAM) に Access Troubleshooter が追加されました。アクセス拒否エラーの完全な認可コンテキストを可視化し、試行錯誤なしに解決できるようになります。これまで開発者は拒否したポリシーのARNだけを頼りにデバッグしており、認可コンテキストや他の評価対象ポリシーは見えませんでした。今回から、対応サービス・APIのアクセス拒否エラーメッセージに一意の識別子（authorization ID）が含まれ、評価されたポリシー、認可コンテキスト、評価結果を確認できます。コンソールのリンク、または GetRequestAuthorizationDetails API / aws iam-toolbox get-request-authorization-details CLI で詳細を取得します。評価結果は Allow / Explicit deny / Implicit deny として表示され、identity-based、resource-based、SCP、RCP、permissions boundary、session policy など評価対象のポリシー種別も確認できます。認可詳細は非同期記録で最大24時間保持されます。Public Preview であり、対応サービスは段階的に拡大中です（IAM、STS、EC2、SQS、Kinesis Data Streams、CodeDeploy、Step Functions など）。iam:GetRequestAuthorizationDetails 権限が必要で、拒否が発生した同一リージョンで呼び出します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-access-troubleshooter/)
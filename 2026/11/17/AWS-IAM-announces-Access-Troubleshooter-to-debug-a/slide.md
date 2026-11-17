---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAMがAccess Troubleshooterを発表、アクセス拒否エラーのデバッグが可能に

AWS IAM announces Access Troubleshooter to debug access denied errors

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWS IAMのAccess Troubleshooterは、アクセス拒否エラーの認可コンテキストを可視化し、開発者が迅速に根本原因を特定できる新機能です。

---

## 前提・背景

### これまでの課題

AWS Identity and Access Management (IAM) に Access Troubleshooter が追加されました。アクセス拒否エラーの完全な認可コンテキストを可視化し、試行錯誤なしに解決できるようになります。これまで開発者は拒否したポリシーのARNだけを頼りにデバッグしており、認可コンテキストや他の評価対象ポリシーは見えませんでした。今回から、対応サービス・APIのアクセス拒否エラーメッセージに一意の識別子（authorization ID）が含まれ、評価された

---

### 関連する最近の動向

- **AWS IAM announces Access Troubleshooter to debug access denied errors - AWS**
  [詳細](https://aws.amazon.com/abo...

---

## 変更内容・新機能

AWS Identity and Access Management (IAM) に Access Troubleshooter が追加されました。アクセス拒否エラーの完全な認可コンテキストを可視化し、試行錯誤なしに解決できるようになります。これまで開発者は拒否したポリシーのARNだけを頼りにデバッグしており、認可コンテキストや他の評価対象ポリシーは見えませんでした。今回から、対応サービス・APIのアクセス拒否エラーメッセージに一意の識別子（authorization ID）が含まれ、評価されたポリシー、認可コンテキスト、評価結果を確認できます。コンソールのリンク、または GetRequestAuthorizationDetails API / aws iam-toolbox get-request-authorization-details CLI で詳細を取得します。評価結果は Allow / Explicit deny / Implicit deny として表示され、identity-based、resource-based、SCP、RCP、permissions boundar

---

## まとめ

- AWS IAM announces Access Troubleshooter to debug access denied errors について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-access-troubleshooter/)

### 関連情報

- [AWS IAM announces Access Troubleshooter to debug access denied errors - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-access-troubleshooter/)
- [Troubleshoot access denied error messages with authorization ID (Preview)](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied-authorization-id.html)
- [Troubleshoot access denied error messages](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html)
- [AWS introduces changes to access denied errors for easier permissions troubleshooting](https://aws.amazon.com/blogs/security/aws-introduces-changes-to-access-denied-errors-for-easier-permissions-troubleshooting)
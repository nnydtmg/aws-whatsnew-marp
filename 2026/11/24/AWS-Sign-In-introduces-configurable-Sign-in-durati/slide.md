---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Sign-Inが最大90日間の設定可能なサインイン期間を導入

AWS Sign-In introduces configurable Sign-in duration of up to 90 days

**What's New** | 2026-11-23T23:14:00

---

## 概要

- AWS Sign-Inに最大90日間の設定可能なサインイン期間が導入されました。
- 本機能は開発者およびAIエージェントの長時間実行ワークフローに適しています。
- 管理者は個々のIAMユーザーおよびロールに対してOAuthサインインセッションの有効期間を設定できます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Sign-In introduces configurable Sign-in duration of up to 90 days - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration)

- **Update the sign-in duration for an IAM user - AWS Identity and Access Management**
  [詳細](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_signin-duration.html)

- **Define a custom session durati...

---

## 変更内容・新機能

AWS Sign-In now enables developers and AI agents to stay authenticated for up to 90 days without frequent sign-ins or consent prompts. With this launch, administrators can configure Sign-in duration, which controls how long an OAuth Sign-in session remains active, for individual IAM users and roles. This capability reduces authentication interruptions for long-running workflows and provides a more secure alternative to static access keys by using short-lived, renewable credentials. Existing sess

---

## 効果・メリット

- AWS Sign-In now enables developers and AI agents to stay authenticated for up to 90 days without frequent sign-ins or consent prompts. With this launch, administrators can configure Sign-in duration, which controls how long an OAuth Sign-in session remains active, for individual IAM users and roles. This capability reduces authentication interruptions for long-running workflows and provides a mo

---

## まとめ

- AWS Sign-In introduces configurable Sign-in duration of up to 90 days について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration/)

### 関連情報

- [AWS Sign-In introduces configurable Sign-in duration of up to 90 days - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration)
- [Update the sign-in duration for an IAM user - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_signin-duration.html)
- [Define a custom session duration and terminate active sessions in IAM Identity Center](https://aws.amazon.com/blogs/security/define-a-custom-session-duration-and-terminate-active-sessions-in-iam-identity-center)
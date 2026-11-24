# AWS Sign-Inが最大90日間の設定可能なサインイン期間を導入

AWS Sign-In introduces configurable Sign-in duration of up to 90 days

**カテゴリ:** What's New
**公開日:** 2026-11-23T23:14:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration/)

このページでは、AWS What's Newで発表された「AWS Sign-In introduces configurable Sign-in duration of up to 90 days」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Sign-Inに最大90日間の設定可能なサインイン期間が導入されました。本機能は開発者およびAIエージェントの長時間実行ワークフローに適しています。管理者は個々のIAMユーザーおよびロールに対してOAuthサインインセッションの有効期間を設定できます。

## このアップデートで何が変わったか

AWS Sign-In now enables developers and AI agents to stay authenticated for up to 90 days without frequent sign-ins or consent prompts. With this launch, administrators can configure Sign-in duration, which controls how long an OAuth Sign-in session remains active, for individual IAM users and roles. This capability reduces authentication interruptions for long-running workflows and provides a more secure alternative to static access keys by using short-lived, renewable credentials. Existing sess

## 対象ユーザー

AWS Sign-In now enables developers and AI agents to stay authenticated for up to 90 days without frequent sign-ins or consent prompts. With this launch, administrators can configure Sign-in duration, which controls how long an OAuth Sign-in session remains active, for individual IAM users and roles.

## 詳細

AWS Sign-In now enables developers and AI agents to stay authenticated for up to 90 days without frequent sign-ins or consent prompts. With this launch, administrators can configure Sign-in duration, which controls how long an OAuth Sign-in session remains active, for individual IAM users and roles. This capability reduces authentication interruptions for long-running workflows and provides a more secure alternative to static access keys by using short-lived, renewable credentials. Existing session duration limits remain unchanged unless administrators explicitly configure longer durations. Sign-In Duration supports AWS CLI (aws login), AWS MCP Server, and other OAuth-enabled applications. It does not affect AWS Management Console sessions. Customers can configure the setting using the IAM console, AWS CLI, or IAM API in all AWS commercial Regions. You can configure the duration from a minimum of 1 hour up to a maximum of 90 days. Duration is specified in seconds, with a minimum of 3,600 seconds (1 hour) and a maximum of 7,776,000 seconds (90 days). 管理者は個々のIAMユーザーおよびロールに対してOAuthサインインセッションの有効期間を設定できます。頻繁なサインインなしに認証を維持したい開発者およびAIエージェントに適しています。長時間実行ワークフローの認証中断を削減したいお客様にとって有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration/)
# AWS CLIがAgent Toolkitのスキル一括更新とバージョン確認に対応

AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS

**カテゴリ:** What's New
**公開日:** 2026-09-30T20:16:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/)

このページでは、AWS What's Newで発表された「AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CLIにエージェントスキルの一括バージョン確認と一括更新機能が追加されました。多数のスキルを導入しているチームが、コーディングエージェントを効率的に最新状態へ保てるようになります。

## このアップデートで何が変わったか

Today, AWS expanded the AWS Command Line Interface (CLI) commands for the Agent Toolkit for AWS with two new capabilities that make it easier to keep agent skills up to date. Customers can now run aws agent-toolkit check-skill-updates to compare all installed skills against the latest versions available in the registry, and use aws agent-toolkit update-skill --all to update every outdated skill in a single command.

The Agent Toolkit for AWS consists of the AWS MCP Server (which provides a secur

## 対象ユーザー

Today, AWS expanded the AWS Command Line Interface (CLI) commands for the Agent Toolkit for AWS with two new capabilities that make it easier to keep agent skills up to date. Customers can now run aws agent-toolkit check-skill-updates to compare all installed skills against the latest versions avail

## 詳細

Today, AWS expanded the AWS Command Line Interface (CLI) commands for the Agent Toolkit for AWS with two new capabilities that make it easier to keep agent skills up to date. Customers can now run aws agent-toolkit check-skill-updates to compare all installed skills against the latest versions available in the registry, and use aws agent-toolkit update-skill --all to update every outdated skill in a single command.

The Agent Toolkit for AWS consists of the AWS MCP Server (which provides a secure, auditable agent interface to 15,000+ AWS APIs), agent skills (which give agents expert guidance across storage, networking, analytics, and more), and plugins (which bundle the MCP server and curate sets of skills into a single install). Previously, customers needed to check and update each skill individually. With these additions to AWS CLI, developers can quickly identify which skills have newer versions available and bring their entire skill set current without managing updates one at a time. This is especially useful for teams that have installed many skills across serverless, storage, networking, analytics, and other domains, and want to ensure their coding agents always operate with the latest guidance. These new commands are added to the existing set of AWS CLI capabilities for the Agent Toolkit, which already allows customers to install, search, and configure the AWS MCP Server and agent skills across Kiro, Claude Code, Codex, Cursor, and other popular coding agents.

To get started, see AWS CLI in the Agent Toolkit for AWS user guide. Make sure you have AWS CLI version 2.37.0 or later installed. The AWS MCP Server is available in the US East (N. Virginia) and Europe (Frankfurt) Regions.

新機能:
- aws agent-toolkit check-skill-updates: インストール済みスキルをレジストリの最新版と比較
- aws agent-toolkit update-skill --all: 古いスキルを一度の操作で全件更新
- 従来は各スキルを個別に確認および更新する必要があったが、一括で最新化可能に
- サーバーレス、ストレージ、ネットワーキング、アナリティクスなど多くのスキルを導入しているチームに適している
- コーディングエージェントを常に最新のガイダンスで運用したい開発者にとって有用
- AWS CLI 2.37.0以降が必要
- AWS MCP ServerはUS East (N. Virginia)とEurope (Frankfurt)で利用可能
- 対応エージェント: Kiro, Claude Code, Codex, Cursor など

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/)
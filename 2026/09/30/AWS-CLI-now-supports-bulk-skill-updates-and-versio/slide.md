---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CLIがAgent Toolkitのスキル一括更新とバージョン確認に対応

AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS

**What's New** | 2026-09-30T20:16:00

---

## 概要

- AWS CLIにエージェントスキルの一括バージョン確認と一括更新機能が追加されました。
- 多数のスキルを導入しているチームが、コーディングエージェントを効率的に最新状態へ保てるようになります。

---

## 前提・背景

### これまでの課題

The Agent Toolkit for AWS consists of the AWS MCP Server (which provides a secure, auditable agent interface to 15,000+ AWS APIs), agent skills (which give agents expert guidance across storage, networking, analytics, and more), and plugins (which bu

---

### 関連する最近の動向

- **AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS**
  [詳細](https://aws.a...

---

## 変更内容・新機能

Today, AWS expanded the AWS Command Line Interface (CLI) commands for the Agent Toolkit for AWS with two new capabilities that make it easier to keep agent skills up to date. Customers can now run aws agent-toolkit check-skill-updates to compare all installed skills against the latest versions available in the registry, and use aws agent-toolkit update-skill --all to update every outdated skill in a single command.

The Agent Toolkit for AWS consists of the AWS MCP Server (which provides a secur

---

## まとめ

- AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/)

### 関連情報

- [AWS CLI now supports bulk skill updates and version checks for the Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/)
- [agent-toolkit — AWS CLI 2.36.44 Command Reference](https://docs.aws.amazon.com/cli/latest/reference/agent-toolkit)
- [AWS CLI - Agent Toolkit for AWS](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/aws-cli.html)
- [Get started with the Agent Toolkit for AWS in the AWS CLI](https://aws.amazon.com/blogs/developer/get-started-with-the-agent-toolkit-for-aws-in-the-aws-cli)
- [GitHub - aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws)
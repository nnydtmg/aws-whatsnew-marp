---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Agent Registryが命名と公開発見機能の提供を開始

AWS Agent Registry now offers naming and public discovery capabilities

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS Agent Registryに、検証済みドメイン名を用いてエージェントを公開発見できる機能が追加されました。
- 開発者およびネットワーク管理者はドメイン検証で所有権を証明し、エージェントを自社レジストリ・AWSアカウントの外へ公開できます。
- 公開レコードは検証済みドメイン識別子に紐付くため接続前に出所を確認でき、AWS認証済みユーザーがセマンティック検索および語彙検索で検索可能です。
- 本機能は追加料金なしで対応リージョンで利用できます。

---

## 前提・背景

### これまでの課題

AWS Agent Registry now offers public naming capabilities, making it easy to attach verified domain names to your agents and AI tools. Developers and network admins can perform domain verification checks to prove domain ownership, then associate the v

---

### 関連する最近の動向

- **AWS Agent Registry now offers naming and public discovery capabilities - AWS**
  [詳細](https://aws.amazon.com/ab...

---

## 変更内容・新機能

- AWS Agent Registryは、検証済みドメイン名をエージェントやAIツールに付与する公開命名機能を提供します。
- 開発者およびネットワーク管理者は、ドメイン検証により所有権を証明し、エージェントを公開できます。
- 公開レコードは検証済みドメイン識別子に紐付くため、接続前に出所を確認できます。
- 公開後は、AWS認証済みユーザーがセマンティック検索および語彙検索で検索できます。
- 本機能は追加料金なしで、AWS Agent Registryが利用可能なすべてのリージョンでご利用いただけます。
- 本アップデートは、マルチエージェントシステムを構築する開発者およびネットワーク管理者に適しています。
- AWS Agent Registryは2026年4月にAmazon Bedrock AgentCore経由でプレビュー提供、2026年8月に一般提供開始した、組織内のエージェント・ツール・スキル・MCPサーバーを統一的に登録・検索・ガバナンスするカタログです。
- 既存機能：手動/アプルーバルフロー、セマンティック/キーワード検索、CloudTrail監査、CloudF

---

## まとめ

- AWS Agent Registry now offers naming and public discovery capabilities について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/agent-registry-naming-public-discovery/)

### 関連情報

- [AWS Agent Registry now offers naming and public discovery capabilities - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/agent-registry-naming-public-discovery/)
- [AWS Agent Registry for centralized agent discovery and governance is now available in Preview - AWS](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-agent-registry-in-agentcore-preview)
- [AWS Agent Registry for centralized agent discovery and governance is now generally available - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-agent-registry-generally-available)
- [Manage agents, tools and skills at scale with AWS Agent Registry](https://aws.amazon.com/blogs/machine-learning/manage-agents-tools-and-skills-at-scale-with-aws-agent-registry)
- [Key capabilities - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-key-capabilities.html)
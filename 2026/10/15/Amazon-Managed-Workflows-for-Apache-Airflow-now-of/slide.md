---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon MWAAがAIエージェントスキルを提供、自然言語でワークフロー作成が可能に

Amazon Managed Workflows for Apache Airflow now offers AI agent skills

**What's New** | 2026-10-15T08:00:00

---

## 概要

- Amazon MWAAがAIエージェントスキルを提供し、自然言語でワークフローの作成・保守および環境アップグレードが可能になりました。
- データパイプラインを扱うエンジニアの手作業削減に役立つ機能です。

---

## 前提・背景

### 関連する最近の動向

- **Introducing Agent Toolkit for AWS**
  [詳細](https://www.youtube.com/watch?v=d1GHVtEFy2A)

- **Agent Toolkit for AWS includes 20+ agent skills**
  [詳細](https://dev.to/aws/the-new-agent-toolkit-for-aws-includes-20-agent-skills-but-your-agent-might-never-load-them-1p6d)

- **Amazon Managed Workflows for Apache Airflow now offers AI agent skills - AWS**
  [詳細](https://aws.amazon.com/...

---

## 変更内容・新機能

Amazon MWAAがAgent Toolkit for AWSと統合し、組み込みのAIエージェントスキルを提供します。4つのスキル（authoring-mwaa-workflow、debugging-mwaa-workflow、testing-mwaa-workflow、upgrading-mwaa-environments）により、対応するAIコーディングアシスタントを用いて、自然言語でMWAAワークフローの作成、デバッグ、テスト、および環境のアップグレードが可能になります。本機能はAmazon MWAA ProvisionedおよびAmazon MWAA Serverlessの両方で利用でき、MWAAが提供されているすべてのAWSリージョンで利用可能です。aws-data-analyticsプラグインをインストールし、AIコーディングアシスタントをMWAAエージェントスキルを使用するように設定することで利用開始できます。

---

## 効果・メリット

- Amazon MWAAがAIエージェントスキルを提供し、自然言語でワークフローの作成・保守および環境アップグレードが可能になりました。
- データパイプラインを扱うエンジニアの手作業削減に役立つ機能です。

---

## まとめ

- Amazon Managed Workflows for Apache Airflow now offers AI agent skills について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-mwaa-ai-agent-skills/)

### 関連情報

- [Introducing Agent Toolkit for AWS](https://www.youtube.com/watch?v=d1GHVtEFy2A)
- [Agent Toolkit for AWS includes 20+ agent skills](https://dev.to/aws/the-new-agent-toolkit-for-aws-includes-20-agent-skills-but-your-agent-might-never-load-them-1p6d)
- [Amazon Managed Workflows for Apache Airflow now offers AI agent skills - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-mwaa-ai-agent-skills)
- [Announcing Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit)
- [Skills - Agent Toolkit for AWS](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/skills.html)
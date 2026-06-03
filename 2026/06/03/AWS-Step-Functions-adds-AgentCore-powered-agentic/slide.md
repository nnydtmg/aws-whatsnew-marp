---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Step Functions が AgentCore によるエージェント推論ステップに対応

AWS Step Functions adds AgentCore-powered agentic reasoning step

**What's New** | 2026-06-03T20:00:00

---

## 概要

- AWS Step Functions が Amazon Bedrock AgentCore と統合され、ワークフローに AI エージェントの推論ステップを追加できるようになりました。
- このアップデートは、ドキュメント分類や非構造化データの処理など、複雑な推論タスクを自動化し、監査可能性を確保したい組織に最適です。

---

## 前提・背景

### 関連する最近の動向

- **Agentic AI at Sage with AgentCore | AWS Events - YouTube**
  [詳細](https://www.youtube.com/watch?v=RMa0TOtjCj0)

- **AWS Step Functions adds 28 new service integrations, including Amazon Bedrock AgentCore - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-sdk-integrations)

- **Simulating Expert Teams with Agentic AI and Amazon Bedrock AgentCore | AWS Physical AI Blog**
  [詳細](https://aws.amazon.com/blogs/physical-ai/simulating-expert-teams-with-agentic-ai-and-amazon-bedrock-agentcore)

---

## 変更内容・新機能

- AWS Step Functions が Amazon Bedrock AgentCore との統合により、ワークフローに AI エージェントの推論ステップを追加できるようになりました。

- 複数のエージェントを並列または順序立てて実行でき、重要なアクション前に人間の承認を追加できます。

---

## 効果・メリット

- ドキュメント分類や非構造化フォームからの要素抽出など、ワークフロー内の推論タスクを自動化
- CloudWatch でエージェント決定を追跡・監査でき、透明性と監査可能性が向上
- セッション ID を使用してエージェントコンテキストをワークフロー実行内または実行間で永続化可能
- モデル、システムプロンプト、ツールなどの呼び出しごとのオーバーライドにより、柔軟にエージェントを適応

---

## ユースケース

### ドキュメント処理
- 複数の書類を自動分類
- フォームから構造化データを抽出

### 業務自動化
- 複雑なワークフローに推論機能を組み込み
- 複数のエージェントで異なるタスクを分担

### エンタープライズ向けAI
- 企業の既存システムと統合
- 監査可能な意思決定ログ

---

## 利用可能リージョン

- 米国東部（バージニア北部）
- 米国西部（オレゴン）
- ヨーロッパ（フランクフルト）
- アジアパシフィック（シドニー）

**料金：** Step Functions の標準料金が適用。統合に追加料金は発生せず、Bedrock と AgentCore の標準料金のみが適用されます。

---

## まとめ

- AWS Step Functions が AgentCore によるエージェント推論ステップに対応
- ワークフローに AI エージェントの推論機能を直接統合可能
- 複雑な推論タスクの自動化と監査可能性を確保
- エンタープライズ向けの本番環境で活用可能

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/)

### 関連情報

- [Agentic AI at Sage with AgentCore | AWS Events - YouTube](https://www.youtube.com/watch?v=RMa0TOtjCj0)
- [AWS Step Functions adds 28 new service integrations, including Amazon Bedrock AgentCore - AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-sdk-integrations)
- [Simulating Expert Teams with Agentic AI and Amazon Bedrock AgentCore | AWS Physical AI Blog](https://aws.amazon.com/blogs/physical-ai/simulating-expert-teams-with-agentic-ai-and-amazon-bedrock-agentcore)
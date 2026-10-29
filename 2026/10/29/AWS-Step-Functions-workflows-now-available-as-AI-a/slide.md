---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Step Functions ワークフローが AI エージェントのツールとして利用可能に

AWS Step Functions workflows now available as AI agent tools

**What's New** | 2026-10-29

---

## 概要

- AWS Step FunctionsのワークフローがAmazon Bedrock AgentCore Gatewayを通じてAIエージェントのツールとして利用可能になりました。
- 既存ワークフローの実行と照会により、業務プロセスを一貫して自動化できます。

---

## 前提・背景

### 関連する最近の動向

- **Govern AI agent tool access with Amazon Bedrock AgentCore Gateway**
  [詳細](https://aws.amazon.com/blogs/machine-learning/govern-ai-agent-tool-access-with-amazon-bedrock-agentcore-gateway)

- **How AgentCore Gateway supports the MCP 2026-07-28 spec**
  [詳細](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec)

- **Use your Step Fun...

---

## 変更内容・新機能

新機能は、AWS Step FunctionsのワークフローをAmazon Bedrock AgentCore Gateway経由でAIエージェントのツールとして利用できることです。エージェントが実行タイミングと入力を判断し、Step Functionsが定義どおりに各ステップを実行いたします。既存のStandardおよびExpressワークフローをツールとして利用でき、実行状況の照会も可能です。本アップデートは、AIエージェントで業務プロセスを自動化したいお客様や、カスタマーサポートおよび運用担当のお客様に適しております。

---

## まとめ

- AWS Step Functions workflows now available as AI agent tools について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/)

### 関連情報

- [Govern AI agent tool access with Amazon Bedrock AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/govern-ai-agent-tool-access-with-amazon-bedrock-agentcore-gateway)
- [How AgentCore Gateway supports the MCP 2026-07-28 spec](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec)
- [Use your Step Functions workflows as tools for AI agents](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-agentcore-gateway.html)
- [AWS Step Functions adds AgentCore-powered agentic reasoning step](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore)
- [AWS Rolls Out AgentCore Insights Preview](https://agentry.news/aws-rolls-out-agentcore-insights-preview-expands-amazon-q-agents)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Memoryが長期メモリの設定可能なTTLをサポート

Amazon Bedrock AgentCore Memory now supports configurable time-to-live for long-term memory

**What's New** | 2026-10-13T16:00:00

---

## 概要

- Amazon Bedrock AgentCore Memoryに、長期メモリレコードの設定可能な有効期限（TTL）機能が追加されました。
- データ保持要件の遵守やストレージ管理、古い洞察の自動削除を必要とするお客様に適した更新です。

---

## 前提・背景

### 関連する最近の動向

- **Understanding Long-term Memory Extraction Types in Amazon Bedrock AgentCore Memory**
  [詳細](https://medium.com/@manojkale.feb14/understanding-long-term-memory-extraction-types-in-amazon-bedrock-agentcore-memory-42d8c2ecb40f)

- **Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/age...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCore Memoryの長期メモリレコードに対して設定可能な有効期限（TTL）を指定できることです。
- デフォルトでは長期メモリレコードは期限切れになりませんが、定義した保持期間後に自動削除されます。
- リソース単位または特定のレコード単位で保持期間を設定できます。
- 設定または削除には新しい権限bedrock-agentcore:UpdateMemoryRecordExpirySpecificationが必要です。
- この更新は、データ保持要件を満たす必要があるお客様に適しています。
- また、ストレージの増加を管理したいお客様や、古い洞察を時間とともに削除したいお客様にも適しています。

---

## まとめ

- Amazon Bedrock AgentCore Memory now supports configurable time-to-live for long-term memory について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-long-term-memory-ttl)

### 関連情報

- [Understanding Long-term Memory Extraction Types in Amazon Bedrock AgentCore Memory](https://medium.com/@manojkale.feb14/understanding-long-term-memory-extraction-types-in-amazon-bedrock-agentcore-memory-42d8c2ecb40f)
- [Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/agentcore-memory-direct-ingest)
- [Amazon Bedrock AgentCore Memory now supports strictly consistent metadata for long-term memory - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-memory-scmetadata)
- [AI Agent Memory Made Easy - Amazon Bedrock AgentCore Memory with Spring AI](https://dev.to/yuriybezsonov/ai-agent-memory-made-easy-amazon-bedrock-agentcore-memory-with-spring-ai-3bng)
- [Amazon Bedrock AgentCore Memory: Building context-aware agents](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-memory-building-context-aware-agents)
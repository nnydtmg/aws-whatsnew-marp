---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Memoryが短期メモリ保持期間を最大10年に延長

Amazon Bedrock AgentCore Memory now supports short-term memory retention of up to 10 years

**What's New** | 2026-11-17T19:22:00

---

## 概要

- Amazon Bedrock AgentCore Memoryの短期メモリ保持期間が最大10年に延長され、コンプライアンスや長期的な会話履歴の参照が必要なお客様にご活用いただけます。

---

## 前提・背景

### これまでの課題

- Amazon Bedrock AgentCore Memoryは、短期メモリの保持期間を従来1年から最大10年まで延長いたしました。
- 開発者は短期メモリをエージェントの会話ややり取りの長期記録としてご利用いただけます。
- 保持期間はメモリリソースに設定され、イベント作成時に適用されます。
- 既存イベントは元の保持期間を維持します。
- データを保持する限り標準の短期メモリストレージ料金が適用されます。
- 本更新は、コンプライアンスや監柄、長期間後に戻るユーザー、過去セッションの参照

---

### 関連する最近の動向

- **Amazon Bedrock AgentCore Memory now supports short-term memory retention of up to 10 years - AWS**
  [詳細](https...

---

## 変更内容・新機能

- Amazon Bedrock AgentCore Memoryは、短期メモリの保持期間を従来1年から最大10年まで延長いたしました。
- 開発者は短期メモリをエージェントの会話ややり取りの長期記録としてご利用いただけます。
- 保持期間はメモリリソースに設定され、イベント作成時に適用されます。
- 既存イベントは元の保持期間を維持します。
- データを保持する限り標準の短期メモリストレージ料金が適用されます。
- 本更新は、コンプライアンスや監柄、長期間後に戻るユーザー、過去セッションの参照が必要なエージェントに適しております。
- AgentCore Memoryが利用可能なすべてのAWSリージョンで利用できます。

---

## まとめ

- Amazon Bedrock AgentCore Memory now supports short-term memory retention of up to 10 years について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-10-year-retention)

### 関連情報

- [Amazon Bedrock AgentCore Memory now supports short-term memory retention of up to 10 years - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-10-year-retention)
- [Amazon Bedrock AgentCore Memory: memory types, pricing, MCP and self-hosting (2026)](https://www.developersdigest.tech/agent-memory/aws-agentcore-memory)
- [Amazon Bedrock AgentCore Memory now supports configurable time-to-live for long-term memory - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-long-term-memory-ttl)
- [AWS re:Invent 2025 - Make agents remember with Amazon Bedrock AgentCore Memory (AIM331)](https://www.youtube.com/watch?v=Sh0Ro00_rpA)
- [Amazon Bedrock AgentCore Memory: Building context-aware agents](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-memory-building-context-aware-agents)
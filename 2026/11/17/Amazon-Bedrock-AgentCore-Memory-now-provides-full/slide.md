---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Memory がフルセッションサマリーを提供開始

Amazon Bedrock AgentCore Memory now provides full session summaries

**What's New** | 2026-11-17T19:17:00

---

## 概要

- Amazon Bedrock AgentCore Memoryは、追加設定なしですべてのセッションにフルセッションサマリーを自動提供するようになりました。
- フルセッションサマリーは会話の全体像を示す単一の記録で、新しいイベントの到着に応じて更新されます。
- サマリー戦略があれば追加設定は不要で、既存セッションも含めて自動的に適用されます。
- 詳細な経緯ではなく迅速な要約を求める開発者に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Summary strategy - Amazon Bedrock AgentCore**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/summary-strategy.html)

- **Amazon Bedrock AgentCore Memory: memory types, pricing, MCP and self-hosting (2026)**
  [詳細](https://www.developersdigest.tech/agent-memory/aws-agentcore-memory)

- **Add memory to your Amazon Bedrock AgentCore agent**
  [詳細](https://docs...

---

## 変更内容・新機能

Amazon Bedrock AgentCore Memory now keeps a full session summary for every session. It is a single record that gives a snapshot of what happened in the conversation. Summary chunks cover the conversation in more detail, while the full session summary captures the overall picture of where the session stands. AgentCore Memory updates it as new events arrive, so it always reflects the session so far. This works well for developers who want a quick recap rather than a play-by-play. Full session summ

---

## まとめ

- Amazon Bedrock AgentCore Memory now provides full session summaries について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-full-session-summaries)

### 関連情報

- [Summary strategy - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/summary-strategy.html)
- [Amazon Bedrock AgentCore Memory: memory types, pricing, MCP and self-hosting (2026)](https://www.developersdigest.tech/agent-memory/aws-agentcore-memory)
- [Add memory to your Amazon Bedrock AgentCore agent](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory.html)
- [Amazon Bedrock AgentCore Memory now provides full session summaries](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-full-session-summaries)
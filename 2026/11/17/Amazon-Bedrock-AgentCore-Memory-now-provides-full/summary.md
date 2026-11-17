# Amazon Bedrock AgentCore Memory がフルセッションサマリーを提供開始

Amazon Bedrock AgentCore Memory now provides full session summaries

**カテゴリ:** What's New
**公開日:** 2026-11-17T19:17:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-full-session-summaries)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Memory now provides full session summaries」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Memoryは、追加設定なしですべてのセッションにフルセッションサマリーを自動提供するようになりました。フルセッションサマリーは会話の全体像を示す単一の記録で、新しいイベントの到着に応じて更新されます。サマリー戦略があれば追加設定は不要で、既存セッションも含めて自動的に適用されます。詳細な経緯ではなく迅速な要約を求める開発者に適しています。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore Memory now keeps a full session summary for every session. It is a single record that gives a snapshot of what happened in the conversation. Summary chunks cover the conversation in more detail, while the full session summary captures the overall picture of where the session stands. AgentCore Memory updates it as new events arrive, so it always reflects the session so far. This works well for developers who want a quick recap rather than a play-by-play. Full session summ

## 対象ユーザー

Amazon Bedrock AgentCore Memory now keeps a full session summary for every session. It is a single record that gives a snapshot of what happened in the conversation. Summary chunks cover the conversation in more detail, while the full session summary captures the overall picture of where the session

## 詳細

Amazon Bedrock AgentCore Memory now keeps a full session summary for every session. It is a single record that gives a snapshot of what happened in the conversation. Summary chunks cover the conversation in more detail, while the full session summary captures the overall picture of where the session stands. AgentCore Memory updates it as new events arrive, so it always reflects the session so far. This works well for developers who want a quick recap rather than a play-by-play. Full session summaries come with the summary strategy and need no extra setup. Every memory that has a summary strategy gets them automatically, including existing sessions. Each summary is stored as a long-term memory record (memoryRecordType: FULL_SESSION) next to the session's summary chunks. You retrieve it with the Memory operations you already use (GetMemoryRecord, ListMemoryRecords, RetrieveMemoryRecords), and you can filter by record type (x-amz-agentcore-memory-recordType) to return only full session summaries. This feature is available in all AWS Regions where AgentCore Memory is available. 新機能: Amazon Bedrock AgentCore Memoryがすべてのセッションに対してフルセッションサマリーを提供。フルセッションサマリーは会話の全体像を示す単一の記録であり、新しいイベントの到着に応じて更新される。サマリー戦略があれば追加設定は不要であり、既存セッションも含めて自動的に適用される。詳細な経緯ではなく迅速な要約を求める開発者に適している。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-memory-full-session-summaries)
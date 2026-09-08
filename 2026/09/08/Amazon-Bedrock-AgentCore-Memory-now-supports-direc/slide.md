---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Memoryが長期メモリへの直接取り込みをサポート

Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory

**What's New** | 2026-09-08T16:00:00

---

## 概要

- Amazon Bedrock AgentCore Memoryに、短期メモリを経由せず長期メモリへ直接コンテンツを取り込めるIngestData APIが追加されました。
- 短期メモリに依存せず長期メモリを利用したい開発者に適した機能です。

---

## 前提・背景

### これまでの課題

Amazon Bedrock AgentCore Memoryに、IngestData APIによる長期メモリへの直接取り込み機能が追加されました。これまですべてのコンテンツは長期メモリ抽出の前に短期メモリイベントとして保存する必要がありましたが、IngestDataはこの要件を撤廃し、短期メモリとは独立して長期メモリを採用できるようになりました。会話型ペイロード（USER/ASSISTANTロール付きメッセージ）とJSONペイロード（行動イベント、アクティビティログ、システムイベント）の両方を

---

### 関連する最近の動向

- **AWS API Changes**
  [詳細](https://awsapichanges.info/archive/changes/b6cdac-bedrock-agentcore.html)

- **Amazon ...

---

## 変更内容・新機能

Amazon Bedrock AgentCore Memoryに、IngestData APIによる長期メモリへの直接取り込み機能が追加されました。これまですべてのコンテンツは長期メモリ抽出の前に短期メモリイベントとして保存する必要がありましたが、IngestDataはこの要件を撤廃し、短期メモリとは独立して長期メモリを採用できるようになりました。会話型ペイロード（USER/ASSISTANTロール付きメッセージ）とJSONペイロード（行動イベント、アクティビティログ、システムイベント）の両方をサポートし、CreateEventと同じ抽出パイプラインに供給されるオプションのメタデータも受け付けます。処理後はListMemoryRecordsまたはRetrieveMemoryRecordsで抽出結果を確認でき、Kinesis経由でリアルタイム通知をストリーミングし、ListMemoryExtractionJobsで失敗した抽出を再実行できます。IngestDataはAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで利用可能です。

---

## まとめ

- Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/agentcore-memory-direct-ingest)

### 関連情報

- [AWS API Changes](https://awsapichanges.info/archive/changes/b6cdac-bedrock-agentcore.html)
- [Amazon Bedrock AgentCore Memory now supports strictly consistent metadata for long-term memory](https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-memory-scmetadata)
- [Amazon Bedrock AgentCore Memory announces streaming notifications for long-term memory](https://aws.amazon.com/about-aws/whats-new/2026/03/agentcore-memory-streaming-ltm)
- [Amazon Bedrock AgentCore Memory: Building context-aware agents](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-memory-building-context-aware-agents)
- [Direct ingestion to long-term memory](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/long-term-ingest-data.html)
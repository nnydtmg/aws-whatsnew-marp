# Amazon Bedrock AgentCore Memoryが長期メモリへの直接取り込みをサポート

Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory

**カテゴリ:** What's New
**公開日:** 2026-09-08T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/agentcore-memory-direct-ingest)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Memory now supports direct ingestion to long-term memory」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Memoryに、短期メモリを経由せず長期メモリへ直接コンテンツを取り込めるIngestData APIが追加されました。短期メモリに依存せず長期メモリを利用したい開発者に適した機能です。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore Memoryに、IngestData APIによる長期メモリへの直接取り込み機能が追加されました。これまですべてのコンテンツは長期メモリ抽出の前に短期メモリイベントとして保存する必要がありましたが、IngestDataはこの要件を撤廃し、短期メモリとは独立して長期メモリを採用できるようになりました。会話型ペイロード（USER/ASSISTANTロール付きメッセージ）とJSONペイロード（行動イベント、アクティビティログ、システムイベント）の両方をサポートし、CreateEventと同じ抽出パイプラインに供給されるオプションのメタデータも受け付けます。処理後はListMemoryRecordsまたはRetrieveMemoryRecordsで抽出結果を確認でき、Kinesis経由でリアルタイム通知をストリーミングし、ListMemoryExtractionJobsで失敗した抽出を再実行できます。IngestDataはAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで利用可能です。

## 対象ユーザー

Amazon Bedrock AgentCore Memoryに、短期メモリを経由せず長期メモリへ直接コンテンツを取り込めるIngestData APIが追加されました。短期メモリに依存せず長期メモリを利用したい開発者に適した機能です。

## 詳細

Amazon Bedrock AgentCore Memoryに、IngestData APIによる長期メモリへの直接取り込み機能が追加されました。これまですべてのコンテンツは長期メモリ抽出の前に短期メモリイベントとして保存する必要がありましたが、IngestDataはこの要件を撤廃し、短期メモリとは独立して長期メモリを採用できるようになりました。会話型ペイロード（USER/ASSISTANTロール付きメッセージ）とJSONペイロード（行動イベント、アクティビティログ、システムイベント）の両方をサポートし、CreateEventと同じ抽出パイプラインに供給されるオプションのメタデータも受け付けます。処理後はListMemoryRecordsまたはRetrieveMemoryRecordsで抽出結果を確認でき、Kinesis経由でリアルタイム通知をストリーミングし、ListMemoryExtractionJobsで失敗した抽出を再実行できます。IngestDataはAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/agentcore-memory-direct-ingest)
# Amazon Bedrock AgentCore Memoryが長期メモリの設定可能なTTLをサポート

Amazon Bedrock AgentCore Memory now supports configurable time-to-live for long-term memory

**カテゴリ:** What's New
**公開日:** 2026-10-13T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-long-term-memory-ttl)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Memory now supports configurable time-to-live for long-term memory」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Memoryに、長期メモリレコードの設定可能な有効期限（TTL）機能が追加されました。データ保持要件の遵守やストレージ管理、古い洞察の自動削除を必要とするお客様に適した更新です。

## このアップデートで何が変わったか

- 新機能は、Amazon Bedrock AgentCore Memoryの長期メモリレコードに対して設定可能な有効期限（TTL）を指定できることです。
- デフォルトでは長期メモリレコードは期限切れになりませんが、定義した保持期間後に自動削除されます。
- リソース単位または特定のレコード単位で保持期間を設定できます。
- 設定または削除には新しい権限bedrock-agentcore:UpdateMemoryRecordExpirySpecificationが必要です。
- この更新は、データ保持要件を満たす必要があるお客様に適しています。
- また、ストレージの増加を管理したいお客様や、古い洞察を時間とともに削除したいお客様にも適しています。

## 詳細

- 新機能は、Amazon Bedrock AgentCore Memoryの長期メモリレコードに対して設定可能な有効期限（TTL）を指定できることです。
- デフォルトでは長期メモリレコードは期限切れになりませんが、定義した保持期間後に自動削除されます。
- リソース単位または特定のレコード単位で保持期間を設定できます。
- 設定または削除には新しい権限bedrock-agentcore:UpdateMemoryRecordExpirySpecificationが必要です。
- この更新は、データ保持要件を満たす必要があるお客様に適しています。
- また、ストレージの増加を管理したいお客様や、古い洞察を時間とともに削除したいお客様にも適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-long-term-memory-ttl)
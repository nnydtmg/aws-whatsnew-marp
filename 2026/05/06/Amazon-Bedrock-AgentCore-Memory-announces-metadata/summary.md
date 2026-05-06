# Amazon Bedrock AgentCore Memory announces metadata for long-term memory

**カテゴリ:** What's New
**公開日:** 2026-05-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-longterm-memory-metadata](https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-longterm-memory-metadata)

---

## 要約

Amazon Bedrock AgentCore Memoryが長期メモリレコードへのメタデータサポートを追加し、最大10個のインデックス付きキーによる構造化属性でのフィルタリングと検索が可能になりました。この機能は、エージェントの応答精度を向上させたい開発者や、大規模な会話データから効率的に情報を取得したい組織に最適です。

---

## 詳細

### 新機能の詳細

- Amazon Bedrock AgentCore Memoryが長期メモリ（LTM）レコードへのメタデータサポートを発表いたしました。

- メモリリソースごとに最大10個のインデックス付きキーを定義でき、STRING、NUMBER、STRING_LISTの型に対応しております。

- メタデータは取り込み時に付与することも、LLMが抽出指示に基づいて自動的に推論することも可能です。

- メタデータフィルタリング機能により、チケット番号、優先度、日付などの構造化属性でメモリレコードを検索できます。

- この機能は、関連性のないコンテキストを除外し、エージェントの応答精度を向上させるのに役立ちます。

- 本機能はAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで本日より利用可能です。

### 新機能の対象者

- **開発者・アーキテクト**: エージェントに高度なメモリ管理と検索機能が必要

- **エンタープライズ組織**: 大規模な会話データから構造化属性を使用して効率的に情報を取得

- **AIソリューション提供者**: セマンティック検索と構造化フィルタリングを組み合わせてAIエージェントの精度を向上させたいユーザー

---

## 関連トピック

- Amazon Bedrock AgentCore Memory - ストリーミング通知機能
- Amazon Bedrock AgentCore - メモリ機能概要
- AgentCore を使用したメモリ保持

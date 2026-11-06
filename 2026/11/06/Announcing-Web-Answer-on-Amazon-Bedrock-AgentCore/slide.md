---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore の Web Answer が一般提供開始

Announcing Web Answer on Amazon Bedrock AgentCore

**What's New** | 2026-11-05T20:56:00

---

## 概要

- Amazon Bedrock AgentCoreのWeb Answerが一般提供され、エージェントビルダーの皆様は単一の呼び出しで最新のウェブソースに基づく根拠付き回答を取得できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Announcing Web Answer on Amazon Bedrock AgentCore - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)

- **Announcing Web Search on Amazon Bedrock AgentCore**
  [詳細](https://aws.amazon.com/blogs/aws/announcing-web-search-on-amazon-bedrock-agentcore-ground-your-ai-agents-in-current-accurate-web-knowledge)

- **Amazon Bedrock AgentCore Add...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCoreにおけるWeb Answerの一般提供開始です。
- Web Answerは、自然言語の質問に対して根拠付きかつ引用付きの合成回答を単一の呼び出しで返すマネージドツールです。
- 本機能はWeb Searchを拡張し、ウェブコンテンツの検索から完成した回答の返却までを実現します。
- 本アップデートは、検索・取得・合成・引用のパイプラインを自ら構築・維持したくないエージェントビルダーの皆様に適しています。
- Web Answerはエージェントのように動作し、検索を計画し、複数を並列実行し、十分な証拠が集まったと判断した時点で回答します。
- ドメインの許可リスト・拒否リスト、公開日フィルターで検索範囲を制御できます。
- AgentCore Gatewayのターゲットとしてアタッチし、MCP経由で呼び出され、IAMで認証され、データは外部に送信されません（zero data egress）。
- 米国東部（バージニア北部）リージョンで利用可能で、ツール呼び出しごとの料金体系です。
- 2026年6月にリリースされたWeb 

---

## まとめ

- Announcing Web Answer on Amazon Bedrock AgentCore について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)

### 関連情報

- [Announcing Web Answer on Amazon Bedrock AgentCore - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)
- [Announcing Web Search on Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/aws/announcing-web-search-on-amazon-bedrock-agentcore-ground-your-ai-agents-in-current-accurate-web-knowledge)
- [Amazon Bedrock AgentCore Adds Three New Layers of Agent Knowledge](https://awsinsider.net/articles/2026/06/25/amazon-bedrock-agentcore-adds-three-new-layers-of-agent-knowledge.aspx)
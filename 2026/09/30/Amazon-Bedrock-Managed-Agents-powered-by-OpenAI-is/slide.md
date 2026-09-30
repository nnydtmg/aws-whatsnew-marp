---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Managed Agents が OpenAI 連携でプレビュー提供開始

Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview

**What's New** | 2026-09-29T21:10:00

---

## 概要

- Amazon Bedrock Managed Agentsは、OpenAIモデルに最適化されたエージェントをAWS内部で既存のガバナンスのもと実行できる新機能であり、プレビューで提供開始されました。
- AWS環境で安全にエージェントを構築したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **OpenAI on AWS Bedrock: Managed Agents in Preview**
  [詳細](https://www.jahanzaib.ai/blog/openai-on-aws-bedrock-managed-agents-2026)

- **OpenAI's agents can now run entirely inside Amazon's cloud**
  [詳細](https://thenextweb.com/news/openai-bedrock-managed-agents-aws-devday)

- **OpenAI Models on Amazon Bedrock**
  [詳細](https://www.aboutamazon.com/news/aws/bedrock-openai-models)

---

## 変更内容・新機能

- 新機能は、AWSとOpenAIが共同開発したAmazon Bedrock Managed Agentsのプレビュー提供です。
- OpenAIモデル向けエージェントをAWS内部で既存のID、権限、ガバナンス制御を用いて実行できます。
- 状態保持、ツール利用、コード実行、複数ステップ調整を管理し、耐久セッションやスキル、MCP接続に対応します。
- 各エージェントは独自のIAMロールを持ち、人間承認とCloudTrail記録をサポートします。
- プレビュー中は基盤リソース以外に追加料金がなく、指定リージョンで利用可能です。
- 本更新は、AWS環境でOpenAIエージェントを安全に構築したいお客様に適しています。

---

## まとめ

- Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/)

### 関連情報

- [OpenAI on AWS Bedrock: Managed Agents in Preview](https://www.jahanzaib.ai/blog/openai-on-aws-bedrock-managed-agents-2026)
- [OpenAI's agents can now run entirely inside Amazon's cloud](https://thenextweb.com/news/openai-bedrock-managed-agents-aws-devday)
- [OpenAI Models on Amazon Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models)
- [Amazon Bedrock now offers OpenAI models, Codex, and Managed Agents (Limited Preview)](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-openai-models-codex-managed-agents)
- [AWS Pushes the Agent Stack at What's Next 2026](https://futurumgroup.com/insights/aws-pushes-the-agent-stack-quick-connect-verticals-openai-on-amazon-bedrock)
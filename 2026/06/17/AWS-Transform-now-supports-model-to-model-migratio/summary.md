# AWS Transform、生成AIワークロードのモデル間移行評価に対応

AWS Transform now supports model-to-model migration assessment for generative AI workloads

**カテゴリ:** What's New
**公開日:** 2026-06-16T21:55:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-transform-model-to-model-assessments)

このページでは、AWS What's Newで発表された「AWS Transform now supports model-to-model migration assessment for generative AI workloads」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transformの新機能は、生成AIワークロードをサードパーティプロバイダーからAmazon Bedrockへ移行するための包括的な評価と移行計画を提供するモデル間移行カスタム変換です。この機能は、複数のプロバイダーやフレームワークからの移行に対応し、セキュリティ、コスト最適化、運用効率の向上を実現したい組織に最適です。

## このアップデートで何が変わったか

### 新機能の概要

AWS Transformは、生成AIワークロードのモデル間移行評価機能を新たにサポートするようになりました。サードパーティプロバイダーからAmazon Bedrockへの移行に関する包括的な移行計画を作成します。

### 主な特徴

- **AI搭載コードスキャン**: AI搭載エージェントがコードベースをスキャンし、使用中のすべてのAI SDKとモデルを識別
- **複数プロバイダー対応**: OpenAI、Google Gemini、Anthropic SDK、LiteLLMやOllamaなどのオープンソースモデルからの移行に対応
- **フレームワーク対応**: LangChainやLlamaIndexなどのフレームワークラッピングパターン、CrewAIやLangGraphなどのエージェントアーキテクチャに対応

### セキュリティと運用

- IAMベースのセキュリティ
- VPCエンドポイント分離
- プロンプトキャッシング
- Amazon Bedrock Guardrails
- Amazon CloudWatchによる統一運用ツール

### コスト最適化

- インテリジェントなコスト最適化により、段階的なモデルルーティング推奨とプロンプトキャッシング分析が提供
- モデルのライフサイクル認識により、終了予定日が90日以内のモデルは推奨から除外

### 移行パス

- 一部のワークロードについては、ゼロコード変更の移行パスとしてAmazon BedrockのOpenAI互換エンドポイントが推奨
- AWS Transformが提供されているすべてのAWSリージョンで利用可能
- 標準のAWS Transform料金以外の追加料金はかかりません

## 対象ユーザー

- **複数のAIプロバイダーを使用している企業**: OpenAI、Google、Anthropicなど複数のサービスを使用中の組織
- **コスト最適化を求める組織**: AIの運用コストを削減したい企業
- **セキュリティを重視する企業**: IAM統合とVPC分離により、セキュリティ態勢を向上させたい企業
- **AI移行を検討中の組織**: 既存のAIワークロードをマネージドサービスに集約したい企業

## 詳細

### 技術的詳細

**コードスキャンと識別**
- AI搭載エージェントがコードベースをスキャン
- 使用中のすべてのAI SDKとモデルを自動識別
- 隠れた依存関係も検出

**対応テクノロジースタック**
- **SDK**: OpenAI SDK、Google Gemini SDK、Anthropic SDK、LiteLLM、Ollama
- **フレームワーク**: LangChain、LlamaIndex
- **エージェント**: CrewAI、LangGraph

**セキュリティ**
- IAMベースの統一認証
- VPCエンドポイント経由の分離ネットワーク通信
- プロンプトキャッシング機構
- Amazon Bedrock Guardrailsによるコンテンツフィルタリング

**運用性**
- Amazon CloudWatchによるログ・メトリクス統一管理
- モデルのライフサイクル情報を組み込んだ推奨ロジック
- 段階的なルーティング推奨による段階的な移行サポート

**コスト最適化**
- プロンプトキャッシング分析により、キャッシング効率を可視化
- 段階的なモデルルーティング推奨により、コスト効率的な移行パスを提示
- 追加費用なし（既存の AWS Transform 料金内）

## 参考リンク

- [AWS What's New - 元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-transform-model-to-model-assessments)
- [AWS Transform ドキュメント](https://docs.aws.amazon.com/transform/)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
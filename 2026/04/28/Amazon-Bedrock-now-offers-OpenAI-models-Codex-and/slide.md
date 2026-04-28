---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock
OpenAI モデル、Codex、Managed Agents が登場

**発表日: 2026年4月28日**

---

## 概要

### 3つの主要な新サービス

- **OpenAI frontier models**: Amazon Bedrock を通じて最新の OpenAI モデルにアクセス可能
- **Codex**: AWS 環境でのエンタープライズ向けコーディングエージェント
- **Managed Agents powered by OpenAI**: 本番環境対応のエージェントを迅速にデプロイ

### エンタープライズグレードのセキュリティ

- IAM、AWS PrivateLink、ガードレール、暗号化、CloudTrail ログ
- セキュリティと運用成熟度を重視する企業組織に最適

---

## 前提・背景

### 市場の需要

- エンタープライズ組織が最も高度な AI モデルと機能を必要としている
- セキュリティ、運用成熟度、データガバナンスが本番環境で重要
- 既存のクラウドインフラストラクチャとの統合が必須

### AWS と OpenAI の拡大パートナーシップ

- AWS と OpenAI が frontier intelligence を提供するパートナーシップを拡大
- $100 billion over 8 years の契約で AI インフラストラクチャを強化
- AWS が OpenAI Frontier の exclusive third-party cloud distribution provider に

---

## 主な機能と改善

### 1. OpenAI Frontier Models on Amazon Bedrock

- **利用可能なモデル**: GPT-5.5、GPT-5.4 など最新の OpenAI モデル
- **統一されたアクセス**: 既存の Bedrock API を使用
- **セキュリティ継承**: IAM、PrivateLink、ガードレール、暗号化、CloudTrail
- **コスト最適化**: 既存の AWS クラウドコミットメントに適用可能

### 2. Codex on Amazon Bedrock

- **AWS 環境との統合**: AWS 認証情報を使用
- **多様なインターフェース**: Codex CLI、デスクトップアプリ、VS Code 拡張機能
- **エンタープライズワークフロー**: コードの記述、リファクタリング、管理をサポート

---

## 主な機能と改善 (続き)

### 3. Amazon Bedrock Managed Agents powered by OpenAI

- **OpenAI Agent Harness**: より高速な実行、優れた推論、信頼性の高いタスク制御
- **エージェントのアイデンティティ**: 各エージェントが独自のアイデンティティと監査ログを保有
- **迅速なデプロイ**: 本番環境対応のエージェントを AWS に素早くデプロイ
- **AgentCore との統合**: デフォルトのコンピュート環境を提供

---

## エンタープライズコントロール

<div class="columns">
<div>

### セキュリティ機能

- **IAM**: ユーザー認証と権限管理
- **PrivateLink**: プライベート接続
- **ガードレール**: コンテンツ安全性
- **暗号化**: データ保護

</div>
<div>

### 運用機能

- **CloudTrail ログ**: 完全な監査証跡
- **Bedrock API**: 統一されたインターフェース
- **AgentCore**: デフォルトコンピュート環境
- **既存コミットメント**: AWS クラウドコミットメント対応

</div>
</div>

---

## ユースケース

### Agentic Workflows

- 複数ステップの問題を推論し、ツールを呼び出し、反復処理
- Managed Agents で本番環境対応のエージェントをデプロイ

### ソフトウェア開発

- 大規模コードベースでの構築、分析、デバッグ
- Codex 経由で Bedrock でエンタープライズ規模の開発を実現

### 複雑な分析と推論

- 調整可能な推論レベルで分析課題を解決
- 財務計画、規制解釈、マルチステップの問題解決

---

## 効果・メリット

<div class="columns-3">
<div>

### 統合

- 既存 Bedrock API の活用
- AWS インフラとの完全統合
- ワンハブのモデルアクセス

</div>
<div>

### セキュリティ

- エンタープライズグレードのコントrol
- 完全な監査ログ
- データガバナンス実現

</div>
<div>

### コスト効率

- 既存コミットメント対応
- インフラ最適化
- 統一管理でコスト削減

</div>
</div>

---

## まとめ

### Amazon Bedrock の戦略的ポジション

- **frontier intelligence**: 最新の OpenAI モデルを AWS で実行
- **セキュリティ重視**: エンタープライズコントロールを完全継承
- **統合プラットフォーム**: モデル選択、インフラ、コーディング支援がワンプラットフォーム

### 対象顧客

- 最高度の AI 能力を求めるエンタープライズ組織
- セキュリティと運用成熟度が重要なワークロード
- AWS インフラを信頼し OpenAI の能力を活用したい企業

### 次のステップ

1. 限定プレビューへの登録
2. パイロットプロジェクトの実施
3. 本番環境への段階的展開

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-openai-models-codex-managed-agents/
- **AWS Blog**: https://aboutamazon.com/news/aws/bedrock-openai-models
- **Amazon Bedrock OpenAI**: https://aws.amazon.com/bedrock/openai/
- **Bedrock AgentCore**: https://aws.amazon.com/bedrock/agentcore/
- **AWS Agentic AI**: https://aws.amazon.com/ai/agentic-ai/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
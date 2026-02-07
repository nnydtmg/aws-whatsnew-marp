---
marp: true
theme: default
paginate: true
---

# Claude Opus 4.6 now available in Amazon Bedrock

**What's New** | 2026-02-05

---

## 概要

- Claude Opus 4.6がAmazon Bedrock上で利用開始。
- Anthropicの最先端モデルで、Agentic AI、複雑なコーディング、エンタープライズワークフロー対応が特徴。
- 200K/1Mトークンのコンテキスト対応。

---

## 前提・背景

### 関連する最近の動向

- **Claude Opus 4.6 now available in Amazon Bedrock - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/2/claude-opus-4.6-available-amazon-bedrock/)

- **Claude on Amazon Bedrock - Claude API Docs**
  [詳細](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock)

- **Introducing Claude Opus 4.6 - Anthropic**
  [詳細](https://www.anthropic.com/news/claude-opus-4-6)

---

## 変更内容・新機能

### Agentic Workflows
- 複数のツール操作を確実に管理
- サブエージェントを主体的に展開
- 最小限の監視で複雑なタスクを実行

### Complex Coding
- 長期的なコーディングプロジェクト対応
- 大規模コードベースでの信頼性向上
- 要件収集から保守までのライフサイクル全体をカバー

### Enterprise Workflows
- 金融分析：手動でのコンパイルに数日要する洞察を自動化
- サイバーセキュリティ：微妙な攻撃パターンの検出
- コンピューターユース：アプリケーション間のデータ移動

### Context Window
- 200Kトークン標準対応
- 1Mトークンプレビュー対応
- 大規模ドキュメントとコードベース処理に対応

---

## パフォーマンス特性

- **推論能力**: 高度な推論と多段階オーケストレーション
- **信頼性**: 複数ツール環境での業界トップクラスの信頼性
- **精度**: コード品質向上、自己チェック・デバッグ機能強化
- **スケーラビリティ**: 大規模コードベース対応

---

## 利用可能なプラットフォーム

### Amazon Bedrock
- モデルID: `anthropic.claude-opus-4-6-v1`
- グローバル対応
- 全リージョンで利用可能（US、EU、JP、APAC）

### その他のプラットフォーム
- Claude Developer Platform
- GitHub Copilot (Pro/Business/Enterprise)
- Google Cloud Vertex AI
- Microsoft Foundry

---

## 料金

- **入力トークン**: $5 / 100万トークン
- **出力トークン**: $25 / 100万トークン
- **プロンプトキャッシング**: 最大90%のコスト削減
- **バッチ処理**: 50%のコスト削減

---

## 主要なユースケース

1. **金融サービス**: 複雑な分析と報告書生成
2. **セキュリティ**: 脅威検出とパッチ管理
3. **ソフトウェア開発**: AIアシスタント機能
4. **エンタープライズ自動化**: ワークフロー自動化
5. **リサーチ・分析**: 大規模ドキュメント処理

---

## 実装のポイント

- **既存Bedrock利用者**: シームレスな統合
- **モデル選択**: 高度なタスクにはOpus 4.6、一般的なタスクはSonnetを検討
- **コスト最適化**: プロンプトキャッシングとバッチ処理を活用
- **1M context**: 大規模コンテキスト処理が必要な場合のプレビュー利用

---

## まとめ

- **即座の利用**: 本日からAmazon Bedrockで利用可能
- **強力な機能**: Agentic、Coding、Enterprise対応で新境地を開拓
- **スケール対応**: 200K/1Mトークンコンテキスト対応
- **エコシステム**: 複数プラットフォーム上で利用可能

---

## 参考URL

- [AWS What's New: Claude Opus 4.6 now available in Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/2/claude-opus-4.6-available-amazon-bedrock/)
- [Claude on Amazon Bedrock - Claude API Docs](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock)
- [Introducing Claude Opus 4.6 - Anthropic](https://www.anthropic.com/news/claude-opus-4-6)
- [Claude Opus 4.6 is now generally available for GitHub Copilot](https://github.blog/changelog/2026-02-05-claude-opus-4-6-is-now-generally-available-for-github-copilot/)
- [Claude Opus 4.6 - Anthropic](https://www.anthropic.com/claude/opus?hl=en-IN)
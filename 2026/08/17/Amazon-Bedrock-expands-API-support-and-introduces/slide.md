---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock、OpenAI モデルのクロスリージョン推論機能を導入

Amazon Bedrock expands API support and introduces Cross Region Inferencing for OpenAI models

**What's New** | 2026-08-17

---

## 概要

- Amazon Bedrockは、OpenAI GPT-5.6モデルのサポート拡大とクロスリージョン推論機能を導入し、複数のAWSリージョン間での自動ルーティングによりスループット向上とコスト削減を実現しました。
- 本機能は、高スループット要件を持つ大規模アプリケーションやマルチリージョン運用を行うエンタープライズ顧客に特に有用です。

---

## 前提・背景

### 市場の動向と課題

- **高いスループット要求**: エンタープライズアプリケーションでは、複数リージョン間でのスケーラビリティが重要
- **マルチリージョン運用の複雑性**: 複数のAWSリージョンにおけるキャパシティ管理が課題
- **OpenAI APIとAWSの統合**: エンタープライズ顧客がOpenAI APIの統一的な管理を求める

### Amazon Bedrockの進化

- 次世代推論エンジンの導入により、スケーラビリティと信頼性が向上
- OpenAI GPT-5.6モデル（Sol、Terra、Luna）の一般提供開始（2026年7月）
- クロスリージョン推論機能により、グローバルな展開をサポート

---

## 変更内容・新機能

### 1. API サポートの拡大

- **OpenAI GPT-5.6モデルの完全サポート**
  - Sol（高度な推論）、Terra（本番運用）、Luna（高速・低コスト）
  - bedrock-runtimeエンドポイントでの実行

- **マルチAPI対応**
  - Responses API
  - Converse API
  - Chat Completions API

---

## 新機能: クロスリージョン推論（CRIS）

### 3つの推論オプション

<div class="columns">
<div>

### In-Region

- 単一AWSリージョン内でのみ処理
- **用途**: データ所在地要件が厳格
- **特徴**: 最高のセキュリティ、規制準拠

</div>
<div>

### Geo Cross-Region

- 地域内（US、EU、APAC）でのルーティング
- **用途**: 地域内データ処理
- **特徴**: スケーリングと規制バランス

</div>
<div>

### Global Cross-Region

- すべての商用AWSリージョンでルーティング
- **用途**: 最高のスケーラビリティ
- **特徴**: 最低コスト、最高スループット

</div>
</div>

---

## クロスリージョン推論の利点

### パフォーマンス向上

- **スループット向上**: 需要急増時に自動的に複数リージョンにルーティング
- **レイテンシー削減**: ユーザーに近いリージョンからの処理
- **バースト対応**: エージェントのバースト型トラフィックに対応

### コスト最適化

- **トークンあたりのコスト**: グローバル推論が最もコスト効率的
- **キャパシティ効率**: リソース利用率の最適化
- **AWS コミットメント対象**: 既存のAWS計画で利用可能

---

## 管理・監視・セキュリティ

### IAM と アカウント管理

- OpenAI APIがbedrock-runtimeで実行される
- **既存のBedrockアカウントレベルコントロールが適用**
- AWS Identity and Access Management（IAM）ポリシーで管理
- CloudTrailログに記録

### 監視・ログ

- **Bedrockモデル呼び出しロギング**: リクエスト・レスポンスの記録
- **Amazon CloudWatch Logs**: ログの集約と分析
- **CloudWatch Metrics**: パフォーマンスモニタリング
- **AWS Cost Explorer**: コスト追跡と最適化

---

## 主な利用シーン

### 高スループット型アプリケーション

- 大規模言語モデルを活用したAIエージェント
- 複数のツールを統合した自動化ワークフロー
- リアルタイム推論が必要なシステム

### マルチリージョン運用

- グローバル展開するSaaS/PaaS
- 地域別データ処理要件のあるシステム
- ディザスタリカバリーとビジネス継続計画（BCP）

### コスト最適化

- 低レイテンシー要件がない用途
- バッチ処理型の推論タスク
- スケーラブルなAI機能の統合

---

## 対応状況

### 利用可能なリージョン

- すべての商用AWSリージョン
- OpenAI GPT-5.6モデルが提供されているリージョン

### 新機能の追加

- **US Geo（US CRIS）サポート**: 米国内でのジオクロスリージョン推論

### 価格設定

- **OpenAIファーストパーティレート**: OpenAI公開料金と同等
- **AWS コミットメント対象**: 既存のAWS予約容量で利用可能

---

## 次のステップ

### 実装のポイント

1. **現在の使用状況を評価**
   - 現在のOpenAI API使用状況とコストを確認
   - スループット要件とレイテンシー要件を把握

2. **推論オプションの選定**
   - In-Region：規制要件がある場合
   - Geo Cross-Region：地域内データ処理が必要な場合
   - Global Cross-Region：コスト最適化を優先する場合

3. **段階的な移行計画**
   - パイロットプロジェクトで検証
   - 本番環境への段階的な展開
   - 監視・ログの設定

---

## まとめ

### Amazon Bedrockの戦略的な位置づけ

- **OpenAI統合の完全化**: Bedrock プラットフォームでのOpenAI APIの完全統合
- **エンタープライズ対応**: IAM、監視、コスト管理の統一
- **グローバルスケール**: クロスリージョン推論による世界規模での展開

### 期待される効果

- スループット向上とレイテンシー削減
- コスト最適化（グローバル推論で最大削減）
- 運用管理の簡素化
- コンプライアンス要件への対応

### 推奨事項

- 既存のOpenAI API利用をAmazon Bedrokに移行を検討
- クロスリージョン推論でグローバル展開を加速
- CloudWatch等の監視で運用効率を向上

---

## 参考リソース

### 元記事

- [AWS What's New: Amazon Bedrock expands API support](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)

### 関連リソース

- [OpenAI models GPT-5.6—now on Amazon Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models)
- [OpenAI GPT-5.6 Sol, Terra, and Luna are now generally available on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-gpt-5-6-sol-terra-and-luna-are-now-generally-available-on-amazon-bedrock)
- [Securing Amazon Bedrock cross-Region inference](https://serverlessland.com/blog/securing-amazon-bedrock-cross-region-inference-geographic-and-global---artificial-intelligence)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
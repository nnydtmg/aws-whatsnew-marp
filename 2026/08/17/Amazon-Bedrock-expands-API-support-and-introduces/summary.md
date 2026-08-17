# Amazon Bedrock、OpenAI モデルのクロスリージョン推論機能を導入

Amazon Bedrock expands API support and introduces Cross Region Inferencing for OpenAI models

**カテゴリ:** What's New
**公開日:** 2026-08-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)

このページでは、AWS What's Newで発表された「Amazon Bedrock expands API support and introduces Cross Region Inferencing for OpenAI models」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrockは、OpenAI GPT-5.6モデルのサポート拡大とクロスリージョン推論機能を導入し、複数のAWSリージョン間での自動ルーティングによりスループット向上とコスト削減を実現しました。本機能は、高スループット要件を持つ大規模アプリケーションやマルチリージョン運用を行うエンタープライズ顧客に特に有用です。

## このアップデートで何が変わったか

- Amazon Bedrockが、OpenAI GPT-5.6モデル（Sol、Terra、Luna）のbedrock-runtimeエンドポイントでのサポートを拡大しました。
- Responses API、Converse API、Chat Completions APIに対応するようになりました。
- クロスリージョン推論機能が追加され、複数のAWSリージョン間で推論リクエストが自動的にルーティングされます。
- グローバルクロスリージョン推論により、すべての商用AWSリージョンからアクセス可能となり、需要急増時により高いスループットが実現されます。
- ジオクロスリージョン推論により、特定の地域内でデータを処理しながらスケーリングが可能になり、新たにUS Geo（US CRIS）サポートが追加されました。
- グローバル推論はリージョン内推論やジオ推論よりもトークンあたりのコストが低くなっています。
- OpenAI APIがbedrock-runtimeで実行されるため、既存のBedrockモデル用のアカウントレベルコントロールが適用されます。
- 使用状況はBedrockモデル呼び出しロギング、Amazon CloudWatch Logs、Amazon CloudWatch メトリクス、AWS Cost Explorerで追跡・管理できます。

## 詳細

### API サポートの拡大

- **OpenAI GPT-5.6モデルの完全サポート**
  - Sol（高度な推論）、Terra（本番運用）、Luna（高速・低コスト）
  - bedrock-runtimeエンドポイントでの実行
  - Responses API、Converse API、Chat Completions APIに対応

### クロスリージョン推論（CRIS）の3つのオプション

1. **In-Region推論**
   - 単一AWSリージョン内でのみ処理
   - 用途：データ所在地要件が厳格な場合
   - 特徴：最高のセキュリティと規制準拠

2. **Geo Cross-Region推論**
   - 地域内（US、EU、APAC）でのルーティング
   - 用途：地域内データ処理が必要な場合
   - 特徴：スケーリングと規制要件のバランス
   - 新機能：US Geo（US CRIS）サポート追加

3. **Global Cross-Region推論**
   - すべての商用AWSリージョンでルーティング
   - 用途：最高のスケーラビリティとコスト最適化
   - 特徴：最も低いトークンあたりのコスト

### パフォーマンスと信頼性

- **スループット向上**：需要急増時にバースト型トラフィックに対応
- **レイテンシー削減**：複数リージョンでの自動ルーティング
- **キャパシティ管理**：複数リージョン間の効率的な利用

### 管理・監視・セキュリティ

- **IAM管理**：既存のBedrockアカウントレベルコントロールが適用
- **CloudTrailログ**：すべてのAPI呼び出しを記録
- **監視オプション**：
  - Bedrockモデル呼び出しロギング
  - Amazon CloudWatch Logs
  - CloudWatch Metrics
  - AWS Cost Explorer

### 価格設定

- **OpenAIファーストパーティレート**：OpenAI公開料金と同等
- **AWS コミットメント対象**：既存のAWS予約容量で利用可能
- **コスト削減**：グローバル推論が最もコスト効率的

## 適用対象者

- **高スループット要件のあるアプリケーション**：複数のツールを統合したAIエージェント、リアルタイム推論システム
- **マルチリージョン運用企業**：グローバル展開するSaaS/PaaS、地域別データ処理要件のあるシステム
- **コスト最適化を重視**：スケーラブルなAI機能の統合、バッチ処理型の推論タスク
- **エンタープライズ顧客**：OpenAI APIの統一管理と監視が必要な組織

## 今後の対応

- すべての商用AWSリージョンで利用可能
- OpenAI GPT-5.6モデルが提供されているすべてのリージョンで対応
- 段階的な機能拡張を予定

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)
- [OpenAI models GPT-5.6—now on Amazon Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models)
- [OpenAI GPT-5.6 Sol, Terra, and Luna are now generally available on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-gpt-5-6-sol-terra-and-luna-are-now-generally-available-on-amazon-bedrock)
- [Securing Amazon Bedrock cross-Region inference](https://serverlessland.com/blog/securing-amazon-bedrock-cross-region-inference-geographic-and-global---artificial-intelligence)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
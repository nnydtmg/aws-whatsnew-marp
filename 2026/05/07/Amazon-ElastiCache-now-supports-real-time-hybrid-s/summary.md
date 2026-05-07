# Amazon ElastiCache now supports real-time hybrid search with vector and full-text

**カテゴリ:** What's New
**公開日:** 2026-05-06T19:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-hybrid-search/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-hybrid-search/)

---

## 要約

Amazon ElastiCacheは、ベクトル検索とフルテキスト検索を組み合わせたリアルタイムハイブリッド検索機能をサポートするようになり、AIエージェント、RAGシステム、eコマースプラットフォームなどの開発者にとって、より関連性の高い検索結果をマイクロ秒単位のレイテンシーで提供できるようになりました。この機能はElastiCache for Valkey 9.0以上で追加費用なしに利用可能です。

## 詳細

### 主な機能

- Amazon ElastiCacheは、ベクトル検索とフルテキスト検索を単一のクエリで組み合わせるリアルタイムハイブリッド検索に対応するようになりました
- セマンティック意味と正確なキーワードマッチングを組み合わせることで、どちらか一方の方法だけを使用するよりも関連性の高い検索結果を提供できます
- Amazon Bedrock、Amazon SageMaker、Anthropic、OpenAIなどの人気プロバイダーから数十億のエンベディングにわたってハイブリッド検索を実行でき、マイクロ秒単位の低レイテンシーと最大99%のリコール率を実現します
- データは書き込み完了時に即座に検索可能になるため、アプリケーションは常に最新のベクトルとテキストを検索できます

### ユースケース

- **AIエージェントメモリ**: エージェントが複雑なタスクを実行する際のメモリ検索
- **RAGシステム**: LLMに情報を提供するための効率的な情報検索
- **eコマースプラットフォーム**: 関連製品の検出と推奨
- **ストリーミングプラットフォーム**: コンテンツの関連推奨

### パフォーマンス

- ElastiCache for Valkey は、AWS上の一般的なベクトルデータベースの中で最も低いレイテンシーと最高のスループット、最高の価格性能を95%以上のリコール率で提供します
- ハイブリッド検索は、すべての商用AWSリージョン、AWS GovCloud（US）リージョン、および中国リージョンで利用可能です
- ElastiCache バージョン9.0以上のValkey上で追加費用なしで利用できます

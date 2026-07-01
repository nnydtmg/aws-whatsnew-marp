# Amazon OpenSearch Service のログ分析最適化エンジン

Amazon OpenSearch Service optimized for log analytics

**カテゴリ:** What's New
**公開日:** 2026-07-01T02:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-service-optimized-log-analytics)

このページでは、AWS What's Newで発表された「Amazon OpenSearch Service optimized for log analytics」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon OpenSearch Serviceの新しいログ分析最適化エンジンは、最大4倍の価格性能向上と70%のストレージ削減を実現し、クラウドネイティブアーキテクチャやAIワークロードの拡大に対応するチームに最適です。このエンジンは全文検索と分析クエリの両機能を統合し、追加料金なしで12地域で利用可能になります。

## このアップデートで何が変わったか

### 価格性能の向上

- 内部ベンチマークにおいて最大4倍優れた価格性能を提供

### ストレージの最適化

- 新しいカラムナーストレージで最大70%のストレージ削減が可能
- 同じコストでデータを最大3倍保持することが可能

### パフォーマンスの向上

- インジェスション スループットが最大2倍向上
- 分析クエリが最大2倍高速化

### 機能統合

- 全文検索機能とログ分析の効率性が1つのサービスで統合
- インシデント調査と傾向分析の両方に対応

### クエリ言語とアクセス

- PPLおよびSQLによるクエリが可能
- OpenSearch UI、API、JDBC/ODBCドライバ、Query Workbenchを通じてアクセス可能
- 全文検索述語と分析SQLを同じクエリで組み合わせ可能

## 対象ユーザー

- ログ分析ワークロードを扱う企業
- クラウドネイティブアーキテクチャを採用している組織
- AIワークロード対応を検討しているチーム
- ストレージコスト削減を必要とする企業

## 活用シーン

### セットアップ方法

1. OpenSearch 3.5以上で新しいドメインを作成
2. ユースケースを「observability」に設定
3. エンジンモードを「optimized」に設定

### ユースケース

1. **インシデント調査**: ログから障害原因を素早く特定
2. **トレンド分析**: 時系列データの効率的な分析
3. **クラウドネイティブアーキテクチャ**: マイクロサービスの膨大なログ管理

## 利用可能性

- **地域**: 米国、カナダ、アジア太平洋、ヨーロッパの12地域
- **料金**: 追加料金なし（既存の Amazon OpenSearch Service 料金体系）

## 詳細情報

### 新しいログ分析最適化エンジンの特徴

1. **カラムナーストレージ**
   - ストレージ削減: 最大70%削減
   - データ保持量: 同じコストで最大3倍保持可能

2. **パフォーマンス指標**
   - インジェスション スループット: 最大2倍向上
   - 分析クエリ速度: 最大2倍高速化
   - 価格性能: 最大4倍優れた内部ベンチマーク

3. **機能統合**
   - 全文検索と分析クエリの統合
   - インシデント調査と傾向分析に対応
   - 複雑なシステム統合が不要

4. **アクセス方法**
   - OpenSearch UI
   - REST API
   - JDBC/ODBCドライバ
   - Query Workbench

## 参考リンク

- [元記事 - AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-service-optimized-log-analytics)
- [Amazon OpenSearch Service ドキュメント](https://docs.aws.amazon.com/opensearch-service/)
- [Amazon OpenSearch Service Agentic AI](https://aws.amazon.com/about-aws/whats-new/2026/03/opensearch-agentic-ai-log-analytics-observability)
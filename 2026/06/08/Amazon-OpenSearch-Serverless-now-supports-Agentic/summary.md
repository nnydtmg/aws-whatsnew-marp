# Amazon OpenSearch Serverless が Agentic Search をサポート開始

Amazon OpenSearch Serverless now supports Agentic Search

**カテゴリ:** What's New
**公開日:** 2026-06-08
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/opensearch-agentic-search/)

このページでは、AWS What's Newで発表された「Amazon OpenSearch Serverless now supports Agentic Search」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon OpenSearch Serverlessが新たにAgentic Search機能を提供開始し、ユーザーは自然言語で直感的にデータを検索できるようになりました。この機能は、複雑なDSLクエリ作成の知識がないユーザーや、検索業務の効率化を求める企業にとって特に有用です。

## このアップデートで何が変わったか

### 主な変更点

1. **自然言語クエリ機能**: 複雑なDSLクエリを書かずに自然言語で検索可能
2. **LLM搭載**: QueryPlanningToolにより自然言語をDSLに自動変換
3. **エージェント対応**: 検索戦略の自動計画と実行
4. **カスタマイズ性**: APIまたはOpenSearch Dashboardsで動作をカスタマイズ可能
5. **ガイド付きUI**: OpenSearch UIでエージェント作成・実行が容易に
6. **全リージョン対応**: AWS ConsoleからOpenSearch Serverlessが利用可能なすべてのコマーシャルリージョンで利用可能

### 使用例

- 「東京への800ドル以下のフライトを探す」
- 「今月の電子機器カテゴリーの売上トップ商品を表示する」

## 対象ユーザー

### 主要な利用者層

1. **DSQL未経験者**: 複雑なクエリ言語を習得していないビジネスユーザー
2. **ビジネスアナリスト**: 自然言語でアドホック分析を実施したい担当者
3. **アプリケーション開発者**: 自然言語インターフェースを必要とするAI applications
4. **企業IT**: データ検索業務の効率化とセルフサービスBI導入を目指す組織
5. **AIエージェント開発者**: Agentic AIの構築・運用を行うデベロッパー

## 詳細

### Agentic Search の動作メカニズム

1. ユーザーが自然言語で質問を入力
2. LLM搭載QueryPlanningToolが自然言語を解析
3. 適切なDSLクエリに変換し、検索戦略を計画
4. OpenSearch Serverlessが最適な検索を実行
5. 結果をユーザーに返却

### 実装方法

- **API実装**: POST /_plugins/_ml/agents/_register でエージェント登録
- **UIベース**: OpenSearch Dashboardsでのガイド付き設定
- **検索パイプライン**: agentic_query_translator の設定
- **自然言語クエリ**: agentic query clause でクエリ実行

### 対応リージョン

- AWS ConsoleからOpenSearch Serverlessが利用可能なすべてのAWSコマーシャルリージョン

## メリットと効果

### 技術的なメリット

- **学習曲線の緩和**: DQL習得コストが不要
- **開発速度向上**: クエリ作成時間の短縮
- **拡張性**: 既存のOpenSearch機能との統合が容易

### ビジネス上のメリット

- **業務効率化**: データ検索時間を大幅削減
- **コスト削減**: 自動スケーリングによるリソース最適化
- **ユーザー満足度**: 直感的なインターフェースによる利便性向上
- **イノベーション加速**: Agentic AI対応により新規ユースケース開拓

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/opensearch-agentic-search/)
- [Amazon OpenSearch Service ドキュメント](https://docs.aws.amazon.com/opensearch-service/)
- [Agentic Search 設定ガイド](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-configure-agentic-search.html)
- [AWS ブログ記事](https://aws.amazon.com/blogs/aws/introducing-the-next-generation-of-amazon-opensearch-serverless-for-building-your-agentic-ai-applications)
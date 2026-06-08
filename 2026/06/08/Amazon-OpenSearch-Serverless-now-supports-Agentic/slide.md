---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch Serverless が Agentic Search をサポート開始

Amazon OpenSearch Serverless now supports Agentic Search

**What's New** | 2026-06-08

---

## 概要

- Amazon OpenSearch Serverlessが新たにAgentic Search機能を提供開始し、ユーザーは自然言語で直感的にデータを検索できるようになりました。
- この機能は、複雑なDSLクエリ作成の知識がないユーザーや、検索業務の効率化を求める企業にとって特に有用です。

---

## 前提・背景

### 検索業務の課題

- 複雑なDSLクエリの習得が必要で、ユーザーの参入障壁が高い
- 自然言語での直感的な検索ニーズの高まり
- AIエージェント技術による検索の自動化への期待

### Agentic Search の位置付け

- LLMとQueryPlanningToolを組み合わせた新世代の検索機能
- Amazon OpenSearch Serverlessの次世代アーキテクチャに統合
- 自動スケーリング対応で不規則なエージェント負荷に対応

---

## 変更内容・新機能

### Agentic Search の主な機能

- **自然言語クエリ変換**: LLM搭載QueryPlanningToolが自然言語をDSLに変換
- **複雑なクエリの自動計画**: 検索戦略を自動的に計画・実行
- **カスタマイズ可能**: APIまたはOpenSearch Dashboardsで動作をカスタマイズ
- **ガイド付きUI**: OpenSearch Dashboardsでエージェント作成が容易

### 使用例

- 「東京への800ドル以下のフライトを探す」
- 「今月の電子機器カテゴリーの売上トップ商品を表示する」

---

## 利用環境と対応

### 利用可能リージョン

- AWS ConsoleからOpenSearch Serverlessが利用可能なすべてのAWSコマーシャルリージョン

### 利用方法

- APIを通じた実装
- OpenSearch Dashboardsでのガイド付きエクスペリエンス
- 既存のOpenSearch Serverlessコレクションに統合

---

## 効果・メリット

### ユーザーのメリット

- **学習コスト削減**: DSQL習得が不要で直感的に検索可能
- **業務効率化**: 検索クエリ作成時間を大幅短縮
- **民主化**: DSL未経験者も高度な検索ができるように

### エンタープライズのメリット

- **スピード向上**: 自然言語インターフェースで迅速な開発
- **コスト最適化**: 自動スケーリングによる効率的なリソース管理
- **エージェント対応**: AI agents技術への対応が容易

---

## ユースケース

### 1. Eコマース検索

- 顧客が自然言語で商品を検索
- リアルタイムの売上分析クエリの自動化

### 2. 旅行・航空検索

- 「〇〇への△△ドル以下のフライト」といった複雑な検索要件
- 動的な検索条件の自動処理

### 3. ビジネスインテリジェンス

- データアナリストが自然言語でアドホック分析実施
- LLM搭載エージェントによる自動分析

---

## まとめ

### Amazon OpenSearch Serverless Agentic Search の意義

- 自然言語インターフェースにより、検索技術の民主化を実現
- LLM技術とOpenSearchの強力な統合
- Agentic AI時代に対応した次世代型検索エンジン

### 次のステップ

1. AWS Consoleでの試用開始
2. 自社ユースケースでのPoC実施
3. OpenSearch Dashboardsでのエージェント設定

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/opensearch-agentic-search/
- **Amazon OpenSearch Service ドキュメント**: https://docs.aws.amazon.com/opensearch-service/
- **Agentic Search設定ガイド**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-configure-agentic-search.html
- **AWS ブログ**: https://aws.amazon.com/blogs/aws/introducing-the-next-generation-of-amazon-opensearch-serverless-for-building-your-agentic-ai-applications

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
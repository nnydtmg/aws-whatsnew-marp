---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon OpenSearch Service
Managed Prometheus とエージェント トレーシング対応

**発表日: 2026年4月9日**

---

## 概要

### 統合可観測性プラットフォームの実現

- **メトリクス・ログ・トレースの統一**: Prometheus、ログ、トレース、AIエージェントトレーシングを単一インターフェースで管理
- **ネイティブ統合**: Amazon Managed Service for Prometheusとの直接統合により、データ重複を排除
- **PromQL対応**: PromQLシンタックスでPrometheusメトリクスを直接クエリ
- **コスト削減**: プレミアム可観測性プラットフォーム比で大幅なコスト削減を実現

---

## 前提・背景

### 現在の可観測性の課題

- **複数ツール間のコンテキストスイッチング**: 異なるツール間を頻繁に切り替える必要
- **データ重複のオーバーヘッド**: 複数プラットフォーム間でのデータ保存コストが増大
- **高コスト**: プレミアム可観測性プラットフォームの導入・運用コストが課題
- **運用複雑性**: ツール間のシームレスな連携が困難

### 関連する最近の動向

- OpenSearch Service が分散トレーシング機能を強化（2026年3月）
- OpenSearch Ingestion が Prometheus 連携に対応
- AIエージェント実行のトレーシング需要が拡大

---

## 主な機能・改善点

### 1. 統合可観測性ワークスペース

- **単一インターフェース**: メトリクス、ログ、トレース、AIエージェントトレーシングを一元管理
- **ネイティブPromQL**: Prometheus メトリクスを OpenSearch UI で直接クエリ
- **データ重複排除**: 単一データセットで複数の可観測性シグナルを利用

### 2. 新しい監視ワークフロー

- **REDメトリクス**: Rate、Errors、Duration を活用したアプリケーション監視
- **AIエージェントトレーシング**: OpenTelemetry GenAI セマンティック規約に対応
- **LLMエージェント実行トレース**: LLMエージェントの動作をエンドツーエンドで追跡

---

<!-- _class: small -->

## ユースケース例

### 例1: アプリケーションパフォーマンス監視

遅いトレースをアプリケーションログに関連付け、REDメトリクスを確認して根本原因を特定

**ワークフロー**: トレース → ログ → メトリクス → 原因特定（全てツール切り替えなし）

### 例2: AI/LLM駆動アプリケーション

LLMエージェント実行のトレーシング、レイテンシー測定、エラー分析を一箇所で実施

**対応**: OpenTelemetry GenAI セマンティック規約で標準化

### 例3: マイクロサービス環境

Prometheusメトリクスをサービスダッシュボードにオーバーレイし、分散トレースと相関分析

---

## 利用可能なリージョン

### 20のAWSリージョンで提供開始

<div class="columns-2">
<div>

**米国・カナダ**
- US East (N. Virginia)
- US East (Ohio)
- US West (N. California)
- US West (Oregon)
- Canada (Central)

</div>
<div>

**アジア太平洋・ヨーロッパ・南米**
- Asia Pacific (Hong Kong, Mumbai, Osaka, Seoul, Singapore, Sydney, Tokyo)
- Europe (Frankfurt, Ireland, London, Milan, Paris, Spain, Stockholm)
- South America (São Paulo)

</div>
</div>

---

## 効果・メリット

### 運用チーム向け

- **効率化**: ツール間のコンテキストスイッチングを排除、平均対応時間を短縮
- **可視化**: 複数シグナル間の相関分析が容易に

### コスト最適化

- **大幅削減**: プレミアム可観測性プラットフォーム比で大幅なコスト削減
- **データ効率**: データ重複を排除しながら豊富な可観測性を実現

### 技術的メリット

- **標準化**: OpenTelemetry GenAI規約によるAIエージェントトレーシングの標準化
- **拡張性**: PromQL互換により既存ワークフローとの互換性を維持

---

## 対象ユーザー

### 特に適したチーム

- **Site Reliability Engineers (SRE)**
  本番環境の安定性確保、インシデント対応の迅速化

- **DevOps Engineers**
  複数ツール管理の統合、パイプラインのシンプル化

- **Platform Engineering チーム**
  組織全体の可観測性基盤の構築、コスト管理

---

## まとめ

### Amazon OpenSearch Service の進化

<div class="columns">
<div>

### Before
- 複数ツール運用
- データ重複
- コンテキスト切り替え
- 高コスト

</div>
<div>

### After
- 統合プラットフォーム
- 単一データセット
- シームレス分析
- コスト最適化

</div>
</div>

### 次のステップ

1. 現在の可観測性スタック構成を整理
2. OpenSearch Service の統合機能でテスト環境を構築
3. パイロットプロジェクトでROI検証
4. 本番環境への段階的移行

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/opensearch-managed-prometheus-agent-tracing/
- **OpenSearch Service ドキュメント**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/observability.html
- **Direct Query ドキュメント**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-prometheus-overview.html
- **Amazon Managed Service for Prometheus**: https://docs.aws.amazon.com/prometheus/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
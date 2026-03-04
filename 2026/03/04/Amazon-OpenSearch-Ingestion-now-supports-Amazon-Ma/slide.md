---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon OpenSearch Ingestion
Amazon Managed Service for Prometheus へのシンク対応

**発表日: 2026年3月4日**

---

## 概要

### Amazon OpenSearch Ingestion の新しい機能

- **Amazon Managed Service for Prometheus (AMP) のシンク対応**
  - 完全マネージド型のメトリクス取り込みパイプラインを構築可能
  - カスタムインフラストラクチャが不要

- **統合オブザーバビリティ**
  - ログ、トレース、メトリクスを同一パイプラインで管理
  - 各サービスに最適な宛先へのルーティング

- **高度なデータ変換**
  - メトリクスの準備・改善機能を標準装備
  - Prometheus Query Language (PromQL) による分析対応

---

## 前提・背景

### オブザーバビリティの課題

- **複雑なデータパイプライン管理**
  - ログ、トレース、メトリクスを別々のシステムで管理している
  - データフロー管理の複雑化
  - 運用コストの増加

- **メトリクス基盤の構築障壁**
  - Prometheus 互換システムの導入が複雑
  - インフラストラクチャ管理の負担
  - スケーラビリティの確保が難しい

### 市場のトレンド

- OpenSearch Ingestion の機能拡張（VPC エンドポイント対応など）
- マネージドオブザーバビリティの需要増加
- オープンソーススタンダード（Prometheus）への対応強化

---

## 主な変更内容

### 1. Amazon Managed Service for Prometheus シンク

- **新しいシンク タイプ**
  - OpenSearch Ingestion パイプラインで AMP に直接送信可能
  - リモート書き込みプロトコルで対応

- **特徴**
  - フルマネージド型サービス
  - スケーラビリティの自動提供
  - 運用の手間を大幅削減

### 2. 統合パイプラインアーキテクチャ

```
[Data Sources]
  ↓
[OpenSearch Ingestion Pipeline]
  ├─ ログ → Amazon OpenSearch Service
  ├─ トレース → Amazon OpenSearch Service
  └─ メトリクス → Amazon Managed Service for Prometheus
```

### 3. データ変換・フィルタリング

- **組み込み機能**
  - メトリクスのクリーニング・変換
  - スキーマ検証
  - 異常値の処理

- **柔軟な設定**
  - パイプライン設定言語で詳細制御
  - 複数のデータソース対応

---

## 効果・メリット

### インフラストラクチャ削減
- ✅ **カスタム転送システムが不要**
  - 既存インフラを削減
  - 運用負荷を軽減

### 一元化されたデータ管理
- ✅ **複数シグナルを統一パイプラインで管理**
  - ログ、トレース、メトリクスの一括処理
  - 設定管理の簡素化
  - スケーリングが容易

### コスト削減
- ✅ **開発・運用コストの低下**
  - 管理するシステム数削減
  - 自動スケーリングで最適化
  - 予測可能なコスト構造

### データ品質向上
- ✅ **準備・改善機能**
  - メトリクスの品質を確保
  - 一貫性のあるデータ分析

### 高度な分析
- ✅ **Prometheus Query Language (PromQL) 対応**
  - 強力なメトリクスクエリ
  - アラートルール設定
  - Amazon Managed Grafana との連携

---

## ユースケース

### マイクロサービス環境の監視

- **要件**
  - 数百〜数千のマイクロサービスをデプロイ
  - ログ、トレース、メトリクスの統合監視が必要
  - スケーラブルで信頼性の高い基盤が必須

- **解決策**
  - OpenSearch Ingestion で統一的なデータ取り込み
  - Prometheus でメトリクス分析
  - Grafana で可視化

### マルチクラウド環境

- **要件**
  - AWS + オンプレミスのリソースを監視
  - 一貫したオブザーバビリティが必要

- **解決策**
  - OpenSearch Ingestion で複数ソースからデータ集約
  - AMP で標準メトリクス分析
  - 統一ダッシュボード構築

### 金融・医療など規制対応業界

- **要件**
  - 監査ログの保持・分析
  - コンプライアンス対応

- **解決策**
  - OpenSearch でログ管理（監査証跡）
  - AMP でパフォーマンスメトリクス
  - 完全マネージド型で規制要件に対応

---

## まとめ

### 主なポイント

1. **統合オブザーバビリティの実現**
   - ログ、トレース、メトリクスを一元管理
   - 各サービスの最適な特性を活用

2. **運用の大幅簡素化**
   - マネージドサービスで管理を削減
   - スケーラビリティの自動化

3. **コスト最適化**
   - 不要なインフラを排除
   - 効率的なリソース活用

4. **高度な分析が容易**
   - PromQL による柔軟なクエリ
   - Grafana との連携で可視化

### 次のステップ

1. 現在のオブザーバビリティアーキテクチャを評価
2. OpenSearch Ingestion のパイプライン設計
3. パイロットプロジェクトでの検証
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-ingestion-supports-amazon-managed-service-prometheus-sink/
- **Amazon OpenSearch Ingestion ドキュメント**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ingestion.html
- **Amazon Managed Service for Prometheus**: https://docs.aws.amazon.com/prometheus/
- **OpenSearch Ingestion パイプライン設定**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/update-pipeline.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
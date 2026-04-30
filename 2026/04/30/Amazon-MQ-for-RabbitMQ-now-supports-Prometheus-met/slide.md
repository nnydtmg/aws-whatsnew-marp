---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon MQ for RabbitMQ
Prometheusメトリクス対応

**発表日: 2026年4月30日**

---

## 概要

### 3つの主要なポイント

- **Prometheus プラグイン対応**: RabbitMQ 4.2ブローカーが標準でPrometheusプラグインをサポート
- **ネイティブ メトリクス エンドポイント**: Prometheus互換の専用エンドポイントを通じてメトリクスを公開
- **多彩な監視ツールに統合**: Grafana、Amazon Managed Service for Prometheus、CloudWatchなど既存スタックとシームレス統合

---

## 前提・背景

### 監視ツール環境の課題

- **監視ツール間の連携**: 複数の監視ツール（Prometheus、CloudWatch等）の統合が課題
- **メトリクス取得の複雑性**: 従来のCloudWatch経由の監視方法では柔軟性が限定的
- **デファクトスタンダード**: Prometheusは監視・アラートの標準仕様として業界で広く採用

### メッセージング基盤の監視要件

- ブローカーヘルスの包括的な可視化
- キュー深度・スループット等の詳細メトリクス
- リアルタイムの接続状態監視

---

## 主な機能

### Prometheusメトリクス エンドポイント

#### 提供されるエンドポイント

| エンドポイント | 説明 |
|-------------|------|
| **/metrics** | 基本的なメトリクス（推奨） |
| **/metrics/detailed** | 詳細なメトリクス情報 |
| **/metrics/memory-breakdown** | メモリ使用量の詳細分析 |

### スクレイプ可能なメトリクス種類

- **ブローカーメトリクス**: メッセージスループット、メモリ使用量、ディスク容量
- **キューメトリクス**: キュー深度、メッセージ受信/送信数
- **接続メトリクス**: アクティブな接続数、チャネル情報

---

## 統合対応ツール

### 既存監視スタックとの統合

<div class="columns">
<div>

### クラウド基盤

- **CloudWatch**: PrometheusメトリクスのサブセットをCloudWatchに公開
- **Amazon Managed Service for Prometheus**: マネージド型Prometheusサービス

</div>
<div>

### オンプレミス/セルフホスト

- **Prometheus**: セルフホストのPrometheusサーバー
- **Grafana**: ダッシュボード・可視化

</div>
</div>

---

## 効果・メリット

### 運用効率の向上

- **統一された監視体験**: 既存のPrometheus/Grafana環境をそのまま活用可能
- **セットアップの簡易化**: 追加の設定不要でデフォルト有効（全リージョン対応）
- **ダッシュボード の再利用**: 標準的なRabbitMQ Prometheusダッシュボードがそのまま利用可能

### 技術的なメリット

- **スケーラブルな監視**: メトリクスをプル型（Prometheus方式）で取得
- **詳細な可視性**: ブローカー、キュー、接続レベルの詳細データ
- **観測性の強化**: DevOps / SREチームの可視性が大幅に改善

---

## ユースケース

### 適用シナリオ

#### シナリオ1: 既存 Prometheus スタック活用

```
既存Prometheus → RabbitMQブローカー(/metrics) → Grafanaダッシュボード
```

- Prometheus運用チームが既に構築済み
- ダッシュボードの統一管理

#### シナリオ2: ハイブリッド監視環境

- **CloudWatch連携**: CloudWatchダッシュボード・アラームとの統合
- **Prometheus連携**: 詳細分析・長期保存はPrometheusで実施

---

## まとめ

### 主な特徴

✅ **ネイティブ Prometheus サポート**: RabbitMQ 4.2でプラグイン不要

✅ **多様な統合オプション**: CloudWatch、Grafana、Amazon AMP対応

✅ **即座の利用開始**: 全リージョンでデフォルト有効

### 次のステップ

1. **評価開始**: 既存のPrometheus環境での動作確認
2. **ダッシュボード統合**: Grafanaへの組み込み
3. **本番導入**: アラームルールの設定と段階的ロールアウト

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-mq-rabbitmq-prometheus-metrics/
- **CloudWatch メトリクス (RabbitMQ)**: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-logging-monitoring.html
- **RabbitMQ Prometheus 公式**: https://www.rabbitmq.com/prometheus.html
- **Grafana ダッシュボード**: https://grafana.com/grafana/dashboards/15363-amazon-mq-rabbitmq-engine-cloudwatch/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
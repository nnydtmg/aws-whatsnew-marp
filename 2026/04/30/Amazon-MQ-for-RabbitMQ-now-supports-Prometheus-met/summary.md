# Amazon MQ for RabbitMQ now supports Prometheus metrics

**カテゴリ:** What's New
**公開日:** 2026年4月30日
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-mq-rabbitmq-prometheus-metrics/

---

## 要約

Amazon MQ for RabbitMQ 4.2ブローカーがPrometheusプラグインをサポートするようになり、ネイティブなPrometheus互換メトリクスエンドポイントを通じてブローカー、キュー、接続メトリクスを直接スクレイプできるようになりました。このアップデートにより、既存のPrometheusベースの監視スタック（Grafana、Amazon Managed Service for Prometheus等）への統合が可能となり、メッセージングインフラストラクチャの観測性と監視の柔軟性が大幅に向上します。

---

## 主な機能と改善

### Prometheus プラグイン対応

- Amazon MQ for RabbitMQ 4.2ブローカーがPrometheusプラグインをサポート
- ネイティブなPrometheus互換のメトリクスエンドポイント
- ブローカー、キュー、接続メトリクスを直接スクレイプ可能

### メトリクス エンドポイント

- **/metrics**: 基本的なPrometheusテキスト形式メトリクス
- **/metrics/detailed**: 詳細なメトリクス情報
- **/metrics/memory-breakdown**: メモリ使用量の詳細分析

### 統合対応ツール

- Grafanaダッシュボード
- Amazon Managed Service for Prometheus（Amazon AMP）
- セルフホスト Prometheus サーバー
- Amazon CloudWatch（メトリクスのサブセット公開）

### デプロイメント

- すべてのリージョンのAmazon MQ for RabbitMQ 4.2ブローカーでデフォルトで有効
- 追加設定不要で即座に利用開始可能

---

## 効果・メリット

### 運用効率の改善

- **統一された監視体験**: 既存のPrometheus/Grafana環境をそのまま活用
- **ダッシュボードの再利用**: 標準的なRabbitMQ Prometheusダッシュボードが利用可能
- **セットアップの簡易化**: デフォルト有効なため追加設定不要

### 技術的なメリット

- **スケーラブルな監視**: プル型（Prometheus方式）でメトリクスを取得
- **詳細な可視性**: ブローカー、キュー、接続レベルの詳細データ取得
- **観測性の強化**: メッセージングインフラストラクチャの完全な可視化

### ビジネスへの貢献

- メッセージング基盤の信頼性向上
- トラブルシューティング時間の短縮
- 既存投資（Prometheus/Grafana）の活用

---

## 適用対象

### 推奨される組織

- Prometheus/Grafana環境を既に構築している組織
- 既存の監視スタックを統一したい企業
- Amazon MQ for RabbitMQの詳細な監視が必要な運用チーム
- DevOps/SREチームの可視性向上が優先事項

### ユースケース

1. **既存Prometheus環境への統合**: ハイブリッド監視の実現
2. **CloudWatchとの併用**: 複数の監視ツール運用
3. **ダッシュボード統一**: Grafanaでの一元管理

---

## 参考リソース

- [AWS What's New: Amazon MQ for RabbitMQ now supports Prometheus metrics](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-mq-rabbitmq-prometheus-metrics/)
- [Amazon MQ for RabbitMQ CloudWatch メトリクス](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-logging-monitoring.html)
- [RabbitMQ Prometheus Plugin - 公式](https://www.rabbitmq.com/prometheus.html)
- [Grafana: Amazon MQ RabbitMQ Dashboard](https://grafana.com/grafana/dashboards/15363-amazon-mq-rabbitmq-engine-cloudwatch/)
- [AWS re:Post - RabbitMQ Support for Prometheus](https://repost.aws/questions/QUfleowmyWSZaPhP-_lPL9sA/rabbitmq-support-for-prometheus)
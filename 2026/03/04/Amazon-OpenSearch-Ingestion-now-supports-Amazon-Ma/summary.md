# Amazon OpenSearch Ingestion now supports Amazon Managed Service for Prometheus as a sink

**カテゴリ:** What's New
**公開日:** 2026-03-04
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-ingestion-supports-amazon-managed-service-prometheus-sink](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-ingestion-supports-amazon-managed-service-prometheus-sink)

---

## 要約

Amazon OpenSearch Ingestionが新たにAmazon Managed Service for Prometheusをシンクとしてサポートすることで、カスタムインフラストラクチャなしで完全マネージド型のメトリクス取り込みパイプラインを構築できるようになりました。この更新は、複数のオブザーバビリティシグナルを一元管理し、各サービスの強みを活かしたパイプラインを構築したいお客様に最適です。

## 詳細

### 新機能について

- **Amazon Managed Service for Prometheus シンクの追加**
  - Amazon OpenSearch Ingestionが、Amazon Managed Service for Prometheusをシンクとしてサポートするようになりました。
  - カスタム転送インフラストラクチャなしで、完全マネージド型のエンドツーエンドメトリクス取り込みパイプラインを構築できるようになりました。

- **統合オブザーバビリティの実現**
  - ログ、トレース、メトリクスの全てのオブザーバビリティシグナルを同じパイプラインインフラストラクチャで管理できるようになりました。
  - ログとトレースはAmazon OpenSearch Serviceに、メトリクスはAmazon Managed Service for Prometheusにルーティングできるようになりました。

- **データ変換・改善機能**
  - Amazon OpenSearch Ingestionの組み込みデータ変換および拡張機能を使用して、メトリクスをAmazon Managed Service for Prometheusに送信する前に準備および改善できるようになりました。

- **高度な分析機能**
  - Prometheus Query Languageを使用してメトリクスをクエリし、アラートルールを設定し、Amazon Managed Grafanaで可視化できるようになりました。

### この更新が適しているユーザー

- **複数のオブザーバビリティシグナルを管理する必要があるお客様**
  - ログ、トレース、メトリクスを統一的に管理したい組織

- **メトリクス取り込みパイプラインの管理を簡素化したいお客様**
  - カスタムインフラストラクチャの管理負荷を削減したい企業

- **データ品質と一貫性を向上させたいお客様**
  - オブザーバビリティデータの品質確保が必要な環境

- **Prometheus Query Languageを使用してメトリクスを分析し、アラートを設定したいお客様**
  - 高度なメトリクス分析と監視を実施したい組織

- **Amazon OpenSearch Ingestionを既に使用しているお客様**
  - 既存の投資を活かして機能を拡張したい企業

## 主な利点

1. **完全マネージド型の統合パイプライン**
   - インフラ管理が不要
   - スケーラビリティが自動提供される

2. **運用の簡素化**
   - ログ、トレース、メトリクスを一箇所で管理
   - 設定管理の負荷を軽減

3. **コスト最適化**
   - カスタムインフラ不要
   - 効率的なスケーリング

4. **高度な分析**
   - PromQL による柔軟なクエリ
   - Grafana との連携

## 関連サービス

- Amazon OpenSearch Service
- Amazon OpenSearch Ingestion
- Amazon Managed Service for Prometheus
- Amazon Managed Grafana
- AWS CloudWatch
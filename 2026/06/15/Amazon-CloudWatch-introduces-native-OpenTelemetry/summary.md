# Amazon CloudWatch がネイティブ OpenTelemetry メトリクスに対応

PromQL クエリと従量課金を提供

**カテゴリ:** What's New
**公開日:** 2026-06-09
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-metrics/

---

## 要約

Amazon CloudWatchがOpenTelemetryプロトコル対応とPromQLクエリ機能を導入し、GB単位の従量課金モデルで提供されるようになりました。このアップデートは、Prometheus互換ツールを使用しており、カスタムメトリクスとAWSメトリクスを統合的に管理したいEKS利用者やObservability基盤を現代化したい組織に特に適しています。

---

## 何が変わったか

### メトリクス取り込み

- OpenTelemetry Protocol（OTLP）経由でのメトリクス直接取り込みに対応
- カスタム変換ロジックやツール不要

### クエリ機能

- Prometheus Query Language（PromQL）でクエリ可能
- Grafanaなどの互換ツールからのシームレスな接続

### 課金モデル

- GB単位の課金で、15ヶ月のストレージを提供
- 従量課金による効率的なコスト管理

### 統合クエリ

- カスタムOTelメトリクスと70以上のAWSサービスメトリクスを統一クエリ
- Prometheus互換のクエリAPIで連携

### EKS統合

- Container InsightsでOpenTelemetryダッシュボード提供
- EKSコンソール、CloudFormation、CDK、Helmから有効化

### 段階的な移行

- ClassicおよびOTelメトリクスを同時にデュアルパブリッシュ
- 独自のスケジュールでアラームとダッシュボードを移行

### 利用可能なリージョン

- 中東を除くすべての商用AWSリージョンで利用可能

---

## 対象ユーザー

- **EKS利用者**: マイクロサービス環境でOpenTelemetryメトリクスを活用したい組織
- **Prometheus利用者**: Prometheus互換ツールからCloudWatchへの移行を検討中の組織
- **Observability基盤の構築者**: 複数のメトリクスソースを統一的に管理したい組織
- **ハイブリッド環境**: EKSとオンプレミス環境の両方でメトリクス管理が必要な組織

---

## 効果・メリット

### 運用効率

- メトリクスパイプラインの統一でコスト削減
- カスタムと AWS ネイティブメトリクスを統一管理
- PromQL による強力な分析

### コスト最適化

- GB単位の効率的な価格体系
- エージェント不要で運用シンプル
- 自動 AWS リソースコンテキスト

### インフラストラクチャの柔軟性

- EKS、オンプレミス、ハイブリッド対応
- 段階的な移行が可能
- OpenTelemetry標準による将来的な拡張性

---

## ユースケース

### EKS環境でのマイクロサービス監視

- アプリケーション（OTel SDK）とインフラメトリクスを統一管理
- Prometheus互換ツール（Grafana等）からの移行
- PromQLによる詳細な分析とアラート設定

### ハイブリッド環境のObservability

- EKSとオンプレミス環境を一箇所で管理
- 環境ごとの異なる計測形式を自動統一
- クロスプラットフォームダッシュボード・アラート作成

### Observability基盤の現代化

- 既存Prometheus環境からの段階的な移行
- ClassicとOTelメトリクスの共存で無停止移行
- OpenTelemetry標準化への投資

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-metrics/
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/cloudwatch/
- **OpenTelemetry 公式**: https://opentelemetry.io/
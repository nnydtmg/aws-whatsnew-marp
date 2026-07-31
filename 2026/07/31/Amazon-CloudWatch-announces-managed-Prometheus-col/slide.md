---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch 管理型Prometheusコレクターを発表

エージェント管理不要で、Prometheusメトリクスを自動収集

**発表日: 2026年7月31日**

---

## 概要

### Amazon CloudWatch 管理型Prometheusコレクターの3つの主要特徴

- **エージェント管理が不要**: デプロイ・管理・パッチ適用・保守の手間を削減
- **複数AWSサービスに対応**: EKS、EC2、ECS、MSK、OpenSearch Serviceを監視
- **自動スケーリング**: 高可用性と信頼性を持つメトリクス収集基盤を自動構築

### 中心的な課題解決

- OpenTelemetry Collectorの自己管理による運用負荷を排除
- PrometheusメトリクスをネイティブにCloudWatchに統合
- PromQLとAWSベンダーメトリクスの統一クエリが可能

---

## 前提・背景

### これまでの課題

- **従来の方法**: 自己管理型OpenTelemetry Collectorをデプロイ、スケーリング、保守する必要があった
- **運用負荷**: Collectorのライフサイクル管理に多くのリソースが必要
- **スケーリングの複雑性**: ワークロード増加に伴う自動スケーリングの実装が困難

### 市場動向

- Prometheusベースの監視スタック（EKS、マイクロサービス）が急増
- OpenTelemetryが観測可能性の標準仕様として定着
- AWS Observability のイノベーション: 2026年1月～5月で40以上の機能リリース
- AI駆動型オペレーション（AIOps）への投資が加速

---

## 主な機能と改善

### 1. 管理型コレクター機能

- **フルマネージド**: AWSが自動的にプロビジョニング、スケーリング、収集を処理
- **VPCオートディスカバリー**: Kubernetes、EC2、コンテナのターゲットを自動発見
- **高可用性**: 自動スケーリングで信頼性の高いメトリク収集を保証

### 2. サービス統合

| サービス | 機能 | 発見方法 |
|--------|------|--------|
| **EKS** | Kubernetes Pod・Node監視 | Kubernetesサービスディスカバリー |
| **EC2** | インスタンスメトリクス | 直接インスタンススクレイピング |
| **ECS** | コンテナタスク監視 | AWS Cloud Map (DNS) |
| **MSK** | Kafkaメトリクス | OpenエンドポイントのPrometheus対応 |
| **OpenSearch** | エラスティックサーチメトリクス | OpenエンドポイントのPrometheus対応 |

---

## 利用方法と設定

### シンプルな3ステップ

1. **スクレイプ構成を提供**: Prometheus scrape_configを指定
2. **リソースアクセス権限を設定**: CloudWatchから対象リソースへのアクセスを許可
3. **自動で開始**: CloudWatchがプロビジョニングを完了

### メトリクス配信

- **形式**: OpenTelemetry (OTLP) 標準
- **クエリ方法**: PromQL で AWS ネイティブメトリクスと統一クエリ
- **CloudWatch統合**: CloudWatch Insights、ダッシュボード、アラームと統合

---

## 効果・メリット

### 運用効率の大幅向上

- **運用負荷の削減**: Collector管理の手間がゼロに
- **コスト削減**: インフラストラクチャ管理の簡素化
- **スケーラビリティ**: 自動スケーリングで本番対応

### 技術的メリット

- **ネイティブPrometheus対応**: 既存のPrometheus設定をそのまま活用
- **統一監視**: AWS メトリクス + Prometheus メトリクスを一元管理
- **セキュリティ**: VPC内での安全なメトリクス収集

---

## 利用可能なリージョンと料金

### リージョン可用性

- **対象**: CloudWatch OTLPエンドポイントが利用可能なすべてのAWSリージョン
- **除外**: アジア太平洋（ニュージーランド）を除く

### 料金体系

- **課金単位**: 時間単位
- **メトリクス取り込み**: 標準的なCloudWatch OpenTelemetryメトリクス取り込み料金を適用
- **詳細**: AWS 料金表を確認

---

## まとめ

### Amazon CloudWatch 管理型Prometheusコレクターの価値

- **全自動型監視**: デプロイから保守まで完全マネージド
- **複数AWS サービス対応**: EKS、EC2、ECS、MSK、OpenSearch を統一監視
- **PromQL活用**: 既存の Prometheus スキルをそのまま活用可能
- **本番環境対応**: 自動スケーリングで高可用性を実現

### 次のステップ

1. 既存のPrometheus スクレイプ構成を確認
2. CloudWatch managed collectors で小規模パイロット実施
3. 本番環境への段階的展開
4. AWS Managed Grafana との統合を検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-managed-collectors/
- **CloudWatch 管理型Prometheusコレクター ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/managed-prometheus-collectors.html
- **AWS Observability ブログ**: https://aws.amazon.com/blogs/mt/
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/cloudwatch/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
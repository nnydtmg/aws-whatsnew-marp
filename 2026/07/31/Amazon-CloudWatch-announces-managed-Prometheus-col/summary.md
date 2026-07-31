# Amazon CloudWatch 管理型Prometheusコレクターを発表

**元記事**: [Amazon CloudWatch announces managed Prometheus collectors - AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-managed-collectors/)

**カテゴリ**: What's New
**公開日**: 2026年7月31日

---

## 要約

Amazon CloudWatch が **管理型Prometheusコレクター** を発表しました。このサービスにより、デプロイやエージェント管理の手間をかけることなく、AWSインフラストラクチャから Prometheus メトリクスを自動的に収集できるようになります。

---

## このアップデートで何が変わったか

### 従来の課題

- PrometheusメトリクスをCloudWatchに取得するには、**自己管理型OpenTelemetry Collectorをデプロイ、スケーリング、保守する**必要がありました
- Collectorのライフサイクル管理に多くの運用リソースが必要でした
- スケーリングと高可用性の実現が複雑でした

### 新しい解決策

- **管理型Prometheusコレクター** により、AWSが自動的にプロビジョニング、スケーリング、メトリクス収集を処理
- ユーザーはスクレイプ構成と接続設定を提供するだけで運用開始可能
- 複数のAWSサービス（EKS、EC2、ECS、MSK、OpenSearch Service）からのメトリクス収集に対応

---

## 対応サービスと統合方法

| AWSサービス | 対応内容 | 発見方法 |
|-----------|--------|--------|
| **Amazon EKS** | Kubernetes Pod・Node監視 | Kubernetesサービスディスカバリー |
| **Amazon EC2** | インスタンスメトリクス | 直接インスタンススクレイピング |
| **Amazon ECS** | コンテナタスク監視 | AWS Cloud Map経由のDNS |
| **Amazon MSK** | Apache Kafkaメトリクス | Prometheusエンドポイント |
| **Amazon OpenSearch Service** | ログ・インデックスメトリクス | Prometheusエンドポイント |

---

## 主な特徴と利点

### 技術的特徴

1. **完全マネージド**
   - デプロイ、パッチ、保守のすべてをAWSが担当
   - 自動スケーリング対応で高可用性を実現

2. **ネイティブPrometheus対応**
   - Prometheus scrape_config をそのまま利用可能
   - PromQL を使用したクエリが可能
   - 既存のPrometheus スキルをそのまま活用

3. **統一監視**
   - Prometheusメトリクス + AWS CloudWatch メトリクスを統一管理
   - CloudWatch Insights でのクエリ、ダッシュボード構築、アラーム設定が可能

4. **VPC内での安全な収集**
   - VPC 内でのメトリクス収集により、セキュアなオペレーション

### ビジネス的メリット

- **運用コスト削減**: Collector管理の手間がゼロに
- **スキル活用**: Prometheus経験者のスキルをそのまま活かせる
- **スケーラビリティ**: ワークロード増加に自動対応

---

## 利用開始方法

### 3つのステップ

1. **スクレイプ構成を準備**
   - 既存の Prometheus `scrape_config` を用意

2. **リソースアクセス権限を設定**
   - CloudWatch Collectorが対象リソースにアクセスするIAM権限を設定

3. **管理型コレクターを作成**
   - AWS CloudWatch コンソール または API で設定を送信
   - CloudWatch が自動的にプロビジョニングを完了

---

## 利用可能リージョンと料金

### リージョン可用性

- **対象**: CloudWatch OTLPエンドポイントが利用可能なすべてのAWSリージョン
- **注意**: アジア太平洋地域（ニュージーランド）では未対応

### 料金体系

- **課金単位**: 時間単位
- **メトリクス取り込み**: 標準的なCloudWatch OpenTelemetryメトリクス取り込み料金を適用
- **詳細**: AWS 料金ページで確認

---

## 対象ユーザーと活用シーン

### 推奨される組織

- **エンタープライズ組織**: インフラストラクチャ監視を簡素化したい
- **DevOpsチーム**: Kubernetes（EKS）や コンテナ（ECS）を大規模運用している
- **マイクロサービス開発チーム**: Prometheusベースの監視スタックを採用している

### 活用シーン

1. **Kubernetes クラスタ監視**: EKS の Pod・Node メトリクスを自動収集
2. **マルチタイプワークロード監視**: EC2、コンテナ、Kafka、OpenSearch の統一監視
3. **ハイブリッドインフラ監視**: AWS + オンプレミスのハイブリッド環境での活用

---

## AWS Observability の最新動向

- **2026年 1月～5月**: AWS Observabilityで40以上の機能がリリース
- **主なテーマ**: 
  1. **OpenTelemetry 標準化**: 統一された観測可能性インストルメンテーション
  2. **AI駆動型オペレーション**: CloudWatch Insights や異常検知にAIを統合

- **関連機能**: 
  - CloudWatch Log Analytics（ファセット分析、ログ相関、自動化）
  - GPU コスト属性化（EKS + Amazon Managed Service for Prometheus + Amazon Managed Grafana）

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-managed-collectors/
- **CloudWatch 管理型Prometheusコレクター ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/managed-prometheus-collectors.html
- **AWS 月刊 Observability ブログ (2026年6月)**: https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-june-2026
- **AWS Observability ICYMI (2026年1月～5月)**: https://aws.amazon.com/blogs/mt/aws-observability-icymi-jan-may-2026
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/cloudwatch/

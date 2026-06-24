# Amazon CloudWatch に OpenTelemetry Container Insights for Amazon EKS が登場

Amazon CloudWatch launches OTel Container Insights for Amazon EKS

**カテゴリ:** What's New
**公開日:** 2026-06-23
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-amazon-eks/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch launches OTel Container Insights for Amazon EKS」の内容を日本語で要約します。

---

## 要約

CloudWatch OTel Container Insights for Amazon EKSは、OpenTelemetryセマンティック規約とKubernetesラベルを備えた30秒粒度のインフラストラクチャメトリクス収集機能であり、事前構築ダッシュボードとPromQL互換性により、Amazon EKS環境でのコンテナ監視を必要とするDevOpsエンジニアやSREに最適なソリューションです。

---

## このアップデートで何が変わったか

CloudWatch OTel Container Insights for Amazon EKSは、以下の新機能をもたらします：

### メトリクス収集

- cAdvisor、Kube State Metrics、NVIDIA DCGMなどのオープンソースレシーバーを使用
- 30秒の粒度でインフラストラクチャメトリクスを収集
- OpenTelemetryセマンティック規約とKubernetesラベルが自動付与される

### 可視化とクエリ

- 事前構築されたダッシュボード（クラスタヘルス、ノードパフォーマンス、ポッドレベルのリソース使用状況）
- 単一のPromQLクエリでノード、ポッド、ワークロード全体の相関を取得可能
- CloudWatch PromQLエンドポイントにより、既存のPrometheusおよびGrafanaダッシュボードをCloudWatchに直接接続可能

### 有効化方法

- EKSコンソール（推奨）
- CloudWatch Observabilityアドオン（v6.2.0以上）
- Helm
- CloudFormation

---

## 対象ユーザー

### 主対象

- **DevOps エンジニア**: Amazon EKS環境でのコンテナインフラストラクチャの監視と可視化を必要とする
- **SRE（Site Reliability Engineer）**: クラスタの健全性管理、パフォーマンス監視を自動化したい
- **クラウドアーキテクト**: Kubernetes環境での統一的な可観測性を実現したい

### 副対象

- **Prometheus / Grafanaユーザー**: 既存のダッシュボードを CloudWatch に移行したい
- **エンタープライズ IT**: 複数の監視ツールを CloudWatch に統一したい

---

## 利用可能リージョン

**全商用 AWS リージョン**（以下を除く）

- 中東（UAE）
- 中東（バーレーン）
- イスラエル（テルアビブ）

---

## 主な機能

### 1. OpenTelemetry 標準準拠

- CNCF（Cloud Native Computing Foundation）が推奨するOpenTelemetry標準に準拠
- 業界標準のセマンティック規約を使用してメトリクスを標準化
- 将来の互換性と拡張性が確保される

### 2. 30秒粒度のメトリクス収集

- リアルタイムに近い粒度でのインフラストラクチャ監視
- 問題の早期発見とトラブルシューティング時間の短縮

### 3. PromQL エンドポイント

- 既存の Prometheus / Grafana ダッシュボードを CloudWatch に直接接続
- PromQL クエリで CloudWatch メトリクスに直接アクセス可能
- 段階的な移行が可能

### 4. 事前構築ダッシュボード

- **クラスタヘルス**: 全体の状態、ノード数、ポッド稼働状況
- **ノードパフォーマンス**: CPU、メモリ、ディスク使用率
- **ポッドリソース**: ワークロード別リソース消費、トレンド

### 5. 柔軟な有効化方法

- EKS コンソール（最も簡単、推奨）
- CloudWatch Observability アドオン（v6.2.0以上で対応）
- Helm（GitOps対応、柔軟な構成管理）
- CloudFormation（Infrastructure as Code）

---

## 効果・メリット

### DevOps / SRE チーム

- **監視ツール統一**: 複数ツールの管理コストを削減
- **快速な導入**: コンソール・Helm・CloudFormationで即座に導入可能
- **知見の再利用**: OpenTelemetry標準で他プロジェクトの知見が流用可能
- **自動化**: 大規模環境でも一元管理が可能

### エンタープライズ

- **統一的な可観測性**: メトリクス・ログ・トレースを CloudWatch 上で一元管理
- **コスト削減**: 複数の外部ツールライセンスを不要に
- **スケーラビリティ**: マルチリージョン、マルチアカウント環境での統一的な監視
- **標準準拠**: CNCF OpenTelemetryにより将来の拡張性が確保

### Prometheus / Grafana ユーザー

- **スムーズな移行**: PromQL エンドポイントで既存ダッシュボードを再利用
- **段階的導入**: 既存ダッシュボードを維持しながら統合可能
- **学習曲線短縮**: PromQL スキルの直接流用が可能

---

## ユースケース

### 1. マイクロサービスアーキテクチャ監視

複数のコンテナ、マイクロサービス間の依存関係と遅延を可視化し、パフォーマンスボトルネックを特定します。

### 2. Kubernetes クラスタ管理

ノード、ポッド、リソース使用率を一元監視し、スケール判断やリソース最適化の意思決定を加速します。

### 3. 機械学習ワークロード監視

NVIDIA DCGM と連携して GPU メトリクスを収集し、高コスト・高性能環境でのコスト最適化とパフォーマンス最大化を実現します。

### 4. マルチリージョン EKS 環境

CloudWatch を中心に、複数リージョンの EKS クラスターを統一的に監視・管理します。

---

## 前提条件

### 必須

- Amazon EKS クラスター
- Kubernetes 1.28 以上（推奨）
- IAM 権限: EKS、CloudWatch の操作権限
- ノード IAM ロール: CloudWatchAgentServerPolicy を付与

### 推奨

- クラスタ内メモリ: DaemonSet 実行に十分な余裕
- ネットワーク: CloudWatch API への通信が可能
- CloudWatch Logs の有効化（ログ送信を必要とする場合）

---

## 実装のステップ

### ステップ 1: 評価

1. 既存 EKS クラスターで OTel Container Insights を有効化
2. 事前構築ダッシュボードで可視化を確認
3. PromQL エンドポイントで既存ダッシュボードの動作をテスト

### ステップ 2: パイロット

1. 開発環境で本格運用（アラート設定、ログ統合）
2. CloudWatch 独自機能（異常検知、メトリクス数学）との連携テスト
3. 既存監視ツールからの段階的移行計画を策定

### ステップ 3: 本番導入

1. CloudFormation / Helm で自動展開パイプラインを構築
2. CI/CD に連携した監視・ロギング設定
3. チーム全体へのトレーニング・ドキュメント作成

---

## 関連技術・概念

### OpenTelemetry

- CNCF（Cloud Native Computing Foundation）のプロジェクト
- メトリクス、ログ、トレース（3つのシグナル）を標準化
- ベンダーロックインを排除し、複数バックエンドへの送信が可能

### Container Insights

- CloudWatch のコンテナ監視機能
- 従来の「Enhanced Container Insights（Classic）」は maintenance mode
- 新しい OTel ベースは active development で継続進化

### PromQL（Prometheus Query Language）

- Prometheus の標準クエリ言語
- 時系列データベースに対して複雑なクエリを実行可能
- 業界標準で多くのツールが対応

---

## 料金

詳細は [Amazon CloudWatch 料金ページ](https://aws.amazon.com/cloudwatch/pricing/) を参照してください。

### 一般的な料金体系

- **メトリクス取得**: インゲストメトリクスに対する課金
- **ログ送信**: CloudWatch Logs へのログ送信に対する課金
- **ダッシュボード**: ダッシュボード数に対する課金（一部無料）

---

## 参考リンク

### 公式ドキュメント

- [AWS What's New: Amazon CloudWatch launches OTel Container Insights for Amazon EKS](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-amazon-eks/)
- [OTel Container Insights - Amazon CloudWatch Documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel.html)
- [Enable OTel Container Insights from the Console](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel-console.html)
- [Advanced Configuration for OTel Container Insights on Amazon EKS](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel-advanced.html)
- [CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/)

### 関連技術

- [OpenTelemetry Official Site](https://opentelemetry.io/)
- [Amazon EKS Documentation](https://docs.aws.amazon.com/eks/)
- [Prometheus Query Language (PromQL)](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Kubernetes Documentation](https://kubernetes.io/)

---

## まとめ

Amazon CloudWatch OTel Container Insights for Amazon EKS は、**OpenTelemetry 標準準拠**の新しい可観測性ソリューションです。

### 主な利点

1. **業界標準に準拠**: CNCF OpenTelemetry により、将来の互換性が確保される
2. **簡単導入**: EKS コンソール から数クリックで有効化可能
3. **既存資産の活用**: PromQL エンドポイント で Prometheus / Grafana ダッシュボードを再利用
4. **統一的な可観測性**: メトリクス・ログ・トレースを CloudWatch 上で一元管理
5. **スケーラビリティ**: 大規模、マルチリージョン環境での管理が容易

### 次のアクション

1. 組織内での評価・パイロット導入を計画
2. 既存の Prometheus / Grafana ダッシュボードとの互換性を確認
3. CloudWatch と連携した可観測性戦略の策定
4. チームのスキル向上（PromQL、CloudWatch、OpenTelemetry）

---

*最終更新: 2026年6月23日*
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch
OpenTelemetry対応 Container Insights for EKS

**発表日: 2026年4月2日**

---

## 概要

### CloudWatch OTel Container Insights の3つの主要改善

- **拡張メトリクス収集**: 最大150個のラベルでメトリクスを自動拡張
- **OpenTelemetry対応**: OTLP（OpenTelemetry Protocol）によるネイティブ統合
- **高度な分析**: PromQL対応で深い分析が可能

### パブリックプレビュー対象リージョン

- 米国東部（バージニア北部）
- 米国西部（オレゴン）
- アジアパシフィック（シドニー、シンガポール）
- ヨーロッパ（アイルランド）

---

## 前提・背景

### 従来の課題

- EKSクラスターの監視におけるメタデータの不足
- ラベル数の制限によるメトリクスの粒度低下
- マルチクラウド環境での監視の統一化困難
- DevOpsチームによる高度な分析の限定的なツール

### 市場動向

- **OpenTelemetry標準化**: 業界標準化による相互運用性向上
- **Kubernetes監視の高度化**: コンテナ環境の複雑化に伴う要求増加
- **加速コンピュート普及**: AI/MLワークロードの増加に対応

---

## 主な機能と改善

### 1. メトリクス拡張

- **最大150個のラベル自動拡張**
  - Kubernetesメタデータ（pod、node、namespace）
  - カスタム定義ラベル（チーム、アプリケーション、ビジネスユニット）
  - Kubernetes semantic convention属性

### 2. OpenTelemetry Protocol対応

- **OTLP標準サポート**: CloudWatchへのネイティブ統合
- **既存メトリクスとの共存**: 従来のContainer Insightsと同時運用可能
- **マルチクラウド対応**: ベンダーロックインなし

---

## 機能詳細

### 3. 高度な分析機能

- **CloudWatch Query Studio**: PromQL対応で深い分析実現
- **キュレーションダッシュボード**: クラスター、ノード、ポッドの健全性を直観的に表示
- **フィルタリング・集約**: インスタンスタイプ、可用性ゾーン、ノードグループで柔軟に集約

### 4. デプロイの容易性

- **CloudWatch Observability EKS アドオン**
  - Amazon EKSコンソールからのワンクリックインストール
  - CloudFormation、CDK、Terraformで自動化可能
  - バージョン v6.0.1-eksbuild.1 以降で対応

---

## 技術的改善

### 5. 加速コンピュートハードウェア自動検出

- **対応ハードウェア**
  - NVIDIA GPU（グラフィックスプロセッシングユニット）
  - Elastic Fabric Adapter（EFA）
  - AWS Trainium加速器
  - AWS Inferentia加速器

### 6. 既存ユーザー向け機能

- **段階的な移行**
  - OpenTelemetry + 既存Container Insightsの並行運用
  - 既存ワークフローを保持しながら新機能を活用

---

## 効果・メリット

### コスト面

- ✅ **プレビュー期間中は無料**: OTelメトリクスの追加料金なし
- ✅ **スケーラブルな監視**: より多くのラベルで粒度の高い分析が可能

### 運用効率

- ✅ **ワンクリックデプロイ**: アドオンによる簡単インストール
- ✅ **自動メタデータ拡張**: 手動設定削減でオペレーション負荷低減
- ✅ **標準技術の採用**: OpenTelemetryの標準化で技術スタック統一

---

## 効果・メリット（続き）

### 分析・可視性

- ✅ **深い分析機能**: PromQL対応で高度なクエリが実現
- ✅ **リアルタイム監視**: キュレーション済みダッシュボードで即座に問題把握
- ✅ **ハードウェア認識**: 加速器の自動検出で最適なリソース配置

### ベンダー非依存

- ✅ **マルチクラウド対応**: OpenTelemetry標準で他クラウドとの統合容易
- ✅ **長期的投資保護**: 業界標準採用による将来性確保

---

## ユースケース

### 対象組織

**DevOpsチーム**
- Kubernetesワークロードの詳細な監視と分析
- マルチテナント環境でのカスタムラベルによる組織化
- PromQLを活用した高度なアラート・分析ルール

**エンタープライズ**
- EKSクラスターの可視性向上による信頼性向上
- AI/MLワークロード（NVIDIA GPU、Trainium、Inferentia）の監視
- マルチクラウド環境での一元的な監視体制構築

---

## まとめ

### Amazon CloudWatch OTel Container Insights の価値

- **OpenTelemetry標準化**: CloudWatchのマルチクラウド対応を加速
- **メトリクス粒度向上**: 150個ラベルによる柔軟な分析
- **PromQL対応**: Prometheus互換クエリで深い分析実現
- **デプロイ容易性**: ワンクリックアドオンで即座に開始

### 推奨次ステップ

1. **パイロット実施**: 対象リージョンで小規模クラスターで検証
2. **PromQLスキル習得**: 高度な分析クエリの準備
3. **本番展開計画**: 既存Container Insightsとの並行運用戦略策定
4. **組織内展開**: チーム、アプリケーション単位での活用推進

---

## 参考リソース

### AWS公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-otel-container-insights-eks/
- **Container Insights with enhanced observability for Amazon EKS**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-upgrade-enhanced.html
- **Container Insights - Amazon CloudWatch**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html
- **Setting up Container Insights on Amazon EKS**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html

### 関連技術

- **OpenTelemetry**: https://opentelemetry.io/
- **Prometheus Query Language (PromQL)**: https://prometheus.io/docs/prometheus/latest/querying/basics/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch に OpenTelemetry Container Insights for Amazon EKS が登場

OpenTelemetry対応で Amazon EKS の可観測性が向上

**発表日: 2026年6月23日**

---

## 概要

### CloudWatch OTel Container Insights の3つの主要特徴

- **30秒粒度のメトリクス収集**: cAdvisor、Kube State Metrics、NVIDIA DCGM など複数のオープンソースレシーバーを活用
- **OpenTelemetry標準対応**: セマンティック規約とKubernetesラベルで統一されたメトリクス形式
- **PromQL互換性**: 既存の Prometheus / Grafana ダッシュボードを CloudWatch に直接接続可能

### ダッシュボード・可視化

- 事前構築ダッシュボードでクラスタヘルス、ノードパフォーマンス、ポッドリソース使用状況を即座に可視化
- 単一PromQLクエリでノード、ポッド、ワークロード全体を相関分析

---

## 前提・背景

### コンテナ監視の課題

- **統一性の欠落**: 複数の監視ツール、ログ収集ツールの管理コストが増加
- **複雑性**: 従来の CloudWatch 設定では、メトリクス収集に手間がかかる
- **ツール連携**: Prometheus / Grafana ユーザーが CloudWatch を使い始める際の学習曲線が高い

### 市場の動向

- **OpenTelemetry の標準化**: CNCF プロジェクトとして急速に普及中
- **可観測性（Observability）の重要性**: DevOps / SRE チームに不可欠な機能
- **ハイブリッド監視**: オンプレミス + AWS 環境での統一的な可観測性の需要

---

## 主な機能・変更内容

### 1. メトリクス収集の仕組み

- **複数のレシーバー**: cAdvisor（ノード）、Kube State Metrics（ワークロード）、NVIDIA DCGM（GPU）
- **30秒粒度**: リアルタイムに近い粒度でのインフラストラクチャ監視
- **自動エンリッチメント**: OpenTelemetry セマンティック規約 + Kubernetes ラベルが自動付与

### 2. CloudWatch PromQL エンドポイント

- **既存ダッシュボードの再利用**: Prometheus / Grafana ユーザーの移行を容易化
- **標準的なクエリ言語**: PromQL で CloudWatch データを直接クエリ可能
- **統合監視**: CloudWatch 上で Prometheus スタイルの分析が可能

---

## 主な機能・変更内容（続き）

### 3. 事前構築ダッシュボード

| ダッシュボード | 表示内容 | 対象 |
|-------------|--------|------|
| クラスタヘルス | 全体の状態、ノード数、ポッド稼働状況 | クラスタ管理者 |
| ノードパフォーマンス | CPU、メモリ、ディスク使用率 | インフラ管理者 |
| ポッドリソース | ワークロード別リソース消費、トレンド | DevOps / SRE |

### 4. 有効化方法（複数オプション）

- **EKS コンソール**: GUI で数クリックで有効化（推奨）
- **CloudWatch Observability アドオン**: v6.2.0 以上で対応
- **Helm チャート**: GitOps 対応の柔軟な構成管理
- **CloudFormation**: Infrastructure as Code による一貫した展開

---

## 利用可能リージョン・前提条件

### 利用可能リージョン

- **全商用 AWS リージョン**（以下を除く）
  - 中東（UAE）
  - 中東（バーレーン）
  - イスラエル（テルアビブ）

### 前提条件

- Amazon EKS クラスター（Kubernetes 1.28 以上が推奨）
- IAM 権限: EKS、CloudWatch の操作権限
- ノード IAM ロール: CloudWatchAgentServerPolicy を付与

### 推奨環境

- クラスタ内メモリ: 十分な余裕（DaemonSet で OpenTelemetry Collector を実行）
- ネットワーク: CloudWatch API への通信

---

## 効果・メリット

### DevOps / SRE 向けのメリット

- **監視ツールの統一化**: 複数ツール の管理負荷を削減
- **セットアップの簡素化**: コンソール・Helm・CloudFormation で即座に導入可能
- **学習コスト削減**: OpenTelemetry 標準で、他プロジェクトでの知見が再利用可能

### エンタープライズ向けのメリット

- **高い可視性**: 30秒粒度で問題の早期発見が可能
- **コスト効率**: CloudWatch 上で一元管理により運用コストを削減
- **標準準拠**: CNCF OpenTelemetry により、将来の拡張性が確保

### 既存 Prometheus / Grafana ユーザー

- **スムーズな移行**: PromQL エンドポイント で既存ダッシュボードを再利用
- **段階的な導入**: 既存ダッシュボードを維持しながら CloudWatch 統合を実施
- **ベストプラクティス**: AWS ネイティブな可観測性へのステップアップ

---

## ユースケース

### 1. マイクロサービスアーキテクチャの監視

複数のポッド、デプロイメントを単一 PromQL クエリで相関分析
→ 依存関係や遅延を可視化、パフォーマンスボトルネックを特定

### 2. Kubernetes クラスタの健全性管理

ノードパフォーマンス、リソース使用率を事前構築ダッシュボード で常時監視
→ スケール判断、リソース最適化の意思決定を加速

### 3. GPU / 高性能コンピューティングの監視

NVIDIA DCGM で GPU メトリクスを収集、CloudWatch で機械学習ワークロードを監視
→ コスト削減、パフォーマンス最大化

---

## 次のステップ・実装方法

### 1. 評価フェーズ

- 既存 EKS クラスターで OTel Container Insights を有効化
- 事前構築ダッシュボードで可視化状況を確認
- PromQL エンドポイントで既存ダッシュボードが動作するかテスト

### 2. パイロット運用

- 開発環境で本格運用（アラート設定、ログ統合）
- CloudWatch 独自機能（異常検知など）との連携検証
- 既存監視ツールからの段階的移行計画を策定

### 3. 本番導入

- CloudFormation / Helm で自動展開パイプラインを構築
- CI/CD に連携した監視・ロギング設定
- チーム全体でのベストプラクティス共有

---

## まとめ

### CloudWatch OTel Container Insights の位置づけ

- **OpenTelemetry 標準準拠**: CNCF 推奨の可観測性フレームワークを AWS ネイティブに実装
- **統一的な可観測性**: メトリクス・ログ・トレースを CloudWatch 上で一元管理
- **DevOps 効率化**: セットアップから運用まで、効率化と自動化が実現

### 導入のポイント

| ポイント | 詳細 |
|---------|------|
| **タイミング** | 新規 EKS 構築時は必須、既存運用中の導入も柔軟に対応可能 |
| **投資対効果** | PromQL エンドポイント により既存資産を活用、導入コストが低い |
| **スケーラビリティ** | マルチリージョン展開時も単一コンソール で管理可能 |

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-otel-amazon-eks/
- **OTel Container Insights ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel.html
- **有効化手順**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel-console.html
- **ログ送信設定**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel-logs.html
- **CloudWatch 料金**: https://aws.amazon.com/cloudwatch/pricing/

### 関連技術

- **OpenTelemetry**: https://opentelemetry.io/
- **Amazon EKS**: https://aws.amazon.com/eks/
- **PromQL（Prometheus Query Language）**: https://prometheus.io/docs/prometheus/latest/querying/basics/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
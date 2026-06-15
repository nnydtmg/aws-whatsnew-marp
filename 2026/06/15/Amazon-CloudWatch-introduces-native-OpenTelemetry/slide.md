---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch がネイティブ OpenTelemetry メトリクスに対応

PromQL クエリと従量課金を提供

**What's New | 2026-06-09**

---

## 概要

- **OpenTelemetry Protocol（OTLP）対応**: CloudWatchがOTLP経由でメトリクス取り込みに対応
- **PromQL クエリ機能**: Prometheus Query Language を使用してメトリクスを検索・分析
- **従量課金モデル**: GB単位の課金で、15ヶ月のストレージを提供
- **統合的なメトリクス管理**: カスタムOTelメトリクスと70以上のAWSサービスメトリクスを一緒にクエリ可能

---

## 前提・背景

### Observability における課題

- メトリクスパイプラインの複雑化
- ツール間の非互換性（Prometheus形式とAWSネイティブ形式の共存）
- 運用コストの増加（メトリクス形式の変換やツール管理）

### 市場の動向

- OpenTelemetryがメトリクス標準として採用
- EKS環境での Observability 基盤の現代化需要
- PromQL による高度なクエリ需要の増加

---

## 変更内容・新機能

### 1. OpenTelemetry Protocol（OTLP）対応

- CloudWatch が OTLP 経由でのメトリクス直接取り込みに対応
- カスタム変換ロジックやツール不要
- EKS、オンプレミス混在環境でも統一されたメトリクス取り込み

### 2. Prometheus Query Language（PromQL）サポート

- CloudWatch コンソール内で PromQL クエリを実行
- Grafana などの互換ツールからシームレスに接続

### 3. 柔軟な課金と統合クエリ

- GB単位の従量課金で、15ヶ月のストレージ
- カスタムOTel + 70以上のAWSサービスメトリクスを統一検索

---

## 変更内容・新機能（続き）

### 4. EKS 統合

- **Container Insights** で OpenTelemetry ダッシュボード提供
- EKSコンソール、CloudFormation、CDK、Helm から有効化
- ClassicとOTelメトリクスのデュアルパブリッシュ
- 段階的な移行が可能

### 5. 利用可能なリージョン

- ほぼすべての商用 AWS リージョン
- 中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）は未対応

---

## 効果・メリット

### 運用効率の向上

- メトリクスパイプラインの統一でコスト削減
- カスタムメトリクスと AWS ネイティブメトリクスを統一管理
- PromQL による柔軟で強力な分析

### コスト最適化

- GB単位の従量課金による効率的な価格体系
- エージェントやコンバーター不要
- 自動AWS リソースコンテキスト

### インフラストラクチャの柔軟性

- EKS、オンプレミス、ハイブリッド環境に対応
- 既存の Classic メトリクスと並行して運用可能
- OpenTelemetry による将来的な拡張性

---

## ユースケース

### EKS 環境でのマイクロサービス監視

- アプリケーション（OTel SDK）とインフラメトリクスを統一管理
- Prometheus 互換ツールからのシームレスな移行

### ハイブリッド環境の Observability

- EKS とオンプレミス環境のメトリクスを一箇所で管理
- 環境ごとの異なる計測形式を自動で統一

### Observability 基盤の現代化

- 既存 Prometheus 環境から CloudWatch への段階的な移行
- ClassicとOTelメトリクスの共存で無停止移行

---

## まとめ

### Amazon CloudWatch の進化

- **OpenTelemetry 標準への対応**: 業界標準に基づいたメトリクス管理
- **高度なクエリ機能**: PromQL による強力な分析
- **柔軟な統合**: カスタムメトリクス + AWS ネイティブメトリクス

### 推奨される次のステップ

1. 既存環境の評価
2. EKS環境でのパイロット実装
3. 段階的な移行実施
4. PromQL による高度な分析導入

---

## 参考リソース

- **元記事**: AWS What's New - Amazon CloudWatch OpenTelemetry Metrics
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/cloudwatch/
- **OpenTelemetry 公式**: https://opentelemetry.io/

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
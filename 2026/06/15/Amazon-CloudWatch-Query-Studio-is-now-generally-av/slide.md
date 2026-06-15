---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Query Studio が一般利用可能に

統合クエリおよび可視化プラットフォーム

**発表日: 2026年6月15日**

---

## 概要

### Amazon CloudWatch Query Studio の特徴

- **統合クエリプラットフォーム**: PromQLおよびMetrics Insightsの両方をサポート
- **マルチアカウント・リージョン対応**: 複数のAWSアカウントとリージョンに対応
- **複数の可視化タイプ**: ラインチャート、棒グラフ、散布図、ヒートマップ、ヒストグラムなど
- **一般提供開始**: 6月15日より正式リリース

---

## 前提・背景

### 従来の課題

- 複数のAWSアカウント・リージョンのメトリクスを監視する場合、複数のコンソール間での切り替えが必要
- PromQLとCloudWatch Metrics Insightsの両方を使いたい場合、インターフェースが分散
- OpenTelemetryメトリクスとAWSベンダーメトリクスの相関分析が複雑

### 市場動向

- エンタープライズ環境での分散システム監視の需要が増加
- 統合された可視化・分析ツールへの需要が高まっている

---

## 主な機能

### 1. 統合クエリビルダー

- **PromQL と Metrics Insights (SQL)** のサポート
- ガイド付きビルダーで直感的にクエリ構築
- クエリ実行用のキーボードショートカット

### 2. クロスアカウント・クロスリージョン対応

- クエリごとにアカウントとリージョンを選択可能
- フリート全体のレイテンシーとエラー率を相関分析

### 3. 豊富な可視化オプション

- ラインチャート、棒グラフ、散布図
- ヒートマップ、ヒストグラム、円グラフ
- ゲージ、数値ウィジェット
- デュアルY軸とシリーズオーバーライド機能

---

## 機能詳細

### 対応メトリクスタイプ

- **AWSベンダーメトリクス**: AWS管理サービスから自動収集
- **OpenTelemetryメトリクス**: カスタムアプリケーションメトリクス
- **CloudWatchカスタムメトリクス**: ユーザー定義メトリクス

### ダッシュボード連携

- Query StudioはCloudWatchダッシュボードと統合
- クエリ結果を直接ダッシュボードに追加
- Grafanaインポート対応

---

## 効果・メリット

### 運用効率の向上

- ✅ 単一インターフェースで複数のメトリクスソースを管理
- ✅ アカウント間の移動が不要になりコンテキストスイッチを削減
- ✅ 視覚化されたダッシュボードで問題を素早く特定

### コスト削減

- ✅ 操作の簡素化により運用工数を削減
- ✅ Metrics Insights クエリに追加料金なし

### 分析性能の向上

- ✅ クロスアカウント・クロスリージョン分析が容易
- ✅ 複数のメトリクスを相関分析でき根本原因分析に有用

---

## ユースケース

### DevOps チーム向け

複数のAWSアカウント・リージョンで実行するアプリケーションのレイテンシー、エラー率、リソース使用率を一元管理し、フリート全体のヘルスチェック

### SRE チーム向け

OpenTelemetryで収集したカスタムメトリクスとAWSメトリクスを組み合わせて根本原因分析を高速化

### クラウドオペレーション

複数のサービス・アカウントに分散したメトリクスを可視化し、エンタープライズレベルの監視を実現

---

## 提供範囲

### 利用可能なリージョン

- **ほぼすべての商用AWSリージョン**で利用可能
- 例外: 中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）

### 料金

- **クエリ実行**: 追加料金なし（CloudWatchの標準監視料金に含む）
- **メトリクスストレージ**: 既存のCloudWatch料金体系

---

## ロードマップ

### 2026年4月 (プレビュー段階)

Amazon CloudWatch Query Studioをプレビュー版で公開

### 2026年6月 (一般提供開始)

本日より正式リリース、すべてのリージョンで利用可能に

### 今後の拡張予定

- 追加の可視化タイプ
- AI/ML による異常検知機能
- さらなる統合オプション

---

## まとめ

### Amazon CloudWatch Query Studio が変えること

- 📊 統一されたクエリ・可視化プラットフォーム
- 🌍 複数アカウント・リージョンの一元管理
- ⚡ 運用効率と分析スピードの向上

### 推奨される次のステップ

1. **評価**: 自社のユースケースに合わせた検証を開始
2. **パイロット**: 既存のダッシュボードをQuery Studioに移行
3. **本番展開**: 全社的な導入計画

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-query-studio-generally-available/
- **CloudWatch Query Studio ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-PromQL-QueryStudio.html
- **Metrics Insights 詳細**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html

### 関連情報

- **プレビュー発表 (2026年4月)**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-query-studio-preview
- **Metrics Insights 拡張機能**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-mi-extended-retention-region-expansion

---

**ご質問やご不明な点は、AWSサポートまたはAWSアーキテクトにお問い合わせください**
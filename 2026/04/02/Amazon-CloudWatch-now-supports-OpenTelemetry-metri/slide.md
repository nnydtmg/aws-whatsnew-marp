---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch
OpenTelemetry メトリクス対応（パブリックプレビュー）

**発表日: 2026年4月2日**

---

## 概要

### Amazon CloudWatch が OpenTelemetry メトリクスに対応

- **OpenTelemetry（OTel）メトリクスのネイティブサポート** をパブリックプレビューで提供開始
- **OTLP（OpenTelemetry Protocol）** で直接送信可能
- 複数環境のメトリクスを統一的にクエリ・管理
- **異常検知** も自動対応

### 対象ユーザー

- EKS とオンプレミスのマイクロサービス運用チーム
- 複数環境のメトリクス統合管理が必要な組織

---

## 前提・背景

### これまでの課題

- OpenTelemetry メトリクスを CloudWatch に送信するには **カスタム変換ロジックや追加ツールが必要** でした
- マルチ環境でのメトリクス管理が複雑化
- 統一的なクエリ・ダッシュボード構築が困難

### 市場動向

- **OpenTelemetry** が業界標準の観測可能性フレームワークとして広がる
- マイクロサービス・ハイブリッドクラウド環境での統合監視の需要増加
- PromQL などのオープン標準クエリの採用進む

---

## 主な機能と改善

### 1. OTLP ネイティブサポート

- OpenTelemetry Protocol（OTLP）で **直接送信可能**
- **カスタム変換ロジックや追加ツール不要**
- シンプルなセットアップで統合開始

### 2. メトリクス統合

- **70以上のAWSサービス** からのメトリクス
- **カスタムOpenTelemetryメトリクス** を組み合わせ
- 統一ダッシュボードで一元管理

---

## 主な機能と改善（続き）

### 3. PromQL クエリサポート

- **PromQL** を使用したメトリクスクエリに対応
- 追加のエージェントやコード変更 **不要**
- Prometheus 互換の柔軟なクエリ言語

### 4. CloudWatch 異常検知の対応

- OpenTelemetry メトリクスに対応
- **静的閾値設定不要**
- 機械学習による **異常パターン自動検出**

---

## Query Studio - 新しいコンソール体験

### CloudWatch コンソール内での統合体験

- **PromQLクエリの作成**
- **メトリクスの探索**
- **アラームの作成**
- **ダッシュボードの構築**

→ すべて CloudWatch コンソール内で完結

---

## ユースケース

### 1. マルチ環境メトリクス統合

- Amazon EKS とオンプレミスサーバーのメトリクス統合
- インフラストラクチャ全体の統一ダッシュボード構築
- 統一されたアラーム設定

### 2. マイクロサービス監視

- サービス間の遅延・エラー率を PromQL で分析
- サービス固有のメトリクスと AWS サービスメトリクスの相関分析

---

## 効果・メリット

### 運用効率の向上

- **標準化**: OpenTelemetry という業界標準を採用
- **シンプル**: 余分なツール・変換ロジック不要
- **統一**: 複数環境を単一ダッシュボード・クエリで管理

### コスト削減

- 追加のメトリクス処理ツール導入が不要
- **プレビュー期間中は無料** で利用可能

---

## 利用可能リージョン

### 対応リージョン（パブリックプレビュー）

- **US East（N. Virginia）**
- **US West（Oregon）**
- **Asia Pacific（Sydney）**
- **Asia Pacific（Singapore）**
- **Europe（Ireland）**

### 料金

- プレビュー期間中、**OpenTelemetryメトリクスとクエリの利用に料金は発生しません**

---

## まとめ

### Amazon CloudWatch OpenTelemetry メトリクス対応の意義

- **業界標準** の OpenTelemetry に ネイティブ対応
- **複数環境** のメトリクス統合がシンプルに
- **統一クエリ言語（PromQL）** で柔軟な分析が可能
- **CloudWatch 異常検知** による自動監視

### 次のステップ

1. 対応リージョンでのパブリックプレビュー利用開始
2. 既存システムへの OpenTelemetry 導入検討
3. ハイブリッドクラウド環境での統合監視の実現

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics/
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/
- **OpenTelemetry 公式**: https://opentelemetry.io/
- **OneUptime ガイド**: https://oneuptime.com/blog/post/2026-02-06-send-opentelemetry-metrics-amazon-cloudwatch/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
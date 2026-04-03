---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Query Studio
PromQL クエリ機能をプレビューで利用開始

**発表日: 2026年4月3日**

---

## 概要

### Query Studioの3つの特徴

- **統合インターフェース**: PromQLとCloudWatch Metric Insightsを単一画面で操作
- **マルチメトリクス対応**: AWSベンダー提供メトリクスとOpenTelemetry メトリクスの両方をサポート
- **複数のコンソール不要**: 好みの言語でクエリでき、画面切り替えが不要

### 対応ユーザー層

- **新規ユーザー**: ビジュアルフォームビルダーで直感的に利用可能
- **経験豊富なユーザー**: PromQLコードエディタで高度なクエリを実装

---

## 前提・背景

### これまでの課題

- CloudWatchとPrometheus系メトリクスを統合する場合、複数のコンソール間を切り替える必要があった
- AWSメトリクスとOpenTelemetry メトリクスを相関分析する手段が限定的
- クエリ言語の習熟度により、ユーザーの操作方法が異なる

### 市場の動向

- OpenTelemetry採用企業の増加に伴い、Prometheus形式（PromQL）のニーズが拡大
- Observabilityの重要性が高まる中、統一的な分析環境への要望が増加

---

## 主な機能

### Query Studioの特徴

#### 1. **ビジュアルフォームビルダー**
- オートコンプリート機能で容易にクエリ構築
- 新規ユーザーも直感的に利用可能

#### 2. **コードエディタ**
- PromQL対応の専用エディタ
- 構文ハイライト機能を搭載
- 経験豊富なユーザー向けの高度なクエリ作成が可能

#### 3. **統合クエリ実行**
- AWS vended metrics と OpenTelemetry metrics を同じUIで操作
- コンソール切り替えなしで複数メトリクスを相関分析

---

## 利用方法と効果

### ユースケース例: Amazon EC2 アプリケーション

```
カスタム OpenTelemetry メトリクス  ←→  EC2 vended メトリクス
    ↓
   並べて相関分析
    ↓
  スタック全体の問題を素早く特定
```

### 直後のアクション

- クエリ結果から **直接アラームを作成**
- ダッシュボードに **チャートを追加**

---

## 利用可能なリージョン

### パブリックプレビュー対応リージョン

- 🇺🇸 **米国東部** (バージニア北部)
- 🇺🇸 **米国西部** (オレゴン)
- 🇦🇺 **アジアパシフィック** (シドニー)
- 🇸🇬 **アジアパシフィック** (シンガポール)
- 🇮🇪 **ヨーロッパ** (アイルランド)

### 料金

- **標準的なCloudWatch ダッシュボード料金が適用**
- 詳細は [AWS CloudWatch 料金ページ](https://aws.amazon.com/cloudwatch/pricing/) を参照

---

## 実装のメリット

### 開発チーム向け

- ✅ OpenTelemetry メトリクスと AWS ネイティブメトリクスを統一分析
- ✅ 問題の原因特定が高速化
- ✅ PromQL スキルの活用が可能

### 運用・インフラ管理者向け

- ✅ 複数のコンソール操作が不要に
- ✅ ビジュアルビルダーで初心者でも利用可能
- ✅ クエリから直接アラーム設定が可能

### 企業全体のメリット

- ✅ Observability 環境の統合
- ✅ 運用効率の向上
- ✅ MTTR (平均修復時間) の短縮

---

## まとめ

### Query Studio の位置づけ

- CloudWatch 初の **ネイティブPromQL機能**
- PromQL と CloudWatch Metric Insights の **完全統合**
- 開発チームとインフラ管理者の **効率化を実現**

### 次のステップ

1. **AWS CloudWatch コンソール** から Query Studio にアクセス
2. メトリクス パネルまたはダッシュボード編集モードから起動
3. 自社アプリケーションのメトリクス相関分析を開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-query-studio-preview/
- **CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-OpenTelemetry-Sections.html
- **CloudWatch 料金**: https://aws.amazon.com/cloudwatch/pricing/

### 関連サービス

- [Amazon CloudWatch OpenTelemetry メトリクスサポート](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics/)
- [CloudWatch Container Insights for EKS OTel](https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-otel-container-insights-eks/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
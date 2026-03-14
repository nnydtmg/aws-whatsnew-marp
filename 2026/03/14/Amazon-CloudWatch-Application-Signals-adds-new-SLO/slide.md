---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Application Signals
SLO（サービスレベル目標）機能を強化

**発表日: 2026年3月13日**

---

## 概要

### 3つの新しいSLO機能が追加

- **SLO Recommendations**: データドリブンな信頼性目標の提案
- **Service-Level SLOs**: サービス信頼性の統合ビュー
- **SLO Performance Report**: 履歴分析とトレンド追跡

### 主なメリット

- 技術的な監視とビジネス目標の整合性を実現
- 信頼性トレンドを簡単に特定・追跡可能
- 全体的なサービスヘルス状況を一元管理

---

## 前提・背景

### 市場の課題

- アプリケーション信頼性管理の複雑化
- 技術チームとビジネスチームの目標のズレ
- SLO設定の恣意性による問題
- 信頼性トレンドの可視化不足

### CloudWatch Application Signalsの進化

- **2025年初期**: 基本的なアプリケーション監視機能
- **2026年2月**: EKSでデフォルト有効化
- **2026年3月**: SLO管理機能を大幅強化

---

## 主な機能

### 1. SLO Recommendations

- **自動分析**: 過去30日間のサービスメトリクスを分析
- **メトリクス対象**:
  - P99レイテンシー
  - エラー率
- **出力**: データに基づいた適切な信頼性目標

### 2. Service-Level SLOs

- **統合ビュー**: すべての運用にわたるサービス信頼性を可視化
- **目標の整合性**: 技術的な監視とビジネス目標を統合
- **リアルタイム監視**: SLO達成状況をリアルタイム表示

---

## 主な機能（続き）

### 3. SLO Performance Report

- **カレンダー期間対応**: 事業期間に合わせた分析
- **時間粒度の選択**:
  - 日次（Daily）
  - 週次（Weekly）
  - 月次（Monthly）
- **履歴分析**: 信頼性トレンドの追跡と改善効果の測定

---

## 技術的詳細

### 対応範囲

- **対応リージョン**: CloudWatch Application Signalsが利用可能なすべてのAWSリージョン
- **API サポート**: 既存のCloudWatch APIと統合
- **メトリクス互換性**: CloudWatch標準メトリクスと完全互換

### SLI（Service Level Indicator）自動収集

- アプリケーション計器化データから自動抽出
- P50, P90, P99などのパーセンタイルを自動計算
- エラー率を自動追跡

---

## 利用シナリオ

### シナリオ1: 新規サービスのSLO設定

1. SLO Recommendationsで初期値を自動提案
2. ビジネス要件と照合して調整
3. Service-Level SLOsで継続監視

### シナリオ2: 信頼性改善の効果測定

1. SLO Performance Reportで月単位での達成率を可視化
2. 改善施策の効果を定量的に評価
3. ステークホルダーへの報告資料として活用

---

## 効果とメリット

### 開発チーム向け

- ✅ データドリブンなSLO設定で恣意性を排除
- ✅ 自動化されたメトリクス分析で手作業を削減
- ✅ P99レイテンシー、エラー率の自動追跡

### 運用チーム向け

- ✅ 統合ビューでサービス信頼性を一元管理
- ✅ SLO達成状況をリアルタイム把握
- ✅ 履歴分析でトレンドと改善効果を可視化

---

## 効果とメリット（続き）

### ビジネス向け

- ✅ 技術的な監視がビジネス目標と一致
- ✅ 信頼性トレンドをステークホルダーに報告可能
- ✅ サービス品質の継続的改善を実現

### 組織全体

- ✅ 技術とビジネスの目標ズレを解消
- ✅ SLO管理業務の効率化
- ✅ データドリブンな意思決定が可能に

---

## 料金体系

### 課金対象

- **インバウンドリクエスト**: アプリケーションへの受信リクエスト数
- **アウトバウンドリクエスト**: アプリケーションからの送信リクエスト数
- **SLO料金**: Service Level Objectives機能の利用料

### 最適化のポイント

- 計器化対象を適切に絞り込む
- 不要な計器化データを除外
- SLO監視対象サービスを優先度順に設定

---

## 実装のベストプラクティス

### ステップ1: 計器化

- CloudWatch Application Signals対応の計器化ライブラリを導入
- マイクロサービスアーキテクチャに対応

### ステップ2: 初期SLO設定

1. SLO Recommendationsで候補を取得
2. ビジネス要件と照合
3. 保守可能なSLOを設定

### ステップ3: 継続監視と改善

1. Service-Level SLOsで定期的に達成状況を確認
2. SLO Performance Reportで改善効果を測定
3. 四半期ごとにSLO目標を見直し

---

## まとめ

### 主な変更点

- SLO Recommendations: 自動的にデータドリブンな信頼性目標を提案
- Service-Level SLOs: サービス信頼性を統合的に管理
- SLO Performance Report: 履歴分析でトレンドを可視化

### 期待される効果

- 🎯 目標設定から運用まで、SLO管理が大幅に効率化
- 📊 データドリブンな意思決定を実現
- 🔄 技術とビジネスの目標整合性を確保

### 次のステップ

1. 現在のアプリケーションでCloudWatch Application Signalsを有効化
2. SLO Recommendationsで候補値を取得
3. パイロットプロジェクトでSLO管理を開始

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities/
- **CloudWatch Application Signals**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html
- **SLOモニタリングガイド**: https://oneuptime.com/blog/post/2026-02-12-use-cloudwatch-application-signals-for-slo-monitoring/view

### 関連発表

- **Application Performance Monitoring in EKS**: https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/
- **CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Services.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
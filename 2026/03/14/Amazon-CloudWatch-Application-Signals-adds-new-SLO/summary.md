# Amazon CloudWatch Application Signals adds new SLO capabilities

**カテゴリ:** What's New
**公開日:** 2026-03-13T20:52:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities/)

---

## 要約

Amazon CloudWatch Application Signalsに、SLO Recommendations、Service-Level SLOs、SLO Performance Reportの3つの新しいコンソール機能が追加されました。これらの機能により、顧客はデータドリブンな信頼性目標の設定、サービスヘルスの全体的な監視、および信頼性トレンドの追跡が容易になります。

## 詳細

### 新機能概要

- Amazon CloudWatch Application Signals に、Service Level Objectives（SLO）に関する3つの新しいコンソール機能が追加されました。

### 機能1: SLO Recommendations

- 過去30日間のサービスメトリクス（P99レイテンシーとエラー率）を自動分析
- データに基づいた適切な信頼性目標を提案
- SLO設定の恣意性を排除し、客観的な目標設定が可能に

### 機能2: Service-Level SLOs

- すべての運用にわたるサービス信頼性の全体像を提供
- 技術的な監視とビジネス目標の整合性を簡素化
- リアルタイムでSLO達成状況を監視

### 機能3: SLO Performance Report

- カレンダー期間に合わせた履歴分析を提供
- 日次、週次、月次の間隔をサポート
- 信頼性トレンドを追跡し、改善効果を測定

### 利用可能性と料金

- CloudWatch Application Signalsが利用可能なすべてのAWSリージョンで利用可能
- 料金はアプリケーションとの間のインバウンド・アウトバウンドリクエスト数、およびService Level Objectives料金に基づく

## 主なメリット

### 開発・運用チーム向け

- ✅ データドリブンなSLO設定で客観性を確保
- ✅ 自動分析により手作業を削減
- ✅ P99レイテンシー、エラー率を自動追跡
- ✅ 統合ビューで信頼性を一元管理

### ビジネス向け

- ✅ 技術的な監視がビジネス目標と一致
- ✅ 信頼性改善の効果を定量的に評価
- ✅ ステークホルダーへの報告が容易に

### 組織全体

- ✅ 技術とビジネスの目標ズレを解消
- ✅ SLO管理業務の効率化
- ✅ データドリブンな意思決定を実現

## 実装のポイント

### 初期設定

1. CloudWatch Application Signalsを有効化
2. アプリケーションに計器化を導入
3. SLO Recommendationsで候補値を取得

### 運用開始

1. Service-Level SLOsで継続監視を開始
2. SLO Performance Reportで改善効果を測定
3. 定期的にSLO目標を見直し・最適化

## 背景と市場動向

- SLO管理の必要性が高まり、データドリブンなアプローチが重視
- マイクロサービスアーキテクチャの普及に伴い、複数サービスの信頼性管理が課題に
- ビジネス目標と技術的な監視の整合性が求められている時代
- 自動化によるSLO管理業務の効率化が急務

## 次のステップ

1. 現在のアプリケーションでCloudWatch Application Signalsを有効化
2. SLO Recommendationsで初期候補値を取得
3. ビジネス要件と照合してSLOを設定
4. Service-Level SLOsで定期監視を開始
5. SLO Performance Reportで改善効果を測定

## 参考リソース

- [AWS What's New: CloudWatch Application Signals SLO](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities/)
- [CloudWatch Application Signals ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html)
- [SLOモニタリングガイド](https://oneuptime.com/blog/post/2026-02-12-use-cloudwatch-application-signals-for-slo-monitoring/view)
- [CloudWatch EKS APM](https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/)
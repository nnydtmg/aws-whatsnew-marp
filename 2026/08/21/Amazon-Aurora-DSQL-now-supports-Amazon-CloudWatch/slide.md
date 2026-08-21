---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora DSQLが Amazon CloudWatch Database Insightsに対応

Amazon Aurora DSQL now supports Amazon CloudWatch Database Insights

**What's New** | 2026-08-20T16:00:00

---

## 概要

- Amazon Aurora DSQLが新たにAmazon CloudWatch Database Insightsメトリクスをサポートし、ステートメント単位のクラスタレベルパフォーマンス監視を提供するようになりました。
- このアップデートは、データベースパフォーマンスの診断と最適化を必要とするデータベース管理者やエンタープライズユーザーに特に有益です。

---

## 前提・背景

### これまでの課題

- データベース管理の複雑化によるパフォーマンス監視の必要性向上
- ステートメント単位での詳細な分析が困難
- クエリのボトルネック特定に時間がかかる

### 関連する最近の動向

- AWS Performance Insights が 2026年6月30日に廃止予定
- CloudWatch Database Insights への移行が進行中
- データベース監視がCloudWatchに統一される方向性

---

## 変更内容・新機能

### Amazon CloudWatch Database Insights メトリクス

- **ステートメント単位の監視**: SQL文ごとのパフォーマンス詳細を把握
- **クラスタレベル分析**: クラスタ全体のパフォーマンス状況を一元管理
- **ウェイト状態キャプチャ**: サンプリングされたウェイト状態を記録
- **正規化SQL文**: 全アクティブセッションの正規化されたSQL文を取得

### 分析・診断ツール

- Amazon CloudWatch Database Insightsコンソール統合
- Amazon CloudWatch PromQL対応
- Aurora DSQLシステム診断AIスキル利用可能

---

## パフォーマンス監視の詳細

### メトリクス取得

- **取得間隔**: 1分単位でキャプチャ
- **コスト**: デフォルトで追加コストなし
- **対応リージョン**: Aurora DSQL 利用可能なすべてのAWSリージョン

### クエリの可視化

- リソースを最も消費しているクエリを即座に特定
- クラスタのパフォーマンス問題を診断
- 最適化対象の優先順位付けが容易

---

## 効果・メリット

### 運用効率化

- パフォーマンス問題の迅速な特定と解決
- ダウンタイム削減による信頼性向上
- 運用チームの負担軽減

### コスト最適化

- 無駄なリソース消費の削減
- クエリ最適化による効率向上
- リソース利用率の可視化

### ユーザー体験向上

- レスポンスタイムの改善
- データベース応答性の向上
- アプリケーションパフォーマンス最適化

---

## ユースケース

### パフォーマンス診断・最適化

- 低速クエリの原因分析
- インデックス戦略の改善
- クエリの書き直しと最適化

### 運用監視

- リアルタイムパフォーマンス監視
- 異常検知と早期対応
- SLA達成状況の確認

### キャパシティプランニング

- リソース使用状況の分析
- スケーリング必要性の判断
- コスト予測精度向上

---

## まとめ

### Amazon Aurora DSQLの進化

- Amazon CloudWatch Database Insightsの統合により、包括的な監視・分析基盤が実現
- ステートメント単位の詳細な可視化で、パフォーマンス課題の迅速な解決が可能
- 追加コストなしで拡張監視機能が利用可能

### 次のステップ

1. 既存の Amazon Aurora DSQLクラスタで機能を有効化
2. CloudWatch Database Insights コンソールで監視を開始
3. パフォーマンス改善施策の実施

---

## 参考URL

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-cloudwatch-database-insights/)
- [AWS Performance Insights has been deprecated](https://pganalyze.com/blog/aws-performance-insights-deprecation-database-insights-comparison)
- [CloudWatch Database Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Database-Insights.html)
- [Amazon Aurora DSQL observability concepts and usage with Amazon CloudWatch](https://aws.amazon.com/blogs/database/amazon-aurora-dsql-observability-concepts-and-usage-with-amazon-cloudwatch)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
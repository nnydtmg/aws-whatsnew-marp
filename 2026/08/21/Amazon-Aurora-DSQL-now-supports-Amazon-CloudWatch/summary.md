# Amazon Aurora DSQLが Amazon CloudWatch Database Insightsに対応

Amazon Aurora DSQL now supports Amazon CloudWatch Database Insights

**カテゴリ:** What's New
**公開日:** 2026-08-20T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-cloudwatch-database-insights/)

このページでは、AWS What's Newで発表された「Amazon Aurora DSQL now supports Amazon CloudWatch Database Insights」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Aurora DSQLが新たにAmazon CloudWatch Database Insightsメトリクスをサポートし、ステートメント単位のクラスタレベルパフォーマンス監視を提供するようになりました。このアップデートは、データベースパフォーマンスの診断と最適化を必要とするデータベース管理者やエンタープライズユーザーに特に有益です。

## このアップデートで何が変わったか

- Amazon Aurora DSQLが新しいAmazon CloudWatch Database Insightsメトリクスをサポートするようになりました
- ステートメント単位、クラスタレベルのパフォーマンス監視詳細を提供
- サンプリングされたウェイト状態と正規化されたSQL文を全アクティブクラスタセッションについてキャプチャ
- クラスタのパフォーマンス問題の診断と、最もリソースを消費しているクエリの特定が可能
- Amazon CloudWatch Database Insights、Amazon CloudWatch PromQL、およびAurora DSQLシステム診断AIスキルを使用してクラスタパフォーマンスを分析可能
- メトリクスは1分間隔でキャプチャされ、デフォルトで追加コストなしで利用可能
- Aurora DSQLが利用可能なすべてのAWSリージョンで利用可能

## 対象ユーザー

- **エンタープライズユーザー**: データベースのパフォーマンス監視と最適化が必要な組織
- **データベース管理者**: リアルタイムのパフォーマンス分析とトラブルシューティングが必要
- **アプリケーション開発チーム**: リソース消費の可視化と最適化が必要な場合

## 詳細

### 主な機能

- **ステートメント単位の監視**: SQL文ごとのパフォーマンス詳細を把握
- **クラスタレベル分析**: クラスタ全体のパフォーマンス状況を一元管理
- **ウェイト状態キャプチャ**: サンプリングされたウェイト状態を記録
- **正規化SQL文**: 全アクティブセッションの正規化されたSQL文を取得

### 利用可能性

- **取得間隔**: 1分単位でメトリクスをキャプチャ
- **コスト**: デフォルトで追加コストなし
- **対応リージョン**: Aurora DSQL が利用可能なすべてのAWSリージョン

### 分析・診断ツール

- Amazon CloudWatch Database Insightsコンソール統合
- Amazon CloudWatch PromQL対応
- Aurora DSQLシステム診断AIスキル利用可能

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

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-cloudwatch-database-insights/)
- [AWS Performance Insights has been deprecated](https://pganalyze.com/blog/aws-performance-insights-deprecation-database-insights-comparison)
- [CloudWatch Database Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Database-Insights.html)
- [Amazon Aurora DSQL observability concepts and usage with Amazon CloudWatch](https://aws.amazon.com/blogs/database/amazon-aurora-dsql-observability-concepts-and-usage-with-amazon-cloudwatch)
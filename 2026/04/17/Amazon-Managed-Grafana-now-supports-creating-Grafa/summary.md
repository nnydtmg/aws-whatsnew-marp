# Amazon Managed Grafana now supports creating Grafana 12.4 workspaces

**カテゴリ:** What's New  
**公開日:** 2026-04-17  
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-managed-grafana-v12-create/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-managed-grafana-v12-create/)

---

## 要約

Amazon Managed GrafanaがGrafana 12.4をサポートするようになり、Queryless Drilldownアプリ、Scenes搭載ダッシュボード、Amazon CloudWatch Logsの拡張機能など、複数の新機能が追加されました。このアップデートは、データ探索とダッシュボード分析を強化したい組織、特にAWSクラウド環境でのモニタリングとログ分析を重視する企業に有益です。

---

## 詳細

### Amazon Managed Grafana v12.4 の新機能

#### 1. Queryless Drilldown アプリ
- ユーザーは Prometheus メトリクス、Loki ログ、Tempo トレース、Pyroscope プロファイルのポイント・アンド・クリック探索が可能に
- 複雑なクエリ記述が不要になり、ユーザビリティが向上

#### 2. Scenes 搭載のレンダリングエンジン
- ダッシュボードのパフォーマンスが向上
- 大規模データセットでもスムーズに動作

#### 3. Amazon CloudWatch Logs の拡張機能
- PPL (Power Query Language) および SQL クエリのサポート
- クロスアカウント Metrics Insights に対応
- ログ異常検出機能を新たにサポート

#### 4. テーブルビジュアライゼーション再構築
- CSS セルスタイリング対応でカスタマイズ性が向上
- インタラクティブなアクションボタンを搭載
- パフォーマンスが改善

#### 5. データ探索機能の強化
- トレンドライン変換: メトリクスの傾向を自動分析
- ナビゲーションブックマーク: よく使うビューを保存

### リージョンと利用方法

- **グローバル対応**: Grafana 12.4 は Amazon Managed Grafana が一般提供されているすべての AWS リージョンでサポート
- **作成方法**: AWS Console、SDK、CLI から新しいワークスペースを作成可能

### ターゲットユーザー

- **ダッシュボード分析とデータ探索を強化したいユーザー**
- **CloudWatch ログを活用する組織**
- **複数アカウント環境で作業するチーム**
- **パフォーマンス最適化を求める企業**

---

## 関連リソース

- [AWS What's New 記事](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-managed-grafana-v12-create/)
- [Amazon Managed Grafana ユーザーガイド](https://docs.aws.amazon.com/grafana/latest/userguide/version-differences.html)
- [ワークスペース作成ガイド](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-create-workspace.html)
- [Amazon Managed Grafana 製品ページ](https://aws.amazon.com/grafana/)
- [料金ページ](https://aws.amazon.com/grafana/pricing/)
- [Grafana 12.4 What's New](https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v12-4/)

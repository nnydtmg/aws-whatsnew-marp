---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DataSyncがモニタリングダッシュボードを発表、タスク実行の横断監視が可能に

AWS DataSync launches a monitoring dashboard for tracking task executions across your account

**What's New** | 2026-09-25T15:24:00

---

## 概要

- AWS DataSyncコンソールに新しいモニタリングダッシュボードが追加されました。
- これにより、複数の転送を単一のビューで効率的に監視できるようになります。
- 各タスク実行のステータス、データ/ファイル転送レート、期間、転送量を確認でき、ステータスやタスクでフィルタリングしたり失敗原因を調査したりできます。
- 以前は個別確認や自前CloudWatchダッシュボードが必要でしたが、今では並行転送の健全性・パフォーマンス・進捗を一括監視できます。

---

## 前提・背景

### これまでの課題

AWS DataSyncは、DataSyncコンソールにモニタリングダッシュボードを提供し、アカウント全体のデータ転送を可視化できるようになりました。各タスク実行について、ステータス、データおよびファイルの転送レート、期間、転送されたデータとファイルの総量を確認できます。実行はステータス、タスク、タスクモード、実行ID、開始時刻でフィルタリングできます。ダッシュボードはフィルタ後の結果を集計し、成功/失敗実行数、タスクごとの累積転送データ量・ファイル数を表示します。失敗した実行を選択するとエラー

---

### 関連する最近の動向

- **AWS DataSync launches a monitoring dashboard for tracking task executions across your account**
  [詳細](https://...

---

## 変更内容・新機能

AWS DataSyncは、DataSyncコンソールにモニタリングダッシュボードを提供し、アカウント全体のデータ転送を可視化できるようになりました。各タスク実行について、ステータス、データおよびファイルの転送レート、期間、転送されたデータとファイルの総量を確認できます。実行はステータス、タスク、タスクモード、実行ID、開始時刻でフィルタリングできます。ダッシュボードはフィルタ後の結果を集計し、成功/失敗実行数、タスクごとの累積転送データ量・ファイル数を表示します。失敗した実行を選択するとエラー内容を確認でき、トラブルシューティングが可能です。構成済みタスク、ロケーション、エージェントの数も表示され、リアルタイムの総転送レートも確認できます。以前は複数転送の監視には個別確認や自前Amazon CloudWatchダッシュボードの構築が必要でしたが、今では並行転送の健全性・パフォーマンス・進捗を単一ビューで監視できます。大規模マイグレーションや多数タスクを同時実行する定期転送に適しています。追加費用なしで、AWS DataSyncが利用可能な全ての商用AWSリージョンおよびAWS Gov

---

## まとめ

- AWS DataSync launches a monitoring dashboard for tracking task executions across your account について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/datasync-monitoring-dashboard)

### 関連情報

- [AWS DataSync launches a monitoring dashboard for tracking task executions across your account](https://aws.amazon.com/about-aws/whats-new/2026/09/datasync-monitoring-dashboard)
- [Monitoring data transfers with Amazon CloudWatch metrics](https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html)
- [Monitoring your transfers - AWS DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-large-migration-monitoring.html)
- [AWS DataSync: Simplifying and Accelerating Data Migration in the Cloud](https://cloudchipr.com/blog/aws-datasync-simplifying-and-accelerating-data-migration-in-the-cloud)
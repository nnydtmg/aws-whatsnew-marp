---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Logsが頻繁にクエリされるフィールドを自動インデックス化

Amazon CloudWatch Logs now automatically indexes frequently queried fields

**What's New** | 2026-09-29T08:00:00

---

## 概要

- Amazon CloudWatch Logsは、頻繁にクエリされるフィールドを自動的にインデックス化し、手動設定なしでCloudWatch Logs Insightsクエリを高速化する新機能を提供します。
- これまではクエリパターンに基づいてインデックス対象フィールドを手動選択する必要がありましたが、本機能によりクエリパターンが変化するチームも追加作業なしでクエリが高速化されます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Logs now automatically indexes frequently queried fields - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-auto-indexes-fields/)

- **Create field indexes to improve query performance and reduce scan volume**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html)

- **CloudWatch Insigh...

---

## 変更内容・新機能

Amazon CloudWatch Logsが頻繁にクエリされるフィールドを自動的にインデックス化する機能を発表。手動セットアップなしでCloudWatch Logs Insightsクエリが高速化される。「=」および「IN」演算子でフィルタリングするフィールドが自動的に識別・インデックス化され、クエリはより少ないデータのスキャンで高速に実行される。自動インデックス化されたフィールドはロググループあたり20フィールドの制限にカウントされず、30日間保持される。自動インデックス化されるフィールド一覧はクエリパターンの変化に応じて更新される。永続的にインデックスしたい場合は、コンソールまたはAPIでフィールドインデックスポリシーにプロモート可能。オートインデックスはCloudWatch LogsのフィールドインデックシングがサポートされるすべてのAWSリージョンで追加料金なしで利用可能。クエリパターンが時間とともに変化するチームや、手動でフィールドを選択する作業を削減したいユーザーに適している。

---

## 効果・メリット

- Amazon CloudWatch Logsが頻繁にクエリされるフィールドを自動的にインデックス化する機能を発表。
- 手動セットアップなしでCloudWatch Logs Insightsクエリが高速化される。
- 「=」および「IN」演算子でフィルタリングするフィールドが自動的に識別・インデックス化され、クエリはより少ないデータのスキャンで高速に実行される。
- 自動インデックス化されたフィールドはロググループあたり20フィールドの制限にカウントされず、30日間保持される。
- 自動インデックス化されるフィールド一覧はクエリパターンの変化に応じて更新される。

---

## まとめ

- Amazon CloudWatch Logs now automatically indexes frequently queried fields について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-auto-indexes-fields/)

### 関連情報

- [Amazon CloudWatch Logs now automatically indexes frequently queried fields - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-auto-indexes-fields/)
- [Create field indexes to improve query performance and reduce scan volume](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html)
- [CloudWatch Insights Field-Level Log Indexes](https://vishnuprasad.blog/posts/cloud-watch-logs-field-level-indexes)
- [Log analysis with facets, correlation, enrichment, and automation in Amazon CloudWatch Log Analytics](https://aws.amazon.com/blogs/mt/log-analysis-with-facets-correlation-enrichment-and-automation-in-amazon-cloudwatch-log-analytics)
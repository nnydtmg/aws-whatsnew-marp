---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatchのルックアッププロセッサーがログエンリッチメント機能で利用可能に

Amazon CloudWatch announces lookup processor for log enrichment

**What's New** | 2026-07-14T22:00:00

---

## 概要

- Amazon CloudWatchのルックアッププロセッサーは、CSVベースの参照データを使用してログイベントを自動的にエンリッチし、CloudWatch Pipeline内で直接フィールドマッチングを実行することで、複雑なカスタムエンリッチメントロジックの構築・保守が不要になります。
- このアップデートは、ログデータの品質向上と運用効率化を必要とするすべての組織、特にCloudWatch Pipelinesを活用しているユーザーに有益です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Logs introduces lookup query command | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-03-31-amazon-cloudwatch-logs-introduces-lookup-query-command)

- **Amazon CloudWatch Logs introduces lookup query command - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-lookup-query-command)

- **Amazon CloudWatch announces lookup pr...

---

## 変更内容・新機能

- Amazon CloudWatchがログエンリッチメント用のルックアッププロセッサーを発表いたしました。

- ルックアッププロセッサーは、CSVファイルで管理される参照データとログフィールドをマッチングさせることで、ログイベントに追加のコンテキスト情報を付与することができます。

---

## 効果・メリット

- - このアップデートは、ログデータの品質向上とオペレーション効率化を求める組織に適しております。

---

## ユースケース

- CloudWatch Pipelinesを既に活用しているユーザーや、ログの自動エンリッチメントが必要なユーザーに特に有益です。

---

## まとめ

- Amazon CloudWatch announces lookup processor for log enrichment について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-lookup-processor/)

### 関連情報

- [Amazon CloudWatch Logs introduces lookup query command | The AWS News Feed](https://aws-news.com/article/2026-03-31-amazon-cloudwatch-logs-introduces-lookup-query-command)
- [Amazon CloudWatch Logs introduces lookup query command - AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-lookup-query-command)
- [Amazon CloudWatch announces lookup processor for log ...](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-lookup-processor)
- [Amazon CloudWatch Logs enriches log events with AWS ...](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-resource-tags)
- [Transformation processors - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/transformation-processors.html)
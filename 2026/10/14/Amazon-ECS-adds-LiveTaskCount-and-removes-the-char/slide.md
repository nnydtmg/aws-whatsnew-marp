---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECSがLiveTaskCountメトリクスを追加、RunningTaskCountを無料化

Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric

**What's New** | 2026-10-13T22:00:00

---

## 概要

- Amazon ECSは追加料金なしで新しいLiveTaskCountメトリクスを提供し、既存のRunningTaskCountも無料化いたしました。
- 本アップデートはオートスケーリングやキャパシティプランニングをご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS service utilization metrics - Amazon Elastic Container Service**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service_utilization.html)

- **Amazon ECS CloudWatch metrics - Amazon Elastic Container Service**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/available-metrics.html)

- **Amazon ECS Container Insights metrics - Amaz...

---

## 変更内容・新機能

Amazon Elastic Container Service (Amazon ECS) は、サービス内でアクティブに実行中のタスク数を報告する新しいサービスメトリクス LiveTaskCount を、すべてのお客様に追加料金なしで提供します。あわせて、Amazon CloudWatch Container Insights の既存メトリクス RunningTaskCount も課金対象外となりました。

既存の CloudWatch Container Insights RunningTaskCount メトリクスは、現在の状態と希望状態の両方が RUNNING であるタスクを追跡し、サービスの健全性・安定性のシグナルとして引き続き利用できます。本アップデートにより、RunningTaskCount はすべての CloudWatch Container Insights ユーザーに追加料金なしで提供されます。

---

## まとめ

- Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)

### 関連情報

- [Amazon ECS service utilization metrics - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service_utilization.html)
- [Amazon ECS CloudWatch metrics - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/available-metrics.html)
- [Amazon ECS Container Insights metrics - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-metrics-ECS.html)
- [Monitor Amazon ECS using CloudWatch - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html)
# Amazon ECSがLiveTaskCountメトリクスを追加、RunningTaskCountを無料化

Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric

**カテゴリ:** What's New
**公開日:** 2026-10-13T22:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)

このページでは、AWS What's Newで発表された「Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSは追加料金なしで新しいLiveTaskCountメトリクスを提供し、既存のRunningTaskCountも無料化いたしました。本アップデートはオートスケーリングやキャパシティプランニングをご利用のお客様に適しております。

## このアップデートで何が変わったか

Amazon Elastic Container Service (Amazon ECS) は、サービス内でアクティブに実行中のタスク数を報告する新しいサービスメトリクス LiveTaskCount を、すべてのお客様に追加料金なしで提供します。あわせて、Amazon CloudWatch Container Insights の既存メトリクス RunningTaskCount も課金対象外となりました。

既存の CloudWatch Container Insights RunningTaskCount メトリクスは、現在の状態と希望状態の両方が RUNNING であるタスクを追跡し、サービスの健全性・安定性のシグナルとして引き続き利用できます。本アップデートにより、RunningTaskCount はすべての CloudWatch Container Insights ユーザーに追加料金なしで提供されます。

## 対象ユーザー

Amazon Elastic Container Service (Amazon ECS) は、サービス内でアクティブに実行中のタスク数を報告する新しいサービスメトリクス LiveTaskCount を、すべてのお客様に追加料金なしで提供します。あわせて、Amazon CloudWatch Container Insights の既存メトリクス RunningTaskCount も課金対象外となりました。

## 詳細

Amazon Elastic Container Service (Amazon ECS) は、サービス内でアクティブに実行中のタスク数を報告する新しいサービスメトリクス LiveTaskCount を、すべてのお客様に追加料金なしで提供します。あわせて、Amazon CloudWatch Container Insights の既存メトリクス RunningTaskCount も課金対象外となりました。

LiveTaskCount は、ACTIVATING、RUNNING、DEACTIVATING の全ライフサイクル状態にわたるアクティブな ECS タスク数を報告します。スケールイン時のコネクションドレイニング中など、停止へ遷移中でも実行中のタスクも含みます。この包括的な状態カバレッジにより、オートスケーリングポリシーやキャパシティプランニングなど、アクティブでメトリクスを生成しているタスクの全体像が必要な用途に適しています。ECS サービス利用率メトリクスの一部として無料で利用でき、CloudWatch Container Insights へのオプトインは不要です。

既存の CloudWatch Container Insights RunningTaskCount メトリクスは、現在の状態と希望状態の両方が RUNNING であるタスクを追跡し、サービスの健全性・安定性のシグナルとして引き続き利用できます。本アップデートにより、RunningTaskCount はすべての CloudWatch Container Insights ユーザーに追加料金なしで提供されます。

これらのアップデートは Amazon ECS が利用可能なすべての AWS リージョンで利用できます。お客様側の操作は不要で、RunningTaskCount の料金変更は 2026年10月1日から自動的に適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)
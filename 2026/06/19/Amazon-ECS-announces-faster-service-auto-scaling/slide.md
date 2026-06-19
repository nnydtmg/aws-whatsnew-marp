---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS が高速なサービスオートスケーリングを発表

Amazon ECS announces faster service auto scaling

**What's New** | 2026-06-18T21:00:00

---

## 概要

- Amazon ECS サービスのオートスケーリングが20秒単位の高解像度メトリクスに対応し、スケールアウトのトリガー時間を76%短縮できるようになりました。
- この更新は、ワークロード需要の変動に迅速に対応しながらコンピュート費用を削減したい企業に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Create a target tracking policy using high-resolution metrics for ...**
  [詳細](https://docs.aws.amazon.com/autoscaling/ec2/userguide/policy-creating-high-resolution-metrics.html)

---

## 変更内容・新機能

- この機能は、AWS コンソール、CLI、CloudFormation、または AWS SDK を使用して設定でき、AWS Fargate、Amazon ECS マネージドインスタンス、Amazon EC2 のすべての ECS コンピュートオプションで利用可能です。

- この機能は、すべての AWS 商用リージョンおよび AWS GovCloud（US）リージョンで利用可能です。

---

## 効果・メリット

- - AWS のベンチマークテストでは、スケールアウトのトリガー時間が363秒から86秒に短縮され（76%高速化、4.2倍）、新しいタスクのスケーリングとプロビジョニングの総時間が386秒から109秒に短縮されました（72%高速化、3.5倍）。
- - この高速なサービスオートスケーリングにより、ベースラインキャパシティを削減し、ワークロード需要の変動に対応しながらコンピュート費用を低減できます。

---

## まとめ

- Amazon ECS announces faster service auto scaling について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ecs-faster-autoscaling/)

### 関連情報

- [Create a target tracking policy using high-resolution metrics for ...](https://docs.aws.amazon.com/autoscaling/ec2/userguide/policy-creating-high-resolution-metrics.html)
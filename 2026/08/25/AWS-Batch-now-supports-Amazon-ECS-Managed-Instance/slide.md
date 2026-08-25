---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Batch が Amazon ECS Managed Instances に対応

AWS Batch now supports Amazon ECS Managed Instances

**What's New** | 2026-08-25T19:36:00

---

## 概要

- AWS Batchは、Amazon ECS Managed Instancesを新しいコンピュート オプションとして導入し、GPU加速ワークロードの実行と運用管理の自動化を実現しました。
- このアップデートにより、顧客はインフラストラクチャ管理の負担を軽減しながら、柔軟なキャパシティ オプション（On-Demand、Spot、リザーベッド）でバッチジョブを実行できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS Amazon Linux 2 AMI deprecation - AWS Batch**
  [詳細](https://docs.aws.amazon.com/batch/latest/userguide/ecs-al2-ami-deprecation.html)

- **Amazon ECS Managed Instances compute environments - AWS Batch**
  [詳細](https://docs.aws.amazon.com/batch/latest/userguide/ecs_managed_instances.html)

---

## 変更内容・新機能

- AWSがAMIアップデート、セキュリティパッチ、インスタンスライフサイクル管理を自動的に処理するため、顧客管理のAmazon EC2インフラストラクチャの運用オーバーヘッドが排除されます。

- AWS Batchが利用可能なすべてのAWSリージョンでサポートされています。

---

## まとめ

- AWS Batch now supports Amazon ECS Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-batch-on-ecs-managed-instances/)

### 関連情報

- [Amazon ECS Amazon Linux 2 AMI deprecation - AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/ecs-al2-ami-deprecation.html)
- [Amazon ECS Managed Instances compute environments - AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/ecs_managed_instances.html)
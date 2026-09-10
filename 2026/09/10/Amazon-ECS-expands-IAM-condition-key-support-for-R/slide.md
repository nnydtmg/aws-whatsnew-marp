---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS が RunTask / StartTask API で IAM 条件キーのサポートを拡大

Amazon ECS expands IAM condition key support for RunTask and StartTask APIs

**What's New** | 2026-09-10T16:52:00

---

## 概要

- Amazon ECSがRunTaskとStartTask APIでIAM条件キーをサポートし、管理者がリソース制限を統一的に適用できるようになりました。

---

## 前提・背景

### これまでの課題

Amazon ECSはRunTaskおよびStartTask APIでCPUとメモリのIAM条件キーを新たにサポートするようになりました。このアップデートはすべてのタスク起動方法で一貫したリソース制限を適用したい管理者やコスト超過を防ぎたい組織に適しています。以前は ecs:task-cpu と ecs:task-memory 条件キーは RegisterTaskDefinition、CreateService、UpdateService API でのみ利用可能でした。これらの条件キーが Run

---

### 関連する最近の動向

- **[ECS] Expand support for IAM condition keys on RunTask and StartTask APIs**
  [詳細](https://github.com/aws/conta...

---

## 変更内容・新機能

Amazon ECSはRunTaskおよびStartTask APIでCPUとメモリのIAM条件キーを新たにサポートするようになりました。このアップデートはすべてのタスク起動方法で一貫したリソース制限を適用したい管理者やコスト超過を防ぎたい組織に適しています。以前は ecs:task-cpu と ecs:task-memory 条件キーは RegisterTaskDefinition、CreateService、UpdateService API でのみ利用可能でした。これらの条件キーが RunTask と StartTask API にも拡張され、IAMポリシーがこれらのAPI経由でのタスク起動時にも評価されるようになりました。管理者は単一の統一された仕組みでECS環境全体のリソース割り当てを制御できます。この機能強化はAmazon ECSが利用可能なすべてのAWSリージョンで追加料金なしで利用できます。

---

## まとめ

- Amazon ECS expands IAM condition key support for RunTask and StartTask APIs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-expands-condition-key-support/)

### 関連情報

- [[ECS] Expand support for IAM condition keys on RunTask and StartTask APIs](https://github.com/aws/containers-roadmap/issues/2559)
- [Amazon ECS adds support for additional IAM condition keys](https://aws.amazon.com/about-aws/whats-new/2025/02/amazon-ecs-additional-iam-condition-keys)
- [Actions, resources, and condition keys for ECS](https://docs.aws.amazon.com/service-authorization/latest/reference/list_ecs.html)
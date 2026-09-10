# Amazon ECS が RunTask / StartTask API で IAM 条件キーのサポートを拡大

Amazon ECS expands IAM condition key support for RunTask and StartTask APIs

**カテゴリ:** What's New
**公開日:** 2026-09-10T16:52:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-expands-condition-key-support/)

このページでは、AWS What's Newで発表された「Amazon ECS expands IAM condition key support for RunTask and StartTask APIs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSがRunTaskとStartTask APIでIAM条件キーをサポートし、管理者がリソース制限を統一的に適用できるようになりました。

## このアップデートで何が変わったか

Amazon ECSはRunTaskおよびStartTask APIでCPUとメモリのIAM条件キーを新たにサポートするようになりました。このアップデートはすべてのタスク起動方法で一貫したリソース制限を適用したい管理者やコスト超過を防ぎたい組織に適しています。以前は ecs:task-cpu と ecs:task-memory 条件キーは RegisterTaskDefinition、CreateService、UpdateService API でのみ利用可能でした。これらの条件キーが RunTask と StartTask API にも拡張され、IAMポリシーがこれらのAPI経由でのタスク起動時にも評価されるようになりました。管理者は単一の統一された仕組みでECS環境全体のリソース割り当てを制御できます。この機能強化はAmazon ECSが利用可能なすべてのAWSリージョンで追加料金なしで利用できます。

## 対象ユーザー

Amazon ECSはRunTaskおよびStartTask APIでCPUとメモリのIAM条件キーを新たにサポートするようになりました。このアップデートはすべてのタスク起動方法で一貫したリソース制限を適用したい管理者やコスト超過を防ぎたい組織に適しています。以前は ecs:task-cpu と ecs:task-memory 条件キーは RegisterTaskDefinition、CreateService、UpdateService API でのみ利用可能でした。これらの条件キーが RunTask と StartTask API にも拡張され、IAMポリシーがこれらのAPI経由でのタスク

## 詳細

Amazon ECSはRunTaskおよびStartTask APIでCPUとメモリのIAM条件キーを新たにサポートするようになりました。このアップデートはすべてのタスク起動方法で一貫したリソース制限を適用したい管理者やコスト超過を防ぎたい組織に適しています。以前は ecs:task-cpu と ecs:task-memory 条件キーは RegisterTaskDefinition、CreateService、UpdateService API でのみ利用可能でした。これらの条件キーが RunTask と StartTask API にも拡張され、IAMポリシーがこれらのAPI経由でのタスク起動時にも評価されるようになりました。管理者は単一の統一された仕組みでECS環境全体のリソース割り当てを制御できます。この機能強化はAmazon ECSが利用可能なすべてのAWSリージョンで追加料金なしで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-expands-condition-key-support/)
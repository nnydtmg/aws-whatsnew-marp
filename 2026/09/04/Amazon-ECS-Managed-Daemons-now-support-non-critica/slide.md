---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS Managed Daemonsが非クリティカルデーモンをサポート

Amazon ECS Managed Daemons now support non-critical daemons

**What's New** | 2026-09-03T22:01:00

---

## 概要

- Amazon ECSマネージドデーモンが非クリティカルデーモンをサポートし、デーモン障害時でもミッションクリティカルなアプリケーションタスクを中断なく継続できるようになりました。
- ログやメトリクスなどの補助機能よりもアプリケーションの継続性を重視されるお客様にご活用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS Managed Daemons — Deploy Once, Run Everywhere**
  [詳細](https://www.youtube.com/watch?v=EfG83fio7jw)

- **Amazon ECS announces Managed Daemons for ECS Managed Instances**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecs-managed-daemons)

- **Announcing managed daemon support for Amazon ECS Managed Instances**
  [詳細](https://aws.amazon.com/blogs/aws/...

---

## 変更内容・新機能

新機能として、Amazon ECSマネージドデーモンで非クリティカルデーモンを設定できるようになりました。デーモンを非クリティカルに設定すると、失敗、停止、または異常時でもアプリケーションタスクが中断なく実行され続けます。非クリティカルデーモンの障害時でも、コンテナインスタンスはアクティブのままで、既存タスクの継続と新規タスクの配置が行われ、インスタンス登録もブロックされません。デーモンの起動失敗時にはEventBridgeイベントが発行され、サービスアクションログで健全性を観測できます。AWSコンソール、CLI、CloudFormation、またはAWS SDKでcriticalパラメータをfalseに設定して利用できます。本アップデートは、ログやメトリクスなどの補助機能よりもアプリケーションの継続実行を重視されるミッションクリティカルなお客様に適しています。

---

## まとめ

- Amazon ECS Managed Daemons now support non-critical daemons について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/ecs-managed-daemons-non-critical/)

### 関連情報

- [Amazon ECS Managed Daemons — Deploy Once, Run Everywhere](https://www.youtube.com/watch?v=EfG83fio7jw)
- [Amazon ECS announces Managed Daemons for ECS Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecs-managed-daemons)
- [Announcing managed daemon support for Amazon ECS Managed Instances](https://aws.amazon.com/blogs/aws/announcing-managed-daemon-support-for-amazon-ecs-managed-instances)
- [Amazon ECS Managed Daemons - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-daemons.html)
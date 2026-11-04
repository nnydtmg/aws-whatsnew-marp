---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS Managed Daemonsがjson-fileログ収集をサポート

Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances

**What's New** | 2026-11-04T21:29:00

---

## 概要

- Amazon ECS Managed Instances上でjson-file形式のアプリケーションログをManaged Daemonsが収集できるようになりました。
- 任意のオブザーバビリティエージェントでログを任意の宛先へ転送したいお客様向けの機能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS announces Managed Daemons for ECS Managed Instances | AWS Builder Center**
  [詳細](https://builder.aws.com/content/3C1qZPhJm6VeQefTh29mN2crhQC/amazon-ecs-announces-managed-daemons-for-ecs-managed-instances)

- **Amazon ECS announces Managed Daemons for ECS Managed Instances - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecs-managed-daemons)

-...

---

## 変更内容・新機能

Amazon Elastic Container Service (Amazon ECS) は、Amazon ECS Managed Instances向けのjson-fileログドライバー対応と、Amazon ECS Managed Daemons向けのログドライバーボリュームを導入しました。これらにより、任意のオブザーバビリティエージェントでアプリケーションログを収集し、任意の宛先へ転送できます。アプリケーションコンテナは標準のDocker json-file形式でローカルファイルにログを書き出せます。マネージドデーモンはボリュームマウントにより、ホストのバインドマウントパスやルート権限なしでログを読み取れます。各インスタンス上の1つのマネージドデーモンが、json-fileログドライバーを使用するすべてのアプリケーションコンテナからログを収集できます。ログはコンテナIDで命名された専用ディレクトリに保持され、コンテナ削除まで残ります。利用開始には、アプリケーションタスク定義のlogConfigurationでログドライバーをjson-fileに設定し、daemonタスク定義でlo

---

## まとめ

- Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-managed-instances-json-file-log-driver/)

### 関連情報

- [Amazon ECS announces Managed Daemons for ECS Managed Instances | AWS Builder Center](https://builder.aws.com/content/3C1qZPhJm6VeQefTh29mN2crhQC/amazon-ecs-announces-managed-daemons-for-ecs-managed-instances)
- [Amazon ECS announces Managed Daemons for ECS Managed Instances - AWS](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecs-managed-daemons)
- [Amazon ECS Managed Instances](https://docs.datadoghq.com/containers/amazon_ecs/managed_instances)
- [Announcing managed daemon support for Amazon ECS Managed Instances | AWS News Blog](https://aws.amazon.com/blogs/aws/announcing-managed-daemon-support-for-amazon-ecs-managed-instances)
- [Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-managed-instances-json-file-log-driver/)
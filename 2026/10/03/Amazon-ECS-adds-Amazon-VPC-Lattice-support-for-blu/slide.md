---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECSがVPC Lattice向けにブルー/グリーン・リニア・カナリアデプロイをサポート

Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments

**What's New** | 2026-10-02T20:18:00

---

## 概要

- Amazon ECSがVPC Lattice利用サービス向けにブルー/グリーン、リニア、カナリアデプロイをネイティブサポートしました。
- VPC Latticeでサービス間通信を行うECSのお客様が、制御されたトラフィック移行をご活用いただけます。

---

## 前提・背景

### これまでの課題

さらに、Amazon CloudWatchアラームとAmazon ECSデプロイメントサーキットブレーカーを使用して、問題が検知された場合に自動的にロールバックできます。ベークタイムにより前バージョンを納期なくロールバックできる状態で維持し、ダウンタイムなしで復元できます。

---

### 関連する最近の動向

- **Gradual deployments in Amazon ECS with linear and canary strategies**
  [詳細](https://aws.amazon.com/blogs/containers/gradual-deployments-in-amazon-ecs-with-linear-and-canary-strategies)

- **Amazon ECS now supports built-in ...

---

## 変更内容・新機能

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

本アップデートにより、VPC Latticeを使用するECSのお客様は、デプロイ中にトラフィックを制御しながら移行できます。各リリースに対する確信度に応じて、ブルー/グリーンで一度に全部、リニアで等間隔に段階的に、かカナリアで小さな割合から開始するなど、トラフィック移行の速度を選択できます。

---

## ユースケース

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

---

## まとめ

- Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)

### 関連情報

- [Gradual deployments in Amazon ECS with linear and canary strategies](https://aws.amazon.com/blogs/containers/gradual-deployments-in-amazon-ecs-with-linear-and-canary-strategies)
- [Amazon ECS now supports built-in Linear and Canary deployments](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-ecs-built-in-linear-canary-deployments)
- [Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-blue-green.html)
- [Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)
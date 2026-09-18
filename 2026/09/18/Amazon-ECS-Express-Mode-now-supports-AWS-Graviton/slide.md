---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS Express Mode が AWS Graviton (ARM64) ワークロードをサポート

Amazon ECS Express Mode now supports AWS Graviton (ARM64) workloads

**What's New** | 2026-09-18

---

## 概要

- Amazon ECS Express ModeがARM64をサポートし、Gravitonによる最大40パーセントの価格性能向上をご利用いただけるようになりました。
- コスト最適化や既存環境との整合を検討されるお客様に適したアップデートです。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS Express Mode now supports AWS Graviton (ARM64) workloads - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-express-mode-arm-architecture)

- **ECS Express Mode のサービス作成時に ARM64 を指定できるよう**
  [詳細](https://dev.classmethod.jp/articles/ecs-express-mode-cpu-architecture-arm64)

- **AWS Graviton5 Migration: 12 Steps, 90 Min [2026]**
  [詳細](https://t...

---

## 変更内容・新機能

新機能は、Amazon ECS Express ModeがCPUアーキテクチャとしてARM64を指定できるようになったことです。ARMベースのコンテナイメージをAWS Graviton搭載コンピュートへ容易にデプロイいただけます。x86ベースと比較して最大40パーセント優れた価格性能をご利用いただけます。本アップデートは、Gravitonでコスト最適化を図りたいお客様に適しております。既存フリートに合わせたいお客様やARM向けイメージをデプロイしたいお客様にも適しております。

---

## 効果・メリット

- Amazon ECS Express ModeがARM64をサポートし、Gravitonによる最大40パーセントの価格性能向上をご利用いただけるようになりました。
- コスト最適化や既存環境との整合を検討されるお客様に適したアップデートです。

---

## まとめ

- Amazon ECS Express Mode now supports AWS Graviton (ARM64) workloads について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-express-mode-arm-architecture/)

### 関連情報

- [Amazon ECS Express Mode now supports AWS Graviton (ARM64) workloads - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-express-mode-arm-architecture)
- [ECS Express Mode のサービス作成時に ARM64 を指定できるよう](https://dev.classmethod.jp/articles/ecs-express-mode-cpu-architecture-arm64)
- [AWS Graviton5 Migration: 12 Steps, 90 Min [2026]](https://tech-insider.org/aws-graviton5-migration-2026)
- [Amazon ECS-optimized Linux AMIs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html)
- [Amazon ECS task definitions for 64-bit ARM workloads](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-arm64.html)
---
marp: true
theme: default
paginate: true
---

# Amazon ECS adds Network Load Balancer support for Linear and Canary deployments

**What's New** | 2026-02-04T18:00:00

---

## 概要

- Amazon ECS が Network Load Balancer に対応した Linear および Canary デプロイメント戦略のネイティブサポートを追加いたしました。
- これにより、TCP/UDP ベースの接続や低レイテンシーを必要とするアプリケーションが、段階的なトラフィックシフトと CloudWatch アラーム統合によるリスク軽減されたデプロイメントを実現できるようになります。

---

## 前提・背景

### これまでの課題

- Amazon CloudWatch アラームと統合され、問題が検出された場合に自動的にデプロイメントを停止またはロールバックできます。

---

### 関連する最近の動向

- **Required resources for Amazon ECS linear deployments**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linear-deployment-implementation.html)

- **Required resources for Amazon ECS canary deployments**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cana...)

---

## 変更内容・新機能

- Amazon ECS が Network Load Balancer (NLB) に対応した Linear および Canary デプロイメント戦略のネイティブサポートを追加いたしました。

---

## ユースケース

- TCP/UDP ベースの接続、低レイテンシー、長時間接続、または静的 IP アドレスを必要とするアプリケーションが、ECS からのマネージド段階的トラフィックシフトを活用できるようになりました。

---

## まとめ

- Amazon ECS adds Network Load Balancer support for Linear and Canary deployments について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ecs-nlb-linear-canary-deployments)

### 関連情報

- [Required resources for Amazon ECS linear deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linear-deployment-implementation.html)
- [Required resources for Amazon ECS canary deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/canary-deployment-implementation.html)
- [Amazon ECS adds Network Load Balancer support for Linear and ...](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ecs-nlb-linear-canary-deployments/)
- [Amazon ECS now supports built-in Linear and Canary deployments](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-ecs-built-in-linear-canary-deployments/)
- [Amazon ECS canary deployments - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/canary-deployment.html)
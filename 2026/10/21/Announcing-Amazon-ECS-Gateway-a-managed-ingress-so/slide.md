---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS Gatewayを発表 — ECS向けマネージドイングレス

Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services

**What's New** | 2026-10-20T23:26:00

---

## 概要

- Amazon ECS Gatewayは、Application Load Balancerを動的にプロビジョニングおよび管理するECS向けの新しいマネージドイングレスソリューションです。
- プラットフォームチームによる中央集権的なガバナンスと、アプリケーションチームの簡易な利用の両方に適しています。
- ホストベースルーティングにより最大25サービスが1つのALBを共有でき、各サービスに一意のDNSホスト名が付与されます。
- すべての商用AWSリージョンで追加料金なしで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **Introducing Amazon ECS Gateway: A fully-managed ingress solution for ECS services | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/introducing-amazon-ecs-gateway-a-fully-managed-ingress-solution-for-ecs-services)

- **Amazon ECS Gateway - Amazon Elastic Container Service**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-overview.html)

---

## 変更内容・新機能

ホストベースルーティングを提供し、最大25のサービスが1つのALBを共有でき、各サービスに一意のHTTPS DNSホスト名（https://<id>.ecs.<region>.on.aws）を付与します。ECSは基盤インフラのライフサイクルを完全に管理し、最初のサービス接続時にALBをプロビジョニングし、容量到達時に追加し、不要時に削除します。

プラットフォームチームはゲートウェイ上で組織のネットワーキング標準（スキーム、サブネット、AWS WAF Web ACL、セキュリティグループ等）を一度定義し、複数クラスタに関連付けます。アプリケーションチームはネットワーキングの専門知識なしにgateway connectorパラメータを追加するだけでそれらの標準を継承できます。

---

## まとめ

- Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)

### 関連情報

- [Introducing Amazon ECS Gateway: A fully-managed ingress solution for ECS services | AWS News Blog](https://aws.amazon.com/blogs/aws/introducing-amazon-ecs-gateway-a-fully-managed-ingress-solution-for-ecs-services)
- [Amazon ECS Gateway - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-overview.html)
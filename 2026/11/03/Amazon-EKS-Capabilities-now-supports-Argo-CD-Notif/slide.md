---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS CapabilitiesがArgo CD Notificationsに対応

Amazon EKS Capabilities now supports Argo CD Notifications

**What's New** | 2026-11-03T06:00:00

---

## 概要

- Amazon EKS Capability for Argo CDがArgo CD Notificationsに対応し、アプリケーションの同期や障害などを16のサービスへ通知できるようになりました。
- 本アップデートは、認証情報をクラスターに保存せずにデプロイイベントを連携したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EKS Capabilities now supports Argo CD Notifications - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)

- **[EKS] [request]: Argo CD capability notification controller**
  [詳細](https://github.com/aws/containers-roadmap/issues/2747)

- **EKS Capabilities - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/...

---

## 変更内容・新機能

- Amazon EKS Capability for Argo CDが、Argo CD Notificationsに対応いたしました。
- アプリケーションの同期、失敗、またはヘルス変化時に通知を提供いたします。
- クラスターでトリガーとメッセージテンプレートを定義し、アノテーションでApplicationを購読できます。
- Slack、PagerDuty、Opsgenie、Amazon SQS、Amazon EventBridgeなど16の通知サービスに配信できます。
- Amazon SQSとAmazon EventBridgeは、IAM Capability Roleで認証いたします。
- 第三者認証情報は、AWS Secrets ManagerのARNを指定して利用できます。
- 対象リージョンでは追加料金なしでご利用いただけます。
- 本アップデートは、EKS上のArgo CDでデプロイ通知やイベント験動ワークフローを求めるお客様に適しております。

---

## まとめ

- Amazon EKS Capabilities now supports Argo CD Notifications について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)

### 関連情報

- [Amazon EKS Capabilities now supports Argo CD Notifications - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)
- [[EKS] [request]: Argo CD capability notification controller](https://github.com/aws/containers-roadmap/issues/2747)
- [EKS Capabilities - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/capabilities.html)
- [Amazon EKS User Guide - Argo CD Notifications](https://docs.aws.amazon.com/eks/latest/userguide/argocd-notifications.html)
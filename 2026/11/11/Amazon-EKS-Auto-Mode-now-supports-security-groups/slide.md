---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS Auto ModeがPod向けセキュリティグループをサポート

Amazon EKS Auto Mode now supports security groups for Pods

**What's New** | 2026-11-11T17:26:00

---

## 概要

- Amazon EKS Auto ModeがPod向けセキュリティグループに対応し、同一ノード上のワークロードごとにネットワークセグメンテーションが可能になりました。
- Kubernetes 1.36以降で追加料金なしにご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Review EKS Auto Mode release notes - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/auto-change.html)

- **AWS EKS Auto Mode: New subnet and security group fields**
  [詳細](https://www.linkedin.com/posts/blopesinfo_aws-news-new-feature-for-amazon-eks-auto-activity-7340432777361686529-basP)

- **New Amazon EKS Auto Mode features for enhanced security, network...

---

## 変更内容・新機能

- 新しい機能は、Amazon EKS Auto ModeにおけるPod向けセキュリティグループのサポートです。
- 個々のPodに専用のAmazon EC2セキュリティグループルールを適用できます。
- 同一ノード上の異なるワークロードに異なるセキュリティグループを割り当てられます。
- SecurityGroupPolicyリソースにより、対象のPodへセキュリティグループを定義できます。
- このアップデートは、ノードプールを分けずにネットワークレベルのセグメンテーションを求めるお客様に適しております。
- Amazon RDSやAmazon ElastiCacheへセキュリティグループ単位で接続したいお客様にも有用です。

---

## まとめ

- Amazon EKS Auto Mode now supports security groups for Pods について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/)

### 関連情報

- [Review EKS Auto Mode release notes - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/auto-change.html)
- [AWS EKS Auto Mode: New subnet and security group fields](https://www.linkedin.com/posts/blopesinfo_aws-news-new-feature-for-amazon-eks-auto-activity-7340432777361686529-basP)
- [New Amazon EKS Auto Mode features for enhanced security, network control, and performance](https://aws.amazon.com/blogs/containers/new-amazon-eks-auto-mode-features-for-enhanced-security-network-control-and-performance)
- [Assign security groups to individual Pods - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/security-groups-for-pods.html)
- [Does EKS Auto Mode support Security Groups Per Pod?](https://repost.aws/questions/QUjMi_TutUS8S8XrH_B7L4kA/does-eks-auto-mode-support-security-groups-per-pod)
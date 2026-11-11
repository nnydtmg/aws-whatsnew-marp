# Amazon EKS Auto ModeがPod向けセキュリティグループをサポート

Amazon EKS Auto Mode now supports security groups for Pods

**カテゴリ:** What's New
**公開日:** 2026-11-11T17:26:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/)

このページでは、AWS What's Newで発表された「Amazon EKS Auto Mode now supports security groups for Pods」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Auto ModeがPod向けセキュリティグループに対応し、同一ノード上のワークロードごとにネットワークセグメンテーションが可能になりました。Kubernetes 1.36以降で追加料金なしにご利用いただけます。

## このアップデートで何が変わったか

- 新しい機能は、Amazon EKS Auto ModeにおけるPod向けセキュリティグループのサポートです。
- 個々のPodに専用のAmazon EC2セキュリティグループルールを適用できます。
- 同一ノード上の異なるワークロードに異なるセキュリティグループを割り当てられます。
- SecurityGroupPolicyリソースにより、対象のPodへセキュリティグループを定義できます。
- このアップデートは、ノードプールを分けずにネットワークレベルのセグメンテーションを求めるお客様に適しております。
- Amazon RDSやAmazon ElastiCacheへセキュリティグループ単位で接続したいお客様にも有用です。

## 対象ユーザー

- 新しい機能は、Amazon EKS Auto ModeにおけるPod向けセキュリティグループのサポートです。
- 個々のPodに専用のAmazon EC2セキュリティグループルールを適用できます。
- 同一ノード上の異なるワークロードに異なるセキュリティグループを割り当てられます。
- SecurityGroupPolicyリソースにより、対象のPodへセキュリティグループを定義できます。
- このアップデートは、ノードプールを分けずにネットワークレベルのセグメンテーションを求めるお客様に適しております。
- Amazon RDSやAmazon ElastiCacheへセキュリティグループ

## 詳細

- 新しい機能は、Amazon EKS Auto ModeにおけるPod向けセキュリティグループのサポートです。
- 個々のPodに専用のAmazon EC2セキュリティグループルールを適用できます。
- 同一ノード上の異なるワークロードに異なるセキュリティグループを割り当てられます。
- SecurityGroupPolicyリソースにより、対象のPodへセキュリティグループを定義できます。
- このアップデートは、ノードプールを分けずにネットワークレベルのセグメンテーションを求めるお客様に適しております。
- Amazon RDSやAmazon ElastiCacheへセキュリティグループ単位で接続したいお客様にも有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/)
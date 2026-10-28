---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS DashboardがCAローテーションのフリート全体可視化に対応

Amazon EKS Dashboard now provides fleet-wide visibility into certificate authority (CA) rotation

**What's New** | 2026-10-28T18:07:00

---

## 概要

- Amazon EKSダッシュボードにCAローテーションのフリート全体可視化が追加され、複数クラスターの証明書状況を一箇所で確認できるようになりました。
- 多数のクラスターを運用するプラットフォームチームに適した更新です。

---

## 前提・背景

### 関連する最近の動向

- **Centralize visibility of Kubernetes clusters across AWS Regions and accounts with EKS Dashboard | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/centralize-visibility-of-kubernetes-clusters-across-aws-regions-and-accounts-with-eks-dashboard)

- **Amazon EKS Now Supports Certificate Authority (CA) Rotation with Automated Lifecycle Management | AWS Builder Center**
  [詳細]...

---

## 変更内容・新機能

Amazon Elastic Kubernetes Service (Amazon EKS) は、Amazon EKS Dashboard に証明書認証局（CA）ローテーションの可視化機能を追加しました。これにより、複数クラスターにわたるCAローテーション状況を統合ビューで確認できます。Amazon EKS Dashboard はすでにAWSリージョンおよびアカウントを横断したクラスターの一元可視化を提供しており、今回CAローテーション情報が追加されたことで、クラスターごとに個別確認することなく、対応が必要な箇所を把握できます。各Amazon EKSクラスターには固有のCAがあり、2018年以降に作成されたクラスターのCAは10年の有効期限を持ち、ローテーション作業を開始すべき時期に近づいています。EKS Dashboardでは、クラスターごとのCAローテーション状況、有効期限が近づいているCA、今後の自動ローテーションイベントを一箇所で確認でき、多数のクラスターを運用するプラットフォームチームがフリート全体で対応を優先できます。Amazon EKS DashboardはAWS Org

---

## まとめ

- Amazon EKS Dashboard now provides fleet-wide visibility into certificate authority (CA) rotation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-dashboard-fleet-wide-visibility-certificate-authority-ca-rotation/)

### 関連情報

- [Centralize visibility of Kubernetes clusters across AWS Regions and accounts with EKS Dashboard | AWS News Blog](https://aws.amazon.com/blogs/aws/centralize-visibility-of-kubernetes-clusters-across-aws-regions-and-accounts-with-eks-dashboard)
- [Amazon EKS Now Supports Certificate Authority (CA) Rotation with Automated Lifecycle Management | AWS Builder Center](https://builder.aws.com/content/3IQPZkgeUTajyGz6b1NP1lMhWds/amazon-eks-now-supports-certificate-authority-ca-rotation-with-automated-lifecycle-management)
- [Rotate the EKS cluster certificate authority (CA) - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/certificate-authority-rotation.html)
- [Deep dive into Amazon EKS certificate authority rotation | Containers](https://aws.amazon.com/blogs/containers/deep-dive-into-amazon-eks-certificate-authority-rotation)
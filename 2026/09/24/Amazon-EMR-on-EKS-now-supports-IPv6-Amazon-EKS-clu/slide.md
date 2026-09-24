---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EMR on EKS が IPv6 対応の Amazon EKS クラスターをサポート

Amazon EMR on EKS now supports IPv6 Amazon EKS clusters

**What's New** | 2026-09-23T15:00:00

---

## 概要

- Amazon EMR on EKSがIPv6対応のAmazon EKSクラスターでのワークロード実行をサポートいたしました。
- 本機能は、大規模なSparkおよびFlinkワークロードを運用するデータプラットフォームチームに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EKS launches IPv6 support | Containers**
  [詳細](https://aws.amazon.com/blogs/containers/amazon-eks-launches-ipv6-support)

- **Running IPv6 EKS Clusters - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/best-practices/ipv6.html)

- **Amazon Elastic Kubernetes Service Adds IPv6 Networking**
  [詳細](https://aws.amazon.com/blogs/aws/amazon-elastic-kubernetes-servic...

---

## 変更内容・新機能

- 新機能は、Amazon EMR on EKSがIPv6対応のAmazon EKSクラスター上でApache SparkおよびApache Flinkを実行できるようになったことです。
- IPv6の広大なアドレス空間により、大規模ジョブをアドレス制限なく同時実行できます。
- 追加設定や追加料金なしで、emr-7.14.0およびemr-spark-8.0.0以降からご利用いただけます。
- 本更新は、大規模な分析ワークロードを運用するデータプラットフォームおよび分析チームに適しております。
- StartJobRun、Spark Connect Interactive Endpoints、Amazon SageMaker Unified Studioで追加設定なしにワークロードを投入可能。Flink、Livy、Spark Operatorsもサポート。
- 500エグゼキューター規模のSparkジョブをアドレス制限を気にせず同時実行可能。
- IPv4節約のためのセカンダリCIDRやプレフィックス委任などの回避策が不要に。
- Amazon EMR on EKSおよびIPv6 Am

---

## まとめ

- Amazon EMR on EKS now supports IPv6 Amazon EKS clusters について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-emr-eks-ipv6-support)

### 関連情報

- [Amazon EKS launches IPv6 support | Containers](https://aws.amazon.com/blogs/containers/amazon-eks-launches-ipv6-support)
- [Running IPv6 EKS Clusters - Amazon EKS](https://docs.aws.amazon.com/eks/latest/best-practices/ipv6.html)
- [Amazon Elastic Kubernetes Service Adds IPv6 Networking](https://aws.amazon.com/blogs/aws/amazon-elastic-kubernetes-service-adds-ipv6-networking)
- [Learn about IPv6 addresses to clusters, Pods, and services - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html)
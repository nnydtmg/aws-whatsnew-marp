---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS Auto Modeが高度なコンピューティング設定をサポート

Amazon EKS Auto Mode now supports advanced compute configuration

**What's New** | 2026-10-01T08:00:00

---

## 概要

- Amazon EKS Auto Modeは、NodeClass Kubernetesリソースでkubelet設定やhugepagesなどを直接調整できる高度なコンピューティング設定を新たにサポートいたします。
- 本機能は、特定のノードチューニングを必要とするワークロードを運用されるお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EKS Auto Mode reduces GPU management fees by up to 60% - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-auto-mode-gpu-price)

- **Automate cluster infrastructure with EKS Auto Mode - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/automode.html)

- **New Amazon EKS Auto Mode features for enhanced security, network control, ...

---

## 変更内容・新機能

Amazon EKS Auto Modeは、NodeClass Kubernetesリソースにおいてkubelet設定、Linuxカーネルsysctl、およびhugepagesを直接調整できる高度なコンピューティング設定を新たにサポートいたします。新しいadvancedComputeフィールドにより、ルートレスコンテナビルド用のユーザー名前空間の設定、エビクション閾値とコンテナログローテーションの調整、ネットワークおよびARPキャッシュ制限の引き上げ、2Miまたは1Gi hugepagesの事前割り当てが可能です。これらの設定はKubernetes APIを使用して宣言的に適用され、EKS Auto Modeが検証し、ノード起動時に適用し、スケーリングおよびアップグレードイベントを通じて保持いたします。本アップデートは、特定のノードチューニングを必要とするワークロードを実行されるお客様に適しております。CI/CDパイプライン、大規模クラスター、HPC、データベース、低遅延ワークロードを運用されるお客様にとって有益です。EC2起動テンプレート、カスタムAMI、特権DaemonSetの維持

---

## まとめ

- Amazon EKS Auto Mode now supports advanced compute configuration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)

### 関連情報

- [Amazon EKS Auto Mode reduces GPU management fees by up to 60% - AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-auto-mode-gpu-price)
- [Automate cluster infrastructure with EKS Auto Mode - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/automode.html)
- [New Amazon EKS Auto Mode features for enhanced security, network control, and performance](https://aws.amazon.com/blogs/containers/new-amazon-eks-auto-mode-features-for-enhanced-security-network-control-and-performance)
- [Configure EKS Auto Mode settings - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/settings-auto.html)
- [Amazon EKS Auto Mode product page](https://aws.amazon.com/eks/auto-mode/)
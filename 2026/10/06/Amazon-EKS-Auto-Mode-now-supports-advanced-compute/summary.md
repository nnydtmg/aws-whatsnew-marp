# Amazon EKS Auto Modeが高度なコンピューティング設定をサポート

Amazon EKS Auto Mode now supports advanced compute configuration

**カテゴリ:** What's New
**公開日:** 2026-10-01T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)

このページでは、AWS What's Newで発表された「Amazon EKS Auto Mode now supports advanced compute configuration」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Auto Modeは、NodeClass Kubernetesリソースでkubelet設定やhugepagesなどを直接調整できる高度なコンピューティング設定を新たにサポートいたします。本機能は、特定のノードチューニングを必要とするワークロードを運用されるお客様に適しております。

## このアップデートで何が変わったか

Amazon EKS Auto Modeは、NodeClass Kubernetesリソースにおいてkubelet設定、Linuxカーネルsysctl、およびhugepagesを直接調整できる高度なコンピューティング設定を新たにサポートいたします。新しいadvancedComputeフィールドにより、ルートレスコンテナビルド用のユーザー名前空間の設定、エビクション閾値とコンテナログローテーションの調整、ネットワークおよびARPキャッシュ制限の引き上げ、2Miまたは1Gi hugepagesの事前割り当てが可能です。これらの設定はKubernetes APIを使用して宣言的に適用され、EKS Auto Modeが検証し、ノード起動時に適用し、スケーリングおよびアップグレードイベントを通じて保持いたします。本アップデートは、特定のノードチューニングを必要とするワークロードを実行されるお客様に適しております。CI/CDパイプライン、大規模クラスター、HPC、データベース、低遅延ワークロードを運用されるお客様にとって有益です。EC2起動テンプレート、カスタムAMI、特権DaemonSetの維持

## 対象ユーザー

Amazon EKS Auto Modeは、NodeClass Kubernetesリソースにおいてkubelet設定、Linuxカーネルsysctl、およびhugepagesを直接調整できる高度なコンピューティング設定を新たにサポートいたします。新しいadvancedComputeフィールドにより、ルートレスコンテナビルド用のユーザー名前空間の設定、エビクション閾値とコンテナログローテーションの調整、ネットワークおよびARPキャッシュ制限の引き上げ、2Miまたは1Gi hugepagesの事前割り当てが可能です。これらの設定はKubernetes APIを使用して宣言的に適用され、EKS A

## 詳細

Amazon EKS Auto Modeは、NodeClass Kubernetesリソースにおいてkubelet設定、Linuxカーネルsysctl、およびhugepagesを直接調整できる高度なコンピューティング設定を新たにサポートいたします。新しいadvancedComputeフィールドにより、ルートレスコンテナビルド用のユーザー名前空間の設定、エビクション閾値とコンテナログローテーションの調整、ネットワークおよびARPキャッシュ制限の引き上げ、2Miまたは1Gi hugepagesの事前割り当てが可能です。これらの設定はKubernetes APIを使用して宣言的に適用され、EKS Auto Modeが検証し、ノード起動時に適用し、スケーリングおよびアップグレードイベントを通じて保持いたします。本アップデートは、特定のノードチューニングを必要とするワークロードを実行されるお客様に適しております。CI/CDパイプライン、大規模クラスター、HPC、データベース、低遅延ワークロードを運用されるお客様にとって有益です。EC2起動テンプレート、カスタムAMI、特権DaemonSetの維持は不要です。Amazon EKS Auto Modeの高度なコンピューティング設定は、EKS Auto Modeが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)
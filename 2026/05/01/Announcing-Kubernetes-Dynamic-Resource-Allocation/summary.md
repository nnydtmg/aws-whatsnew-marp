# Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter

**カテゴリ:** What's New
**公開日:** 2026-05-01
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/](https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/)

---

## 要約

Amazon EKS が EFA に対応した Dynamic Resource Allocation をサポートすることで、AI、機械学習、HPC ワークロードのための高性能なノード間通信が簡素化されました。このアップデートは、Kubernetes 1.34 以降で高性能コンピューティングを必要とする組織に特に有益です。

## 詳細

Amazon EKS が Elastic Fabric Adapter (EFA) に対応した Dynamic Resource Allocation (DRA) をサポートするようになりました。高性能なノード間通信と RDMA 機能が簡素化され、AI、機械学習、HPC ワークロードに対応しています。EFA DRA ドライバーは、EFA インターフェースとアクセラレーターデバイスを PCIe ルートまたはデバイスグループで共有できます。トポロジー認識の割り当てにより、ノード上の NVIDIA GPU、AWS Trainium、AWS Inferentia デバイスに最も近いネットワークインターフェースを通じてトラフィックが流れます。同一ノード上のワークロード間で EFA インターフェースを共有でき、EFA インターフェースの利用率を最大化できます。Kubernetes バージョン 1.34 以降を実行する Amazon EKS クラスターの新規デプロイメントに推奨されています。EKS マネージドノードグループまたはセルフマネージドノードでサポートされています。すべての AWS リージョンで Amazon EKS が利用可能な場所で利用できます。EFA デバイスプラグインは引き続きサポートされており、Karpenter と Amazon EKS Auto Mode での使用が推奨されています。

## 主な特徴

### 1. EFA DRA ドライバー
- EFA インターフェースとアクセラレーターデバイスの PCIe ルート/デバイスグループ共有に対応
- Kubernetes 上でネイティブに EFA リソースを管理

### 2. トポロジー認識の割り当て
- ノード上の各デバイス（NVIDIA GPU、AWS Trainium、AWS Inferentia）に最も近いネットワークインターフェースを自動選択
- ネットワークトラフィックの最適化により通信性能を最大化

### 3. EFA インターフェースの共有
- 同一ノード上のワークロード間で EFA インターフェースを共有可能
- EFA インターフェースの利用率を最大化

## 対応環境

- **Kubernetes バージョン:** 1.34 以降
- **ノードグループ:** EKS マネージドノードグループ / セルフマネージドノード
- **対応リージョン:** Amazon EKS が利用可能なすべての AWS リージョン

## 参考リソース

- [AWS What's New - Kubernetes Dynamic Resource Allocation for EFA](https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/)
- [AWS Neuron DRA サポート](https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/)
- [Amazon EKS 管理ガイド](https://docs.aws.amazon.com/eks/latest/userguide/device-management.html)
- [EKS パフォーマンス最適化ブログ](https://aws.amazon.com/blogs/containers/unlocking-next-generation-ai-performance-with-dynamic-resource-allocation-on-amazon-eks-and-amazon-ec2-p6e-gb200/)
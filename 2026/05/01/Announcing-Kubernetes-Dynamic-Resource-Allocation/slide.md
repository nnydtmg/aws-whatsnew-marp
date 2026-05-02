---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS
Kubernetes向け Dynamic Resource Allocation for Elastic Fabric Adapter

**発表日: 2026年5月1日**

---

## 概要

### Amazon EKS が EFA 対応 DRA をサポート

- **Dynamic Resource Allocation (DRA)** により、Elastic Fabric Adapter (EFA) の管理が簡素化
- **高性能なノード間通信** と **RDMA** 機能をシームレスに活用
- **AI、機械学習、HPC** ワークロードに最適
- Kubernetes 1.34 以降で推奨

---

## 前提・背景

### 従来の課題

- Kubernetes クラスターで **高性能なノード間通信** の設定が複雑
- EFA デバイスプラグインによる管理の限界
- ノード上の複数デバイス間での **最適な リソース割り当て** が困難

### 市場の動向

- AI・機械学習・HPC ワークロードの **急速な増加**
- Kubernetes でのアクセラレータ（GPU、Trainium、Inferentia）統合の需要増加
- RDMA などのハイパフォーマンス通信の **ネイティブサポート** への期待

---

## 主な機能・改善

### 1. EFA DRA ドライバー

- EFA インターフェースとアクセラレーターデバイスの **PCIe ルート/デバイスグループ共有** に対応
- Kubernetes 上でネイティブに EFA リソースを管理

### 2. トポロジー認識の割り当て

- ノード上の各デバイス（NVIDIA GPU、AWS Trainium、AWS Inferentia）に **最も近いネットワークインターフェース** を自動選択
- ネットワークトラフィックの **最適化** により通信性能を最大化

### 3. EFA インターフェースの共有

- 同一ノード上のワークロード間で EFA インターフェースを共有可能
- **EFA インターフェースの利用率を最大化**

---

## 対応環境・前提条件

### サポート対象

- **Kubernetes バージョン:** 1.34 以降
- **ノードグループ:** EKS マネージドノードグループ / セルフマネージドノード
- **対応リージョン:** Amazon EKS が利用可能なすべての AWS リージョン

### 後方互換性

- EFA デバイスプラグインは引き続きサポート
- **Karpenter** および **Amazon EKS Auto Mode** での使用推奨

---

## 導入パターン・ユースケース

### 対象ユースケース

- **AI・機械学習の分散学習:** 複数ノード間での高速データ通信
- **HPC ワークロード:** 科学計算、シミュレーション
- **大規模モデル推論:** マルチノード推論パイプライン

### 推奨構成

- **新規クラスター：** DRA ドライバーの採用
- **既存クラスター：** 段階的な移行（EFA デバイスプラグインから DRA へ）

---

## 効果・メリット

### インフラ効率の向上

- **リソース利用率の向上:** EFA インターフェースの共有利用
- **配置の最適化:** トポロジー認識による通信コスト削減
- **デバイス管理の簡素化:** ネイティブ Kubernetes DRA フレームワーク

### パフォーマンスの向上

- **通信レイテンシ削減:** 最適ネットワークパスの自動選択
- **スループット向上:** RDMA による高速データ転送

---

## まとめ

### ポイント

- **Amazon EKS + EFA + DRA** の組み合わせにより、高性能コンピューティングの **民主化** を実現
- Kubernetes の **ネイティブリソース管理** により、複雑な設定を排除
- AI・ML・HPC ワークロードの **次世代インフラ基盤** を提供

### 次のステップ

1. 現在の EKS クラスターで **Kubernetes 1.34 へのアップグレード** を計画
2. EFA DRA ドライバーの **評価・テスト** を実施
3. 本番環境への **段階的な導入** を開始

---

## 参考リソース

- **AWS What's New:** https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/
- **AWS Neuron DRA サポート:** https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/
- **Amazon EKS 管理ガイド:** https://docs.aws.amazon.com/eks/latest/userguide/device-management.html
- **EKS パフォーマンス最適化ブログ:** https://aws.amazon.com/blogs/containers/unlocking-next-generation-ai-performance-with-dynamic-resource-allocation-on-amazon-eks-and-amazon-ec2-p6e-gb200/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
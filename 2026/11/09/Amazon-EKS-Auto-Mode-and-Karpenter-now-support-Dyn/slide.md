---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS Auto ModeとKarpenterがDRAをサポート

Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation

**What's New** | 2026-11-09T06:00:00

---

## 概要

- Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFA向けの動的リソース割り当て（DRA）をサポートするようになりました。
- 本アップデートは、分散トレーニングや推論で最適なデバイス割り当てを求められるお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter | AWS Builder Center**
  [詳細](https://builder.aws.com/content/3DiiFA8QxbNSF3BAoe56kOGIbFt/announcing-kubernetes-dynamic-resource-allocation-for-elastic-fabric-adapter)

- **Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-...

---

## 変更内容・新機能

- 新機能は、Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFAネットワークデバイス向けの動的リソース割り当て（DRA）をサポートすることです。
- DRAにより、デバイス属性の定義、GPUのPod間共有、トポロジーに整合したGPUおよびEFAデバイスの割り当てが可能になります。
- ResourceClaimまたはResourceClaimTemplateで属性を記述し、Karpenterが一致する最も低コストのインスタンスを起動します。
- Amazon EKS Auto ModeではNVIDIA DRAドライバーとEFA DRAドライバーが組み込まれ、同一ノードでの混在を防止します。
- 本アップデートは、分散トレーニングや推論を実行されるお客様に適しております。
- GPUの共有やPCIeに整合したデバイス割り当てを必要とされるお客様にも適しております。
- Amazon Elastic Kubernetes Service (Amazon EKS) now supports Dynamic Resource Allocation (

---

## まとめ

- Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)

### 関連情報

- [Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter | AWS Builder Center](https://builder.aws.com/content/3DiiFA8QxbNSF3BAoe56kOGIbFt/announcing-kubernetes-dynamic-resource-allocation-for-elastic-fabric-adapter)
- [Announcing Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter)
- [Use the NVIDIA DRA driver or device plugin on Amazon EKS - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/device-management-nvidia-dra-device-plugin.html)
- [Utilizing GPUs and EFAs with Dynamic Resource Allocation | Karpenter](https://karpenter.sh/docs/tasks/dra)
- [Manage hardware devices on Amazon EKS - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/device-management.html)
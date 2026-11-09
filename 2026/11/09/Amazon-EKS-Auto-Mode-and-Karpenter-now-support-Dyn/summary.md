# Amazon EKS Auto ModeとKarpenterがDRAをサポート

Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation

**カテゴリ:** What's New
**公開日:** 2026-11-09T06:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)

このページでは、AWS What's Newで発表された「Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFA向けの動的リソース割り当て（DRA）をサポートするようになりました。本アップデートは、分散トレーニングや推論で最適なデバイス割り当てを求められるお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFAネットワークデバイス向けの動的リソース割り当て（DRA）をサポートすることです。
- DRAにより、デバイス属性の定義、GPUのPod間共有、トポロジーに整合したGPUおよびEFAデバイスの割り当てが可能になります。
- ResourceClaimまたはResourceClaimTemplateで属性を記述し、Karpenterが一致する最も低コストのインスタンスを起動します。
- Amazon EKS Auto ModeではNVIDIA DRAドライバーとEFA DRAドライバーが組み込まれ、同一ノードでの混在を防止します。
- 本アップデートは、分散トレーニングや推論を実行されるお客様に適しております。
- GPUの共有やPCIeに整合したデバイス割り当てを必要とされるお客様にも適しております。
- DRA support is available in all AWS Regions except AWS GovCloud (US) and China Regions. A

## 対象ユーザー

- 新機能は、Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFAネットワークデバイス向けの動的リソース割り当て（DRA）をサポートすることです。
- DRAにより、デバイス属性の定義、GPUのPod間共有、トポロジーに整合したGPUおよびEFAデバイスの割り当てが可能になります。
- ResourceClaimまたはResourceClaimTemplateで属性を記述し、Karpenterが一致する最も低コストのインスタンスを起動します。
- Amazon EKS Auto ModeではNVIDIA DRAドライバーとEFA DRAドライバーが組み

## 詳細

- 新機能は、Amazon EKS Auto ModeおよびKarpenterがNVIDIA GPUとEFAネットワークデバイス向けの動的リソース割り当て（DRA）をサポートすることです。
- DRAにより、デバイス属性の定義、GPUのPod間共有、トポロジーに整合したGPUおよびEFAデバイスの割り当てが可能になります。
- ResourceClaimまたはResourceClaimTemplateで属性を記述し、Karpenterが一致する最も低コストのインスタンスを起動します。
- Amazon EKS Auto ModeではNVIDIA DRAドライバーとEFA DRAドライバーが組み込まれ、同一ノードでの混在を防止します。
- 本アップデートは、分散トレーニングや推論を実行されるお客様に適しております。
- GPUの共有やPCIeに整合したデバイス割り当てを必要とされるお客様にも適しております。
- DRA support is available in all AWS Regions except AWS GovCloud (US) and China Regions. Available for all Kubernetes versions in Karpenter, and for Kubernetes versions 1.36 and newer in Amazon EKS Auto Mode.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)
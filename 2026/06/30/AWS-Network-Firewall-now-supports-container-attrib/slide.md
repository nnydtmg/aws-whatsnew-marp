---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewall がコンテナ属性ベースの検査に対応

AWS Network Firewall now supports container attribute-based inspection for Amazon EKS and Amazon ECS

**What's New** | 2026-06-30

---

## 概要

- AWS Network Firewallのコンテナ属性ベースのルール機能により、Amazon EKSおよびAmazon ECS上で実行されるコンテナ化されたワークロードのセキュリティ管理が大幅に簡素化されました。
- この機能は、IPベースのルール管理の複雑性を排除し、動的に変化するコンテナ環境に対して自動的に適応するエンタープライズグレードのネットワークセキュリティ制御を提供いたします。

---

## 前提・背景

### 関連する最近の動向

- **Security in Amazon EKS - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/security.html)

- **Amazon EKS Guide 2026: Build and Scale Kubernetes on AWS | Sedai**
  [詳細](https://sedai.io/blog/guide-amazon-eks-managed-kubernetes-aws)

- **Containers**
  [詳細](https://aws.amazon.com/blogs/containers)

---

## 変更内容・新機能

- AWS Network Firewallがコンテナ属性ベースのルール機能をサポートするようになりました。
- Amazon EKSおよびAmazon ECS上で実行されるコンテナ化されたワークロード、特に生成AI アプリケーションのセキュリティが簡素化されます。
- Namespace、Cluster Name、Labels（Amazon EKS用）、Cluster NameおよびContainer Instance Attributes（Amazon ECS用）などのネイティブコンテナ構成要素を使用してファイアウォールポリシーを作成できます。
- ポッドのスケーリングや再起動時にルールが破損する複雑なIPベースのルール管理が不要になります。
- TLS復号化による暗号化トラフィックの深いパケット検査、FQDN ベースのフィルタリング、URL カテゴリフィルタリング、GeoIPフィルタリングが自動的に適応します。
- コンテナのスケーリングに応じてセキュリティ制御が自動的に調整されます。
- AWS Network Firewall、Amazon EKS、Amazon ECSの統合

---

## まとめ

- AWS Network Firewall now supports container attribute-based inspection for Amazon EKS and Amazon ECS について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-container-attributes-referencing)

### 関連情報

- [Security in Amazon EKS - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/security.html)
- [Amazon EKS Guide 2026: Build and Scale Kubernetes on AWS | Sedai](https://sedai.io/blog/guide-amazon-eks-managed-kubernetes-aws)
- [Containers](https://aws.amazon.com/blogs/containers)
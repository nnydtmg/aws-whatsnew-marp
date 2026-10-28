---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS Auto Mode が Kubernetes Gateway API のサポートを開始

Amazon EKS Auto Mode now supports Kubernetes Gateway API

**What's New** | 2026-10-28T17:33:00

---

## 概要

- Amazon EKS Auto ModeがKubernetes Gateway APIに対応し、別途コントローラーなしで標準的な負荷分散が可能になりました。
- 本更新はEKS Auto Modeをご利用のお客様およびマルチチーム環境のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Configure the Kubernetes Gateway API in EKS Auto Mode - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/auto-configure-gateway-api.html)

- **Review EKS Auto Mode release notes - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/auto-change.html)

- **Automate cluster infrastructure with EKS Auto Mode - Amazon EKS**
  [詳細](https://docs.aws...

---

## 変更内容・新機能

- 新機能はAmazon EKS Auto ModeにおけるKubernetes Gateway APIのサポートでございます。
- お客様はGatewayおよびHTTPRouteリソースを用いてアプリケーション負荷分散を設定できます。
- EKS Auto Modeが基盤となるAWSインフラストラクチャを自動的にプロビジョニングおよび管理いたします。
- 別途コントローラーをインストールまたは設定する必要はございません。
- HTTPおよびgRPCルーティング、クロス名前空間トラフィックルーティング、加重トラフィック分割、ヘッダーベースルーティング、AWS Certificate Managerによる自動TLS証明書検出に対応しております。
- 既存のIngressリソースはGateway APIリソースと並行して動作し続けます。
- 本更新はEKS Auto Modeをご利用のお客様に適しております。
- 標準的かつ移植可能なトラフィック管理を求めるお客様やマルチチーム環境のお客様に有益でございます。

---

## まとめ

- Amazon EKS Auto Mode now supports Kubernetes Gateway API について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)

### 関連情報

- [Configure the Kubernetes Gateway API in EKS Auto Mode - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/auto-configure-gateway-api.html)
- [Review EKS Auto Mode release notes - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/auto-change.html)
- [Automate cluster infrastructure with EKS Auto Mode - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/automode.html)
- [Solo.io Partners with AWS to Enhance Amazon EKS Auto Mode | Solo.io](https://www.solo.io/blog/solo-io-partners-with-aws-to-accelerate-amazon-eks-auto-mode-release)
- [Better Together: Amazon EKS Auto Mode and Istio Ambient Mesh | Containers](https://aws.amazon.com/blogs/containers/better-together-amazon-eks-auto-mode-and-istio-ambient-mesh)
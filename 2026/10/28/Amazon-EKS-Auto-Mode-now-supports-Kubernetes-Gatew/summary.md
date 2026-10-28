# Amazon EKS Auto Mode が Kubernetes Gateway API のサポートを開始

Amazon EKS Auto Mode now supports Kubernetes Gateway API

**カテゴリ:** What's New
**公開日:** 2026-10-28T17:33:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)

このページでは、AWS What's Newで発表された「Amazon EKS Auto Mode now supports Kubernetes Gateway API」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Auto ModeがKubernetes Gateway APIに対応し、別途コントローラーなしで標準的な負荷分散が可能になりました。本更新はEKS Auto Modeをご利用のお客様およびマルチチーム環境のお客様に適しております。

## このアップデートで何が変わったか

- 新機能はAmazon EKS Auto ModeにおけるKubernetes Gateway APIのサポートでございます。
- お客様はGatewayおよびHTTPRouteリソースを用いてアプリケーション負荷分散を設定できます。
- EKS Auto Modeが基盤となるAWSインフラストラクチャを自動的にプロビジョニングおよび管理いたします。
- 別途コントローラーをインストールまたは設定する必要はございません。
- HTTPおよびgRPCルーティング、クロス名前空間トラフィックルーティング、加重トラフィック分割、ヘッダーベースルーティング、AWS Certificate Managerによる自動TLS証明書検出に対応しております。
- 既存のIngressリソースはGateway APIリソースと並行して動作し続けます。
- 本更新はEKS Auto Modeをご利用のお客様に適しております。
- 標準的かつ移植可能なトラフィック管理を求めるお客様やマルチチーム環境のお客様に有益でございます。

## 詳細

- 新機能はAmazon EKS Auto ModeにおけるKubernetes Gateway APIのサポートでございます。
- お客様はGatewayおよびHTTPRouteリソースを用いてアプリケーション負荷分散を設定できます。
- EKS Auto Modeが基盤となるAWSインフラストラクチャを自動的にプロビジョニングおよび管理いたします。
- 別途コントローラーをインストールまたは設定する必要はございません。
- HTTPおよびgRPCルーティング、クロス名前空間トラフィックルーティング、加重トラフィック分割、ヘッダーベースルーティング、AWS Certificate Managerによる自動TLS証明書検出に対応しております。
- 既存のIngressリソースはGateway APIリソースと並行して動作し続けます。
- 本更新はEKS Auto Modeをご利用のお客様に適しております。
- 標準的かつ移植可能なトラフィック管理を求めるお客様やマルチチーム環境のお客様に有益でございます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)
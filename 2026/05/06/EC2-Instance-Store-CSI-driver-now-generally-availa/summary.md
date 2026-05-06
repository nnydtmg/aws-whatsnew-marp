# EC2 Instance Store CSI driver now generally available in EKS add-ons

**カテゴリ:** What's New
**公開日:** 2026-05-05T16:22:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/ec2-csi-eks/](https://aws.amazon.com/about-aws/whats-new/2026/05/ec2-csi-eks/)

---

## 要約

EC2 Instance Store CSI ドライバーが Amazon EKS アドオンとして一般提供され、EKS コンソールおよび AWS CLI から簡単にインストール・管理できるようになりました。これにより、Kubernetes クラスターへのローカルインスタンスストレージの接続が容易になります。

## 詳細

- EC2 Instance Store CSI ドライバーが Amazon EKS のアドオンとして一般提供されるようになりました。
- Amazon EKS コンソールと AWS Command Line Interface (CLI) を使用して、EC2 CSI ドライバーのインストールと管理が可能になりました。
- EC2 インスタンスストアボリュームを Kubernetes クラスターに簡単にアタッチできるようになりました。
- EC2 Instance Store CSI ドライバーは、Kubernetes が EC2 インスタンスストアボリュームを使用するためのプラグインです。
- インスタンスストアボリュームは、ホストコンピュータに物理的にアタッチされたエフェメラルブロックレベルストレージを提供します。
- このドライバーは NVMe ストレージボリュームのライフサイクルを管理し、Kubernetes の永続ボリュームとして利用可能にします。
- この機能はすべてのコマーシャルリージョンで利用可能です。
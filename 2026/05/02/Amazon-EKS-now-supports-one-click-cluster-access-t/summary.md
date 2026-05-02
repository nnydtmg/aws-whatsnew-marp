# Amazon EKS now supports one-click cluster access through CloudShell

**カテゴリ:** What's New
**公開日:** 2026-04-30
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-one-click-cluster-access/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-one-click-cluster-access/)

---

## 要約

Amazon EKS がワンクリックでクラスターアクセスできる機能を提供開始いたしました。これにより、ローカル環境での複雑なツール設定が不要となり、開発者とオペレーターは AWS Management Console から即座に kubectl コマンドを実行できるようになります。

## 詳細

### 主な変更

- Amazon EKS は AWS Management Console から AWS CloudShell を通じてワンクリックでクラスターアクセスできるようになりました。

- kubectl、AWS CLI、kubeconfig ファイルをローカルにインストール・設定する必要がなくなりました。

- EKS クラスターに接続すると、kubectl が事前設定された CloudShell セッションが即座に起動します。

### 技術的な特徴

- kubectl コマンドを使用してワークロードの検査、問題のトラブルシューティング、リソース管理をローカルターミナルに切り替えることなく実行できます。

- パブリック API サーバーエンドポイントとプライベート API サーバーエンドポイントの両方のクラスターに対応しています。

- CloudShell セッションには AWS CLI と標準 CloudShell ユーティリティが含まれており、クラスター操作に必要なツールにすぐにアクセスできます。

### 利用可能性と料金

- この機能は Amazon EKS が利用可能なすべての AWS リージョンで追加料金なしで利用できます。

### ユースケース

- このアップデートは、開発者とオペレーターがツール設定や複雑な環境構成なしに即座にクラスターアクセスしたい場合に有効です。

- ローカル環境構築の手間を削減したいユーザーに適しています。

- クラスター管理を効率化したい運用チームに適しています。

---

## 参考情報

### AWS ドキュメント

- [Amazon EKS ユーザーガイド](https://docs.aws.amazon.com/eks/latest/userguide/)
- [kubectl のインストールと設定](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
- [kubeconfig ファイルの作成](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
- [AWS CloudShell ドキュメント](https://docs.aws.amazon.com/cloudshell/)

---

## タグ

`AWS` `Amazon-EKS` `CloudShell` `kubectl` `Kubernetes` `開発効率` `運用管理`
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS now supports one-click cluster access through CloudShell

ワンクリックでクラスターアクセス

**発表日: 2026年4月30日**

---

## 概要

### 3つの主要な改善

- **ワンクリックアクセス**: AWS Management Console から CloudShell を通じて即座にクラスターに接続
- **ツール不要**: kubectl、AWS CLI、kubeconfig ファイルのローカルインストール・設定が不要に
- **即座の実行環境**: kubectl が事前設定された CloudShell セッションが自動的に起動

---

## 前提・背景

### これまでの課題

- ローカル環境で kubectl、AWS CLI などのツールをインストール・設定する手間
- kubeconfig ファイルの作成・管理の複雑さ
- 環境構築によるセットアップ時間の増加
- 異なる環境での設定ばらつき

### Kubernetes 運用の進化

- CloudShell による ブラウザベースの実行環境の活用
- IAM 統合によるアクセス制御の簡素化
- ワークロード検査・トラブルシューティングの高速化への需要

---

## 主な機能と改善

### 1. ワンクリックアクセス

- AWS Management Console の EKS コンソールから CloudShell へのシームレス連携
- kubectl が事前設定された CloudShell セッションが即座に起動
- 追加のセットアップ手順なし

### 2. 対応エンドポイント

- **パブリック API サーバーエンドポイント**: 標準的なクラスター構成に対応
- **プライベート API サーバーエンドポイント**: セキュアなネットワーク構成に対応

### 3. 統合ツールセット

- AWS CLI 標準インストール
- 標準 CloudShell ユーティリティ
- クラスター操作に必要なツールにすぐにアクセス可能

---

## ユースケース

### 開発者向け

- ローカル環境構築なしでの迅速な開発環境へのアクセス
- ワークロードの検査・デバッグ
- ポッドのログ確認

### 運用チーム向け

- クラスター管理の効率化
- トラブルシューティングの迅速化
- リソース管理の一元化

### オンボーディング

- 新しいチームメンバーの即座への生産性向上
- 環境依存性の排除

---

## 効果・メリット

### 生産性向上

- **セットアップ時間削減**: ローカルツール設定が不要
- **即座の実行**: クリック後すぐにクラスターを操作可能
- **環境統一**: CloudShell による統一された実行環境

### 運用効率化

- **複雑な環境構成不要**: ブラウザのみで完結
- **IAM 統合**: AWS アカウント認証との一体化
- **追加料金なし**: EKS が利用可能な全リージョンで無料

### セキュリティ

- **IAM ベースのアクセス制御**: 既存の AWS 権限管理を活用
- **ネットワーク境界の簡素化**: CloudShell セッションで一元管理

---

## まとめ

### Amazon EKS CloudShell 統合の位置付け

- 開発・運用の効率化と迅速なクラスターアクセスを実現
- セットアップ複雑性の大幅な軽減
- CloudShell による IAM ベースのセキュアなアクセス
- すべての EKS ユーザーに即座に利用可能

### 次のステップ

1. AWS Management Console で EKS クラスターを開く
2. CloudShell アイコンをクリック
3. 事前設定された kubectl でクラスター操作を開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-one-click-cluster-access/
- **Amazon EKS ユーザーガイド**: https://docs.aws.amazon.com/eks/latest/userguide/
- **CloudShell ドキュメント**: https://docs.aws.amazon.com/cloudshell/
- **kubectl インストール**: https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
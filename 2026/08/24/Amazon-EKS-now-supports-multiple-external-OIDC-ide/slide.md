---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKSが複数の外部OIDCアイデンティティプロバイダーをサポート

Amazon EKS now supports multiple external OIDC identity providers per cluster

**発表日: 2026年8月24日**

---

## 概要

- Amazon EKS は 1 つのクラスターあたり最大 10 個の外部 OIDC アイデンティティプロバイダーをサポートするようになり、複数のユーザー集団に対して異なるプロバイダーを独立して設定・管理できるようになりました。
- この機能はすべての AWS リージョンで追加料金なしで利用可能です。

---

## 前提・背景

### これまでの課題

- 単一のOIDCプロバイダーのみをサポート
- 複数のユーザー集団を管理する際に、別のプロバイダーを利用する場合の手間が増加
- 認証の統一化が難しい場合がある

### 市場の動向

- エンタープライズ環境でのハイブリッドIDM（Identity Management）の需要増加
- 複数のアイデンティティプロバイダーの統合が一般的に
- クラウドネイティブなアプリケーションの認証管理の複雑化

---

## 主な機能と改善

### 複数プロバイダーのサポート

- **最大10個の外部OIDCプロバイダー**を1つのクラスターで利用可能
- 従業員、契約社員、CI/CDシステムなど異なるユーザー集団を独立して管理
- 各プロバイダーの設定を独立して管理可能

### 柔軟な認証方法

- 複数のアイデンティティプロバイダーを関連付け
- ユーザーとワークロードの認証方法がより柔軟に
- IAM認証との並行利用が可能

---

## 利用方法

### セットアップ

- AWS Management Console から設定可能
- AssociateIdentityProviderConfig API を使用
- 従来と同じ方法で各プロバイダーを追加

### 対応環境

- Amazon EKS が利用可能なすべての AWS リージョン
- Kubernetes 1.16 以降
- 既存の IAM 認証は継続して機能

---

## 効果・メリット

### 運用効率化

- ユーザーを単一のプロバイダーに統合する必要がなくなる
- 中間のアイデンティティブローカーを実行する必要がない
- 各ユーザー集団が独自のプロバイダーで認証

### セキュリティの向上

- 認証の分離によるセキュリティ強化
- 各プロバイダーの独立した管理ポリシー
- IAM認証との組み合わせによる多層的な認証

### コスト削減

- 追加料金なしで利用可能
- 複雑なIDM基盤の構築が不要に
- 既存の投資を活用可能

---

## ユースケース

### 大規模エンタープライズ

- 複数の部門による異なるアイデンティティプロバイダーの利用
- M&A時の異なるID体系の統合

### ハイブリッド環境

- オンプレミスと AWS のアイデンティティプロバイダーの共存
- 複数のクラウドプロバイダーのアカウント管理

### CI/CD パイプライン

- CI/CDツール（GitHub Actions、GitLab、Jenkins等）の複数統合
- 人間のユーザーとマシンのサービスアカウントの分離

---

## まとめ

### このアップデートのポイント

- Amazon EKS で最大10個の外部 OIDC プロバイダーをサポート
- 複数のユーザー集団の独立した認証管理が可能に
- すべてのリージョンで追加料金なし

### 次のステップ

1. 既存の IAM 認証モデルの確認
2. 複数のアイデンティティプロバイダーの必要性を検討
3. パイロットプロジェクトでの検証
4. 本番環境への段階的な導入

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-multiple-oidc-providers
- **Amazon EKS ドキュメント**: https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html
- **AWS ブログ**: https://aws.amazon.com/blogs/containers/introducing-oidc-identity-provider-authentication-amazon-eks
- **EKS IAM ベストプラクティス**: https://www.perfectscale.io/blog/eks-iam-oidc-vs-pod-identity

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**

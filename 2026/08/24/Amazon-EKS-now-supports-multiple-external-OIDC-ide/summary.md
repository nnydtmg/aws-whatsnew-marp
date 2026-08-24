# Amazon EKSが複数の外部OIDCアイデンティティプロバイダーをサポート

Amazon EKS now supports multiple external OIDC identity providers per cluster

**カテゴリ:** What's New
**公開日:** 2026-08-24
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-multiple-oidc-providers)

---

## 要約

Amazon EKS は 1 つのクラスターあたり最大 10 個の外部 OIDC アイデンティティプロバイダーをサポートするようになりました。複数のユーザー集団に対して異なるプロバイダーを独立して設定・管理できるようになり、この機能はすべての AWS リージョンで追加料金なしで利用可能です。

---

## 主な変更点

### 複数プロバイダーのサポート

- **最大10個の外部OIDCプロバイダー** を1つのクラスターで利用可能
- 従業員、契約社員、CI/CDシステムなど異なるユーザー集団の独立した管理

### 柔軟な認証方法

- 複数のアイデンティティプロバイダーを関連付け
- ユーザーとワークロードの認証方法がより柔軟に
- 既存の IAM 認証は継続して並行利用可能

### 管理の簡素化

- AWS Management Console または AssociateIdentityProviderConfig API で設定
- ユーザーを単一プロバイダーに統合する必要がない
- 中間のアイデンティティブローカーが不要に

---

## 対応状況

- **利用可能:** Amazon EKS が利用可能なすべての AWS リージョン
- **料金:** 追加料金なし
- **前提条件:** Kubernetes 1.16 以降

---

## メリット

### 運用効率化

- 複数のユーザー集団の独立した管理
- 既存の認証インフラの活用
- IAM 認証との並行利用

### セキュリティ向上

- 認証の分離によるセキュリティ強化
- 各プロバイダーの独立した管理ポリシー
- 多層的な認証戦略の実現

### コスト削減

- 複雑なIDM基盤の構築が不要
- 追加料金なしの機能
- 既存投資の有効活用

---

## ユースケース

### エンタープライズ環境

- 複数部門による異なるアイデンティティプロバイダーの利用
- M&A 時の異なる ID 体系の統合

### ハイブリッド環境

- オンプレミスと AWS のアイデンティティプロバイダーの共存
- 複数のクラウドアカウント管理

### CI/CD パイプライン

- GitHub Actions、GitLab、Jenkins 等の複数統合
- 人間のユーザーとマシンのサービスアカウントの分離

---

## 実装の次のステップ

1. **現状確認:** 既存の IAM 認証モデルの確認
2. **要件定義:** 複数プロバイダーの必要性を検討
3. **検証:** パイロットプロジェクトでの検証
4. **本番化:** 段階的な導入

---

## 参考リンク

- [AWS What's New - Amazon EKS複数OIDCプロバイダー](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-multiple-oidc-providers)
- [Amazon EKS ドキュメント - OIDC認証](https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html)
- [AWS ブログ - OIDC認証の紹介](https://aws.amazon.com/blogs/containers/introducing-oidc-identity-provider-authentication-amazon-eks)
- [EKS IAM比較ガイド](https://www.perfectscale.io/blog/eks-iam-oidc-vs-pod-identity)

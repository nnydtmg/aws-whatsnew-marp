# Amazon EKS が OIDC エンドポイント用 AWS PrivateLink に対応

> Amazon EKS now supports AWS PrivateLink for the cluster OIDC endpoint

**カテゴリ:** What's New  
**公開日:** 2026-07-27  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-oidc-endpoint-privatelink)

---

## 📋 要約

Amazon EKS クラスターの OIDC エンドポイントが AWS PrivateLink に対応し、VPC 内からインターネット出力なしにプライベートにアクセスできるようになりました。このアップデートは、セキュリティ要件が厳しい環境での IRSA セットアップとトークン検証を必要とする DevOps エンジニアやプラットフォームチームに特に有益です。

---

## 🆕 このアップデートで何が変わったか

### 主な変更点

1. **OIDC エンドポイントの PrivateLink 対応**
   - `com.amazonaws.<region>.oidc-eks` サービスのインターフェース VPC エンドポイントを作成可能
   - OIDC ディスカバリードキュメントへのプライベートアクセス
   - JWKS（JSON Web Key Set）へのプライベートアクセス

2. **IRSA（IAM roles for service accounts）の改善**
   - VPC 内からインターネット出力なしにアクセス
   - トークン検証がプライベート化
   - EKS 管理 VPC エンドポイント対応

3. **対応ツール**
   - eksctl
   - Terraform
   - カスタムトークンバリデーター

4. **DNS 解決の保証**
   - EKS 管理 VPC エンドポイントがプライベート DNS で有効化時、正しい DNS 解決が保証される

---

## 💡 効果・メリット

### セキュリティ面

- ✅ **ネットワーク分離**: インターネット出力を完全に排除
- ✅ **データ保護**: 機密情報が AWS バックボーン内に留まる
- ✅ **攻撃面縮小**: パブリックインターネットへの露出がない
- ✅ **コンプライアンス対応**: 厳格なセキュリティ要件を満たす

### 運用面

- ✅ **セットアップ簡素化**: IRSA 構築プロセスがシンプル化
- ✅ **DNS 解決の確実性**: プライベート DNS による正確な解決
- ✅ **全リージョン対応**: Amazon EKS が利用可能なすべてのリージョンで利用可能

### コスト面

- ✅ **追加料金なし**: AWS PrivateLink の標準料金のみで提供

---

## 🎯 対象ユーザー

- **DevOps エンジニア**: EKS クラスターの OIDC エンドポイント管理を行う
- **プラットフォームチーム**: Kubernetes インフラの提供・管理
- **セキュリティ重視企業**: インターネット出力を制限する必要のある組織
- **コンプライアンス重視組織**: 金融機関、政府機関など
- **エアギャップ環境**: インターネット接続がない環境での EKS 利用者

---

## 🏗️ ユースケース

### 1. 金融機関

```
要件: 厳格なコンプライアンス + プライベートネットワーク運用
メリット: データ主権要件の充足、監査対応の簡素化
```

### 2. セキュリティ重視企業

```
要件: ゼロトラストアーキテクチャ + インターネット出力の制限
メリット: 攻撃面の最小化、セキュリティ態勢の強化
```

### 3. エアギャップ環境

```
要件: インターネット接続なしの環境
メリット: 完全にプライベートな EKS クラスター運用が可能
```

---

## 🔧 実装方法

### VPC エンドポイント作成フロー

```
1. Interface VPC Endpoint を作成
   サービス名: com.amazonaws.<region>.oidc-eks

2. VPC と サブネットを指定
   プライベート DNS を有効化

3. ツールから VPC エンドポイント経由でアクセス
   - eksctl
   - Terraform  
   - カスタムトークンバリデーター

4. OIDC ディスカバリー + JWKS 取得
   完全にプライベート化
```

---

## 📊 技術仕様

### 対応サービス

| 項目 | 詳細 |
|------|------|
| **サービス** | `com.amazonaws.<region>.oidc-eks` |
| **エンドポイント型** | Interface VPC Endpoint |
| **対象リージョン** | Amazon EKS が利用可能なすべてのリージョン |
| **料金** | AWS PrivateLink の標準料金のみ |
| **追加コスト** | なし |

### アクセス対象

- OIDC ディスカバリードキュメント
- JWKS（JSON Web Key Set）
- IAM roles for service accounts (IRSA) 用トークン検証

---

## 🚀 次のステップ

### 実装準備

1. **現状分析**
   - 既存の IRSA セットアップの確認
   - インターネット出力の制限要件の確認

2. **テスト環境での検証**
   - VPC エンドポイント作成テスト
   - OIDC アクセス確認
   - ツール連携確認（eksctl, Terraform など）

3. **本番環境への段階的展開**
   - パイロットプロジェクトの実施
   - ドキュメント整備
   - チーム教育

---

## 📚 関連リンク

- [AWS What's New - 元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-oidc-endpoint-privatelink/)
- [Enable Private Access to the Amazon EKS Kubernetes API with AWS PrivateLink](https://aws.amazon.com/blogs/containers/enable-private-access-to-the-amazon-eks-kubernetes-api-with-aws-privatelink)
- [Access Amazon EKS using AWS PrivateLink - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html)
- [The Role of OIDC Provider in EKS Clusters](https://aws.plainenglish.io/the-role-of-oidc-provider-in-eks-clusters-b26d61bd5d69)

---

## 📞 サポート

ご質問やご不明な点は、AWS サポートまでお問い合わせください。

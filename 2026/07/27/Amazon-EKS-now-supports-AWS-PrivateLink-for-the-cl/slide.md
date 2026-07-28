---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS が OIDC エンドポイント用 AWS PrivateLink に対応

VPC 内からのプライベートな OIDC アクセスを実現

**発表日: 2026年7月27日**

---

## 概要

### 3つの主要な変更点

- **AWS PrivateLink 対応**: Amazon EKS の OIDC エンドポイントが AWS PrivateLink に対応
- **プライベートアクセス**: VPC 内からインターネット出力なしにアクセス可能
- **IRSA セットアップ簡素化**: IAM roles for service accounts の構築がセキュアに

### 対象ユーザー

- セキュリティ要件が厳しい DevOps エンジニア
- プラットフォームチーム
- コンプライアンス重視の企業・金融機関

---

## 前提・背景

### 市場の課題

- セキュアな環境でのインターネット出力を制限する必要
- VPC 内からのプライベートな OIDC アクセス要件の高まり
- IRSA セットアップ時のセキュリティ要件の厳格化

### 関連する AWS PrivateLink の動向

- **Enable Private Access to the Amazon EKS Kubernetes API with AWS PrivateLink**
  → Kubernetes API へのプライベートアクセス実装
- **Access Amazon EKS using AWS PrivateLink**
  → VPC エンドポイントによる安全な接続

---

## 主な機能

### 1. OIDC エンドポイントの PrivateLink 対応

- `com.amazonaws.<region>.oidc-eks` サービスのインターフェース VPC エンドポイントを作成
- OIDC ディスカバリードキュメントにプライベートアクセス
- JWKS（JSON Web Key Set）にプライベートアクセス

### 2. IRSA セットアップの改善

- IAM roles for service accounts のトークン検証がプライベート化
- インターネット出力のない VPC 環境での完全構築が可能
- EKS 管理 VPC エンドポイント、プライベート DNS 対応

---

## 対応ツール・技術

### VPC 内で動作するツール

- **eksctl**: Kubernetes 管理ツール
- **Terraform**: インフラストラクチャ as Code
- **カスタムトークンバリデーター**: 独自実装ツール

### 実装パターン

```
VPC 内のツール
  ↓
Interface VPC Endpoint (com.amazonaws.<region>.oidc-eks)
  ↓
EKS OIDC エンドポイント
```

---

## 効果・メリット

### セキュリティの向上

- **ネットワーク分離**: インターネット出力を完全に排除
- **データ保護**: 機密情報が AWS バックボーン内に留まる
- **攻撃面の縮小**: パブリックインターネットへの露出がない

### 運用の簡素化

- プライベート DNS で正しい DNS 解決が保証
- 複雑なネットワーク設定が不要
- IRSA セットアップがシンプル化

### コスト効率

- **追加料金なし**: AWS PrivateLink の標準料金のみ
- **全リージョン対応**: Amazon EKS が利用可能なすべてのリージョンで利用可能

---

## ユースケース

### 金融機関

- 厳格なコンプライアンス要件への対応
- プライベートネットワークのみでの運用
- データ主権要件の充足

### セキュリティ重視企業

- ゼロトラストアーキテクチャの実装
- インターネット出力の完全な制限
- 監査対応の効率化

### エアギャップ環境

- インターネット接続がない環境での EKS 利用
- 政府・軍事機関での使用

---

## まとめ

### 主なメッセージ

1. **セキュリティ**: OIDC エンドポイントがプライベート化
2. **アクセス方法**: AWS PrivateLink による VPC 内プライベートアクセス
3. **対象ユーザー**: セキュリティ重視の組織・コンプライアンス重視企業

### 実装の次のステップ

1. 自社環境の IRSA セットアップ要件を確認
2. VPC エンドポイント構築のテスト
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-oidc-endpoint-privatelink/
- **Amazon EKS PrivateLink ガイド**: https://aws.amazon.com/blogs/containers/enable-private-access-to-the-amazon-eks-kubernetes-api-with-aws-privatelink
- **VPC エンドポイント設定**: https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html
- **OIDC Provider**: https://aws.plainenglish.io/the-role-of-oidc-provider-in-eks-clusters-b26d61bd5d69

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
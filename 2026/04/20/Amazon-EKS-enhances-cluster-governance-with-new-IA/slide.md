---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS のクラスター管理が強化
新しい IAM 条件キーでガバナンスを実現

**発表日: 2026年4月20日**

---

## 概要

### Amazon EKS の7つの新しい IAM 条件キー

- **セキュリティガバナンス**: マルチアカウント環境での一元的な制御を実現
- **コンプライアンス強制**: 手動プロセスに依存しない自動ガバナンス
- **AWS Organizations 統合**: サービスコントロールポリシー（SCP）で複数アカウント全体を統制
- **追加料金なし**: すべての AWS リージョンで利用可能

---

## 前提・背景

### 多アカウント環境における課題

- クラスター設定の一貫性を保つ必要性が高まる
- 手動プロセスや事後チェックに依存する非効率性
- セキュリティ・コンプライアンス要件の一元的な適用が困難
- デプロイ後の不適切な構成を防ぐ必要がある

### 市場の動向

- エンタープライズ組織の IAM ポリシー活用が増加
- クラウドセキュリティの事前予防的アプローチが重視
- インフラストラクチャのコード化（Infrastructure as Code）の推進

---

## 新機能：7つの IAM 条件キー

### 1. API エンドポイント制御

| 条件キー | 説明 |
|---------|------|
| `eks:endpointPublicAccess` | パブリック API エンドポイントの有効化を制限 |
| `eks:endpointPrivateAccess` | プライベート API エンドポイントの制御 |

**用途**: クラスターへのアクセスを安全にプライベートネットワークに限定

---

## 新機能：暗号化とバージョン管理

### 2. 暗号化設定

- **`eks:encryptionConfigProviderKeyArns`**
  - カスタマー管理 AWS KMS キーの使用を強制
  - シークレットの暗号化に顧客所有の鍵を要求

### 3. Kubernetes バージョン

- **`eks:kubernetesVersion`**
  - 承認された Kubernetes バージョンのみを許可
  - レガシーバージョンの使用を防止

---

## 新機能：本番環境保護と高可用性

### 4. 削除保護と スケーリング

<div class="columns">
<div>

**`eks:deletionProtection`**
- 本番環境ワークロードの誤削除を防止
- 削除前の承認プロセスを強制

</div>
<div>

**`eks:controlPlaneScalingTier`**
- コントロールプレーンのスケーリング層を指定
- パフォーマンス要件に応じた制御

**`eks:zonalShiftEnabled`**
- 高可用性のためのゾーンシフト機能
- リージョン内での障害対応

</div>
</div>

---

## 対象 API と統合

### 条件キーが適用される API

- **CreateCluster**: クラスター作成時の設定制御
- **UpdateClusterConfig**: クラスター設定の更新時に適用
- **UpdateClusterVersion**: Kubernetes バージョン更新時の検証
- **AssociateEncryptionConfig**: 暗号化設定の関連付け時に適用

### AWS Organizations との統合

- サービスコントロールポリシー（SCP）で自動実行
- 複数アカウント全体でのガバナンス
- ポリシー違反は自動的にブロック

---

## メリット・効果

### 1. セキュリティの向上

- ✅ プライベートエンドポイント配置を自動化
- ✅ 顧客管理 KMS キーの強制で暗号化を確保
- ✅ 承認されたバージョンのみデプロイ可能

### 2. コンプライアンス

- ✅ 手動プロセスを排除した自動ガバナンス
- ✅ 監査ログによる全体像把握
- ✅ ポリシー違反を事前に防止

### 3. 運用効率

- ✅ デプロイ後チェックが不要
- ✅ セキュリティチームの負担軽減
- ✅ 開発チームの生産性向上

---

## ユースケース

### 金融機関

```
要件: 本番クラスターの厳密な制御
対応: 削除保護、プライベートエンドポイント、
     カスタマー管理 KMS キーを SCP で強制
```

### マルチテナント SaaS

```
要件: テナント間のセキュリティ分離
対応: Kubernetes バージョン統一、
     エンドポイント制御で一貫性を確保
```

### 規制業界

```
要件: コンプライアンス監査への対応
対応: ゾーンシフト有効化、削除保護で
     高可用性と保護を両立
```

---

## まとめ

### ポイント

- Amazon EKS に 7 つの新しい IAM 条件キーが追加
- マルチアカウント環境での一元的ガバナンスを実現
- AWS Organizations SCP と統合し自動実行
- セキュリティ、コンプライアンス、運用効率が向上

### 次のステップ

1. 現在のクラスター構成を確認
2. 必要な条件キー制限を特定
3. SCP ポリシーを策定・テスト
4. 段階的にロールアウト

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-iam-condition-keys/
- **Amazon EKS IAM ガイド**: https://docs.aws.amazon.com/eks/latest/userguide/security-iam-service-with-iam.html
- **Service Authorization Reference**: https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html
- **AWS Organizations SCP ドキュメント**: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Secrets Manager コンソール
KMS キーのカスタム入力機能

**発表日: 2026年4月3日**

---

## 概要

### 3つの主要な改善点

- **ARN 直接入力**: KMS キーの Amazon Resource Name (ARN) をコンソールに直接入力可能
- **クロスアカウント対応**: 異なる AWS アカウントのカスタマー管理型 KMS キーを使用できる
- **API とコンソール一貫性**: コンソール体験が既存の API 機能と同等になった

### この機能が提供する価値

複数アカウント間での暗号化キー管理の柔軟性が大幅に向上しました。

---

## 前提・背景

### これまでの課題

- AWS Secrets Manager コンソールではシークレット作成時に、**同一 AWS アカウント内のカスタマー管理型 KMS キー**のみをドロップダウンリストから選択可能でした
- クロスアカウント暗号化ワークフローを実装するには API の使用が必須でした
- 複雑なマルチアカウント構成での KMS キー管理に一貫性がなかった

### 業界動向

- **マルチアカウント戦略の主流化**: AWS Organizations を活用した複数アカウント管理の普及
- **クロスアカウントアクセスの需要**: 中央一元管理と分散管理のバランスが求められている
- **セキュリティ強化**: 暗号化キー管理の透明性と制御の向上

---

## 主な機能と改善

### 1. KMS キー ARN の直接入力

- コンソール内で KMS キーの ARN を直接指定
- ドロップダウンリスト以外の柔軟な入力方法を提供
- ARN 形式: `arn:aws:kms:region:account-id:key/key-id`

### 2. クロスアカウント KMS キーの選択

- 異なる AWS アカウントのカスタマー管理型 KMS キーを利用可能
- リソースポリシーとアイデンティティポリシーの設定で権限制御
- より安全で制御されたマルチアカウント環境の構築

### 3. API 機能との一貫性

- これまで API でのみ利用可能だった機能がコンソールに統合
- ユーザーインターフェースの改善により操作の一貫性を実現

---

## 技術的詳細

### 適用リージョン

- AWS Secrets Manager が利用可能な**すべての AWS リージョン**で即座に利用可能

### コンソール操作フロー

1. **シークレット作成画面を開く**
   - AWS Secrets Manager コンソールで新規シークレット作成を開始

2. **KMS キー設定ステップ**
   - 暗号化キー指定時に "KMS キーを選択" または "ARN を直接入力" を選択
   - ARN 入力フィールドに クロスアカウントのキー ARN を指定

3. **権限確認と作成**
   - 指定した KMS キーへのアクセス権限を確認
   - シークレットを作成

---

## メリットとユースケース

### 🎯 主な メリット

- **運用の簡素化**: API 呼び出しなしでコンソールから完全な設定が可能
- **マルチアカウント対応の容易化**: クロスアカウント暗号化ワークフローの実装が簡単に
- **セキュリティ柔軟性の向上**: 暗号化キーの一元管理と分散管理の柔軟な選択が可能
- **コンプライアンス要件への対応**: 規制要件に基づいた柔軟なキー管理戦略を構築可能

### 📋 ユースケース例

#### ケース 1: 統合型キー管理

```
[Central Account]
├─ KMS キー一元管理
│  └─ arn:aws:kms:region:111111111111:key/xxxxx

[Application Account 1]
└─ Secrets Manager シークレット
   └─ 中央アカウントの KMS キーを参照

[Application Account 2]
└─ Secrets Manager シークレット
   └─ 中央アカウントの KMS キーを参照
```

#### ケース 2: マルチテナント環境

- 各テナント専用 AWS アカウント
- 異なるテナントのシークレットを異なる KMS キーで暗号化
- テナント間のデータ分離とセキュリティを確保

#### ケース 3: グローバル展開環境

- 地域ごとの AWS アカウント分割
- 各地域の規制要件に対応した KMS キー選択
- コンプライアンス基準を満たしながら柔軟な暗号化キー管理

---

## 実装上の考慮事項

### ✅ 実装前のチェックリスト

- [ ] クロスアカウント環境での KMS キーポリシー設定の確認
- [ ] IAM アイデンティティポリシーでの権限設定の確認
- [ ] Secrets Manager リソースポリシーの設定確認
- [ ] 各リージョンでの KMS キーの存在確認
- [ ] ネットワーク接続とサービスエンドポイント設定の確認

### ⚠️ 設定時の注意点

1. **KMS キーポリシー**: 外部アカウントに対して明示的に `kms:Decrypt` と `kms:GenerateDataKey` の権限を付与
2. **IAM ポリシー**: Secrets Manager にアクセスするロール/ユーザーに適切な権限を設定
3. **リソースベースポリシー**: Secrets Manager シークレットに対するクロスアカウントアクセスを許可

---

## まとめ

### 🚀 AWS Secrets Manager のこの改善の意義

- **UI/API の一貫性**: 開発者体験の大幅な向上
- **マルチアカウント管理の民主化**: 大規模環境での暗号化キー管理が容易に
- **セキュリティとユーザビリティの両立**: コンプライアンス要件を満たしながら使いやすさを実現

### ⏭️ 次のステップ

1. 自社のマルチアカウント構成を確認し、適用可能なシナリオを検討
2. テスト環境でクロスアカウント設定を試行
3. 本番環境への段階的展開を計画

### 📚 参考ドキュメント

- AWS Secrets Manager ドキュメント: クロスアカウントアクセス設定
- AWS KMS ドキュメント: キーポリシーの修正
- IAM 権限ベストプラクティス

---

## 参考リソース

**元記事:**
https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-console-custom-kms-key-input/

**関連ドキュメント:**
- [異なるアカウントから AWS Secrets Manager シークレットにアクセス](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples_cross.html)
- [他のアカウントのユーザーが KMS キーを使用できるようにする](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html)
- [AWS Secrets Manager でのシークレット暗号化と復号化](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html)
- [AWS Secrets Manager シークレットの暗号化キーを変更する](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_update-encryption-key.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
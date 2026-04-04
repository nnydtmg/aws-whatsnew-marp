# AWS Secrets Manager console now supports custom input for AWS KMS keys

**カテゴリ:** What's New
**公開日:** 2026-04-03T18:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-console-custom-kms-key-input/](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-console-custom-kms-key-input/)

---

## 要約

AWS Secrets Manager コンソールが KMS キーの ARN 直接入力に対応し、異なるアカウントのキーを使用できるようになりました。これにより、クロスアカウント暗号化ワークフローが簡素化され、複数アカウント間での暗号化キー管理の柔軟性が大幅に向上しました。

## 詳細

- AWS Secrets Manager コンソールで、カスタマー管理型の AWS Key Management Service (KMS) キーを作成時に指定できるようになりました。

- KMS キーの Amazon Resource Name (ARN) をコンソールに直接入力することで、アカウント内の事前設定されたリストから選択する方法に加えて、異なるアカウントのキーを使用できるようになりました。

- 従来は、AWS Secrets Manager コンソールでシークレットを作成する際に、同一 AWS アカウント内のカスタマー管理型 KMS キーのみをドロップダウンリストから選択することができていました。

- この機能強化により、コンソール体験が既存の API 機能と一致し、クロスアカウント暗号化ワークフローが簡素化されます。

- 複数アカウント間での暗号化キー管理の柔軟性が向上しました。

- この機能は、AWS Secrets Manager が利用可能なすべての AWS リージョンで利用できます。

---

## 主な特徴

### 新機能
1. **KMS キー ARN の直接入力** - コンソールで ARN を直接指定可能
2. **クロスアカウント対応** - 別アカウントのカスタマー管理型 KMS キーを使用可能
3. **API との一貫性** - コンソール体験が API 機能と同等になった

### メリット
- マルチアカウント環境での暗号化キー管理が簡素化
- ユーザーインターフェースの一貫性向上
- クロスアカウント暗号化ワークフローの実装が容易
- すべての AWS リージョンで即座に利用可能

### 利用シーン
- 複数の AWS アカウントを使用する組織
- クロスアカウント間でのシークレット共有
- 中央一元管理型の暗号化キー戦略
- マルチテナント環境でのセキュリティ管理

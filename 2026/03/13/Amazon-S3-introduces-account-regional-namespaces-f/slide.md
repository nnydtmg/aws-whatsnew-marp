---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon S3 アカウント地域別ネームスペース

汎用バケットが予測可能な命名で利用可能に

**発表日: 2026年3月12日**

---

## 概要

### Amazon S3 の新しい命名方式

- **アカウント地域別ネームスペース機能の導入**
  - グローバルに一意なバケット名を探す必要がなくなります
  - 複数リージョン間で予測可能なバケット名を作成可能

### 主な対象ユースケース

- **大規模ストレージニーズ**: データ規模が増大する組織
- **マルチテナント構成**: 顧客・チーム・データセットごとのバケット管理
- **セキュリティポリシー統一**: エンタープライズ全体での命名規則適用

---

## 前提・背景

### 従来の課題

**グローバルネームスペース制約**
- S3バケット名は全AWSアカウント・全リージョン内で一意である必要がある
- 希望するバケット名が既に他のアカウントで使用されている可能性
- バケット名探索に時間と手間がかかる

### ビジネス環境の変化

- クラウドストレージ需要の急増と組織規模の拡大
- マルチテナント・マイクロサービスアーキテクチャの普及
- ガバナンスとコンプライアンスの重要性の高まり

---

## 主な機能と改善

### 1. アカウント地域別ネームスペースの導入

**従来のバケット命名**
```
global-unique-bucket-name-12345
```

**新しいアカウント地域別ネームスペース**
```
my-app-data--12345678-an
(prefix)---(account-id-suffix)-an
```

### 2. 利用開始方法

**AWS CloudFormation での指定例**
- CreateBucket API に `BucketNamespace: account-regional` を追加
- CloudFormation テンプレートで `account-id-suffix` を使用

**構文**
- 接尾辞: `--{アカウントID}-an`
- リージョン間での重複名使用が可能

---

## 主な機能と改善（続き）

### 3. セキュリティとガバナンス

**IAM/SCP による強制**
- サービスコントロールポリシー（SCP）で制限可能
- IAM ポリシーでユーザーの作成範囲を限定
- エンタープライズ全体での一貫した命名規則適用

**コンプライアンス**
- データレジデンシー要件の明確化
- 組織内バケット管理の一元化

### 4. 利用可能範囲

**対応リージョン**
- 37 AWS リージョンで利用可能
- AWS China リージョン対応
- AWS GovCloud (US) リージョン対応

**アクセス方法**
- AWS Management Console（ウェブ UI）
- S3 REST API
- AWS CLI
- AWS SDK
- AWS CloudFormation

---

## 効果とメリット

### 運用効率の向上

- ✅ バケット名探索時間の削減
- ✅ 予測可能な命名規則の確立
- ✅ バケット作成プロセスの簡素化

### スケーラビリティ

- ✅ 顧客/チーム/データセットごとの専用バケット作成が容易
- ✅ リージョン間での命名規則一貫性の確保
- ✅ 大規模データストレージニーズへの対応

### セキュリティ強化

- ✅ ガバナンス規則の統一的な適用
- ✅ IAM/SCP による強制力のある制御
- ✅ エンタープライズセキュリティポリシーの実装

### コスト

- ✅ **追加費用なし**で利用可能

---

## ユースケース

### ユースケース 1: SaaS プラットフォーム

**顧客ごとのバケット管理**
```
customer-data--{account-id}-an
backup-data--{account-id}-an
analytics-data--{account-id}-an
```
- 各顧客に独立したバケットを提供
- データ分離とセキュリティ確保が容易

### ユースケース 2: エンタープライズデータレイク

**部門別・プロジェクト別のバケット構成**
```
finance-lake--{account-id}-an
hr-data--{account-id}-an
operations-logs--{account-id}-an
```
- 組織構造に合わせたバケット設計
- アクセス制御の一元管理

---

## まとめ

### Amazon S3 アカウント地域別ネームスペースの位置づけ

**S3 バケット管理の大幅な改善**
- グローバルネームスペース制約からの解放
- 予測可能で一貫性のある命名方式の確立
- セキュリティとガバナンスの強化

**導入すべき組織**

| 対象組織 | 効果 |
|--------|------|
| マルチテナント SaaS | テナント間のデータ分離が簡素化 |
| 大規模エンタープライズ | ガバナンス規則の統一的適用 |
| 複数リージョン運用 | リージョン間での命名規則統一 |

### 次のステップ

1. 既存バケットから新規バケット作成への移行計画
2. CloudFormation テンプレートの更新
3. IAM/SCP ポリシーの設定と検証
4. 本番環境への段階的デプロイ

---

## 参考リソース

**AWS 公式リソース**
- [AWS What's New 記事](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-s3-account-regional-namespaces/)
- [AWS News Blog](https://aws.amazon.com/blogs/aws/introducing-account-regional-namespaces-for-amazon-s3-general-purpose-buckets/)
- [S3 User Guide - Namespaces for general purpose buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html)

**関連ドキュメント**
- [Amazon S3 リージョン一覧](https://aws.amazon.com/s3/features/)
- [CreateBucket API リファレンス](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
- [IAM ポリシー例](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon S3 アカウント地域ネームスペース
一般目的バケット向けの新機能

**発表日: 2026年3月12日**

---

## 概要

### アカウント地域ネームスペースの3つの利点

- **バケット名の可用性保証**: アカウント内でユニークな名前を自由に付与可能
- **バケット名管理の簡素化**: グローバルな一意性が不要な新アプローチ
- **セキュリティポリシー強化**: 組織全体でのバケット作成ルール適用が容易

### バケット名フォーマット

例: `mybucket-123456789012-us-east-1-an`
- `mybucket`: カスタムプレフィックス
- `123456789012`: AWSアカウントID
- `us-east-1`: リージョン
- `-an`: アカウント地域ネームスペース接尾辞

---

## 前提・背景

### S3 バケット命名の課題

- **グローバル一意性**: 従来のバケット名はAWS全体で一意である必要があった
- **命名の制約**: 他のアカウントに既に使用されている名前は選択不可
- **複数リージョン展開**: リージョンごとに異なる命名戦略が必要
- **セキュリティ管理**: 組織内のバケット作成ルール適用が困難

### 市場の動向

- S3テーブルバケット（2024年）やベクトルバケットが異なる命名空間を採用
- エンタープライズ組織での分散バケット管理の複雑化
- インフラストラクチャコード（IaC）のスケーラビリティ向上への期待

---

## 主な機能と改善

### 1. アカウント地域ネームスペースの作成

- ユーザーアカウント + リージョン単位でのネームスペース隔離
- 他のアカウントが同じ接尾辞でバケット作成を試みると自動拒否
- 名前長制限: プレフィックス + 接尾辞合計3～63文字

### 2. 複数ツールでの対応

| ツール | サポート状況 | 例 |
|--------|----------|----|
| **AWS CLI** | ✅ 完全対応 | `--bucket-namespace account-regional` |
| **AWS SDK (Boto3)** | ✅ 完全対応 | `BucketNamespace="account-regional"` |
| **CloudFormation** | ✅ 完全対応 | `BucketNamespace: account-regional` |

---

<!-- _class: small -->

## 実装例

### AWS CLI での作成

```bash
aws s3api create-bucket --bucket mybucket-123456789012-us-east-1-an \
   --bucket-namespace account-regional \
   --region us-east-1
```

### AWS SDK for Python (Boto3)

```python
import boto3

s3_client = boto3.client('s3')
sts_client = boto3.client('sts')

account_id = sts_client.get_caller_identity()['Account']
region = s3_client.meta.region_name

bucket_name = f"mybucket-{account_id}-{region}-an"

s3_client.create_bucket(
    Bucket=bucket_name,
    BucketNamespace="account-regional"
)
```

### AWS CloudFormation

```json
BucketNamespace: "account-regional"
BucketNamePrefix: "amzn-s3-demo-bucket"
```

---

## セキュリティと管理

### 1. IAM ポリシー強化

- 新規条件キー: `s3:x-amz-bucket-namespace`
- 組織全体でアカウント地域ネームスペースの採用を強制可能
- セキュリティチームによる一括管理

### 2. AWS Organizations サービスコントロールポリシー

- SCPにより組織内のバケット作成をアカウント地域ネームスペースに限定
- 複数アカウント環境での統一ルール適用

### 3. アクセス制御

- 他のアカウント: ユーザーアカウント接尾辞の使用を自動拒否
- バケット所有アカウント: 完全なコントロール権を保持

---

## 効果・メリット

### 1. バケット管理の効率化

- ✅ **命名の自由度向上**: グローバル一意性の制約を排除
- ✅ **組織スケーラビリティ**: 複数チーム・複数リージョン展開が容易
- ✅ **IaC 管理の簡潔化**: CloudFormation テンプレートの複雑性削減

### 2. セキュリティ強化

- ✅ **アカウント分離**: 他のアカウントによる名前スプーフィング防止
- ✅ **ポリシー統一**: IAM ポリシーで組織全体の採用を強制
- ✅ **監査追跡**: `s3:x-amz-bucket-namespace` 条件で追跡可能

### 3. 運用コスト削減

- ✅ **命名戦略の統一**: 企業規則に基づいた自動命名
- ✅ **リネーム不要**: 新規作成時に命名ポリシー適用可能

---

## ユースケース

### 1. エンタープライズ多アカウント環境

- 各事業部門が異なるAWSアカウント、複数リージョンでバケット管理
- 統一された命名規則の自動適用
- セキュリティチームによる一括ガバナンス

### 2. SaaS プロバイダー

- 顧客ごとにアカウントを分離、リージョンごとにバケット作成
- バケット名の予測可能性と競合排除
- インフラコード自動生成の簡素化

### 3. 大規模データ分析プラットフォーム

- 地域・テナント・用途の組み合わせで多数のバケット管理
- 命名の自動化による運用効率化

---

## 制限事項と注意点

### ✅ 対応範囲

- **一般目的バケット**: フルサポート
- **37 AWS リージョン**: AWS China、AWS GovCloud (US) を含む
- **追加コスト**: なし

### ⚠️ 制限事項

- **既存バケットのリネーム**: 不可能。グローバルネームスペースから移行不可
- **対応バケット種**: 一般目的バケットのみ
- **未対応**: S3 テーブルバケット、ベクトルバケット、ディレクトリバケット

---

## まとめ

### Amazon S3 アカウント地域ネームスペースのポイント

- **新しい命名空間**: グローバル一意性不要な新アプローチで運用負荷を軽減
- **セキュリティ強化**: IAM ポリシー強制により組織全体の統一ガバナンスを実現
- **運用効率化**: CLI、Boto3、CloudFormation で簡単に採用可能
- **段階的導入**: 既存バケットに影響なし、新規作成から開始可能

### 次のステップ

1. 自社の命名規則とアカウント構成を確認
2. パイロットプロジェクトで AWS CLI または Boto3 でテスト
3. CloudFormation テンプレートをリファクタリング
4. IAM ポリシーで組織全体への採用を段階的に推進

---

## 参考リソース

### 公式ドキュメント

- **AWS ブログ**: https://aws.amazon.com/blogs/aws/introducing-account-regional-namespaces-for-amazon-s3-general-purpose-buckets/
- **S3 ユーザーガイド**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html
- **AWS CLI リファレンス**: https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html
- **CloudFormation リファレンス**: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html

### 関連情報

- **S3 テーブルバケット**: 分析用の構造化データ
- **S3 ベクトルバケット**: AI 埋め込みの保存と検索
- **AWS Organizations**: 複数アカウント管理
- **AWS IAM**: ポリシーベースのアクセス制御

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
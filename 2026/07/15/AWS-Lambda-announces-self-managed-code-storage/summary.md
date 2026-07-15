# AWS Lambda、自己管理型コード保存機能を発表

AWS Lambda announces self-managed code storage

**カテゴリ:** What's New
**公開日:** 2026-07-15
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/lambda-self-managed-code-storage/)

このページでは、AWS What's Newで発表された「AWS Lambda announces self-managed code storage」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、自身のAmazon S3バケットからコードを直接参照できる自己管理型コード保存機能を新たに提供開始しました。この機能により、コード保存制限が廃止され、関数アクティベーション時間が短縮され、Lambda管理型ストレージのデフォルト制限も75GBから300GBに引き上げられました。

---

## このアップデートで何が変わったか

### 主な改善点

1. **自己管理型コード保存機能**
   - Amazon S3バケットからソースコードを直接参照
   - Lambda管理ストレージへの中間コピーが不要に
   - これまでのコード保存制限が廃止

2. **パフォーマンス向上**
   - 関数作成・更新後のアクティベーション時間が短縮
   - 中間コピー処理がないため迅速に対応

3. **Lambda管理型ストレージの拡張**
   - デフォルト制限：75GB → **300GB**（リージョンあたり）
   - 従来のサポートチケット申請が不要に

4. **単一情報源の管理**
   - デプロイメントパッケージを顧客アカウント内で一元管理
   - S3 Versioningで履歴保持が容易

### コスト面での特徴

- **追加Lambda料金なし**
- 標準的なAmazon S3ストレージ料金のみが適用
- S3バケット容量制限まで利用可能

---

## 詳細説明

### 従来のアーキテクチャ（廃止）

```
S3バケット → Lambda管理ストレージにコピー → Lambda関数で実行
          ↓
    制限: 75GB/リージョン
    課題: クォータ増加にはサポートチケット必須
```

### 新しいアーキテクチャ（推奨）

```
S3バケット → Lambda関数で直接参照
          ↓
    制限: S3バケット容量まで（実質無制限）
    メリット: 高速化、コスト削減、管理簡素化
```

### 技術的な仕様

#### 設定方法

関数またはレイヤーを作成・更新する際に以下のパラメータを指定：

```json
{
  "S3ObjectStorageMode": "REFERENCE"
}
```

#### 利用可能なツール

- **AWS CLI** - コマンドラインからの設定
- **AWS CloudFormation** - Infrastructure as Code での定義
- **AWS SAM** - サーバーレスアプリケーション定義ファイル
- **AWS SDKs** - プログラマティックな設定（Python、Node.js など）
- **Lambda Console** - AWSマネジメントコンソールのGUIから設定

#### IAM権限の設定

Lambda service principal（`lambda.amazonaws.com`）に対して以下の権限を付与：

| 権限 | 説明 |
|------|------|
| `s3:GetObject` | S3オブジェクトの読み取り |
| `s3:GetObjectVersion` | S3オブジェクトバージョンの読み取り |

ポリシー例：

```json
{
  "Effect": "Allow",
  "Principal": {
    "Service": "lambda.amazonaws.com"
  },
  "Action": [
    "s3:GetObject",
    "s3:GetObjectVersion"
  ],
  "Resource": "arn:aws:s3:::your-bucket/*"
}
```

### 対応リージョン

- ✅ **すべての商用AWSリージョン**で利用可能
- 🔜 AWS GovCloud（米国）- 後日対応予定
- 🔜 AWS中国リージョン（北京/寧夏）- 後日対応予定

---

## 活用のメリット

### 1. スケーラビリティの向上

- **無制限のコード保存**
  - S3バケット容量まで関数・レイヤーコードを保存可能
  - クォータ申請の手続きが不要に

- **大規模アプリケーション対応**
  - 数百個以上の関数をデプロイ可能
  - 各関数が大規模なコード（100MB～数GB）を持つ場合に適切

### 2. パフォーマンス向上

- **デプロイメント高速化**
  - 中間コピー処理が不要
  - 関数作成・更新時間が大幅短縮

- **アクティベーション時間の削減**
  - S3からの直接参照で効率化

### 3. 運用効率化

- **一元管理**
  - デプロイメントパッケージを顧客アカウント内で管理
  - CI/CDパイプラインとの統合が容易

- **バージョン管理**
  - S3 Versioningで履歴管理
  - ロールバック・復旧が簡単

### 4. コスト最適化

- **追加料金なし**
  - Lambda料金の増加なし
  - 標準的なS3ストレージ料金のみ

- **Lambda管理型ストレージ制限の拡大**
  - 従来：75GB → 現在：**300GB**（リージョンあたり）
  - 中小規模はこのデフォルト制限で十分

---

## 実装例

### AWS CLI での設定例

```bash
# 自己管理型S3ストレージを使用して関数を作成
aws lambda create-function \
  --function-name my-function \
  --runtime python3.11 \
  --role arn:aws:iam::123456789012:role/lambda-role \
  --handler index.handler \
  --code S3Bucket=my-bucket,S3Key=function.zip \
  --s3-object-storage-mode REFERENCE
```

### AWS CloudFormation での設定例

```yaml
MyLambdaFunction:
  Type: AWS::Lambda::Function
  Properties:
    FunctionName: my-function
    Runtime: python3.11
    Role: arn:aws:iam::123456789012:role/lambda-role
    Handler: index.handler
    Code:
      S3Bucket: my-bucket
      S3Key: function.zip
    S3ObjectStorageMode: REFERENCE
```

### AWS SAM での設定例

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2010-05-01

Resources:
  MyFunction:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: my-function
      CodeUri: s3://my-bucket/function.zip
      Handler: index.handler
      Runtime: python3.11
      # SAMはS3ObjectStorageModeをサポート
      S3ObjectStorageMode: REFERENCE
```

---

## ユースケース

### ユースケース1: 大規模マイクロサービスアーキテクチャ

**背景**
- 100個以上のLambda関数をデプロイ
- 各関数が平均30MB～100MBのコード
- 従来は75GB制限に達するため、クォータ申請が常に必要

**解決策**
- すべての関数を自己管理型S3ストレージに移行
- S3に一元的にすべてのコードを管理
- 制限なくスケーラブルに拡張可能

**効果**
- クォータ申請の手続き廃止
- デプロイメント時間50%削減
- 運用コスト削減

---

### ユースケース2: 機械学習推論パイプライン

**背景**
- 大規模MLモデル（2GB～5GB）を関数に含める必要
- 従来は保存制限でサポートチケット必須
- 複数の関数で同じモデルを共有

**解決策**
- MLモデルをS3に保存
- Lambda関数が直接S3から参照
- 複数関数で同じモデルを共有

**効果**
- モデルの一元管理
- ストレージの効率化
- 更新時にすべての関数が自動的に最新モデルを使用

---

### ユースケース3: CI/CD統合

**背景**
- 頻繁なコード更新（1日複数回）
- 中間コピー処理による遅延が問題

**解決策**
- CI/CDパイプライン → S3に直接デプロイ
- Lambda関数が自動的にS3から新バージョンを参照

**効果**
- デプロイメント時間短縮（秒単位）
- 運用の自動化

---

## 関連する最近のAWS発表

### S3の機能拡張

1. **Amazon S3 Files（2026年4月）**
   - S3バケットをNFS（Network File System）としてマウント
   - Lambda関数で高性能なファイルシステムアクセスが可能
   - 自己管理型コード保存と組み合わせて活用

2. **Amazon S3 Annotations（2026年春）**
   - S3オブジェクトに対するリッチメタデータ機能
   - Lambda関数がメタデータを活用

### Lambda の進化

- **Lambda管理型ストレージ制限拡大**: 75GB → 300GB
- **Serverless Compute** への統合深化

---

## 導入のポイント

### 移行前の検討事項

1. **コスト比較**
   - S3ストレージ料金 vs 従来のLambda管理ストレージ
   - 実際のコード総容量を計測

2. **セキュリティ**
   - S3バケットのアクセス権限設定
   - Lambda実行ロールにおける権限の最小化

3. **パフォーマンステスト**
   - S3からの読み込み遅延の評価
   - 関数起動時間の測定

### 段階的な導入計画

1. **フェーズ1: パイロット**
   - 新規関数から自己管理型S3を試用
   - パフォーマンスとコストを検証

2. **フェーズ2: パイロット関数の拡大**
   - テスト環境で複数関数を検証

3. **フェーズ3: 本番環境への段階的移行**
   - 既存関数を優先度順に移行

---

## 今後の展開

### AWS の今後の予定

- 🔜 AWS GovCloud での対応予定
- 🔜 AWS中国リージョンでの対応予定
- 🔜 さらなる機能拡張の検討

### Lambda生態系の展望

- **S3との統合深化**: Files、Annotationsなどとの連携
- **Serverless化の加速**: 制限なしのスケーラビリティ
- **エンタープライズ対応**: 大規模環境での活用

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**
  https://aws.amazon.com/about-aws/whats-new/2026/07/lambda-self-managed-code-storage/

- **AWS Lambda Developer Guide - Self-managed S3 code storage**
  https://docs.aws.amazon.com/lambda/latest/dg/

- **AWS Lambda API Reference**
  https://docs.aws.amazon.com/lambda/latest/api/

### 関連サービス

- **Amazon S3**: https://aws.amazon.com/s3/
- **AWS Lambda**: https://aws.amazon.com/lambda/
- **AWS CloudFormation**: https://aws.amazon.com/cloudformation/
- **AWS Serverless Application Model (SAM)**: https://aws.amazon.com/serverless/sam/

### AWS Training

- AWS Skill Builder での Lambda トレーニング
- AWS Well-Architected Review での設計支援

---

## まとめ

### 主要なポイント

✅ **コード保存制限が廃止** → S3バケット容量まで対応
✅ **関数アクティベーション時間が短縮** → 中間コピー不要
✅ **Lambda管理型ストレージ拡大** → 75GB → 300GB
✅ **追加料金なし** → S3ストレージ料金のみ
✅ **全商用リージョンで利用可能** → 即座に導入可能

### 推奨される活用シーン

- 大規模マイクロサービスアーキテクチャ
- 機械学習モデルを含むアプリケーション
- 高頻度なコード更新（CI/CD）
- エンタープライズグレードのサーバーレスアプリケーション

---

**最終更新日**: 2026年7月15日
**対応バージョン**: AWS Lambda 自己管理型コード保存機能（GA）

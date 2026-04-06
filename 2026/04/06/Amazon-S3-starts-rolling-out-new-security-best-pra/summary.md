# Amazon S3 starts rolling out new security best practice to new and existing buckets by default

**カテゴリ:** What's New
**公開日:** 2026-04-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/s3-default-bucket-security-setting/](https://aws.amazon.com/about-aws/whats-new/2026/04/s3-default-bucket-security-setting/)

---

## 要約

Amazon S3は、セキュリティベストプラクティスの一環として、新規および既存の汎用バケットに対してSSE-Cを自動的に無効化するデフォルト設定を、37のAWSリージョンにデプロイしております。SSE-C使用実績のないアカウントおよび新規バケットが対象となり、既存のSSE-C利用者のバケット設定は変更されません。

## 詳細

### 実装内容

Amazon S3は2025年11月19日の発表に基づいて、新しいデフォルトバケットセキュリティ設定をデプロイしております。

**新規バケット**
- すべての新しい汎用バケットに対して、サーバー側暗号化とカスタマー提供キー（SSE-C）が自動的に無効化されます。

**既存バケット（SSE-C未使用）**
- SSE-C暗号化オブジェクトを持たない既存バケットについても、S3は新しい書き込みリクエストに対してSSE-Cを無効化いたします。

**既存バケット（SSE-C使用中）**
- SSE-Cを使用しているAWSアカウントについては、既存バケットの暗号化設定は変更されません。

### デプロイメント

- **対象範囲**: AWS中国およびAWS GovCloud（US）地域を含む37のAWSリージョン
- **スケジュール**: 2026年4月6日開始、今後数週間にわたって段階的に行われる
- **影響の最小化**: SSE-C利用中のアカウントは保護され、既存設定が維持される

### 理由と背景

**SSE-Cの課題**
- 毎回のアクセス時に暗号化キーの提供が必要
- HTTPS必須であり、実装の複雑さが高い
- AWS サービス統合に制限があり、チーム間でのキー共有が困難

**市場トレンド**
- 最新のワークロードではSSE-KMSやSSE-S3が主流
- エンタープライズではSSE-KMS採用が加速
- 暗号化オプションの統一化により運用コスト削減を期待

### 推奨される対応

1. **現環境の確認**
   - 現在のバケット暗号化設定をS3 Console または GetBucketEncryption APIで確認
   - SSE-C利用の有無を把握

2. **代替手段の選択**
   - **SSE-KMS推奨**: AWS KMS統合による集中管理、AWS サービス全体との連携
   - **SSE-S3**: シンプル暗号化、追加管理不要

3. **マイグレーション計画**
   - 開発・ステージング環境でテスト
   - 本番環境への段階的なデプロイメント

### リクエスト時の動作

SSE-Cが無効なバケットへのリクエスト
- **エラーコード**: HTTP 403 `AccessDenied`
- **対象操作**: `PutObject`, `CopyObject`, `PostObject`, Multipart Upload, Replication

## 参考リソース

- AWS Documentation: [Default SSE-C setting for new buckets FAQ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-s3-c-encryption-setting-faq.html)
- AWS Documentation: [Configuring default encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html)
- AWS Storage Blog: [Amazon S3 to disable the use of SSE-C encryption by default](https://aws.amazon.com/blogs/storage/advanced-notice-amazon-s3-to-disable-the-use-of-sse-c-encryption-by-default-for-all-new-buckets-and-select-existing-buckets-in-april-2026/)

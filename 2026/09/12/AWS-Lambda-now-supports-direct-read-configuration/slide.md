---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaがAmazon S3 Filesのダイレクトリード設定をサポート

AWS Lambda now supports direct read configuration for Amazon S3 Files

**What's New** | 2026-09-11T17:00:00

---

## 概要

- AWS LambdaがAmazon S3 Filesのダイレクトリード設定をサポートし、メモリサイズに依存せず読み取り性能を最適化できるようになりました。
- スケーラブルなデータ処理やエージェントワークロードを構築するお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda now supports direct read configuration for Amazon S3 Files - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)

- **Configuring Amazon S3 Files access - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem-s3files.html)

- **Modernizing Lambda + S3 workloads with Amazon S3 Files | AWS ...

---

## 変更内容・新機能

AWS LambdaがAmazon S3 Filesのダイレクトリード設定を新たにサポートしました。関数のメモリサイズに関係なく、高性能ストレージまたはS3バケットからの読み取りを明示的に設定できます。本更新は、スケーラブルなデータ処理パイプラインやステートフルなエージェントワークロードを構築されるお客様に適しています。ファイル読み取りのスループットとレイテンシをアプリケーション要件に応じて最適化したいお客様にとって有益です。DirectS3Read設定はAUTO（デフォルト：512MB以上で有効）、ENABLED（メモリサイズに関係なく有効化）、DISABLED（高性能ストレージ経由）の3値を受け付けます。有効時は1MB以上のファイルをS3バケットから直接ストリーミングし、小さいファイルは高性能ストレージから提供されます。すべてのAWSコマーシャルリージョン、AWS GovCloud (US-East/US-West)で利用可能（Asia Pacific (New Zealand)、Middle East (Bahrain/UAE)を除く）。追加料金なし。

---

## まとめ

- AWS Lambda now supports direct read configuration for Amazon S3 Files について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)

### 関連情報

- [AWS Lambda now supports direct read configuration for Amazon S3 Files - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)
- [Configuring Amazon S3 Files access - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem-s3files.html)
- [Modernizing Lambda + S3 workloads with Amazon S3 Files | AWS Compute Blog](https://aws.amazon.com/blogs/compute/modernizing-lambda-s3-workloads-with-amazon-s3-files)
- [AWS Lambda functions can now mount Amazon S3 buckets as file systems with S3 Files](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-lambda-amazon-s3)
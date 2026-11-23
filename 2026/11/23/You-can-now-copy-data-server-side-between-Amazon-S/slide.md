---
marp: true
theme: aws-whatsnew
paginate: true
---

# S3 Access PointsでAmazon S3とAmazon FSx間のサーバーサイドコピーが可能に

You can now copy data server-side between Amazon S3 buckets and Amazon FSx file systems with S3 Access Points

**What's New** | 2026-11-22T08:00:00

---

## 概要

- Amazon S3 Access Pointsを使用して、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。
- 以前はダウンロードとアップロードが必要でしたが、標準のCopyObjectおよびUploadPartCopy操作で高速・低コストにデータを移動できます。

---

## 前提・背景

### これまでの課題

Amazon S3 Access Points for FSxは、Amazon FSx for NetApp ONTAPおよびAmazon FSx for OpenZFSのデータにS3 API経由でアクセスできるS3エンドポイントです。新機能として、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。この機能により、S3とFSx間またはFSxファイルシステム間でのデータ移動が高速化、低コスト化、

---

### 関連する最近の動向

- **Amazon S3 Access Points for Amazon FSx are now available in additional AWS Regions - AWS**
  [詳細](https://aws.a...

---

## 変更内容・新機能

Amazon S3 Access Points for FSxは、Amazon FSx for NetApp ONTAPおよびAmazon FSx for OpenZFSのデータにS3 API経由でアクセスできるS3エンドポイントです。新機能として、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。この機能により、S3とFSx間またはFSxファイルシステム間でのデータ移動が高速化、低コスト化、簡素化されます。以前はサーバーサイドコピーが未対応だったため、自前で運用するサーバーから各オブジェクトをダウンロードしてアップロードする必要がありました。現在は標準のCopyObjectおよびUploadPartCopy操作が利用可能です。パートナー所有のS3バケットからファイルシステムへデータをコピーしたり、ジョブ結果を他チームのバケットへエクスポートしたりする用途に適しています。S3 Access Points for FSxが利用可能なすべてのAWSリージョンで利用でき、AWS CLI、A

---

## まとめ

- You can now copy data server-side between Amazon S3 buckets and Amazon FSx file systems with S3 Access Points について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-access-points-server-side-copy-fsx/)

### 関連情報

- [Amazon S3 Access Points for Amazon FSx are now available in additional AWS Regions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-access-points-fsx-regions)
- [Bridge legacy and modern applications with Amazon S3 Access Points for Amazon FSx | AWS Storage Blog](https://aws.amazon.com/blogs/storage/bridge-legacy-and-modern-applications-with-amazon-s3-access-points-for-amazon-fsx)
- [Accessing your data using Amazon S3 access points - FSx for OpenZFS](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/s3accesspoints-for-FSx.html)
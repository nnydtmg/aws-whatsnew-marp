# S3 Access PointsでAmazon S3とAmazon FSx間のサーバーサイドコピーが可能に

You can now copy data server-side between Amazon S3 buckets and Amazon FSx file systems with S3 Access Points

**カテゴリ:** What's New
**公開日:** 2026-11-22T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-access-points-server-side-copy-fsx/)

このページでは、AWS What's Newで発表された「You can now copy data server-side between Amazon S3 buckets and Amazon FSx file systems with S3 Access Points」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 Access Pointsを使用して、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。以前はダウンロードとアップロードが必要でしたが、標準のCopyObjectおよびUploadPartCopy操作で高速・低コストにデータを移動できます。

## このアップデートで何が変わったか

Amazon S3 Access Points for FSxは、Amazon FSx for NetApp ONTAPおよびAmazon FSx for OpenZFSのデータにS3 API経由でアクセスできるS3エンドポイントです。新機能として、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。この機能により、S3とFSx間またはFSxファイルシステム間でのデータ移動が高速化、低コスト化、簡素化されます。以前はサーバーサイドコピーが未対応だったため、自前で運用するサーバーから各オブジェクトをダウンロードしてアップロードする必要がありました。現在は標準のCopyObjectおよびUploadPartCopy操作が利用可能です。パートナー所有のS3バケットからファイルシステムへデータをコピーしたり、ジョブ結果を他チームのバケットへエクスポートしたりする用途に適しています。S3 Access Points for FSxが利用可能なすべてのAWSリージョンで利用でき、AWS CLI、A

## 対象ユーザー

Amazon S3 Access Points for FSxは、Amazon FSx for NetApp ONTAPおよびAmazon FSx for OpenZFSのデータにS3 API経由でアクセスできるS3エンドポイントです。新機能として、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。この機能により、S3とFSx間またはFSxファイルシステム間でのデータ移動が高速化、低コスト化、簡素化されます。以前はサーバーサイドコピーが未対応だったため、自前で運用するサーバーから各オブジェク

## 詳細

Amazon S3 Access Points for FSxは、Amazon FSx for NetApp ONTAPおよびAmazon FSx for OpenZFSのデータにS3 API経由でアクセスできるS3エンドポイントです。新機能として、同一AWSリージョン内のAmazon S3汎用バケットとAmazon FSxファイルシステム間でサーバーサイドのデータコピーおよび移動が可能になりました。この機能により、S3とFSx間またはFSxファイルシステム間でのデータ移動が高速化、低コスト化、簡素化されます。以前はサーバーサイドコピーが未対応だったため、自前で運用するサーバーから各オブジェクトをダウンロードしてアップロードする必要がありました。現在は標準のCopyObjectおよびUploadPartCopy操作が利用可能です。パートナー所有のS3バケットからファイルシステムへデータをコピーしたり、ジョブ結果を他チームのバケットへエクスポートしたりする用途に適しています。S3 Access Points for FSxが利用可能なすべてのAWSリージョンで利用でき、AWS CLI、AWS SDK、S3互換ツールでデータをコピー・移動できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-access-points-server-side-copy-fsx/)
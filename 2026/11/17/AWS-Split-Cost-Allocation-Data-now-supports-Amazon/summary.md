# AWS Split Cost Allocation DataがAmazon S3をサポート

AWS Split Cost Allocation Data now supports Amazon S3

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/split-cost-allocation-data-s3/)

このページでは、AWS What's Newで発表された「AWS Split Cost Allocation Data now supports Amazon S3」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWSの分割コスト配賦データがAmazon S3に対応し、共有バケットのコストをプレフィックス単位で配賦できるようになりました。複数チームでバケットを共有する組織のチャージバックおよびショーバックに有用です。

## このアップデートで何が変わったか

Starting today, you can allocate the storage and request costs of a shared Amazon S3 general purpose bucket to the prefixes in that bucket in the AWS Cost and Usage Report (CUR)。共有Amazon S3汎用バケットのストレージおよびリクエストコストをプレフィックス単位でAWS CURへ配賦できます。S3 Storage Lensがプレフィックスレベルのメトリクスを公開し、最も深い一致プレフィックスへコストを配賦します。複数のチームやアプリケーション、テナントのデータを1つのバケットに保存している組織のチャージバック・ショーバックに適しています。

## 詳細

Starting today, you can allocate the storage and request costs of a shared Amazon S3 general purpose bucket to the prefixes in that bucket in the AWS Cost and Usage Report (CUR)。共有Amazon S3汎用バケットのストレージおよびリクエストコストをプレフィックス単位でAWS CURへ配賦できます。S3 Storage Lensがプレフィックスレベルのメトリクスを公開し、最も深い一致プレフィックスへコストを配賦します。複数のチームやアプリケーション、テナントのデータを1つのバケットに保存している組織のチャージバック・ショーバックに適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/split-cost-allocation-data-s3/)
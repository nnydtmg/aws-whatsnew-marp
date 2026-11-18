# Amazon S3がAWS CloudTrailでポスト量子TLSの可視性を提供開始

Amazon S3 now provides post-quantum TLS visibility in AWS CloudTrail

**カテゴリ:** What's New
**公開日:** 2026-11-17T14:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-aws-cloudtrail/)

このページでは、AWS What's Newで発表された「Amazon S3 now provides post-quantum TLS visibility in AWS CloudTrail」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3はCloudTrailでTLS鍵交換アルゴリズムを記録し、ポスト量子TLSの可視性を提供するようになりました。本機能はポスト量子移行を進めたいお客様に役立ちます。

## このアップデートで何が変わったか

-新機能は、Amazon S3がS3リクエストのTLS鍵交換アルゴリズムをAWS CloudTrailに記録することです。
- tlsDetailsフィールドの新しいkeyExchange値により、ポスト量子TLSの利用状況を確認できます。
- 一般用途バケット、ディレクトリバケット、テーブルバケット、ベクターバケットおよびPrivateLink経由のリクエストが対象です。
- 本アップデートは、ポスト量子暗号で保護されたトラフィックを測定し、従来方式のクライアントを特定したいお客様に適しています。

## 対象ユーザー

-新機能は、Amazon S3がS3リクエストのTLS鍵交換アルゴリズムをAWS CloudTrailに記録することです。
- tlsDetailsフィールドの新しいkeyExchange値により、ポスト量子TLSの利用状況を確認できます。
- 一般用途バケット、ディレクトリバケット、テーブルバケット、ベクターバケットおよびPrivateLink経由のリクエストが対象です。
- 本アップデートは、ポスト量子暗号で保護されたトラフィックを測定し、従来方式のクライアントを特定したいお客様に適しています。

## 詳細

-新機能は、Amazon S3がS3リクエストのTLS鍵交換アルゴリズムをAWS CloudTrailに記録することです。
- tlsDetailsフィールドの新しいkeyExchange値により、ポスト量子TLSの利用状況を確認できます。
- 一般用途バケット、ディレクトリバケット、テーブルバケット、ベクターバケットおよびPrivateLink経由のリクエストが対象です。
- 本アップデートは、ポスト量子暗号で保護されたトラフィックを測定し、従来方式のクライアントを特定したいお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-aws-cloudtrail/)
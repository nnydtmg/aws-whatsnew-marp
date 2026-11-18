---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3がAWS CloudTrailでポスト量子TLSの可視性を提供開始

Amazon S3 now provides post-quantum TLS visibility in AWS CloudTrail

**What's New** | 2026-11-17T14:00:00

---

## 概要

- Amazon S3はCloudTrailでTLS鍵交換アルゴリズムを記録し、ポスト量子TLSの可視性を提供するようになりました。
- 本機能はポスト量子移行を進めたいお客様に役立ちます。

---

## 前提・背景

### これまでの課題

-新機能は、Amazon S3がS3リクエストのTLS鍵交換アルゴリズムをAWS CloudTrailに記録することです。
- tlsDetailsフィールドの新しいkeyExchange値により、ポスト量子TLSの利用状況を確認できます。
- 一般用途バケット、ディレクトリバケット、テーブルバケット、ベクターバケットおよびPrivateLink経由のリクエストが対象です。
- 本アップデートは、ポスト量子暗号で保護されたトラフィックを測定し、従来方式のクライアントを特定したいお客様に適していま

---

### 関連する最近の動向

- **Using hybrid post-quantum TLS with Amazon S3**
  [詳細](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Usi...

---

## 変更内容・新機能

-新機能は、Amazon S3がS3リクエストのTLS鍵交換アルゴリズムをAWS CloudTrailに記録することです。
- tlsDetailsフィールドの新しいkeyExchange値により、ポスト量子TLSの利用状況を確認できます。
- 一般用途バケット、ディレクトリバケット、テーブルバケット、ベクターバケットおよびPrivateLink経由のリクエストが対象です。
- 本アップデートは、ポスト量子暗号で保護されたトラフィックを測定し、従来方式のクライアントを特定したいお客様に適しています。

---

## まとめ

- Amazon S3 now provides post-quantum TLS visibility in AWS CloudTrail について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-aws-cloudtrail/)

### 関連情報

- [Using hybrid post-quantum TLS with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryptionInTransit.PQ-TLS.html)
- [Amazon S3 now supports post-quantum TLS key exchange on S3 endpoints](https://aws.amazon.com/about-aws/whats-new/2025/11/s3-post-quantum-tls-key-exchange-endpoints)
- [AWS Secrets Manager clients now support hybrid post-quantum TLS](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-post-quantum-tls)
- [Automating post-quantum cryptography readiness using AWS Config](https://aws.amazon.com/blogs/security/automating-post-quantum-cryptography-readiness-using-aws-config)
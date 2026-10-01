---
marp: true
theme: aws-whatsnew
paginate: true
---

# Apache Icebergマテリアライズドビューがシステム管理の書き込み保護をサポート

Apache Iceberg materialized views now support system-managed write protection

**What's New** | 2026-09-30T22:19:00

---

## 概要

- AWSは、Apache Icebergマテリアライズドビュー向けのシステム管理書き込み保護を発表いたしました。
- AWS Glueのみが書き込み可能となり、計算結果を一貫して安心して共有できます。

---

## 前提・背景

### 関連する最近の動向

- **Introducing Apache Iceberg materialized views in AWS Glue Data Catalog | AWS Big Data Blog**
  [詳細](https://aws.amazon.com/blogs/big-data/introducing-apache-iceberg-materialized-views-in-aws-glue-data-catalog)

- **Simplified permissions for Amazon S3 Tables and Iceberg materialized views are now available in AWS GovCloud (US) Regions - AWS**
  [詳細](https://aws.amazon.com/about-...

---

## 変更内容・新機能

- 新機能は、Apache Iceberg向けのシステム管理マテリアライズドビューです。
- 本機能では、AWS Glueのみがマテリアライズドビューのデータと定義を書き込むことができます。
- 計算結果はAmazon S3 Tablesバケット内の標準的なIcebergテーブルとして保存され、スケジュールに従って最新に保たれます。
- Iceberg互換エンジンは結果を直接読み取れますが、他の書き込み者は変更できません。
- 本更新は、計算済みの結果を一貫して保持し、安心して共有したいお客様に適しております。

---

## まとめ

- Apache Iceberg materialized views now support system-managed write protection について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/system-managed-iceberg-materialized-views)

### 関連情報

- [Introducing Apache Iceberg materialized views in AWS Glue Data Catalog | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/introducing-apache-iceberg-materialized-views-in-aws-glue-data-catalog)
- [Simplified permissions for Amazon S3 Tables and Iceberg materialized views are now available in AWS GovCloud (US) Regions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/gdc-s3tables-simplified-permissions-in-aws-govcloud)
- [Accelerating log analytics at scale with AWS Glue and Apache Iceberg materialized views | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/accelerating-log-analytics-at-scale-with-aws-glue-and-apache-iceberg-materialized-views)
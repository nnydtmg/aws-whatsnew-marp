---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Glue Data CatalogがApache Iceberg REST Catalog API向けにOAuth認証をサポート

AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs

**What's New** | 2026-10-26T04:00:00

---

## 概要

- AWS Glue Data Catalogは、Apache Iceberg REST Catalog API向けにOAuth 2.0ベアラートークン認証をサポートいたしました。
- これにより、クエリエンジンやパートナーはAWS認証情報を配布せずにIcebergテーブルへアクセスできるようになります。

---

## 前提・背景

### これまでの課題

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signatu

---

### 関連する最近の動向

- **AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs - AWS**
  [詳細](https://aws.amazon...

---

## 変更内容・新機能

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlue Data CatalogのIcebergエンドポイントに認証できるようになりました。OAuth 2.0トークン交換（RFC 8693）により、OpenID Connect (OIDC) アイデンティティトークンを短期間有効なGlueスコープのベアラートークンへ交換し、Icebergエコシステム全体で使用されている同じ標準ベースのパターンに従ってIRCリクエストに含めることができます。アクセスは

---

## ユースケース

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlu

---

## まとめ

- AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest/)

### 関連情報

- [AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest)
- [Introducing catalog federation for Apache Iceberg tables in the AWS Glue Data Catalog](https://aws.amazon.com/blogs/big-data/introducing-catalog-federation-for-apache-iceberg-tables-in-the-aws-glue-data-catalog)
- [AWS Glue REST APIs for Apache Iceberg specifications](https://docs.aws.amazon.com/glue/latest/dg/iceberg-rest-apis.html)
- [Connecting to the Data Catalog using AWS Glue Iceberg REST endpoint](https://docs.aws.amazon.com/glue/latest/dg/connect-glu-iceberg-rest.html)
# AWS Glue Data CatalogがApache Iceberg REST Catalog API向けにOAuth認証をサポート

AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs

**カテゴリ:** What's New
**公開日:** 2026-10-26T04:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest/)

このページでは、AWS What's Newで発表された「AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Glue Data Catalogは、Apache Iceberg REST Catalog API向けにOAuth 2.0ベアラートークン認証をサポートいたしました。これにより、クエリエンジンやパートナーはAWS認証情報を配布せずにIcebergテーブルへアクセスできるようになります。

## このアップデートで何が変わったか

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlue Data CatalogのIcebergエンドポイントに認証できるようになりました。OAuth 2.0トークン交換（RFC 8693）により、OpenID Connect (OIDC) アイデンティティトークンを短期間有効なGlueスコープのベアラートークンへ交換し、Icebergエコシステム全体で使用されている同じ標準ベースのパターンに従ってIRCリクエストに含めることができます。アクセスは

## 対象ユーザー

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlu

## 活用シーン

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlu

## 詳細

AWS Glue Data Catalogは、Apache Iceberg REST Catalog (IRC) API向けにOAuth 2.0ベアラートークン認証を新たにサポートします。Apache Iceberg REST Catalog仕様ではOAuth 2.0が標準認証メカニズムとして定義されており、Apache Spark、Trino、Apache Flinkなどのクエリエンジンはこれをネイティブに実装しています。これらのエンジンおよび外部統合パートナーは、従来のAWS Signature Version 4 (SigV4) に加えて、標準のOAuth 2.0ベアラートークンでGlue Data CatalogのIcebergエンドポイントに認証できるようになりました。OAuth 2.0トークン交換（RFC 8693）により、OpenID Connect (OIDC) アイデンティティトークンを短期間有効なGlueスコープのベアラートークンへ交換し、Icebergエコシステム全体で使用されている同じ標準ベースのパターンに従ってIRCリクエストに含めることができます。アクセスは引き続きAWS IAMおよびAWS Lake Formationの権限によって管理されます。一般的なユースケースとして、サードパーティの分析プラットフォームやデータクラウドプラットフォームが、単一の一貫した認証パスを通じてGlue Data Catalog内のテーブルをクエリできるようになります。この機能は、AWS GlueおよびLake Formationが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest/)
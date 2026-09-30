---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 TablesがApache Iceberg V3の全データ型をサポート

Amazon S3 Tables now support all Apache Iceberg V3 data types

**What's New** | 2026-09-30T04:00:00

---

## 概要

- Amazon S3 TablesがApache Iceberg V3の全データ型をサポートし、地理空間データやナノ秒精度タイムスタンプをネイティブに扱えるようになりました。
- フリート追跡、資産マッピング、テレメトリ、金融ワークロードに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Apache Iceberg v3: New Features and Snowflake 2026 Guide**
  [詳細](https://atlan.com/know/snowflake/apache-iceberg-v3)

- **Spec - Apache Iceberg**
  [詳細](https://iceberg.apache.org/spec)

- **Amazon S3 Tables now support the Variant data type for Apache Iceberg V3**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-tables-variant-iceberg-v3)

---

## 変更内容・新機能

Amazon S3 TablesがApache Iceberg Version 3 (V3)仕様で定義されたgeometry、geography、unknown、ナノ秒タイムスタンプのデータ型、および列のデフォルト値をサポートするようになりました。地理空間座標やナノ秒精度のイベント時刻を文字列や整数にエンコードせずにネイティブに保存でき、データアーキテクチャを簡素化しながらストレージ効率とパフォーマンスを向上させます。本発表により、S3 TablesはV3で導入されたすべてのデータ型をサポートし、既存のVariantデータ型、deletion vectors、row lineageのサポートに加わります。geometryおよびgeography列はポイント、ライン、ポリゴンをネイティブに保存するため、フリート追跡や資産マッピングのワークロードでクエリ時に位置でフィルタリングできます。ナノ秒タイムスタンプにより、テレメトリや金融ワークロードがソース精度でイベント時刻を記録できます。列のデフォルト値は、既存行への新列追加時にバックフィル不要で値を設定します。S3 TablesはApache

---

## 効果・メリット

- Amazon S3 TablesがApache Iceberg Version 3 (V3)仕様で定義されたgeometry、geography、unknown、ナノ秒タイムスタンプのデータ型、および列のデフォルト値をサポートするようになりました。
- 地理空間座標やナノ秒精度のイベント時刻を文字列や整数にエンコードせずにネイティブに保存でき、データアーキテクチャを簡素化しながらストレージ効率とパフォーマンスを向上させます。
- 本発表により、S3 TablesはV3で導入されたすべてのデータ型をサポートし、既存のVariantデータ型、deletion vectors、row lineageのサポートに加わります。
- geometryおよびgeography列はポイント、ライン、ポリゴンをネイティブに保存するため、フリート追跡や資産マッピングのワークロードでクエリ時に位置でフィルタ

---

## まとめ

- Amazon S3 Tables now support all Apache Iceberg V3 data types について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-tables-iceberg-v3-data-types)

### 関連情報

- [Apache Iceberg v3: New Features and Snowflake 2026 Guide](https://atlan.com/know/snowflake/apache-iceberg-v3)
- [Spec - Apache Iceberg](https://iceberg.apache.org/spec)
- [Amazon S3 Tables now support the Variant data type for Apache Iceberg V3](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-tables-variant-iceberg-v3)
- [What's New in Apache Iceberg Format Version 3?](https://www.dremio.com/blog/apache-iceberg-v3)
- [Amazon S3 Tables now support all Apache Iceberg V3 data types](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-tables-iceberg-v3-data-types)
# Amazon Redshift が Iceberg テーブルの ALTER TABLE と AWS Glue Data Catalog 経由の書き込みに対応

Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via the AWS Glue Data Catalog mount

**カテゴリ:** What's New
**公開日:** 2026-05-18T16:25:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)

このページでは、AWS What's Newで発表された「Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via the AWS Glue Data Catalog mount」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Redshift は、AWS Glue Data Catalog 経由での Apache Iceberg テーブルへの直接書き込みと、ALTER TABLE DDL ステートメントによるスキーマ・パーティショニング・プロパティの変更機能をサポートするようになりました。これにより、データレイク内での Redshift 変換の管理が簡素化され、複数の Iceberg 互換エンジン間での相互運用性が保証されます。

## このアップデートで何が変わったか

- サポートされている ALTER TABLE 操作には、列の追加・削除・変更、列名の変更、デフォルト圧縮タイプの上書き、パーティションフィールドの追加・削除・置換が含まれます。
- 以前は Iceberg テーブルの構造を更新するためにテーブルとそのデータを削除する必要がありましたが、この新機能により複雑性と遅延が軽減されます。

## 対象ユーザー

- AWS Lake Formation の権限は Iceberg 書き込み操作でサポートされています。

## 詳細

- Amazon Redshift は、AWS Glue Data Catalog（awsdatacatalog）マウント経由で Apache Iceberg テーブルへの直接書き込みをサポートするようになりました。
- ALTER TABLE DDL ステートメントを使用して、Apache Iceberg テーブルのスキーマ、パーティショニング、プロパティを変更できるようになりました。
- 外部スキーマを作成することなく、Redshift の変換結果をデータレイクに直接書き込むことができます。
- サポートされている ALTER TABLE 操作には、列の追加・削除・変更、列名の変更、デフォルト圧縮タイプの上書き、パーティションフィールドの追加・削除・置換が含まれます。
- 以前は Iceberg テーブルの構造を更新するためにテーブルとそのデータを削除する必要がありましたが、この新機能により複雑性と遅延が軽減されます。
- Redshift で変更されたテーブルは、Amazon EMR や Amazon Athena を含む他の Iceberg 互換エンジンとの互換性を保ちます。
- AWS Lake Formation の権限は Iceberg 書き込み操作でサポートされています。
- この機能は Amazon Redshift が利用可能なすべての AWS リージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Redshift、Iceberg テーブルの ALTER TABLE と AWS Glue Data Catalog 経由の直接書き込みをサポート

Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via the AWS Glue Data Catalog mount

**What's New** | 2026-05-18T16:25:00

---

## 概要

- Amazon Redshift は、AWS Glue Data Catalog 経由での Apache Iceberg テーブルへの直接書き込みと、ALTER TABLE DDL ステートメントによるスキーマ・パーティショニング・プロパティの変更機能をサポートするようになりました。
- これにより、データレイク内での Redshift 変換の管理が簡素化され、複数の Iceberg 互換エンジン間での相互運用性が保証されます。

---

## 前提・背景

### これまでの課題

- 以前は Iceberg テーブルの構造を更新するためにテーブルとそのデータを削除する必要がありましたが、この新機能により複雑性と遅延が軽減されます。

---

### 関連する最近の動向

- **Amazon Redshift supports UPDATE, DELETE, MERGE for Apache Iceberg tables**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/redshift-update-delete-merge-iceberg-tables/)

- **Using Apache Iceberg tables with Amazon Redshift**
  [詳細](https://docs.aws.amazon.com/redshift/latest/dg/querying-iceberg.html)

---

## 変更内容・新機能

### ALTER TABLE のサポート

- サポートされている ALTER TABLE 操作には、列の追加・削除・変更、列名の変更、デフォルト圧縮タイプの上書き、パーティションフィールドの追加・削除・置換が含まれます。

### Iceberg への直接書き込み

- Amazon Redshift は、AWS Glue Data Catalog（awsdatacatalog）マウント経由で Apache Iceberg テーブルへの直接書き込みをサポートするようになりました。

- 外部スキーマを作成することなく、Redshift の変換結果をデータレイクに直接書き込むことができます。

---

## 効果・メリット

### 運用効率の向上

- 以前は Iceberg テーブルの構造を更新するためにテーブルとそのデータを削除する必要がありましたが、この新機能により複雑性と遅延が軽減されます。

### 相互運用性の強化

- Redshift で変更されたテーブルは、Amazon EMR や Amazon Athena を含む他の Iceberg 互換エンジンとの互換性を保ちます。

### セキュリティと管理

- AWS Lake Formation の権限は Iceberg 書き込み操作でサポートされています。

---

## ユースケース

### データレイク統合

Redshift で変換したデータを Iceberg テーブルに直接書き込み、その後 Amazon EMR や Amazon Athena で分析することが可能になります。

### テーブル進化

スキーマの変更やパーティショニングの調整をテーブルとデータの再作成なしに行えます。

---

## まとめ

### 主要ポイント

- Amazon Redshift が Iceberg テーブルへの直接書き込みをサポート
- ALTER TABLE ステートメントでスキーマとプロパティの変更が可能
- データレイク内の運用複雑性を大幅に軽減
- 複数エンジン間での互換性を維持

### 次のステップ

1. 自社のデータレイク設計への適用可能性を検討
2. AWS Glue Data Catalog の設定を確認
3. パイロットプロジェクトでの検証開始

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)

### 関連情報

- [Amazon Redshift supports UPDATE, DELETE, MERGE for Apache Iceberg tables](https://aws.amazon.com/about-aws/whats-new/2026/04/redshift-update-delete-merge-iceberg-tables/)
- [Using Apache Iceberg tables with Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/querying-iceberg.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
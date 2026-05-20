---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Redshift が Iceberg テーブルの ALTER TABLE と AWS Glue Data Catalog 経由の書き込みに対応

Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via the AWS Glue Data Catalog mount

**What's New** | 2026-05-18

---

## 概要

### 主な変更点

- **AWS Glue Data Catalog 経由での直接書き込み**: AWS Glue Data Catalog マウント経由で Apache Iceberg テーブルに直接データを書き込み可能に
- **ALTER TABLE サポート**: DDL ステートメントでスキーマ、パーティショニング、プロパティを変更可能
- **複雑性の軽減**: 従来のテーブル削除・再作成の手間を削減

---

## 前提・背景

### これまでの課題

- Iceberg テーブルの構造を更新する場合、テーブルとデータを削除して再作成する必要があった
- データレイク内での Redshift 変換管理が複雑化
- スキーマ進化がシステムの負担となっていた

### 市場の動向

- Apache Iceberg が業界標準として浸透
- マルチエンジン分析の重要性が増加
- データレイク管理のシンプル化が求められている

---

## 変更内容・新機能

### ALTER TABLE 対応操作

- **列管理**: 列の追加・削除・変更
- **列名変更**: 既存列の名前変更が可能
- **圧縮設定**: デフォルト圧縮タイプの上書き
- **パーティション操作**: パーティションフィールドの追加・削除・置換

### 書き込み機能

- **AWS Glue Data Catalog マウント**: awsdatacatalog マウント経由での直接書き込み
- **外部スキーマ不要**: 外部スキーマ作成なしで Redshift 変換結果をデータレイクに直接書き込み

---

## 効果・メリット

### 運用効率の向上

- テーブル削除・再作成の廃止により複雑性が軽減
- スキーマの段階的な進化が可能に
- ダウンタイム削減により信頼性が向上

### 相互運用性の強化

- **マルチエンジン対応**: Amazon EMR や Amazon Athena との互換性を保持
- **セキュリティ**: AWS Lake Formation の権限体系をサポート
- **全リージョン対応**: Amazon Redshift が利用可能なすべての AWS リージョンで利用可能

---

## ユースケース

### データパイプラインの最適化

```
Data Sources
    ↓
  Redshift
    ↓
  (ALTER TABLE で스키마 변경)
    ↓
 AWS Glue Data Catalog (Iceberg)
    ↓
Athena / EMR で分析
```

### エンタープライズデータレイク

- Redshift での変換結果を Iceberg で管理
- 複数ツールでの分析が容易
- スキーマ進化への柔軟な対応

---

## まとめ

### 主な利点

1. **管理の簡素化**: ALTER TABLE でスキーマを直接変更可能
2. **複雑性の削減**: テーブル再作成の廃止
3. **相互運用性**: Iceberg 互換エンジン間での一貫性を確保
4. **セキュリティ**: Lake Formation 権限との統合

### 次のステップ

- 既存 Iceberg テーブルでの ALTER TABLE 試行
- AWS Glue Data Catalog マウント経由の書き込みテスト
- パイプラインの段階的な移行

---

## 参考リソース

- **AWS What's New**: [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)
- **Amazon Redshift ドキュメント**: [Apache Iceberg テーブルの使用](https://docs.aws.amazon.com/redshift/latest/dg/querying-iceberg.html)
- **関連情報**: [Amazon Redshift supports UPDATE, DELETE, MERGE for Apache Iceberg tables](https://aws.amazon.com/about-aws/whats-new/2026/04/redshift-update-delete-merge-iceberg-tables/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
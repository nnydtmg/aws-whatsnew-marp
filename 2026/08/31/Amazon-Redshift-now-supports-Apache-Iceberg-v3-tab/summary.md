# Amazon Redshift が Apache Iceberg v3 テーブルをサポート

Amazon Redshift now supports Apache Iceberg v3 tables

**カテゴリ:** What's New
**公開日:** 2026-08-31
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-redshift-supports-apache-iceberg-v3)

このページでは、AWS What's Newで発表された「Amazon Redshift now supports Apache Iceberg v3 tables」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon RedshiftはApache Iceberg v3テーブルの読み書きを新たにサポートし、デフォルト列値、行リネージ、削除ベクトルによりデータレイク運用を効率化いたします。本機能はGravitonベースのクラスターをご利用のお客様に適しております。

## このアップデートで何が変わったか

- Amazon Redshiftは、データレイク上のApache Iceberg v3テーブルに対する読み取りおよび書き込みを新たにサポートいたします。
- 本機能では、デフォルト列値、行リネージ、および削除ベクトルがご利用いただけます。
- デフォルト列値により、値が指定されない場合に初期値を適用でき、スキーマ進化が簡素化されます。
- 行リネージにより、各行の識別子と最終更新シーケンス番号を追跡でき、増分パイプラインやCDCワークフローを構築できます。
- 削除ベクトルにより、高頻度の更新および削除ワークロードにおいて、より高速な読み取りと書き込みが可能になります。
- 本機能は、Gravitonベースのプロビジョンドクラスターおよびサーバーレスクラスターでご利用いただけます。
- 本アップデートは、データレイクでApache Icebergをご利用のAmazon Redshiftユーザーの皆様に適しております。
- 特に、スキーマ進化の簡素化、増分パイプラインやCDCの構築、高頻度の更新・削除処理を必要とされる方におすすめです。

## 対象ユーザー

- Amazon Redshiftユーザー
- データレイク構築・運用者
- スキーマ進化が必要なプロジェクト
- CDC（Change Data Capture）ワークフローが必要なシステム
- 高頻度の更新・削除処理が必要なアプリケーション

## 主な機能

### 1. デフォルト列値

- 列追加時に初期値を定義可能
- 既存行へのバックフィル処理が不要
- スキーマ進化の簡素化

### 2. 行リネージ

- 各行の識別子（`_row_id`）を追跡
- 最終更新シーケンス番号（`_last_updated_sequence_number`）を記録
- 増分パイプラインと CDC ワークフローの構築が容易

### 3. 削除ベクトル

- コンパクトな圧縮ビットマップ形式（Puffin ファイル）
- Iceberg v2 の削除ファイルと比較して最大 10 倍の高速化
- 高頻度の更新・削除ワークロードに最適

## 対応環境

- **Gravitonベースのプロビジョンドクラスター**
- **Gravitonベースのサーバーレスクラスター**

## テーブル作成・アップグレード方法

### 新規作成

```sql
CREATE TABLE <table> ... USING ICEBERG 
TABLE PROPERTIES ('format-version' = '3')
```

### 既存テーブルのアップグレード

```sql
ALTER TABLE <table> SET TABLE PROPERTIES 
('format-version' = '3')
```

## ユースケース

### 1. スキーマ進化が頻繁なデータレイク

- 新しい列の追加が容易
- バックフィル処理が不要
- ダウンストリーム処理への影響を最小化

### 2. CDC ベースのデータパイプライン

- 変更行の追跡が効率的
- 増分処理による処理時間短縮
- リアルタイムデータ同期

### 3. 高頻度の更新・削除処理

- コンプライアンス対応（記録削除）
- パフォーマンス低下を回避
- ストレージ効率の向上

## 効果・メリット

### パフォーマンス向上

- 削除ベクトルにより最大 10 倍の DML 高速化
- 読み取り・書き込みの効率化
- ストレージコストの削減

### 運用効率化

- スキーマ進化の簡素化
- CDC ワークフローの実装が容易
- データ品質の向上

### コスト削減

- 不要なデータ移動を排除
- 処理時間の短縮
- リソース使用率の最適化

## 関連するAWSアップデート

- **2026年4月**: Amazon Redshift supports UPDATE, DELETE, MERGE for Apache Iceberg tables
- **2026年8月**: Amazon Redshift now supports Apache Iceberg v3 tables

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-redshift-supports-apache-iceberg-v3)
- [Amazon Redshift ドキュメント - Apache Iceberg v3 機能](https://docs.aws.amazon.com/redshift/latest/dg/iceberg-v3-features.html)
- [Apache Iceberg 公式サイト](https://iceberg.apache.org/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Redshift で Apache Iceberg テーブルの ALTER TABLE と Glue Data Catalog 経由の書き込みが利用可能に

**発表日: 2026年5月18日**

---

## 概要

### 3つの主要な機能追加

- **Glue Data Catalog 経由の直接書き込み**: AWS Glue Data Catalog マウント経由で Apache Iceberg テーブルへの直接書き込みをサポート
- **ALTER TABLE DDL サポート**: スキーマ、パーティショニング、プロパティを直接変更可能
- **簡素化された管理**: 外部スキーマを作成することなく、Redshift の変換結果をデータレイクに直接書き込み

### サポートされる操作

- 列の追加・削除・変更
- 列名の変更
- デフォルト圧縮タイプの上書き
- パーティションフィールドの追加・削除・置換

---

## 前提・背景

### これまでの課題

- **複雑な変更プロセス**: Iceberg テーブルの構造を更新する際、テーブルとそのデータを削除する必要があった
- **管理の複雑化**: 外部スキーマの作成が必須で、ワークフローが複雑化
- **相互運用性の制限**: 複数のエンジン間での連携が限定的

### 市場動向

- Apache Iceberg は、レイク・ハウス分析の標準フォーマットとして普及
- Amazon EMR や Amazon Athena など複数のサービスで Iceberg サポートが拡大
- エンタープライズのデータレイク管理で、より柔軟な操作性が求められている

---

## 主な新機能

### 1. Glue Data Catalog 経由の直接書き込み

- AWS Glue Data Catalog（awsdatacatalog）マウント経由での Apache Iceberg テーブルへの直接書き込み
- 外部スキーマを作成することなく、Redshift の変換結果をデータレイクに直接書き込み可能
- 従来の複雑な設定が不要に

### 2. ALTER TABLE DDL ステートメント

- **スキーマ変更**: 列の追加、削除、変更を直接実行
- **パーティション管理**: パーティションフィールドの追加、削除、置換
- **テーブルプロパティ**: デフォルト圧縮タイプなどを設定

---

## 効果・メリット

### 運用効率の向上

- **テーブル削除不要**: 従来のテーブル削除・再作成プロセスが不要
- **ダウンタイム削減**: スキーマ変更時のデータ移行作業が短縮
- **管理コスト削減**: 外部スキーマ管理の負担が軽減

### マルチエンジン互換性

- Redshift で変更されたテーブルは、Amazon EMR や Amazon Athena との互換性を維持
- 複数のデータ処理エンジンでの シームレスな連携が実現

### セキュリティとガバナンス

- AWS Lake Formation の権限機構が Iceberg 書き込み操作に対応
- エンタープライズレベルのアクセス制御が可能

---

## ユースケース

### 1. データレイク内での ETL パイプライン

- Redshift から Iceberg テーブルへの変換結果を直接書き込み
- 複数のデータ処理エンジンがアクセス可能な統一フォーマット
- 運用管理が大幅に簡素化

### 2. スキーマ進化への対応

- ビジネス要件の変更に応じた列追加・削除を動的に実行
- テーブル削除なしでスキーマを更新
- データ保全性を維持しながらの段階的な拡張

### 3. エンタープライズ分析ワークフロー

- 複数チームによるデータ処理の統合
- 統一されたアクセス制御（AWS Lake Formation）
- コンプライアンス要件への対応

---

## まとめ

### 位置づけ

- Amazon Redshift の Iceberg サポートが大幅に拡張
- Redshift を中心とした統合的なデータレイク運用が実現
- マルチエンジン戦略の強化

### 次のステップ

1. 既存の Iceberg ワークフローで ALTER TABLE の活用箇所を特定
2. AWS Glue Data Catalog マウント経由の書き込みをテスト
3. Lake Formation の権限設定を確認して本番導入
4. 複数エンジン間での互換性検証

### 利用可能性

- **提供地域**: Amazon Redshift が利用可能なすべての AWS リージョン
- **対象クラスター**: すべての Redshift クラスターで利用可能

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/
- **Amazon Redshift ドキュメント**: https://docs.aws.amazon.com/redshift/
- **Apache Iceberg ドキュメント**: https://iceberg.apache.org/
- **関連情報**: https://aws.amazon.com/about-aws/whats-new/2026/04/redshift-update-delete-merge-iceberg-tables/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
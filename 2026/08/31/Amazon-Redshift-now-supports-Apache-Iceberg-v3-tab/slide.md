---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Redshift が Apache Iceberg v3 テーブルをサポート

Amazon Redshift now supports Apache Iceberg v3 tables

**発表日: 2026年8月31日**

---

## 概要

### Amazon Redshift の新機能

- **Apache Iceberg v3 テーブルの読み書きをサポート**
- データレイク上のテーブル操作が効率化
- Gravitonベースのクラスターで利用可能

### 3つの主要機能

- **デフォルト列値**: スキーマ進化の簡素化
- **行リネージ**: CDC ワークフローの構築が容易
- **削除ベクトル**: 高頻度の更新・削除処理を高速化

---

## 前提・背景

### データレイク運用の課題

- スキーマ進化時の複雑な処理
- CDC（Change Data Capture）ワークフローの実装難易度
- 高頻度の更新・削除処理のパフォーマンス低下

### Apache Iceberg v3 の登場

- オープンテーブルフォーマットとしての進化
- v2 からの大幅な機能拡張
- 業界標準として採用が加速

### Amazon Redshift の対応

- 2026年4月: UPDATE, DELETE, MERGE 操作をサポート
- 2026年8月: Apache Iceberg v3 の完全サポート開始
- Graviton ベースのクラスターで最適化

---

## 主な機能詳細

### 1. デフォルト列値

- **機能**: 列追加時に初期値を定義
- **メリット**: 既存行へのバックフィル不要
- **効果**: スキーマ進化の簡素化

### 2. 行リネージ

- **機能**: 各行の識別子と更新シーケンス番号を追跡
- **疑似カラム**: `_row_id`、`_last_updated_sequence_number`
- **効果**: 増分パイプラインと CDC ワークフローの構築

### 3. 削除ベクトル

- **形式**: コンパクトな圧縮ビットマップ（Puffin ファイル）
- **パフォーマンス**: v2 比で最大 10 倍高速化
- **用途**: 高頻度の更新・削除ワークロード

---

## 対応環境

### クラスタータイプ

- **プロビジョンドクラスター**: Graviton ベース
- **サーバーレスクラスター**: Graviton ベース

### テーブル作成・アップグレード

```sql
-- 新規作成
CREATE TABLE <table> ... USING ICEBERG 
TABLE PROPERTIES ('format-version' = '3')

-- 既存テーブルのアップグレード
ALTER TABLE <table> SET TABLE PROPERTIES 
('format-version' = '3')
```

---

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

---

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

---

## まとめ

### Amazon Redshift Apache Iceberg v3 サポートの意義

- **データレイク運用の次のステップ**
  - スキーマ進化、CDC、高頻度更新に対応
  - オープンスタンダードの採用

- **エンタープライズユースケースへの対応**
  - コンプライアンス要件への対応
  - リアルタイムデータ処理の実現

- **AWS データ戦略の強化**
  - Redshift と Iceberg の統合
  - インターオペラビリティの向上

### 次のステップ

1. 既存 Iceberg v2 テーブルの v3 アップグレード評価
2. パイロットプロジェクトでの検証
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-redshift-supports-apache-iceberg-v3
- **Amazon Redshift ドキュメント**: https://docs.aws.amazon.com/redshift/latest/dg/iceberg-v3-features.html
- **Apache Iceberg 公式**: https://iceberg.apache.org/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
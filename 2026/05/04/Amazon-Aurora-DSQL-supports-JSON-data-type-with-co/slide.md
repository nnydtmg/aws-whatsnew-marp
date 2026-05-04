---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Aurora DSQL
JSONデータ型と圧縮機能のサポート

**発表日: 2026年5月4日**

---

## 概要

### 3つの主要なアップデート

- **PostgreSQL JSON型サポート**: PostgreSQLの標準JSONデータ型に完全対応
- **デフォルト圧縮機能**: 大規模JSONペイロードを効率的に保存
- **PostgreSQL互換性向上**: 修正なしでPostgreSQLツール・コードを使用可能

### 対象ユーザー

- PostgreSQLの既存資産をAWSに移行したい開発者
- 半構造化データを効率的に管理したい企業
- ストレージコストを最適化したい組織

---

## 前提・背景

### 市場の課題

- APIペイロード、設定オブジェクト、イベントログなどの**半構造化データが増加**
- 従来のリレーショナルデータベースでの保存が課題
- ストレージコストと管理の複雑性が増大

### Aurora DSQL の進化

- 2025年11月: サービス開始
- 2026年2月: Identity列、Sequence、NUMERIC型インデックスサポート
- 2026年5月: **JSON型サポート追加** ← 本アップデート

---

## 主な機能

### 1. PostgreSQL JSON データ型対応

- `JSON` データ型を完全サポート
- テーブル作成・変更時に使用可能
- 既存のPostgreSQLコード修正不要

### 2. デフォルト圧縮機能

- PostgreSQL compression標準機能を有効化
- 大規模JSONペイロードの**効率的な保存**
- ストレージスペース削減

### 3. リレーショナル + 半構造化データ統合

- 同一テーブルにリレーショナルと半構造化データを混在
- 柔軟なスキーマ設計が可能

---

## 利用例

### ユースケース

<div class="columns">
<div>

#### API レスポンス管理

```sql
CREATE TABLE api_logs (
  id INT,
  endpoint VARCHAR(255),
  response JSON,
  timestamp TIMESTAMP
);
```

</div>
<div>

#### イベントログ保存

```sql
CREATE TABLE events (
  id INT,
  user_id INT,
  event_data JSON,
  created_at TIMESTAMP
);
```

</div>
</div>

---

## 効果・メリット

### 開発効率の向上

- **コード修正が不要**: PostgreSQL資産をそのまま活用
- **ツール互換性**: PostgreSQL対応ツール・ライブラリが使用可能
- **学習コスト削減**: PostgreSQL知識で即座に対応

### 運用効率の向上

- **ストレージコスト削減**: 圧縮機能により**30~50%のコスト削減**見込み
- **スケーラビリティ**: 効率的なデータ保存で大規模データセット対応
- **Free Tier対応**: 初期段階での検証が無料

### ビジネス価値

- PostgreSQL → Aurora DSQLへの**スムーズな移行**が可能
- 既存投資保護による**リスク低減**
- 統合データ管理による**運用負荷削減**

---

## ユースケース

### 1. IoT センサーデータ

半構造化センサーデータをJSONで保存しながら、メタデータはリレーショナル形式で管理

### 2. ログ分析プラットフォーム

アプリケーションログ（JSON形式）とユーザー情報（リレーショナル）の統合保存

### 3. マイクロサービス間通信

APIペイロード（JSON）を歴史的に記録しながら、整合性チェックはSQL WHERE句で実施

---

## まとめ

### Amazon Aurora DSQL の強み

- **PostgreSQL互換性**: 既存資産を活用可能
- **コスト効率**: 圧縮機能によるストレージ削減
- **柔軟なスキーマ**: リレーショナル + 半構造化データの融合

### 次のステップ

1. **検証**: AWS Free Tierで無料テスト
2. **パイロット**: 既存PostgreSQL環境との互換性確認
3. **本番展開**: 段階的な移行計画実施

### 対応リージョン

- 詳細は [AWS Region table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) を参照

---

## 参考リソース

- **本記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/aurora-dsql-json-support/
- **Aurora DSQL ドキュメント**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/
- **関連: Identity列・Sequence対応**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-aurora-dsql-adds-identity-columns-sequence/
- **関連: NUMERIC型インデックス**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-aurora-dsql-indexes-numeric-data-type/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
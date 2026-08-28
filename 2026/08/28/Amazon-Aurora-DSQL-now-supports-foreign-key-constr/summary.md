# Amazon Aurora DSQLで外部キー制約がサポート

Amazon Aurora DSQL now supports foreign key constraints

**カテゴリ:** What's New
**公開日:** 2026-08-27T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-foreign-key-constraints/)

このページでは、AWS What's Newで発表された「Amazon Aurora DSQL now supports foreign key constraints」の内容を日本語で要約しています。

---

## 要約

Amazon Aurora DSQLが外部キー制約機能をサポートするようになり、テーブル間の参照整合性をより厳密に管理できるようになりました。この機能は参照行の削除・更新時の動作を複数のオプションから選択でき、すべてのAWSリージョンで利用可能です。

---

## このアップデートで何が変わったか

### 主な変更点

1. **外部キー制約機能の追加**
   - Amazon Aurora DSQLが FOREIGN KEY 制約をサポートするようになりました
   - テーブル間の参照関係を DB 層で厳密に定義・管理可能に

2. **新規・既存テーブルへの対応**
   - 新規作成するテーブルに FOREIGN KEY 制約を定義可能
   - 既存テーブルに後から FOREIGN KEY 制約を追加可能

3. **複数の削除・更新オプション**
   - NO ACTION: 親行参照中は親行削除を拒否
   - RESTRICT: NO ACTION と同等（SQLスタンダード準拠）
   - CASCADE: 親行削除時に子行も自動削除
   - SET NULL: 親行削除時に子行の外部キーをNULLに
   - SET DEFAULT: 親行削除時に子行の外部キーをデフォルト値に

4. **全リージョン対応**
   - Aurora DSQL が利用可能なすべてのAWSリージョンで即時利用可能

---

## Aurora DSQL について

### Aurora DSQL の特徴

- **Postgres互換**: PostgreSQL 互換性を持つサーバーレス分散SQLデータベース
- **サーバーレス**: インフラ管理不要で、自動スケーリングに対応
- **マルチリージョン**: アクティブ・アクティブなマルチリージョン可用性を提供
- **分散トランザクション**: 複数リージョン間での強い一貫性を自動保証

---

## 使用例

### FOREIGN KEY 制約の基本例

```sql
CREATE TABLE customers (
  customer_id UUID PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE addresses (
  address_id UUID PRIMARY KEY,
  customer_id UUID NOT NULL,
  address VARCHAR NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);
```

### 効果

- 参照されていない customer_id を addresses に挿入しようとすると拒否
- 顧客が削除されると、その顧客のアドレスも自動削除（CASCADE）

---

## ユースケース

### 1. Eコマース・Order Management System

- 顧客テーブル → 注文テーブル → 注文明細テーブルの参照関係
- 顧客削除時に紐付く注文を自動削除または参照をクリア
- データの一貫性を保証

### 2. SaaS 型マルチテナント・Account Management

- テナント削除時に関連ユーザー・プロジェクトを自動削除
- またはユーザー削除時に個人設定は削除しつつ監査ログは保持

### 3. データウェアハウス・MDM (Master Data Management)

- エンティティマスターの一元管理
- 参照整合性により、マスターとトランザクションの乖離を防止
- 高品質なデータ環境を実現

---

## メリット

### データ品質の向上

✅ DB層での参照整合性保証  
✅ 不正なデータ挿入を根本から防止  
✅ 参照整合性に関するバグを事前防止  

### 開発・運用効率化

✅ アプリケーション層の複雑な参照チェックロジックが不要に  
✅ PostgreSQL との互換性が向上し、マイグレーションが容易に  
✅ マルチリージョン環境でも参照整合性を自動管理  

---

## Aurora DSQL の制限事項

本アップデート後も以下の制限は残っています：

- **トランザクション当たりの修正行数**: 最大 3,000行
- **トランザクション内の DDL**: 1ステートメントのみ
- **分離レベル**: Repeatable Read（Serializable 未サポート）

---

## 対応企業向けガイドライン

### 導入検討のチェックリスト

□ マルチリージョン環境での高可用性が必要か  
□ スケーラブルなサーバーレスDBが必要か  
□ PostgreSQL の互換性を活かしたいか  
□ 参照整合性を DB層で管理したいか  

上記に複数当てはまれば、Aurora DSQL への移行を検討する価値あり。

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-foreign-key-constraints/
- **Amazon Aurora DSQL ドキュメント**: https://docs.aws.amazon.com/aurora-dsql/
- **PostgreSQL FOREIGN KEY**: https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-REFERENCES
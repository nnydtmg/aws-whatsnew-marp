---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora DSQLで外部キー制約がサポート

Postgres互換のサーバーレス分散SQLデータベースが参照整合性機能を実装

**発表日: 2026年8月27日**

---

## 概要

### Amazon Aurora DSQL が外部キー制約をサポート

- **参照整合性の実装**: 従来の制限を克服し、テーブル間の参照関係を厳密に管理
- **複数の削除・更新動作**: NO ACTION、RESTRICT、CASCADE、SET NULL、SET DEFAULT から選択可能
- **新旧テーブルに対応**: 新規作成テーブルだけでなく、既存テーブルへの制約追加も可能
- **全リージョンで利用**: Aurora DSQL が利用可能なすべてのAWSリージョンで即時利用可能

---

## 前提・背景

### Aurora DSQL の特徴

- **Postgres互換のサーバーレス分散SQL DB**: インフラ管理なしに自動スケーリング
- **マルチリージョン対応**: アクティブ・アクティブな複数リージョン可用性を実現
- **分散トランザクション**: 複数リージョン間での強い一貫性を保証

### 開発者の課題

- 従来: 外部キー制約がなく、アプリケーション層での参照整合性管理が必須
- 解決: DB層での参照整合性保証により、データ品質とアプリ開発の効率化を両立

---

## 主な機能・改善

### 1. FOREIGN KEY 制約の実装

```sql
CREATE TABLE customers (
  customer_id UUID PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE addresses (
  address_id UUID PRIMARY KEY,
  customer_id UUID NOT NULL,
  address VARCHAR NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

### 2. 参照行削除・更新時の処理オプション

| オプション | 動作 | 使用例 |
|----------|------|--------|
| **NO ACTION** | 親行参照中は親行削除を拒否 | 親行削除保護 |
| **RESTRICT** | NO ACTION と同等（SQLスタンダード準拠） | 標準的な参照保護 |
| **CASCADE** | 親行削除時に子行も自動削除 | クリーンアップ自動化 |
| **SET NULL** | 親行削除時に子行の外部キーをNULLに | ソフト削除パターン |
| **SET DEFAULT** | 親行削除時に子行の外部キーをデフォルト値に | フォールバック値設定 |

---

## 効果・メリット

### データ品質の向上

- **DB層での整合性保証**: 不正なデータ挿入を根本から防止
- **アプリケーション層の簡素化**: 複雑な参照チェックロジックが不要に
- **バグ減少**: 参照整合性に関する潜在的なバグを事前に防止

### 開発・運用効率

- **PostgreSQL互換性向上**: 既存PostgreSQL のベストプラクティスがそのまま適用可能
- **マイグレーション容易**: PostgreSQL からの移行時に制約定義の変更が不要
- **スケーラビリティ**: マルチリージョン環境でも参照整合性を自動管理

---

## ユースケース

### 1. Eコマース・Order Management System

```
顧客テーブル ←→ 注文テーブル ←→ 注文明細テーブル
     ↓
   アドレステーブル
```

- 顧客削除時に紐付く注文を自動削除（CASCADE）
- または注文は保持しつつ顧客参照をクリア（SET NULL）

### 2. SaaS 型マルチテナント・Account Management

- **テナント削除**: 関連するユーザー、プロジェクトを自動削除
- **ユーザー削除**: 個人設定、API キーは削除しつつ監査ログは保持

### 3. データウェアハウス・MDM(Master Data Management)

- エンティティマスターの一元管理
- 参照整合性により、マスターとトランザクションの乖離を防止

---

## Aurora DSQL と PostgreSQL 互換性

### 改善点

- **制約機能**: 今回のアップデートで外部キー制約を新たにサポート
- **段階的な PostgreSQL 互換化**: 継続的に PostgreSQL 互換性を強化中
- 2026年: 複数回のリージョン拡張・機能追加を実施

### 残る制限事項

- トランザクション当たりの修正行数制限（3,000行）
- トランザクション内の DDL 制限（1ステートメント）
- シリアライザブル分離レベルは未サポート

---

## まとめ

### Amazon Aurora DSQL の位置づけ

- **Postgres互換のサーバーレス分散SQL DB**
- **今回**: 参照整合性管理機能を追加実装
- **メリット**: DB層での参照整合性保証 + アプリ開発効率化

### 推奨される使用シーン

✅ マルチリージョン環境での高可用性が必要  
✅ スケーラブルなサーバーレスDB が欲しい  
✅ PostgreSQL 互換性を活かしたい  
✅ 参照整合性を DB 層で厳密に管理したい  

### 次のステップ

1. 自社システムの参照関係を可視化
2. 外部キー制約の導入箇所を特定
3. パイロットプロジェクトで検証開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-foreign-key-constraints/
- **Amazon Aurora DSQL User Guide**: https://docs.aws.amazon.com/aurora-dsql/
- **PostgreSQL FOREIGN KEY ドキュメント**: https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-REFERENCES

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
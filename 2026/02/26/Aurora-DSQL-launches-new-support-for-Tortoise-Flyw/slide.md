---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Aurora DSQL
Tortoise・Flyway・Prisma統合サポート開始

**発表日: 2026年2月25日**

---

## 概要

### Aurora DSQLの新たなORM統合

- **Tortoise（Python ORM）**: Pythonアダプタをリリース
- **Flyway（スキーマ管理）**: Aurora DSQL方言をリリース
- **Prisma（Node.js ORM）**: CLI統合ツールをリリース

### 主な効果

- IAM認証を自動処理
- Aurora DSQL互換性要件を自動化
- デベロッパーの開発生産性向上

---

## 前提・背景

### データベース開発の課題

- **認証の複雑性**: IAM認証の実装コストが高い
- **互換性管理**: 分散データベースの互換性要件の処理が煩雑
- **スキーマ管理**: マイグレーションツールの調整が必要

### Aurora DSQLの進化

- 分散SQL データベースとして急速に普及
- 開発者フレンドリーな機能拡張を継続
- エコシステムの整備が重要

---

## 主な機能・1: Tortoise ORM用アダプタ

### Tortoise用のアダプタの特徴

- **Pythonデベロッパー向け**: カスタム認証コード不要
- **ドライバ対応**:
  - asyncpg ドライバ対応
  - psycopg ドライバ対応
- **IAM自動生成**: Aurora DSQL Connector for Pythonと統合
- **マイグレーション対応**: Rich Migrations互換パッチ搭載

### 使用メリット

- Tortoiseの標準機能をそのまま活用
- IAMトークンの自動生成で実装工数削減
- 既存プロジェクトへの統合が容易

---

## 主な機能・2: Flyway方言

### Flyway方言の特徴

- **分散アーキテクチャ対応**: Aurora DSQLの分散設計に最適化
- **IAM認証自動化**: IAMベースの認証を自動処理
- **互換性処理**: Aurora DSQL固有の動作を透過的に処理

### 開発フロー簡素化

1. スキーマを定義
2. Flyway方言を指定
3. マイグレーション実行
4. Aurora DSQLが自動適応

---

## 主な機能・3: Prisma CLI統合

### Prisma CLI ツールの機能

- **互換性検証**: Prismaスキーマの Aurora DSQL互換性チェック
- **マイグレーション生成**: Aurora DSQL互換のマイグレーション自動生成
- **開発効率化**: Node.jsデベロッパー向けの統合ツール

### ワークフロー

```
Prismaスキーマ定義
        ↓
Aurora DSQL互換性チェック
        ↓
互換マイグレーション生成
        ↓
本番環境デプロイ
```

---

## 効果・メリット

### デベロッパーの生産性向上

- **実装コスト削減**: IAM認証コード記述不要
- **検証自動化**: 互換性チェックを自動化
- **エラー減少**: 互換性問題の早期検出

### 運用効率化

- **統一された開発体験**: 好みのORMで統一開発
- **品質向上**: 自動検証で本番問題を削減
- **保守性向上**: 互換性が透過的に処理される

---

## ユースケース

### ユースケース1: Pythonアプリケーション

新規開発プロジェクトでTortoiseを採用
→ IAM認証が自動で組み込まれる
→ セキュアなアプリケーションを迅速に構築

### ユースケース2: スキーマ管理

既存SQLサーバーからAurora DSQLへマイグレーション
→ Flyway方言で分散構成に自動適応
→ リスク低減でスムーズに移行

### ユースケース3: Node.js開発

Prismaを使ったNext.jsアプリケーション
→ CLI統合で互換性を検証
→ Aurora DSQLへの最適化を自動実行

---

## まとめ

### Aurora DSQLの三大統合

| フレームワーク | 機能 | 対象言語 |
|-------------|------|--------|
| Tortoise | ORM用アダプタ | Python |
| Flyway | スキーマ管理方言 | SQL |
| Prisma | CLI統合ツール | Node.js |

### 推奨アクション

1. **評価開始**: 対応フレームワークの確認
2. **パイロット実施**: 小規模プロジェクトで検証
3. **本番展開**: 成功事例に基づいて段階的導入

### 開始方法

- AWS Free Tierで無料開始可能
- GitHubリポジトリで詳細ドキュメント確認
- 開発チームでの導入検討

---

## 参考リソース

### 公式ドキュメント

- **Aurora DSQL What's New記事**: https://aws.amazon.com/about-aws/whats-new/2026/02/aurora-dsql-launches-tortoise-flyway-prisma/

### GitHub リポジトリ

- **Tortoise ORM**: https://github.com/awslabs/aurora-dsql-orms/tree/main/python/tortoise-orm
- **Flyway方言**: https://github.com/awslabs/aurora-dsql-tools/tree/main/flyway
- **Prisma統合**: https://github.com/awslabs/aurora-dsql-orms/tree/main/node/prisma
- **ORM統合レポジトリ**: https://github.com/awslabs/aurora-dsql-orms

### 関連情報

- **Aurora DSQL公式ページ**: https://aws.amazon.com/rds/aurora/dsql/
- **AWS Free Tier**: https://aws.amazon.com/free/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
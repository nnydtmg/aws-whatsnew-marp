# Aurora DSQL launches new support for Tortoise, Flyway, and Prisma

**カテゴリ:** What's New
**公開日:** 2026-02-25T18:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aurora-dsql-launches-tortoise-flyway-prisma/](https://aws.amazon.com/about-aws/whats-new/2026/02/aurora-dsql-launches-tortoise-flyway-prisma/)

---

## 要約

Aurora DSQLは、Python、Node.js、およびスキーマ管理ツール向けの新しいORM統合（Tortoise、Prisma、Flyway）をリリースしました。これらの統合により、デベロッパーは好みのフレームワークを使用しながら、IAM認証とAurora DSQL互換性要件を自動的に処理できるようになります。

## 詳細

### リリース内容

- Aurora DSQLが、Tortoise、Flyway、およびPrismaという人気のあるORMおよびデータベース移行ツール向けの新しい統合をリリースしたことが発表されました。

### Tortoise ORM用アダプタ

- Tortoise用のアダプタは、Pythonデベロッパーがカスタム認証コードを記述することなくTortoiseを使用してアプリケーションを構築できるようにします。

- このアダプタはasyncpgおよびpsycopgドライバの両方をサポートし、Aurora DSQL Connector for Pythonと統合されており、自動的なIAMトークン生成を実現します。

### Flyway方言

- Flyway方言は、IAMベースの認証などのAurora DSQL固有の動作を自動的に処理することで、Flyweayを分散アーキテクチャに適応させます。

### Prisma CLI統合

- Prisma CLIツールは、Node.jsデベロッパーがPrismaスキーマのAurora DSQL互換性を検証し、Aurora DSQL互換の移行を生成するのに役立ちます。

### 共通のメリット

- これらの統合により、デベロッパーは好みのフレームワークをAurora DSQLで使用しながら、IAM認証とAurora DSQL固有の互換性要件を自動的に処理できます。

### 開始方法

- AWS Free Tierを使用してAurora DSQLを無料で開始できます。
- GitHub リポジトリから各統合ツール、ドキュメント、サンプルコードにアクセス可能です。

## 対象フレームワーク

| フレームワーク | 言語 | 機能 | GitHub リポジトリ |
|-------------|------|------|------------------|
| Tortoise | Python | ORM用アダプタ | https://github.com/awslabs/aurora-dsql-orms/tree/main/python/tortoise-orm |
| Flyway | SQL | スキーマ管理方言 | https://github.com/awslabs/aurora-dsql-tools/tree/main/flyway |
| Prisma | Node.js | CLI統合ツール | https://github.com/awslabs/aurora-dsql-orms/tree/main/node/prisma |

## リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/aurora-dsql-launches-tortoise-flyway-prisma/
- **Aurora DSQL 公式ページ**: https://aws.amazon.com/rds/aurora/dsql/
- **ORM統合 GitHub レポジトリ**: https://github.com/awslabs/aurora-dsql-orms
- **Aurora DSQL Tools GitHub**: https://github.com/awslabs/aurora-dsql-tools
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora MySQL が Kiro Powers に対応

Amazon Aurora MySQL now supports integration with Kiro Powers

**What's New** | 2026-05-27

---

## 概要

- Amazon Aurora MySQL が Kiro Powers と統合され、AI エージェント支援により開発者は自然言語対話を通じてデータベース操作をより簡単に実行できるようになりました。
- このアップデートは、複雑なデータベース構文を簡素化し、Aurora MySQL のベストプラクティスに基づいた開発を加速させたい開発者や組織に特に有益です。

---

## 前提・背景

### 開発の課題

- データベース構文の複雑性による開発効率の低下
- Aurora MySQL のベストプラクティスの習熟に時間がかかる
- スキーマ設計と最適化に関する専門知識の不足

### AI エージェントの進化

- Model Context Protocol (MCP) による AI エージェント連携の標準化
- 検証済みの Kiro Powers プラットフォームの登場
- エンタープライズ開発での AI 支援の需要増加

---

## 変更内容・新機能

### 主要な統合機能

- **AI エージェント連携**: 自然言語対話を通じたデータベース操作
- **データプレーン操作**: クエリ実行、テーブル作成、スキーマ管理
- **コントロールプレーン操作**: クラスター作成と管理

### タスク固有のガイダンス

- Aurora MySQL Serverless スケーリング
- RDS MySQL から Aurora MySQL への移行支援
- レプリケーション構成のベストプラクティス

### デプロイメント

- Kiro IDE と Kiro ウェブページからのワンクリックインストール
- Aurora MySQL が利用可能なすべての AWS リージョンに対応

---

## 効果・メリット

### 開発効率の向上

- **構文の簡素化**: 複雑なデータベース構文の自動生成
- **学習コストの削減**: AI がベストプラクティスをガイド
- **開発速度の加速**: アプリケーション構築の迅速化

### 品質とセキュリティ

- **ベストプラクティス実装**: Aurora MySQL の推奨構成を自動適用
- **エラー削減**: 会話型コマンドによる入力ミス防止

---

## ユースケース

### 新規アプリケーション開発

- 迅速にデータベース層を構築したい開発チーム
- Aurora MySQL の最適な設定を適用したい組織

### データベース移行

- RDS MySQL から Aurora MySQL へのシームレスな移行
- レプリケーション構成の簡素化

### 既存環境の拡張

- Aurora MySQL Serverless 環境の構築と管理
- 複数リージョンでの一貫性のある構成

---

## まとめ

### 主要ポイント

- Amazon Aurora MySQL と Kiro Powers の統合が実現
- AI エージェント支援により開発効率が大幅に向上
- ベストプラクティスに基づいた自動ガイダンス

### 次のステップ

1. Kiro IDE または Kiro ウェブページで Aurora MySQL Power をインストール
2. パイロットプロジェクトで検証開始
3. 本番環境での段階的な導入

---

## 参考URL

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-mysql-kiro-powers/
- **Aurora MySQL ドキュメント**: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.html
- **Kiro Powers**: https://kiro.dev/

### 関連情報

- [Amazon Aurora DSQL now integrates with Kiro powers and AI agent skills](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-aurora-dsql-integrates-with-kiro-powers-and-agent-skills)
- [Guide your Amazon Aurora MySQL migration with Kiro powers](https://aws.amazon.com/blogs/database/guide-your-amazon-aurora-mysql-migration-with-kiro-powers)
- [Amazon Aurora PostgreSQL now supports integration with Kiro powers](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-aurora-postgresql-integration-kiro-powers)
- [Introducing Amazon Aurora powers for Kiro](https://aws.amazon.com/blogs/database/introducing-amazon-aurora-powers-for-kiro)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
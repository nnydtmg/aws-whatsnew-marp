---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda コンソールのコーディングエージェント向けワンクリックセットアップ

**発表日: 2026年7月14日**

---

## 概要

### AWS Lambda コンソールの新機能

- ワンクリックセットアッププロンプトが追加されました
- コーディングエージェントの構成を自動化
- AWS Serverless スキルと Serverless MCP サーバーを自動構成
- Lambda 開発を効率化

---

## 前提・背景

### 開発者の課題

- コーディングエージェントのセットアップが複雑
- 複数のドキュメントページを参照する必要
- AWS 認証の設定に手間がかかる
- セットアップにおいて多くの段階を踏む必要がある

### 市場動向

- AI コーディングアシスタントの利用が急速に増加
- Agent Plugin for AWS Serverless により AI 支援開発が加速
- Serverless MCP Server により エージェント開発がさらに容易化

---

## 主な機能

### 1. ワンクリックセットアップ

- AWS Lambda コンソールから直接セットアップ可能
- コーディングエージェント用のプロンプトが提供
- 複数のドキュメント参照が不要

### 2. 自動構成

- **AWS Serverless スキル**: 自動インストール
- **Serverless MCP サーバー**: 自動インストール
- サーバーレスのベストプラクティスが初期段階から組み込まれる

### 3. 利用可能なエージェント

- Claude Code
- Kiro
- Cursor
- GitHub Copilot
- Codex
- Devin Desktop
- OpenCode

---

## セットアップの利用可能シーン

### Lambda コンソール内のすべての段階で利用可能

- **入門段階**: 初心者向けガイダンスと共にセットアップ
- **機能探索段階**: 特定の機能を活用する際のセットアップ
- **初回関数作成**: 最初の Lambda 関数作成時のセットアップ

### セットアップ後の効果

- エージェントがサーバーレスのベストプラクティスに準拠
- Lambda 関数の構築、テスト、デプロイが効率化
- AWS 認証がローカルに構成されていない場合も対応

---

## 対象ユーザー

### 適用対象

- **Lambda 関数をコーディングエージェントで開発**
  - 構築、テスト、デプロイのすべての段階で活用

- **複数のコーディングエージェント使用**
  - Claude Code、Cursor、GitHub Copilot など多くのツールに対応

- **セットアップの簡素化が必要**
  - 複数のドキュメント参照が不要
  - 一度のセットアップで完結

- **AWS 認証が未構成の開発者**
  - ローカルに AWS 認証がない場合もサポート

---

## まとめ

### このアップデートのメリット

- **セットアップの簡素化**: ワンクリックで完全な環境構築が可能
- **学習コストの低減**: 複数のドキュメントを参照する必要がない
- **開発効率の向上**: エージェントとベストプラクティスが統合
- **広い互換性**: 主要なコーディングエージェントをサポート

### 次のステップ

1. AWS Lambda コンソールでセットアップを確認
2. お使いのコーディングエージェントでセットアップを実行
3. ワンクリックセットアップでコーディング開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-prompt-coding-agents/
- **Agent Plugin for AWS Serverless**: https://aws.amazon.com/about-aws/whats-new/2026/03/agent-plugin-aws-serverless
- **AWS Lambda Agent Setup Guide**: https://docs.aws.amazon.com/lambda/latest/dg/agent-setup-guide.html
- **Serverless MCP Information**: https://www.serverless.com/blog/introducing-the-serverless-mcp

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
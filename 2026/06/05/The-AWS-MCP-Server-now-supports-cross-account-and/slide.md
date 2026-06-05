---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS MCP Serverがクロスアカウント・クロスロールアクセスに対応

The AWS MCP Server now supports cross-account and cross-role access

**What's New** | 2026-06-05T07:00:00

---

## 概要

- AWS MCP Server が複数の AWS アカウントおよび IAM ロール間でのシームレスなクロスアカウント・クロスロールアクセスに対応するようになり、AI コーディングエージェントがセッション再起動なしに複数のアカウント間を効率的に切り替えることが可能になりました。
- このアップデートは、マルチアカウント環境で複数のサービスを管理する DevOps エンジニアおよびアプリケーション開発者にとって特に有用です。

---

## 前提・背景

### これまでの課題

- 従来は、プロファイルの切り替えのたびに AI コーディングセッションを停止し、ローカル AWS 認証情報を更新し、MCP サーバーを再起動する必要がありました。

---

### 関連する最近の動向

- **cloudwatch-mcp-server: Support for cross-account access · Issue #1309 · awslabs/mcp · GitHub**
  [詳細](https://github.com/awslabs/mcp/issues/1309)

- **Streamlining Multi-Account AWS Operations with Amazon Q CLI and MCP | 15 min read**
  [詳細](https://medium.com/@prasannanattuthurai/streamlining-multi-account-aws-operations-with-amazon-q-cli-and-mcp-436f7dc8cc61)

---

## 変更内容・新機能

- 従来は、プロファイルの切り替えのたびに AI コーディングセッションを停止し、ローカル AWS 認証情報を更新し、MCP サーバーを再起動する必要がありました。

- 新機能では、各コマンドでプロファイルを指定することにより、ユーザーはアカウントとロール間をシームレスに切り替えることができます。

---

## まとめ

- The AWS MCP Server now supports cross-account and cross-role access について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-mcp-server/)

### 関連情報

- [cloudwatch-mcp-server: Support for cross-account access · Issue #1309 · awslabs/mcp · GitHub](https://github.com/awslabs/mcp/issues/1309)
- [Streamlining Multi-Account AWS Operations with Amazon Q CLI and MCP | 15 min read](https://medium.com/@prasannanattuthurai/streamlining-multi-account-aws-operations-with-amazon-q-cli-and-mcp-436f7dc8cc61)
- [Understanding IAM for Managed AWS MCP Servers](https://aws.amazon.com/blogs/security/understanding-iam-for-managed-aws-mcp-servers)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon WorkSpacesがAIエージェントのOAuth接続管理を簡素化

Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops with less infrastructure to operate and manage

**What's New** | 2026-10-20T17:00:00

---

## 概要

- WorkSpaces for AIエージェントがマネージドMCPサービスとして認証と接続を処理し、カスタムコード不要でクラウドデスクトップへ接続できるようになりました。
- 本アップデートは、AIエージェントの安全なデスクトップアクセスと運用簡素化を求める企業に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops with less infrastructure to operate and manage - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/workspaces-ai-agents-oauth-connection-management)

- **OAuth support for the AWS MCP Server - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server)

- **Wo...

---

## 変更内容・新機能

- 新機能は、WorkSpaces for AIエージェントが認証とデスクトップ接続をマネージドMCPサービスの一部として処理することです。
- カスタムコードを記述せずに、MCP対応クライアントからガバナンスされたクラウドデスクトップへ接続できます。
- 既存のAWS認証情報をOAuth 2.0経由でセッションを作成でき、サービスが接続ライフサイクルを管理いたします。
- エージェントはカタログMCPツールでアプリケーションを一覧表示・起動・切り替えできます。
- セッション状態の照会とリアルタイム監視用リンクの生成により、可視性と監査性を確保できます。
- 南米（サンパウロ）、欧州（ミラノ）、欧州（スペイン）、アジアパシフィック（マレーシア）の追加リージョンでご利用いただけます。
- 本アップデートは、AIエージェントをエンタープライズのクラウドデスクトップに安全に接続したい企業に適しております。
- ストリーミングURLの手動管理を削減し、インフラ運用を簡素化したい組織にとって有益です。

---

## 効果・メリット

- - 新機能は、WorkSpaces for AIエージェントが認証とデスクトップ接続をマネージドMCPサービスの一部として処理することです。
- - カスタムコードを記述せずに、MCP対応クライアントからガバナンスされたクラウドデスクトップへ接続できます。
- - 既存のAWS認証情報をOAuth 2.0経由でセッションを作成でき、サービスが接続ライフサイクルを管理いたします。

---

## まとめ

- Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops with less infrastructure to operate and manage について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/workspaces-ai-agents-oauth-connection-management)

### 関連情報

- [Amazon WorkSpaces simplifies secure AI agent access to enterprise cloud desktops with less infrastructure to operate and manage - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/workspaces-ai-agents-oauth-connection-management)
- [OAuth support for the AWS MCP Server - AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server)
- [WorkSpaces Applications MCP server - Amazon WorkSpaces Applications](https://docs.aws.amazon.com/appstream2/latest/developerguide/agent-access-mcp-server.html)
- [Amazon WorkSpaces Now Lets AI Agents Operate Desktop Applications](https://aws.amazon.com/blogs/desktop-and-application-streaming/amazon-workspaces-now-lets-ai-agents-operate-desktop-applications)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS MCP ServerがOAuth 2.0に対応

OAuth support for the AWS MCP Server

**What's New** | 2026-07-09T23:03:00

---

## 概要

- AWS MCP Serverに対するOAuth 2.0サポートが実装され、AIエージェントが業界標準のOAuthを使用してAWS Sign-Inで直接接続できるようになりました。
- 既存のIAM権限とガバナンスコントロールを活用しながら、対話的および非対話型の認可方法が提供されます。

---

## 前提・背景

### 関連する最近の動向

- **AWS MCP Server Reaches GA with Full API Coverage and IAM-Based Governance - InfoQ**
  [詳細](https://www.infoq.com/news/2026/05/aws-mcp-ga)

- **How to use OAuth 2.0 with MCP Authorization spec - LinkedIn**
  [詳細](https://www.linkedin.com/posts/ceposta_mcp-oauth-openid-activity-7350506057510629377-ayPb)

- **GitHub - empires-security/mcp-oauth2-aws-cognito: MCP Server Authorizatio...

---

## 変更内容・新機能

- AWS MCP Serverに対するOAuth対応が新たに追加されました。

- 追加の認証ソフトウェアを必要とせず、既存のAWS ID、サインイン方法、IAM権限、ガバナンスコントロールが引き続き適用されます。

---

## ユースケース

- このアップデートは、既存のセキュリティインフラストラクチャを活用しながらAIエージェントの統合を簡素化したい組織に適しています。

---

## まとめ

- OAuth support for the AWS MCP Server について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server/)

### 関連情報

- [AWS MCP Server Reaches GA with Full API Coverage and IAM-Based Governance - InfoQ](https://www.infoq.com/news/2026/05/aws-mcp-ga)
- [How to use OAuth 2.0 with MCP Authorization spec - LinkedIn](https://www.linkedin.com/posts/ceposta_mcp-oauth-openid-activity-7350506057510629377-ayPb)
- [GitHub - empires-security/mcp-oauth2-aws-cognito: MCP Server Authorization Example with AWS Cognito](https://github.com/empires-security/mcp-oauth2-aws-cognito)
- [Connecting MCP servers to Amazon Bedrock AgentCore Gateway using Authorization Code flow](https://aws.amazon.com/blogs/machine-learning/connecting-mcp-servers-to-amazon-bedrock-agentcore-gateway-using-authorization-code-flow)
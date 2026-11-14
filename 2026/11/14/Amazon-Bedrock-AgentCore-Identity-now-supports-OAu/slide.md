---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore IdentityがOAuth 2.0ディスカバリーURLに対応

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs

**What's New** | 2026-11-13T08:00:00

---

## 概要

- Amazon Bedrock AgentCore IdentityはOAuth 2.0ディスカバリーURLに対応し、OIDCを使用しない認可サーバーも設定できるようになりました。
- 本機能は対象全リージョンで追加料金なしでご利用いただけます。

---

## 前提・背景

### これまでの課題

Previously, AgentCore Identity accepted only OIDC discovery URLs. Authorization servers that implement OAuth 2.0 without OIDC publish their metadata at a different well-known path and could not be used with AgentCore. With this launch, you can use ei

---

### 関連する最近の動向

- **Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs - AWS**
  [詳細](https://aws.amazon.com/a...

---

## 変更内容・新機能

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 authorization server discovery URLs for both inbound JWT authorization and outbound OAuth credential providers. This update enables developers to configure AgentCore with OAuth 2.0 authorization servers that do not use OpenID Connect (OIDC).

- Amazon Bedrock AgentCore Identityは、OAuth 2.0認可サーバーのディスカバリーURLを新たにサポートいたします。
- インバウンツJWT認可とアウトバウンツOAuth認証情報プロバイダーの両方でご利用いただけます。
- OIDCを使用しないOAuth 2.0認可サーバーもAgentCoreに設定できるようになりました。
- JWTオーソライザーまたはカスタ

---

## まとめ

- Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-oauth2-discovery/)

### 関連情報

- [Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-oauth2-discovery/)
- [Connect to private identity providers - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-private-idp.html)
- [Obtain OAuth 2.0 access token - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-authentication.html)
- [Manage end-user OAuth consent for AI agents with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/manage-end-user-oauth-consent-for-ai-agents-with-amazon-bedrock-agentcore)
- [Secure Agent Authorization with OAuth 2.0 | Amazon Bedrock AgentCore](https://www.youtube.com/watch?v=ECFfIMJECac)
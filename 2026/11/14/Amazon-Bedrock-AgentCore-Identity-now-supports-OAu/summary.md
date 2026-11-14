# Amazon Bedrock AgentCore IdentityがOAuth 2.0ディスカバリーURLに対応

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs

**カテゴリ:** What's New
**公開日:** 2026-11-13T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-oauth2-discovery/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Identity now supports OAuth 2.0 discovery URLs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore IdentityはOAuth 2.0ディスカバリーURLに対応し、OIDCを使用しない認可サーバーも設定できるようになりました。本機能は対象全リージョンで追加料金なしでご利用いただけます。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 authorization server discovery URLs for both inbound JWT authorization and outbound OAuth credential providers. This update enables developers to configure AgentCore with OAuth 2.0 authorization servers that do not use OpenID Connect (OIDC).

- Amazon Bedrock AgentCore Identityは、OAuth 2.0認可サーバーのディスカバリーURLを新たにサポートいたします。
- インバウンツJWT認可とアウトバウンツOAuth認証情報プロバイダーの両方でご利用いただけます。
- OIDCを使用しないOAuth 2.0認可サーバーもAgentCoreに設定できるようになりました。
- JWTオーソライザーまたはカスタ

## 対象ユーザー

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 authorization server discovery URLs for both inbound JWT authorization and outbound OAuth credential providers. This update enables developers to configure AgentCore with OAuth 2.0 authorization servers that do not use OpenID Connect (OIDC).

## 詳細

Amazon Bedrock AgentCore Identity now supports OAuth 2.0 authorization server discovery URLs for both inbound JWT authorization and outbound OAuth credential providers. This update enables developers to configure AgentCore with OAuth 2.0 authorization servers that do not use OpenID Connect (OIDC).

Previously, AgentCore Identity accepted only OIDC discovery URLs. Authorization servers that implement OAuth 2.0 without OIDC publish their metadata at a different well-known path and could not be used with AgentCore. With this launch, you can use either OIDC or OAuth 2.0 authorization server discovery URLs when you configure a JWT authorizer or a custom OAuth credential provider on AgentCore.

This feature is available in all AWS Regions where Amazon Bedrock AgentCore is available, at no additional cost.

- Amazon Bedrock AgentCore Identityは、OAuth 2.0認可サーバーのディスカバリーURLを新たにサポートいたします。
- インバウンツJWT認可とアウトバウンツOAuth認証情報プロバイダーの両方でご利用いただけます。
- OIDCを使用しないOAuth 2.0認可サーバーもAgentCoreに設定できるようになりました。
- JWTオーソライザーまたはカスタムOAuth認証情報プロバイダー設定時に、OIDCまたはOAuth 2.0のディスカバリーURLをご利用いただけます。
- Amazon Bedrock AgentCore提供リージョンすべてで、追加料金なしでご利用いただけます。
- OIDC非対応のOAuth 2.0認可サーバーを利用したい開発者の皆様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-oauth2-discovery/)
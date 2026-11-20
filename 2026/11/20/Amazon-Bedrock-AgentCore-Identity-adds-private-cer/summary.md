# Amazon Bedrock AgentCore Identity がプライベート認証局をサポート

Amazon Bedrock AgentCore Identity adds private certificate authority support

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-identity-private-ca/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Identity adds private certificate authority support」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore IdentityはプライベートCAをサポートし、VPC内のIdPへ独自証明書で安全に接続できるようになりました。

## このアップデートで何が変わったか

- 新機能は、Amazon Bedrock AgentCore IdentityにおけるカスタムOAuth 2.0認証情報プロバイダー向けのプライベート認証局サポートです。
- VPC内のIdP接続で、AWS Private CAやエンタープライズCA、自己署名ルートCAの証明書を信頼できるようになります。
- CA証明書はAWS Secrets ManagerまたはAmazon S3に保存して参照し、公開信頼証明書は不要です。
- 単一のPEMファイルで証明書を組み合わせることで、ダウンタイムなしにローテーションできます。
- 本更新は、VPC内のIdPにエージェントを接続しているお客様に適しています。

## 対象ユーザー

- 新機能は、Amazon Bedrock AgentCore IdentityにおけるカスタムOAuth 2.0認証情報プロバイダー向けのプライベート認証局サポートです。
- VPC内のIdP接続で、AWS Private CAやエンタープライズCA、自己署名ルートCAの証明書を信頼できるようになります。
- CA証明書はAWS Secrets ManagerまたはAmazon S3に保存して参照し、公開信頼証明書は不要です。
- 単一のPEMファイルで証明書を組み合わせることで、ダウンタイムなしにローテーションできます。
- 本更新は、VPC内のIdPにエージェントを接続しているお客様に適

## 詳細

- 新機能は、Amazon Bedrock AgentCore IdentityにおけるカスタムOAuth 2.0認証情報プロバイダー向けのプライベート認証局サポートです。
- VPC内のIdP接続で、AWS Private CAやエンタープライズCA、自己署名ルートCAの証明書を信頼できるようになります。
- CA証明書はAWS Secrets ManagerまたはAmazon S3に保存して参照し、公開信頼証明書は不要です。
- 単一のPEMファイルで証明書を組み合わせることで、ダウンタイムなしにローテーションできます。
- 本更新は、VPC内のIdPにエージェントを接続しているお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-identity-private-ca/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Identity がプライベート認証局をサポート

Amazon Bedrock AgentCore Identity adds private certificate authority support

**What's New** | 2026-11-19T08:00:00

---

## 概要

- Amazon Bedrock AgentCore IdentityはプライベートCAをサポートし、VPC内のIdPへ独自証明書で安全に接続できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Private certificate authority support in Amazon Bedrock AgentCore Identity | Artificial Intelligence**
  [詳細](https://aws.amazon.com/blogs/machine-learning/private-certificate-authority-support-in-amazon-bedrock-agentcore-identity)

- **Release notes for Amazon Bedrock AgentCore**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)

- **Confi...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCore IdentityにおけるカスタムOAuth 2.0認証情報プロバイダー向けのプライベート認証局サポートです。
- VPC内のIdP接続で、AWS Private CAやエンタープライズCA、自己署名ルートCAの証明書を信頼できるようになります。
- CA証明書はAWS Secrets ManagerまたはAmazon S3に保存して参照し、公開信頼証明書は不要です。
- 単一のPEMファイルで証明書を組み合わせることで、ダウンタイムなしにローテーションできます。
- 本更新は、VPC内のIdPにエージェントを接続しているお客様に適しています。

---

## まとめ

- Amazon Bedrock AgentCore Identity adds private certificate authority support について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/bedrock-agentcore-identity-private-ca/)

### 関連情報

- [Private certificate authority support in Amazon Bedrock AgentCore Identity | Artificial Intelligence](https://aws.amazon.com/blogs/machine-learning/private-certificate-authority-support-in-amazon-bedrock-agentcore-identity)
- [Release notes for Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
- [Configuring Amazon Bedrock AgentCore Gateway for secure access to private resources](https://aws.amazon.com/blogs/machine-learning/configuring-amazon-bedrock-agentcore-gateway-for-secure-access-to-private-resources)
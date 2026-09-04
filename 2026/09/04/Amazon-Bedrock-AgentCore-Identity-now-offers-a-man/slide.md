---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始

Amazon Bedrock AgentCore Identity now offers a managed consent portal

**What's New** | 2026-09-01T21:29:00

---

## 概要

- Amazon Bedrock AgentCore Identityは、カスタムOAuthインフラを不要にするマネージド同意ポータルを提供します。
- 本機能はエージェント開発者、プラットフォーム管理者、およびエンドユーザーに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Provide identity and credential management for agent applications with Amazon Bedrock AgentCore Identity**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity.html)

- **Amazon Bedrock AgentCore Identity: How to Handle OAuth in AI Agents**
  [詳細](https://www.missioncloud.com/blog/amazon-bedrock-agentcore-identity-how-to-handle-oauth-in-ai-agents)

- **S...

---

## 変更内容・新機能

Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始。OAuth 2.0の3レッグ認可フローにおけるカスタムOAuthコールバックインフラストラクチャの構築・ホスト・維持が不要に。各AgentCore Gatewayに専用のホスト型Webクライアントと認証情報プロバイダーリストを備えた同意ポータルが割り当てられる。プラットフォーム管理者はセッション開始前にポータルURLをチームと共有し、エージェントが外部ツールを代理呼び出しするための同意を取得できる。エンドユーザーはセルフサービスインターフェースで接続状態をいつでも確認可能。エージェントIDEベースのクライアントを使用する開発者も、OAuth同意URLの表示や同意後のセッションバインディングをネイティブに処理できない場合に、専用の認可サーフェスとして利用できる。GitHub、Salesforce、Slackなどのサードパーティサービスへの接続に対応。Amazon Bedrock AgentCore Identityが利用可能なすべての商用リージョンで利用可能。

---

## まとめ

- Amazon Bedrock AgentCore Identity now offers a managed consent portal について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-agentcore/)

### 関連情報

- [Provide identity and credential management for agent applications with Amazon Bedrock AgentCore Identity](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity.html)
- [Amazon Bedrock AgentCore Identity: How to Handle OAuth in AI Agents](https://www.missioncloud.com/blog/amazon-bedrock-agentcore-identity-how-to-handle-oauth-in-ai-agents)
- [Securing Amazon Bedrock AgentCore with Auth0 for AI Agents](https://auth0.com/blog/securing-amazon-bedrock-agentcore-agents-auth0-for-ai-agents)
- [Secure AI agents with Amazon Bedrock AgentCore Identity on Amazon ECS](https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-amazon-bedrock-agentcore-identity-on-amazon-ecs)
- [Amazon Bedrock AgentCore Identity now supports On-Behalf-Of (OBO) token exchange](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore)
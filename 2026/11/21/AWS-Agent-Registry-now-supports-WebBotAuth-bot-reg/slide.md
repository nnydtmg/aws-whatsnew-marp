---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Agent Registry が WebBotAuth ボット登録をサポート

AWS Agent Registry now supports WebBotAuth bot registration

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS Agent RegistryがWebBotAuthボット登録に対応し、AWS WAF Bot Controlと連携して正当なボットを検証できるようになりました。
- 本機能は、コンテンツプロバイダーやアプリケーション開発者のセキュリティ強化に役立ちます。

---

## 前提・背景

### これまでの課題

AWS Agent Registryは、WebBotAuth（WBA）ボットを新しいレコードタイプとして登録できるようになりました。標準化されたプロトコルにより正当なボットトラフィックを検証しやすくなります。これまで組織には、検証済みボットと悪意のあるトラフィックを区別する標準的な方法がありませんでした。現在はボットがWebBotAuthによりドメイン所有権を証明でき、AWS WAF Bot Controlと連携して検証ステータスとボット識別を組み合わせたルールを作成できます。コンテンツプロバイ

---

### 関連する最近の動向

- **draft-meunier-webbotauth-registry-04 - Registry and Signature Agent card for Web bot auth**
  [詳細](https://data...

---

## 変更内容・新機能

AWS Agent Registryは、WebBotAuth（WBA）ボットを新しいレコードタイプとして登録できるようになりました。標準化されたプロトコルにより正当なボットトラフィックを検証しやすくなります。これまで組織には、検証済みボットと悪意のあるトラフィックを区別する標準的な方法がありませんでした。現在はボットがWebBotAuthによりドメイン所有権を証明でき、AWS WAF Bot Controlと連携して検証ステータスとボット識別を組み合わせたルールを作成できます。コンテンツプロバイダーおよびアプリケーション開発者に、どのボットがリソースにアクセスできるかを細かく制御できるようになります。例えば、WBA検証済みの検索エンジンクローラーは許可し、未検証トラフィックはブロックする、またはボット識別と検証ステータスの両方に基づくカスタムアクセスポリシーを作成できます。本機能はAWS Agent Registryが利用可能なすべてのAWSリージョンで利用できます。

---

## ユースケース

AWS Agent Registryは、WebBotAuth（WBA）ボットを新しいレコードタイプとして登録できるようになりました。標準化されたプロトコルにより正当なボットトラフィックを検証しやすくなります。これまで組織には、検証済みボットと悪意のあるトラフィックを区別する標準的な方法がありませんでした。現在はボットがWebBotAuthによりドメイン所有権を証明でき、AWS WAF Bot Controlと連携して検証ステータスとボット識別を組み合わせたルールを作成できます。コンテンツプロバイダーおよびアプリケーション開発者に、どのボットがリソースにアクセスできるかを細かく制御できるようにな

---

## まとめ

- AWS Agent Registry now supports WebBotAuth bot registration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/agent-registry-webbotauth-support/)

### 関連情報

- [draft-meunier-webbotauth-registry-04 - Registry and Signature Agent card for Web bot auth](https://datatracker.ietf.org/doc/draft-meunier-webbotauth-registry)
- [AWS Agent Registry: What It Governs, What It Doesn't [2026]](https://atlan.com/know/ai-agent/aws/what-is-aws-agent-registry)
- [Amazon Bedrock AgentCore Browser now reduces CAPTCHAs with Web Bot Auth (Preview)](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-browser-web-bot-auth-preview)
- [Beyond IP lists- a registry format for bots and agents | Cloudflare Blog](https://blog.cloudflare.com/agent-registry)
- [Get started with AWS Agent Registry - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-get-started.html)
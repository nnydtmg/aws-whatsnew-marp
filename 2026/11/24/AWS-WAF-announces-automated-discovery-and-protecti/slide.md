---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAFがAmazon Bedrock GuardrailsでLLM・MCP・A2Aエンドポイントの自動検出と保護を発表

AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails

**What's New** | 2026-11-23T18:47:00

---

## 概要

- AWS WAFがAmazon Bedrock Guardrailsを活用したAIエンドポイントの自動検出と保護を一般提供開始しました。
- 本機能は、カスタムルールを記述せずにAIエンドポイントを保護したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection)

- **Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/introducing-api-and...

---

## 変更内容・新機能

AWS WAFがAmazon Bedrock Guardrailsを使用したLLM、MCP、およびA2Aエンドポイントの自動検出と保護を一般提供開始しました。検出は新たなAPI Gateway APIポータルを通じて行われ、エージェントの導入やログの転送は不要です。保護はAWS WAF AIセキュリティマネージドルールグループにより実施され、不正なMCPおよびA2Aメッセージのブロックとコンテンツ検査が可能です。Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下のエンドポイントをAWS Organizations全体で検出できます。コンテンツ検査を有効にすると、Amazon Bedrock GuardrailsのInvokeGuardrailsCheck APIを呼び出し、プロンプトインジェクション、ジェイルブレイク試行、有害コンテンツ、レスポンス内の機密情報を検出します。API Portalは32のAWSリージョンで利用可能で、AI Securityはバージニア北部、オハイオ、オレゴン、ロンドン、ストックホ

---

## まとめ

- AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection/)

### 関連情報

- [AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection)
- [Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-api-and-ai-security-on-aws-from-discovery-to-protection)
- [AWS WAF announces automated discovery and protection](https://daily.dev/posts/aws-waf-announces-automated-discovery-and-protection-for-llm-mcp-and-a2a-endpoints-using-amazon-be-wf7ns61kk)
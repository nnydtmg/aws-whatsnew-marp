# AWS WAFがAmazon Bedrock GuardrailsでLLM・MCP・A2Aエンドポイントの自動検出と保護を発表

AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails

**カテゴリ:** What's New
**公開日:** 2026-11-23T18:47:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection/)

このページでは、AWS What's Newで発表された「AWS WAF announces automated discovery and protection for LLM, MCP, and A2A endpoints using Amazon Bedrock Guardrails」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS WAFがAmazon Bedrock Guardrailsを活用したAIエンドポイントの自動検出と保護を一般提供開始しました。本機能は、カスタムルールを記述せずにAIエンドポイントを保護したいお客様に適しています。

## このアップデートで何が変わったか

AWS WAFがAmazon Bedrock Guardrailsを使用したLLM、MCP、およびA2Aエンドポイントの自動検出と保護を一般提供開始しました。検出は新たなAPI Gateway APIポータルを通じて行われ、エージェントの導入やログの転送は不要です。保護はAWS WAF AIセキュリティマネージドルールグループにより実施され、不正なMCPおよびA2Aメッセージのブロックとコンテンツ検査が可能です。Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下のエンドポイントをAWS Organizations全体で検出できます。コンテンツ検査を有効にすると、Amazon Bedrock GuardrailsのInvokeGuardrailsCheck APIを呼び出し、プロンプトインジェクション、ジェイルブレイク試行、有害コンテンツ、レスポンス内の機密情報を検出します。API Portalは32のAWSリージョンで利用可能で、AI Securityはバージニア北部、オハイオ、オレゴン、ロンドン、ストックホ

## 詳細

AWS WAFがAmazon Bedrock Guardrailsを使用したLLM、MCP、およびA2Aエンドポイントの自動検出と保護を一般提供開始しました。検出は新たなAPI Gateway APIポータルを通じて行われ、エージェントの導入やログの転送は不要です。保護はAWS WAF AIセキュリティマネージドルールグループにより実施され、不正なMCPおよびA2Aメッセージのブロックとコンテンツ検査が可能です。Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下のエンドポイントをAWS Organizations全体で検出できます。コンテンツ検査を有効にすると、Amazon Bedrock GuardrailsのInvokeGuardrailsCheck APIを呼び出し、プロンプトインジェクション、ジェイルブレイク試行、有害コンテンツ、レスポンス内の機密情報を検出します。API Portalは32のAWSリージョンで利用可能で、AI Securityはバージニア北部、オハイオ、オレゴン、ロンドン、ストックホルム、東京、シドニーで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/waf-ai-endpoint-discovery-protection/)
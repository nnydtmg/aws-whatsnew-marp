# Amazon Bedrock AgentCore GatewayがVPCエンドポイント向けプライベートTLS証明書をサポート

AgentCore Gateway supports private TLS certificates for VPC endpoints

**カテゴリ:** What's New
**公開日:** 2026-10-02T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-private-tls-vpc/)

このページでは、AWS What's Newで発表された「AgentCore Gateway supports private TLS certificates for VPC endpoints」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Gatewayは、プライベートCAで署名されたTLS証明書のサポートを開始し、VPC内のプライベートエンドポイントへ中間ALBなしで安全に接続できるようになりました。本機能は、独自のプライベート認証局をお使いのMCP、OpenAPI、HTTPプロキシターゲット利用者のお客様に適しております。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore GatewayがMCP、OpenAPI、およびHTTPプロキシターゲットにおいて、プライベート認証局（CA）によって署名されたTLS証明書をサポートしました。独自のプライベート認証局が発行したTLS証明書を使用するゲートウェイターゲットへ、安全に接続できるようになります。VPC内のプライベートエンドポイントへ、中間のApplication Load Balancerを必要とせずにネイティブ接続を確立できます。ゲートウェイはAmazon S3またはAWS Secrets ManagerからPEM形式のCA証明書を取得し、アウトバウンドTLS接続の信頼アンカーとして使用します。Amazon VPC Latticeによるプライベートエンドポイントを使用するゲートウェイターゲットにプライベートCA証明書を登録できます。対応ターゲットはMCPサーバー、OpenAPI、HTTPプロキシ（パススルー）です。AgentCore GatewayとAmazon VPC Latticeの両方が利用可能なすべてのリージョンで利用可能です。

## 対象ユーザー

Amazon Bedrock AgentCore Gatewayは、プライベートCAで署名されたTLS証明書のサポートを開始し、VPC内のプライベートエンドポイントへ中間ALBなしで安全に接続できるようになりました。本機能は、独自のプライベート認証局をお使いのMCP、OpenAPI、HTTPプロキシターゲット利用者のお客様に適しております。

## 詳細

Amazon Bedrock AgentCore GatewayがMCP、OpenAPI、およびHTTPプロキシターゲットにおいて、プライベート認証局（CA）によって署名されたTLS証明書をサポートしました。独自のプライベート認証局が発行したTLS証明書を使用するゲートウェイターゲットへ、安全に接続できるようになります。VPC内のプライベートエンドポイントへ、中間のApplication Load Balancerを必要とせずにネイティブ接続を確立できます。ゲートウェイはAmazon S3またはAWS Secrets ManagerからPEM形式のCA証明書を取得し、アウトバウンドTLS接続の信頼アンカーとして使用します。Amazon VPC Latticeによるプライベートエンドポイントを使用するゲートウェイターゲットにプライベートCA証明書を登録できます。対応ターゲットはMCPサーバー、OpenAPI、HTTPプロキシ（パススルー）です。AgentCore GatewayとAmazon VPC Latticeの両方が利用可能なすべてのリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-private-tls-vpc/)
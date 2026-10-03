---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore GatewayがVPCエンドポイント向けプライベートTLS証明書をサポート

AgentCore Gateway supports private TLS certificates for VPC endpoints

**What's New** | 2026-10-02T08:00:00

---

## 概要

- Amazon Bedrock AgentCore Gatewayは、プライベートCAで署名されたTLS証明書のサポートを開始し、VPC内のプライベートエンドポイントへ中間ALBなしで安全に接続できるようになりました。
- 本機能は、独自のプライベート認証局をお使いのMCP、OpenAPI、HTTPプロキシターゲット利用者のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Use interface VPC endpoints (AWS PrivateLink) to create a private connection between your VPC and your Amazon Bedrock AgentCore resources**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/vpc-interface-endpoints.html)

- **Configure Amazon Bedrock AgentCore Gateway VPC Egress for Gateway Targets**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/d...

---

## 変更内容・新機能

Amazon Bedrock AgentCore GatewayがMCP、OpenAPI、およびHTTPプロキシターゲットにおいて、プライベート認証局（CA）によって署名されたTLS証明書をサポートしました。独自のプライベート認証局が発行したTLS証明書を使用するゲートウェイターゲットへ、安全に接続できるようになります。VPC内のプライベートエンドポイントへ、中間のApplication Load Balancerを必要とせずにネイティブ接続を確立できます。ゲートウェイはAmazon S3またはAWS Secrets ManagerからPEM形式のCA証明書を取得し、アウトバウンドTLS接続の信頼アンカーとして使用します。Amazon VPC Latticeによるプライベートエンドポイントを使用するゲートウェイターゲットにプライベートCA証明書を登録できます。対応ターゲットはMCPサーバー、OpenAPI、HTTPプロキシ（パススルー）です。AgentCore GatewayとAmazon VPC Latticeの両方が利用可能なすべてのリージョンで利用可能です。

---

## まとめ

- AgentCore Gateway supports private TLS certificates for VPC endpoints について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-private-tls-vpc/)

### 関連情報

- [Use interface VPC endpoints (AWS PrivateLink) to create a private connection between your VPC and your Amazon Bedrock AgentCore resources](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/vpc-interface-endpoints.html)
- [Configure Amazon Bedrock AgentCore Gateway VPC Egress for Gateway Targets](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-vpc-egress.html)
- [Connect to private resources in your VPC using VPC Lattice](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/vpc-egress-private-endpoints.html)
- [Secure ingress connectivity to Amazon Bedrock AgentCore Gateway using interface VPC endpoints](https://aws.amazon.com/blogs/machine-learning/secure-ingress-connectivity-to-amazon-bedrock-agentcore-gateway-using-interface-vpc-endpoints)
- [AgentCore Gateway supports private TLS certificates for VPC endpoints](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-private-tls-vpc/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AgentCore Gateway が Bedrock InvokeModel API とモデルフォールバックに対応

AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback

**What's New** | 2026-10-22T08:00:00

---

## 概要

- Amazon Bedrock AgentCore GatewayがInvokeModel APIとモデルフォールバックに対応し、既存SDKのまま単一エンドポイントで複数プロバイダーをご利用いただけます。
- スロットル時は自動で代替モデルへ切り替わるため、エージェントの可用性を維持したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback)

- **Top 5 Bedrock AgentCore Gateway Alternatives in 2026**
  [詳細](https://www.getmaxim.ai/articles/bedrock-agentcore-gateway-alternatives)

- **Amazon Bedrock AgentCore Gateway: A secure AI gateway f...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCore Gatewayが推論エンドポイントでInvokeModelおよびInvokeModelWithResponseStream APIとモデルフォールバックをサポートすることです。
- 既存のAmazon Bedrock SDK統合をゲートウェイに向けることで、クライアントコードを書き換えずに任意のモデルプロバイダーへ到達できます。
- プライマリの宛先がスロットル、容量不足、または到達不能な場合、自動的に代替モデルまたはプロバイダーへルーティングいたします。
- ゲートウェイルールで代替宛先の順序付きチェーンと切り替え条件を定義でき、サーキットブレーカーが失敗中の宛先をスキップいたします。
- 本アップデートは、既存のBedrock SDKをご利用のお客様や、リトライロジックを自前で実装したくないお客様に適しております。
- 単一の管理エンドポイントで複数のモデルプロバイダーを利用したいお客様にも有用です。

---

## まとめ

- AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)

### 関連情報

- [AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback)
- [Top 5 Bedrock AgentCore Gateway Alternatives in 2026](https://www.getmaxim.ai/articles/bedrock-agentcore-gateway-alternatives)
- [Amazon Bedrock AgentCore Gateway: A secure AI gateway for agents, tools, and models](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html)
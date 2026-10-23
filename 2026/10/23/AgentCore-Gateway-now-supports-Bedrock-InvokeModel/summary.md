# AgentCore Gateway が Bedrock InvokeModel API とモデルフォールバックに対応

AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback

**カテゴリ:** What's New
**公開日:** 2026-10-22T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)

このページでは、AWS What's Newで発表された「AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore GatewayがInvokeModel APIとモデルフォールバックに対応し、既存SDKのまま単一エンドポイントで複数プロバイダーをご利用いただけます。スロットル時は自動で代替モデルへ切り替わるため、エージェントの可用性を維持したいお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon Bedrock AgentCore Gatewayが推論エンドポイントでInvokeModelおよびInvokeModelWithResponseStream APIとモデルフォールバックをサポートすることです。
- 既存のAmazon Bedrock SDK統合をゲートウェイに向けることで、クライアントコードを書き換えずに任意のモデルプロバイダーへ到達できます。
- プライマリの宛先がスロットル、容量不足、または到達不能な場合、自動的に代替モデルまたはプロバイダーへルーティングいたします。
- ゲートウェイルールで代替宛先の順序付きチェーンと切り替え条件を定義でき、サーキットブレーカーが失敗中の宛先をスキップいたします。
- 本アップデートは、既存のBedrock SDKをご利用のお客様や、リトライロジックを自前で実装したくないお客様に適しております。
- 単一の管理エンドポイントで複数のモデルプロバイダーを利用したいお客様にも有用です。

## 対象ユーザー

- 新機能は、Amazon Bedrock AgentCore Gatewayが推論エンドポイントでInvokeModelおよびInvokeModelWithResponseStream APIとモデルフォールバックをサポートすることです。
- 既存のAmazon Bedrock SDK統合をゲートウェイに向けることで、クライアントコードを書き換えずに任意のモデルプロバイダーへ到達できます。
- プライマリの宛先がスロットル、容量不足、または到達不能な場合、自動的に代替モデルまたはプロバイダーへルーティングいたします。
- ゲートウェイルールで代替宛先の順序付きチェーンと切り替え条件を定義でき

## 詳細

- 新機能は、Amazon Bedrock AgentCore Gatewayが推論エンドポイントでInvokeModelおよびInvokeModelWithResponseStream APIとモデルフォールバックをサポートすることです。
- 既存のAmazon Bedrock SDK統合をゲートウェイに向けることで、クライアントコードを書き換えずに任意のモデルプロバイダーへ到達できます。
- プライマリの宛先がスロットル、容量不足、または到達不能な場合、自動的に代替モデルまたはプロバイダーへルーティングいたします。
- ゲートウェイルールで代替宛先の順序付きチェーンと切り替え条件を定義でき、サーキットブレーカーが失敗中の宛先をスキップいたします。
- 本アップデートは、既存のBedrock SDKをご利用のお客様や、リトライロジックを自前で実装したくないお客様に適しております。
- 単一の管理エンドポイントで複数のモデルプロバイダーを利用したいお客様にも有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/)
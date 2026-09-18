---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore で次世代 Runtime が利用可能に

The new AgentCore Runtime is now available in Amazon Bedrock AgentCore

**What's New** | 2026-09-18T13:25:00

---

## 概要

- Amazon Bedrock AgentCoreの次世代Runtimeが利用可能になり、弾性メモリ管理と一貫した高速コールドスタートを提供いたします。
- ランタイム作成時にplatformVersionをV2に設定することでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Bedrock AgentCore Runtime now supports Node.js for direct code deployment**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-runtime)

- **Amazon Bedrock AgentCore increases default runtime quota limits**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-increases-default-runtime-quota-limits)

- **Release...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCoreにおける次世代のAgentCore Runtimeです。
- 弾性メモリ管理により未使用メモリを回収し、ピークではなく実際の使用量に対して課金されます。
- コンテナイメージサイズに関係なく、一貫したコールドスタート時間を実現いたします。
- 環境をスナップショットから復元するため、P75コールドスタートは1.9秒から2.0秒となります。
- 本アップデートは、Amazon Bedrock AgentCoreをご利用のお客様に適しております。
- コスト削減と高速で安定した起動を求めるお客様にとって有益です。

---

## 効果・メリット

- - 新機能は、Amazon Bedrock AgentCoreにおける次世代のAgentCore Runtimeです。
- - 弾性メモリ管理により未使用メモリを回収し、ピークではなく実際の使用量に対して課金されます。
- - コンテナイメージサイズに関係なく、一貫したコールドスタート時間を実現いたします。

---

## まとめ

- The new AgentCore Runtime is now available in Amazon Bedrock AgentCore について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available)

### 関連情報

- [Amazon Bedrock AgentCore Runtime now supports Node.js for direct code deployment](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-runtime)
- [Amazon Bedrock AgentCore increases default runtime quota limits](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-increases-default-runtime-quota-limits)
- [Release notes for Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
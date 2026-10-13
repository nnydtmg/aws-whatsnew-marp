---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCoreの短期メモリに消費量ベース料金を導入

Announcing consumption-based pricing for short-term memory in Amazon Bedrock AgentCore

**What's New** | 2026-10-12T16:00:00

---

## 概要

- Amazon Bedrock AgentCoreの短期メモリに消費量ベースの料金が導入され、小さなイベントを頻繁に扱う開発者の皆様は使用量に応じたコスト削減が可能になります。

---

## 前提・背景

### これまでの課題

Amazon Bedrock AgentCoreの短期メモリに、消費量に基づく新しい料金体系が導入されました。従来のイベントごとの定額料金に代わり、取り込み、取得、保存のデータ量に応じて課金されます。取り込みは1GBあたり1.00ドル、取得は1GBあたり0.20ドル、保存は1GB月あたり0.10ドルです。本更新は、頻繁に小さなイベントを書き込むエージェントを構築する開発者にとって有益です。使用量に比例して支払うため、特に小さなペイロードのユースケースでコスト削減が見込めます。

---

### 関連する最近の動向

- **Amazon Bedrock AgentCore Pricing - AWS**
  [詳細](https://aws.amazon.com/bedrock/agentcore/pricing)

- **Amazon Bedrock Age...

---

## 変更内容・新機能

Amazon Bedrock AgentCoreの短期メモリに、消費量に基づく新しい料金体系が導入されました。従来のイベントごとの定額料金に代わり、取り込み、取得、保存のデータ量に応じて課金されます。取り込みは1GBあたり1.00ドル、取得は1GBあたり0.20ドル、保存は1GB月あたり0.10ドルです。本更新は、頻繁に小さなイベントを書き込むエージェントを構築する開発者にとって有益です。使用量に比例して支払うため、特に小さなペイロードのユースケースでコスト削減が見込めます。

---

## 効果・メリット

- Amazon Bedrock AgentCoreの短期メモリに、消費量に基づく新しい料金体系が導入されました。
- 従来のイベントごとの定額料金に代わり、取り込み、取得、保存のデータ量に応じて課金されます。
- 取り込みは1GBあたり1.00ドル、取得は1GBあたり0.20ドル、保存は1GB月あたり0.10ドルです。
- 本更新は、頻繁に小さなイベントを書き込むエージェントを構築する開発者にとって有益です。
- 使用量に比例して支払うため、特に小さなペイロードのユースケースでコスト削減が見込めます。

---

## ユースケース

Amazon Bedrock AgentCoreの短期メモリに、消費量に基づく新しい料金体系が導入されました。従来のイベントごとの定額料金に代わり、取り込み、取得、保存のデータ量に応じて課金されます。取り込みは1GBあたり1.00ドル、取得は1GBあたり0.20ドル、保存は1GB月あたり0.10ドルです。本更新は、頻繁に小さなイベントを書き込むエージェントを構築する開発者にとって有益です。使用量に比例して支払うため、特に小さなペイロードのユースケースでコスト削減が見込めます。

---

## まとめ

- Announcing consumption-based pricing for short-term memory in Amazon Bedrock AgentCore について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-consumption-based-pricing)

### 関連情報

- [Amazon Bedrock AgentCore Pricing - AWS](https://aws.amazon.com/bedrock/agentcore/pricing)
- [Amazon Bedrock AgentCore Pricing: Hidden Costs That Bill While Your Agent Idles](https://builder.aws.com/content/3KC60kJzFVDfHVxJ5CNecLZVPmA/amazon-bedrock-agentcore-pricing-hidden-costs-that-bill-while-your-agent-idles)
- [Amazon Bedrock AgentCore Pricing [2026]: Per-Component Rates + TCO](https://devopsity.com/blog/amazon-bedrock-agentcore-architecture-components-and-pricing)
- [AgentCore Pricing (2026): All 12 Meters + 5 Alternatives](https://www.betterclaw.io/blog/aws-bedrock-agentcore-pricing-alternatives)
- [Amazon Bedrock AgentCore pricing (2026)](https://akalcloud.ai/blog/bedrock-agentcore-pricing)
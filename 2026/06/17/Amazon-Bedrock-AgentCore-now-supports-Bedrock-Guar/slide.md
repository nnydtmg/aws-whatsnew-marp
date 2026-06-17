---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCoreがポリシー管理でGuardrailsをサポート開始

Amazon Bedrock AgentCore now supports Bedrock Guardrails in policy

**What's New** | 2026-06-17

---

## 概要

- Amazon Bedrock AgentCoreがBedrock Guardrailsをポリシーでサポートするようになり、エンタープライズ企業はプロンプトインジェクション攻撃や機密情報露出などのセキュリティリスクからAIエージェントをリアルタイムで保護できるようになりました。
- 既存のインフラストラクチャで実装可能であり、自然言語またはポリシー・アズ・コードでの管理が可能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Bedrock AgentCore now supports Bedrock Guardrails in policy**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-policy-guardrails-generally-available)

- **Generative AI Data Governance – Amazon Bedrock Guardrails**
  [詳細](https://aws.amazon.com/bedrock/guardrails)

---

## 変更内容・新機能

**新機能について:**
- Amazon Bedrock AgentCoreがBedrock Guardrailsをポリシーでサポートするようになりました。
- AIエージェントが実行を許可されたすべてのアクション、およびゲートウェイターゲット（ツール、エージェント、モデル）へのすべての呼び出しの入出力をリアルタイムで評価できます。
- プロンプトインジェクション攻撃、有害なコンテンツ、および機密情報の露出を検出・ブロックします。
- ポリシー評価はAgentCoreの観測機能を通じてログに記録され、最適化と監査が可能です。
- 既存のAgentCoreゲートウェイデプロイメントと連携し、新しいインフラストラクチャは不要です。
- ポリシーは自然言語またはポリシー・アズ・コードで作成でき、ポリシー評価は従量課金制です。
**この更新が適している対象:**
- エンタープライズ企業がプロダクション環境でAIエージェントをスケーリングする際に、セキュリティと安全性をより深く制御したい組織です。
- プロンプトインジェクション攻撃や機密データ露出などのセキュリティリスクから保護する必要があ

---

## ユースケース

**新機能について:**
- Amazon Bedrock AgentCoreがBedrock Guardrailsをポリシーでサポートするようになりました。
- AIエージェントが実行を許可されたすべてのアクション、およびゲートウェイターゲット（ツール、エージェント、モデル）へのすべての呼び出しの入出力をリアルタイムで評価できます。
- プロンプトインジェクション攻撃、有害なコンテンツ、および機密情報の露出を検出・ブロックします。
- ポリシー評価はAgentCoreの観測機能を通じてログに記録され、最適化と監査が可能です。
- 既存のAgentCoreゲートウェイデプロイメントと連携し、新

---

## まとめ

- Amazon Bedrock AgentCore now supports Bedrock Guardrails in policy について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-policy-guardrails-generally-available)

### 関連情報

- [Amazon Bedrock AgentCore now supports Bedrock Guardrails in policy](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-policy-guardrails-generally-available)
- [Generative AI Data Governance – Amazon Bedrock Guardrails](https://aws.amazon.com/bedrock/guardrails)
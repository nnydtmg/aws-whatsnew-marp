---
marp: true
theme: aws-whatsnew
paginate: true
---

# EC2 Image BuilderがDevOps Agentと統合し障害診断とリソース作成に対応

EC2 Image Builder console now integrates with the DevOps Agent for troubleshooting and resource creation

**What's New** | 2026-11-12T08:00:00

---

## 概要

- EC2 Image BuilderコンソールがDevOps Agentと統合され、失敗したパイプラインの診断とリソース作成がチャットから行えるようになりました。
- 本機能は、イメージ構築の障害対応と設定作業を効率化したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Troubleshoot failed builds with AI - EC2 Image Builder**
  [詳細](https://docs.aws.amazon.com/imagebuilder/latest/userguide/devops-agent-troubleshooting.html)

- **Troubleshoot Image Builder issues - EC2 Image Builder**
  [詳細](https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html)

- **Completing All 5 AWS DevOps Agent Challenges**
  [詳細](https://builder.a...

---

## 変更内容・新機能

-新機能は、EC2 Image BuilderコンソールとAWS DevOps Agentの直接統合です。
-コンソールのチャットパネルから、失敗したイメージパイプラインのトラブルシューティングとリソース作成が可能です。
-最大50件の失敗パイプラインを一度に診断し、同一会話で追加のご質問ができます。
-ご希望の内容を説明すると、エージェントが検証済みの値をコンソールへ入力します。
-エージェントはビルドログ、ワークフロー、コンポーネント、ネットワーク設定を読み取り、根本原因と修正手順をご提示します。
-独自のAIエージェントをご利用の場合は、AWS Agent ToolkitのEC2 Image Builderスキルで同等の機能をご利用いただけます。
-本更新は、失敗パイプラインの診断やリソース作成の手間を削減したいお客様に適しています。

---

## 効果・メリット

- -新機能は、EC2 Image BuilderコンソールとAWS DevOps Agentの直接統合です。
- -コンソールのチャットパネルから、失敗したイメージパイプラインのトラブルシューティングとリソース作成が可能です。
- -最大50件の失敗パイプラインを一度に診断し、同一会話で追加のご質問ができます。

---

## まとめ

- EC2 Image Builder console now integrates with the DevOps Agent for troubleshooting and resource creation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-image-builder-devops-agent-integration)

### 関連情報

- [Troubleshoot failed builds with AI - EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/devops-agent-troubleshooting.html)
- [Troubleshoot Image Builder issues - EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html)
- [Completing All 5 AWS DevOps Agent Challenges](https://builder.aws.com/content/3GA5MrUqiUBEoOUtSVz6KXatSOm/completing-all-5-aws-devops-agent-challenges-builders-skill-sprint-may-2026)
- [AWS DevOps Agent: The 2026 Guide to AI-Powered Infrastructure Operations](https://aws.plainenglish.io/aws-devops-agent-the-2026-guide-to-ai-powered-infrastructure-operations-8aa3fc18c884)
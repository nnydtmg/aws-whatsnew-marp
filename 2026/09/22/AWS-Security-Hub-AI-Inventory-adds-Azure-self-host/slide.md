---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hub AI InventoryがAzureセルフホストインスタンスをサポート

AWS Security Hub AI Inventory adds Azure self-hosted instance support

**What's New** | 2026-09-22T08:00:00

---

## 概要

- AWS Security Hub AI InventoryがAzureセルフホストインスタンスをサポートし、マルチクラウドでのAI資産管理が向上いたします。

---

## 前提・背景

### 関連する最近の動向

- **AWS fleshes out Security Hub with AI workload protection, Microsoft Azure support**
  [詳細](https://www.constellationr.com/insights/news/aws-fleshes-out-security-hub-ai-workload-protection-microsoft-azure-support)

- **I tried automatically detecting AI assets with the new AWS Security Hub feature AI Inventory**
  [詳細](https://dev.classmethod.jp/en/articles/security-hub-ai-invent...

---

## 変更内容・新機能

AWS Security Hub AI InventoryがMicrosoft Azureのセルフホスト型インスタンス上で稼働するAI資産の発見とカタログ化をサポートするようになった。この更新により、Security Hubの既存のセルフホスト検出機能がAWSを超えて拡張され、中央セキュリティチームがマルチクラウド環境全体でAI資産とそのセキュリティ姿勢を継続的に更新された組織全体のビューで把握できるようになる。Security HubはAmazon Inspectorのソフトウェア部品表（SBOM）分析を活用し、Azure仮想マシン上にインストールされた推論エンドポイント、モデル、AIエージェント（Ollama、vLLM、Hugging Face TGIなど）を識別する。発見された各AI資産は基盤となるインフラストラクチャにマッピングされ、セキュリティ検出結果と関連付けられる。この機能はSecurity Hub Essentialsに追加費用なしで含まれ、Security Hubが提供されているすべてのAWS商用リージョンで利用可能。

---

## 効果・メリット

- AWS Security Hub AI InventoryがAzureセルフホストインスタンスをサポートし、マルチクラウドでのAI資産管理が向上いたします。

---

## ユースケース

AWS Security Hub AI InventoryがMicrosoft Azureのセルフホスト型インスタンス上で稼働するAI資産の発見とカタログ化をサポートするようになった。この更新により、Security Hubの既存のセルフホスト検出機能がAWSを超えて拡張され、中央セキュリティチームがマルチクラウド環境全体でAI資産とそのセキュリティ姿勢を継続的に更新された組織全体のビューで把握できるようになる。Security HubはAmazon Inspectorのソフトウェア部品表（SBOM）分析を活用し、Azure仮想マシン上にインストールされた推論エンドポイント、モデル、AIエージ

---

## まとめ

- AWS Security Hub AI Inventory adds Azure self-hosted instance support について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/security-hub-ai-inventory-azure-support/)

### 関連情報

- [AWS fleshes out Security Hub with AI workload protection, Microsoft Azure support](https://www.constellationr.com/insights/news/aws-fleshes-out-security-hub-ai-workload-protection-microsoft-azure-support)
- [I tried automatically detecting AI assets with the new AWS Security Hub feature AI Inventory](https://dev.classmethod.jp/en/articles/security-hub-ai-inventory-auto-detection)
- [AWS Security Platform Extended to Protect AI and Azure Cloud Workloads](https://cloudwars.com/ai/aws-security-platform-extended-to-protect-ai-and-azure-cloud-workloads)
- [AI Inventory in Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-v2-ai-inventory.html)
- [AWS Security Hub Pricing](https://aws.amazon.com/security-hub/pricing)
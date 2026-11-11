---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrockのbedrock-runtimeでOpenAI Daybreakが利用可能に

Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models

**What's New** | 2026-11-10T10:14:00

---

## 概要

- Amazon Bedrockのbedrock-runtimeエンドポイントで、OpenAIのDaybreakサイバーセキュリティモデルをご利用いただけるようになりました。
- 本機能は、防御的ワークフローや高度なセキュリティ調査を行う対象のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)

- **OpenAI Models on Amazon Bedrock**
  [詳細](https://www.aboutamazon.com/news/aws/bedrock-openai-models)

- **Daybreak models are now available on AWS**
  [詳細](https://openai.com/index/daybreak...

---

## 変更内容・新機能

新機能は、Amazon Bedrockのbedrock-runtimeエンドポイントにおいて、OpenAIの専門サイバーセキュリティモデルであるDaybreak Red: GPT-5.6 CyberおよびDaybreak Blue: GPT-5.6 Solをご利用いただけるようになったことです。対象のお客様は、米国およびグローバルのクロスリージョン推論プロファイルを通じて、本モデルにアクセスできます。本アップデートは、脆弱性発見、検知エンジニアリング、インシデント対応などの防御的ワークフローを行うセキュリティチームに適しております。また、脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスクを行うお客様にも有用です。Daybreak Blueは脆弱性発見・検知エンジニアリング・インシデント対応などの防御的ワークフローに適した始点モデルです。Daybreak Redは脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスク向けで、拒否閾値を低く設定し、強化された身元確認・監視・アクセス制御と組み合わせて調査の速度と深度を向上させます。推論データはモデル訓練に使用

---

## 効果・メリット

- 新機能は、Amazon Bedrockのbedrock-runtimeエンドポイントにおいて、OpenAIの専門サイバーセキュリティモデルであるDaybreak Red: GPT-5.6 CyberおよびDaybreak Blue: GPT-5.6 Solをご利用いただけるようになったことです。
- 対象のお客様は、米国およびグローバルのクロスリージョン推論プロファイルを通じて、本モデルにアクセスできます。
- 本アップデートは、脆弱性発見、検知エンジニアリング、インシデント対応などの防御的ワークフローを行うセキュリティチームに適しております。
- また、脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスクを行うお客様にも有用です。
- Daybreak Blueは脆弱性発見・検知エンジニアリング・インシデント対応などの防御的ワークフローに適した始点モデルです。

---

## まとめ

- Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)

### 関連情報

- [Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)
- [OpenAI Models on Amazon Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models)
- [Daybreak models are now available on AWS](https://openai.com/index/daybreak-models-are-now-available-on-aws)
- [Daybreak Red: GPT-5.6 Cyber - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-56-cyber.html)
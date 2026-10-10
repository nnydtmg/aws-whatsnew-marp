---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon BedrockがOpenAIモデル向けの推論要約機能をサポート

Amazon Bedrock now supports reasoning summaries for OpenAI models

**What's New** | 2026-10-09T17:44:00

---

## 概要

- Amazon Bedrockは、OpenAIモデル向けに推論要約機能をResponses APIで新たにサポートいたします。
- 本機能は、複雑なタスクにおけるモデルの思考過程を把握したい開発者に適しております。

---

## 前提・背景

### これまでの課題

Amazon Bedrockは、Responses APIを通じてOpenAIモデル向けのreasoning.summaryパラメータを新たにサポートいたします。本機能により、モデルの回答と併せて、推論過程の人間が読める要約をご取得いただけます。コーディング、分析、多段階の問題解決などの複雑なタスクにおけるモデルのアプローチをご理解いただけます。本アップデートは、応答の評価、アプリケーションのデバッグ、ユーザーへのモデルのアプローチ提示を行う開発者に適しております。要約はreasoning出力ア

---

### 関連する最近の動向

- **Amazon Bedrock now supports reasoning summaries for OpenAI models - AWS**
  [詳細](https://aws.amazon.com/about-a...

---

## 変更内容・新機能

Amazon Bedrockは、Responses APIを通じてOpenAIモデル向けのreasoning.summaryパラメータを新たにサポートいたします。本機能により、モデルの回答と併せて、推論過程の人間が読める要約をご取得いただけます。コーディング、分析、多段階の問題解決などの複雑なタスクにおけるモデルのアプローチをご理解いただけます。本アップデートは、応答の評価、アプリケーションのデバッグ、ユーザーへのモデルのアプローチ提示を行う開発者に適しております。要約はreasoning出力アイテムのsummary配列に、モデルの回答と併せて返されます。本機能は、OpenAI GPTモデルが利用可能なすべてのAWSリージョンで、すべてのOpenAIモデルに対して利用可能です。インリージョン推論、地理的（GEO）クロスリージョン推論、グローバルクロスリージョン推論を含みます。

---

## まとめ

- Amazon Bedrock now supports reasoning summaries for OpenAI models について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-reasoning-summaries-openai/)

### 関連情報

- [Amazon Bedrock now supports reasoning summaries for OpenAI models - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-reasoning-summaries-openai/)
- [OpenAI Models on Amazon Bedrock: OpenAI models GPT-5.6—now on Amazon Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models)
- [OpenAI models - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-openai.html)
- [Introducing OpenAI models on Amazon Bedrock for in-country inferencing in India](https://aws.amazon.com/blogs/machine-learning/introducing-openai-models-on-amazon-bedrock-for-in-country-inferencing-in-india)
- [OpenAI models, Codex, and Managed Agents come to AWS | OpenAI](https://openai.com/index/openai-on-aws)
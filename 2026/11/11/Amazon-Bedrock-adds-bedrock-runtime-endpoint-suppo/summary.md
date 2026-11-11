# Amazon Bedrockのbedrock-runtimeでOpenAI Daybreakが利用可能に

Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models

**カテゴリ:** What's New
**公開日:** 2026-11-10T10:14:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)

このページでは、AWS What's Newで発表された「Amazon Bedrock adds bedrock-runtime endpoint support for Daybreak models」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrockのbedrock-runtimeエンドポイントで、OpenAIのDaybreakサイバーセキュリティモデルをご利用いただけるようになりました。本機能は、防御的ワークフローや高度なセキュリティ調査を行う対象のお客様に適しております。

## このアップデートで何が変わったか

新機能は、Amazon Bedrockのbedrock-runtimeエンドポイントにおいて、OpenAIの専門サイバーセキュリティモデルであるDaybreak Red: GPT-5.6 CyberおよびDaybreak Blue: GPT-5.6 Solをご利用いただけるようになったことです。対象のお客様は、米国およびグローバルのクロスリージョン推論プロファイルを通じて、本モデルにアクセスできます。本アップデートは、脆弱性発見、検知エンジニアリング、インシデント対応などの防御的ワークフローを行うセキュリティチームに適しております。また、脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスクを行うお客様にも有用です。Daybreak Blueは脆弱性発見・検知エンジニアリング・インシデント対応などの防御的ワークフローに適した始点モデルです。Daybreak Redは脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスク向けで、拒否閾値を低く設定し、強化された身元確認・監視・アクセス制御と組み合わせて調査の速度と深度を向上させます。推論データはモデル訓練に使用

## 対象ユーザー

新機能は、Amazon Bedrockのbedrock-runtimeエンドポイントにおいて、OpenAIの専門サイバーセキュリティモデルであるDaybreak Red: GPT-5.6 CyberおよびDaybreak Blue: GPT-5.6 Solをご利用いただけるようになったことです。対象のお客様は、米国およびグローバルのクロスリージョン推論プロファイルを通じて、本モデルにアクセスできます。本アップデートは、脆弱性発見、検知エンジニアリング、インシデント対応などの防御的ワークフローを行うセキュリティチームに適しております。また、脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認

## 詳細

新機能は、Amazon Bedrockのbedrock-runtimeエンドポイントにおいて、OpenAIの専門サイバーセキュリティモデルであるDaybreak Red: GPT-5.6 CyberおよびDaybreak Blue: GPT-5.6 Solをご利用いただけるようになったことです。対象のお客様は、米国およびグローバルのクロスリージョン推論プロファイルを通じて、本モデルにアクセスできます。本アップデートは、脆弱性発見、検知エンジニアリング、インシデント対応などの防御的ワークフローを行うセキュリティチームに適しております。また、脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスクを行うお客様にも有用です。Daybreak Blueは脆弱性発見・検知エンジニアリング・インシデント対応などの防御的ワークフローに適した始点モデルです。Daybreak Redは脆弱性研究、エクスプロイト再現、緩和策開発などの高度な認可済みタスク向けで、拒否閾値を低く設定し、強化された身元確認・監視・アクセス制御と組み合わせて調査の速度と深度を向上させます。推論データはモデル訓練に使用されず、OpenAIへのデータ共有のオプトインも不要です。利用にはOpenAIのDaybreak Accessへの登録が必要です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/openai-gpt-daybreak-on-amazon-bedrock-runtime/)
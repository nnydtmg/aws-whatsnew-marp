---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS AppConfigがAIモデル呼び出しとプロンプト設定の管理をサポート

AWS AppConfig launches support for managing native AI model and AI prompt configuration

**What's New** | 2026-11-19T05:00:00

---

## 概要

- AWS AppConfigは、生成AI向けのモデル設定とプロンプトをコード再デプロイなしで安全に管理できる新機能を提供します。
- 生成AIソリューションを迅速かつ安全に運用したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS AppConfig launches support for managing native AI model and AI prompt configuration - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-appconfig-native-ai-model-invocation-prompt-configurations)

- **AWS Systems Manager AppConfig - Amazon Web Services**
  [詳細](https://aws.amazon.com/systems-manager/features/appconfig)

- **Swap Your LLM Without a Deploy: D...

---

## 変更内容・新機能

AWS AppConfigが生成AIアプリケーション向けにAIモデル呼び出し設定（AI model invocation configurations）とAIプロンプト設定（AI prompt configurations）という2つの新しい設定プロファイルタイプを導入しました。アプリケーションの実行中にコードを再デプロイせずにモデル設定やプロンプトを変更できます。段階的なロールアウトと自動ロールバックにより、安全に設定を更新できます。

AIプロンプト設定はプロンプトを独立してバージョン管理されるアーティファクトとして保存します。モデル設定を変更せずにプロンプト単体を更新・最適化でき、複数アプリケーションで再利用できます。

---

## まとめ

- AWS AppConfig launches support for managing native AI model and AI prompt configuration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-appconfig-native-ai-model-invocation-prompt-configurations/)

### 関連情報

- [AWS AppConfig launches support for managing native AI model and AI prompt configuration - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-appconfig-native-ai-model-invocation-prompt-configurations)
- [AWS Systems Manager AppConfig - Amazon Web Services](https://aws.amazon.com/systems-manager/features/appconfig)
- [Swap Your LLM Without a Deploy: Dynamic Model Routing on Bedrock with AWS AppConfig](https://dev.to/maruchin_tech_555/swap-your-llm-without-a-deploy-dynamic-model-routing-on-bedrock-with-aws-appconfig-48bn)
- [Implementing dynamic feature flags with AWS AppConfig on AWS Lambda](https://aws.amazon.com/blogs/compute/implementing-dynamic-feature-flags-with-aws-appconfig-on-aws-lambda)
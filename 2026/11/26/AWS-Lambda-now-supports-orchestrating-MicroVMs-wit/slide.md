---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functions で MicroVM のオーケストレーションが可能に

AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions

**What's New** | 2026-11-25T20:00:00

---

## 概要

- AWS Lambdaは、Lambda durable functionsによるMicroVMオーケストレーション機能のデベロッパープレビューを発表しました。
- 本機能は、信頼できないコードやAI生成コードを分離環境で実行する開発者に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-11-25-aws-lambda-now-supports-orchestrating-microvms-with-lambda-durable-functions)

- **AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-du...

---

## 変更内容・新機能

AWSは、Lambda durable functionsでMicroVMをオーケストレーションする新拡張機能のデベロッパープレビューを発表しました。本機能は、MicroVM上での作業実行とライフサイクル管理のための耐久性のある操作を追加します。個別タスクの実行や、ファイルとメモリを共有するセッションの起動、複数MicroVMの並列オーケストレーションが可能です。進捗のチェックポイント、失敗時の再試行、Amazon SQSやAmazon EventBridgeからの起動に対応します。本アップデートは、ソフトウェアファクトリーやセキュリティスキャナーを構築する開発者に適しています。信頼できないコードやエージェント生成コードを分離サンドボックスで実行するCI/CDジョブやAIワークフローの構築にも適しています。

---

## まとめ

- AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm/)

### 関連情報

- [AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions | The AWS News Feed](https://aws-news.com/article/2026-11-25-aws-lambda-now-supports-orchestrating-microvms-with-lambda-durable-functions)
- [AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm)
- [AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions](https://www.linkedin.com/posts/janakagarwal_aws-lambda-now-supports-orchestrating-microvms-activity-7531488092772356096-7mhJ)
- [AWS Lambda 2026: The Serverless Glow-Up Durable Functions and MicroVMs](https://medium.com/@manishpaul903041/aws-lambda-2026-the-serverless-glow-up-durable-functions-and-microvms-49d19ba71843)
- [I Tried Running Lambda MicroVMs Jobs Using an Extension of Lambda Durable Functions | DevelopersIO](https://dev.classmethod.jp/en/articles/lambda-durable-functions-microvm-orchestration)
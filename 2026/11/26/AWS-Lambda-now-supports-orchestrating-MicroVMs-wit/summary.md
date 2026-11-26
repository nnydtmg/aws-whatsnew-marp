# AWS Lambda durable functions で MicroVM のオーケストレーションが可能に

AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions

**カテゴリ:** What's New
**公開日:** 2026-11-25T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm/)

このページでは、AWS What's Newで発表された「AWS Lambda now supports orchestrating MicroVMs with Lambda durable functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、Lambda durable functionsによるMicroVMオーケストレーション機能のデベロッパープレビューを発表しました。本機能は、信頼できないコードやAI生成コードを分離環境で実行する開発者に適しています。

## このアップデートで何が変わったか

AWSは、Lambda durable functionsでMicroVMをオーケストレーションする新拡張機能のデベロッパープレビューを発表しました。本機能は、MicroVM上での作業実行とライフサイクル管理のための耐久性のある操作を追加します。個別タスクの実行や、ファイルとメモリを共有するセッションの起動、複数MicroVMの並列オーケストレーションが可能です。進捗のチェックポイント、失敗時の再試行、Amazon SQSやAmazon EventBridgeからの起動に対応します。本アップデートは、ソフトウェアファクトリーやセキュリティスキャナーを構築する開発者に適しています。信頼できないコードやエージェント生成コードを分離サンドボックスで実行するCI/CDジョブやAIワークフローの構築にも適しています。

## 対象ユーザー

AWSは、Lambda durable functionsでMicroVMをオーケストレーションする新拡張機能のデベロッパープレビューを発表しました。本機能は、MicroVM上での作業実行とライフサイクル管理のための耐久性のある操作を追加します。個別タスクの実行や、ファイルとメモリを共有するセッションの起動、複数MicroVMの並列オーケストレーションが可能です。進捗のチェックポイント、失敗時の再試行、Amazon SQSやAmazon EventBridgeからの起動に対応します。本アップデートは、ソフトウェアファクトリーやセキュリティスキャナーを構築する開発者に適しています。信頼できないコ

## 詳細

AWSは、Lambda durable functionsでMicroVMをオーケストレーションする新拡張機能のデベロッパープレビューを発表しました。本機能は、MicroVM上での作業実行とライフサイクル管理のための耐久性のある操作を追加します。個別タスクの実行や、ファイルとメモリを共有するセッションの起動、複数MicroVMの並列オーケストレーションが可能です。進捗のチェックポイント、失敗時の再試行、Amazon SQSやAmazon EventBridgeからの起動に対応します。本アップデートは、ソフトウェアファクトリーやセキュリティスキャナーを構築する開発者に適しています。信頼できないコードやエージェント生成コードを分離サンドボックスで実行するCI/CDジョブやAIワークフローの構築にも適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm/)
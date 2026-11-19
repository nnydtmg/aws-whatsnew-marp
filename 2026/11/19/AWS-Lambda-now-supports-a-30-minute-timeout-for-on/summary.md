# AWS LambdaのオンデマンドEvent Functionsが30分タイムアウトに対応

AWS Lambda now supports a 30-minute timeout for on-demand Event Functions

**カテゴリ:** What's New
**公開日:** 2026-11-19T19:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-30-minute-ondemand-event-functions/)

このページでは、AWS What's Newで発表された「AWS Lambda now supports a 30-minute timeout for on-demand Event Functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS LambdaのオンデマンドEvent Functionsが30分のタイムアウトに対応しました。長時間実行ワークロードをお持ちのお客様に再設計不要でご利用いただけます。

## このアップデートで何が変わったか

AWS LambdaはオンデマンドEvent Functions向けに30分のタイムアウトを新たにサポートします。同期・非同期・ESM呼び出しの従来15分制限が倍増します。Lambda Managed Instancesの同期呼び出しも最大30分をサポートします。非同期およびESM呼び出しは2026年9月に発表された90分タイムアウトを維持します。AI推論やメディア処理、金融計算などの長時間ワークロードを再アーキテクチャなしで実行できます。イベント駆動プロセッサ、APIバックエンド、データパイプラインを構築するお客様に適しています。オンデマンドで長時間連続実行が必要なデータ集約型ワークロードに有益です。Lambda durable functionsやAWS Step Functions Standard workflowsからも利用できます。オンデマンドEvent Functionsの30分タイムアウトはすべての商用AWSリージョンで利用可能です。Lambda Managed Instancesでは同期呼び出しがLMI提供リージョンで利用可能です。Lambdaコンソール、AWS CL

## 対象ユーザー

AWS LambdaはオンデマンドEvent Functions向けに30分のタイムアウトを新たにサポートします。同期・非同期・ESM呼び出しの従来15分制限が倍増します。Lambda Managed Instancesの同期呼び出しも最大30分をサポートします。非同期およびESM呼び出しは2026年9月に発表された90分タイムアウトを維持します。AI推論やメディア処理、金融計算などの長時間ワークロードを再アーキテクチャなしで実行できます。イベント駆動プロセッサ、APIバックエンド、データパイプラインを構築するお客様に適しています。オンデマンドで長時間連続実行が必要なデータ集約型ワークロードに

## 詳細

AWS LambdaはオンデマンドEvent Functions向けに30分のタイムアウトを新たにサポートします。同期・非同期・ESM呼び出しの従来15分制限が倍増します。Lambda Managed Instancesの同期呼び出しも最大30分をサポートします。非同期およびESM呼び出しは2026年9月に発表された90分タイムアウトを維持します。AI推論やメディア処理、金融計算などの長時間ワークロードを再アーキテクチャなしで実行できます。イベント駆動プロセッサ、APIバックエンド、データパイプラインを構築するお客様に適しています。オンデマンドで長時間連続実行が必要なデータ集約型ワークロードに有益です。Lambda durable functionsやAWS Step Functions Standard workflowsからも利用できます。オンデマンドEvent Functionsの30分タイムアウトはすべての商用AWSリージョンで利用可能です。Lambda Managed Instancesでは同期呼び出しがLMI提供リージョンで利用可能です。Lambdaコンソール、AWS CLI、AWS SDKs、AWS CloudFormation、AWS CDK、AWS SAMで設定可能です。Kiro、Claude Code、CodexとAgent Toolkit for AWSでも設定できます。標準のAWS Lambda料金が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-30-minute-ondemand-event-functions/)
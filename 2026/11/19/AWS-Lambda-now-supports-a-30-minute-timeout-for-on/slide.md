---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaのオンデマンドEvent Functionsが30分タイムアウトに対応

AWS Lambda now supports a 30-minute timeout for on-demand Event Functions

**What's New** | 2026-11-19T19:00:00

---

## 概要

- AWS LambdaのオンデマンドEvent Functionsが30分のタイムアウトに対応しました。
- 長時間実行ワークロードをお持ちのお客様に再設計不要でご利用いただけます。

---

## 前提・背景

### これまでの課題

AWS LambdaはオンデマンドEvent Functions向けに30分のタイムアウトを新たにサポートします。同期・非同期・ESM呼び出しの従来15分制限が倍増します。Lambda Managed Instancesの同期呼び出しも最大30分をサポートします。非同期およびESM呼び出しは2026年9月に発表された90分タイムアウトを維持します。AI推論やメディア処理、金融計算などの長時間ワークロードを再アーキテクチャなしで実行できます。イベント駆動プロセッサ、APIバックエンド、データパイプ

---

### 関連する最近の動向

- **Announcing 90-minute function timeout on AWS Lambda Managed Instances**
  [詳細](https://aws.amazon.com/blogs/com...

---

## 変更内容・新機能

AWS LambdaはオンデマンドEvent Functions向けに30分のタイムアウトを新たにサポートします。同期・非同期・ESM呼び出しの従来15分制限が倍増します。Lambda Managed Instancesの同期呼び出しも最大30分をサポートします。非同期およびESM呼び出しは2026年9月に発表された90分タイムアウトを維持します。AI推論やメディア処理、金融計算などの長時間ワークロードを再アーキテクチャなしで実行できます。イベント駆動プロセッサ、APIバックエンド、データパイプラインを構築するお客様に適しています。オンデマンドで長時間連続実行が必要なデータ集約型ワークロードに有益です。Lambda durable functionsやAWS Step Functions Standard workflowsからも利用できます。オンデマンドEvent Functionsの30分タイムアウトはすべての商用AWSリージョンで利用可能です。Lambda Managed Instancesでは同期呼び出しがLMI提供リージョンで利用可能です。Lambdaコンソール、AWS CL

---

## まとめ

- AWS Lambda now supports a 30-minute timeout for on-demand Event Functions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-30-minute-ondemand-event-functions/)

### 関連情報

- [Announcing 90-minute function timeout on AWS Lambda Managed Instances](https://aws.amazon.com/blogs/compute/announcing-90-minute-function-timeout-on-aws-lambda-managed-instances)
- [AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function)
- [Configure Lambda Event Function timeout](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html)
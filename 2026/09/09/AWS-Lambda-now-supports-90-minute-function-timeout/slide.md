---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Managed Instances が関数タイムアウト最大90分をサポート

AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances

**What's New** | 2026-09-09T18:00:00

---

## 概要

- AWS Lambda Managed Instancesにおいて、非同期およびESM呼び出しの関数タイムアウトが最大90分まで延長されました。
- 長時間の連続実行が必要なデータ処理やAI推論などのワークロードをご利用のお客様に適した更新です。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function)

- **Understanding the Lambda Managed Instances execution environment**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-execution-environment.html)

- **Configure Lambda functi...

---

## 変更内容・新機能

AWS Lambdaは、Lambda Managed Instances上の非同期およびESM呼び出しにおいて、最大90分の関数タイムアウトをサポートするようになりました。本機能は伝来の15分制限から6倍の延長となり、同期呼び出しは伝来どおり15分のままです。本更新は、メディアトランスコーディング、金融計算、AI推論など長時間の連続実行が必要なデータ集約型ワークロードをご利用のお客様に適しております。アーキテクチャの再設計なしに長時間ジョブを実行したいお客様にも有益です。AWS Lambda Console、AWS CLI、Lambda API、IaCツール、Agent Toolkit for AWSで設定可能です。Lambda Managed Instancesが利用可能なすべてのAWSリージョンで利用できます。

---

## まとめ

- AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function/)

### 関連情報

- [AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function)
- [Understanding the Lambda Managed Instances execution environment](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-execution-environment.html)
- [Configure Lambda function timeout](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html)
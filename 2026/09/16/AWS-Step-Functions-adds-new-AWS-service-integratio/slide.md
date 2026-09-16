---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Step Functionsが新サービス統合を自動追加、Lambda MicroVMsから開始

AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs

**What's New** | 2026-09-15T18:54:00

---

## 概要

- AWS Step Functionsは、新しいAWSサービスのSDK統合を自動的に追加するようになりました。
- これにより、お客様は最新のAWSサービスをワークフローで迅速にオーケストレーションできるようになります。
- 最初の対象としてAWS Lambda MicroVMs、AWS Lambda Coreなどが含まれます。
- 今後、新しいAWSサービスはリリース後数週間以内にStep Functionsの統合として自動的に追加されます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-integrations/)

- **AWS Step Functions adds 28 new service integrations, including Amazon Bedrock AgentCore - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-s...

---

## 変更内容・新機能

AWS Step Functionsは、新しいAWSサービスや機能のAWS SDK統合をリリース後数週間以内に自動的に追加します。最初の対象はAWS Lambda MicroVMs、AWS Lambda Coreなどです。AWS Lambda CoreとAWS Lambda MicroVMsのサービス統合により、カスタムの調整コードを書くことなくエージェントワークフローをオーケストレーションできます。Step Functionsを使ってLambda MicroVMsを起動し、各エージェントタスクに対して分離されたセキュアな実行環境を提供できます。環境の起動に失敗した場合は組み込みのリトライ機能が動作します。ParallelまたはMapステートを使って複数タスクを同時実行し、タスク完了時に環境を自動終了できます。Lambda Coreを使って、同じワークフロー内でMicroVM環境が内部データベースやAPIにセキュアに到達するためのプライベートネットワーキングを設定できます。この拡張にはAWS Partner Central Revenue Measurement、AWS Resilie

---

## まとめ

- AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-integrations/)

### 関連情報

- [AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-integrations/)
- [AWS Step Functions adds 28 new service integrations, including Amazon Bedrock AgentCore - AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-sdk-integrations)
- [Recent feature launches - AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/recent-launches.html)
- [AWS Step Functions Tutorial: 12 Steps, 90 Min [2026]](https://tech-insider.org/how-to-set-up-aws-step-functions-2026)
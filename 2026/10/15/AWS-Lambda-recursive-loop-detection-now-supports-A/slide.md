---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスに対応

AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses

**What's New** | 2026-10-14T18:00:00

---

## 概要

- AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスに対応し、Lambda Event FunctionsとEventBridgeカスタムイベントバス間の再帰ループを自動検出・停止するようになりました。
- デフォルトで有効であり設定は不要で、AWS Health Dashboardへ通知を送信します。
- この更新はEventBridgeとLambdaで自動化を構築するお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Use Lambda recursive loop detection to prevent infinite loops - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/invocation-recursion.html)

- **Detecting and stopping recursive loops in AWS Lambda functions | AWS Compute Blog**
  [詳細](https://aws.amazon.com/blogs/compute/detecting-and-stopping-recursive-loops-in-aws-lambda-functions)

- **AWS Lambda recursive lo...

---

## 変更内容・新機能

AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスを新たにサポートしました。Lambda Event FunctionsとEventBridgeカスタムイベントバス間の再帰ループを自動検出し停止します。デフォルトで有効であり設定は不要で、検出時にはAWS Health Dashboardへトラブルシューティング手順付きの通知を送信します。この機能はEventBridgeカスタムイベントバスが利用可能なすべての商用AWSリージョンで利用できます。意図的に再帰ループを使用する場合は、PutFunctionRecursionConfig APIで個別の関数の検出を無効化できます。自動化ワークフローを構築し誤設定による予期しない課金を防ぎたいお客様に役立ちます。

---

## まとめ

- AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-recursive-loops-eventbridge-custom)

### 関連情報

- [Use Lambda recursive loop detection to prevent infinite loops - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/invocation-recursion.html)
- [Detecting and stopping recursive loops in AWS Lambda functions | AWS Compute Blog](https://aws.amazon.com/blogs/compute/detecting-and-stopping-recursive-loops-in-aws-lambda-functions)
- [AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-recursive-loops-eventbridge-custom)
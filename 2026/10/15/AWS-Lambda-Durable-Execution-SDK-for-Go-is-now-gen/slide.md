---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Durable Execution SDK for Go が一般提供開始

AWS Lambda Durable Execution SDK for Go is now generally available

**What's New** | 2026-10-15T18:23:00

---

## 概要

- AWS Lambda Durable Execution SDK for Goが一般提供開始となり、Go開発者はカスタム進捗追跡なしで長時間実行ワークフローを構築できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda Durable Functions Are GA for Java: When Should You Drop Step Functions?**
  [詳細](https://www.javierinthecloud.com/p/fcb36ccc-77a8-478a-a7c6-48d380fb47ac)

- **AWS Durable Execution SDK for .NET now Generally Available | AWS Developer Tools Blog**
  [詳細](https://aws.amazon.com/blogs/developer/aws-durable-execution-sdk-for-net-now-generally-available)

- **AWS Lambda du...

---

## 変更内容・新機能

-新機能は、AWS Lambda Durable Execution SDK for Goの一般提供開始です。
- 本SDKにより、Go開発者はLambda durable functionsを使用して回復力のある長時間実行ワークフローを構築できます。
- インフラストラクチャ自動化、承認ゲート付きのデプロイロールアウト、AIモデル呼び出しと人間レビュー待機などのマルチステップアプリケーションを、カスタムの進捗追跡なしで作成できます。
- 進捗は自動的にチェックポイントされ、外部イベントの待機時に最大1年間実行を一時停止できます。
- 既存のGoツールと連携し、go getで追加してprovided.al2023ランタイム上に単一の静的バイナリとしてデプロイできます。
- durabletestパッケージによるローカルテストとdurablelintアナライザーによる検証が可能です。
- 本アップデートは、Goで長時間実行ワークフローを構築する開発者に適しています。

---

## まとめ

- AWS Lambda Durable Execution SDK for Go is now generally available について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-go-sdk-support/)

### 関連情報

- [AWS Lambda Durable Functions Are GA for Java: When Should You Drop Step Functions?](https://www.javierinthecloud.com/p/fcb36ccc-77a8-478a-a7c6-48d380fb47ac)
- [AWS Durable Execution SDK for .NET now Generally Available | AWS Developer Tools Blog](https://aws.amazon.com/blogs/developer/aws-durable-execution-sdk-for-net-now-generally-available)
- [AWS Lambda durable execution SDK for .NET is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/lambdadf-dotnet)
- [AWS Lambda durable functions now supports custom Durable Execution SDK](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-durable-custom-sdk)
- [Durable execution SDK - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-execution-sdk.html)
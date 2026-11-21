---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaがEvent Functionの状態変更イベントをAmazon EventBridgeに公開

AWS Lambda now publishes Event Function state change events to Amazon EventBridge

**What's New** | 2026-11-20T22:40:00

---

## 概要

- AWS Lambdaは、Event Functionの状態変更イベントをAmazon EventBridgeに公開する新機能を提供します。
- 関数の作成・更新・公開・削除などでバージョン状態が変わるたびにイベントが自動公開され、GetFunction APIのポーリングなしで呼び出し可能化・更新完了・失敗時に自動化を起動できます。
- 全商用AWSリージョンで追加料金なしで利用可能です。

---

## 前提・背景

### これまでの課題

これまではデプロイメントパイプラインがGetFunction APIをポーリングして状態変更を追跡する必要があり、APIクォータの消費、パイプラインの遅延、カスタムリトライ論理による運用オーバーヘッドが課題でした。例えば、新バージョンがアクティブになった時点で統合テストを実行しエイリアストラフィックを切り替える、といった流れを事件駆動で実現できます。

---

### 関連する最近の動向

- **AWS Lambda now publishes Event Function state change events to Amazon EventBridge - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-function-state-events)

- ...

---

## 変更内容・新機能

AWS LambdaがEvent Functionの状態変更イベントをAmazon EventBridgeに公開する機能を開始しました。関数の作成、更新、公開、削除などの顧客操作によりバージョンの状態が変わるたびにイベントが発行されます。GetFunction APIをポーリングせずに、関数が呼び出し可能になったとき、更新が完了したとき、操作が失敗したときに自動化をトリガーできます。

EventBridgeルールを関数ARN、詳細タイプ、状態などでマッチさせ、Step Functions、Lambda、SNS、SQSなどのターゲットにルーティングできます。ルールはEventBridgeコンソール、AWS CLI、AWS SDK、AWS CloudFormation、AWS CDK、AWS SAMで作成可能です。全商用AWSリージョンで利用可能で、イベントは追加料金なしで自動公開されます（ターゲットの起動には標準料金が適用）。プラットフォームチーム・DevOpsチーム、数千の関数を運用し状態変更に応じてデプロイメントパイプラインの次ステップを実行する組織、API・イベント処理・マルチス

---

## ユースケース

これまではデプロイメントパイプラインがGetFunction APIをポーリングして状態変更を追跡する必要があり、APIクォータの消費、パイプラインの遅延、カスタムリトライ論理による運用オーバーヘッドが課題でした。例えば、新バージョンがアクティブになった時点で統合テストを実行しエイリアストラフィックを切り替える、といった流れを事件駆動で実現できます。

---

## まとめ

- AWS Lambda now publishes Event Function state change events to Amazon EventBridge について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-function-state-events/)

### 関連情報

- [AWS Lambda now publishes Event Function state change events to Amazon EventBridge - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-function-state-events)
- [Automating Step Functions event delivery with EventBridge - AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/eventbridge-integration.html)
- [Event-driven .NET applications with AWS Lambda and Amazon EventBridge](https://aws.amazon.com/blogs/dotnet/event-driven-net-applications-with-aws-lambda-and-amazon-eventbridge)
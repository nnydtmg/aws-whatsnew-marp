# AWS Step Functionsが新サービス統合を自動追加、Lambda MicroVMsから開始

AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs

**カテゴリ:** What's New
**公開日:** 2026-09-15T18:54:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-integrations/)

このページでは、AWS What's Newで発表された「AWS Step Functions adds new AWS service integrations automatically, starting with AWS Lambda MicroVMs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Step Functionsは、新しいAWSサービスのSDK統合を自動的に追加するようになりました。これにより、お客様は最新のAWSサービスをワークフローで迅速にオーケストレーションできるようになります。最初の対象としてAWS Lambda MicroVMs、AWS Lambda Coreなどが含まれます。今後、新しいAWSサービスはリリース後数週間以内にStep Functionsの統合として自動的に追加されます。

## このアップデートで何が変わったか

AWS Step Functionsは、新しいAWSサービスや機能のAWS SDK統合をリリース後数週間以内に自動的に追加します。最初の対象はAWS Lambda MicroVMs、AWS Lambda Coreなどです。AWS Lambda CoreとAWS Lambda MicroVMsのサービス統合により、カスタムの調整コードを書くことなくエージェントワークフローをオーケストレーションできます。Step Functionsを使ってLambda MicroVMsを起動し、各エージェントタスクに対して分離されたセキュアな実行環境を提供できます。環境の起動に失敗した場合は組み込みのリトライ機能が動作します。ParallelまたはMapステートを使って複数タスクを同時実行し、タスク完了時に環境を自動終了できます。Lambda Coreを使って、同じワークフロー内でMicroVM環境が内部データベースやAPIにセキュアに到達するためのプライベートネットワーキングを設定できます。この拡張にはAWS Partner Central Revenue Measurement、AWS Resilie

## 対象ユーザー

AWS Step Functionsは、新しいAWSサービスや機能のAWS SDK統合をリリース後数週間以内に自動的に追加します。最初の対象はAWS Lambda MicroVMs、AWS Lambda Coreなどです。AWS Lambda CoreとAWS Lambda MicroVMsのサービス統合により、カスタムの調整コードを書くことなくエージェントワークフローをオーケストレーションできます。Step Functionsを使ってLambda MicroVMsを起動し、各エージェントタスクに対して分離されたセキュアな実行環境を提供できます。環境の起動に失敗した場合は組み込みのリトライ機能

## 詳細

AWS Step Functionsは、新しいAWSサービスや機能のAWS SDK統合をリリース後数週間以内に自動的に追加します。最初の対象はAWS Lambda MicroVMs、AWS Lambda Coreなどです。AWS Lambda CoreとAWS Lambda MicroVMsのサービス統合により、カスタムの調整コードを書くことなくエージェントワークフローをオーケストレーションできます。Step Functionsを使ってLambda MicroVMsを起動し、各エージェントタスクに対して分離されたセキュアな実行環境を提供できます。環境の起動に失敗した場合は組み込みのリトライ機能が動作します。ParallelまたはMapステートを使って複数タスクを同時実行し、タスク完了時に環境を自動終了できます。Lambda Coreを使って、同じワークフロー内でMicroVM環境が内部データベースやAPIにセキュアに到達するためのプライベートネットワーキングを設定できます。この拡張にはAWS Partner Central Revenue Measurement、AWS Resilience Hub V2、AWS Support Authorization、Amazon SageMaker Job Runtimeも含まれます。今後、新しいAWSサービスは追加の設定や操作なしに、リリース後数週間以内にStep Functionsの統合として自動的に表示されます。更新は継続的になるため、新しいAWS SDKサービス統合の更新をハイライトするWhat's New投稿は今後公開されなくなります。これらの機能強化は、AWS Step Functionsが利用可能なすべてのAWSリージョンで一般提供されています。特定のサービスとAPIアクションは、対象サービスのAWSリージョンでの可用性に依存します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-integrations/)
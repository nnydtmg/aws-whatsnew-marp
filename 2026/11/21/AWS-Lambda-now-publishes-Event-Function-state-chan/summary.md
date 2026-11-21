# AWS LambdaがEvent Functionの状態変更イベントをAmazon EventBridgeに公開

AWS Lambda now publishes Event Function state change events to Amazon EventBridge

**カテゴリ:** What's New
**公開日:** 2026-11-20T22:40:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-function-state-events/)

このページでは、AWS What's Newで発表された「AWS Lambda now publishes Event Function state change events to Amazon EventBridge」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、Event Functionの状態変更イベントをAmazon EventBridgeに公開する新機能を提供します。関数の作成・更新・公開・削除などでバージョン状態が変わるたびにイベントが自動公開され、GetFunction APIのポーリングなしで呼び出し可能化・更新完了・失敗時に自動化を起動できます。全商用AWSリージョンで追加料金なしで利用可能です。

## このアップデートで何が変わったか

AWS LambdaがEvent Functionの状態変更イベントをAmazon EventBridgeに公開する機能を開始しました。関数の作成、更新、公開、削除などの顧客操作によりバージョンの状態が変わるたびにイベントが発行されます。GetFunction APIをポーリングせずに、関数が呼び出し可能になったとき、更新が完了したとき、操作が失敗したときに自動化をトリガーできます。

EventBridgeルールを関数ARN、詳細タイプ、状態などでマッチさせ、Step Functions、Lambda、SNS、SQSなどのターゲットにルーティングできます。ルールはEventBridgeコンソール、AWS CLI、AWS SDK、AWS CloudFormation、AWS CDK、AWS SAMで作成可能です。全商用AWSリージョンで利用可能で、イベントは追加料金なしで自動公開されます（ターゲットの起動には標準料金が適用）。プラットフォームチーム・DevOpsチーム、数千の関数を運用し状態変更に応じてデプロイメントパイプラインの次ステップを実行する組織、API・イベント処理・マルチス

## 対象ユーザー

EventBridgeルールを関数ARN、詳細タイプ、状態などでマッチさせ、Step Functions、Lambda、SNS、SQSなどのターゲットにルーティングできます。ルールはEventBridgeコンソール、AWS CLI、AWS SDK、AWS CloudFormation、AWS CDK、AWS SAMで作成可能です。全商用AWSリージョンで利用可能で、イベントは追加料金なしで自動公開されます（ターゲットの起動には標準料金が適用）。プラットフォームチーム・DevOpsチーム、数千の関数を運用し状態変更に応じてデプロイメントパイプラインの次ステップを実行する組織、API・イベント処理

## 活用シーン

これまではデプロイメントパイプラインがGetFunction APIをポーリングして状態変更を追跡する必要があり、APIクォータの消費、パイプラインの遅延、カスタムリトライ論理による運用オーバーヘッドが課題でした。例えば、新バージョンがアクティブになった時点で統合テストを実行しエイリアストラフィックを切り替える、といった流れを事件駆動で実現できます。

## 詳細

AWS LambdaがEvent Functionの状態変更イベントをAmazon EventBridgeに公開する機能を開始しました。関数の作成、更新、公開、削除などの顧客操作によりバージョンの状態が変わるたびにイベントが発行されます。GetFunction APIをポーリングせずに、関数が呼び出し可能になったとき、更新が完了したとき、操作が失敗したときに自動化をトリガーできます。

これまではデプロイメントパイプラインがGetFunction APIをポーリングして状態変更を追跡する必要があり、APIクォータの消費、パイプラインの遅延、カスタムリトライ論理による運用オーバーヘッドが課題でした。例えば、新バージョンがアクティブになった時点で統合テストを実行しエイリアストラフィックを切り替える、といった流れを事件駆動で実現できます。

EventBridgeルールを関数ARN、詳細タイプ、状態などでマッチさせ、Step Functions、Lambda、SNS、SQSなどのターゲットにルーティングできます。ルールはEventBridgeコンソール、AWS CLI、AWS SDK、AWS CloudFormation、AWS CDK、AWS SAMで作成可能です。全商用AWSリージョンで利用可能で、イベントは追加料金なしで自動公開されます（ターゲットの起動には標準料金が適用）。プラットフォームチーム・DevOpsチーム、数千の関数を運用し状態変更に応じてデプロイメントパイプラインの次ステップを実行する組織、API・イベント処理・マルチステップワークフロー・データパイプラインを構築するお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-function-state-events/)
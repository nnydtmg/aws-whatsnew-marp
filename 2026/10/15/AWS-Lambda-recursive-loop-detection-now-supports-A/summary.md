# AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスに対応

AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses

**カテゴリ:** What's New
**公開日:** 2026-10-14T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-recursive-loops-eventbridge-custom)

このページでは、AWS What's Newで発表された「AWS Lambda recursive loop detection now supports Amazon EventBridge Custom event buses」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスに対応し、Lambda Event FunctionsとEventBridgeカスタムイベントバス間の再帰ループを自動検出・停止するようになりました。デフォルトで有効であり設定は不要で、AWS Health Dashboardへ通知を送信します。この更新はEventBridgeとLambdaで自動化を構築するお客様に適しています。

## このアップデートで何が変わったか

AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスを新たにサポートしました。Lambda Event FunctionsとEventBridgeカスタムイベントバス間の再帰ループを自動検出し停止します。デフォルトで有効であり設定は不要で、検出時にはAWS Health Dashboardへトラブルシューティング手順付きの通知を送信します。この機能はEventBridgeカスタムイベントバスが利用可能なすべての商用AWSリージョンで利用できます。意図的に再帰ループを使用する場合は、PutFunctionRecursionConfig APIで個別の関数の検出を無効化できます。自動化ワークフローを構築し誤設定による予期しない課金を防ぎたいお客様に役立ちます。

## 詳細

AWS Lambdaの再帰ループ検出がAmazon EventBridgeカスタムイベントバスを新たにサポートしました。Lambda Event FunctionsとEventBridgeカスタムイベントバス間の再帰ループを自動検出し停止します。デフォルトで有効であり設定は不要で、検出時にはAWS Health Dashboardへトラブルシューティング手順付きの通知を送信します。この機能はEventBridgeカスタムイベントバスが利用可能なすべての商用AWSリージョンで利用できます。意図的に再帰ループを使用する場合は、PutFunctionRecursionConfig APIで個別の関数の検出を無効化できます。自動化ワークフローを構築し誤設定による予期しない課金を防ぎたいお客様に役立ちます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-recursive-loops-eventbridge-custom)
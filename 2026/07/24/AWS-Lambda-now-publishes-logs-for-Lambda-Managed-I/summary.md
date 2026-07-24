# AWS Lambda、Managed Instances キャパシティプロバイダーのログ発行機能を追加

AWS Lambda now publishes logs for Lambda Managed Instances capacity providers

**カテゴリ:** What's New
**公開日:** 2026-07-24
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-managed-instances-logs/)

このページでは、AWS What's Newで発表された「AWS Lambda now publishes logs for Lambda Managed Instances capacity providers」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、Lambda Managed Instancesのキャパシティプロバイダーログ機能をCloudWatch Logsに発行するようになりました。このアップデートは、EC2インスタンス上で高容量なワークロードを運用し、スケーリング活動とインスタンスライフサイクルの可視化が必要なユーザーに最適です。

## このアップデートで何が変わったか

- ログはLMIが利用可能なすべてのAWSコマーシャルリージョンで利用可能
- このアップデートは、高容量で予測可能なワークロードを運用するユーザーに適している
- EC2の価格オプション（Savings PlansおよびReserved Instances）と組み合わせてコスト効率を実現

## 対象ユーザー

- Lambda Managed Instances を利用しているユーザー
- EC2インスタンス上でLambda関数を実行しながら、サーバーレスの運用シンプルさを維持したいユーザー
- 高容量で予測可能なワークロードを運用しているユーザー

## 詳細

### ログ機能の概要

- AWS Lambdaは、Lambda Managed Instances（LMI）キャパシティプロバイダーのログをAmazon CloudWatch Logsに発行するようになりました
- LMIにより、ユーザーはAmazon EC2インスタンス上でLambda関数を実行しながら、サーバーレスの運用シンプルさを維持できます

### ログの記録内容

- キャパシティプロバイダーログは、インスタンス起動、終了、ヘルスチェックなどのライフサイクルイベントをJSON形式で記録
- CloudWatch Logsのフィルタリング機能を使用して、失敗した操作とプロビジョニングエラーを特定可能

### ログの設定と管理

- ログはすべてのキャパシティプロバイダーでデフォルトで有効になっています
- Lambda API、Lambdaコンソール、AWS CLI、AWS SAM、またはAWS CloudFormationを使用してログ設定を変更可能
- 標準のAmazon CloudWatch Logsの料金が適用されます

### 利用可能なリージョン

- ログはLMIが利用可能なすべてのAWSコマーシャルリージョンで利用可能です

## メリット

### 運用効率の向上

- スケーリング動作のトラブルシューティングと最適化が容易に
- インスタンスライフサイクルイベントの完全な可視化
- 問題検出と原因特定の迅速化

### コスト効率

- EC2 Savings PlansおよびReserved Instancesと組み合わせての活用
- 高容量で予測可能なワークロード運用に最適

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-managed-instances-logs/)
- [AWS Lambda Managed Instances ドキュメント](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)
- [CloudWatch Logs ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/)
- [Lambda キャパシティプロバイダーのログ設定](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-monitoring-cwl.html)
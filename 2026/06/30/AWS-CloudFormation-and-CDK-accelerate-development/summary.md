# AWS CloudFormationとCDKがデプロイ前検証で開発フィードバックループを高速化

AWS CloudFormation and CDK accelerate development feedback loops with pre-deployment validation on all stack operations

**カテゴリ:** What's New
**公開日:** 2026-06-30T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation/)

このページでは、AWS What's Newで発表された「AWS CloudFormation and CDK accelerate development feedback loops with pre-deployment validation on all stack operations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CloudFormationは、Create StackおよびUpdate Stack操作時にデプロイ前検証を自動実行し、リソースプロビジョニング前に一般的なデプロイエラーを数秒で検出できるようになりました。これにより、開発速度が加速し、プロビジョニングとロールバックのサイクルを待つ必要がなくなります。

## このアップデートで何が変わったか

- AWS CloudFormationは、Create StackおよびUpdate Stack操作時に自動的なデプロイ前検証を実行するようになりました。

- サービスクォータ制限検証、AWS Config Recorderの競合検出、ECRリポジトリ削除準備状況検証の3つの新しい検証チェックが追加されました。

## 対象ユーザー

- AWS CloudFormationは、Create StackおよびUpdate Stack操作時に自動的なデプロイ前検証を実行するようになりました。

## 詳細

- AWS CloudFormationは、Create StackおよびUpdate Stack操作時に自動的なデプロイ前検証を実行するようになりました。

- この機能により、リソースのプロビジョニングが開始される前に、一般的なデプロイエラーを数秒で検出できるようになりました。

- プロパティ構文エラー、リソース名の競合、S3バケットの空性制約などの検証がカバーされています。

- サービスクォータ制限検証、AWS Config Recorderの競合検出、ECRリポジトリ削除準備状況検証の3つの新しい検証チェックが追加されました。

- CDKでは、cdk deployおよびcdk validateコマンドが構造化された検証結果をレポートとして表示するようになりました。

- 検証エラーはDescribeEvents APIまたはCloudFormationコンソールのEvents タブで確認できます。

- この機能はデフォルトで有効であり、DisableValidationパラメータまたは--disable-validationフラグを使用してスキップできます。

- この機能は、中国を除くすべてのAWSリージョンで利用可能です。

- この更新は、手動での反復作業からCI/CDパイプライン、AIエージェントによるインフラストラクチャプロビジョニングまで、すべてのデプロイワークフローに対応しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation/)
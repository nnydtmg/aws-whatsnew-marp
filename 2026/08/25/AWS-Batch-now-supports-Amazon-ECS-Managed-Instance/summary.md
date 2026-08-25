# AWS Batch が Amazon ECS Managed Instances に対応

AWS Batch now supports Amazon ECS Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-08-25T19:36:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-batch-on-ecs-managed-instances/)

このページでは、AWS What's Newで発表された「AWS Batch now supports Amazon ECS Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Batchは、Amazon ECS Managed Instancesを新しいコンピュート オプションとして導入し、GPU加速ワークロードの実行と運用管理の自動化を実現しました。このアップデートにより、顧客はインフラストラクチャ管理の負担を軽減しながら、柔軟なキャパシティ オプション（On-Demand、Spot、リザーベッド）でバッチジョブを実行できるようになりました。

## このアップデートで何が変わったか

- AWSがAMIアップデート、セキュリティパッチ、インスタンスライフサイクル管理を自動的に処理するため、顧客管理のAmazon EC2インフラストラクチャの運用オーバーヘッドが排除されます。

- AWS Batchが利用可能なすべてのAWSリージョンでサポートされています。

## 詳細

- AWS Batchが新しいコンピュート オプションとして、Amazon ECS Managed Instancesをサポートするようになりました。

- GPU加速およびコンピュート集約的なバッチワークロードをAWS管理インフラストラクチャ上で実行できるようになりました。

- AWSがAMIアップデート、セキュリティパッチ、インスタンスライフサイクル管理を自動的に処理するため、顧客管理のAmazon EC2インフラストラクチャの運用オーバーヘッドが排除されます。

- AWS Batch CreateComputeEnvironment APIまたはAWS Batch Management Consoleを使用して、ECS MI コンピュート環境を作成できます。

- インスタンスタイプとネットワーク設定をmanagedInstancesProviderブロックで指定することが可能です。

- On-Demand、Spot、またはリザーベッドキャパシティを使用してジョブを送信できます。

- AWS Batchが利用可能なすべてのAWSリージョンでサポートされています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-batch-on-ecs-managed-instances/)
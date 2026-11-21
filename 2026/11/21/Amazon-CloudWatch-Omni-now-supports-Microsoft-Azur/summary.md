# Amazon CloudWatch OmniがMicrosoft Azureのログ・メトリクス・トレースに対応

Amazon CloudWatch Omni now supports Microsoft Azure platform logs, metrics and traces

**カテゴリ:** What's New
**公開日:** 2026-11-21T01:10:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-microsoft-azure)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Omni now supports Microsoft Azure platform logs, metrics and traces」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Omniは、Microsoft Azureのプラットフォームログ、メトリクス、トレースの収集を新たにサポートします。AWSとAzureの両方でワークロードを運用するチームは、別々の監視ツールやカスタムパイプラインなしに、AzureテレメトリをAWSテレメトリと同じ場所で確認できます。中央運用、DevOps、SREチームに適しています。

## このアップデートで何が変わったか

新機能:
- Azureリソースログの収集
- Azure Monitorのプラットフォームメトリクスの収集
- 仮想ネットワーク (VNet) フローログの収集
- Application Insightsのトレースの収集

利用可能領域:
- Azureテレメトリ収集はすべてのAzure Public Regionsで利用可能
- CloudWatch Omniが利用可能なすべてのリージョンへ取り込み可能

## 対象ユーザー

Amazon CloudWatch Omni now supports collecting Azure resource logs, Azure Monitor platform metrics, virtual network (VNet) flow logs, and traces from Application Insights. Teams that run workloads on both AWS and Azure no longer need separate monitoring tools or custom pipelines to see their whole e

## 活用シーン

To get started, connect a Microsoft Entra ID tenant to your AWS account and Region. You can choose the telemetry types, subscriptions, Azure regions, resource types, and tags to collect. Azure telemetry lands in Amazon CloudWatch, and Omni spaces can monitor applications and infrastructure across cl

## 詳細

Amazon CloudWatch Omni now supports collecting Azure resource logs, Azure Monitor platform metrics, virtual network (VNet) flow logs, and traces from Application Insights. Teams that run workloads on both AWS and Azure no longer need separate monitoring tools or custom pipelines to see their whole environment. Central operations, DevOps, and site reliability engineering (SRE) teams can now view Azure telemetry alongside their AWS telemetry in one place.

To get started, connect a Microsoft Entra ID tenant to your AWS account and Region. You can choose the telemetry types, subscriptions, Azure regions, resource types, and tags to collect. Azure telemetry lands in Amazon CloudWatch, and Omni spaces can monitor applications and infrastructure across cloud providers. For example, during an incident you can trace a slow request from an Azure-hosted service to its AWS dependencies without switching consoles. You can set up the connectors in the Amazon CloudWatch Omni console or with the AWS CLI.

Azure telemetry collection is available in all Azure Public Regions and can be ingested to all regions where CloudWatch Omni is available.

新機能:
- Azureリソースログの収集
- Azure Monitorのプラットフォームメトリクスの収集
- 仮想ネットワーク (VNet) フローログの収集
- Application Insightsのトレースの収集

セットアップ:
- Microsoft Entra ID テナントをAWSアカウントとリージョンに接続
- テレメトリ種別、サブスクリプション、Azureリージョン、リソースタイプ、タグを選択して収集
- Amazon CloudWatch OmniコンソールまたはAWS CLIでコネクタを設定

ユースケース:
- インシデント時にAzureホストのサービスからAWS依存リソースまで、コンソールを切り替えずに遅いリクエストを追跡
- Omni spacesでクラウドプロバイダー跨ぎのアプリケーションとインフラを監視

利用可能領域:
- Azureテレメトリ収集はすべてのAzure Public Regionsで利用可能
- CloudWatch Omniが利用可能なすべてのリージョンへ取り込み可能

ドキュメント: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/omni-send-platform-telemetry-from-microsoft-azure.html

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-microsoft-azure)
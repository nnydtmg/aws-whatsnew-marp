# Amazon ECS Managed Instances now integrates with Amazon EC2 Capacity Reservations

**カテゴリ:** What's New
**公開日:** 2026-02-26T22:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/ecs-mi-ec2-capacity-reservations/](https://aws.amazon.com/about-aws/whats-new/2026/02/ecs-mi-ec2-capacity-reservations/)

---

## 要約

Amazon ECS Managed InstancesがAmazon EC2 Capacity Reservationsと統合され、予約済み容量を活用しながらECSが自動的にインフラストラクチャ管理を行うようになりました。このアップデートは、予測可能な容量確保とコスト効率のバランスを必要とするミッションクリティカルなワークロードを運用する企業に特に適しています。

## 詳細

- Amazon ECS Managed Instancesが、Amazon EC2 Capacity Reservationsと統合されました。

- 予測可能なワークロード可用性のために予約済み容量を活用できるようになりました。

- ECSが全てのインフラストラクチャ管理を処理します。

- 信頼性の高い容量スケーリングとコスト効率のバランスを実現できます。

- ミッションクリティカルなワークロードの高可用性を達成するのに役立ちます。

- capacityOptionTypeパラメータを「reserved」に設定することで、既存のspotおよびon-demandオプションに加えて容量予約を使用できます。

- 「reservations-only」で最大の予測可能性のために予約容量のみを使用できます。

- 「reservations-first」で予約を優先しながら、必要に応じてon-demandにフォールバックできます。

- 「reservations-excluded」で容量プロバイダーが予約を使用しないようにできます。

- AWS Management Console、AWS CLI、AWS CloudFormation、またはAWS SDKsを使用して設定できます。

- この機能は全てのAWSリージョンで利用可能です。

- このアップデートは、予測可能な容量確保とコスト最適化を必要とする組織に適しています。

- ミッションクリティカルなワークロードを運用する企業に特に有用です。

- インフラストラクチャ管理のオーバーヘッドを削減したい組織に最適です。
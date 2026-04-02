# Amazon CloudWatch expands auto-enablement to Amazon CloudFront logs and 3 additional resource types

**カテゴリ:** What's New
**公開日:** 2026-04-02T17:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement/)

---

## 要約

Amazon CloudWatchは、CloudFront、Security Hub、Bedrock AgentCoreなどの複数のリソースタイプのログに対する自動有効化機能を拡張し、顧客が組織全体またはアカウント単位でテレメトリ収集を自動的に設定できるようになりました。この機能により、手動設定なしに一貫性のあるモニタリングカバレッジを確保することができます。

## 詳細

- Amazon CloudWatchが、Amazon CloudFront標準アクセスログ、AWS Security Hub CSPMファインディングログ、Amazon Bedrock AgentCoreメモリ・ゲートウェイログおよびトレースの自動有効化をサポートするようになりました。

- 顧客は、既存および新規作成されたリソース両方に対してテレメトリを自動的に設定する有効化ルールを作成できます。

- 有効化ルールは、組織全体、特定のアカウント、またはリソースタグに基づいた特定のリソースにスコープを設定することができます。

- 中央のセキュリティチームは、組織全体のすべてのリソースに対してCloudFrontアクセスログとSecurity Hubファインディングを自動的にCloudWatch Logsに送信する単一のルールを作成できます。

- CloudWatchの自動有効化機能は、すべてのAWSコマーシャルリージョンで利用可能です。

- CloudFrontアクセスログとAWS Security Hub CSPMファインディングは組織全体の有効化ルールをサポートしており、Bedrock AgentCoreメモリおよびゲートウェイテレメトリはアカウントレベルの有効化ルールをサポートしています。

- ログ取り込みはCloudWatch料金に従って課金されます。
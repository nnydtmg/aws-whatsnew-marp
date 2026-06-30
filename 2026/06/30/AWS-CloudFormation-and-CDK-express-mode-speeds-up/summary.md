# AWS CloudFormation と CDK エクスプレスモードでインフラストラクチャデプロイメントが最大4倍高速化

AWS CloudFormation and CDK express mode speeds up infrastructure deployments by up to 4x

**カテゴリ:** What's New
**公開日:** 2026-06-30T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation-cdk/)

このページでは、AWS What's Newで発表された「AWS CloudFormation and CDK express mode speeds up infrastructure deployments by up to 4x」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CloudFormationとCDKのエクスプレスモードは、リソース設定適用時点でデプロイメントを完了させることで、インフラストラクチャのデプロイ時間を最大4倍短縮する新機能です。開発環境でインフラストラクチャを迅速に反復構築する必要がある開発者とAIエージェントにとって、デプロイメント待機時間の大幅な削減により開発効率が向上します。

## このアップデートで何が変わったか

- この機能はCloudFormationがサポートされているすべてのAWSリージョンで利用可能です。

- このアップデートは、開発環境でインフラストラクチャを迅速に反復構築する必要がある開発者とAIエージェントに最適です。

## 対象ユーザー

- AWS CloudFormationとCDKのエクスプレスモードは、インフラストラクチャのデプロイメント時間を最大4倍短縮することができます。

## 詳細

- AWS CloudFormationとCDKのエクスプレスモードは、インフラストラクチャのデプロイメント時間を最大4倍短縮することができます。

- エクスプレスモードは、トラフィック準備状況の確認やリージョン伝播などの拡張安定化チェックを待たずに、リソース設定が適用された時点でスタック操作を完了させます。

- 開発環境でのインフラストラクチャ反復作業において、CloudFrontディストリビューション作成時の5～10分の待機時間がなくなり、数秒で完了するようになります。

- エクスプレスモードはデフォルトでロールバックを無効にするため、ロールバック操作を待たずに即座に修正と再試行が可能になります。

- AWS CLIやSDK、AWS Management Consoleで`--deployment-config '{"mode": "EXPRESS"}'`を指定するか、AWS CDKユーザーは`cdk deploy --express`コマンドで有効化できます。

- テンプレートの変更は不要であり、既存のすべてのCloudFormationテンプレートとネストされたスタックで動作します。

- この機能はCloudFormationがサポートされているすべてのAWSリージョンで利用可能です。

- このアップデートは、開発環境でインフラストラクチャを迅速に反復構築する必要がある開発者とAIエージェントに最適です。

- リソースの完全な安定化を待つ必要がなくなるため、開発サイクルの高速化が実現されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation-cdk/)
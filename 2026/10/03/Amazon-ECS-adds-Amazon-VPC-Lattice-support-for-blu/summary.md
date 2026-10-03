# Amazon ECSがVPC Lattice向けにブルー/グリーン・リニア・カナリアデプロイをサポート

Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments

**カテゴリ:** What's New
**公開日:** 2026-10-02T20:18:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)

このページでは、AWS What's Newで発表された「Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSがVPC Lattice利用サービス向けにブルー/グリーン、リニア、カナリアデプロイをネイティブサポートしました。VPC Latticeでサービス間通信を行うECSのお客様が、制御されたトラフィック移行をご活用いただけます。

## このアップデートで何が変わったか

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

本アップデートにより、VPC Latticeを使用するECSのお客様は、デプロイ中にトラフィックを制御しながら移行できます。各リリースに対する確信度に応じて、ブルー/グリーンで一度に全部、リニアで等間隔に段階的に、かカナリアで小さな割合から開始するなど、トラフィック移行の速度を選択できます。

## 対象ユーザー

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

## 活用シーン

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

## 詳細

Amazon Elastic Container Service (Amazon ECS) は、Amazon VPC Lattice を使用するECSサービス向けに、組み込みのブルー/グリーン、リニア、カナリアデプロイメント戦略のサポートを追加しました。VPCやAWSアカウントを跨いだサービス間通信にVPC Latticeを使用するアプリケーションは、アップデート展開時にAmazon ECSからネイティブにマネージされたトラフィック移行を活用できます。

本アップデートにより、VPC Latticeを使用するECSのお客様は、デプロイ中にトラフィックを制御しながら移行できます。各リリースに対する確信度に応じて、ブルー/グリーンで一度に全部、リニアで等間隔に段階的に、かカナリアで小さな割合から開始するなど、トラフィック移行の速度を選択できます。

チームはプロダクショントラフィックを移行する前にテストトラフィックで新バージョンを検証できます。デプロイメントライフサイクルフック（Lambdaフックやポーズフックを含む）を使用して、カスタム検証ステップや手動承認を実行できます。

さらに、Amazon CloudWatchアラームとAmazon ECSデプロイメントサーキットブレーカーを使用して、問題が検知された場合に自動的にロールバックできます。ベークタイムにより前バージョンを納期なくロールバックできる状態で維持し、ダウンタイムなしで復元できます。

開始方法: ECSサービス設定でVPC Latticeターゲットグループ、リスナールール、デプロイ戦略を選択します。AWS Management Console、AWS CLI、AWS SDKs、Infrastructure-as-Codeツールから設定可能です。新規・既存のECSサービスの両方で有効化できます。VPC Latticeが利用可能な全AWSリージョンで提供されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)
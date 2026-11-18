# AWS Lambda Managed Instances がゼロへのスケールをサポート

AWS Lambda now supports scale to and from zero for Lambda Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-11-17T19:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero/)

このページでは、AWS What's Newで発表された「AWS Lambda now supports scale to and from zero for Lambda Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS LambdaはLambda Managed Instances上のEvent Functionsに対し実行環境をゼロまでスケールする機能を提供し、間欠的なワークロードのコスト効率を向上いたします。

## このアップデートで何が変わったか

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmazon EC2インスタンス上で実行しつつ、Lambdaの運用の簡素さを維持できます。専門的なコンピュート構成とEC2価格のメリットを活用できます。これまではトラフィックがなくても最小数の実行環境を紹介し続ける必要がありました。本機能はLambda Managed Instancesが利用可能なすべてのAWS商用リージョンで利用できます。開始するには、Lambdaコンソール、AWS CLI、AWS S

## 対象ユーザー

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmaz

## 活用シーン

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmaz

## 詳細

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmazon EC2インスタンス上で実行しつつ、Lambdaの運用の簡素さを維持できます。専門的なコンピュート構成とEC2価格のメリットを活用できます。これまではトラフィックがなくても最小数の実行環境を紹介し続ける必要がありました。本機能はLambda Managed Instancesが利用可能なすべてのAWS商用リージョンで利用できます。開始するには、Lambdaコンソール、AWS CLI、AWS SDKs、AWS CloudFormation、AWS SAM、AWS CDKでMinExecutionEnvironmentsを0に設定します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero/)
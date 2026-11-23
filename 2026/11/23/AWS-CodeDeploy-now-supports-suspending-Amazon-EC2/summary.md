# AWS CodeDeployがEC2 Auto Scalingプロセスの一時停止をサポート

AWS CodeDeploy now supports suspending Amazon EC2 Auto Scaling processes

**カテゴリ:** What's New
**公開日:** 2026-11-23T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-codedeploy-suspend-asg-processes/)

このページでは、AWS What's Newで発表された「AWS CodeDeploy now supports suspending Amazon EC2 Auto Scaling processes」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CodeDeployは、EC2インプレースデプロイ中にAmazon EC2 Auto Scalingプロセスを一時停止できるようになりました。本機能は、スケーリング活動によるデプロイ失敗を防ぎたいお客様に適しています。

## このアップデートで何が変わったか

AWS CodeDeployは、Amazon EC2 Auto ScalingグループへのEC2インプレースデプロイ中にTerminate、AZRebalance、InstanceRefresh、ScheduledActionsを一時停止できるようになりました。CodeDeployは選択したプロセスをデプロイ前に一時停止し、成功・失敗・停止時に自動で再開するため、カスタムスクリプトは不要です。デプロイグループ単位または個別デプロイ単位で設定可能で、コンソール・AWS CLI・AWS SDKから構成できます。すべてのAWSリージョン（GovCloud・中国リージョン含む）で利用可能です。

## 詳細

AWS CodeDeployは、Amazon EC2 Auto ScalingグループへのEC2インプレースデプロイ中にTerminate、AZRebalance、InstanceRefresh、ScheduledActionsを一時停止できるようになりました。CodeDeployは選択したプロセスをデプロイ前に一時停止し、成功・失敗・停止時に自動で再開するため、カスタムスクリプトは不要です。デプロイグループ単位または個別デプロイ単位で設定可能で、コンソール・AWS CLI・AWS SDKから構成できます。すべてのAWSリージョン（GovCloud・中国リージョン含む）で利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-codedeploy-suspend-asg-processes/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CodeDeployがEC2 Auto Scalingプロセスの一時停止をサポート

AWS CodeDeploy now supports suspending Amazon EC2 Auto Scaling processes

**What's New** | 2026-11-23T08:00:00

---

## 概要

- AWS CodeDeployは、EC2インプレースデプロイ中にAmazon EC2 Auto Scalingプロセスを一時停止できるようになりました。
- 本機能は、スケーリング活動によるデプロイ失敗を防ぎたいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Integrating CodeDeploy with Amazon EC2 Auto Scaling - AWS CodeDeploy**
  [詳細](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html)

- **Troubleshoot Amazon EC2 Auto Scaling issues - AWS CodeDeploy**
  [詳細](https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html)

- **Suspending Amazon EC2 Auto Scaling proce...

---

## 変更内容・新機能

AWS CodeDeployは、Amazon EC2 Auto ScalingグループへのEC2インプレースデプロイ中にTerminate、AZRebalance、InstanceRefresh、ScheduledActionsを一時停止できるようになりました。CodeDeployは選択したプロセスをデプロイ前に一時停止し、成功・失敗・停止時に自動で再開するため、カスタムスクリプトは不要です。デプロイグループ単位または個別デプロイ単位で設定可能で、コンソール・AWS CLI・AWS SDKから構成できます。すべてのAWSリージョン（GovCloud・中国リージョン含む）で利用可能です。

---

## まとめ

- AWS CodeDeploy now supports suspending Amazon EC2 Auto Scaling processes について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-codedeploy-suspend-asg-processes/)

### 関連情報

- [Integrating CodeDeploy with Amazon EC2 Auto Scaling - AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html)
- [Troubleshoot Amazon EC2 Auto Scaling issues - AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html)
- [Suspending Amazon EC2 Auto Scaling processes during deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling-suspend-processes.html)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Managed Instances がゼロへのスケールをサポート

AWS Lambda now supports scale to and from zero for Lambda Managed Instances

**What's New** | 2026-11-17T19:00:00

---

## 概要

- AWS LambdaはLambda Managed Instances上のEvent Functionsに対し実行環境をゼロまでスケールする機能を提供し、間欠的なワークロードのコスト効率を向上いたします。

---

## 前提・背景

### これまでの課題

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト

---

### 関連する最近の動向

- **AWS Lambda now supports scale to and from zero for Lambda Managed Instances**
  [詳細](https://aws.amazon.com/abo...

---

## 変更内容・新機能

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmazon EC2インスタンス上で実行しつつ、Lambdaの運用の簡素さを維持できます。専門的なコンピュート構成とEC2価格のメリットを活用できます。これまではトラフィックがなくても最小数の実行環境を紹介し続ける必要がありました。本機能はLambda Managed Instancesが利用可能なすべてのAWS商用リージョンで利用できます。開始するには、Lambdaコンソール、AWS CLI、AWS S

---

## 効果・メリット

- 新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。
- Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。
- 最小容量をプロビジョニングする必要はございません。
- 本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。
- トラフィックがない期間があるワークロードのコスト効率が向上いたします。

---

## ユースケース

新機能は、Lambda Managed Instances上で動作するEvent Functionsに対するゼロへのスケールおよびゼロからのスケールのサポートでございます。Lambdaはアイドル期間中に関数の実行環境を自動的にゼロまでスケールし、リクエストが到着したときに再びスケールアップいたします。最小容量をプロビジョニングする必要はございません。本アップデートは、非同期処理、開発環境、およびテスト環境などの間欠的なワークロードに適しております。トラフィックがない期間があるワークロードのコスト効率が向上いたします。Lambda Managed Instancesは、Lambda関数をAmaz

---

## まとめ

- AWS Lambda now supports scale to and from zero for Lambda Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero/)

### 関連情報

- [AWS Lambda now supports scale to and from zero for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero/)
- [Lambda Managed Instances - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)
- [Scaling Lambda Managed Instances - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-scaling.html)
- [What Is AWS Lambda in 2026? 5 Flavors Explained](https://ranthebuilder.cloud/blog/what-is-aws-lambda-in-2026-5-flavors-explained)
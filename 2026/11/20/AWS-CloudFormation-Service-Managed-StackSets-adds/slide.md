---
marp: true
theme: aws-whatsnew
paginate: true
---

# CloudFormation のサービス管理型 StackSets がカスタム実行ロールとネストスタックをサポート

AWS CloudFormation Service-Managed StackSets adds custom execution roles with nested stacks support

**What's New** | 2026-11-20T17:45:00

---

## 概要

- AWS CloudFormation のサービス管理型 StackSets にカスタム実行ロールが追加され、各ターゲットアカウントで権限をスコープできるようになりました。
- あわせてネストスタック、マクロ、変換も利用可能になり、組織全体へ安全にインフラを展開できます。

---

## 前提・背景

### 関連する最近の動向

- **Announcing custom execution roles for AWS CloudFormation StackSets | AWS DevOps & Developer Productivity Blog**
  [詳細](https://aws.amazon.com/blogs/devops/announcing-custom-execution-roles-for-aws-cloudformation-stacksets)

- **Create CloudFormation StackSets with service-managed permissions - AWS CloudFormation**
  [詳細](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserG...

---

## 変更内容・新機能

AWS CloudFormation StackSets が、サービス管理型スタックセット向けのカスタム実行ロールをサポートしました。これにより、各ターゲット AWS アカウントで StackSets が使用する権限をスコープできます。StackSets は、ネットワーキングやセキュリティ設定などの同一インフラを、数千のアカウントとリージョンへ一度の操作でデプロイします。カスタム実行ロールを使うと、サービス管理型スタックセットでネストスタック、マクロ、変換も利用でき、個別スタック向けの再利用可能なテンプレートを組織全体に展開できます。デフォルトでは、サービス管理型スタックセットは追加設定なしでテンプレート内の任意リソースをプロビジョニングできるロールを各アカウントで使用します。このデフォルトロールは引き続き利用可能です。新たに IAM ロール（実行ロール）を定義するテンプレートを提供すると、StackSets がデプロイ前に各アカウントへそのロールを作成します。例えば Amazon S3 バケットを作成するスタックセットでは、CloudFormation と Amazon S3 の権限

---

## ユースケース

AWS CloudFormation StackSets が、サービス管理型スタックセット向けのカスタム実行ロールをサポートしました。これにより、各ターゲット AWS アカウントで StackSets が使用する権限をスコープできます。StackSets は、ネットワーキングやセキュリティ設定などの同一インフラを、数千のアカウントとリージョンへ一度の操作でデプロイします。カスタム実行ロールを使うと、サービス管理型スタックセットでネストスタック、マクロ、変換も利用でき、個別スタック向けの再利用可能なテンプレートを組織全体に展開できます。デフォルトでは、サービス管理型スタックセットは追加設定なしで

---

## まとめ

- AWS CloudFormation Service-Managed StackSets adds custom execution roles with nested stacks support について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/stacksets-custom-execution-roles/)

### 関連情報

- [Announcing custom execution roles for AWS CloudFormation StackSets | AWS DevOps & Developer Productivity Blog](https://aws.amazon.com/blogs/devops/announcing-custom-execution-roles-for-aws-cloudformation-stacksets)
- [Create CloudFormation StackSets with service-managed permissions - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-associate-stackset-with-org.html)
- [StackSets concepts - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html)
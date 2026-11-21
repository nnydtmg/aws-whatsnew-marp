# AWS CloudFormationのアカウントあたりスタック数がデフォルト30万に増加

AWS CloudFormation increases the default stacks per account quota to 300,000

**カテゴリ:** What's New
**公開日:** 2026-11-20T12:35:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)

このページでは、AWS What's Newで発表された「AWS CloudFormation increases the default stacks per account quota to 300,000」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CloudFormationのデフォルトスタッククォータが300,000に増加しました。顧客、環境、または開発者ごとにスタックをデプロイするチームが、クォータ申請なしでスケールできるようになりました。

## このアップデートで何が変わったか

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete as one unit. Teams that deploy a separate stack for each customer, environment, or developer can now scale those patterns within a single account. A higher default quota allows you to keep growing work

## 対象ユーザー

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete a

## 活用シーン

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete a

## 詳細

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete as one unit. Teams that deploy a separate stack for each customer, environment, or developer can now scale those patterns within a single account. A higher default quota allows you to keep growing workloads in the accounts where they already run. Previously, accounts that needed more than 2,000 stacks in a Region requested a quota increase through Service Quotas. Now, the default quota covers these workloads without a request. For example, a software provider that deploys one stack for each customer can grow from 2,000 to 300,000 customer stacks in one account and Region. Existing stacks work without changes. The higher quota applies to stacks you create in the CloudFormation console or with the AWS CLI, AWS SDKs, AWS CDK, or AWS SAM. To view your stacks per account quota, open the Service Quotas console. The increased quota is available at no additional charge in all AWS Regions where AWS CloudFormation is supported.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)
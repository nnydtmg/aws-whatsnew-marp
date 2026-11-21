---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CloudFormationのアカウントあたりスタック数がデフォルト30万に増加

AWS CloudFormation increases the default stacks per account quota to 300,000

**What's New** | 2026-11-20T12:35:00

---

## 概要

- AWS CloudFormationのデフォルトスタッククォータが300,000に増加しました。
- 顧客、環境、または開発者ごとにスタックをデプロイするチームが、クォータ申請なしでスケールできるようになりました。

---

## 前提・背景

### これまでの課題

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resource

---

### 関連する最近の動向

- **AWS CloudFormation increases the default stacks per account quota to 300,000 - AWS**
  [詳細](https://aws.amazon....

---

## 変更内容・新機能

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete as one unit. Teams that deploy a separate stack for each customer, environment, or developer can now scale those patterns within a single account. A higher default quota allows you to keep growing work

---

## ユースケース

AWS CloudFormation now supports up to 300,000 stacks in each AWS account and Region by default (previously 2,000), which enables you to add stacks as your workloads grow without requesting a quota increase. CloudFormation manages related AWS resources as a stack that you create, update, and delete a

---

## まとめ

- AWS CloudFormation increases the default stacks per account quota to 300,000 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)

### 関連情報

- [AWS CloudFormation increases the default stacks per account quota to 300,000 - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-stacks-per-account-quota/)
- [Understand CloudFormation quotas - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html)
- [AWS CloudFormation endpoints and quotas - AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/cfn.html)
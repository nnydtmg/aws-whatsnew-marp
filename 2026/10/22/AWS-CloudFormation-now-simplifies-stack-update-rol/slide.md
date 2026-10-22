---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CloudFormationがスタック更新のロールバック操作を簡素化

AWS CloudFormation now simplifies stack update rollback operations

**What's New** | 2026-10-22T17:30:00

---

## 概要

- AWS CloudFormationはフォースロールバックを導入し、更新ロールバックを簡素化しました。
- これによりユーザーは迅速にスタックをデプロイ可能な状態に戻せます。
- 一部のリソースが自動ロールバックできない場合でも、単一操作でロールバックを完了させられます。
- AWS CLI、SDK、AWS CDK、AIエージェントなどすべてのCloudFormationワークフローで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **continue-update-rollback — AWS CLI 2.37.12 Command Reference**
  [詳細](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/continue-update-rollback.html)

- **Recovering AWS CloudFormation stacks using ContinueUpdateRollback | AWS Cloud Operations Blog**
  [詳細](https://aws.amazon.com/blogs/mt/recovering-aws-cloudformation-stacks-using-continueupdaterollback)

- **Upda...

---

## 変更内容・新機能

AWS CloudFormationがスタック更新のロールバック操作を簡素化しました。更新ロールバックはスタックを既知の正常な状態に戻します。一部のリソースが自動でロールバックできない場合、フォースロールバックを使用すると単一操作でロールバックを完了できます。

主な機能:
- フォースロールバック: 単一操作で更新ロールバックを完了し、スタックをデプロイ可能な状態に戻す
- 影響を受けた各リソースを個別に特定・一覧化・再試行する必要がなくなる
- CloudFormation外の変更に影響を受けたリソースは記録され、次回デプロイ前に確認・解消できる
- AWS CLI、SDK、AWS CDK、AIエージェントなどすべてのCloudFormationワークフローで利用可能

---

## ユースケース

対象ユーザー:
- AWS CLIやSDKを使用するCloudFormationユーザー
- AWS CDKユーザー
- AIエージェントを活用するユーザー

---

## まとめ

- AWS CloudFormation now simplifies stack update rollback operations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)

### 関連情報

- [continue-update-rollback — AWS CLI 2.37.12 Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/continue-update-rollback.html)
- [Recovering AWS CloudFormation stacks using ContinueUpdateRollback | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/recovering-aws-cloudformation-stacks-using-continueupdaterollback)
- [Update CloudFormation stacks stuck in UPDATE_ROLLBACK_FAILED status | AWS re:Post](https://repost.aws/knowledge-center/cloudformation-update-rollback-failed)
- [AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)
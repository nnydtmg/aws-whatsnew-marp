---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CloudFormationがリソースタイプ向け契約テストv2をサポート

AWS CloudFormation now supports contract tests v2 for resource types

**What's New** | 2026-09-02T15:23:00

---

## 概要

- AWS CloudFormationは契約テストv2を新たにサポートいたします。
- 本機能により、リソースタイプ開発者はレジストリ提出前に問題を検出して反復サイクルを削減できます。

---

## 前提・背景

### 関連する最近の動向

- **test-type — AWS CLI 2.36.40 Command Reference**
  [詳細](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/test-type.html)

- **Testing resource types using contract tests - Extension development for CloudFormation**
  [詳細](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test.html)

- **Contract tests for resource types - Extension devel...

---

## 変更内容・新機能

新機能はAWS CloudFormationの契約テストv2であり、cfn testコマンドの--v2フラグおよびtest-type APIでご利用いただけます。本機能は各ハンドラー操作の深いテスト、ライブ状態検証、スキーマ後方互換性チェック、テスト入力リンティング、詳細なHTMLおよびJUnit XMLレポートを追加いたします。本アップデートはCloudFormationリソースタイプの開発者に適しております。特に新規リソースタイプの作成者およびローカル実行が可能なJavaベースのリソースタイプ開発者に有益です。

---

## 効果・メリット

- AWS CloudFormationは契約テストv2を新たにサポートいたします。
- 本機能により、リソースタイプ開発者はレジストリ提出前に問題を検出して反復サイクルを削減できます。

---

## まとめ

- AWS CloudFormation now supports contract tests v2 for resource types について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cloudformation-contract-tests-v2-resource-types/)

### 関連情報

- [test-type — AWS CLI 2.36.40 Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/test-type.html)
- [Testing resource types using contract tests - Extension development for CloudFormation](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test.html)
- [Contract tests for resource types - Extension development for CloudFormation](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/contract-tests.html)
- [Resource type handler contract - Extension development for CloudFormation](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test-contract.html)
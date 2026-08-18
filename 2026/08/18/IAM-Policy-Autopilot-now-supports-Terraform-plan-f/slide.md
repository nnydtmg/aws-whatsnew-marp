---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Policy Autopilot が Terraform プランファイルをサポート

IAM Policy Autopilot now supports Terraform plan files

**What's New** | 2026-08-18T17:19:00

---

## 概要

- IAM Policy AutopilotがTerraformプランファイルのサポートを追加し、Infrastructure as Codeを通じてAWSインフラストラクチャをデプロイする際に、スコープダウンされたIAMポリシーを自動生成できるようになりました。
- このアップデートは、IAMポリシー作成の時間を削減し、アクセス管理を簡素化したい開発者やDevOpsエンジニアにとって特に有用です。

---

## 前提・背景

### これまでの課題

- IAMポリシーの作成時間を削減し、アクセス問題のトラブルシューティングを簡素化したい組織に有益です。

---

### 関連する最近の動向

- **IAM Policy Autopilot adds Java support and Terraform-aware policy generation - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/iam-policy-autopilot)

- **GitHub - awslabs/iam-policy-autopilot: IAM Policy Autopilot is an open source static code analysis tool**
  [詳細](https://github.com/awslabs/iam-policy-autopilot)

---

## 変更内容・新機能

- IAM Policy Autopilotはオープンソースツールであり、追加費用なしで利用でき、ユーザーのマシン上で実行されます。

---

## 効果・メリット

- IAMポリシーの作成時間を削減し、アクセス問題のトラブルシューティングを簡素化したい組織に有益です。

---

## まとめ

- IAM Policy Autopilot now supports Terraform plan files について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/iam-policy-autopilot-now-supports-terraform-plan-files)

### 関連情報

- [IAM Policy Autopilot adds Java support and Terraform-aware policy generation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/iam-policy-autopilot)
- [GitHub - awslabs/iam-policy-autopilot: IAM Policy Autopilot is an open source static code analysis tool](https://github.com/awslabs/iam-policy-autopilot)
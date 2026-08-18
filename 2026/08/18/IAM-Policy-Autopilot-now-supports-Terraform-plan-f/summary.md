# IAM Policy Autopilot が Terraform プランファイルをサポート

IAM Policy Autopilot now supports Terraform plan files

**カテゴリ:** What's New
**公開日:** 2026-08-18T17:19:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/iam-policy-autopilot-now-supports-terraform-plan-files)

このページでは、AWS What's Newで発表された「IAM Policy Autopilot now supports Terraform plan files」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

IAM Policy AutopilotがTerraformプランファイルのサポートを追加し、Infrastructure as Codeを通じてAWSインフラストラクチャをデプロイする際に、スコープダウンされたIAMポリシーを自動生成できるようになりました。このアップデートは、IAMポリシー作成の時間を削減し、アクセス管理を簡素化したい開発者やDevOpsエンジニアにとって特に有用です。

## このアップデートで何が変わったか

- IAM Policy Autopilotはオープンソースツールであり、追加費用なしで利用でき、ユーザーのマシン上で実行されます。

## 対象ユーザー

- IAM Policy Autopilotは、Terraformプランファイルから直接ベースラインIAMポリシーを生成できるようになりました。

## 詳細

- IAM Policy Autopilotは、Terraformプランファイルから直接ベースラインIAMポリシーを生成できるようになりました。

- このツールは、アプリケーションコードを分析して、スコープダウンされたIAMポリシーを決定論的に作成します。

- Terraformプランファイルを入力として渡すことで、そのプラン内のリソースのCRUD機能にスコープされたポリシーが生成されます。

- 生成されるポリシーは、可能な限りワイルドカードではなく、特定のリソースARNを参照します。

- このTerraform対応は、IAM Policy Autopilotの起動以来、最も要望されていた機能です。

- IAM Policy Autopilotはオープンソースツールであり、追加費用なしで利用でき、ユーザーのマシン上で実行されます。

- Infrastructure as Codeを使用してAWSインフラストラクチャをデプロイする開発者やDevOpsエンジニアに適しています。

- IAMポリシーの作成時間を削減し、アクセス問題のトラブルシューティングを簡素化したい組織に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/iam-policy-autopilot-now-supports-terraform-plan-files)
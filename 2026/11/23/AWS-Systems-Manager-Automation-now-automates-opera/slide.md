---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Systems Manager AutomationがAzureとGoogle Cloudの運用タスクを自動化

AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud

**What's New** | 2026-11-23T08:00:00

---

## 概要

- AWS Systems Manager AutomationがAzureおよびGoogle Cloudの運用タスクを自動化する機能を追加いたしました。
- 複数クラウド環境で単一の場所からランブックを実行したいチームに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Run automations on multicloud resources - AWS Systems Manager**
  [詳細](https://docs.aws.amazon.com/systems-manager/latest/userguide/running-automations-cloud-connector.html)

- **AWS Systems Manager simplifies onboarding of Google Cloud VMs for centralized management - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-google-cloud-support)

- **Run ...

---

## 変更内容・新機能

- AWS Systems Manager Automationが、Microsoft AzureおよびGoogle Cloudの運用タスクを自動化するカスタムワークフローを作成できるようになりました。
- 6つの新しいランブックアクションがAzureおよびGoogle CloudのAPIを呼び出し、リソースの状態を確認し、操作の完了を待ちます。
- Azureリソースはサブスクリプション、リージョン、リソースグループ、リソースタイプ、タグでターゲットでき、Google Cloudリソースはプロジェクト、ゾーン、アセットタイプ、ラベルでターゲットできます。
- aws:executeScriptにAzureおよびGoogle CloudのPython SDKが含まれ、Systems Manager Cloud Connectorから短期間の認証情報を取得します。
- このアップデートは、各クラウドごとに別々のツールと認証情報を維持したくないチームに適しております。
- 設定ミスの修正やアイドルリソースのクリーンアップを安全に行いたいチームに適しております。

---

## まとめ

- AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-multicloud-automation/)

### 関連情報

- [Run automations on multicloud resources - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/running-automations-cloud-connector.html)
- [AWS Systems Manager simplifies onboarding of Google Cloud VMs for centralized management - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-google-cloud-support)
- [Run an automation on Azure or Google Cloud resources (command line) - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/running-automations-cloud-connector-cli.html)
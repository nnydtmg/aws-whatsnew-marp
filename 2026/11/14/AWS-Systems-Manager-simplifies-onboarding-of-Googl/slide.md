---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Systems ManagerがGoogle Cloud VMのオンボーディングを簡素化

AWS Systems Manager simplifies onboarding of Google Cloud VMs for centralized management

**What's New** | 2026-11-13T08:00:00

---

## 概要

- AWS Systems Manager Cloud ConnectorがGoogle Cloud VMの一元管理を可能にし、マルチクラウド運用の標準化と複雑さの軽減に貢献します。

---

## 前提・背景

### 関連する最近の動向

- **Enable VM onboarding (AWS Management Console) - AWS Systems Manager**
  [詳細](https://docs.aws.amazon.com/es_es/systems-manager/latest/userguide/cloud-connector-gcp-onboarding-console.html)

- **Create a Cloud Connector (AWS Management Console) - AWS Systems Manager**
  [詳細](https://docs.aws.amazon.com/systems-manager/latest/userguide/cloud-connector-gcp-create-console.html)

- *...

---

## 変更内容・新機能

新機能は、AWS Systems Manager Cloud ConnectorによるGoogle Cloud VMの簡素化されたマルチクラウドオンボーディングです。手動エージェントインストールなしで既存のGoogle Cloud VMをSystems Managerに接続できます。SSMエージェントをGoogle Cloud VMへ大規模に自動デプロイできます。接続後はEC2、オンプレミス、Azureと統一ビューでSession Manager、Automation、Run Command、State Manager、Patch Manager、Inventoryを利用できます。本アップデートは複数クラウドのインフラを管理するチームに適しております。管理手法の標準化と運用複雑さの軽減を望むお客様に有益です。

---

## まとめ

- AWS Systems Manager simplifies onboarding of Google Cloud VMs for centralized management について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-google-cloud-support/)

### 関連情報

- [Enable VM onboarding (AWS Management Console) - AWS Systems Manager](https://docs.aws.amazon.com/es_es/systems-manager/latest/userguide/cloud-connector-gcp-onboarding-console.html)
- [Create a Cloud Connector (AWS Management Console) - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/cloud-connector-gcp-create-console.html)
- [Centralize your multicloud management in AWS Systems Manager with automated onboarding and simplified pricing](https://aws.amazon.com/blogs/multicloud/centralize-your-multicloud-management-in-aws-systems-manager-with-automated-onboarding-and-simplified-pricing)
- [Set up a Cloud Connector for Microsoft Azure in Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-cloud-connector.html)
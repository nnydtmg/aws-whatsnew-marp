# AWS Systems Manager AutomationがAzureとGoogle Cloudの運用タスクを自動化

AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud

**カテゴリ:** What's New
**公開日:** 2026-11-23T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-multicloud-automation/)

このページでは、AWS What's Newで発表された「AWS Systems Manager Automation now automates operational tasks in Azure and Google Cloud」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Systems Manager AutomationがAzureおよびGoogle Cloudの運用タスクを自動化する機能を追加いたしました。複数クラウド環境で単一の場所からランブックを実行したいチームに適しております。

## このアップデートで何が変わったか

- AWS Systems Manager Automationが、Microsoft AzureおよびGoogle Cloudの運用タスクを自動化するカスタムワークフローを作成できるようになりました。
- 6つの新しいランブックアクションがAzureおよびGoogle CloudのAPIを呼び出し、リソースの状態を確認し、操作の完了を待ちます。
- Azureリソースはサブスクリプション、リージョン、リソースグループ、リソースタイプ、タグでターゲットでき、Google Cloudリソースはプロジェクト、ゾーン、アセットタイプ、ラベルでターゲットできます。
- aws:executeScriptにAzureおよびGoogle CloudのPython SDKが含まれ、Systems Manager Cloud Connectorから短期間の認証情報を取得します。
- このアップデートは、各クラウドごとに別々のツールと認証情報を維持したくないチームに適しております。
- 設定ミスの修正やアイドルリソースのクリーンアップを安全に行いたいチームに適しております。

## 詳細

- AWS Systems Manager Automationが、Microsoft AzureおよびGoogle Cloudの運用タスクを自動化するカスタムワークフローを作成できるようになりました。
- 6つの新しいランブックアクションがAzureおよびGoogle CloudのAPIを呼び出し、リソースの状態を確認し、操作の完了を待ちます。
- Azureリソースはサブスクリプション、リージョン、リソースグループ、リソースタイプ、タグでターゲットでき、Google Cloudリソースはプロジェクト、ゾーン、アセットタイプ、ラベルでターゲットできます。
- aws:executeScriptにAzureおよびGoogle CloudのPython SDKが含まれ、Systems Manager Cloud Connectorから短期間の認証情報を取得します。
- このアップデートは、各クラウドごとに別々のツールと認証情報を維持したくないチームに適しております。
- 設定ミスの修正やアイドルリソースのクリーンアップを安全に行いたいチームに適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/systems-manager-multicloud-automation/)
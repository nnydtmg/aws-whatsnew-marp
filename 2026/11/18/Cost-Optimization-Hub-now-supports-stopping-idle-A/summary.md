# Cost Optimization HubがアイドルEC2インスタンスの直接停止に対応

Cost Optimization Hub now supports stopping idle Amazon EC2 instances

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cost-hub-stop-idle-ec2/)

このページでは、AWS What's Newで発表された「Cost Optimization Hub now supports stopping idle Amazon EC2 instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できる機能を追加しました。以前はHubを離れてEC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。確認画面では停止時に失われるデータと継続課金されるリソースが表示され、インスタンスの終了やEBS削除は行われません。追加料金なしでGovCloudと中国リージョンを除く全リージョンで利用できます。

## このアップデートで何が変わったか

AWS Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できるようになりました。Cost Optimization HubはAWSアカウントとリージョン横断でコスト最適化推奨を集約・優先順位付けし、アイドルリソースも対象とします。以前はHubを離れてAmazon EC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。Stopを選択すると、対象インスタンス、アカウント、リージョン、停止時に失われるもの（インスタンスストアデータやメモリ上のデータ）、継続課金されるもの（EBSボリュームやElastic IP）が表示されます。停止はインスタンスの終了やEBS削除ではなく、EC2コンソールから再起動できます。追加セットアップは不要で既存の権限を使用します。アイドルリソース推奨を受け取るにはCost Optimization HubとAWS Compute Optimizerを有効化する必要があります。本機能は追加料金なしで、AWS GovCloud

## 対象ユーザー

AWS Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できるようになりました。Cost Optimization HubはAWSアカウントとリージョン横断でコスト最適化推奨を集約・優先順位付けし、アイドルリソースも対象とします。以前はHubを離れてAmazon EC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。Stopを選択すると、対象インスタンス、アカウント、リージョン、停止時に失われるもの（インスタンスストアデータやメモリ上のデータ）、継

## 詳細

AWS Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できるようになりました。Cost Optimization HubはAWSアカウントとリージョン横断でコスト最適化推奨を集約・優先順位付けし、アイドルリソースも対象とします。以前はHubを離れてAmazon EC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。Stopを選択すると、対象インスタンス、アカウント、リージョン、停止時に失われるもの（インスタンスストアデータやメモリ上のデータ）、継続課金されるもの（EBSボリュームやElastic IP）が表示されます。停止はインスタンスの終了やEBS削除ではなく、EC2コンソールから再起動できます。追加セットアップは不要で既存の権限を使用します。アイドルリソース推奨を受け取るにはCost Optimization HubとAWS Compute Optimizerを有効化する必要があります。本機能は追加料金なしで、AWS GovCloud (US) と中国リージョンを除く全AWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cost-hub-stop-idle-ec2/)
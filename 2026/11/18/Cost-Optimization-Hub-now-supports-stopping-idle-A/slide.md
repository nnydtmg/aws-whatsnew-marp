---
marp: true
theme: aws-whatsnew
paginate: true
---

# Cost Optimization HubがアイドルEC2インスタンスの直接停止に対応

Cost Optimization Hub now supports stopping idle Amazon EC2 instances

**What's New** | 2026-11-17T08:00:00

---

## 概要

- Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できる機能を追加しました。
- 以前はHubを離れてEC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。
- 確認画面では停止時に失われるデータと継続課金されるリソースが表示され、インスタンスの終了やEBS削除は行われません。
- 追加料金なしでGovCloudと中国リージョンを除く全リージョンで...

---

## 前提・背景

### これまでの課題

AWS Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できるようになりました。Cost Optimization HubはAWSアカウントとリージョン横断でコスト最適化推奨を集約・優先順位付けし、アイドルリソースも対象とします。以前はHubを離れてAmazon EC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。Stopを選択すると、対象インスタ

---

### 関連する最近の動向

- **Cost Optimization Hub now supports stopping idle Amazon EC2 instances - AWS**
  [詳細](https://aws.amazon.com/abo...

---

## 変更内容・新機能

AWS Cost Optimization Hubは、アイドル状態のAmazon EC2インスタンスを推奨事項から直接停止できるようになりました。Cost Optimization HubはAWSアカウントとリージョン横断でコスト最適化推奨を集約・優先順位付けし、アイドルリソースも対象とします。以前はHubを離れてAmazon EC2コンソールで対象インスタンスを特定する必要がありましたが、現在はSavings opportunitiesページから停止できます。Stopを選択すると、対象インスタンス、アカウント、リージョン、停止時に失われるもの（インスタンスストアデータやメモリ上のデータ）、継続課金されるもの（EBSボリュームやElastic IP）が表示されます。停止はインスタンスの終了やEBS削除ではなく、EC2コンソールから再起動できます。追加セットアップは不要で既存の権限を使用します。アイドルリソース推奨を受け取るにはCost Optimization HubとAWS Compute Optimizerを有効化する必要があります。本機能は追加料金なしで、AWS GovCloud

---

## まとめ

- Cost Optimization Hub now supports stopping idle Amazon EC2 instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cost-hub-stop-idle-ec2/)

### 関連情報

- [Cost Optimization Hub now supports stopping idle Amazon EC2 instances - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cost-hub-stop-idle-ec2/)
- [Find answers to frequently asked questions about Cost Optimization Hub.](https://aws.amazon.com/aws-cost-management/cost-optimization-hub/faqs)
- [AWS Compute Optimizer now supports idle recommendations for six additional resource types](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-compute-optimizer-six-new-idle)
- [AWS Cost Optimization Checklist | Stop Overpaying in 2026](https://go-cloud.io/aws-cost-optimization-checklist)
- [The Ultimate AWS Cost Optimization Checklist for 2026](https://builder.aws.com/content/3KKL67xEvtq9V4evV2fQYqkuaB9/the-ultimate-aws-cost-optimization-checklist-for-2026)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Budgetsが通知購読者のメール検証をサポート

AWS Budgets now supports email verification for notification subscribers

**What's New** | 2026-10-01T08:00:00

---

## 概要

- AWS Budgetsが通知購読者のメール検証を新たにサポートします。
- 予算通知にメールアドレスを追加すると検証メールが送信され、受信者がリンクをクリックして確認すると通知の受信が開始されます。
- この機能は2026年9月30日以降に追加されたアドレスに適用され、既存の購読者は影響を受けません。

---

## 前提・背景

### 関連する最近の動向

- **AWS Budgets now supports email verification for notification subscribers - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-budgets/)

- **Managing your costs with AWS Budgets - AWS Cost Management**
  [詳細](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)

- **AWS::Budgets::Budget Notification - AWS CloudFormation**
  [...

---

## 変更内容・新機能

AWS Budgetsは新しいメール購読者に対して検証を行う機能をサポートするようになりました。予算通知にメールアドレスを追加すると検証メールが送信され、受信者がリンクをクリックして確認すると通知の受信が開始されます。この機能は2026年9月30日以降に追加されたアドレスに適用され、既存の購読者は影響を受けません。AWS Budgetsコンソールで検証ステータスを確認でき、保留中のアドレスに再送信できます。通知はAWS User Notifications経由で配信され、受信者はいつでもオプトアウトできます。この機能はAWS GovCloud（米国）リージョンおよび中国リージョンを除くすべてのAWSリージョンで利用可能です。

---

## まとめ

- AWS Budgets now supports email verification for notification subscribers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-budgets/)

### 関連情報

- [AWS Budgets now supports email verification for notification subscribers - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-budgets/)
- [Managing your costs with AWS Budgets - AWS Cost Management](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [AWS::Budgets::Budget Notification - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-budgets-budget-notification.html)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Logsがアカウントレベル保持ポリシーを発表

Amazon CloudWatch Logs announces account-level retention policies

**What's New** | 2026-11-09T22:15:00

---

## 概要

- Amazon CloudWatch Logsはアカウントレベルの保持ポリシーを新たに提供します。
- プラットフォームチームおよびセキュリティチームは、単一のポリシーでログデータの保持期間を管理できます。
- アカウント内のすべてのロググループ、またはプレフィックスで始まるロググループに対して保持期間を一括設定できます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Logs announces account-level retention policies - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)

- **AWS API Changes - Amazon CloudWatch Logs**
  [詳細](https://awsapichanges.info/archive/changes/c2b1d5-logs.html)

- **CloudWatch Logs documentation - Account-level retention policies**
  [詳細](https://docs.aws.ama...

---

## 変更内容・新機能

主な機能:
- アカウント内のすべてのロググループ、または /aws/lambda のようなプレフィックスで始まるロググループにポリシーを適用可能
- 既存ロググループへの適用、または新規ロググループのみへの適用を選択可能
- 複数のポリシーが一致する場合は、最も長い保持期間が適用される
- 例: プラットフォームチームがアカウント全体に90日のベースラインを設定し、/security で始まるロググループには監査要件を1年ポリシーを設定
- PutAccountPolicy APIに新しい RETENTION_POLICY タイプを追加
- ドライランモードでポリシー変更の影響を事前確認可能
- アカウントおよびリージョンごとに最大20件のポリシーを作成・管理可能
- AWS Management Console、AWS CLI、AWS SDKsで操作可能

利用可能領域: 中東（バーレーン）および中東（UAE）を除くすべての商用AWSリージョン
追加費用: なし

---

## まとめ

- Amazon CloudWatch Logs announces account-level retention policies について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)

### 関連情報

- [Amazon CloudWatch Logs announces account-level retention policies - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)
- [AWS API Changes - Amazon CloudWatch Logs](https://awsapichanges.info/archive/changes/c2b1d5-logs.html)
- [CloudWatch Logs documentation - Account-level retention policies](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#account-level-retention-policies)
- [PutAccountPolicy API reference](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html)
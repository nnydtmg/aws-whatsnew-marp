---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Logs がログイベントを AWS リソースタグで拡張

Amazon CloudWatch Logs enriches log events with AWS resource tags

**What's New** | 2026-06-30T21:15:00

---

## 概要

- Amazon CloudWatch Logsは、ログ取り込み時にAWSリソースタグを自動的に追加する新機能を提供し、ロギング計装の変更なしにタグベースのフィルタリングと分析が可能になりました。
- この機能は追加費用なしで、ほぼすべての商用AWSリージョンで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Logs - AWS API Changes**
  [詳細](https://awsapichanges.info/archive/changes/6338dd-logs.html)

- **Amazon CloudWatch Logs Insights supports querying by log group tags**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudwatch-logs-query-by-tags)

---

## 変更内容・新機能

- Amazon CloudWatch Logsが、AWS リソースタグでログイベントを自動的に拡張する新機能を提供するようになりました。

- ログ取り込み時にリソースタグが直接ログイベントに追加されるため、ロギング計装の変更が不要です。

---

## まとめ

- Amazon CloudWatch Logs enriches log events with AWS resource tags について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-resource-tags/)

### 関連情報

- [Amazon CloudWatch Logs - AWS API Changes](https://awsapichanges.info/archive/changes/6338dd-logs.html)
- [Amazon CloudWatch Logs Insights supports querying by log group tags](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudwatch-logs-query-by-tags)
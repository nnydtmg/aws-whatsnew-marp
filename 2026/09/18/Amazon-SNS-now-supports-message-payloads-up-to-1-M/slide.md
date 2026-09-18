---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon SNS が最大1 MiBのメッセージペイロードに対応

Amazon SNS now supports message payloads up to 1 MiB

**What's New** | 2026-09-18

---

## 概要

- Amazon SNSが最大1 MiBのメッセージペイロードをサポートするようになり、大規模データを扱うお客様の利便性が向上いたします。

---

## 前提・背景

### これまでの課題

- Amazon SNSはメッセージペイロードを最大1 MiBまでサポートする新機能を提供いたします。
- これは以前の256 KiB制限から4倍の増加となります。
- MaximumMessageSizeトピック属性を設定することでSNS StandardおよびSNS FIFOトピックでご利用いただけます。
- この更新はアプリケーション統合、IoT、生成AIなどのワークロードで大きなデータを単一メッセージで交換するお客様に適しております。

---

### 関連する最近の動向

- **SNS vs SQS vs EventBridge: 4x Message Size Gap [2026]**
  [詳細](https://tech-insider.org/sns-vs-sqs-vs-eventbridge-2026)

- **Amazon SQS in...

---

## 変更内容・新機能

- Amazon SNSはメッセージペイロードを最大1 MiBまでサポートする新機能を提供いたします。
- これは以前の256 KiB制限から4倍の増加となります。
- MaximumMessageSizeトピック属性を設定することでSNS StandardおよびSNS FIFOトピックでご利用いただけます。
- この更新はアプリケーション統合、IoT、生成AIなどのワークロードで大きなデータを単一メッセージで交換するお客様に適しております。

---

## 効果・メリット

- Amazon SNSが最大1 MiBのメッセージペイロードをサポートするようになり、大規模データを扱うお客様の利便性が向上いたします。

---

## まとめ

- Amazon SNS now supports message payloads up to 1 MiB について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sns-1mib-support)

### 関連情報

- [SNS vs SQS vs EventBridge: 4x Message Size Gap [2026]](https://tech-insider.org/sns-vs-sqs-vs-eventbridge-2026)
- [Amazon SQS increases maximum message payload size to 1 MiB](https://aws.amazon.com/about-aws/whats-new/2025/08/amazon-sqs-max-payload-size-1mib)
- [Amazon SQS Increases Message Size Limit to 1MiB](https://www.linkedin.com/posts/mindyferguson_amazon-sqs-increases-maximum-message-payload-activity-7358537667304701954-5cfi)
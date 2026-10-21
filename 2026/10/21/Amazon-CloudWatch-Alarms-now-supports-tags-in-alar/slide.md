---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Alarmsがアラームアクションのペイロードでタグをサポート

Amazon CloudWatch Alarms now supports tags in alarm actions payload

**What's New** | 2026-10-20T08:00:00

---

## 概要

- Amazon CloudWatch Alarmsは、アクションペイロードにアラームタグを含める新機能を発表しました。
- 有効化すると、アラーム状態変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。
- 共有通知パイプラインで多数のアラームを処理するお客様に適しており、タグ照合のための追加ルックアップを回避できます。

---

## 前提・背景

### これまでの課題

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログ

---

### 関連する最近の動向

- **Alarm actions - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm...

---

## 変更内容・新機能

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルーティングしていたチームは、以前は各イベントごとにListTagsForResourceを呼び出して所有チームを特定する必要がありましたが、本機能によりタグが通知メッセージに含まれるため、メッセージから直接ルーティングできます。Amazon CloudWatchが利用可能なすべてのAWSリージョン（中東（UAE）および中東（バーレーン）を除く）で利用可能です。

---

## ユースケース

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルー

---

## まとめ

- Amazon CloudWatch Alarms now supports tags in alarm actions payload について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-cloudwatch-tags-on-alarm-actions-payload)

### 関連情報

- [Alarm actions - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-actions.html)
- [Alarms and tagging - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_alarms_and_tagging.html)
- [Using Amazon CloudWatch alarms - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Alarms.html)
- [Turn Your Amazon CloudWatch Alarms into Actionable Signals](https://aws.amazon.com/blogs/mt/turn-your-amazon-cloudwatch-alarms-into-actionable-signals)
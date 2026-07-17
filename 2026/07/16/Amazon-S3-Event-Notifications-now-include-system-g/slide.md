---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 イベント通知がシステム生成タグに対応

Amazon S3 Event Notifications now include system-generated tags

**What's New** | 2026-07-16

---

## 概要

- Amazon S3 イベント通知がシステム生成タグをサポートするようになり、複数のバケットからのイベントを単一の EventBridge ルールで効率的にフィルタリングできるようになりました。
- この機能は追加コストなしで利用可能であり、既存の設定変更は不要です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon S3 Event Notifications - Amazon Simple Storage Service**
  [詳細](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html)

- **New – Use Amazon S3 Event Notifications with Amazon EventBridge | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/new-use-amazon-s3-event-notifications-with-amazon-eventbridge)

---

## 変更内容・新機能

- Amazon S3 イベント通知に、AWS サービスによって生成されたシステムタグが含まれるようになりました。
- システムタグは、AWS サービスによってバケットに付与されるメタデータラベルです。
- これらのタグを使用することで、数千のバケットからのイベントを、個別のバケット名を列挙する代わりに、単一の EventBridge ルールでフィルタリングできます。
- Amazon EventBridge、Amazon SQS、Amazon SNS、および AWS Lambda を含むすべての宛先に配信されるイベントに、システムタグが含まれるようになりました。
- AWS Management Console、AWS SDK、または AWS CLI を通じて、汎用バケットで S3 イベント通知を有効にすることで利用開始できます。
- AWS CloudFormation などの AWS サービスがすでにシステムタグをバケットに適用している場合、S3 は新しいイベント通知に自動的にそれらを含めます。
- この機能は、すべての AWS リージョンで追加コストなしで利用可能です。
- 既

---

## まとめ

- Amazon S3 Event Notifications now include system-generated tags について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-event-notifications-system-generated-tags/)

### 関連情報

- [Amazon S3 Event Notifications - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html)
- [New – Use Amazon S3 Event Notifications with Amazon EventBridge | AWS News Blog](https://aws.amazon.com/blogs/aws/new-use-amazon-s3-event-notifications-with-amazon-eventbridge)
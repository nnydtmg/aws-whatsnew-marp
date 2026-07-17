# Amazon S3 イベント通知がシステム生成タグに対応

Amazon S3 Event Notifications now include system-generated tags

**カテゴリ:** What's New
**公開日:** 2026-07-16
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-event-notifications-system-generated-tags/)

このページでは、AWS What's Newで発表された「Amazon S3 Event Notifications now include system-generated tags」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 イベント通知がシステム生成タグをサポートするようになり、複数のバケットからのイベントを単一の EventBridge ルールで効率的にフィルタリングできるようになりました。この機能は追加コストなしで利用可能であり、既存の設定変更は不要です。

## このアップデートで何が変わったか

- Amazon S3 イベント通知に、AWS サービスによって生成されたシステムタグが含まれるようになりました。
- システムタグは、AWS サービスによってバケットに付与されるメタデータラベルです。
- これらのタグを使用することで、数千のバケットからのイベントを、個別のバケット名を列挙する代わりに、単一の EventBridge ルールでフィルタリングできます。
- Amazon EventBridge、Amazon SQS、Amazon SNS、および AWS Lambda を含むすべての宛先に配信されるイベントに、システムタグが含まれるようになりました。
- AWS Management Console、AWS SDK、または AWS CLI を通じて、汎用バケットで S3 イベント通知を有効にすることで利用開始できます。
- AWS CloudFormation などの AWS サービスがすでにシステムタグをバケットに適用している場合、S3 は新しいイベント通知に自動的にそれらを含めます。
- この機能は、すべての AWS リージョンで追加コストなしで利用可能です。
- 既存の設定に対する変更は不要です。
- この機能は、大規模な環境でのイベント管理とフィルタリングを簡素化する必要があるユーザーに適しています。

## 対象ユーザー

- 大規模な環境でAmazon S3 イベント通知を利用しているユーザー
- EventBridgeでイベント管理をしているユーザー
- 複数のS3バケットを管理している組織
- システムタグを活用したイベントフィルタリングを検討中のユーザー

## 詳細

- Amazon S3 イベント通知に、AWS サービスによって生成されたシステムタグが含まれるようになりました。
- システムタグは、AWS サービスによってバケットに付与されるメタデータラベルです。
- これらのタグを使用することで、数千のバケットからのイベントを、個別のバケット名を列挙する代わりに、単一の EventBridge ルールでフィルタリングできます。
- Amazon EventBridge、Amazon SQS、Amazon SNS、および AWS Lambda を含むすべての宛先に配信されるイベントに、システムタグが含まれるようになりました。
- AWS Management Console、AWS SDK、または AWS CLI を通じて、汎用バケットで S3 イベント通知を有効にすることで利用開始できます。
- AWS CloudFormation などの AWS サービスがすでにシステムタグをバケットに適用している場合、S3 は新しいイベント通知に自動的にそれらを含めます。
- この機能は、すべての AWS リージョンで追加コストなしで利用可能です。
- 既存の設定に対する変更は不要です。
- この機能は、大規模な環境でのイベント管理とフィルタリングを簡素化する必要があるユーザーに適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-event-notifications-system-generated-tags/)
- [Amazon S3 Event Notifications - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html)
- [New – Use Amazon S3 Event Notifications with Amazon EventBridge | AWS News Blog](https://aws.amazon.com/blogs/aws/new-use-amazon-s3-event-notifications-with-amazon-eventbridge)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CloudTrail Event Coverageでデータプレーン操作の盲点を可視化

Uncover blind spots in AWS data plane operations with CloudTrail Event Coverage

**What's New** | 2026-09-30T16:00:00

---

## 概要

- AWS CloudTrailのEvent Coverageは、データプレーン操作のカバレッジを可視化しギャップを特定する新しい機能です。
- 複数のアカウントを管理する組織に特に有用です。

---

## 前提・背景

### 関連する最近の動向

- **Choose between data and management events in CloudTrail | AWS re:Post**
  [詳細](https://repost.aws/knowledge-center/cloudtrail-data-management-events)

- **AWS CloudTrail Best Practices | AWS Cloud Operations Blog**
  [詳細](https://aws.amazon.com/blogs/mt/aws-cloudtrail-best-practices)

- **Understanding CloudTrail events - AWS CloudTrail**
  [詳細](https://docs.aws.amazon.com/awscl...

---

## 変更内容・新機能

AWS CloudTrailはEvent Coverageという新しいコンソール体験を導入しました。アカウントおよび組織レベルでデータプレーン操作のカバレッジを可視化できます。環境内のどのAWSサービスとリソースタイプでデータイベントログが有効になっているかを確認できます。ログ記録のギャップを迅速に特定でき、ダッシュボードから直接データイベントをサブスクライブできます。この更新は複数のアカウントを管理する組織に特に適しています。Data events enable you to track data plane operations in AWS services. For example, you can log Amazon S3 object-level operations like GetObject and PutObject to detect unauthorized data access or exfiltration attempts. Without comprehensive data events coverage, these activities can

---

## ユースケース

AWS CloudTrailはEvent Coverageという新しいコンソール体験を導入しました。アカウントおよび組織レベルでデータプレーン操作のカバレッジを可視化できます。環境内のどのAWSサービスとリソースタイプでデータイベントログが有効になっているかを確認できます。ログ記録のギャップを迅速に特定でき、ダッシュボードから直接データイベントをサブスクライブできます。この更新は複数のアカウントを管理する組織に特に適しています。Data events enable you to track data plane operations in AWS services. For example, 

---

## まとめ

- Uncover blind spots in AWS data plane operations with CloudTrail Event Coverage について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cloudtrail-event-coverage/)

### 関連情報

- [Choose between data and management events in CloudTrail | AWS re:Post](https://repost.aws/knowledge-center/cloudtrail-data-management-events)
- [AWS CloudTrail Best Practices | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/aws-cloudtrail-best-practices)
- [Understanding CloudTrail events - AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-events.html)
- [Announcing AWS CloudTrail Event Aggregation and Insights for Data Events](https://aws.amazon.com/blogs/mt/announcing-aws-cloudtrail-event-aggregation-and-insights-for-data-events)
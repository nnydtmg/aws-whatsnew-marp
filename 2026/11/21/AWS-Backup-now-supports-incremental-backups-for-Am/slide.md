---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS BackupがAmazon DynamoDBの増分バックアップに対応

AWS Backup now supports incremental backups for Amazon DynamoDB

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS BackupはAmazon DynamoDBの増分バックアップに対応し、ストレージを削減しながら最大1時間ごとのバックアップが可能になりました。
- 新規のお客様には自動で有効化され、既存のお客様も詳細機能からご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Backup now supports incremental backups for Amazon DynamoDB - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)

- **Reduce Amazon DynamoDB backup storage costs with incremental backups in AWS Backup**
  [詳細](https://aws.amazon.com/blogs/storage/reduce-amazon-dynamodb-backup-storage-costs-with-incremental-backups-in-aws...

---

## 変更内容・新機能

AWS Backupは、Amazon DynamoDBテーブルの増分バックアップを新たにサポートいたします。初回のフルバックアップ以降は変更データのみを取得し、15日ごとに新しいフルバックアップを取得いたします。1時間ごとから週次までの頻度で設定でき、任意の復旧ポイントから復元できます。AWS Backupボールトおよび論理的エアギャップボールトに保存でき、クロスリージョンコピーも増分となります。本アップデートは、バックアップストレージを削減しつつ、より頻繁にバックアップしたいお客様に適しております。DynamoDBを保護する新規のお客様には自動で有効になり、既存のお客様は詳細機能から有効化できます。

---

## 効果・メリット

- AWS Backupは、Amazon DynamoDBテーブルの増分バックアップを新たにサポートいたします。
- 初回のフルバックアップ以降は変更データのみを取得し、15日ごとに新しいフルバックアップを取得いたします。
- 1時間ごとから週次までの頻度で設定でき、任意の復旧ポイントから復元できます。
- AWS Backupボールトおよび論理的エアギャップボールトに保存でき、クロスリージョンコピーも増分となります。
- 本アップデートは、バックアップストレージを削減しつつ、より頻繁にバックアップしたいお客様に適しております。

---

## まとめ

- AWS Backup now supports incremental backups for Amazon DynamoDB について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)

### 関連情報

- [AWS Backup now supports incremental backups for Amazon DynamoDB - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)
- [Reduce Amazon DynamoDB backup storage costs with incremental backups in AWS Backup](https://aws.amazon.com/blogs/storage/reduce-amazon-dynamodb-backup-storage-costs-with-incremental-backups-in-aws-backup/)
- [Working with supported services - AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/working-with-supported-services.html#working-with-ddb)
- [Backup and restore for DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup-and-Restore.html)
- [Enhanced AWS Backup features for Amazon DynamoDB | AWS Database Blog](https://aws.amazon.com/blogs/database/enhanced-aws-backup-features-for-amazon-dynamodb)
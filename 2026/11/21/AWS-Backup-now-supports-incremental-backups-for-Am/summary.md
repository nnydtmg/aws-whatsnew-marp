# AWS BackupがAmazon DynamoDBの増分バックアップに対応

AWS Backup now supports incremental backups for Amazon DynamoDB

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)

このページでは、AWS What's Newで発表された「AWS Backup now supports incremental backups for Amazon DynamoDB」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS BackupはAmazon DynamoDBの増分バックアップに対応し、ストレージを削減しながら最大1時間ごとのバックアップが可能になりました。新規のお客様には自動で有効化され、既存のお客様も詳細機能からご利用いただけます。

## このアップデートで何が変わったか

AWS Backupは、Amazon DynamoDBテーブルの増分バックアップを新たにサポートいたします。初回のフルバックアップ以降は変更データのみを取得し、15日ごとに新しいフルバックアップを取得いたします。1時間ごとから週次までの頻度で設定でき、任意の復旧ポイントから復元できます。AWS Backupボールトおよび論理的エアギャップボールトに保存でき、クロスリージョンコピーも増分となります。本アップデートは、バックアップストレージを削減しつつ、より頻繁にバックアップしたいお客様に適しております。DynamoDBを保護する新規のお客様には自動で有効になり、既存のお客様は詳細機能から有効化できます。

## 詳細

AWS Backupは、Amazon DynamoDBテーブルの増分バックアップを新たにサポートいたします。初回のフルバックアップ以降は変更データのみを取得し、15日ごとに新しいフルバックアップを取得いたします。1時間ごとから週次までの頻度で設定でき、任意の復旧ポイントから復元できます。AWS Backupボールトおよび論理的エアギャップボールトに保存でき、クロスリージョンコピーも増分となります。本アップデートは、バックアップストレージを削減しつつ、より頻繁にバックアップしたいお客様に適しております。DynamoDBを保護する新規のお客様には自動で有効になり、既存のお客様は詳細機能から有効化できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-backup-incremental-backups-dynamodb/)
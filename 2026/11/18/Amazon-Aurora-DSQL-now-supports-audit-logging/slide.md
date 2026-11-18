---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora DSQLが監査ログ機能をサポート開始

Amazon Aurora DSQL now supports audit logging

**What's New** | 2026-11-18T08:00:00

---

## 概要

- Amazon Aurora DSQLはデータベース内部の監査ログ機能を新たにサポートします。
- SQL文の実行内容をフルマネージドで記録し、金融機関や規制対象企業の本番環境コンプライアンス要件を満たせます。

---

## 前提・背景

### これまでの課題

Amazon Aurora DSQL now supports database-internal audit logging, a fully managed capability that captures SQL statements executed on your cluster. Previously, AWS CloudTrail recorded who connected to a DSQL cluster, but not what they did once inside 

---

### 関連する最近の動向

- **Amazon Aurora DSQL now supports audit logging - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11...

---

## 変更内容・新機能

Amazon Aurora DSQL now supports database-internal audit logging, a fully managed capability that captures SQL statements executed on your cluster. Previously, AWS CloudTrail recorded who connected to a DSQL cluster, but not what they did once inside it. Now, financial institutions and regulated enterprises can meet production compliance requirements by capturing DDL, DML, DCL, and SELECT statements with full statement text, bind parameters, acting principal (both PostgreSQL role and AWS IAM iden

---

## まとめ

- Amazon Aurora DSQL now supports audit logging について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-dsql-audit-logging/)

### 関連情報

- [Amazon Aurora DSQL now supports audit logging - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-dsql-audit-logging/)
- [Audit logging - Amazon Aurora DSQL](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/audit-logging.html)
- [Logging Aurora DSQL operations using AWS CloudTrail](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/logging-using-cloudtrail.html)
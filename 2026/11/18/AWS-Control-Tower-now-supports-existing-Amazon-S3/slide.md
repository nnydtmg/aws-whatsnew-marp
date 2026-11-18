---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Control Towerが既存のAmazon S3バケットでのログ配信をサポート

AWS Control Tower now supports existing Amazon S3 bucket for log delivery

**What's New** | 2026-11-18T08:00:00

---

## 概要

- AWS Control Towerは既存のAmazon S3バケットをログ配信に利用できる機能を追加いたしました。
- この更新は、ログインフラストラクチャを完全に制御したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon S3 bucket policy for logging - AWS Control Tower**
  [詳細](https://docs.aws.amazon.com/controltower/latest/userguide/logging-s3-audit-bucket.html)

- **Use existing Logging and Security Account with AWS Control Tower**
  [詳細](https://aws.amazon.com/blogs/mt/use-existing-logging-and-security-account-with-aws-control-tower)

- **AWS Config Updates - AWS Control Tower**
  [詳細...

---

## 変更内容・新機能

- AWS Control Towerは、ランディングゾーン内の既存のAmazon S3バケットをAWS ConfigおよびAWS CloudTrailのログ保存に使用できるようになりました。
- お客様はバケットポリシー、ライフサイクルルール、ログインフラストラクチャを完全に制御できます。
- 自己管理バケットとAWS Control Tower管理バケットをいつでも切り替えられ、バケットはランディングゾーンの更新時にも保持されます。
- この更新は、すでに管理しているAmazon S3バケットに集中ログを統合したいお客様に適しております。

---

## まとめ

- AWS Control Tower now supports existing Amazon S3 bucket for log delivery について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/control-tower-existing-s3-log-bucket/)

### 関連情報

- [Amazon S3 bucket policy for logging - AWS Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/logging-s3-audit-bucket.html)
- [Use existing Logging and Security Account with AWS Control Tower](https://aws.amazon.com/blogs/mt/use-existing-logging-and-security-account-with-aws-control-tower)
- [AWS Config Updates - AWS Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/config-updates-v4.html)
- [Store Objects with Amazon S3 - AWS Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/s3.html)
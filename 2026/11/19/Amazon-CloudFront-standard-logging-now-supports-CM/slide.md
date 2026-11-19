---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront の標準ログが CMCD と追加フィールドをサポート

Amazon CloudFront standard logging now supports CMCD and additional log fields

**What's New** | 2026-11-18T19:28:00

---

## 概要

- Amazon CloudFrontの標準ログがCMCDおよび追加のアクセスログフィールドをサポートするようになりました。
- これまでリアルタイムログでのみ利用可能だったフィールドを標準ログに含め、Amazon S3、Amazon CloudWatch Logs、Amazon Data Firehoseへ配信できます。
- ストリーミングチームは追加のデータストリームを設定せずに再生問題のトラブルシューティングを迅速に行えます。

---

## 前提・背景

### これまでの課題

Amazon CloudFront standard logging now supports additional access log fields that were previously available only in CloudFront real-time logs. You can now include these fields in your standard logs and deliver them to Amazon S3, Amazon CloudWatch Log

---

### 関連する最近の動向

- **Amazon CloudFront standard logging now supports CMCD and additional log fields - AWS**
  [詳細](https://aws.amazo...

---

## 変更内容・新機能

新機能は、Amazon CloudFrontの標準ログが、これまでリアルタイムログでのみ利用可能であった追加のアクセスログフィールドとCMCDをサポートするようになったことです。これらのフィールドは標準ログに含め、Amazon S3、Amazon CloudWatch Logs、またはAmazon Data Firehoseへ配信できます。再生問題とCloudFront配信データを照合してトラブルシューティングを迅速化したいストリーミングチームにとって有益です。すべてのCloudFrontエッジロケーションで利用可能で、標準ロギングの価格が適用されます。

---

## まとめ

- Amazon CloudFront standard logging now supports CMCD and additional log fields について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-standard-logging-cmcd-fields)

### 関連情報

- [Amazon CloudFront standard logging now supports CMCD and additional log fields - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-standard-logging-cmcd-fields)
- [Use real-time access logs - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html)
- [Configure standard logging (v2) - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logging.html)
- [CloudFront Functions Unified Logging](https://aws.amazon.com/blogs/networking-and-content-delivery/cloudfront-functions-unified-logging)
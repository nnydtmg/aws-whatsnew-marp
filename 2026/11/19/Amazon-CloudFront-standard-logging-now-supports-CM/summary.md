# Amazon CloudFront の標準ログが CMCD と追加フィールドをサポート

Amazon CloudFront standard logging now supports CMCD and additional log fields

**カテゴリ:** What's New
**公開日:** 2026-11-18T19:28:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-standard-logging-cmcd-fields)

このページでは、AWS What's Newで発表された「Amazon CloudFront standard logging now supports CMCD and additional log fields」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontの標準ログがCMCDおよび追加のアクセスログフィールドをサポートするようになりました。これまでリアルタイムログでのみ利用可能だったフィールドを標準ログに含め、Amazon S3、Amazon CloudWatch Logs、Amazon Data Firehoseへ配信できます。ストリーミングチームは追加のデータストリームを設定せずに再生問題のトラブルシューティングを迅速に行えます。

## このアップデートで何が変わったか

新機能は、Amazon CloudFrontの標準ログが、これまでリアルタイムログでのみ利用可能であった追加のアクセスログフィールドとCMCDをサポートするようになったことです。これらのフィールドは標準ログに含め、Amazon S3、Amazon CloudWatch Logs、またはAmazon Data Firehoseへ配信できます。再生問題とCloudFront配信データを照合してトラブルシューティングを迅速化したいストリーミングチームにとって有益です。すべてのCloudFrontエッジロケーションで利用可能で、標準ロギングの価格が適用されます。

## 対象ユーザー

Amazon CloudFront standard logging now supports additional access log fields that were previously available only in CloudFront real-time logs. You can now include these fields in your standard logs and deliver them to Amazon S3, Amazon CloudWatch Logs, or Amazon Data Firehose, without setting up an 

## 詳細

Amazon CloudFront standard logging now supports additional access log fields that were previously available only in CloudFront real-time logs. You can now include these fields in your standard logs and deliver them to Amazon S3, Amazon CloudWatch Logs, or Amazon Data Firehose, without setting up an additional data stream for real-time logs.

The new fields include:
- The IP address of the CloudFront server that handled the request
- Identifiers that separate traffic on a primary distribution from traffic on a staging distribution
- A media quality confidence score
- Common Media Client Data (CMCD) fields, which video players send with each request to report details like bitrate, buffer length, and playback session ID

Streaming teams can use these fields to match playback problems that viewers see with CloudFront delivery data, which makes troubleshooting faster.

These fields are available in all CloudFront edge locations, and standard logging pricing applies.

新機能は、Amazon CloudFrontの標準ログが、これまでリアルタイムログでのみ利用可能であった追加のアクセスログフィールドとCMCDをサポートするようになったことです。これらのフィールドは標準ログに含め、Amazon S3、Amazon CloudWatch Logs、またはAmazon Data Firehoseへ配信できます。再生問題とCloudFront配信データを照合してトラブルシューティングを迅速化したいストリーミングチームにとって有益です。すべてのCloudFrontエッジロケーションで利用可能で、標準ロギングの価格が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-standard-logging-cmcd-fields)
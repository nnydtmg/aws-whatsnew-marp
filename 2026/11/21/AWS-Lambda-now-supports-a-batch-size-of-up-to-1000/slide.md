---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaがAmazon SQS FIFOキューでバッチサイズ最大10,000件をサポート

AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues

**What's New** | 2026-11-20T19:00:00

---

## 概要

- AWS Lambdaは、プロビジョニングモードのAmazon SQS FIFOキューのイベントソースマッピングにおいて、バッチサイズを最大10,000件まで拡大しました。
- これまでは最大10件だったため、厳密な順序が必要な高ボリュームワークロードでは呼び出し数の増加や独自バッファの追加が必要でした。
- 本機能により、金融取引・注文処理・在庫更新などの順序付きワークロードをより少ない呼び出しで処理できるようになります。
- メッセージグループ内の順序は継続して保持されます。

---

## 前提・背景

### これまでの課題

AWS Lambdaは、プロビジョニングモードのAmazon SQS FIFOキューのイベントソースマッピング（ESM）において、バッチサイズを以前の10件から10,000件まで拡大しました。バッチ処理ウィンドウは最大300秒まで設定可能で、各メッセージグループ内の順序は継続して保持されます。

---

### 関連する最近の動向

- **AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)

- **Understanding how AWS La...

---

## 変更内容・新機能

プロビジョニングモードでは、イベントポーラーの最小数・最大数を設定してスループットを制御できます。これまではバッチサイズ上限10件の制限により、呼び出しのスケールアウトや独自バッファロジックが必要で、運用負荷とコストが増加していました。本更新により、アプリケーションを再構成せずに大量の順序付きメッセージを少ない呼び出しで処理できます。

対象ワークロード: 金融取引、注文処理、在庫更新など、厳密な順序と重複排除が必要な高ボリューム処理。

---

## まとめ

- AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)

### 関連情報

- [AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)
- [Understanding how AWS Lambda scales with Amazon SQS standard queues](https://aws.amazon.com/blogs/compute/understanding-how-aws-lambda-scales-with-amazon-sqs-queues)
- [Using Lambda with Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html)
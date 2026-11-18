---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Kinesis Data Streamsがキュー機能を発表、リアルタイム処理を簡素化

Amazon Kinesis Data Streams announces queues to simplify and reduce costs of real-time processing

**What's New** | 2026-11-17T08:00:00

---

## 概要

- Amazon Kinesis Data Streamsはキュー機能を追加し、独立したレコード処理のコスト削減と運用簡素化を実現いたします。
- 本機能はログ処理や通知など、レコードを独立に扱うアプリケーションに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Reduce the complexity and cost of real-time processing with queues in Amazon Kinesis Data Streams | AWS Big Data Blog**
  [詳細](https://aws.amazon.com/blogs/big-data/reduce-the-complexity-and-cost-of-real-time-processing-with-queues-in-amazon-kinesis-data-streams)

- **Consuming with queues - Amazon Kinesis Data Streams**
  [詳細](https://docs.aws.amazon.com/streams/latest/dev/cons...

---

## 変更内容・新機能

- 新機能は、Amazon Kinesis Data Streamsがキューをサポートしたことです。
- キューは各レコードの配信状態を追跡いたします。
- コンシューマーはシャードをリースせずにレコードを受信し、処理完了時に確認応答できます。
- シャード数を超えてスケールでき、コストを最大43パーセント削減できます。
- DynamoDBテーブルやカスタムメトリクスが不要になり、コンピュートを効率的に利用できます。
- キューはAmazon SQSを基盤とし、少なくとも1回配信とデッドレター処理を提供いたします。
- 本更新は、各レコードを独立して処理するログ処理、注文履行、通知などの用途に適しております。
- 同一レコードを複数のアプリケーションが必要とする場合にも適しております。
- キューはOn-demandキャパシティモードのデータストリームで利用可能です。
- キューは確認応答されなかったレコードを再配信し、反復失敗するレコードに対する内蔵デッドレター処理を提供します。
- 各キューは独自のCloudWatchメトリクスを公開し、待受信レコードに応じてコンシューマーをスケ

---

## 効果・メリット

- - 新機能は、Amazon Kinesis Data Streamsがキューをサポートしたことです。
- - キューは各レコードの配信状態を追跡いたします。
- - コンシューマーはシャードをリースせずにレコードを受信し、処理完了時に確認応答できます。

---

## まとめ

- Amazon Kinesis Data Streams announces queues to simplify and reduce costs of real-time processing について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/kinesis-data-streams-queues/)

### 関連情報

- [Reduce the complexity and cost of real-time processing with queues in Amazon Kinesis Data Streams | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/reduce-the-complexity-and-cost-of-real-time-processing-with-queues-in-amazon-kinesis-data-streams)
- [Consuming with queues - Amazon Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/consuming-with-queues.html)
- [Amazon Kinesis Data Streams Pricing](https://aws.amazon.com/kinesis/data-streams/pricing/)
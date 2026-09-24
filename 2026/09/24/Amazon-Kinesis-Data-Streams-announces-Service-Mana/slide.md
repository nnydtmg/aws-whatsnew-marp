---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Kinesis Data StreamsがService-Managed Partition Keysを発表、データ取り込みを簡素化

Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion

**What's New** | 2026-09-23T22:51:00

---

## 概要

- Amazon Kinesis Data Streamsの新機能であるサービス管理パーティションキーはオンデマンドストリームでパーティションキーなしのデータ公開を可能にしデータ取り込みを簡素化します。
- この機能はレコード順序が不要なワークロードに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)

- **Managed Streaming Data Service – Amazon Kinesis Data Streams FAQs – AWS**
  [詳細](https://aws.amazon.com/kinesis/data-streams/faqs)

- **Amazon Kinesis Data Streams Termino...

---

## 変更内容・新機能

Amazon Kinesis Data Streamsはオンデマンドスタンダードおよびオンデマンドアドバンテージストリーム向けにサービス管理パーティションキーをサポートします。パーティションキー指定なしでレコードを公開でき、サービスがシャードに自動分散します。順序不要ワークロードのデータ取り込みを簡素化し、ホットパーティションキーを排除して本番化時間を短縮します。ウォーム容量に基づきギガバイト毎秒までスケール可能となります。最新のAWS SDKまたはKPLにアップグレードするだけで利用でき、すべてのAWS商用リージョンで追加料金なしです。この更新はログ集約、メトリクス収集、IoTテレメトリなどの順序不要ワークロードに適しています。ランダムなパーティションキーを生成していた顧客やスロットリング回避を望む顧客に適しています。

---

## 効果・メリット

- Amazon Kinesis Data Streamsはオンデマンドスタンダードおよびオンデマンドアドバンテージストリーム向けにサービス管理パーティションキーをサポートします。
- パーティションキー指定なしでレコードを公開でき、サービスがシャードに自動分散します。
- 順序不要ワークロードのデータ取り込みを簡素化し、ホットパーティションキーを排除して本番化時間を短縮します。
- ウォーム容量に基づきギガバイト毎秒までスケール可能となります。
- 最新のAWS SDKまたはKPLにアップグレードするだけで利用でき、すべてのAWS商用リージョンで追加料金なしです。

---

## まとめ

- Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)

### 関連情報

- [Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)
- [Managed Streaming Data Service – Amazon Kinesis Data Streams FAQs – AWS](https://aws.amazon.com/kinesis/data-streams/faqs)
- [Amazon Kinesis Data Streams Terminology and concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html)
- [Under the hood: Scaling your Kinesis data streams](https://aws.amazon.com/blogs/big-data/under-the-hood-scaling-your-kinesis-data-streams)
- [Exploring the Depths of Amazon Kinesis Data Streams](https://caylent.com/blog/exploring-the-depths-of-kinesis-data-streams-part-1-partitioning)
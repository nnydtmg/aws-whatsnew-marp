# Amazon Kinesis Data StreamsがService-Managed Partition Keysを発表、データ取り込みを簡素化

Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion

**カテゴリ:** What's New
**公開日:** 2026-09-23T22:51:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)

このページでは、AWS What's Newで発表された「Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Kinesis Data Streamsの新機能であるサービス管理パーティションキーはオンデマンドストリームでパーティションキーなしのデータ公開を可能にしデータ取り込みを簡素化します。この機能はレコード順序が不要なワークロードに適しています。

## このアップデートで何が変わったか

Amazon Kinesis Data Streamsはオンデマンドスタンダードおよびオンデマンドアドバンテージストリーム向けにサービス管理パーティションキーをサポートします。パーティションキー指定なしでレコードを公開でき、サービスがシャードに自動分散します。順序不要ワークロードのデータ取り込みを簡素化し、ホットパーティションキーを排除して本番化時間を短縮します。ウォーム容量に基づきギガバイト毎秒までスケール可能となります。最新のAWS SDKまたはKPLにアップグレードするだけで利用でき、すべてのAWS商用リージョンで追加料金なしです。この更新はログ集約、メトリクス収集、IoTテレメトリなどの順序不要ワークロードに適しています。ランダムなパーティションキーを生成していた顧客やスロットリング回避を望む顧客に適しています。

## 対象ユーザー

Amazon Kinesis Data Streamsはオンデマンドスタンダードおよびオンデマンドアドバンテージストリーム向けにサービス管理パーティションキーをサポートします。パーティションキー指定なしでレコードを公開でき、サービスがシャードに自動分散します。順序不要ワークロードのデータ取り込みを簡素化し、ホットパーティションキーを排除して本番化時間を短縮します。ウォーム容量に基づきギガバイト毎秒までスケール可能となります。最新のAWS SDKまたはKPLにアップグレードするだけで利用でき、すべてのAWS商用リージョンで追加料金なしです。この更新はログ集約、メトリクス収集、IoTテレメトリなど

## 詳細

Amazon Kinesis Data Streamsはオンデマンドスタンダードおよびオンデマンドアドバンテージストリーム向けにサービス管理パーティションキーをサポートします。パーティションキー指定なしでレコードを公開でき、サービスがシャードに自動分散します。順序不要ワークロードのデータ取り込みを簡素化し、ホットパーティションキーを排除して本番化時間を短縮します。ウォーム容量に基づきギガバイト毎秒までスケール可能となります。最新のAWS SDKまたはKPLにアップグレードするだけで利用でき、すべてのAWS商用リージョンで追加料金なしです。この更新はログ集約、メトリクス収集、IoTテレメトリなどの順序不要ワークロードに適しています。ランダムなパーティションキーを生成していた顧客やスロットリング回避を望む顧客に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)
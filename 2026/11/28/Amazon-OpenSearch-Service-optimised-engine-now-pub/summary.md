# Amazon OpenSearch Serviceの最適化エンジンがAmazon S3 Tablesへのデータ公開に対応

Amazon OpenSearch Service optimised engine now publishes data to Amazon S3 Tables

**カテゴリ:** What's New
**公開日:** 2026-11-25T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-publish-s3-tables)

このページでは、AWS What's Newで発表された「Amazon OpenSearch Service optimised engine now publishes data to Amazon S3 Tables」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon OpenSearch Serviceの最適化エンジンは、オブザーバビリティデータをAmazon S3 Tablesに公開できるようになりました。本機能は、OpenSearchへデータを直接送信し、他の分析ツールで再利用したいお客様に適しています。

## このアップデートで何が変わったか

公開ポリシー（Publish policy）により、選択したインデックスがAWSアカウント内のApache Icebergテーブルとして利用可能になります。エンジニアやAIエージェントは、Amazon EMR Serverless、DuckDBなどIceberg互換ツールで同一のオブザーバビリティデータを、OpenSearchにクエリ負荷をかけずに参照できます。履歴調査、クロスデータセット分析、監査、長期トレンド分析に再利用でき、低コストで保持できます。

本機能はOpenSearch 3.9のオブザーバビリティ向け新エンジンで追加料金なしで利用できます。対応リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (Ireland), Eur

## 対象ユーザー

Amazon OpenSearch Serviceのオブザーバビリティ向け最適化エンジンが、OpenSearchへ直接送信したオブザーバビリティデータをAmazon S3 Tablesに公開できるようになりました。依来はOpenSearch内で検索・分析はできるものの、他の分析ツールやAIツールで再利用するには並行取り込みやカスタムエクスポートパイプラインが必要でした。本統合により、データの取り込み方法を変えずにオープンテーブルとして再利用できます。

## 活用シーン

OptimizedエンジンはデータをApache Parquet形式で保存しているため、公開時にドキュメントの再エンコードは不要でファイルをコピーするだけです。テーブルはIceberg v3形式で、DuckDB、Amazon EMR Serverless上のApache SparkなどでIAM権限のみで参照可能です。ISMポリシーで古い世代をテーブルに公開し、コミット成功後にドメインから削除するコールドティアとして活用できます。

## 詳細

Amazon OpenSearch Serviceのオブザーバビリティ向け最適化エンジンが、OpenSearchへ直接送信したオブザーバビリティデータをAmazon S3 Tablesに公開できるようになりました。依来はOpenSearch内で検索・分析はできるものの、他の分析ツールやAIツールで再利用するには並行取り込みやカスタムエクスポートパイプラインが必要でした。本統合により、データの取り込み方法を変えずにオープンテーブルとして再利用できます。

公開ポリシー（Publish policy）により、選択したインデックスがAWSアカウント内のApache Icebergテーブルとして利用可能になります。エンジニアやAIエージェントは、Amazon EMR Serverless、DuckDBなどIceberg互換ツールで同一のオブザーバビリティデータを、OpenSearchにクエリ負荷をかけずに参照できます。履歴調査、クロスデータセット分析、監査、長期トレンド分析に再利用でき、低コストで保持できます。

OptimizedエンジンはデータをApache Parquet形式で保存しているため、公開時にドキュメントの再エンコードは不要でファイルをコピーするだけです。テーブルはIceberg v3形式で、DuckDB、Amazon EMR Serverless上のApache SparkなどでIAM権限のみで参照可能です。ISMポリシーで古い世代をテーブルに公開し、コミット成功後にドメインから削除するコールドティアとして活用できます。

本機能はOpenSearch 3.9のオブザーバビリティ向け新エンジンで追加料金なしで利用できます。対応リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Spain)。Amazon S3 Tablesのストレージとクエリ用サービスは標準料金が発生します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-publish-s3-tables)
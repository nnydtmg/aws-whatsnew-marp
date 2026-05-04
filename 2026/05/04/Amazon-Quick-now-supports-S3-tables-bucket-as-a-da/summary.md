# Amazon Quick now supports S3 tables bucket as a data source

**カテゴリ:** What's New
**公開日:** 2026-05-04
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/quick-direct-query-s3-tables/](https://aws.amazon.com/about-aws/whats-new/2026/05/quick-direct-query-s3-tables/)

---

## 要約

Amazon Quickが新たにS3テーブルバケットをデータソースとしてサポートし、ユーザーはApache Icebergテーブルを使用してダッシュボード構築や会話型分析を実行できるようになりました。これにより、中間ウェアハウスを必要とせず、簡素化されたデータアーキテクチャでレイクハウスデータを操作し、準リアルタイムのインサイトを得ることが可能です。

## 詳細

- Amazon Quickが、Amazon S3テーブルバケットをデータソースとしてサポートするようになりました。
- ユーザーは、S3テーブルバケットに保存されているApache Icebergテーブルを使用して、ダッシュボードの構築、会話型分析の実行、データ探索が可能になりました。
- 中間データウェアハウスやOLAP層が不要になり、簡素化されたデータアーキテクチャでレイクハウスデータを操作できるようになりました。
- Salesforce、SAP、Amazon Kinesis Data Firehoseなどのソースからのゼロ-ETLと組み合わせることで、最小限のパイプライン依存関係で準リアルタイムのインサイトが得られます。
- 管理者がS3テーブルバケットのアクセス許可を一度設定すると、作成者はすぐにデータセットを作成して構築を開始できます。
- S3テーブルバケットのデータセットは、Amazon QuickのDataset Q&Aを通じて完全にアクセス可能で、自然言語の質問に対してデータレイクをソースとした回答が得られます。
- この機能は、Amazon Quickが利用可能なすべてのAWSリージョンで利用可能です。

## 関連リソース

- AWS What's New: https://aws.amazon.com/about-aws/whats-new/2026/05/quick-direct-query-s3-tables/
- Amazon Quick ドキュメント: https://docs.aws.amazon.com/quicksight/
- Amazon S3 Tables: https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables.html
- Apache Iceberg: https://iceberg.apache.org/
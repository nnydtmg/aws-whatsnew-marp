# Amazon MWAAがDuckDBオペレーターのネイティブサポートを開始

Amazon MWAA now supports DuckDB operators

**カテゴリ:** What's New
**公開日:** 2026-11-09T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators/)

このページでは、AWS What's Newで発表された「Amazon MWAA now supports DuckDB operators」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon MWAAはAirflow 3.3.1環境においてDuckDBオペレーターのネイティブサポートを開始いたしました。本更新はデータ品質チェックや変換を実施されたいMWAAご利用のお客様に適しております。

## このアップデートで何が変わったか

Amazon MWAAがDuckDBオペレーターを新たにサポートいたしました。DuckDBは組み込み型の分析データベースであり、Amazon S3を含む対応データソースに対するデータ品質チェック、要約、変換を可能にいたします。Apache Airflow 3.3.1を実行するAmazon MWAAプロビジョンド環境でネイティブサポートがご利用いただけます。DuckDBは最新のMWAA Airflow 3.3.1アップデートに事前インストールおよびAWS接続用に事前設定されております。環境をAirflow 3.3.1に更新し実行ロールのアクセスを追加すれば、追加設定なしでDuckDBExecuteQueryOperatorをご利用いただけます。本機能はAmazon MWAAが利用可能なすべてのAWSリージョンでご利用いただけます。本更新はAmazon MWAAをご利用のお客様およびデータ品質チェックや変換を行いたいお客様に適しております。

## 詳細

Amazon MWAAがDuckDBオペレーターを新たにサポートいたしました。DuckDBは組み込み型の分析データベースであり、Amazon S3を含む対応データソースに対するデータ品質チェック、要約、変換を可能にいたします。Apache Airflow 3.3.1を実行するAmazon MWAAプロビジョンド環境でネイティブサポートがご利用いただけます。DuckDBは最新のMWAA Airflow 3.3.1アップデートに事前インストールおよびAWS接続用に事前設定されております。環境をAirflow 3.3.1に更新し実行ロールのアクセスを追加すれば、追加設定なしでDuckDBExecuteQueryOperatorをご利用いただけます。本機能はAmazon MWAAが利用可能なすべてのAWSリージョンでご利用いただけます。本更新はAmazon MWAAをご利用のお客様およびデータ品質チェックや変換を行いたいお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-mwaa-supports-duckdb-operators/)
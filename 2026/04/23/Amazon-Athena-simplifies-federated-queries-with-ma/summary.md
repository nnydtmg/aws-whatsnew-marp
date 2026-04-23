# Amazon Athena simplifies federated queries with managed connectors

**カテゴリ:** What's New
**公開日:** 2026-04-23T21:15:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-athena/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-athena/)

---

## 要約

Amazon Athenaの管理されたコネクタにより、ユーザーはAWS アカウント内でコネクタリソースを保守することなく、12のデータソースに対してフェデレーテッドクエリを実行できるようになりました。この更新は、複数のデータソースを統合的に管理し、データ移動なしにクエリを実行したい企業や開発チームに最適です。

## 詳細

- Amazon Athenaが12のデータソース向けの管理されたコネクタを提供するようになりました。
- Amazon DynamoDB、PostgreSQL、MySQL、Snowflakeなどが対応しており、AWS Glueデータカタログ統合コネクタとして機能します。
- ユーザーはAWS アカウント内でコネクタリソースをデプロイまたは保守する必要がなくなりました。
- Athenaで関連データベース、非関連データベース、オブジェクト、カスタムデータソースをインタラクティブにクエリできるようになります。
- データを移動または複製することなくクエリが可能です。
- Athenaでデータソースへの接続を作成するだけで、Athenaが自動的にコネクタリソースをセットアップして管理します。
- Amazon S3データと並行してデータソースをクエリでき、AWS Lake Formationを通じてきめ細かいアクセス制御を設定できます。
- この機能はAWS GovCloud（US）リージョンと中国リージョンを除くすべてのAthena利用可能なリージョンで提供されます。
---
marp: true
theme: default
paginate: true
---

# AWS Glue launches native REST API connector for universal data integration

**What's New** | 2026-02-05T17:00:00

---

## 概要

- AWS Glueが新たにネイティブREST APIコネクタをリリースし、顧客がREST API対応の任意のデータソースから簡単にデータを統合できるようになりました。
- このコネクタにより、カスタムライブラリの管理負担が軽減され、データエンジニアがデータ変換とビジネスロジックに集中できるようになります。

---

## 前提・背景

### 関連する最近の動向

- **AWS Glue launches native REST API connector ...**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-glue-rest-api-connector)

- **Connections API - AWS Glue**
  [詳細](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html)

- **Create an AWS Glue data catalog policy**
  [詳細](https://docs.informatica.com/cloud-common-services/administrator/cur...

---

## 変更内容・新機能

- AWS Glueが、REST APIベースのネイティブコネクタを新たにリリースしました。
- このコネクタにより、顧客はREST APIを備えた任意のデータソースから簡単にデータを読み取ることができるようになりました。
- カスタムコネクタを構築する際に、特殊なJARファイルと必要なライブラリを提供する必要がなくなりました。
- 新機能により、カスタムライブラリのインストール、更新、管理の負担が排除されます。
- データエンジニアは、コネクタインフラの構築と保守に時間を費やすのではなく、データ変換とビジネスロジックに集中できるようになります。
- このコネクタは、AWS Glueが利用可能なすべてのAWSコマーシャルリージョンで利用可能です。
- AWS Glue API、AWS CLI、またはAWS SDKを使用して、このコネクタの使用を開始できます。
- この更新により、AWS Glueの既存の接続性が拡張され、100以上の非AWSデータソースへの接続がさらに容易になります。

---

## まとめ

- AWS Glue launches native REST API connector for universal data integration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-glue-rest-api-connector)

### 関連情報

- [AWS Glue launches native REST API connector ...](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-glue-rest-api-connector)
- [Connections API - AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html)
- [Create an AWS Glue data catalog policy](https://docs.informatica.com/cloud-common-services/administrator/current-version/connections/amazon-athena-connection-properties/prepare-for-authentication/create-an-aws-glue-data-catalog-policy.html)
- [Integration APIs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html)
- [Using custom connectors and connections with AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/connectors-chapter.html)
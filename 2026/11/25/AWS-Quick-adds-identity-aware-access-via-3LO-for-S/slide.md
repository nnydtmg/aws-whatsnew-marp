---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS QuickがSnowflakeとDatabricks向けに3LOによるエンドユーザー権限を追加

AWS Quick adds identity-aware access via 3LO for Snowflake and Databricks structured data sources

**What's New** | 2026-11-23T17:00:00

---

## 概要

- AWS Quickは、SnowflakeおよびDatabricks向けに3LOによるエンドユーザー権限を追加し、ソース側のガバナンスをそのまま適用できるようになりました。
- 本機能は、既存のアクセス制御を再作成したくない管理者、データキュレーター、およびエンドユーザーの皆様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Setting up identity enforcement with Databricks 3LO - AWS Quick**
  [詳細](https://docs.aws.amazon.com/quick/latest/userguide/catalog-integration-databricks-3lo.html)

- **Identity propagation for data governance - AWS Quick**
  [詳細](https://docs.aws.amazon.com/quick/latest/userguide/catalog-integration-identity-propagation.html)

- **Using Snowflake with AWS Quick Sight - AWS Qui...

---

## 変更内容・新機能

- 新機能は、AWS QuickにおけるSnowflakeおよびDatabricks向けのエンドユーザー権限付き3レッグOAuth（3LO）の追加でございます。
- エンドユーザーがChat、インタラクティブダッシュボード、Appsを利用する際、クエリは各ユーザー自身のIDで実行されます。
- SnowflakeまたはDatabricks Unity Catalogのガバナンスポリシーは、ソース側で適用されます。
- 行・列レベルの制御をQuick上で再作成する必要はございません。
- 管理者はOAuthクライアントを追加し、データキュレーターは3LOと信頼されたID伝播を有効にいたします。
- 本機能はDirectQueryデータセットのみで、Quickの対象リージョンにてご利用いただけます。
- 本アップデートは、既存ポリシーを維持したい管理者、データキュレーター、およびエンドユーザーの皆様に適しております。

---

## まとめ

- AWS Quick adds identity-aware access via 3LO for Snowflake and Databricks structured data sources について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-snowflake-databricks-3lo-end-user-permissions/)

### 関連情報

- [Setting up identity enforcement with Databricks 3LO - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/catalog-integration-databricks-3lo.html)
- [Identity propagation for data governance - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/catalog-integration-identity-propagation.html)
- [Using Snowflake with AWS Quick Sight - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/connecting-to-snowflake.html)
- [Secure OAuth patterns for Snowflake Cortex AI through Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/secure-oauth-patterns-for-snowflake-cortex-ai-through-amazon-bedrock-agentcore)
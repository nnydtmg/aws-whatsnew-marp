# AWS QuickがSnowflakeとDatabricks向けに3LOによるエンドユーザー権限を追加

AWS Quick adds identity-aware access via 3LO for Snowflake and Databricks structured data sources

**カテゴリ:** What's New
**公開日:** 2026-11-23T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-snowflake-databricks-3lo-end-user-permissions/)

このページでは、AWS What's Newで発表された「AWS Quick adds identity-aware access via 3LO for Snowflake and Databricks structured data sources」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Quickは、SnowflakeおよびDatabricks向けに3LOによるエンドユーザー権限を追加し、ソース側のガバナンスをそのまま適用できるようになりました。本機能は、既存のアクセス制御を再作成したくない管理者、データキュレーター、およびエンドユーザーの皆様に適しております。

## このアップデートで何が変わったか

- 新機能は、AWS QuickにおけるSnowflakeおよびDatabricks向けのエンドユーザー権限付き3レッグOAuth（3LO）の追加でございます。
- エンドユーザーがChat、インタラクティブダッシュボード、Appsを利用する際、クエリは各ユーザー自身のIDで実行されます。
- SnowflakeまたはDatabricks Unity Catalogのガバナンスポリシーは、ソース側で適用されます。
- 行・列レベルの制御をQuick上で再作成する必要はございません。
- 管理者はOAuthクライアントを追加し、データキュレーターは3LOと信頼されたID伝播を有効にいたします。
- 本機能はDirectQueryデータセットのみで、Quickの対象リージョンにてご利用いただけます。
- 本アップデートは、既存ポリシーを維持したい管理者、データキュレーター、およびエンドユーザーの皆様に適しております。

## 対象ユーザー

- 新機能は、AWS QuickにおけるSnowflakeおよびDatabricks向けのエンドユーザー権限付き3レッグOAuth（3LO）の追加でございます。
- エンドユーザーがChat、インタラクティブダッシュボード、Appsを利用する際、クエリは各ユーザー自身のIDで実行されます。
- SnowflakeまたはDatabricks Unity Catalogのガバナンスポリシーは、ソース側で適用されます。
- 行・列レベルの制御をQuick上で再作成する必要はございません。
- 管理者はOAuthクライアントを追加し、データキュレーターは3LOと信頼されたID伝播を有効にいたします。


## 詳細

- 新機能は、AWS QuickにおけるSnowflakeおよびDatabricks向けのエンドユーザー権限付き3レッグOAuth（3LO）の追加でございます。
- エンドユーザーがChat、インタラクティブダッシュボード、Appsを利用する際、クエリは各ユーザー自身のIDで実行されます。
- SnowflakeまたはDatabricks Unity Catalogのガバナンスポリシーは、ソース側で適用されます。
- 行・列レベルの制御をQuick上で再作成する必要はございません。
- 管理者はOAuthクライアントを追加し、データキュレーターは3LOと信頼されたID伝播を有効にいたします。
- 本機能はDirectQueryデータセットのみで、Quickの対象リージョンにてご利用いただけます。
- 本アップデートは、既存ポリシーを維持したい管理者、データキュレーター、およびエンドユーザーの皆様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-snowflake-databricks-3lo-end-user-permissions/)
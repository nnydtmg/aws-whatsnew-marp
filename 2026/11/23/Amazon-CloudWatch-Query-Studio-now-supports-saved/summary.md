# Amazon CloudWatch Query Studioが保存クエリをサポート

Amazon CloudWatch Query Studio now supports saved queries

**カテゴリ:** What's New
**公開日:** 2026-11-21T03:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-query-studio-saved-queries)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Query Studio now supports saved queries」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Query StudioでPromQLおよびSQLメトリクスクエリの保存と再利用が可能になり、頻繁に同一クエリを実行する運用担当者の作業が効率化されます。事故対応時に確認するレイテンシクエリなど、よく使うクエリを書き直す必要がなくなります。

## このアップデートで何が変わったか

- 新機能は、Amazon CloudWatch Query StudioにおけるPromQLおよびSQLメトリクスクエリの保存と再利用です。
- クエリ名に「/」を使用してフォルダ整理が可能です（例: team/errors）。
- QueriesパネルのSavedタブで検索、ソート、プレビューができます。
- 保存クエリはスタジオ内容の置換・追加・編集・削除が可能です。
- 保存クエリはアカウントおよびリージョン単位で保管され、各リージョンで最大1,000件まで保存可能です。
- IAM権限で作成・参照・削除のアクセス制御が可能です。
- PutMetricDataQueryDefinition、GetMetricDataQueryDefinition、ListMetricDataQueryDefinitions、DeleteMetricDataQueryDefinition APIでプログラマティックに管理可能です。
- 対応リージョン: 米国東部（バージニア北部・オハイオ）、米国西部（カリフォルニア北部・オレゴン）、カナダ（中部）、南米（サンパウロ）、欧州（アイルランド・ロンド

## 詳細

- 新機能は、Amazon CloudWatch Query StudioにおけるPromQLおよびSQLメトリクスクエリの保存と再利用です。
- クエリ名に「/」を使用してフォルダ整理が可能です（例: team/errors）。
- QueriesパネルのSavedタブで検索、ソート、プレビューができます。
- 保存クエリはスタジオ内容の置換・追加・編集・削除が可能です。
- 保存クエリはアカウントおよびリージョン単位で保管され、各リージョンで最大1,000件まで保存可能です。
- IAM権限で作成・参照・削除のアクセス制御が可能です。
- PutMetricDataQueryDefinition、GetMetricDataQueryDefinition、ListMetricDataQueryDefinitions、DeleteMetricDataQueryDefinition APIでプログラマティックに管理可能です。
- 対応リージョン: 米国東部（バージニア北部・オハイオ）、米国西部（カリフォルニア北部・オレゴン）、カナダ（中部）、南米（サンパウロ）、欧州（アイルランド・ロンドン・パリ・フランクフルト・ストックホルム）、アジアパシフィック（ムンバイ・ソウル・大阪・東京・シンガポール・シドニー）。
- 本アップデートは、同じクエリを頻繁に実行する運用担当者に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-query-studio-saved-queries)
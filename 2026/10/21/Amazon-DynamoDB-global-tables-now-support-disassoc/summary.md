# Amazon DynamoDB グローバルテーブルがレプリカの切り離しをサポート

Amazon DynamoDB global tables now support disassociating replicas

**カテゴリ:** What's New
**公開日:** 2026-10-20T23:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)

このページでは、AWS What's Newで発表された「Amazon DynamoDB global tables now support disassociating replicas」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon DynamoDBグローバルテーブルは、データを削除せずにレプリカを切り離す新機能を提供します。この更新は、レプリケーションを停止してテーブルを独立して継続利用したいお客様に適しています。

## このアップデートで何が変わったか

Amazon DynamoDBのグローバルテーブルが、レプリカをテーブルやデータを削除せずに切り離す機能を新たにサポートしました。レプリケーションを停止し、同じテーブルを単一リージョンテーブルとして継続してご利用いただけます。この更新は、共有マルチアカウントグローバルテーブルから離脱して独立してテーブルを使用したいアカウントに適しています。ローカルワークロード、検証、または監査のためにテーブルを保持したいお客様にも有益です。

## 対象ユーザー

開始するには、AWS Management Console、AWS CLI、DynamoDB API、またはAWS CloudFormationを使用します。詳細はAmazon DynamoDB Developer GuideのDisassociating replicasをご覧ください。

## 詳細

Amazon DynamoDBのグローバルテーブルが、レプリカをテーブルやデータを削除せずに切り離す機能を新たにサポートしました。レプリケーションを停止し、同じテーブルを単一リージョンテーブルとして継続してご利用いただけます。この更新は、共有マルチアカウントグローバルテーブルから離脱して独立してテーブルを使用したいアカウントに適しています。ローカルワークロード、検証、または監査のためにテーブルを保持したいお客様にも有益です。

グローバルテーブルは、完全管理型のマルチリージョン・マルチアクティブレプリケーションを提供します。今回、レプリカへのレプリケーションを停止し、同じテーブルを単一リージョンテーブルとして継続使用できます。

アカウントは共有マルチアカウントグローバルテーブルから離脱し、独立してテーブルを継続使用できます。また、代替テーブルの作成やデータコピーを行わずに、ローカルワークロード、検証、監査のためにテーブルを保持したまま、リージョンへのレプリケーションを停止できます。

DynamoDBは、マルチリージョン結局的整合性（MREC）を使用する同一アカウントおよびマルチアカウントグローバルテーブルについて、すべてのAWSリージョンでレプリカの切り離しをサポートします。

開始するには、AWS Management Console、AWS CLI、DynamoDB API、またはAWS CloudFormationを使用します。詳細はAmazon DynamoDB Developer GuideのDisassociating replicasをご覧ください。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)
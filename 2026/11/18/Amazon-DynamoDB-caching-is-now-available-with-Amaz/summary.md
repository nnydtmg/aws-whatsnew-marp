# Amazon DynamoDB のキャッシングが ElastiCache Serverless for Valkey で利用可能に

Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey

**カテゴリ:** What's New
**公開日:** 2026-11-17T18:54:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-caching-elasticache/)

このページでは、AWS What's Newで発表された「Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングが一般提供され、アプリケーション変更なしでサブミリ秒の読み取りが可能になりました。Amazon DynamoDB Accelerator (DAX) のサーバーレス代替として、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。

## このアップデートで何が変わったか

AWSはAmazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングの一般提供を発表しました。本機能はAmazon DynamoDB Accelerator (DAX) のサーバーレス代替で、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。これまではDynamoDBの1桁ミリ秒レイテンシーより高速な読み取りが必要な場合、DAXノードのプロビジョニングとスケール、または自前キャッシュの運用とDynamoDBとの同期が必要でした。今後はデータ変更に応じて更新されるライトスルーキャッシュからDynamoDBテーブルデータにアクセスでき、ワークロードに合わせて自動スケールし、クラスタやノードの管理は不要です。アプリケーションロジックの変更は不要で最小限の設定で利用できます。キャッシュするDynamoDBテーブルとAPI、キャッシュデータの保持期間を選択できます。アプリケーションのIAM認証情報でDynamoDBにアクセスするため、既存のアクセス制御ポリシーが自動適用されます。すべての商用リージョ

## 対象ユーザー

AWSはAmazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングの一般提供を発表しました。本機能はAmazon DynamoDB Accelerator (DAX) のサーバーレス代替で、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。これまではDynamoDBの1桁ミリ秒レイテンシーより高速な読み取りが必要な場合、DAXノードのプロビジョニングとスケール、または自前キャッシュの運用とDynamoDBとの同期が必要でした。今後はデータ変更に応じて更新されるライトスルーキャッシュからDynam

## 詳細

AWSはAmazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングの一般提供を発表しました。本機能はAmazon DynamoDB Accelerator (DAX) のサーバーレス代替で、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。これまではDynamoDBの1桁ミリ秒レイテンシーより高速な読み取りが必要な場合、DAXノードのプロビジョニングとスケール、または自前キャッシュの運用とDynamoDBとの同期が必要でした。今後はデータ変更に応じて更新されるライトスルーキャッシュからDynamoDBテーブルデータにアクセスでき、ワークロードに合わせて自動スケールし、クラスタやノードの管理は不要です。アプリケーションロジックの変更は不要で最小限の設定で利用できます。キャッシュするDynamoDBテーブルとAPI、キャッシュデータの保持期間を選択できます。アプリケーションのIAM認証情報でDynamoDBにアクセスするため、既存のアクセス制御ポリシーが自動適用されます。すべての商用リージョンおよびAWS GovCloud (US) で利用可能です。追加料金なしで、ElastiCache ServerlessとDynamoDBの利用分のみ課金されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-caching-elasticache/)
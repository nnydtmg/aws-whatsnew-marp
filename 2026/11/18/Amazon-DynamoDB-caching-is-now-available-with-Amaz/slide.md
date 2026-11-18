---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon DynamoDB のキャッシングが ElastiCache Serverless for Valkey で利用可能に

Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey

**What's New** | 2026-11-17T18:54:00

---

## 概要

- Amazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングが一般提供され、アプリケーション変更なしでサブミリ秒の読み取りが可能になりました。
- Amazon DynamoDB Accelerator (DAX) のサーバーレス代替として、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。

---

## 前提・背景

### これまでの課題

AWSはAmazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングの一般提供を発表しました。本機能はAmazon DynamoDB Accelerator (DAX) のサーバーレス代替で、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。これまではDynamoDBの1桁ミリ秒レイテンシーより高速な読み取りが必要な場合、DAXノードのプロビジョニングとスケール、または自前キャッシュの運用とDyna

---

### 関連する最近の動向

- **Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey**
  [詳細](https://aws.ama...

---

## 変更内容・新機能

AWSはAmazon ElastiCache Serverless for ValkeyによるDynamoDBキャッシングの一般提供を発表しました。本機能はAmazon DynamoDB Accelerator (DAX) のサーバーレス代替で、頻繁にアクセスされるDynamoDBデータに対しサブミリ秒の読み取りレイテンシーを実現します。これまではDynamoDBの1桁ミリ秒レイテンシーより高速な読み取りが必要な場合、DAXノードのプロビジョニングとスケール、または自前キャッシュの運用とDynamoDBとの同期が必要でした。今後はデータ変更に応じて更新されるライトスルーキャッシュからDynamoDBテーブルデータにアクセスでき、ワークロードに合わせて自動スケールし、クラスタやノードの管理は不要です。アプリケーションロジックの変更は不要で最小限の設定で利用できます。キャッシュするDynamoDBテーブルとAPI、キャッシュデータの保持期間を選択できます。アプリケーションのIAM認証情報でDynamoDBにアクセスするため、既存のアクセス制御ポリシーが自動適用されます。すべての商用リージョ

---

## まとめ

- Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-caching-elasticache/)

### 関連情報

- [Amazon DynamoDB caching is now available with Amazon ElastiCache Serverless for Valkey](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-caching-elasticache/)
- [Choosing between deployment options - Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.deployment.html)
- [Amazon ElastiCache](https://aws.amazon.com/elasticache)
- [Integrating Amazon DynamoDB and Amazon ElastiCache](https://docs.aws.amazon.com/prescriptive-guidance/latest/dynamodb-elasticache-integration/introduction.html)
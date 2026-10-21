---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon DynamoDB グローバルテーブルがレプリカの切り離しをサポート

Amazon DynamoDB global tables now support disassociating replicas

**What's New** | 2026-10-20T23:00:00

---

## 概要

- Amazon DynamoDBグローバルテーブルは、データを削除せずにレプリカを切り離す新機能を提供します。
- この更新は、レプリケーションを停止してテーブルを独立して継続利用したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon DynamoDB global tables now support disassociating replicas - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate)

- **Global tables: How it works - Amazon DynamoDB**
  [詳細](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html)

---

## 変更内容・新機能

Amazon DynamoDBのグローバルテーブルが、レプリカをテーブルやデータを削除せずに切り離す機能を新たにサポートしました。レプリケーションを停止し、同じテーブルを単一リージョンテーブルとして継続してご利用いただけます。この更新は、共有マルチアカウントグローバルテーブルから離脱して独立してテーブルを使用したいアカウントに適しています。ローカルワークロード、検証、または監査のためにテーブルを保持したいお客様にも有益です。

---

## まとめ

- Amazon DynamoDB global tables now support disassociating replicas について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)

### 関連情報

- [Amazon DynamoDB global tables now support disassociating replicas - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate)
- [Global tables: How it works - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html)
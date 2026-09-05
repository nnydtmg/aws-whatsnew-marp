---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Managed Knowledge BaseがServiceNowをネイティブデータソースコネクタとしてサポート

Amazon Bedrock Managed Knowledge Base now supports ServiceNow as a native data source connector

**What's New** | 2026-09-04T21:14:00

---

## 概要

- Amazon BedrockマネージドナレッジベースがServiceNowをネイティブコネクタとしてサポートし、認証情報の提供のみでコンテンツを自動取り込みできるようになりました。
- 本機能は、ServiceNowの最新コンテンツに基づくAIエージェントを構築したいお客様に最適です。

---

## 前提・背景

### これまでの課題

AWSはAmazon Bedrock Managed Knowledge Base向けのServiceNowデータソースコネクタを発表しました。完全マネージド型のRAGサービスであるManaged Knowledge Baseに、ServiceNowインスタンスを接続してナレッジ記事とサービスカタログアイテムを直接クロールできるようになりました。これまではServiceNowコンテンツをBedrock Knowledge Basesに取り込むにはカスタム取り込みパイプラインの構築と維持が必要でし

---

### 関連する最近の動向

- **Amazon Bedrock Managed Knowledge Base is now generally available**
  [詳細](https://aws.amazon.com/about-aws/what...

---

## 変更内容・新機能

AWSはAmazon Bedrock Managed Knowledge Base向けのServiceNowデータソースコネクタを発表しました。完全マネージド型のRAGサービスであるManaged Knowledge Baseに、ServiceNowインスタンスを接続してナレッジ記事とサービスカタログアイテムを直接クロールできるようになりました。これまではServiceNowコンテンツをBedrock Knowledge Basesに取り込むにはカスタム取り込みパイプラインの構築と維持が必要でしたが、今後はServiceNowインスタンスの認証情報を提供するだけで、コネクタがデータクロール、メタデータ抽出、増分同期を自動的に処理します。コネクタはナレッジ記事とサービスカタログアイテム（ファイル添付を含む）をクロールし、AIエージェントがServiceNowで管理されている組織のナレッジにアクセスできるようにします。sys IDのインクルージョンリストを使って、特定のナレッジベース、記事カテゴリ、サービスカタログにクロール範囲を限定でき、関連コンテンツのみを取り込めます。従業員向けITア

---

## まとめ

- Amazon Bedrock Managed Knowledge Base now supports ServiceNow as a native data source connector について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/)

### 関連情報

- [Amazon Bedrock Managed Knowledge Base is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base)
- [AWS launches Amazon Bedrock Managed Knowledge Base for enterprise RAG applications](https://www.hpcwire.com/aiwire/2026/06/17/aws-launches-amazon-bedrock-managed-knowledge-base-for-enterprise-rag-applications)
- [Enabling generative AI self-service using Amazon Lex, Amazon Bedrock, and ServiceNow](https://aws.amazon.com/blogs/machine-learning/enabling-generative-ai-self-service-using-amazon-lex-amazon-bedrock-and-servicenow)
- [Amazon Bedrock Managed Knowledge Base now supports automatic sync scheduling for data source connectors](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-automatic-sync-scheduling-data-source-connectors)
- [Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)
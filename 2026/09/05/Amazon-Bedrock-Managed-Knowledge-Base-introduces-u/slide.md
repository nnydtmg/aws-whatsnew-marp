---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Managed Knowledge BaseがSharePoint、OneDrive、Confluenceのユーザー管理セットアップを導入

Amazon Bedrock Managed Knowledge Base introduces user-managed setup for SharePoint, OneDrive, and Confluence data sources

**What's New** | 2026-09-04T21:29:00

---

## 概要

- Amazon Bedrockマネージドナレッジベースにユーザー管理セットアップが導入され、既存の認証情報でSharePoint、OneDrive、Confluenceのデータソースを簡単に接続できるようになりました。
- これにより、管理者権限なしでも迅速にプロトタイプが可能になります。

---

## 前提・背景

### これまでの課題

新しい機能は、Amazon BedrockマネージドナレッジベースにおけるSharePoint、OneDrive、およびConfluenceデータソース向けのユーザー管理セットアップ（3LO）です。これまでこれらのデータソースの設定には、サードパーティ側で2LO認証情報を生成する必要があり、管理者権限のないユーザーには時間がかかりアクセスできない場合がありました。ユーザー管理セットアップでは、既存のサードパーティ認証情報でサインインするだけで認証が処理され、数分でセットアップが完了します。このア

---

### 関連する最近の動向

- **Amazon Bedrock Managed Knowledge Base introduces user-managed setup for SharePoint, OneDrive, and Confluence da...

---

## 変更内容・新機能

新しい機能は、Amazon BedrockマネージドナレッジベースにおけるSharePoint、OneDrive、およびConfluenceデータソース向けのユーザー管理セットアップ（3LO）です。これまでこれらのデータソースの設定には、サードパーティ側で2LO認証情報を生成する必要があり、管理者権限のないユーザーには時間がかかりアクセスできない場合がありました。ユーザー管理セットアップでは、既存のサードパーティ認証情報でサインインするだけで認証が処理され、数分でセットアップが完了します。このアップデートは、SharePointのドキュメント、OneDriveのファイル、またはConfluenceのウィキに基づいたAIアシスタントを迅速にプロトタイプしたいチームに適しています。管理者レベルのアクセスがないユーザーにとって便利です。ユーザー管理セットアップは既存のサービスアカウント認証を補完し、本番ワークロード向けのプログラム的でエンタープライズグレードのオプションを維持しつつ、データを接続するより迅速なパスを提供します。

---

## まとめ

- Amazon Bedrock Managed Knowledge Base introduces user-managed setup for SharePoint, OneDrive, and Confluence data sources について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-user-managed-setup-sharepoint-onedrive-confluence/)

### 関連情報

- [Amazon Bedrock Managed Knowledge Base introduces user-managed setup for SharePoint, OneDrive, and Confluence data sources](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-user-managed-setup-sharepoint-onedrive-confluence/)
- [Amazon Bedrock Managed Knowledge Base is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base)
- [Amazon Bedrock Managed Knowledge Base: A Developer's Take](https://dev.to/aws-builders/amazon-bedrock-managed-knowledge-base-what-developers-actually-need-to-know-3lnb)
- [Build enterprise search for agents with Amazon Bedrock Managed Knowledge Base](https://aws.amazon.com/blogs/machine-learning/build-enterprise-search-for-agents-with-amazon-bedrock-managed-knowledge-base)
- [Create a managed knowledge base - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-create.html)
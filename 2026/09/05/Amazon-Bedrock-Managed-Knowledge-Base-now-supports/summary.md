# Amazon Bedrock Managed Knowledge BaseがServiceNowをネイティブデータソースコネクタとしてサポート

Amazon Bedrock Managed Knowledge Base now supports ServiceNow as a native data source connector

**カテゴリ:** What's New
**公開日:** 2026-09-04T21:14:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/)

このページでは、AWS What's Newで発表された「Amazon Bedrock Managed Knowledge Base now supports ServiceNow as a native data source connector」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon BedrockマネージドナレッジベースがServiceNowをネイティブコネクタとしてサポートし、認証情報の提供のみでコンテンツを自動取り込みできるようになりました。本機能は、ServiceNowの最新コンテンツに基づくAIエージェントを構築したいお客様に最適です。

## このアップデートで何が変わったか

AWSはAmazon Bedrock Managed Knowledge Base向けのServiceNowデータソースコネクタを発表しました。完全マネージド型のRAGサービスであるManaged Knowledge Baseに、ServiceNowインスタンスを接続してナレッジ記事とサービスカタログアイテムを直接クロールできるようになりました。これまではServiceNowコンテンツをBedrock Knowledge Basesに取り込むにはカスタム取り込みパイプラインの構築と維持が必要でしたが、今後はServiceNowインスタンスの認証情報を提供するだけで、コネクタがデータクロール、メタデータ抽出、増分同期を自動的に処理します。コネクタはナレッジ記事とサービスカタログアイテム（ファイル添付を含む）をクロールし、AIエージェントがServiceNowで管理されている組織のナレッジにアクセスできるようにします。sys IDのインクルージョンリストを使って、特定のナレッジベース、記事カテゴリ、サービスカタログにクロール範囲を限定でき、関連コンテンツのみを取り込めます。従業員向けITア

## 対象ユーザー

AWSはAmazon Bedrock Managed Knowledge Base向けのServiceNowデータソースコネクタを発表しました。完全マネージド型のRAGサービスであるManaged Knowledge Baseに、ServiceNowインスタンスを接続してナレッジ記事とサービスカタログアイテムを直接クロールできるようになりました。これまではServiceNowコンテンツをBedrock Knowledge Basesに取り込むにはカスタム取り込みパイプラインの構築と維持が必要でしたが、今後はServiceNowインスタンスの認証情報を提供するだけで、コネクタがデータクロール、メ

## 詳細

AWSはAmazon Bedrock Managed Knowledge Base向けのServiceNowデータソースコネクタを発表しました。完全マネージド型のRAGサービスであるManaged Knowledge Baseに、ServiceNowインスタンスを接続してナレッジ記事とサービスカタログアイテムを直接クロールできるようになりました。これまではServiceNowコンテンツをBedrock Knowledge Basesに取り込むにはカスタム取り込みパイプラインの構築と維持が必要でしたが、今後はServiceNowインスタンスの認証情報を提供するだけで、コネクタがデータクロール、メタデータ抽出、増分同期を自動的に処理します。コネクタはナレッジ記事とサービスカタログアイテム（ファイル添付を含む）をクロールし、AIエージェントがServiceNowで管理されている組織のナレッジにアクセスできるようにします。sys IDのインクルージョンリストを使って、特定のナレッジベース、記事カテゴリ、サービスカタログにクロール範囲を限定でき、関連コンテンツのみを取り込めます。従業員向けITアシスタント、HRヘルプデスク、カスタマーサポートエージェントを、組織の最新ServiceNowコンテンツに基づいて構築することが容易になります。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/)
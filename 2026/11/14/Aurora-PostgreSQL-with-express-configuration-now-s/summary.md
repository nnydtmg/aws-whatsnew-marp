# Aurora PostgreSQLのエクスプレス設定がCloudFormationで利用可能に

Aurora PostgreSQL with express configuration now supported in CloudFormation

**カテゴリ:** What's New
**公開日:** 2026-11-13T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)

このページでは、AWS What's Newで発表された「Aurora PostgreSQL with express configuration now supported in CloudFormation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Aurora PostgreSQLのエクスプレス設定がCloudFormationで利用可能になり、クラスターとプライマリインスタンスを1つのプロパティで作成できるようになりました。本機能は、インフラストラクチャのコード化を簡素化したいお客様に適しております。

## このアップデートで何が変わったか

Aurora PostgreSQLのエクスプレス設定が、AWS CloudFormationでサポートされるようになりました。AWS::RDS::DBClusterリソースに、新しいwithExpressConfigurationプロパティが追加されました。本プロパティにより、クラスターとプライマリデータベースインスタンスを1つの宣言から作成できます。エクスプレス設定では、Auroraサーバーレスデータベースを数秒で作成およびクエリできます。本アップデートは、CloudFormationでインフラストラクチャを自動デプロイしたいお客様に適しております。テンプレートを簡素化し、エクスプレス設定のAuroraクラスターを管理しやすくしたい方にとって有益です。

## 対象ユーザー

Aurora PostgreSQLのエクスプレス設定が、AWS CloudFormationでサポートされるようになりました。AWS::RDS::DBClusterリソースに、新しいwithExpressConfigurationプロパティが追加されました。本プロパティにより、クラスターとプライマリデータベースインスタンスを1つの宣言から作成できます。エクスプレス設定では、Auroraサーバーレスデータベースを数秒で作成およびクエリできます。本アップデートは、CloudFormationでインフラストラクチャを自動デプロイしたいお客様に適しております。テンプレートを簡素化し、エクスプレス設定の

## 詳細

Aurora PostgreSQLのエクスプレス設定が、AWS CloudFormationでサポートされるようになりました。AWS::RDS::DBClusterリソースに、新しいwithExpressConfigurationプロパティが追加されました。本プロパティにより、クラスターとプライマリデータベースインスタンスを1つの宣言から作成できます。エクスプレス設定では、Auroraサーバーレスデータベースを数秒で作成およびクエリできます。本アップデートは、CloudFormationでインフラストラクチャを自動デプロイしたいお客様に適しております。テンプレートを簡素化し、エクスプレス設定のAuroraクラスターを管理しやすくしたい方にとって有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/)
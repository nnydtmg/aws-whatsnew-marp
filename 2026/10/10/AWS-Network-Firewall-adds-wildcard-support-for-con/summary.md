# AWS Network Firewallがコンテナ属性フィルターのワイルドカード対応を発表

AWS Network Firewall adds wildcard support for container attribute filters

**カテゴリ:** What's New
**公開日:** 2026-10-08T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-network-firewall-container-attributes-wildcard)

このページでは、AWS What's Newで発表された「AWS Network Firewall adds wildcard support for container attribute filters」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートし、動的なコンテナ環境におけるファイアウォールルールの管理を簡素化いたします。このアップデートは新しいアプリケーションバリアントが頻繁にデプロイされるお客様に特に適しております。

## このアップデートで何が変わったか

AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートいたしました。ワイルドカードパターンを用いて属性フィルターを定義し、単一のルールで複数のコンテナワークロードにマッチさせることが可能になります。各バリアントごとに個別のコンテナ関連付けを作成する必要がなくなり、動的なコンテナ環境でのファイアウォールルール管理が簡素化されます。app=payments-*のようなパターンを使用することで、payments-api、payments-worker、payments-cronなどのアプリケーションのすべてのバリアントを自動的にカバーできます。このアップデートは、新しいアプリケーションバリアントが頻繁にデプロイされる動的なコンテナ環境を持つAmazon EKSおよびAmazon ECSのユーザーに適しております。

## 対象ユーザー

AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートいたしました。ワイルドカードパターンを用いて属性フィルターを定義し、単一のルールで複数のコンテナワークロードにマッチさせることが可能になります。各バリアントごとに個別のコンテナ関連付けを作成する必要がなくなり、動的なコンテナ環境でのファイアウォールルール管理が簡素化されます。app=payments-*のようなパターンを使用することで、payments-api、payments-worker、payments-cronなどのアプリケーショ

## 詳細

AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートいたしました。ワイルドカードパターンを用いて属性フィルターを定義し、単一のルールで複数のコンテナワークロードにマッチさせることが可能になります。各バリアントごとに個別のコンテナ関連付けを作成する必要がなくなり、動的なコンテナ環境でのファイアウォールルール管理が簡素化されます。app=payments-*のようなパターンを使用することで、payments-api、payments-worker、payments-cronなどのアプリケーションのすべてのバリアントを自動的にカバーできます。このアップデートは、新しいアプリケーションバリアントが頻繁にデプロイされる動的なコンテナ環境を持つAmazon EKSおよびAmazon ECSのユーザーに適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-network-firewall-container-attributes-wildcard)
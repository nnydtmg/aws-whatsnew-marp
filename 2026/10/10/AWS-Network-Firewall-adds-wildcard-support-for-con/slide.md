---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewallがコンテナ属性フィルターのワイルドカード対応を発表

AWS Network Firewall adds wildcard support for container attribute filters

**What's New** | 2026-10-08T16:00:00

---

## 概要

- AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートし、動的なコンテナ環境におけるファイアウォールルールの管理を簡素化いたします。
- このアップデートは新しいアプリケーションバリアントが頻繁にデプロイされるお客様に特に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Network Firewall adds wildcard support for container attribute filters - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-network-firewall-container-attributes-wildcard)

- **container attribute-based rules for AWS Network Firewall**
  [詳細](https://github.com/aws-samples/sample-apex-skills/issues/170)

- **AWS Network Firewall now supports container attrib...

---

## 変更内容・新機能

AWS Network FirewallはAmazon EKSおよびAmazon ECSのコンテナ属性ベース検査フィルターでワイルドカードマッチングをサポートいたしました。ワイルドカードパターンを用いて属性フィルターを定義し、単一のルールで複数のコンテナワークロードにマッチさせることが可能になります。各バリアントごとに個別のコンテナ関連付けを作成する必要がなくなり、動的なコンテナ環境でのファイアウォールルール管理が簡素化されます。app=payments-*のようなパターンを使用することで、payments-api、payments-worker、payments-cronなどのアプリケーションのすべてのバリアントを自動的にカバーできます。このアップデートは、新しいアプリケーションバリアントが頻繁にデプロイされる動的なコンテナ環境を持つAmazon EKSおよびAmazon ECSのユーザーに適しております。

---

## まとめ

- AWS Network Firewall adds wildcard support for container attribute filters について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-network-firewall-container-attributes-wildcard)

### 関連情報

- [AWS Network Firewall adds wildcard support for container attribute filters - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-network-firewall-container-attributes-wildcard)
- [container attribute-based rules for AWS Network Firewall](https://github.com/aws-samples/sample-apex-skills/issues/170)
- [AWS Network Firewall now supports container attribute-based inspection for Amazon EKS and Amazon ECS - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-container-attributes-referencing)
- [Secure Amazon container workloads using container attribute-based rules in AWS Network Firewall | AWS Security Blog](https://aws.amazon.com/blogs/security/secure-amazon-container-workloads-using-container-attribute-based-rules-in-aws-network-firewall)
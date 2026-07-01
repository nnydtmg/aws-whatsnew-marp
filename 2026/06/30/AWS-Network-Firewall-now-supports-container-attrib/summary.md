# AWS Network Firewall がコンテナ属性ベースの検査に対応

AWS Network Firewall now supports container attribute-based inspection for Amazon EKS and Amazon ECS

**カテゴリ:** What's New
**公開日:** 2026-06-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-container-attributes-referencing)

このページでは、AWS What's Newで発表された「AWS Network Firewall now supports container attribute-based inspection for Amazon EKS and Amazon ECS」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Network Firewallのコンテナ属性ベースのルール機能により、Amazon EKSおよびAmazon ECS上で実行されるコンテナ化されたワークロードのセキュリティ管理が大幅に簡素化されました。この機能は、IPベースのルール管理の複雑性を排除し、動的に変化するコンテナ環境に対して自動的に適応するエンタープライズグレードのネットワークセキュリティ制御を提供いたします。

## このアップデートで何が変わったか

- AWS Network Firewallがコンテナ属性ベースのルール機能をサポートするようになりました。
- Amazon EKSおよびAmazon ECS上で実行されるコンテナ化されたワークロード、特に生成AI アプリケーションのセキュリティが簡素化されます。
- Namespace、Cluster Name、Labels（Amazon EKS用）、Cluster NameおよびContainer Instance Attributes（Amazon ECS用）などのネイティブコンテナ構成要素を使用してファイアウォールポリシーを作成できます。
- ポッドのスケーリングや再起動時にルールが破損する複雑なIPベースのルール管理が不要になります。
- TLS復号化による暗号化トラフィックの深いパケット検査、FQDN ベースのフィルタリング、URL カテゴリフィルタリング、GeoIPフィルタリングが自動的に適応します。
- コンテナのスケーリングに応じてセキュリティ制御が自動的に調整されます。
- AWS Network Firewall、Amazon EKS、Amazon ECSの統合

## 詳細

- AWS Network Firewallがコンテナ属性ベースのルール機能をサポートするようになりました。
- Amazon EKSおよびAmazon ECS上で実行されるコンテナ化されたワークロード、特に生成AI アプリケーションのセキュリティが簡素化されます。
- Namespace、Cluster Name、Labels（Amazon EKS用）、Cluster NameおよびContainer Instance Attributes（Amazon ECS用）などのネイティブコンテナ構成要素を使用してファイアウォールポリシーを作成できます。
- ポッドのスケーリングや再起動時にルールが破損する複雑なIPベースのルール管理が不要になります。
- TLS復号化による暗号化トラフィックの深いパケット検査、FQDN ベースのフィルタリング、URL カテゴリフィルタリング、GeoIPフィルタリングが自動的に適応します。
- コンテナのスケーリングに応じてセキュリティ制御が自動的に調整されます。
- AWS Network Firewall、Amazon EKS、Amazon ECSの統合により、マルチクラスタ環境での一元化されたセキュリティが実現されます。
- この機能はAWS Network Firewallの一部として追加コストなしで利用可能です。
- この機能は複数のAWSリージョンでサポートされています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-container-attributes-referencing)
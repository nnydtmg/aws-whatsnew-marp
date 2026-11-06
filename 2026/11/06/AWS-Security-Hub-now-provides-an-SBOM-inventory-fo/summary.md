# AWS Security HubがコンピュートリソースのSBOMインベントリを提供開始

AWS Security Hub now provides an SBOM inventory for your compute resources

**カテゴリ:** What's New
**公開日:** 2026-11-06T00:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)

このページでは、AWS What's Newで発表された「AWS Security Hub now provides an SBOM inventory for your compute resources」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Hubは、Amazon Inspectorが生成するSBOMに基づき、コンピューティングリソースのソフトウェア構成を組織全体で可視化するSBOMインベントリを追加料金なしで提供いたします。本機能は中央セキュリティチームのトリアージとソフトウェア管理に役立ちます。

## このアップデートで何が変わったか

新機能は、AWS Security Hubがコンピューティングリソース向けに提供するSBOMインベントリです。Amazon InspectorがAmazon EC2インスタンス、Amazon ECRコンテナイメージ、AWS Lambda関数に対して生成するSBOMから、追加設定なしで組織全体のソフトウェアパッケージを継続的に可視化します。SBOMページでは、パッケージのバージョン、タイプ、インストール先リソース数を一覧表示し、パッケージ属性・アカウント・リージョンでフィルタ・グループできます。リソース詳細ページのInstalled softwareタブでは、そのリソース上の全パッケージを確認でき、ファインディングのトリアージ時に機能や重要度を判断できます。Security Hub APIからも照会可能です。Security Hub Essentialsに追加料金なしで含まれ、Amazon Inspectorが有効な環境で自動的に反映されます。Security Hubが利用可能な全AWSリージョンで利用できます。

## 対象ユーザー

新機能は、AWS Security Hubがコンピューティングリソース向けに提供するSBOMインベントリです。Amazon InspectorがAmazon EC2インスタンス、Amazon ECRコンテナイメージ、AWS Lambda関数に対して生成するSBOMから、追加設定なしで組織全体のソフトウェアパッケージを継続的に可視化します。SBOMページでは、パッケージのバージョン、タイプ、インストール先リソース数を一覧表示し、パッケージ属性・アカウント・リージョンでフィルタ・グループできます。リソース詳細ページのInstalled softwareタブでは、そのリソース上の全パッケージを確認で

## 詳細

新機能は、AWS Security Hubがコンピューティングリソース向けに提供するSBOMインベントリです。Amazon InspectorがAmazon EC2インスタンス、Amazon ECRコンテナイメージ、AWS Lambda関数に対して生成するSBOMから、追加設定なしで組織全体のソフトウェアパッケージを継続的に可視化します。SBOMページでは、パッケージのバージョン、タイプ、インストール先リソース数を一覧表示し、パッケージ属性・アカウント・リージョンでフィルタ・グループできます。リソース詳細ページのInstalled softwareタブでは、そのリソース上の全パッケージを確認でき、ファインディングのトリアージ時に機能や重要度を判断できます。Security Hub APIからも照会可能です。Security Hub Essentialsに追加料金なしで含まれ、Amazon Inspectorが有効な環境で自動的に反映されます。Security Hubが利用可能な全AWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)
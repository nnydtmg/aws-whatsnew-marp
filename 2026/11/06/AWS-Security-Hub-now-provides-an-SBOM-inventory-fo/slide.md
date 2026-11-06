---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security HubがコンピュートリソースのSBOMインベントリを提供開始

AWS Security Hub now provides an SBOM inventory for your compute resources

**What's New** | 2026-11-06T00:30:00

---

## 概要

- AWS Security Hubは、Amazon Inspectorが生成するSBOMに基づき、コンピューティングリソースのソフトウェア構成を組織全体で可視化するSBOMインベントリを追加料金なしで提供いたします。
- 本機能は中央セキュリティチームのトリアージとソフトウェア管理に役立ちます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Security Hub now supports resource criticality for prioritization**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality)

- **AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai)

- **AI Inventory in Security Hub**
  [詳細...

---

## 変更内容・新機能

新機能は、AWS Security Hubがコンピューティングリソース向けに提供するSBOMインベントリです。Amazon InspectorがAmazon EC2インスタンス、Amazon ECRコンテナイメージ、AWS Lambda関数に対して生成するSBOMから、追加設定なしで組織全体のソフトウェアパッケージを継続的に可視化します。SBOMページでは、パッケージのバージョン、タイプ、インストール先リソース数を一覧表示し、パッケージ属性・アカウント・リージョンでフィルタ・グループできます。リソース詳細ページのInstalled softwareタブでは、そのリソース上の全パッケージを確認でき、ファインディングのトリアージ時に機能や重要度を判断できます。Security Hub APIからも照会可能です。Security Hub Essentialsに追加料金なしで含まれ、Amazon Inspectorが有効な環境で自動的に反映されます。Security Hubが利用可能な全AWSリージョンで利用できます。

---

## まとめ

- AWS Security Hub now provides an SBOM inventory for your compute resources について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory/)

### 関連情報

- [AWS Security Hub now supports resource criticality for prioritization](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality)
- [AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai)
- [AI Inventory in Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-v2-ai-inventory.html)
- [Export a Software Bill of Materials using Amazon Inspector](https://aws.amazon.com/blogs/security/export-a-software-bill-of-materials-using-amazon-inspector)
- [Amazon Inspector and Security Hub: Cross-Account Scanning](https://awsforengineers.com/blog/automate-cross-account-security-scans-amazon-inspector-aws-security-hub)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EC2とVPCで全リソースタイプの関連リソース表示が可能に

Amazon EC2 and VPC now display related resources for all resource types

**What's New** | 2026-11-04T08:00:00

---

## 概要

- Amazon EC2およびAmazon VPCのコンソールにおいて、すべてのリソースタイプの関連リソースを表示できる新機能が提供され、インフラストラクチャの依存関係の把握とトラブルシューティングが効率化されます。
- 本機能はすべての商用AWSリージョンでご利用いただけます。

---

## 前提・背景

### これまでの課題

- 新機能は、Amazon EC2、Amazon VPC、およびAWS Global Viewにおいて、すべてのリソースタイプの関連リソースを表示できるようになったことです。
- 以前はセキュリティグループのみが対象でしたが、現在はEC2インスタンス、Amazon EBSボリューム、起動テンプレート、Auto Scalingグループ、サブネット、ルートテーブルなどの関係を確認できます。
- 関連リソースタブは、より簡単にアクセスできるようコンソールのツールバーに移動されました。
- 本機能はイン

---

### 関連する最近の動向

- **Amazon EC2 and VPC now display related resources for all resource types - AWS**
  [詳細](https://aws.amazon.com/a...

---

## 変更内容・新機能

- 新機能は、Amazon EC2、Amazon VPC、およびAWS Global Viewにおいて、すべてのリソースタイプの関連リソースを表示できるようになったことです。
- 以前はセキュリティグループのみが対象でしたが、現在はEC2インスタンス、Amazon EBSボリューム、起動テンプレート、Auto Scalingグループ、サブネット、ルートテーブルなどの関係を確認できます。
- 関連リソースタブは、より簡単にアクセスできるようコンソールのツールバーに移動されました。
- 本機能はインフラストラクチャの依存関係の理解と問題の効率的なトラブルシューティングに役立ちます。
- 本機能はすべての商用AWSリージョンでご利用いただけます。
- 本アップデートは、EC2インスタンスの問題を調査する利用者に適しております。
- ネットワーク管理者は、サブネットから関連するルートテーブル、ネットワークACL、インスタンスへの接続を追跡でき、構成レビューやセキュリティ監査を効率化できます。

---

## まとめ

- Amazon EC2 and VPC now display related resources for all resource types について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-vpc-related-resources-all-types/)

### 関連情報

- [Amazon EC2 and VPC now display related resources for all resource types - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-vpc-related-resources-all-types/)
- [Amazon EC2 and VPC now display related resources for security groups - AWS](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-console-related-resources-generally-available)
- [Manage your Amazon EC2 resources - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resources.html)
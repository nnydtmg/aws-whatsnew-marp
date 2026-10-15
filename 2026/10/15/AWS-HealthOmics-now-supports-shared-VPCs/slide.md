---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS HealthOmicsが共有VPCをサポート、中央管理VPCでワークフロー実行が可能に

AWS HealthOmics now supports shared VPCs

**What's New** | 2026-10-15T17:42:00

---

## 概要

- AWS HealthOmicsが共有VPCをサポートし、ヘルスケアおよびライフサイエンスのお客様が中央管理されたVPCでバイオインフォマティクスワークフローを実行できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **VPC-Connected Workflow... | AWS Korea Public Sector SA Team**
  [詳細](https://www.aws-ps-tech.kr/books/omics-on-aws/page/vpc-connected-workflows-accessing-the-internet-and-cross-region-s3-from-workflows)

- **AWS HealthOmics introduces VPC-connected workflows - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-healthomics-vpc-connected-workflows)

- **How to Con...

---

## 変更内容・新機能

- 新機能として、AWS HealthOmicsが共有VPCをサポートし、AWS RAMを使用して他のアカウントが管理するVPC内のリソースにワークフローからアクセスできるようになりました。
- 単一のVPCからサブネットとセキュリティグループを複数アカウントで共有し、HealthOmicsが各アカウントのワークフローを共有サブネットに直接配置いたします。
- 個別のVPCピアリングや重複したVPCエンドポイントなしでプライベートにデータへアクセスでき、インフラストラクチャのオーバーヘッドを削減いたします。
- この更新は、ヘルスケアおよびライフサイエンスのお客様に適しております。
- ネットワーキングを一元管理している組織や、自アカウントでバイオインフォマティクスワークフローを実行する研究者および開発者に適しております。

---

## 効果・メリット

- - 新機能として、AWS HealthOmicsが共有VPCをサポートし、AWS RAMを使用して他のアカウントが管理するVPC内のリソースにワークフローからアクセスできるようになりました。
- - 単一のVPCからサブネットとセキュリティグループを複数アカウントで共有し、HealthOmicsが各アカウントのワークフローを共有サブネットに直接配置いたします。
- - 個別のVPCピアリングや重複したVPCエンドポイントなしでプライベートにデータへアクセスでき、インフラストラクチャのオーバーヘッドを削減いたします。

---

## まとめ

- AWS HealthOmics now supports shared VPCs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/omics-workflows-shared-vpcs/)

### 関連情報

- [VPC-Connected Workflow... | AWS Korea Public Sector SA Team](https://www.aws-ps-tech.kr/books/omics-on-aws/page/vpc-connected-workflows-accessing-the-internet-and-cross-region-s3-from-workflows)
- [AWS HealthOmics introduces VPC-connected workflows - AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-healthomics-vpc-connected-workflows)
- [How to Connect AWS HealthOmics to Public and Private Network Sources at Runtime | AWS for Industries](https://aws.amazon.com/blogs/industries/how-to-connect-aws-healthomics-to-public-and-private-network-sources-at-runtime)
- [Connecting HealthOmics workflows to a VPC - AWS HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/workflows-vpc-networking.html)
- [AWS HealthOmics now streams workflow engine logs to Amazon CloudWatch in real time - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-real-time-engine-log-streaming)
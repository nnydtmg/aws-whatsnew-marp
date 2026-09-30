---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DataSync が共有 VPC をサポート開始

AWS DataSync now supports shared VPCs

**What's New** | 2026-09-29T08:00:00

---

## 概要

- AWS DataSyncが共有VPCをサポートし、中央アカウントのエンドポイントを効率的に利用できるようになりました。
- これによりIPアドレスの節約と運用オーバーヘッドの削減が可能になります。
- AWS Resource Access Manager (RAM) でアカウント間共有されたサブネットを使って DataSync エージェントを作成し、転送タスクを実行できます。
- 中央アカウントで管理する共有サブネットと VPC エンドポイント経由でプライベートにデータ転送できます。

---

## 前提・背景

### これまでの課題

AWS DataSync now supports shared Virtual Private Clouds (VPCs). You can create DataSync agents and run transfer tasks using subnets shared across AWS accounts with AWS Resource Access Manager (RAM). It allows you to transfer data privately over a sha

---

### 関連する最近の動向

- **AWS DataSync now supports shared VPCs**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-datasync-...

---

## 変更内容・新機能

AWS DataSync now supports shared Virtual Private Clouds (VPCs). You can create DataSync agents and run transfer tasks using subnets shared across AWS accounts with AWS Resource Access Manager (RAM). It allows you to transfer data privately over a shared subnet and VPC endpoint managed in a central account, rather than one per account. Customers that centralize their networking previously had to create a separate DataSync VPC endpoint in every account that connected privately through AWS PrivateL

---

## 効果・メリット

- AWS DataSyncが共有VPCをサポートし、中央アカウントのエンドポイントを効率的に利用できるようになりました。
- これによりIPアドレスの節約と運用オーバーヘッドの削減が可能になります。
- AWS Resource Access Manager (RAM) でアカウント間共有されたサブネットを使って DataSync エージェントを作成し、転送タスクを実行できます。
- 中央アカウントで管理する共有サブネットと VPC エンドポイント経由でプライベートにデータ転送できます。

---

## まとめ

- AWS DataSync now supports shared VPCs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-datasync-shared-vpcs/)

### 関連情報

- [AWS DataSync now supports shared VPCs](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-datasync-shared-vpcs/)
- [Choosing a service endpoint for your AWS DataSync agent](https://docs.aws.amazon.com/datasync/latest/userguide/choose-service-endpoint.html)
- [AWS DataSync now supports VPC endpoint policies](https://aws.amazon.com/about-aws/whats-new/2025/10/aws-datasync-vpc-endpoint-policies)
- [How Jemena approached data migration using AWS DataSync and shared VPCs](https://aws.amazon.com/blogs/storage/how-jemena-approached-data-migration-using-aws-datasync-and-shared-vpcs)
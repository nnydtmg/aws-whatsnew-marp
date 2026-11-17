---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECR がリージョン・アカウント間でイメージ削除のレプリケーションをサポート

Amazon ECR now replicates image deletions across regions and accounts

**What's New** | 2026-11-16T22:07:00

---

## 概要

- Amazon ECRはイメージの削除とタグの削除をレプリケーション先へ自動的に複製する機能を提供します。
- マルチリージョンおよびマルチアカウント環境のチームは、宛先リポジトリの一貫性を自動的に維持できます。

---

## 前提・背景

### これまでの課題

Amazon Elastic Container Registry (Amazon ECR) が、イメージの削除およびタグの削除をレプリケーション先へ複製する機能をサポートしました。以前はECRレプリケーションはイメージを宛先リージョン・アカウントへ複製するだけで、削除は複製されず各場所で個別に管理する必要がありました。ソースレジストリでイメージやタグを削除すると、ライフサイクルポリシー経由でも、ECRが各宛先に削除を伝播します。複製された削除はEventBridgeイベントを発行し、Cloud

---

### 関連する最近の動向

- **Amazon ECR now replicates image deletions across regions and accounts - AWS**
  [詳細](https://aws.amazon.com/abo...

---

## 変更内容・新機能

Amazon Elastic Container Registry (Amazon ECR) が、イメージの削除およびタグの削除をレプリケーション先へ複製する機能をサポートしました。以前はECRレプリケーションはイメージを宛先リージョン・アカウントへ複製するだけで、削除は複製されず各場所で個別に管理する必要がありました。ソースレジストリでイメージやタグを削除すると、ライフサイクルポリシー経由でも、ECRが各宛先に削除を伝播します。複製された削除はEventBridgeイベントを発行し、CloudTrailに記録されます。マルチリージョンまたはマルチアカウントアーキテクチャを運用するチームは、各宛先でイメージのクリーンアップをスクリプト化したり手動で追跡したりする必要がなくなります。この機能はAmazon ECRが利用できるすべてのAWSリージョンで追加コストなしで利用できます。Amazon ECRコンソールまたはAWS CLIでレプリケーション設定を更新して開始できます。

---

## まとめ

- Amazon ECR now replicates image deletions across regions and accounts について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/replication-deletes-amazon-ecr)

### 関連情報

- [Amazon ECR now replicates image deletions across regions and accounts - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/replication-deletes-amazon-ecr)
- [Cross region replication in Amazon ECR has landed | Containers](https://aws.amazon.com/blogs/containers/cross-region-replication-in-amazon-ecr-has-landed)
- [Amazon ECR Beyond the Basics: Scanning, Lifecycle Policies, and Multi-Region Replication](https://builder.aws.com/content/3H8xCUxPTiasfsnBiRFyjXwVttq/amazon-ecr-beyond-the-basics-scanning-lifecycle-policies-and-multi-region-replication)
- [Amazon ECR now supports 25 replication rules per registry - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecr-increased-replication-rules-limit)
- [Amazon ECR now supports replication backfill for existing container images - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr)
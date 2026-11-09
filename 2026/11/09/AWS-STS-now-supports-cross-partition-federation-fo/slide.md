---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS STSがクロスパーティションフェデレーションに対応

AWS STS now supports cross-partition federation for AWS identities

**What's New** | 2026-11-09T20:03:00

---

## 概要

- AWS STSがクロスパーティションフェデレーションに対応し、長期認証情報なしで異なるパーティション間の一時認証情報取得が可能になりました。
- 本機能はパーティションをまたいで運用する組織のセキュリティ向上に役立ちます。

---

## 前提・背景

### これまでの課題

新機能は、AWS STSがクロスパーティションフェデレーションをサポートし、あるパーティションのIAMアイデンティティで別パーティションのIAMロールの一時認証情報を取得できることでございます。長期認証情報を保存せず、GetWebIdentityTokenおよびAssumeRoleWithWebIdentity APIで短期間トークンを交換できます。本アップデートは、パーティションをまたいでワークロードを運用し、これまで長期認証情報に依存していた組織に適しております。統合的なセキュリティおよびコ

---

### 関連する最近の動向

- **Federating AWS identities across AWS partitions - AWS Identity and Access Management**
  [詳細](https://docs.aws....

---

## 変更内容・新機能

新機能は、AWS STSがクロスパーティションフェデレーションをサポートし、あるパーティションのIAMアイデンティティで別パーティションのIAMロールの一時認証情報を取得できることでございます。長期認証情報を保存せず、GetWebIdentityTokenおよびAssumeRoleWithWebIdentity APIで短期間トークンを交換できます。本アップデートは、パーティションをまたいでワークロードを運用し、これまで長期認証情報に依存していた組織に適しております。統合的なセキュリティおよびコンプライアンス報告や集中運用ツールを必要とするお客様に有益でございます。

---

## 効果・メリット

- AWS STSがクロスパーティションフェデレーションに対応し、長期認証情報なしで異なるパーティション間の一時認証情報取得が可能になりました。
- 本機能はパーティションをまたいで運用する組織のセキュリティ向上に役立ちます。

---

## まとめ

- AWS STS now supports cross-partition federation for AWS identities について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)

### 関連情報

- [Federating AWS identities across AWS partitions - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_outbound_cross_partition.html)
- [Getting started with outbound identity federation - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_outbound_getting_started.html)
- [AWS IAM identity federation to external services is now available in AWS European Sovereign Cloud Region - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-european-sovereign-cloud)
- [Transfer data across AWS partitions with IAM Roles Anywhere | AWS Security Blog](https://aws.amazon.com/blogs/security/transfer-data-across-aws-partitions-with-iam-roles-anywhere)
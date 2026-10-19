---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Identity Centerのアイデンティティストアで楽観的ロックが利用可能に

AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store

**What's New** | 2026-10-19T08:00:00

---

## 概要

- IAM Identity Centerはアイデンティティストアのユーザーとグループに楽観的ロックを導入し、同時変更による上書きを防止します。
- この機能は複数の管理者や自動化ワークフローに有益です。

---

## 前提・背景

### これまでの課題

IAM Identity Centerのアイデンティティストアにおいて、ユーザーとグループに対する楽観的ロックがサポートされるようになりました。更新および削除リクエストは、ユーザーまたはグループが最後に読み取られてから変更されていない場合にのみ成功します。各ユーザーとグループにはRevision値が存在し、属性の変更時に更新されます。この更新は、複数の管理者や自動化されたワークフローが同じユーザーやグループをほぼ同時に変更する場合に適しています。RevisionはSCIMプロビジョニング、Act

---

### 関連する最近の動向

- **AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store - AWS**
  [詳...

---

## 変更内容・新機能

IAM Identity Centerのアイデンティティストアにおいて、ユーザーとグループに対する楽観的ロックがサポートされるようになりました。更新および削除リクエストは、ユーザーまたはグループが最後に読み取られてから変更されていない場合にのみ成功します。各ユーザーとグループにはRevision値が存在し、属性の変更時に更新されます。この更新は、複数の管理者や自動化されたワークフローが同じユーザーやグループをほぼ同時に変更する場合に適しています。RevisionはSCIMプロビジョニング、Active Directory同期、IAM Identity Centerコンソール経由の変更でも更新されます。Create、Describe、Update、List操作は現在のRevisionを返し、後続のUpdateUser、UpdateGroup、DeleteUser、DeleteGroupリクエストに渡すことができます。指定したRevisionが現在の値と一致しない場合はConflictExceptionが返され、再読み取りして最新値でリトライできます。Revisionの指定はオプションで、

---

## まとめ

- AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-store-optimistic-locking/)

### 関連情報

- [AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-store-optimistic-locking/)
- [AWS IAM Identity Center now supports network access controls for Identity Store - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls)
- [AWS IAM Identity Center Setup: 12 Steps [2026]](https://tech-insider.org/how-to-set-up-aws-iam-identity-center-2026)
- [AWS Identity and Access Management In 2026: Deep Dive](https://www.idmworks.com/insight/aws-identity-and-access-management)
- [AWS IAM Security Best Practices in 2026: A Complete Guide](https://dev.to/karaniph/aws-iam-security-best-practices-in-2026-a-complete-guide-o14)
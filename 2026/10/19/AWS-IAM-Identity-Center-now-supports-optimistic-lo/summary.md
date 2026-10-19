# IAM Identity Centerのアイデンティティストアで楽観的ロックが利用可能に

AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store

**カテゴリ:** What's New
**公開日:** 2026-10-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-store-optimistic-locking/)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center now supports optimistic locking for users and groups in its identity store」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

IAM Identity Centerはアイデンティティストアのユーザーとグループに楽観的ロックを導入し、同時変更による上書きを防止します。この機能は複数の管理者や自動化ワークフローに有益です。

## このアップデートで何が変わったか

IAM Identity Centerのアイデンティティストアにおいて、ユーザーとグループに対する楽観的ロックがサポートされるようになりました。更新および削除リクエストは、ユーザーまたはグループが最後に読み取られてから変更されていない場合にのみ成功します。各ユーザーとグループにはRevision値が存在し、属性の変更時に更新されます。この更新は、複数の管理者や自動化されたワークフローが同じユーザーやグループをほぼ同時に変更する場合に適しています。RevisionはSCIMプロビジョニング、Active Directory同期、IAM Identity Centerコンソール経由の変更でも更新されます。Create、Describe、Update、List操作は現在のRevisionを返し、後続のUpdateUser、UpdateGroup、DeleteUser、DeleteGroupリクエストに渡すことができます。指定したRevisionが現在の値と一致しない場合はConflictExceptionが返され、再読み取りして最新値でリトライできます。Revisionの指定はオプションで、

## 対象ユーザー

IAM Identity Centerのアイデンティティストアにおいて、ユーザーとグループに対する楽観的ロックがサポートされるようになりました。更新および削除リクエストは、ユーザーまたはグループが最後に読み取られてから変更されていない場合にのみ成功します。各ユーザーとグループにはRevision値が存在し、属性の変更時に更新されます。この更新は、複数の管理者や自動化されたワークフローが同じユーザーやグループをほぼ同時に変更する場合に適しています。RevisionはSCIMプロビジョニング、Active Directory同期、IAM Identity Centerコンソール経由の変更でも更新さ

## 詳細

IAM Identity Centerのアイデンティティストアにおいて、ユーザーとグループに対する楽観的ロックがサポートされるようになりました。更新および削除リクエストは、ユーザーまたはグループが最後に読み取られてから変更されていない場合にのみ成功します。各ユーザーとグループにはRevision値が存在し、属性の変更時に更新されます。この更新は、複数の管理者や自動化されたワークフローが同じユーザーやグループをほぼ同時に変更する場合に適しています。RevisionはSCIMプロビジョニング、Active Directory同期、IAM Identity Centerコンソール経由の変更でも更新されます。Create、Describe、Update、List操作は現在のRevisionを返し、後続のUpdateUser、UpdateGroup、DeleteUser、DeleteGroupリクエストに渡すことができます。指定したRevisionが現在の値と一致しない場合はConflictExceptionが返され、再読み取りして最新値でリトライできます。Revisionの指定はオプションで、省略した場合は従来どおり動作するため既存の統合はそのまま利用できます。条件付きリクエストはIdentity Store APIでのみサポートされ、SCIMエンドポイントでは利用できません。グループメンバーシップ操作はRevisionを受け付けず、メンバーの追加・削除はユーザーやグループのRevisionを変更しません。この機能はIAM Identity Centerが利用可能なすべてのAWSリージョンで提供され、追加料金はかかりません。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-store-optimistic-locking/)
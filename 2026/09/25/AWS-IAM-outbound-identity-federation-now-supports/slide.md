---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAMアウトバウンドフェデレーションがOIDCディスカバリー向けVPCエンドポイントをサポート

AWS IAM outbound identity federation now supports interface VPC endpoints for OIDC discovery

**What's New** | 2026-09-25T17:54:00

---

## 概要

- IAMアウトバウンドアイデンティティフェデレーションがOIDCディスカバリー向けVPCエンドポイントに対応し、インターネット制限のあるVPC内ワークロードでも検証キーをプライベートに取得できるようになりました。

---

## 前提・背景

### これまでの課題

これまでOIDCディスカバリーエンドポイントはパブリックインターネット経由でのみアクセス可能だったため、インターネットアクセスのないVPC内の検証ワークロードはキーを取得できませんでした。本機能によりインターフェースVPCエンドポイントを作成し、検証キー取得トラフィックをAWSネットワーク内に止めることができます。

---

### 関連する最近の動向

- **Getting started with outbound identity federation**
  [詳細](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_outbound_getting_started.html)

- **Identity federation to services outside ...

---

## 変更内容・新機能

本機能はすべての商用AWSリージョン、AWS GovCloud (US) リージョン、および中国リージョンで利用可能です。標準のAWS PrivateLink料金以外の追加料金はありません。

---

## まとめ

- AWS IAM outbound identity federation now supports interface VPC endpoints for OIDC discovery について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts-vpc-oidc/)

### 関連情報

- [Getting started with outbound identity federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_outbound_getting_started.html)
- [Identity federation to services outside AWS](https://aws.amazon.com/identity/federation/outbound-federation)
- [Simplify access to external services using AWS IAM outbound identity federation](https://aws.amazon.com/blogs/aws/simplify-access-to-external-services-using-aws-iam-outbound-identity-federation)
- [IAM User Guide - Create VPC endpoint for OIDC discovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sts_oidc_vpc_endpoint_create.html)
- [AWS IAM Outbound Identity Federation](https://hidekazu-konishi.com/entry/aws_iam_outbound_identity_federation.html)
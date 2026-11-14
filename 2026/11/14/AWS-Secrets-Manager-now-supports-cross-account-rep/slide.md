---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets Managerがクロスアカウントレプリケーションをサポート

AWS Secrets Manager now supports cross-account replication

**What's New** | 2026-11-13T08:00:00

---

## 概要

- AWS Secrets Managerがクロスアカウントレプリケーションをサポートし、別アカウントに同期コピーを維持できるようになりました。
- 本機能は中央管理を行うセキュリティチームや災害復旧を必要とする組織に適しています。

---

## 前提・背景

### 関連する最近の動向

- **How to replicate secrets in AWS Secrets Manager to multiple Regions**
  [詳細](https://aws.amazon.com/blogs/security/how-to-replicate-secrets-aws-secrets-manager-multiple-regions)

- **Access AWS Secrets Manager secrets from a different account**
  [詳細](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples_cross.html)

- **Design patterns to access c...

---

## 変更内容・新機能

AWS Secrets Managerはクロスアカウントレプリケーションを新たにサポートしました。プライマリシークレットの同期コピーをセカンダリAWSアカウントに維持できるようになりました。本機能はクロスアカウントアクセス、バックアップ、災害復旧に利用できます。プラットフォームチームやセキュリティチームはシークレットを中央で所有しローテーションできます。各利用アカウントは共有KMSキーなしで常に最新のローカルコピーを取得できます。レプリカは独立したリソースであり、自動更新され必要時に昇格できます。クロスアカウントレプリケーションは既存のマルチリージョンレプリケーション機能をアカウント境界を越えて拡張したものです。レプリカシークレットはレプリカアカウントが所有するカスタマー管理KMSキーで暗号化されます。プライマリシークレットの値が変更されるたびに（ローテーションを含む）、Secrets Managerが自動的に更新します。ランサムウェアやプライマリアカウントの侵害から隔離された専用のリカバリ/フェイルオーバーアカウントにクリティカルシークレットのライブコピーを保持できます。必要に応じて

---

## まとめ

- AWS Secrets Manager now supports cross-account replication について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/secrets-manager-cross-account/)

### 関連情報

- [How to replicate secrets in AWS Secrets Manager to multiple Regions](https://aws.amazon.com/blogs/security/how-to-replicate-secrets-aws-secrets-manager-multiple-regions)
- [Access AWS Secrets Manager secrets from a different account](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples_cross.html)
- [Design patterns to access cross-account secrets stored in AWS Secrets Manager](https://aws.amazon.com/blogs/database/design-patterns-to-access-cross-account-secrets-stored-in-aws-secrets-manager)
- [Replicate secrets across AWS accounts](https://docs.aws.amazon.com/secretsmanager/latest/userguide/cross-account-replicate-secrets.html)
- [AssociateCrossAccountReplica API](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_AssociateCrossAccountReplica.html)
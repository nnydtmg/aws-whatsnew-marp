---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Identity Centerがクロスリージョンの信頼されたアイデンティティ伝播をサポート

AWS IAM Identity Center now supports cross-Region trusted identity propagation

**What's New** | 2026-10-26T08:00:00

---

## 概要

- AWS IAM Identity Centerはクロスリージョンの信頼されたアイデンティティ伝播をサポートするようになりました。
- この機能は複数のリージョンにワークロードを展開するお客様に細粒度のアクセス制御を提供します。
- ユーザーのアイデンティティがリクエストとともに異なるリージョンのAWSサービスへ自動的に伝播されます。

---

## 前提・背景

### これまでの課題

お客様は、コンピュートとクエリ対象データの分離、利用可能なキャパシティのある場所でのワークロード実行、災害対策やグローバルスケールなど、さまざまな理由で複数のAWSリージョンにワークロードを分散しています。これまでは、trusted identity propagationを利用するには、ユーザーのアイデンティティにアクセスするすべてのAWSサービスが同一リージョンにある必要がありました。別リージョンのサービスに到達するには、個人ユーザーを区別できない広範なIAMロールでアクセスを許可するか、す

---

### 関連する最近の動向

- **AWS IAM Identity Center now supports cross-Region trusted identity propagation - AWS**
  [詳細](https://aws.amazo...

---

## 変更内容・新機能

お客様は、コンピュートとクエリ対象データの分離、利用可能なキャパシティのある場所でのワークロード実行、災害対策やグローバルスケールなど、さまざまな理由で複数のAWSリージョンにワークロードを分散しています。これまでは、trusted identity propagationを利用するには、ユーザーのアイデンティティにアクセスするすべてのAWSサービスが同一リージョンにある必要がありました。別リージョンのサービスに到達するには、個人ユーザーを区別できない広範なIAMロールでアクセスを許可するか、すべてのサービスを単一リージョンに集約する必要がありました。クロスリージョン trusted identity propagationでは、ユーザーのアイデンティティがリクエストとともにリージョンをまたいで自動的に伝播されるため、ユーザー本人とそのグループ所属に基づいてアクセスを許可し、誰がどのリソースにアクセスしたかを監査しながら、すべての個人ユーザーに対する細粒度のアクセス制御を維持できます。

クロスリージョン trusted identity propagationは、IAM Identi

---

## 効果・メリット

- Trusted identity propagationは、ユーザーのアイデンティティをリクエストとともに運び、AWSサービスがユーザー本人とそのグループ所属に基づいて権限を付与し、そのユーザーのアクセスを監査ログに記録できるようにする機能です。
- クロスリージョン対応により、このアイデンティティコンテキストを異なるAWSリージョンで稼働するAWSサービスへ伝播できるようになり、リージョンをまたいだアーキテクチャとデプロイの柔軟性が向上します。

---

## まとめ

- AWS IAM Identity Center now supports cross-Region trusted identity propagation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-iam-identity-center-cross-region-tip/)

### 関連情報

- [AWS IAM Identity Center now supports cross-Region trusted identity propagation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-iam-identity-center-cross-region-tip)
- [Enable cross-Region fine-grained data access with AWS Lake Formation and Trusted Identity Propagation | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/enable-cross-region-fine-grained-data-access-with-aws-lake-formation-and-trusted-identity-propagation)
- [AWS IAM Identity Center extends multi-Region support to more AWS Regions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-iam-identity-center-extends-multi-region-support-to-more-aws-regions)
- [Trusted identity propagation overview - AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html)
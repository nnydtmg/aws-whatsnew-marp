---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Systems Manager が AWS RAM 経由の SSM ドキュメント共有をサポート

AWS Systems Manager now supports sharing documents through AWS Resource Access Manager

**What's New** | 2026-09-29T08:00:00

---

## 概要

- AWS Systems ManagerはAWS RAMを通じたSSMドキュメントの組織共有をサポートするようになりました。
- この機能は複数アカウント環境を管理するお客様に有益です。

---

## 前提・背景

### これまでの課題

- AWS Systems Managerは、AWS Resource Access Managerを使用してSSMドキュメントをAWS組織全体または特定のOUと共有できるようになりました。
- 以前は公開または個別のアカウントIDとのみ共有できましたが、組織やOUの変更に応じて自動的に共有が最新に保たれます。
- この更新は、AWS Organizationsを活用する組織や、SSMドキュメントの共有を簡素化したい管理者に適しています。
- AWS RAMのリソース共有を作成し、SSM Doc

---

### 関連する最近の動向

- **AWS Systems Manager Adds Cross-Account Document Sharing Through RAM -- AWSInsider**
  [詳細](https://awsinsider.n...

---

## 変更内容・新機能

- AWS Systems Managerは、AWS Resource Access Managerを使用してSSMドキュメントをAWS組織全体または特定のOUと共有できるようになりました。
- 以前は公開または個別のアカウントIDとのみ共有できましたが、組織やOUの変更に応じて自動的に共有が最新に保たれます。
- この更新は、AWS Organizationsを活用する組織や、SSMドキュメントの共有を簡素化したい管理者に適しています。
- AWS RAMのリソース共有を作成し、SSM Documentsを追加し、組織またはOUを選択するだけで共有できる。
- 組織外のアカウントと共有する場合、相手はリソース共有の招待を受け取り、承諾後にアクセスが付与される。
- Systems Managerコンソール、AWS CLI、AWS SDKで利用可能。追加料金なし。

---

## ユースケース

- AWS Systems Managerは、AWS Resource Access Managerを使用してSSMドキュメントをAWS組織全体または特定のOUと共有できるようになりました。
- 以前は公開または個別のアカウントIDとのみ共有できましたが、組織やOUの変更に応じて自動的に共有が最新に保たれます。
- この更新は、AWS Organizationsを活用する組織や、SSMドキュメントの共有を簡素化したい管理者に適しています。
- AWS RAMのリソース共有を作成し、SSM Documentsを追加し、組織またはOUを選択するだけで共有できる。
- 組織外のアカウントと共有する場

---

## まとめ

- AWS Systems Manager now supports sharing documents through AWS Resource Access Manager について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/systems-manager-sharing-documents-ram/)

### 関連情報

- [AWS Systems Manager Adds Cross-Account Document Sharing Through RAM -- AWSInsider](https://awsinsider.net/blogs/awsinsider-release-radar/2026/09/aws-systems-manager-adds-cross-account.aspx)
- [Sharing SSM documents - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-ssm-sharing.html)
- [Resource Sharing – AWS Resource Access Manager – Amazon Web Services](https://aws.amazon.com/ram)
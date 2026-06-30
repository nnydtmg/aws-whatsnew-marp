# AWS IAM Identity Center、カスタマー管理アプリケーション向けプログラマティックアクセスに対応

IAM Identity Center now enables programmatic AWS account access for customer managed applications

**カテゴリ:** What's New
**公開日:** 2026-06-30T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-iam-identity-center-account-access-customer-managed-apps/)

このページでは、AWS What's Newで発表された「IAM Identity Center now enables programmatic AWS account access for customer managed applications」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

IAM Identity Centerは、顧客管理アプリケーションがプログラムによってAWSアカウントにアクセスし、ユーザーが外部IDプロバイダー経由で既に認証済みの場合に冗長なサインインを排除できるようになりました。この機能は、外部IDプロバイダーを統合し、中央集約的なアクセス管理を必要とする企業向けに設計されています。

## このアップデートで何が変わったか

- ユーザーが外部IDプロバイダー経由で認証済みの場合、追加の認証フローなしにAWSアカウントにアクセスし、一時的なセキュリティ認証情報を取得できるようになりました。

- この機能はIAM Identity Centerの組織インスタンスで利用可能です。

## 対象ユーザー

- ユーザーが外部IDプロバイダー経由で認証済みの場合、追加の認証フローなしにAWSアカウントにアクセスし、一時的なセキュリティ認証情報を取得できるようになりました。

## 詳細

- IAM Identity Centerが顧客管理アプリケーションに対して、プログラムによるAWSアカウントアクセス機能を提供するようになりました。

- ユーザーが外部IDプロバイダー経由で認証済みの場合、追加の認証フローなしにAWSアカウントにアクセスし、一時的なセキュリティ認証情報を取得できるようになりました。

- 外部IDプロバイダーを信頼できるトークン発行者としてIAM Identity Centerに設定することで、この機能を利用できます。

- ユーザーに割り当てられたアカウントとロールの検出、および一時認証情報の取得が可能です。

- この機能はIAM Identity Centerの組織インスタンスで利用可能です。

- 管理アカウント管理者または委任管理者のみが、顧客管理アプリケーションごとにAWSアカウントアクセスを有効化できます。

- すべての商用AWSリージョン、AWSガバメントクラウド（US）リージョン、および中国リージョンで利用可能です。

- この機能は、外部IDプロバイダーで認証するカスタマー管理アプリケーションを運用する組織に適しています。

- IAM Identity Center管理者が中央集約的にアプリケーションのアクセス権限を管理する必要がある企業に適しています。

- ユーザーの冗長なサインインプロンプトを排除したい組織に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-iam-identity-center-account-access-customer-managed-apps/)
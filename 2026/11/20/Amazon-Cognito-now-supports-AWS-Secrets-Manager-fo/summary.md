# Amazon CognitoがAWS Secrets Managerでアプリクライアントシークレット管理に対応

Amazon Cognito now supports AWS Secrets Manager for app client secrets

**カテゴリ:** What's New
**公開日:** 2026-11-19T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-secrets-manager-integration/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports AWS Secrets Manager for app client secrets」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CognitoがAWS Secrets Managerと連携し、アプリクライアントシークレットを安全に管理およびローテーションできるようになりました。本機能は、コンプライアンス要件への対応やシークレットの適切な管理をお求めのお客様に適しています。

## このアップデートで何が変わったか

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、およびコンソールからシークレットを隔離したいお客様に適しています。Amazon CognitoとAWS Secrets Managerが利用可能なすべてのAWSリージョンで利用可能です（AWS European Sovereign Cloud (Germany)を除く）。標準のAWS Secrets Manager料金が適用されます。

## 対象ユーザー

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、お

## 活用シーン

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、お

## 詳細

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、およびコンソールからシークレットを隔離したいお客様に適しています。Amazon CognitoとAWS Secrets Managerが利用可能なすべてのAWSリージョンで利用可能です（AWS European Sovereign Cloud (Germany)を除く）。標準のAWS Secrets Manager料金が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-secrets-manager-integration/)
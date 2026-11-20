---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがAWS Secrets Managerでアプリクライアントシークレット管理に対応

Amazon Cognito now supports AWS Secrets Manager for app client secrets

**What's New** | 2026-11-19T18:00:00

---

## 概要

- Amazon CognitoがAWS Secrets Managerと連携し、アプリクライアントシークレットを安全に管理およびローテーションできるようになりました。
- 本機能は、コンプライアンス要件への対応やシークレットの適切な管理をお求めのお客様に適しています。

---

## 前提・背景

### これまでの課題

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき

---

### 関連する最近の動向

- **Application-specific settings with app clients - Amazon Cognito**
  [詳細](https://docs.aws.amazon.com/cognito/la...

---

## 変更内容・新機能

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、およびコンソールからシークレットを隔離したいお客様に適しています。Amazon CognitoとAWS Secrets Managerが利用可能なすべてのAWSリージョンで利用可能です（AWS European Sovereign Cloud (Germany)を除く）。標準のAWS Secrets Manager料金が適用されます。2026年2月にはクライアントシークレットのローテーションとカスタ

---

## ユースケース

Amazon CognitoがAWS Secrets Managerと連携し、ユーザープールのアプリクライアントシークレットをSecrets Managerで保存および管理できるようになりました。これまではCognito上で直接シークレットを管理・ローテートする必要がありましたが、本統合によりSecrets Managerのローテーション、IAMポリシーによるアクセス制御、AWS管理キーまたはお客様管理のKMSキーによる暗号化を活用できます。新規または既存のアプリクライアントで本統合を有効化でき、いつでも無効化できます。定期的な認証情報のローテーションやコンプライアンス要件をお持ちのお客様、お

---

## まとめ

- Amazon Cognito now supports AWS Secrets Manager for app client secrets について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-secrets-manager-integration/)

### 関連情報

- [Application-specific settings with app clients - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html)
- [Amazon Cognito enhances client secret management with secret rotation and custom secrets - AWS](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-cognito-client-secret-lifecycle)
- [Amazon Cognito now supports AWS Secrets Manager for app client secrets - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-secrets-manager-integration/)
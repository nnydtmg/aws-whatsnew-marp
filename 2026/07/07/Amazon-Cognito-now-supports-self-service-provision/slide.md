---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがセルフサービスのAPIレート制限設定をサポート

Amazon Cognito now supports self-service provisioned API rate limits

**What's New** | 2026-07-06T21:00:00

---

## 概要

- Amazon Cognitoは、セルフサービスによるプロビジョニングAPIレート制限の調整機能を新たに提供開始いたしました。
- これにより、ユーザーはコンソールまたはAPI操作を通じてレート制限を即座に変更でき、アプリケーションのトラフィック変動に柔軟に対応することが可能になります。

---

## 前提・背景

### これまでの課題

- 従来は、Service Quotasを通じてレート制限の増加をリクエストする必要があり、手動レビューされていました。

---

### 関連する最近の動向

- **Provisioned capacity for API limits now available in Amazon Cognito**
  [詳細](https://aws-news.com/article/2024-01-25-provisioned-capacity-for-api-limits-now-available-in-amazon-cognito)

- **update_provisioned_limit - Boto3 1.43.40 documentation**
  [詳細](https://docs.aws.amazon.com/boto3/latest/reference/services/cognito-idp/client/update_provisioned_limit.html)

---

## 変更内容・新機能

- セルフサービスプロビジョニング制限は、Amazon Cognitoが利用可能なすべてのAWSリージョンで調整可能なAPIカテゴリに対して利用可能です。

- この機能は追加機能として有料で提供されており、詳細な価格情報はAmazon Cognitoの価格ページで確認できます。

---

## まとめ

- Amazon Cognito now supports self-service provisioned API rate limits について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/cognito-provisioned-limits)

### 関連情報

- [Provisioned capacity for API limits now available in Amazon Cognito](https://aws-news.com/article/2024-01-25-provisioned-capacity-for-api-limits-now-available-in-amazon-cognito)
- [update_provisioned_limit - Boto3 1.43.40 documentation](https://docs.aws.amazon.com/boto3/latest/reference/services/cognito-idp/client/update_provisioned_limit.html)
- [Quotas in Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/quotas.html)
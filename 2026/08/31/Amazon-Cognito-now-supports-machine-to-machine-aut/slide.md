---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Cognito がユーザープールドメインなしでマシン間認可に対応

Amazon Cognito now supports machine-to-machine authorization without a user pool domain

**What's New** | 2026-08-31

---

## 概要

- Amazon Cognitoはユーザープールドメインなしでマシン間認可を実現するGetClientToken APIを新たに提供いたします。
- これによりサービス間通信の認可がより柔軟になります。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Cognito now supports machine-to-machine authorization without a user pool domain - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token)

- **Amazon Cognito adds enhanced context support for machine-to-machine (M2M) authorization flows - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/04/amazon-cognito-context-machine-to-machine-flows)

---

## 変更内容・新機能

新機能といたしましては、Amazon CognitoがGetClientToken APIオペレーションをサポートし、ユーザープールドメインを設定せずにAWS SDK、CLI、またはAPIを通じてマシン間認可用のアクセストークンを取得できるようになったことです。この更新は、アプリケーション、マイクロサービス、および自動化されたワークロードにおけるサービス間通信の認可を必要とするお客様に適しております。

---

## まとめ

- Amazon Cognito now supports machine-to-machine authorization without a user pool domain について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token/)

### 関連情報

- [Amazon Cognito now supports machine-to-machine authorization without a user pool domain - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token)
- [Amazon Cognito adds enhanced context support for machine-to-machine (M2M) authorization flows - AWS](https://aws.amazon.com/about-aws/whats-new/2025/04/amazon-cognito-context-machine-to-machine-flows)
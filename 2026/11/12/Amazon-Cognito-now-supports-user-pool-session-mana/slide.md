---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Cognitoがユーザープールのセッション管理をサポート

Amazon Cognito now supports user pool session management

**What's New** | 2026-11-11T19:00:00

---

## 概要

- Amazon Cognitoはユーザープールのセッション管理を新たにサポートし、セッションの可視化と制御が可能になりました。
- SSOセッションとトークンセッションを一覧表示しオンデマンドで取り消すことができます。
- 本機能はEssentialsまたはPlusプランのユーザープールで利用できます。

---

## 前提・背景

### これまでの課題

Amazon Cognitoがユーザープールのセッション管理をサポートしました。ユーザーがアプリケーションにサインインした際に確立するセッションの可視化と制御が可能になります。SSOセッションはmanaged login経由でサインインした際に作成され、再認証なしで他のアプリクライアントにアクセスできます。トークンセッションはアプリクライアントにサインインしトークンを受け取った際に作成されます。全デバイス・全アプリクライアントのアクティブなSSO/トークンセッションを一覧表示し、オンデマンドで取

---

### 関連する最近の動向

- **Amazon Cognito now supports user pool session management - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-...

---

## 変更内容・新機能

Amazon Cognitoがユーザープールのセッション管理をサポートしました。ユーザーがアプリケーションにサインインした際に確立するセッションの可視化と制御が可能になります。SSOセッションはmanaged login経由でサインインした際に作成され、再認証なしで他のアプリクライアントにアクセスできます。トークンセッションはアプリクライアントにサインインしトークンを受け取った際に作成されます。全デバイス・全アプリクライアントのアクティブなSSO/トークンセッションを一覧表示し、オンデマンドで取り消せます。アプリクライアントごとにSSOセッション再利用時間を設定できるようになり、以前の固定1時間という制約が解除されました。各セッションにはセッション種別、アプリクライアントID、デバイス種別、最終活動時刻と場所、初回サインイン時刻の詳細が含まれます。個別取り消し（関連セッションを含むオプションあり）、グローバルサインアウト、ユーザーあたりの最大トークンセッション数の設定が可能です。AWS Management Console、API、AWS CLI、AWS SDKで管理でき、AWS Cl

---

## まとめ

- Amazon Cognito now supports user pool session management について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-session-management/)

### 関連情報

- [Amazon Cognito now supports user pool session management - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-session-management/)
- [Ending user sessions with token revocation - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/token-revocation.html)
- [Refresh tokens - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html)
- [AWS Rolls Out Updates to Amazon Cognito](https://www.darkreading.com/identity-access-management-security/aws-rolls-out-updates-to-amazon-cognito)
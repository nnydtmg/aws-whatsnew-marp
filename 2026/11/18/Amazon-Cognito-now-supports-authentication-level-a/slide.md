---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがACR/AMRトークンクレームのサポートを開始

Amazon Cognito now supports authentication level and method token claims

**What's New** | 2026-11-17T19:00:00

---

## 概要

- Amazon CognitoはACRおよびAMRトークンクレームのサポートを開始しました。
- アプリケーションは認証レベルに基づく認可判断と監査対応を行うことができます。

---

## 前提・背景

### 関連する最近の動向

- **Authentication levels with ACR and AMR claims - Amazon Cognito**
  [詳細](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-step-up-authentication.html)

- **Amazon Cognito now supports authentication level and method token claims - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-acr-amr-token/)

- **AWS Cognito vs Auth0 (2...

---

## 変更内容・新機能

Amazon Cognitoは、認証コンテキストクラス参照（ACR）および認証メソッド参照（AMR）を新たにサポートし、アクセス、ID、リフレッシュトークンにACRおよびAMRクレームを追加します。アプリケーションは認証レベル（ACR）を使用して認可判断を行うことができ、完了したメソッド（AMR）を監査およびコンプライアンスに使用できます。Amazon Cognitoはパスワードのみ（レベル1）からパスワード+TOTP（レベル4）までの4つの認証レベルを定義します。各トークンはサインイン時に達成したレベルを反映するため、アプリケーションはユーザーの認証方法に基づいて認可判断を行えます。より強いレベルが必要な場合、サインインフローまたはマネージドログインでターゲットレベルをリクエストでき、ユーザーが必要な要素を完了すると新しいトークンが発行されます。ユーザープールのACRレベルURIをカスタマイズすることもできます。OIDCプロバイダーからのフェデレーテッドユーザーの場合、プロバイダーのACRおよびAMR値がマッピングされます。ACRおよびAMRトークンクレームはAmazon Cogni

---

## まとめ

- Amazon Cognito now supports authentication level and method token claims について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-acr-amr-token/)

### 関連情報

- [Authentication levels with ACR and AMR claims - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-step-up-authentication.html)
- [Amazon Cognito now supports authentication level and method token claims - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-acr-amr-token/)
- [AWS Cognito vs Auth0 (2026): Step-Up, B2B SSO, Pricing](https://skycloak.io/blog/auth0-vs-cognito)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Sign-InがOAuth 2.0 Token Exchangeをサポート

AWS Sign-In now supports OAuth 2.0 Token Exchange

**What's New** | 2026-11-04T19:00:00

---

## 概要

- AWS Sign-InがOAuth 2.0トークン交換に対応し、サードパーティのOIDCトークンを短期間のAWSスコープ付きアクセストークンへ交換できるようになりました。
- 既存のIDプロバイダーを活用し、認証情報を共有せずにAWSサービスへ安全にアクセスしたいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Sign-In now supports OAuth 2.0 Token Exchange | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-11-09-aws-sign-in-now-supports-oauth-20-token-exchange)

- **Sign-In with OAuth 2.0 - AWS Sign-In**
  [詳細](https://docs.aws.amazon.com/signin/latest/userguide/oauth-sign-in-overview.html)

- **RFC 8693 - OAuth 2.0 Token Exchange**
  [詳細](https://datatracker.ietf.org/d...

---

## 変更内容・新機能

新機能は、AWS Sign-InによるOAuth 2.0トークン交換（RFC 8693）のサポートでございます。アプリケーションは、サードパーティのOIDCトークンを、有効期間の短いAWSサービススコープのOAuthアクセストークンに交換できます。お客様は、AWS認証情報を共有せずに、サードパーティアプリケーションをサポート対象のAWSサービスと安全に統合できます。アクセス制御は、AWS IAMを通じて維持されます。本機能は、AWS Sign-In OAuthを利用するサポート対象サービスでご利用いただけます。本アップデートは、既存のIDプロバイダーでAWSサービスへアクセスしたいお客様に適しております。追加の認証情報を管理せずに連携したいお客様にとって有益でございます。

---

## まとめ

- AWS Sign-In now supports OAuth 2.0 Token Exchange について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-signin-token-exchange/)

### 関連情報

- [AWS Sign-In now supports OAuth 2.0 Token Exchange | The AWS News Feed](https://aws-news.com/article/2026-11-09-aws-sign-in-now-supports-oauth-20-token-exchange)
- [Sign-In with OAuth 2.0 - AWS Sign-In](https://docs.aws.amazon.com/signin/latest/userguide/oauth-sign-in-overview.html)
- [RFC 8693 - OAuth 2.0 Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693)
- [GitHub - aws-samples/sample-cognito-oauth2-token-exchange](https://github.com/aws-samples/sample-cognito-oauth2-token-exchange)
- [OAuth 2.0 Token Exchange: When One Token Isn't the Token You Need](https://medium.com/@robert.broeckelmann/oauth-2-0-token-exchange-when-one-token-isnt-the-token-you-need-84c159410c2f)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがOAuth 2.0トークン交換をサポート

Amazon Cognito now supports OAuth 2.0 token exchange

**What's New** | 2026-11-12T22:00:00

---

## 概要

- Amazon CognitoがOAuth 2.0トークン交換（RFC 8693）を新たにサポートし、サービスやAIエージェントがユーザーのトークンを狭くスコープされた新しいトークンに交換できるようになりました。
- ユーザーの代わりにダウンストリームサービスを呼び出すアプリケーションやMCPサーバーの開発者に適しています。

---

## 前提・背景

### これまでの課題

以前は、ユーザーの代わりに他のサービスを呼び出す場合、元のトークンをそのまま転送するか、自前でトークン発行ロジックを構築・運用する必要がありました。

---

### 関連する最近の動向

- **Amazon Cognito now supports OAuth 2.0 token exchange - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)

- **Exchanging tokens for downstream services - Amazon Cognito**
  [詳細](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user...

---

## 変更内容・新機能

Lambdaトリガー:
- Pre token generation LambdaトリガーがTokenGeneration_TokenExchangeで起動
- クレームの追加・抑制・上書き、スコープの抑制、交換の拒否が可能
- スコープの追加は不可

利用可能な計画:
- EssentialsおよびPlusフィーチャープラン
- Amazon Cognitoが利用可能なすべてのAWSリージョン

---

## ユースケース

ユースケース:
- Web/モバイルアプリケーションへの認証追加
- AIエージェントの認証
- MCPサーバーなどの仲介サービスがユーザーの代わりにバックエンドAPIを呼び出す場面
- サービス間委任（Service-to-service delegation）
- オーディエンスバインディング（特定リソースサーバー向けトークン発行）

---

## まとめ

- Amazon Cognito now supports OAuth 2.0 token exchange について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)

### 関連情報

- [Amazon Cognito now supports OAuth 2.0 token exchange - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)
- [Exchanging tokens for downstream services - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-token-exchange.html)
- [GetDerivedToken - Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDerivedToken.html)
- [OAuth 2.0 Token Exchange with Amazon Cognito sample](https://github.com/aws-samples/sample-cognito-oauth2-token-exchange)
- [What Is OAuth Token Exchange?](https://www.descope.com/learn/post/oauth-token-exchange)
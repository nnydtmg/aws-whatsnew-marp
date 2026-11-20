---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがOAuth動的クライアント登録（DCR）をサポート

Amazon Cognito now supports dynamic client registration

**What's New** | 2026-11-19T08:00:00

---

## 概要

- Amazon CognitoはOAuth動的クライアント登録（DCR、RFC 7591）を新たにサポートし、MCPクライアントやAIエージェントが実行時に自ら登録できるようになりました。
- 以前は、Cognitoを認可に使うMCPサーバーに接続するそれぞれのAIクライアントごとに、事前にアプリケーションクライアントを作成する必要がありました。

---

## 前提・背景

### 関連する最近の動向

- **Dynamic client registration - Amazon Cognito**
  [詳細](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-dynamic-client-registration.html)

- **Amazon Cognito now supports dynamic client registration**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)

- **Dynamic Client Registration (DCR) in MCP**
  [詳細](ht...

---

## 変更内容・新機能

Amazon CognitoがOAuth 2.0 Dynamic Client Registration Protocol（DCR、RFC 7591）をサポート。Cognitoは認可サーバーメタデータで登録エンドポイント（https://<user-pool-domain>/oauth2/register）を公開し、MCPクライアントが発見してクライアントIDを取得できる。登録モードは2種類：オープン登録（トークン不要）と認証済み登録（aws.cognito/dcr/register スコープ付きアクセストークンが必要）。動的に登録されたクライアントは他のアプリクライアントと同じコンソール・APIで管理でき、クライアントIDに接頭辞が付きClientType=DCRでフィルター可能。EssentialsおよびPlusプランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用可能。ユーザープールの全ドメインでManaged Loginが必須。グラントタイプはauthorization_codeまたはclient_credentials（両方は不可）。公開クライアント

---

## まとめ

- Amazon Cognito now supports dynamic client registration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)

### 関連情報

- [Dynamic client registration - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-dynamic-client-registration.html)
- [Amazon Cognito now supports dynamic client registration](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)
- [Dynamic Client Registration (DCR) in MCP](https://workos.com/blog/dynamic-client-registration-dcr-mcp-oauth)
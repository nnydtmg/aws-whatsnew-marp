# Amazon CognitoがOAuth動的クライアント登録（DCR）をサポート

Amazon Cognito now supports dynamic client registration

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports dynamic client registration」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CognitoはOAuth動的クライアント登録（DCR、RFC 7591）を新たにサポートし、MCPクライアントやAIエージェントが実行時に自ら登録できるようになりました。以前は、Cognitoを認可に使うMCPサーバーに接続するそれぞれのAIクライアントごとに、事前にアプリケーションクライアントを作成する必要がありました。

## このアップデートで何が変わったか

Amazon CognitoがOAuth 2.0 Dynamic Client Registration Protocol（DCR、RFC 7591）をサポート。Cognitoは認可サーバーメタデータで登録エンドポイント（https://<user-pool-domain>/oauth2/register）を公開し、MCPクライアントが発見してクライアントIDを取得できる。登録モードは2種類：オープン登録（トークン不要）と認証済み登録（aws.cognito/dcr/register スコープ付きアクセストークンが必要）。動的に登録されたクライアントは他のアプリクライアントと同じコンソール・APIで管理でき、クライアントIDに接頭辞が付きClientType=DCRでフィルター可能。EssentialsおよびPlusプランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用可能。ユーザープールの全ドメインでManaged Loginが必須。グラントタイプはauthorization_codeまたはclient_credentials（両方は不可）。公開クライアント

## 対象ユーザー

Amazon CognitoがOAuth 2.0 Dynamic Client Registration Protocol（DCR、RFC 7591）をサポート。Cognitoは認可サーバーメタデータで登録エンドポイント（https://<user-pool-domain>/oauth2/register）を公開し、MCPクライアントが発見してクライアントIDを取得できる。登録モードは2種類：オープン登録（トークン不要）と認証済み登録（aws.cognito/dcr/register スコープ付きアクセストークンが必要）。動的に登録されたクライアントは他のアプリクライアントと同じコンソール・A

## 詳細

Amazon CognitoがOAuth 2.0 Dynamic Client Registration Protocol（DCR、RFC 7591）をサポート。Cognitoは認可サーバーメタデータで登録エンドポイント（https://<user-pool-domain>/oauth2/register）を公開し、MCPクライアントが発見してクライアントIDを取得できる。登録モードは2種類：オープン登録（トークン不要）と認証済み登録（aws.cognito/dcr/register スコープ付きアクセストークンが必要）。動的に登録されたクライアントは他のアプリクライアントと同じコンソール・APIで管理でき、クライアントIDに接頭辞が付きClientType=DCRでフィルター可能。EssentialsおよびPlusプランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用可能。ユーザープールの全ドメインでManaged Loginが必須。グラントタイプはauthorization_codeまたはclient_credentials（両方は不可）。公開クライアントはPKCE S256必須。RFC 7592のクライアント設定エンドポイントは非サポート（POSTのみ）。アプリクライアント割当は通常と動的登録で共有し、DCR有効時は1ユーザープールあたり10,000。セキュリティ考慮としてAWS WAFによるレート制限、許可スコープの注意、CloudTrailでのRegister_POST監視が推奨される。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-dynamic-client-registration/)
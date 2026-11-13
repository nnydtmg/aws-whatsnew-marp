# Amazon CognitoがOAuth 2.0トークン交換をサポート

Amazon Cognito now supports OAuth 2.0 token exchange

**カテゴリ:** What's New
**公開日:** 2026-11-12T22:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports OAuth 2.0 token exchange」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CognitoがOAuth 2.0トークン交換（RFC 8693）を新たにサポートし、サービスやAIエージェントがユーザーのトークンを狭くスコープされた新しいトークンに交換できるようになりました。ユーザーの代わりにダウンストリームサービスを呼び出すアプリケーションやMCPサーバーの開発者に適しています。

## このアップデートで何が変わったか

Lambdaトリガー:
- Pre token generation LambdaトリガーがTokenGeneration_TokenExchangeで起動
- クレームの追加・抑制・上書き、スコープの抑制、交換の拒否が可能
- スコープの追加は不可

利用可能な計画:
- EssentialsおよびPlusフィーチャープラン
- Amazon Cognitoが利用可能なすべてのAWSリージョン

## 対象ユーザー

Amazon CognitoがOAuth 2.0トークン交換（RFC 8693）をサポートしました。ユーザーの代わりに動作するサービスやAIエージェントは、ユーザーのトークンを特定のダウンストリームサービス向けにスコープされた新しいトークンへ交換できます。

## 活用シーン

ユースケース:
- Web/モバイルアプリケーションへの認証追加
- AIエージェントの認証
- MCPサーバーなどの仲介サービスがユーザーの代わりにバックエンドAPIを呼び出す場面
- サービス間委任（Service-to-service delegation）
- オーディエンスバインディング（特定リソースサーバー向けトークン発行）

## 詳細

Amazon CognitoがOAuth 2.0トークン交換（RFC 8693）をサポートしました。ユーザーの代わりに動作するサービスやAIエージェントは、ユーザーのトークンを特定のダウンストリームサービス向けにスコープされた新しいトークンへ交換できます。

以前は、ユーザーの代わりに他のサービスを呼び出す場合、元のトークンをそのまま転送するか、自前でトークン発行ロジックを構築・運用する必要がありました。

交換後の新しいトークンの特徴:
- 元のトークンより狭いスコープ
- 単一のオーディエンスにバインド
- リフレッシュトークンは付与されない
- アクタートークンを含めると、actクレームが付加され仲介サービスを識別可能

2つの語義:
- Impersonation（アクタートークンなし）: ユーザーが直接行動したように見える
- Delegation（アクタートークンあり）: actクレームで仲介者を識別

利用方法:
- Tokenエンドポイント（/oauth2/token）でgrant_type=urn:ietf:params:oauth:grant-type:token-exchange
- 新規GetDerivedToken API（AWS SDK）

セキュリティモデル:
- 発行スコープは「リクエストスコープ ∩ サブジェクトトークンのスコープ ∩ アプリクライアント許可スコープ」の積集合
- 権限昇格は不可
- リフレッシュトークンは発行されない
- 署名・有効期限・失効（グローバルサインアウト）を検証
- オーディエンスとリソースはユーザープールに登録されたリソースサーバーに限定

対象トークン:
- Amazon Cognito発行のトークン
- ユーザープールに登録済みの外部IdP（OIDC / SAML 2.0）のトークン
- 外部IdPの場合、リンク済みユーザーが必須（新規作成はしない）
- 出力はアクセストークンまたはIDトークン（SAMLは発行しない）

アプリクライアント設定:
- ALLOW_TOKEN_EXCHANGE_IMPERSONATION
- ALLOW_TOKEN_EXCHANGE_DELEGATION
- または両方

Lambdaトリガー:
- Pre token generation LambdaトリガーがTokenGeneration_TokenExchangeで起動
- クレームの追加・抑制・上書き、スコープの抑制、交換の拒否が可能
- スコープの追加は不可

利用可能な計画:
- EssentialsおよびPlusフィーチャープラン
- Amazon Cognitoが利用可能なすべてのAWSリージョン

ユースケース:
- Web/モバイルアプリケーションへの認証追加
- AIエージェントの認証
- MCPサーバーなどの仲介サービスがユーザーの代わりにバックエンドAPIを呼び出す場面
- サービス間委任（Service-to-service delegation）
- オーディエンスバインディング（特定リソースサーバー向けトークン発行）

注意点:
- may_actクレームは現時点で発行・評価されない
- M2M認可（クライアントクレデンシャルズ）とは異なる（ユーザーコンテキストを保持）
- リフレッシュトークンが発行されないためキャッシュ設計が必要

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)
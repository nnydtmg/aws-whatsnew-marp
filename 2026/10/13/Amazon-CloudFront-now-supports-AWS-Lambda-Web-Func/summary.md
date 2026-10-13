# Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポート

Amazon CloudFront now supports AWS Lambda Web Functions as an origin

**カテゴリ:** What's New
**公開日:** 2026-10-12T23:10:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)

このページでは、AWS What's Newで発表された「Amazon CloudFront now supports AWS Lambda Web Functions as an origin」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートする新機能が追加されました。このアップデートは、AWS Lambda Web Functions上のウェブアプリケーションを安全かつ高速に配信したい開発者の方に適しています。CloudFrontのグローバルエッジネットワーク経由でLambda Web Functions製アプリを配信できるようになり、コード変更なしでTLS終端・キャッシュ・カスタムドメイン・OACによるセキュリティ強化が利用可能です。

## このアップデートで何が変わったか

Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートしました。CloudFrontをLambda Web Functionの前段に配置することで、エッジでのTLS終端（低レイテンシー・高速接続）、キャッシュによるパフォーマンス向上、管理TLS証明書付きカスタムドメインがコード変更なしで利用できます。CloudFront Origin Access Control (OAC)によりLambda Web FunctionへのアクセスをCloudFront経由のみに制限でき、セキュリティ保護を回避する意図しないリクエストがオリジンに到達しません。OACによりCloudFrontのエッジネットワークがネットワーク層のDDoS攻撃から保護し、AWS WAFを付加してアプリケーション層のセキュリティも強化できます。自前認証を行うアプリでも、OACは元の認証情報を変更せずアプリに到達させるため既存のログインフローがそのまま動作します。本機能はCloudFront Chinaリージョンを除き世界中で利用可能です。CloudFrontコンソール、S

## 対象ユーザー

Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートしました。CloudFrontをLambda Web Functionの前段に配置することで、エッジでのTLS終端（低レイテンシー・高速接続）、キャッシュによるパフォーマンス向上、管理TLS証明書付きカスタムドメインがコード変更なしで利用できます。CloudFront Origin Access Control (OAC)によりLambda Web FunctionへのアクセスをCloudFront経由のみに制限でき、セキュリティ保護を回避する意図しないリクエストがオリジンに到達しません

## 詳細

Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートしました。CloudFrontをLambda Web Functionの前段に配置することで、エッジでのTLS終端（低レイテンシー・高速接続）、キャッシュによるパフォーマンス向上、管理TLS証明書付きカスタムドメインがコード変更なしで利用できます。CloudFront Origin Access Control (OAC)によりLambda Web FunctionへのアクセスをCloudFront経由のみに制限でき、セキュリティ保護を回避する意図しないリクエストがオリジンに到達しません。OACによりCloudFrontのエッジネットワークがネットワーク層のDDoS攻撃から保護し、AWS WAFを付加してアプリケーション層のセキュリティも強化できます。自前認証を行うアプリでも、OACは元の認証情報を変更せずアプリに到達させるため既存のログインフローがそのまま動作します。本機能はCloudFront Chinaリージョンを除き世界中で利用可能です。CloudFrontコンソール、SDK、CLI、CloudFormationで設定でき、追加料金はありません。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)
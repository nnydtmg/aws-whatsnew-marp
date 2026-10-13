---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポート

Amazon CloudFront now supports AWS Lambda Web Functions as an origin

**What's New** | 2026-10-12T23:10:00

---

## 概要

- Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートする新機能が追加されました。
- このアップデートは、AWS Lambda Web Functions上のウェブアプリケーションを安全かつ高速に配信したい開発者の方に適しています。
- CloudFrontのグローバルエッジネットワーク経由でLambda Web Functions製アプリを配信できるようになり、コード変更なしでTLS終端・キャッシュ・カスタムドメイン・OACによるセキ...

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudFront now supports AWS Lambda Web Functions as an origin - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)

- **Announcing AWS Lambda Web Functions | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere)

- **Restricting acc...

---

## 変更内容・新機能

Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートしました。CloudFrontをLambda Web Functionの前段に配置することで、エッジでのTLS終端（低レイテンシー・高速接続）、キャッシュによるパフォーマンス向上、管理TLS証明書付きカスタムドメインがコード変更なしで利用できます。CloudFront Origin Access Control (OAC)によりLambda Web FunctionへのアクセスをCloudFront経由のみに制限でき、セキュリティ保護を回避する意図しないリクエストがオリジンに到達しません。OACによりCloudFrontのエッジネットワークがネットワーク層のDDoS攻撃から保護し、AWS WAFを付加してアプリケーション層のセキュリティも強化できます。自前認証を行うアプリでも、OACは元の認証情報を変更せずアプリに到達させるため既存のログインフローがそのまま動作します。本機能はCloudFront Chinaリージョンを除き世界中で利用可能です。CloudFrontコンソール、S

---

## 効果・メリット

- Amazon CloudFrontがAWS Lambda Web Functionsをオリジンとしてサポートしました。
- CloudFrontをLambda Web Functionの前段に配置することで、エッジでのTLS終端（低レイテンシー・高速接続）、キャッシュによるパフォーマンス向上、管理TLS証明書付きカスタムドメインがコード変更なしで利用できます。
- CloudFront Origin Access Control (OAC)によりLambda Web FunctionへのアクセスをCloudFront経由のみに制限でき、セキュリティ保護を回避する意図しないリクエストがオリジンに到達しません。
- OACによりCloudFrontのエッジネットワークがネットワーク層のDDoS攻撃から保護し、AWS WAFを付加してアプリケーション層のセキュリティも強化できます。
- 自前

---

## まとめ

- Amazon CloudFront now supports AWS Lambda Web Functions as an origin について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)

### 関連情報

- [Amazon CloudFront now supports AWS Lambda Web Functions as an origin - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/)
- [Announcing AWS Lambda Web Functions | AWS News Blog](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere)
- [Restricting access to Lambda Web Functions - CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-lambda-web.html)
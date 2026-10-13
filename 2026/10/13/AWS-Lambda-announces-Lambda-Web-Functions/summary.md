# AWS LambdaがLambda Web Functionsを発表 — HTTPリクエストを直接処理

AWS Lambda announces Lambda Web Functions

**カテゴリ:** What's New
**公開日:** 2026-10-12T19:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)

このページでは、AWS What's Newで発表された「AWS Lambda announces Lambda Web Functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、使い慣れたフレームワークでHTTPリクエストを直接処理できる新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。本機能は、AI推論やWebアプリなどを迅速に構築し、アクティブCPU時間のみで課金されたい開発者に適しています。

## このアップデートで何が変わったか

AWS Lambdaは、HTTPリクエストを直接処理する新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。ExpressやHono、Fastify、Next.jsなどの使い慣れたNode.jsフレームワークをアダプターなしで利用でき、ポートで待ち受けて通常のHTTPサーバーと同様に動作します。AI推論エンドポイント、SSR Webアプリ、ストリーミングAPI、マイクロサービス、Webhookなどに対応し、アクティブCPU時間とメモリのみが課金対象です。既存のLambda関数はLambda Event Functionsに名称変更されますが、コード変更や再デプロイは不要です。Node.js 24 (nodejs24.x) ランタイムをArm64でサポートし、1つのウォーム環境で最大128の同時リクエストを処理でき、HTTPストリーミングやマルチリージョンルーティング、VPC接続にも対応しています。デプロイは `aws lambda-web deploy` コマンド一つで完了し、AWS Lambda API、Agent Toolkit for

## 対象ユーザー

AWS Lambdaは、HTTPリクエストを直接処理する新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。ExpressやHono、Fastify、Next.jsなどの使い慣れたNode.jsフレームワークをアダプターなしで利用でき、ポートで待ち受けて通常のHTTPサーバーと同様に動作します。AI推論エンドポイント、SSR Webアプリ、ストリーミングAPI、マイクロサービス、Webhookなどに対応し、アクティブCPU時間とメモリのみが課金対象です。既存のLambda関数はLambda Event Functionsに名称変更されますが、コード

## 詳細

AWS Lambdaは、HTTPリクエストを直接処理する新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。ExpressやHono、Fastify、Next.jsなどの使い慣れたNode.jsフレームワークをアダプターなしで利用でき、ポートで待ち受けて通常のHTTPサーバーと同様に動作します。AI推論エンドポイント、SSR Webアプリ、ストリーミングAPI、マイクロサービス、Webhookなどに対応し、アクティブCPU時間とメモリのみが課金対象です。既存のLambda関数はLambda Event Functionsに名称変更されますが、コード変更や再デプロイは不要です。Node.js 24 (nodejs24.x) ランタイムをArm64でサポートし、1つのウォーム環境で最大128の同時リクエストを処理でき、HTTPストリーミングやマルチリージョンルーティング、VPC接続にも対応しています。デプロイは `aws lambda-web deploy` コマンド一つで完了し、AWS Lambda API、Agent Toolkit for AWS、AWS Management Console、AWS CLI、AWS CloudFormation、AWS SAM、AWS CDK、AWS SDKsで作成・設定可能です。リビジョンとエンドポイントの概念があり、カナリアデプロイも可能です。Amazon CloudFrontとの統合も対応し、OACによるプライベートオリジン設定が可能です。利用可能リージョン: US East (N. Virginia)、US East (Ohio)、US West (Oregon)、Asia Pacific (Tokyo)、Europe (Ireland)。Lambdaは今、3つの形態を提供: Lambda Event Functions（既存のイベント駆動型）、Lambda Web Functions（HTTPネイティブ）、Lambda MicroVMs（ステートフルなサンドボックス）。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)
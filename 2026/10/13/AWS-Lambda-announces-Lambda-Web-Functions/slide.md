---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaがLambda Web Functionsを発表 — HTTPリクエストを直接処理

AWS Lambda announces Lambda Web Functions

**What's New** | 2026-10-12T19:30:00

---

## 概要

- AWS Lambdaは、使い慣れたフレームワークでHTTPリクエストを直接処理できる新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。
- 本機能は、AI推論やWebアプリなどを迅速に構築し、アクティブCPU時間のみで課金されたい開発者に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda announces Lambda Web Functions**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)

- **Announcing AWS Lambda Web Functions**
  [詳細](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/)

- **AWS Lambda Web Functions - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/la...

---

## 変更内容・新機能

AWS Lambdaは、HTTPリクエストを直接処理する新しいサーバーレスコンピューティングであるLambda Web Functionsを発表しました。ExpressやHono、Fastify、Next.jsなどの使い慣れたNode.jsフレームワークをアダプターなしで利用でき、ポートで待ち受けて通常のHTTPサーバーと同様に動作します。AI推論エンドポイント、SSR Webアプリ、ストリーミングAPI、マイクロサービス、Webhookなどに対応し、アクティブCPU時間とメモリのみが課金対象です。既存のLambda関数はLambda Event Functionsに名称変更されますが、コード変更や再デプロイは不要です。Node.js 24 (nodejs24.x) ランタイムをArm64でサポートし、1つのウォーム環境で最大128の同時リクエストを処理でき、HTTPストリーミングやマルチリージョンルーティング、VPC接続にも対応しています。デプロイは `aws lambda-web deploy` コマンド一つで完了し、AWS Lambda API、Agent Toolkit for

---

## まとめ

- AWS Lambda announces Lambda Web Functions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)

### 関連情報

- [AWS Lambda announces Lambda Web Functions](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)
- [Announcing AWS Lambda Web Functions](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/)
- [AWS Lambda Web Functions - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/web-functions.html)
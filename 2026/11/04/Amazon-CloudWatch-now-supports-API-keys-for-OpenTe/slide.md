---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatchがOpenTelemetryトレース向けAPIキー認証をサポート

Amazon CloudWatch now supports API keys for OpenTelemetry traces

**What's New** | 2026-11-03T08:00:00

---

## 概要

- Amazon CloudWatchはOpenTelemetryトレース向けにAPIキーによるベアラートークン認証を新たにサポートいたしました。
- 本機能はAWS SDKを利用できないワークロードからのトレース送信に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Setting up bearer token authentication for traces - AWS X-Ray**
  [詳細](https://docs.aws.amazon.com/xray/latest/devguide/xray-opentelemetry-bearer-token.html)

- **Multi-Cloud Observability with Amazon CloudWatch Using Bearer Token Auth and OpenTelemetry**
  [詳細](https://aws.amazon.com/blogs/mt/achieve-multi-cloud-observability-with-amazon-cloudwatch-using-bearer-token-auth-and-o...

---

## 変更内容・新機能

Amazon CloudWatchは、OpenTelemetryトレースをAWS X-RayのOTLPエンドポイントへ送信する際の追加認証方式として、APIキーを用いたベアラートークン認証をサポートするようになりました。本アップデートは、AWS SDKや短期認証情報を使用できないオンプレミスや他のクラウドのアプリケーション、CI/CDパイプライン、静的なAuthorizationヘッダーのみをサポートするサードパーティツールに適しております。OTLP/HTTPクライアントはAuthorizationヘッダーにBearerトークンを設定するだけで認証でき、OpenTelemetry CollectorやOpenTelemetry SDK exporterからも利用できます。SigV4は引き続き推奨認証方式であり、AWS Distro for OpenTelemetry (ADOT) SDKはデフォルトでSigV4を使用します。どちらの認証方式で送信したトレースも、Transaction Search、Amazon CloudWatch Application Signals、Amazon

---

## まとめ

- Amazon CloudWatch now supports API keys for OpenTelemetry traces について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)

### 関連情報

- [Setting up bearer token authentication for traces - AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/xray-opentelemetry-bearer-token.html)
- [Multi-Cloud Observability with Amazon CloudWatch Using Bearer Token Auth and OpenTelemetry](https://aws.amazon.com/blogs/mt/achieve-multi-cloud-observability-with-amazon-cloudwatch-using-bearer-token-auth-and-opentelemetry)
- [OpenTelemetry Protocol (OTLP) Endpoint - AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/xray-opentelemetry.html)
- [Amazon CloudWatch now supports API keys for OpenTelemetry traces](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)
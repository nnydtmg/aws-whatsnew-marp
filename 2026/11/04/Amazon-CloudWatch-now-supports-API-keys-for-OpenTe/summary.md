# Amazon CloudWatchがOpenTelemetryトレース向けAPIキー認証をサポート

Amazon CloudWatch now supports API keys for OpenTelemetry traces

**カテゴリ:** What's New
**公開日:** 2026-11-03T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch now supports API keys for OpenTelemetry traces」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatchはOpenTelemetryトレース向けにAPIキーによるベアラートークン認証を新たにサポートいたしました。本機能はAWS SDKを利用できないワークロードからのトレース送信に適しております。

## このアップデートで何が変わったか

Amazon CloudWatchは、OpenTelemetryトレースをAWS X-RayのOTLPエンドポイントへ送信する際の追加認証方式として、APIキーを用いたベアラートークン認証をサポートするようになりました。本アップデートは、AWS SDKや短期認証情報を使用できないオンプレミスや他のクラウドのアプリケーション、CI/CDパイプライン、静的なAuthorizationヘッダーのみをサポートするサードパーティツールに適しております。OTLP/HTTPクライアントはAuthorizationヘッダーにBearerトークンを設定するだけで認証でき、OpenTelemetry CollectorやOpenTelemetry SDK exporterからも利用できます。SigV4は引き続き推奨認証方式であり、AWS Distro for OpenTelemetry (ADOT) SDKはデフォルトでSigV4を使用します。どちらの認証方式で送信したトレースも、Transaction Search、Amazon CloudWatch Application Signals、Amazon

## 対象ユーザー

Amazon CloudWatchは、OpenTelemetryトレースをAWS X-RayのOTLPエンドポイントへ送信する際の追加認証方式として、APIキーを用いたベアラートークン認証をサポートするようになりました。本アップデートは、AWS SDKや短期認証情報を使用できないオンプレミスや他のクラウドのアプリケーション、CI/CDパイプライン、静的なAuthorizationヘッダーのみをサポートするサードパーティツールに適しております。OTLP/HTTPクライアントはAuthorizationヘッダーにBearerトークンを設定するだけで認証でき、OpenTelemetry Collec

## 詳細

Amazon CloudWatchは、OpenTelemetryトレースをAWS X-RayのOTLPエンドポイントへ送信する際の追加認証方式として、APIキーを用いたベアラートークン認証をサポートするようになりました。本アップデートは、AWS SDKや短期認証情報を使用できないオンプレミスや他のクラウドのアプリケーション、CI/CDパイプライン、静的なAuthorizationヘッダーのみをサポートするサードパーティツールに適しております。OTLP/HTTPクライアントはAuthorizationヘッダーにBearerトークンを設定するだけで認証でき、OpenTelemetry CollectorやOpenTelemetry SDK exporterからも利用できます。SigV4は引き続き推奨認証方式であり、AWS Distro for OpenTelemetry (ADOT) SDKはデフォルトでSigV4を使用します。どちらの認証方式で送信したトレースも、Transaction Search、Amazon CloudWatch Application Signals、Amazon CloudWatch Omniなど同じCloudWatch機能を利用できます。ベアラートークン認証は、AWS X-Ray OTLPトレースエンドポイントが利用可能なすべての商用AWSリージョンで利用できます。X-Ray APIキーはxray.amazonaws.com向けのIAMサービス固有認証情報であり、OTLPトレースエンドポイントへのスパン送信（xray:PutTraceSegments）にのみ使用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-api-keys-opentelemetry/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functionsが OpenTelemetry トレーシングに対応

AWS Lambda durable functions now supports OpenTelemetry tracing

**What's New** | 2026-11-19T20:00:00

---

## 概要

- AWS Lambda耐久関数がOpenTelemetryトレーシングに対応し、実行全体の統合トレースをCloudWatch等へ送信できるようになりました。
- 本機能は長時間実行ワークフローの可視化を求めるお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda Durable Functions observability with OpenTelemetry | AWS Compute Blog**
  [詳細](https://aws.amazon.com/blogs/compute/aws-lambda-durable-functions-observability-with-opentelemetry)

- **Observing AWS Lambda durable functions with the Durable Execution Telemetry Exporter | AWS Compute Blog**
  [詳細](https://aws.amazon.com/blogs/compute/observing-aws-lambda-durable-functio...

---

## 変更内容・新機能

-新機能は、AWS Lambda耐久関数向けのOpenTelemetryトレーシング対応です。
- 耐久実行をトレースし、Amazon CloudWatchや業界標準のオブザーバビリティツールへトレースを送信できます。
- プラグインはステップ、待機、コールバック、連鎖呼び出しを含む統合トレースを発行します。
- TypeScript、Python、JavaのSDKで、プラグインの追加または環境変数により有効化できます。
- 本アップデートは、最大1年実行可能なマルチステップアプリケーションやAIワークフローを構築されるお客様に適しています。
- ボトルネックの特定や障害原因の迅速な究明を必要とされるお客様に有益です。

---

## まとめ

- AWS Lambda durable functions now supports OpenTelemetry tracing について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-otel/)

### 関連情報

- [AWS Lambda Durable Functions observability with OpenTelemetry | AWS Compute Blog](https://aws.amazon.com/blogs/compute/aws-lambda-durable-functions-observability-with-opentelemetry)
- [Observing AWS Lambda durable functions with the Durable Execution Telemetry Exporter | AWS Compute Blog](https://aws.amazon.com/blogs/compute/observing-aws-lambda-durable-functions-with-the-durable-execution-telemetry-exporter)
- [Trace AWS Lambda durable functions with Datadog](https://www.datadoghq.com/blog/trace-aws-lambda-durable-functions)
- [Monitoring durable functions - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-monitoring.html)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functionsが実行洞察向けライブテレメトリを提供開始

AWS Lambda durable functions now exports live telemetry for execution insights

**What's New** | 2026-10-28T18:00:00

---

## 概要

- AWS Lambda耐久関数向けに、実行履歴を複数宛先へ送信できるTelemetry Exporterと、自然言語照会用のMCPサーバーが提供開始されました。
- オンコールエンジニアやビジネスアナリストの皆様が、運用およびビジネス洞察を得やすくなります。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda durable functions now exports live telemetry for execution insights - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry)

- **AWS Lambda Durable Functions Practical Guide**
  [詳細](https://hidekazu-konishi.com/entry/aws_lambda_durable_functions_practical_guide.html)

- **Trace AWS Lambda durable functions with Datadog**
  [詳細](htt...

---

## 変更内容・新機能

- 新機能は、Lambda耐久関数の実行履歴を複数宛先へ送信するDurable Execution Telemetry Exporterでございます。
- 実行ステータス、操作タイミング、ステップ入出力、エラーを13の組み込み宛先へ送信できます。
- 機密フィールドのマスキングとサンプリング率の設定が可能でございます。
- 自然言語でテレメトリを照会できるMCPサーバーも同時に提供されます。
- TypeScript、Python、Java、Goに対応し、対象リージョンで追加料金なしでご利用いただけます。
- 本アップデートは、障害調査を行うオンコールエンジニアの皆様に適しております。
- 特定顧客のトランザクションを確認したいビジネスアナリストの皆様にも適しております。

---

## まとめ

- AWS Lambda durable functions now exports live telemetry for execution insights について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/)

### 関連情報

- [AWS Lambda durable functions now exports live telemetry for execution insights - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry)
- [AWS Lambda Durable Functions Practical Guide](https://hidekazu-konishi.com/entry/aws_lambda_durable_functions_practical_guide.html)
- [Trace AWS Lambda durable functions with Datadog](https://www.datadoghq.com/blog/trace-aws-lambda-durable-functions)
- [Monitoring durable functions - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-monitoring.html)
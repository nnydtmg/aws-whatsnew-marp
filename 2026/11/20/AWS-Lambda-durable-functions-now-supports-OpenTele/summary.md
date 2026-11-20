# AWS Lambda durable functionsが OpenTelemetry トレーシングに対応

AWS Lambda durable functions now supports OpenTelemetry tracing

**カテゴリ:** What's New
**公開日:** 2026-11-19T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-otel/)

このページでは、AWS What's Newで発表された「AWS Lambda durable functions now supports OpenTelemetry tracing」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda耐久関数がOpenTelemetryトレーシングに対応し、実行全体の統合トレースをCloudWatch等へ送信できるようになりました。本機能は長時間実行ワークフローの可視化を求めるお客様に適しています。

## このアップデートで何が変わったか

-新機能は、AWS Lambda耐久関数向けのOpenTelemetryトレーシング対応です。
- 耐久実行をトレースし、Amazon CloudWatchや業界標準のオブザーバビリティツールへトレースを送信できます。
- プラグインはステップ、待機、コールバック、連鎖呼び出しを含む統合トレースを発行します。
- TypeScript、Python、JavaのSDKで、プラグインの追加または環境変数により有効化できます。
- 本アップデートは、最大1年実行可能なマルチステップアプリケーションやAIワークフローを構築されるお客様に適しています。
- ボトルネックの特定や障害原因の迅速な究明を必要とされるお客様に有益です。

## 対象ユーザー

-新機能は、AWS Lambda耐久関数向けのOpenTelemetryトレーシング対応です。
- 耐久実行をトレースし、Amazon CloudWatchや業界標準のオブザーバビリティツールへトレースを送信できます。
- プラグインはステップ、待機、コールバック、連鎖呼び出しを含む統合トレースを発行します。
- TypeScript、Python、JavaのSDKで、プラグインの追加または環境変数により有効化できます。
- 本アップデートは、最大1年実行可能なマルチステップアプリケーションやAIワークフローを構築されるお客様に適しています。
- ボトルネックの特定や障害原因の迅速な究明を必要

## 詳細

-新機能は、AWS Lambda耐久関数向けのOpenTelemetryトレーシング対応です。
- 耐久実行をトレースし、Amazon CloudWatchや業界標準のオブザーバビリティツールへトレースを送信できます。
- プラグインはステップ、待機、コールバック、連鎖呼び出しを含む統合トレースを発行します。
- TypeScript、Python、JavaのSDKで、プラグインの追加または環境変数により有効化できます。
- 本アップデートは、最大1年実行可能なマルチステップアプリケーションやAIワークフローを構築されるお客様に適しています。
- ボトルネックの特定や障害原因の迅速な究明を必要とされるお客様に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-otel/)
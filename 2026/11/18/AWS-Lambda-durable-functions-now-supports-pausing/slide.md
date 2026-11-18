---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functionsが実行の一時停止と削除をサポート

AWS Lambda durable functions now supports pausing and deleting executions

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWS Lambda耐久関数では、実行中の処理を一時停止して再開できるほか、完了した実行データを保持期間前に削除できるようになりました。
- 本機能は、長時間実行ワークフローの運用柔軟性とデータ管理を向上させます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda durable functions now supports pausing and deleting executions - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-pause-delete/)

- **AWS Lambda announces durable functions for multi-step applications and AI workflows - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/12/lambda-durable-multi-step-applications-ai-workflows)

- ...

---

## 変更内容・新機能

-新機能は、実行中の耐久実行を進捗を失わずに一時停止し、後から再開できることです。
- 再開時は同一関数バージョンの最後のチェックポイントから継続いたします。
- 一時停止中の時間は、既定では実行タイムアウトに計上されません。
- 成功、失敗、停止、またはタイムアウト後に、実行の履歴やチェックポイント、入出力ペイロードを保持期間終了前に削除できます。
- 本更新は、最大1年稼働する耐障害性の高いマルチステップアプリケーションやAIワークフローを構築されるお客様に適しています。
- ダウンストリームサービスの劣化やレート制限時に再試行を使い切らず一時停止したいお客様、および個人データ削除や失敗実行の整理が必要なお客様に有用です。

---

## 効果・メリット

- AWS Lambda耐久関数では、実行中の処理を一時停止して再開できるほか、完了した実行データを保持期間前に削除できるようになりました。
- 本機能は、長時間実行ワークフローの運用柔軟性とデータ管理を向上させます。

---

## まとめ

- AWS Lambda durable functions now supports pausing and deleting executions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-pause-delete/)

### 関連情報

- [AWS Lambda durable functions now supports pausing and deleting executions - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-pause-delete/)
- [AWS Lambda announces durable functions for multi-step applications and AI workflows - AWS](https://aws.amazon.com/about-aws/whats-new/2025/12/lambda-durable-multi-step-applications-ai-workflows)
- [Manage Executions - AWS Durable Execution SDK Developer Guide](https://docs.aws.amazon.com/durable-execution/getting-started/manage-executions)
- [AWS Lambda Durable Functions: Build Workflows That Last](https://dev.to/aws/aws-lambda-durable-functions-build-workflows-that-last-3ac7)
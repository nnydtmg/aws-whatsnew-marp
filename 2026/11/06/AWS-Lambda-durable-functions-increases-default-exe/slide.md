---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functions のデフォルト実行・APIクォータが引き上げ

AWS Lambda durable functions increases default execution and API quotas

**What's New** | 2026-11-05T08:00:00

---

## 概要

- AWS Lambda耐久関数のデフォルトクォータが引き上げられ、注文処理や文書パイプラインなどのワークロードがより多くの並列実行を行えるようになります。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda durable functions increases default execution and API quotas - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)

- **Lambda quotas - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)

- **Lambda durable functions - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/...

---

## 変更内容・新機能

AWS Lambda durable functions の実行中実行数およびAPIリクエストレートのデフォルトクォータが引き上げられた。実行中の耐久実行数は100万から500万へ、関連APIのリクエストレートも大幅に増加。新クォータは全AWSリージョンに適用されるが、US East (N. Virginia)、US West (Oregon)、Europe (Ireland) は2倍のクォータを持つ。注文処理や文書パイプラインなどのワークロードに適している。外部作業の待機後に多数の実行を一斉に再開する場合や、ダッシュボードやスクリプトで実行を監視・管理するケースにも有益。ステータス確認、実行一覧、履歴読み取り、実行停止を少なくとも10倍の頻度で実行できるようになった。

---

## まとめ

- AWS Lambda durable functions increases default execution and API quotas について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)

### 関連情報

- [AWS Lambda durable functions increases default execution and API quotas - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)
- [Lambda quotas - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
- [Lambda durable functions - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html)
- [AWS Lambda durable functions increases durable operation and checkpoint payload limits](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase)
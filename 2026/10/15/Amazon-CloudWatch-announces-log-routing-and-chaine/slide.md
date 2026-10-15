---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatchパイプラインが条件付きログルーティングとチェーンパーサーをサポート

Amazon CloudWatch announces log routing and chained log parsers

**What's New** | 2026-10-14T22:14:00

---

## 概要

- Amazon CloudWatchパイプラインにおいて、条件付きログルーティングとチェーンパーサーが新たにサポートされました。
- これにより、多様なログ形式を構造化し、適切なロググループへルーティングできるようになります。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch announces log routing and chained log parsers - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing)

- **CloudWatch pipelines - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html)

- **Amazon CloudWatch pipelines introduces new compliance and governanc...

---

## 変更内容・新機能

- 新機能は、Amazon CloudWatchパイプラインによる条件付きログルーティングとチェーンパーサーのサポートです。
- 条件付きログルーティングでは、処理済みフィールドに対する条件に基づき、各イベントを異なるCloudWatchロググループへ送信できます。
- チェーンパーサーでは、複数のパーサープロセッサを順番に適用し、後続のパーサーが先行のものが生成したフィールドを利用できます。
- このアップデートは、ログパイプラインに異なるイベント種別が混在するお客様に適しています。
- 重大度、ソース、またはタイプごとにイベントを分離し、適切な保持とアクセス制御を適用したいお客様に役立ちます。

---

## まとめ

- Amazon CloudWatch announces log routing and chained log parsers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/)

### 関連情報

- [Amazon CloudWatch announces log routing and chained log parsers - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing)
- [CloudWatch pipelines - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html)
- [Amazon CloudWatch pipelines introduces new compliance and governance capabilities - AWS](https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-pipelines-compliance-governance)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Logs Insightsがクエリ実行前のスキャンバイト数見積もりをサポート

Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query

**What's New** | 2026-09-29T08:00:00

---

## 概要

- Amazon CloudWatch Logs Insightsでは、クエリを実行せずにスキャンされるバイト数を見積もることができます。
- 本機能は、実行前に条件を調整してコストを最適化したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **CloudWatch Logs Insights language query syntax - Amazon CloudWatch Logs**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)

- **Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)

- **estimate - Amazon C...

---

## 変更内容・新機能

- Amazon CloudWatch Logs Insightsでは、クエリ実行前にスキャンされるログデータのバイト数を見積もることができるようになりました。
- 選択したロググループと時間範囲に対して、クエリを実行せずにスキャン量をバイト単位で推定できます。
- コンソールでは条件変更時に見積もりが自動表示され、CLIやAPIではestimateコマンドで明示的にリクエストできます。
- estimateコマンドを使用するクエリにはクエリ料金が発生せず、すべてのAWS商用リージョンでご利用いただけます。
- 本アップデートは、クエリ実行前にロググループや時間範囲、フィルターを調整したいお客様に適しています。
- スキャン量を事前に把握し、コストを最適化したいユーザーにとって有用です。

---

## まとめ

- Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)

### 関連情報

- [CloudWatch Logs Insights language query syntax - Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)
- [Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)
- [estimate - Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-Estimate.html)
- [Amazon CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing)
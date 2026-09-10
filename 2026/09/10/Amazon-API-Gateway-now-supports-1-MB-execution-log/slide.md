---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon API Gateway が1MBの実行ログと設定可能な配信先をサポート

Amazon API Gateway now supports 1 MB execution logs with configurable delivery destinations

**What's New** | 2026-09-10T20:00:00

---

## 概要

- Amazon API Gatewayの実行ログが最大1MBに拡大され、複数の配信先を設定できるようになりました。
- 詳細なログ分析を必要とするお客様に適した機能でございます。

---

## 前提・背景

### 関連する最近の動向

- **How to Monitor AWS API Gateway Logs via Kinesis Firehose**
  [詳細](https://openobserve.ai/blog/how-to-monitor-api-access-logs)

- **How to Set Up API Gateway Access Logging**
  [詳細](https://oneuptime.com/blog/post/2026-02-12-api-gateway-access-logging/view)

- **Logging and monitoring in Amazon API Gateway**
  [詳細](https://docs.aws.amazon.com/apigateway/latest/developerguide/secu...

---

## 変更内容・新機能

- Amazon API GatewayのREST API実行ログが最大1MBまで対応し、配信先を設定可能になりました。
- お客様独自のCloudWatch Logs、Amazon S3、Amazon Data Firehoseへ複数同時に配信できます。
- 本アップデートは、リクエストとレスポンスの詳細な可視性を求めるお客様に適しております。
- 長期保存やリアルタイム監視を必要とするREST API利用者に有用でございます。

---

## まとめ

- Amazon API Gateway now supports 1 MB execution logs with configurable delivery destinations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-1-mb-execution-logs/)

### 関連情報

- [How to Monitor AWS API Gateway Logs via Kinesis Firehose](https://openobserve.ai/blog/how-to-monitor-api-access-logs)
- [How to Set Up API Gateway Access Logging](https://oneuptime.com/blog/post/2026-02-12-api-gateway-access-logging/view)
- [Logging and monitoring in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/security-monitoring.html)
- [Customize Amazon API Gateway destinations for execution logs](https://aws-news.com/article/2026-09-09-customize-amazon-api-gateway-destinations-for-execution-logs)
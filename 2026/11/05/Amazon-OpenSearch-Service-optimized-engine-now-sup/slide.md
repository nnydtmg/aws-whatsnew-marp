---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch Service最適化エンジンがログとトレースに対応

Amazon OpenSearch Service optimized engine now supports logs and traces

**What's New** | 2026-11-01T17:00:00

---

## 概要

- Amazon OpenSearch Serviceの最適化エンジンがログとトレースを同一場所で扱えるようになり、OpenTelemetryおよびエージェントトレースの分析が可能になりました。
- 本機能はOpenSearch 3.7の指定リージョンで追加料金なしでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Document history for Amazon OpenSearch Service**
  [詳細](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/release-notes.html)

- **AWS turbocharges log analytics in Amazon OpenSearch Service at no extra cost**
  [詳細](https://siliconangle.com/2026/07/01/aws-turbocharges-log-analytics-amazon-opensearch-service-no-extra-cost)

- **Querying raw log data using SQL ...

---

## 変更内容・新機能

-新機能は、Amazon OpenSearch Service最適化エンジンによるログとトレースのサポートです。
-エージェントトレースとOpenTelemetryトレースに対応し、トレースとログを同じ場所で管理できます。
-リクエストやエージェントセッションを最初から最後まで追跡し、失敗や遅延したステップと関連ログをツール切替なしで確認できます。
-ネスト構造を保持したマッピングと複数値配列をサポートし、ホットティアではドキュメントIDによる更新、削除、アップサートが可能です。
- OpenSearch UIのDiscover Traces、アプリケーションパフォーマンスモニタリング、サービスマップ、エージェントトレースおよびセッションビューで分析できます。
- OpenSearch 3.7の指定リージョンで、追加料金なしでご利用いただけます。
-本更新は、ログとトレースを同一場所で分析し、エージェントセッションを追跡したいお客様に適しております。

---

## まとめ

- Amazon OpenSearch Service optimized engine now supports logs and traces について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service-support-traces)

### 関連情報

- [Document history for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/release-notes.html)
- [AWS turbocharges log analytics in Amazon OpenSearch Service at no extra cost](https://siliconangle.com/2026/07/01/aws-turbocharges-log-analytics-amazon-opensearch-service-no-extra-cost)
- [Querying raw log data using SQL and PPL with the optimized engine](https://aws.amazon.com/blogs/big-data/querying-raw-log-data-using-sql-and-ppl-with-the-optimized-engine-in-amazon-opensearch-service)
- [Amazon OpenSearch Service optimized for log analytics](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-service-optimized-log-analytics)
- [Amazon OpenSearch Service supports Managed Prometheus and agent tracing](https://aws.amazon.com/about-aws/whats-new/2026/04/opensearch-managed-prometheus-agent-tracing)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache for ValkeyがOpenTelemetryメトリクスと詳細モニタリングをサポート

Amazon ElastiCache for Valkey now supports OpenTelemetry metrics and detailed monitoring

**What's New** | 2026-10-02T07:00:00

---

## 概要

- Amazon ElastiCache for ValkeyがOpenTelemetryメトリクスと詳細モニタリングに対応し、15秒間隔での高精度な監視が可能になりました。
- PromQLを活用した柔軟な分析により、運用監視を効率化できます。

---

## 前提・背景

### 関連する最近の動向

- **Monitor Valkey on AWS ElastiCache: Metrics, Tools & Best Practices - CubeAPM**
  [詳細](https://cubeapm.com/blog/monitor-valkey-aws-elasticache)

- **Metrics for Valkey and Redis OSS - Amazon ElastiCache**
  [詳細](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheMetrics.Redis.html)

- **Which Metrics Should I Monitor? - Amazon ElastiCache**
  [詳細](https://docs.aws.amazo...

---

## 変更内容・新機能

Amazon ElastiCache for Valkeyはノードベースクラスター向けにOpenTelemetryメトリクスをAmazon CloudWatchへ公開します。各メトリクスにはPromQL式でフィルタリングおよび集計可能な属性が付与されます。標準モニタリングでは60秒間隔のコアメトリクスを追加料金なしで提供し、詳細モニタリングでは15秒間隔で全メトリクスを選択できます。接続数上限に近づくノードの検出、インシデント時のエラー種別分析、メモリ不足の予測が可能です。CloudWatchとGrafanaでPromQLクエリを実行できます。コアメトリクスはElastiCache Insightsダッシュボードにも活用されます。対象はノードベースValkeyクラスターで、CloudWatchがOpenTelemetryメトリクスをサポートする全AWSリージョンで利用可能です。ElastiCache側の追加料金はありませんが、詳細モニタリングで選択したメトリクスにはCloudWatchのOpenTelemetryメトリクス料金が適用されます。

---

## ユースケース

Amazon ElastiCache for Valkeyはノードベースクラスター向けにOpenTelemetryメトリクスをAmazon CloudWatchへ公開します。各メトリクスにはPromQL式でフィルタリングおよび集計可能な属性が付与されます。標準モニタリングでは60秒間隔のコアメトリクスを追加料金なしで提供し、詳細モニタリングでは15秒間隔で全メトリクスを選択できます。接続数上限に近づくノードの検出、インシデント時のエラー種別分析、メモリ不足の予測が可能です。CloudWatchとGrafanaでPromQLクエリを実行できます。コアメトリクスはElastiCache Insig

---

## まとめ

- Amazon ElastiCache for Valkey now supports OpenTelemetry metrics and detailed monitoring について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-valkey-opentelemetry-metrics-detailed-monitoring)

### 関連情報

- [Monitor Valkey on AWS ElastiCache: Metrics, Tools & Best Practices - CubeAPM](https://cubeapm.com/blog/monitor-valkey-aws-elasticache)
- [Metrics for Valkey and Redis OSS - Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheMetrics.Redis.html)
- [Which Metrics Should I Monitor? - Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheMetrics.WhichShouldIMonitor.html)
- [Amazon ElastiCache for Valkey adds new CloudWatch metrics to monitor server-side response time](https://www.amazonaws.cn/en/new/2024/amazon-elasticache-for-valkey-adds-new-cloudwatch-metrics-to-monitor-server-side-response-time)
- [AWS / CloudWatch / ElastiCache / Valkey | Grafana Labs](https://grafana.com/grafana/dashboards/25406-aws-cloudwatch-elasticache-valkey)
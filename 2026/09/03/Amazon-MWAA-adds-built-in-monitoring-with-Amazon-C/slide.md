---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon MWAA が Amazon CloudWatch による組み込みモニタリングを追加

Amazon MWAA adds built-in monitoring with Amazon CloudWatch

**What's New** | 2026-09-03T15:00:00

---

## 概要

- Amazon MWAAは、環境詳細ページに組み込みのCloudWatchメトリクスダッシュボードと推奨アラームのワンクリック作成機能を追加しました。
- このアップデートは、MWAA環境の監視を簡素化したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **GitHub - aws-samples/mwaa-dashboard: Automating Amazon CloudWatch dashboards and alarms for Amazon Managed Workflows for Apache Airflow (MWAA) · GitHub**
  [詳細](https://github.com/aws-samples/mwaa-dashboard)

- **Monitoring dashboards and alarms on Amazon MWAA - Amazon Managed Workflows for Apache Airflow**
  [詳細](https://docs.aws.amazon.com/mwaa/latest/userguide/monitoring-dashboard.html)

---

## 変更内容・新機能

Amazon MWAAは、AWSマネジメントコンソールの環境詳細ページに組み込みのモニタリング体験を追加しました。新しいメトリクスダッシュボードは、環境の主要なAmazon CloudWatchメトリクスを一箇所に表示します。各グラフには、推奨される警告範囲をオーバーレイするオプションのトグルが含まれています。環境詳細ページには、関連するすべてのCloudWatchアラームを一覧表示するテーブルが表示されます。ワンクリックの推奨アラーム作成アクションにより、AWS管理テンプレートからアラームをプロビジョニングできます。

---

## まとめ

- Amazon MWAA adds built-in monitoring with Amazon CloudWatch について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-mwaa-cloudwatch-monitoring/)

### 関連情報

- [GitHub - aws-samples/mwaa-dashboard: Automating Amazon CloudWatch dashboards and alarms for Amazon Managed Workflows for Apache Airflow (MWAA) · GitHub](https://github.com/aws-samples/mwaa-dashboard)
- [Monitoring dashboards and alarms on Amazon MWAA - Amazon Managed Workflows for Apache Airflow](https://docs.aws.amazon.com/mwaa/latest/userguide/monitoring-dashboard.html)
- [Monitoring overview on Amazon MWAA - Amazon Managed Workflows for Apache Airflow](https://docs.aws.amazon.com/mwaa/latest/userguide/monitoring-overview.html)
- [AWS Apache Airflow (MWAA) | Grafana Labs](https://grafana.com/grafana/dashboards/24092-aws-apache-airflow-mwaa)
- [Optimize cost and performance for Amazon MWAA | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/optimize-cost-and-performance-for-amazon-mwaa)
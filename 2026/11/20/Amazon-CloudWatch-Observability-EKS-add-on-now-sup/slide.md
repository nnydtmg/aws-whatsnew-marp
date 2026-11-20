---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングをサポート

Amazon CloudWatch Observability EKS add-on now supports telemetry filtering

**What's New** | 2026-11-20T19:52:00

---

## 概要

- Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングをサポートし、不要なデータの取り込みを減らしてコストを最適化できます。
- クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含・除外リストを設定でき、非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。
- バージョン8.0.0以降で利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Observability EKS add-on now supports telemetry filtering - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-otel-addon-filtering/)

- **OTel Container Insights (Recommended) - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel.html)

- **Advanced configuration for ...

---

## 変更内容・新機能

Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングを新たにサポートします。クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含および除外リストを設定できます。非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。グループ化に使うラベルだけを残し、すべてのリソースの全ラベルを取り込む必要がなくなります。取り込みはGB単位で課金されるため、収集量を減らすことでコストを削減できます。フィルターはアドオンの構成更新1回で調整できます。バージョン8.0.0以降のEKSアドオンおよびHelmチャートで利用可能で、CloudWatchがOpenTelemetryメトリクスをサポートするすべてのAWSリージョンで提供されます。アドオン経由のテレメトリはAmazon EKS OpenTelemetry取り込み料金（$0.08/GB）で課金されます。

---

## 効果・メリット

- Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングを新たにサポートします。
- クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含および除外リストを設定できます。
- 非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。
- グループ化に使うラベルだけを残し、すべてのリソースの全ラベルを取り込む必要がなくなります。
- 取り込みはGB単位で課金されるため、収集量を減らすことでコストを削減できます。

---

## まとめ

- Amazon CloudWatch Observability EKS add-on now supports telemetry filtering について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-otel-addon-filtering/)

### 関連情報

- [Amazon CloudWatch Observability EKS add-on now supports telemetry filtering - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-otel-addon-filtering/)
- [OTel Container Insights (Recommended) - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel.html)
- [Advanced configuration for OTel Container Insights on Amazon EKS - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/container-insights-eks-otel-advanced.html)
- [Install the CloudWatch agent with the Amazon CloudWatch Observability EKS add-on or the Helm chart](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Observability-EKS-addon.html)
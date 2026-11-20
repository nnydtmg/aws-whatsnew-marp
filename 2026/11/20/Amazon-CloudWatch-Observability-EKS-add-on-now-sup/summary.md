# Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングをサポート

Amazon CloudWatch Observability EKS add-on now supports telemetry filtering

**カテゴリ:** What's New
**公開日:** 2026-11-20T19:52:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-otel-addon-filtering/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Observability EKS add-on now supports telemetry filtering」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングをサポートし、不要なデータの取り込みを減らしてコストを最適化できます。クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含・除外リストを設定でき、非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。バージョン8.0.0以降で利用可能です。

## このアップデートで何が変わったか

Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングを新たにサポートします。クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含および除外リストを設定できます。非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。グループ化に使うラベルだけを残し、すべてのリソースの全ラベルを取り込む必要がなくなります。取り込みはGB単位で課金されるため、収集量を減らすことでコストを削減できます。フィルターはアドオンの構成更新1回で調整できます。バージョン8.0.0以降のEKSアドオンおよびHelmチャートで利用可能で、CloudWatchがOpenTelemetryメトリクスをサポートするすべてのAWSリージョンで提供されます。アドオン経由のテレメトリはAmazon EKS OpenTelemetry取り込み料金（$0.08/GB）で課金されます。

## 詳細

Amazon CloudWatch Observability EKSアドオンがテレメトリフィルタリングを新たにサポートします。クラスター全体で名前空間、メトリクス名、ポッドおよびノードラベルの包含および除外リストを設定できます。非本番名前空間の除外や高カーディナリティメトリクスのドロップが可能です。グループ化に使うラベルだけを残し、すべてのリソースの全ラベルを取り込む必要がなくなります。取り込みはGB単位で課金されるため、収集量を減らすことでコストを削減できます。フィルターはアドオンの構成更新1回で調整できます。バージョン8.0.0以降のEKSアドオンおよびHelmチャートで利用可能で、CloudWatchがOpenTelemetryメトリクスをサポートするすべてのAWSリージョンで提供されます。アドオン経由のテレメトリはAmazon EKS OpenTelemetry取り込み料金（$0.08/GB）で課金されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-eks-otel-addon-filtering/)
# Amazon CloudWatch パイプラインが OpenTelemetry メトリクスの処理と充実化をサポート

Amazon CloudWatch pipelines now supports processing and enriching OpenTelemetry metrics

**カテゴリ:** What's New
**公開日:** 2026-06-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-pipelines-otel-metrics)

このページでは、AWS What's Newで発表された「Amazon CloudWatch pipelines now supports processing and enriching OpenTelemetry metrics」の内容を日本語で要約しています。

---

## 要約

Amazon CloudWatch パイプラインが OpenTelemetry メトリクスの処理と充実化機能をサポートするようになり、インフラストラクチャ管理なしに中央からメトリクスの変換、ラベル削除、命名規則の統一化が可能になりました。本機能は追加コストなしで全リージョンで利用可能です。

---

## このアップデートで何が変わったか

Amazon CloudWatch パイプラインが、取り込み時に OpenTelemetry（OTel）メトリクスの処理と充実化をサポートするようになりました。

**これまでの課題:**
- OTel メトリクスを保存前に充実化または変換する必要があるお客様は、カスタム処理層を構築するか、ソースでアプリケーション計測を変更する必要がありました

**新機能:**
- CloudWatch パイプラインにより、インフラストラクチャ管理なしで、取り込みパス内で中央からメトリクス変換を適用できます
- チームの所有権、コストセンター、環境タグなどのビジネスコンテキストを追加してメトリクスを充実化できます
- カスタムワークロードから高カーディナリティラベルを削除してストレージコストを削減できます
- メトリクスと属性の名前を変更して、組織全体で一貫した命名規則を適用できます
- 処理はアプリケーション計測の変更なしに、マッチしたメトリクスに透過的に適用されます

---

## 利用可能性

- OTel メトリクス処理は、CloudWatch パイプラインと CloudWatch ネイティブ OpenTelemetry メトリクスがサポートされているすべての AWS リージョンで利用可能です
- **追加コストなし**で OTel メトリクス処理が提供されます
- 標準的な CloudWatch 料金が OTel メトリクス取り込みに適用されます

---

## 関連情報

- [Amazon CloudWatch OpenTelemetry メトリクス (プレビュー版)](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics)
- [OpenTelemetry - CNCF Graduate Project](https://opentelemetry.io/)
- [Amazon CloudWatch ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/pipelines-metrics.html)

---

## タグ

`Amazon CloudWatch` `OpenTelemetry` `OTel` `メトリクス` `パイプライン` `変換` `充実化` `可観測性` `Observability`

# Amazon OpenSearch Ingestion now supports unified ingestion endpoint for OpenTelemetry data

**カテゴリ:** What's New
**公開日:** 2026-03-04T16:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-ingestion-unified-ingestion-endpoint-opentelemetry](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-ingestion-unified-ingestion-endpoint-opentelemetry)

---

## 要約

Amazon OpenSearch Ingestionは、ログ、メトリクス、トレースの3つのOpenTelemetryシグナルをすべて単一のパイプラインで受け入れることができる統合インジェストエンドポイントをサポートするようになりました。このアップデートにより、複数のパイプラインを管理する必要がなくなり、インフラストラクチャコストの削減と運用の簡素化が実現します。

## 詳細

**新機能について:**
- Amazon OpenSearch Ingestionが、ログ、メトリクス、トレースの3つのOpenTelemetryシグナルをすべて単一のパイプラインで受け入れることができる統合インジェストエンドポイントをサポートするようになりました。
- これまでは、3つのOpenTelemetryデータ型をすべて取り込みたい場合、シグナルタイプごとに3つの別々のパイプラインを作成・管理する必要がありました。
- 単一のパイプラインで、OpenTelemetryシグナルの任意の組み合わせを受け取ることができるようになりました。
- ログ、メトリクス、トレースを一箇所に統合する集約型の可観測性パイプラインを構築できます。
- シグナルの相関関係を簡単に把握でき、アプリケーションの健全性について総合的な見方が可能になります。
- 管理するパイプラインの数を削減でき、インフラストラクチャコストを低減し、アクセス制御、監視、ライフサイクル管理を簡素化できます。
- OpenTelemetryを段階的に採用することが容易になり、1つのシグナルタイプから始めて、パイプラインの再構成なしに他のシグナルを追加できます。
- この統合インジェストエンドポイントは、Amazon OpenSearch Ingestionが現在利用可能なすべてのリージョンでサポートされています。

**このアップデートに適した対象者:**
- 複数のOpenTelemetryシグナルを管理している組織です。
- 大規模に運用されているチームです。
- インフラストラクチャコストを削減したい企業です。
- アクセス制御と監視を簡素化したい運用チームです。
- OpenTelemetryを段階的に導入したいと考えている組織です。
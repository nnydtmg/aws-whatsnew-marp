# Amazon CloudWatch Logs now supports log ingestion using HTTP-based protocol

**カテゴリ:** What's New
**公開日:** 2026-03-16T22:04:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-http-log-collector/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-http-log-collector/)

---

## 要約

Amazon CloudWatch Logsは、HTTPベースのプロトコルを使用したログ取り込みをサポートするようになり、HLC、ND-JSON、Structured JSON、およびOTELの4つの新しいエンドポイントが提供されます。このアップデートは、AWS SDK統合が実行不可能なサードパーティソフトウェアやパッケージソフトウェアからのログ取り込みが必要な組織に特に適しており、ベアラートークン認証によるセキュアな実装が可能です。

## 詳細

- Amazon CloudWatch Logsは、HTTPベースのプロトコルを使用したログ取り込みに対応するようになりました。

- HLC（HTTP Log Collector）、ND-JSON、Structured JSON、およびOTELの4つのエンドポイントが新たに提供されます。

- HLCエンドポイントはJSON形式のイベント用で、既存のログパイプラインの移行に最適です。

- ND-JSONエンドポイントは改行区切りJSON形式で、高ボリュームストリーミングおよびバルクログ取り込みに適しています。

- Structured JSONエンドポイントは単一のJSONオブジェクトまたはJSONオブジェクトの配列を送信できます。

- OpenTelemetry Logsエンドポイントは、JSON形式またはProtobuf形式のOTLP形式ログをCloudWatchに送信できます。

- AWS SDKの統合が実行不可能なサードパーティソフトウェアやパッケージソフトウェアからのログ取り込みが可能になります。

- APIキーはCloudWatch設定から生成でき、1日、5日、30日、90日、または365日の有効期限を設定できます。

- ベアラートークン認証は各ロググループで有効にする必要があり、意図しない取り込みから保護されます。

- サービスコントロールポリシーを使用して、サービス固有の認証情報の作成をブロックできます。

- 現在、米国東部（N. Virginia）、米国西部（N. California）、米国西部（Oregon）、および米国東部（Ohio）のAWSリージョンで利用可能です。
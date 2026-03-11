# Amazon Bedrock now supports observability of First Token Latency and Quota Consumption

**カテゴリ:** What's New
**公開日:** 2026-03-10
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-observability-ttft-quota/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-observability-ttft-quota/)

---

## 要約

Amazon Bedrockは、TimeToFirstTokenおよびEstimatedTPMQuotaUsageという2つの新しいCloudWatchメトリクスをサポートするようになり、推論パフォーマンスとクォータ消費に対する可視性が向上しました。これらのメトリクスにより、ユーザーはレイテンシの監視、SLAベースラインの確立、およびクォータ制限に達する前のプロアクティブなアラーム設定が可能になります。

## 詳細

Amazon Bedrockは、TimeToFirstTokenとEstimatedTPMQuotaUsageという2つの新しいCloudWatchメトリクスをサポートするようになりました。TimeToFirstTokenメトリクスは、ストリーミングAPI（ConverseStreamおよびInvokeModelWithResponseStream）において、リクエスト送信から最初のトークン受信までのレイテンシを測定します。TimeToFirstTokenを使用することで、クライアント側のインストルメンテーションなしにCloudWatchアラームを設定し、レイテンシの低下を監視し、SLAベースラインを確立することができます。EstimatedTPMQuotaUsageメトリクスは、キャッシュ書き込みトークンと出力バーンダウン乗数を含む、すべての推論API（Converse、InvokeModel、ConverseStream、InvokeModelWithResponseStream）全体でのトークン/分（TPM）クォータ消費量を追跡します。EstimatedTPMQuotaUsageを使用することで、クォータ制限に達する前にプロアクティブなアラームを設定し、モデル全体のクォータ消費量を追跡し、使用率制限前にさらなるクォータ増加をリクエストできます。両メトリクスは、すべての商用Bedrockリージョンでサポートされており、正常に完了したリクエストについて1分ごとに更新されます。これらのメトリクスはCloudWatch内でそのまま利用可能であり、APIの変更やオプトインは不要で、消費する基盤となるモデル推論に対してのみ料金が発生します。
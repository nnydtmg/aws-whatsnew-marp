# Amazon EventBridge Scheduler now provides a higher default quota for the CreateSchedule API

**カテゴリ:** What's New
**公開日:** 2026-03-04T16:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/2/eventbridge-default-quota-increase/](https://aws.amazon.com/about-aws/whats-new/2026/2/eventbridge-default-quota-increase/)

---

## 要約

Amazon EventBridge Schedulerの CreateSchedule APIのデフォルトサービスクォータが、11のAWSリージョンで毎秒5,000リクエストに引き上げられました。これにより、高スループットのスケジュール作成ワークロードを持つ顧客は、追加のクォータリクエストなしに大規模な運用が可能になります。

## 詳細

### クォータの引き上げ

- Amazon EventBridge Schedulerの CreateSchedule APIのデフォルトサービスクォータが引き上げられました。
- デフォルトの CreateSchedule リクエストレートクォータは、11のAWSリージョンで毎秒5,000リクエストに設定されました。
- Service Quotas コンソールを通じてリクエストすることで、さらに数万リクエスト/秒まで増加させることができます。

### EventBridge Scheduler の概要

- EventBridge Schedulerは、サーバーレススケジューラであり、インフラストラクチャのプロビジョニングや管理なしに、270以上のAWSサービス全体で数十億のスケジュール済みイベントおよびタスクを作成、実行、管理できます。
- ワンタイムおよび反復スケジュールをサポートしており、cron式、レート式、または特定の時刻を使用して作成でき、タイムゾーンとサマータイム対応があります。

### 影響範囲

- このクォータ増加により、高スループットのスケジュール作成ワークロードを持つ顧客は、クォータ増加をリクエストする必要なく、より大規模で運用できるようになります。
- 新しいクォータへのスケーリングは自動的に行われます。

### 対応リージョン

この更新は、以下の11のリージョンで利用可能です：

- 米国東部（N. バージニア）
- 米国東部（オハイオ）
- 米国西部（オレゴン）
- ヨーロッパ（アイルランド）
- 南米（サンパウロ）
- アジアパシフィック（ムンバイ）
- ヨーロッパ（フランクフルト）
- ヨーロッパ（ロンドン）
- アジアパシフィック（東京）
- アジアパシフィック（シンガポール）
- アジアパシフィック（シドニー）

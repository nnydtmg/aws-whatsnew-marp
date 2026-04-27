# Amazon Quick Automate now provides APIs to trigger and monitor automation jobs

**カテゴリ:** What's New
**公開日:** 2026-04-21
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-quick-automate-api-trigger/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-quick-automate-api-trigger/)

---

## 要約

Amazon Quick Automateは、StartAutomationJobおよびDescribeAutomationJob APIを新たに提供することで、外部アプリケーションから自動化ジョブをプログラムで起動・監視できるようになりました。このアップデートは、自動化開発者やDevOpsエンジニアが既存システムやイベント駆動型アーキテクチャにQuick Automateを統合し、データパイプラインやワークフロー調整、バッチ操作を効率的に実行したい場合に特に有用です。

## 詳細

Amazon Quick Automateは、外部アプリケーションやサービスから自動化ジョブをプログラムで起動・監視するためのAPIを提供するようになりました。StartAutomationJobおよびDescribeAutomationJobという新しいAPIにより、デプロイされた自動化をカスタム入力データで呼び出し、ジョブ完了時に構造化された結果を取得できるようになりました。スケジュール実行を超えて、Quick Automateの機能を拡張することが可能になりました。新規ユーザー登録や注文完了などのアプリケーションイベントに応答して自動化をトリガーできます。型付きスキーマを持つ動的入力パラメータを渡し、出力データをさらに処理に利用できます。データパイプラインへの自動化の組み込み、複数のAWSサービスやサードパーティアプリケーション間のワークフロー調整、単一アプリケーションからの異なる入力パラメータを使用したバッチ操作実行が可能です。この機能はAWS SDKおよびAWS CLIを通じて、Quick Automateが有効になっているすべてのAWSリージョンで利用可能です。対応リージョンには、US East (N. Virginia)、US West (Oregon)、Europe (Dublin)、Europe (London)、Europe (Frankfurt)、Asia Pacific (Tokyo)、Asia Pacific (Sydney)が含まれます。
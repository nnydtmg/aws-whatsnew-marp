# Amazon EventBridge Schedulerが589の新APIアクションとイベントバスターゲットを追加

Amazon EventBridge Scheduler adds 589 new API actions and event bus targets

**カテゴリ:** What's New
**公開日:** 2026-11-20T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions/)

このページでは、AWS What's Newで発表された「Amazon EventBridge Scheduler adds 589 new API actions and event bus targets」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EventBridge Schedulerに589の新しいAPIアクションとカスタムイベントバス向けテンプレートターゲットが追加され、カスタムコードなしでより多くのサービスを直接スケジュールできるようになりました。この機能は幅広いAWSサービスとの統合を求めるお客様に適しております。

## このアップデートで何が変わったか

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRawEvents APIを使ってCustom event busへ直接イベント配信をスケジュールできます。各イベントへのメタデータフィールド追加も容易になりました。例えば、毎夜0時にバスへイベントを送り精算ワークフローを開始させる場合、中間の関数なしでAPIを呼び出せます。新APIアクションはEventBridge Schedulerが利用可能なすべての商用AWSリージョンで利用可能です（ターゲットサ

## 対象ユーザー

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRaw

## 活用シーン

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRaw

## 詳細

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRawEvents APIを使ってCustom event busへ直接イベント配信をスケジュールできます。各イベントへのメタデータフィールド追加も容易になりました。例えば、毎夜0時にバスへイベントを送り精算ワークフローを開始させる場合、中間の関数なしでAPIを呼び出せます。新APIアクションはEventBridge Schedulerが利用可能なすべての商用AWSリージョンで利用可能です（ターゲットサービスのリージョン利用可能性に依存）。Custom event bus向けテンプレートターゲットは拡張版Custom event busが利用可能なすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions/)
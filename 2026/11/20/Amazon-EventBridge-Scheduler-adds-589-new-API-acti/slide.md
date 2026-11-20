---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EventBridge Schedulerが589の新APIアクションとイベントバスターゲットを追加

Amazon EventBridge Scheduler adds 589 new API actions and event bus targets

**What's New** | 2026-11-20T18:00:00

---

## 概要

- Amazon EventBridge Schedulerに589の新しいAPIアクションとカスタムイベントバス向けテンプレートターゲットが追加され、カスタムコードなしでより多くのサービスを直接スケジュールできるようになりました。
- この機能は幅広いAWSサービスとの統合を求めるお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EventBridge Scheduler adds 589 new API actions and event bus targets - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions)

- **What Is Amazon EventBridge? Buses, Rules, Pipes, Scheduler (2026)**
  [詳細](https://encore.dev/articles/what-is-amazon-eventbridge)

- **AWS History and Timeline regarding Amazon EventBridge**
  [...

---

## 変更内容・新機能

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRawEvents APIを使ってCustom event busへ直接イベント配信をスケジュールできます。各イベントへのメタデータフィールド追加も容易になりました。例えば、毎夜0時にバスへイベントを送り精算ワークフローを開始させる場合、中間の関数なしでAPIを呼び出せます。新APIアクションはEventBridge Schedulerが利用可能なすべての商用AWSリージョンで利用可能です（ターゲットサ

---

## ユースケース

Amazon EventBridge SchedulerはAWS SDK統合を589の新しいAPIアクション（81のAWSサービス）で拡張し、拡張版EventBridge Custom event bus向けのテンプレートターゲットを追加しました。カスタム統合コードを書かずに、より幅広いAWSサービスの直接呼び出しをスケジュールできます。EventBridge Schedulerはサーバレススケジューラで、基盤インフラを管理せずに270以上のAWSサービスで数十億件のスケジュール他イベント・タスクを作成・実行・管理できます。新しいテンプレートターゲットでは、PutEventsまたはPutRaw

---

## まとめ

- Amazon EventBridge Scheduler adds 589 new API actions and event bus targets について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions/)

### 関連情報

- [Amazon EventBridge Scheduler adds 589 new API actions and event bus targets - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/eventbridge-scheduler-new-api-actions)
- [What Is Amazon EventBridge? Buses, Rules, Pipes, Scheduler (2026)](https://encore.dev/articles/what-is-amazon-eventbridge)
- [AWS History and Timeline regarding Amazon EventBridge](https://hidekazu-konishi.com/entry/aws_history_and_timeline_amazon_eventbridge.html)
- [Event bus targets in Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html)
- [Amazon EventBridge Scheduler adds 619 new SDK API actions, including Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-sdk-integrations)
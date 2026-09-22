# Amazon ECSコンソールでリアルタイムのデプロイメント可観測性が利用可能に

Amazon ECS now provides real-time deployment observability in the AWS Management Console

**カテゴリ:** What's New
**公開日:** 2026-09-21T20:05:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-console-deployment-observability/)

このページでは、AWS What's Newで発表された「Amazon ECS now provides real-time deployment observability in the AWS Management Console」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSがコンソールでリアルタイムのデプロイメント可観測性を提供するようになりました。Linear、Canary、Blue/Greenデプロイメントを利用するお客様が進捗監視と障害診断を一箇所で行えます。

## このアップデートで何が変わったか

これらの機能は、Amazon ECS ネイティブの Linear、Canary、Blue/Green デプロイタイプを利用するすべての Amazon ECS サービスに対して、追加料金なしですべての AWS 商用リージョンおよび AWS GovCloud (US) リージョンで利用可能です。始めるには、Amazon ECS コンソールで任意の Amazon ECS サービスに移動し、Deployments タブを選択します。

## 詳細

Amazon Elastic Container Service (Amazon ECS) が、ネイティブの Linear、Canary、Blue/Green デプロイメント戦略に対して、Amazon ECS コンソールでリアルタイムのサービスデプロイメント可観測性を提供します。この機能により、デプロイメントの監視とトラブルシューティングがコンソール一箇所に集約され、ツールを切り替えることなくデプロイ進捗の追跡、ヘルス監視、障害診断が可能になります。

リアルタイムのサービスデプロイメント可観測性には、サービスデプロイメントの各フェーズ、サービスイベント、タスク起動・終了の進捗を常に最新状態で表示するライブデプロイタイムラインが含まれます。デプロイが進行するにつれ、ソースリビジョンとターゲットリビジョン間のトラフィックシフト分散を追跡でき、グリーンタスクのスケールアップ、ライフサイクルフック待機、ベーク時間の待機など現在のライフサイクルステージを一目で確認できます。

これまでは別々のツールから収集していたデプロイヘルスシグナルがタイムライン並行に表示されます。サーキットブレーカーの状態（ライブのタスク失敗数としきい値の追跡）、デプロイアラーム状態、コンテナおよびロードバランサーのヘルスチェック、ライフサイクルフックの状態が確認できます。問題が発生した場合、失敗したタスクが診断コンテキストとともにタイムライン上に表示され、AWS CloudTrail などのサービスへのディープリンクが提供されるため、根本原因を素早く特定して対応できます。

これらの機能は、Amazon ECS ネイティブの Linear、Canary、Blue/Green デプロイタイプを利用するすべての Amazon ECS サービスに対して、追加料金なしですべての AWS 商用リージョンおよび AWS GovCloud (US) リージョンで利用可能です。始めるには、Amazon ECS コンソールで任意の Amazon ECS サービスに移動し、Deployments タブを選択します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-console-deployment-observability/)
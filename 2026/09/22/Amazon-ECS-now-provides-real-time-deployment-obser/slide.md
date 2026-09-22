---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECSコンソールでリアルタイムのデプロイメント可観測性が利用可能に

Amazon ECS now provides real-time deployment observability in the AWS Management Console

**What's New** | 2026-09-21T20:05:00

---

## 概要

- Amazon ECSがコンソールでリアルタイムのデプロイメント可観測性を提供するようになりました。
- Linear、Canary、Blue/Greenデプロイメントを利用するお客様が進捗監視と障害診断を一箇所で行えます。

---

## 前提・背景

### これまでの課題

これまでは別々のツールから収集していたデプロイヘルスシグナルがタイムライン並行に表示されます。サーキットブレーカーの状態（ライブのタスク失敗数としきい値の追跡）、デプロイアラーム状態、コンテナおよびロードバランサーのヘルスチェック、ライフサイクルフックの状態が確認できます。問題が発生した場合、失敗したタスクが診断コンテキストとともにタイムライン上に表示され、AWS CloudTrail などのサービスへのディープリンクが提供されるため、根本原因を素早く特定して対応できます。

---

### 関連する最近の動向

- **Amazon ECS now provides real-time deployment observability in the AWS Management Console - AWS**
  [詳細](https://aws.amazon...

---

## 変更内容・新機能

これらの機能は、Amazon ECS ネイティブの Linear、Canary、Blue/Green デプロイタイプを利用するすべての Amazon ECS サービスに対して、追加料金なしですべての AWS 商用リージョンおよび AWS GovCloud (US) リージョンで利用可能です。始めるには、Amazon ECS コンソールで任意の Amazon ECS サービスに移動し、Deployments タブを選択します。

---

## まとめ

- Amazon ECS now provides real-time deployment observability in the AWS Management Console について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-console-deployment-observability/)

### 関連情報

- [Amazon ECS now provides real-time deployment observability in the AWS Management Console - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-console-deployment-observability/)
- [Amazon ECS now provides Action Logs for deployment and orchestration visibility](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-action-logs)
- [Amazon ECS deployment observability for Amazon ECS Managed Daemons](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-daemon-deployment-console)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS のリアルタイムデプロイメント可視化が AWS Management Console で利用可能に

Amazon ECS now provides real-time deployment observability in the AWS Management Console

**What's New** | 2026-07-01

---

## 概要

- Amazon ECS コンソールにリアルタイムデプロイメント可視化機能が追加され、デプロイメント進捗の監視、健全性確認、障害診断がコンソール上で直接実施できるようになりました。
- この機能は追加料金なしで、すべてのAWSコマーシャルリージョンおよびAWS GovCloud(US)リージョンで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS now provides real-time deployment observability in ...**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console)

- **Amazon ECS Real-Time Deployment Observability in AWS Console**
  [詳細](https://mwpro.co.uk/blog/2026/07/02/amazon-ecs-now-provides-real-time-deployment-observability-in-the-aws-management-console)

- **Amazon ECS Container Insights with enhanced observability metrics**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-enhanced-observability-metrics-ECS.html)

---

## 変更内容・新機能

- Amazon ECS コンソールにリアルタイムデプロイメント可視化機能が追加されました。
- デプロイメントの進捗状況をトラッキングし、デプロイメントの健全性を監視し、コンソールから直接障害を診断できるようになりました。
- ライブデプロイメントタイムラインにより、各フェーズ、サービスイベント、タスク起動・終了の進捗を自動更新で表示します。
- サーキットブレーカーステータス、ライブタスク障害の近接性と閾値追跡、デプロイメントアラーム状態、コンテナおよびロードバランサーレベルのヘルスチェックでデプロイメント健全性をリアルタイム監視できます。
- 失敗したタスクをデプロイメントタイムラインで直接表示し、AWS CloudTrailなどの関連サービスへのディープリンクにより、複数のツール間での移動を減らして根本原因の特定が迅速になります。
- この機能は追加料金なしで、すべてのAWSコマーシャルリージョンおよびAWS GovCloud(US)リージョンで利用可能です。
- ローリングアップデートデプロイメントタイプを使用するすべてのAmazon ECSサービスに対応しています。

---

## 効果・メリット

- **運用効率の向上**: コンソール上で直接デプロイメント進捗を監視し、別のツール間での移動が不要に
- **トラブルシューティングの高速化**: 失敗したタスク情報とディープリンクにより根本原因の特定が迅速化
- **健全性監視の強化**: リアルタイムでサーキットブレーカー状態、ヘルスチェック結果を確認可能
- **コスト最適化**: 追加料金なしで利用可能
- **グローバル対応**: すべてのAWSコマーシャルリージョンおよびAWS GovCloud(US)で利用可能

---

## ユースケース

### 1. デプロイメント進捗のリアルタイム監視
ライブデプロイメントタイムラインで各フェーズ、サービスイベント、タスク起動・終了の進捗を自動更新で表示

### 2. 障害の迅速な診断
失敗したタスク情報を直接表示し、AWS CloudTrailなどへのディープリンクから根本原因を特定

### 3. デプロイメント健全性の継続的監視
サーキットブレーカーステータス、タスク障害、デプロイメントアラーム、ヘルスチェック状態を一箇所で確認

---

## まとめ

- Amazon ECS コンソールにリアルタイムデプロイメント可視化機能が追加されました
- デプロイメント進捗の監視、健全性確認、障害診断がコンソール上で直接実施可能に
- 追加料金なしで全AWSコマーシャルリージョンおよびAWS GovCloud(US)で利用可能
- ローリングアップデートデプロイメント使用時に効果を発揮

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console/)

### 関連情報

- [Amazon ECS now provides real-time deployment observability in ...](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console)
- [Amazon ECS Real-Time Deployment Observability in AWS Console](https://mwpro.co.uk/blog/2026/07/02/amazon-ecs-now-provides-real-time-deployment-observability-in-the-aws-management-console)
- [Amazon ECS Container Insights with enhanced observability metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-enhanced-observability-metrics-ECS.html)
- [Gradual deployments in Amazon ECS with linear and canary ... - AWS](https://aws.amazon.com/blogs/containers/gradual-deployments-in-amazon-ecs-with-linear-and-canary-strategies)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
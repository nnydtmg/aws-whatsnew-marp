# Amazon ECS でデプロイメントサーキットブレーカー設定がカスタマイズ可能に

Amazon ECS now supports configurable deployment circuit breaker settings

**カテゴリ:** What's New
**公開日:** 2026-07-01T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-circuit-breaker-settings/)

このページでは、AWS What's Newで発表された「Amazon ECS now supports configurable deployment circuit breaker settings」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECS のデプロイメント サーキット ブレーカーがカスタマイズ可能になり、アプリケーションのスタートアップ動作やデプロイメント要件に応じて、失敗しきい値と失敗カウント方法を柔軟に設定できるようになりました。これにより、開発環境から本番環境まで、様々なアプリケーションと環境に対応した適切なロールバック戦略を実装することが可能になります。

## このアップデートで何が変わったか

- Amazon ECS のデプロイメント サーキット ブレーカー設定がカスタマイズ可能になりました。
- 固定タスク失敗数またはサービスの希望タスク数に対するパーセンテージを使用して、しきい値を設定できるようになりました。
- 連続モデル（健全なタスクが開始されるとカウンターがリセット）または累積モデル（デプロイメント全体を通じて失敗が加算される）から失敗カウント方法を選択できます。
- 開発環境やテスト環境では低いしきい値で高速なロールバックが可能になり、スタートアップ失敗が予想されるアプリケーションではより高い許容度を設定できます。
- AWS Management Console、AWS CLI、AWS SDK、AWS CloudFormation、AWS CDK、Terraform を使用して、新規および既存の ECS サービスに対してこの機能を設定できます。
- この機能は Amazon ECS が利用可能なすべての AWS リージョンで利用可能です。

## 対象ユーザー

- Amazon ECS ユーザー
- マイクロサービス/コンテナ環境でのデプロイメント自動化を行っている組織
- 本番環境でのロールバック戦略を最適化したい企業
- CI/CDパイプラインを運用している開発チーム

## 詳細

### しきい値設定の柔軟性

- **固定タスク失敗数**: 失敗したタスク数に基づいて設定可能
- **パーセンテージ**: 希望タスク数に対するパーセンテージで設定可能

### 失敗カウント方法の選択

- **連続モデル**: 健全なタスクが開始されるとカウンターがリセット（部分的な回復を許可）
- **累積モデル**: デプロイメント全体を通じて失敗が加算される（厳密な失敗検出）

### 環境別の最適化

- **開発・テスト環境**: 低いしきい値で高速なロールバック
- **本番環境**: より高い許容度でユーザーへの影響を最小化
- **スタートアップ失敗が予想されるアプリケーション**: より高い許容度を設定

### 設定方法

複数の方法で新規・既存のECSサービスに対して設定可能：
- AWS Management Console
- AWS CLI
- AWS SDK
- AWS CloudFormation
- AWS CDK
- Terraform

### グローバル対応

この機能は Amazon ECS が利用可能なすべての AWS リージョンで利用可能

## メリット

### 信頼性向上
- 失敗したデプロイメントの自動ロールバック
- 手動介入の削減
- 予測不可能なダウンタイムの防止

### 運用効率改善
- 環境ごとに最適な設定が可能
- 柔軟なロールバック戦略の実装
- 本番環境での信頼性向上

### 開発生産性向上
- 開発環境での快速なロールバック
- テスト環境での安定したデプロイメント
- CI/CDパイプラインの自動化促進

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-circuit-breaker-settings/)
- [How to Configure Deployment Circuit Breaker in ECS](https://oneuptime.com/blog/post/2026-02-12-deployment-circuit-breaker-ecs/view)
- [How the Amazon ECS deployment circuit breaker detects ...](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html)
- [DeploymentCircuitBreaker API Reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html)
- [ServiceDeploymentCircuitBreaker API Reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceDeploymentCircuitBreaker.html)
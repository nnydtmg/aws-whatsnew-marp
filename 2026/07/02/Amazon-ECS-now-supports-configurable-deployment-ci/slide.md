---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS でデプロイメントサーキットブレーカー設定がカスタマイズ可能に

Amazon ECS now supports configurable deployment circuit breaker settings

**What's New** | 2026-07-01T17:00:00

---

## 概要

- Amazon ECS のデプロイメント サーキット ブレーカーがカスタマイズ可能になり、アプリケーションのスタートアップ動作やデプロイメント要件に応じて、失敗しきい値と失敗カウント方法を柔軟に設定できるようになりました。
- これにより、開発環境から本番環境まで、様々なアプリケーションと環境に対応した適切なロールバック戦略を実装することが可能になります。

---

## 前提・背景

### デプロイメント サーキット ブレーカーとは

- サービスデプロイが失敗した場合に、自動的に前の安定版へロールバックする機能
- 本番環境でのダウンタイムを最小化し、信頼性を向上させる
- これまでは固定的な設定のみが可能だった

### 関連する最近の動向

- **How to Configure Deployment Circuit Breaker in ECS**
  [詳細](https://oneuptime.com/blog/post/2026-02-12-deployment-circuit-breaker-ecs/view)

- **How the Amazon ECS deployment circuit breaker detects ...**
  [詳細](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html)

---

## 変更内容・新機能

### しきい値設定の柔軟性

- **固定タスク失敗数**: 失敗したタスク数に基づいて設定
- **パーセンテージ**: 希望タスク数に対するパーセンテージで設定

### 失敗カウント方法の選択

- **連続モデル**: 健全なタスクが開始されるとカウンターがリセット
- **累積モデル**: デプロイメント全体を通じて失敗が加算される

### 環境別の最適化

- 開発環境やテスト環境では低いしきい値で高速なロールバックが可能
- スタートアップ失敗が予想されるアプリケーションではより高い許容度を設定可能

---

## 設定方法

### 対応ツール・方法

- **AWS Management Console**: GUIから直感的に設定
- **AWS CLI**: コマンドラインからの設定
- **AWS SDK**: プログラマティックな設定
- **AWS CloudFormation**: インフラストラクチャ as Code
- **AWS CDK**: Infrastructure as Code (CDK)
- **Terraform**: マルチクラウド対応のIaC

### 対象

- 新規サービス作成時
- 既存のECSサービスの設定変更時

---

## 効果・メリット

### デプロイメント信頼性の向上

- 失敗したデプロイメントの自動ロールバック
- 手動介入の削減
- 予測不可能なダウンタイムの防止

### 運用効率の改善

- 環境ごとに最適な設定が可能
- 柔軟なロールバック戦略の実装
- 本番環境での信頼性向上

### 開発生産性の向上

- 開発環境での快速なロールバック
- テスト環境での安定したデプロイメント
- CI/CDパイプラインの自動化促進

---

## ユースケース

### 開発環境・ステージング環境

- 低いしきい値を設定して、失敗時に素早くロールバック
- スタートアップ失敗が多いアプリケーションでは累積モデルを使用

### 本番環境

- より高い許容度でユーザーへの影響を最小化
- 連続モデルを使用して、部分的な回復を許可

### マイクロサービス環境

- サービスごとに異なるしきい値を設定
- 環境と要件に応じた柔軟な制御

---

## まとめ

### 主なポイント

- Amazon ECS のデプロイメント サーキット ブレーカーがカスタマイズ可能に
- 固定値またはパーセンテージでしきい値を設定可能
- 連続モデルと累積モデルから失敗カウント方法を選択可能
- 複数の設定方法に対応

### 次のステップ

1. 各環境（開発、ステージング、本番）でのしきい値を検討
2. 失敗カウント方法（連続 vs 累積）を決定
3. パイロットプロジェクトで検証
4. 本番環境へのロールアウト

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-circuit-breaker-settings/)

### 関連情報

- [How to Configure Deployment Circuit Breaker in ECS](https://oneuptime.com/blog/post/2026-02-12-deployment-circuit-breaker-ecs/view)
- [How the Amazon ECS deployment circuit breaker detects ...](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html)
- [DeploymentCircuitBreaker API Reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html)
- [ServiceDeploymentCircuitBreaker API Reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceDeploymentCircuitBreaker.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
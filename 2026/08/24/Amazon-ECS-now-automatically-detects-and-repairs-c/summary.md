# Amazon ECS、エージェント接続の自動修復機能が利用可能に

Amazon ECS now automatically detects and repairs container instances with impaired agent connectivity

**カテゴリ:** What's New  
**公開日:** 2026-08-24  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-agent-connectivity-health)

---

## 要約

Amazon ECS は、コンテナインスタンスのエージェント接続の問題を自動的に検出・修復する新機能を提供することで、お客様が手動介入なしにワークロード障害を削減し、アプリケーション可用性を向上させることができるようになりました。この機能は、AWS Fargate と ECS Managed Instances では自動復旧が実行され、ECS on EC2 ではヘルスチェンジイベントを活用したカスタムワークフロー駆動が可能です。

---

## このアップデートで何が変わったか

### 新機能: AGENT_CONNECTIVITY ヘルスチェンジイベント

- **自動検出**: EBS ボリュームの劣化、ホストの熱イベント、ネットワーク接続障害などを自動的に検出
- **全コンピュートオプション対応**: AWS Fargate、Amazon ECS Managed Instances、Amazon ECS on EC2 で利用可能
- **自動復旧メカニズム**:
  - AWS Fargate / ECS Managed Instances: ECS が自動的に復旧を実行
  - Amazon ECS on EC2: ヘルスチェンジイベントを活用したカスタムワークフロー駆動が可能

### コンピュートオプション別の動作

#### AWS Fargate / ECS Managed Instances
- ECS が自動的に復旧を実行
- 実行中のタスクを自動的にドレイン
- 代替容量を起動
- 障害のあるインスタンスを登録解除

#### Amazon ECS on EC2
- ヘルスチェンジイベントを活用してカスタムワークフローを駆動
- インスタンス置換ワークフローの実装が可能
- ユーザーが復旧プロセスを制御可能

---

## メリット

### 運用効率の改善
- **手動介入を削減**: インスタンス置換の自動化
- **迅速な復旧**: インフラ障害からの素早い復帰
- **ワークロード保護**: 実行中のタスクを安全にドレイン

### ビジネス効果
- **アプリケーション可用性向上**: サービスダウンを最小化
- **信頼性向上**: エンタープライズレベルのレジリエンス
- **コスト削減**: 障害対応の自動化で人的コストを削減

---

## 利用条件

- **対象リージョン**: すべての AWS Commercial リージョンおよび AWS GovCloud (US) リージョン
- **追加コスト**: なし（既存のAmazon ECS料金内で利用可能）

---

## ユースケース

### マイクロサービスアーキテクチャ
- 複数のECSサービスを管理
- インフラ障害時の自動フェイルオーバー
- サービス継続性の確保

### ミッションクリティカルなアプリケーション
- 金融取引システム
- 医療システム
- リアルタイムデータ処理

### DevOps 運用の効率化
- アラートに基づく手動対応が不要
- 障害復旧を完全自動化
- 運用チームの他タスクへのリソース割当

---

## 参考リソース

- [元記事 - AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-agent-connectivity-health)
- [Amazon ECS のタスクヘルスチェック - AWS ドキュメント](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/healthcheck.html)
- [ECS Agent Disconnection & Host Replacement Issues - AWS Repost](https://repost.aws/questions/QU5ztZpnS1R_upX0F_Ra42qA/ecs-agent-disconnection-host-replacement-issues)
- [Amazon ECS Service Connect - AWS ブログ](https://aws.amazon.com/blogs/aws/new-amazon-ecs-service-connect-enabling-easy-communication-between-microservices)
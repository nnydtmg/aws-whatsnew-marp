---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon ECS、エージェント接続の自動修復機能が利用可能に

**発表日: 2026年8月24日**

---

## 概要

- **自動検出・修復**: コンテナインスタンスのエージェント接続の問題を自動的に検出・修復
- **手動介入を削減**: お客様が手動介入なしにワークロード障害を削減
- **アプリケーション可用性向上**: 可用性とレジリエンスを大幅に改善
- **複数のコンピュートオプション対応**: AWS Fargate、ECS Managed Instances、ECS on EC2 で利用可能

---

## 前提・背景

### インフラストラクチャ障害のリスク

- **EBS ボリュームの劣化**: ストレージ障害による接続断
- **ホストの熱イベント**: ハードウェア過熱による予期しない停止
- **ネットワーク接続障害**: ネットワーク問題による接続断

### 従来の課題

- 手動でインスタンス置換を実行する必要があった
- エージェント接続断の検出に時間がかかる
- 自動復旧メカニズムが存在しない

---

## 主な機能

### AGENT_CONNECTIVITY ヘルスチェンジイベント

- 新しいコンテナインスタンスヘルスチェンジイベントが利用可能
- AWS Fargate、Amazon ECS Managed Instances、Amazon ECS on EC2 のすべてのコンピュートオプションで対応

### コンピュートオプション別の動作

<div class="columns">
<div>

#### AWS Fargate / ECS Managed Instances

- ECS が自動的に復旧を実行
- 実行中のタスクを自動的にドレイン
- 代替容量を起動
- 障害インスタンスを登録解除

</div>
<div>

#### Amazon ECS on EC2

- ヘルスチェンジイベントを活用
- カスタムワークフロー駆動が可能
- インスタンス置換ワークフロー連携
- ユーザーが制御可能

</div>
</div>

---

## 効果・メリット

### 運用負荷の削減

- **自動化**: 手動介入なしに自動復旧を実行
- **迅速な復旧**: インフラ障害からの素早い復帰
- **ワークロード保護**: 実行中のタスクを安全にドレイン

### ビジネス効果

- **アプリケーション可用性向上**: サービスダウンを最小化
- **信頼性向上**: エンタープライズレベルのレジリエンス
- **コスト効率**: 障害対応の自動化で人的コストを削減

---

## 利用可能なリージョン

- ✅ すべての AWS Commercial リージョン
- ✅ AWS GovCloud (US) リージョン
- ✅ **追加コストなし**

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

## まとめ

### Amazon ECS の進化

- エージェント接続管理が完全自動化に
- インフラ障害への自動対応メカニズム
- エンタープライズレベルの信頼性向上

### 次のステップ

1. AWS 公式ドキュメントで詳細を確認
2. 既存のECSクラスタで機能を有効化
3. ヘルスチェンジイベントを監視設定に追加

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-agent-connectivity-health
- **Amazon ECS ドキュメント**: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/healthcheck.html
- **ECS Agent Disconnection 対応ガイド**: https://repost.aws/questions/QU5ztZpnS1R_upX0F_Ra42qA/ecs-agent-disconnection-host-replacement-issues
- **Amazon ECS Service Connect**: https://aws.amazon.com/blogs/aws/new-amazon-ecs-service-connect-enabling-easy-communication-between-microservices

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
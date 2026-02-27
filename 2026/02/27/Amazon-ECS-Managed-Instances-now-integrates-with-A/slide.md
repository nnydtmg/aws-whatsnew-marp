---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon ECS Managed Instances
EC2 Capacity Reservations との統合

**発表日: 2026年2月26日**

---

## 概要

- **Amazon ECS Managed Instances** が **Amazon EC2 Capacity Reservations** と統合
- 予約済み容量を活用しながら、ECS が自動的にインフラストラクチャ管理を実行
- 予測可能な容量確保とコスト効率のバランスを実現
- ミッションクリティカルなワークロードの高可用性を実現

---

## 前提・背景

### 市場の課題

- コンテナワークロードの予測可能な容量確保が困難
- 容量予約とコスト最適化のトレードオフ
- インフラストラクチャ管理の手作業による負担
- ミッションクリティカルなアプリケーションの信頼性要求

### Amazon ECS の進化

- **Managed Instances**: 自動スケーリングと最適化機能を提供
- **European Sovereign Cloud への拡大**: グローバル対応の強化
- **Spot 中断メトリクス**: より詳細な監視機能
- 予約容量との統合による選択肢の拡大

---

## 主な新機能

### capacityOptionType パラメータの追加

| オプション | 説明 | ユースケース |
|-----------|------|----------|
| **reserved** | 予約と既存のSpot/On-Demandを組み合わせ | 標準的な運用 |
| **reservations-only** | 予約容量のみを使用 | 最大の予測可能性が必要 |
| **reservations-first** | 予約を優先、フォールバック対応 | コスト効率性が重要 |
| **reservations-excluded** | 予約を使用しない | 柔軟なスケーリング |

---

## 設定方法

### 利用可能なインターフェース

- **AWS Management Console**
  コンソール画面から直感的に設定

- **AWS CLI**
  スクリプトによる自動化が可能

- **AWS CloudFormation**
  Infrastructure as Code による管理

- **AWS SDKs**
  プログラマティックな制御

---

## 効果・メリット

### コスト最適化

- **予約容量の活用**: オンデマンドよりも最大 30% コスト削減
- **スポットインスタンスの併用**: さらなるコスト最適化
- **キャパシティプールの統合**: 効率的なリソース活用

### 運用効率化

- **自動スケーリング**: ECS による全自動管理
- **タスク配置最適化**: 継続的な最適化による効率向上
- **管理負荷の削減**: インフラ運用のオーバーヘッド軽減

### 信頼性向上

- **予測可能な容量確保**: ミッションクリティカルなワークロード対応
- **高可用性実現**: 容量不足による障害を防止
- **SLA 要件の達成**: コンテナの安定稼働を保証

---

## ユースケース

### 金融サービス

- 取引システムの安定稼働
- 予測可能な容量確保と コスト最適化

### e-コマース

- ピークシーズンの需要変動対応
- 予約と スポット の組み合わせによる効率化

### 大規模データ処理

- バッチ処理の確実な実行
- 予約容量 による実行保証

---

## 利用開始方法

### ステップ 1: 計画立案

1. 現在のワークロードパターンを分析
2. 容量ニーズを予測
3. 予約容量の適正規模を決定

### ステップ 2: 設定実施

1. EC2 Capacity Reservations を作成
2. ECS 容量プロバイダーで `capacityOptionType` を設定
3. テスト環境で動作確認

### ステップ 3: 本番導入

1. 段階的なロールアウト
2. 監視とアラート設定
3. コスト削減効果の測定

---

## まとめ

### キーポイント

- **統合**: ECS と EC2 Capacity Reservations の統合により新たな選択肢を提供
- **柔軟性**: 4 つの capacityOptionType で多様なユースケースに対応
- **効率化**: 自動管理によるインフラ運用負荷の軽減
- **可用性**: ミッションクリティカルなワークロードの信頼性向上

### 対象組織

- ✅ 予測可能な容量が必要な企業
- ✅ コスト最適化を重視する企業
- ✅ ミッションクリティカルなアプリケーション運用企業
- ✅ インフラ管理人数を削減したい企業

### 次のステップ

1. 現在のワークロード分析を実施
2. 容量予約戦略の見直し
3. パイロットプロジェクトの立案

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/ecs-mi-ec2-capacity-reservations/
- **Amazon ECS Managed Instances（ユーロピアン主権クラウド）**: https://aws.amazon.com/about-aws/whats-new/2026/02/ecs-mi-european-sovereign-cloud/
- **EC2 Capacity Reservations ガイド**: https://oneuptime.com/blog/post/2026-02-12-configure-ec2-capacity-reservations/view
- **EC2 キャパシティマネージャー**: https://aws.amazon.com/about-aws/whats-new/2026/01/ec2-capacity-manager-spot-interruption-metrics/
- **ECS Managed Instances 監視**: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/update-capacity-provider-managed-instances.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
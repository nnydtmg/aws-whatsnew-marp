---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS Capabilities が Amazon CloudWatch Vended Logs をサポート

Amazon EKS Capabilities now supports Amazon CloudWatch Vended Logs

**発表日: 2026年6月4日**

---

## 概要

### このアップデートの3つのポイント

- **統合ログ配信**: Argo CD、ACK、kro などのマネージドコントローラーのログを一元管理
- **複数の配信先対応**: CloudWatch Logs、Amazon S3、Kinesis Data Firehose に配信可能
- **追加料金なし**: EKS の既存コストに変更なし、CloudWatch Vended Logs の割引料金が適用

---

## 前提・背景

### EKS Capabilities とは

- Amazon EKS のマネージドコントローラー機能
- Argo CD、AWS Controllers for Kubernetes（ACK）、kro などの主要コンポーネントを含む
- エンタープライズレベルの Kubernetes 運用に対応

### ログ管理の課題

- 複数のコントローラーから生成されるログの分散
- 監視とトラブルシューティングの複雑化
- ログ集約の手動構築が必要

### CloudWatch Vended Logs とは

- AWS サービスが発行するネイティブログ
- 体積割引価格で標準 CloudWatch Logs より低コスト
- AWS 認証・認可が組み込まれたセキュアな配信

---

## 変更内容・新機能

### ログ配信ソースの設定

- Amazon EKS Capabilities を CloudWatch Vended Logs の配信ソースとして設定可能
- CloudWatch API または AWS コンソールから簡単に有効化

### 対応するコントローラー

- **Argo CD**: Git ベースの CD ツール
- **ACK（AWS Controllers for Kubernetes）**: AWS サービス管理
- **kro（Kubernetes Resource Orchestrator）**: リソースオーケストレーション

### 配信先の選択肢

<div class="columns-3">
<div>

#### CloudWatch Logs
- リアルタイム分析
- Dashboard/Alarm

</div>
<div>

#### Amazon S3
- 長期保管
- 低コスト アーカイブ

</div>
<div>

#### Kinesis Data Firehose
- ストリーミング処理
- リアルタイム分析

</div>
</div>

---

## 利用方法

### ステップ 1: ログ配信の有効化

```
AWS コンソール → EKS → Capabilities → ログ配信設定
または
CloudWatch API → CreateLogDeliverySource
```

### ステップ 2: 配信先の選択

- 各 Capability ごとに独立して設定可能
- CloudWatch Logs、S3、Firehose から選択

### ステップ 3: ログの確認

- CloudWatch Logs: リアルタイム表示、Insights で分析
- S3: オブジェクトとしてアクセス
- Firehose: ストリーム処理

---

## 利点・メリット

### 監視の強化

- **包括的なログ**: すべてのマネージドコントローラーのログを一元管理
- **即座なトラブルシューティング**: Argo CD、ACK、kro の問題を迅速に特定
- **監査ログ**: コンプライアンス要件への対応

### コスト最適化

- **追加 EKS 料金なし**: 既存の EKS コストに追加費用なし
- **Vended Logs 割引**: 標準 CloudWatch Logs より約 50% 低いコスト
- **複数配信先対応**: S3 での長期保管でさらにコスト削減

### 運用の効率化

- **一元管理**: 複数のコントローラーのログを 1 つのダッシュボードで管理
- **自動化対応**: CloudWatch API で自動設定が可能
- **セキュリティ統合**: AWS IAM による統一的なアクセス制御

---

## ユースケース

### 1. マルチテナント環境の監視

複数の Capability を運用する場合、各コントローラーのログを CloudWatch で一元管理し、テナント別に Insights で分析。

### 2. コンプライアンス監査

Argo CD のデプロイ履歴、ACK のリソース変更、kro のオーケストレーション結果を監査ログとして S3 に保存。

### 3. インシデント対応

Capability で障害が発生した場合、CloudWatch Logs でリアルタイムにログを確認し、Firehose で SIEM に統合。

---

## 技術仕様

| 項目 | 詳細 |
|-----|------|
| **対応リージョン** | EKS Capabilities がサポートされているすべてのリージョン |
| **料金モデル** | 標準的な CloudWatch Vended Logs 料金（配信先で異なる） |
| **配信遅延** | Best effort（通常数分以内） |
| **ログ形式** | JSON（CloudWatch Logs）、圧縮テキスト（S3） |
| **暗号化** | AWS 管理キー（デフォルト）、カスタマーマネージドキーに対応 |

---

## まとめ

### 主な改善点

- EKS Capabilities のマネージドコントローラーのログを **CloudWatch Vended Logs として一元管理** 可能に
- **CloudWatch Logs、S3、Kinesis Data Firehose** の 3 つの配信先に対応
- **追加 EKS 料金なし** で、Vended Logs の割引料金が適用

### 推奨される対応

- EKS Capabilities を使用している環境で即座に有効化
- CloudWatch Insights で関連ダッシュボードを作成
- IAM ポリシーでアクセス制御を設定

### 次のステップ

1. 自社の EKS Capabilities 環境でログ配信を有効化
2. 配信先（CloudWatch/S3/Firehose）を検討
3. CloudWatch Dashboard でのモニタリング・分析を開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-capabilities-logging
- **Amazon EKS ドキュメント**: https://docs.aws.amazon.com/eks/
- **CloudWatch Vended Logs**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
- **EKS Capabilities**: https://docs.aws.amazon.com/eks/latest/userguide/capabilities.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
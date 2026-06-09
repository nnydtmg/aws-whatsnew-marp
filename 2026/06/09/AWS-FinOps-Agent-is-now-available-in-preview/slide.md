---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS FinOps Agent がプレビューで利用可能に

AWS FinOps Agent is now available in preview

**What's New** | 2026-06-09T15:28:00

---

## 概要

- AWS FinOps Agent は、FinOps 実践者とエンジニアリングチームがコスト管理と最適化を効率的に行うための AI エージェントサービスであり、コスト分析、異常検知、自動調査、ワークフロー自動化などの機能を備えています。
- このサービスは、クラウドコストの可視化と最適化を求める組織にとって有益なツールとなります。

---

## 前提・背景

### 市場の動向と課題

- クラウドコスト管理の複雑化
- FinOps 実践者の業務負担の増加
- AI を活用した自動化ソリューションへの需要

### 関連する最近の動向

- **Amazon Bedrock AgentCore** を活用した FinOps エージェント構築
- **FinOps X 2026** での新しい AWS FinOps 機能の発表
- AWS re:Invent 2025 での AI for FinOps の重点化

---

## 主な機能

### コスト管理・分析機能

- **コスト関連の質問への回答**: 自然言語でコストに関する質問に即座に対応
- **レポート生成**: AWS コストと使用状況データに基づくカスタムレポート
- **最適化機会の提示**: コスト削減の可能性を自動提示

### 異常検知・調査機能

- **コスト異常の検出**: 異常なコスト変動を自動検知
- **根本原因の自動調査**: 異常の原因を特定・分析
- **Slack チャネルへの投稿**: 調査結果を直接共有

### 推奨事項と自動化

- **ライトサイジング推奨**: AWS Compute Optimizer との連携
- **アイドルリソース識別**: 未使用リソースの自動検出
- **Savings Plans 推奨**: 購入最適化の提案
- **Jira チケット自動作成**: 対応タスクの自動化

---

<!-- _class: small -->

## 利用可能なリージョンと対応範囲

### デプロイ リージョン

- **現在の提供リージョン**: US East (N. Virginia)

### データ対応範囲

- **対応**: AWS GovCloud と AWS China リージョン **以外**のすべての AWS リージョンのコストデータ
- **カバレッジ**: グローバル規模でのコスト分析が可能

### 料金

- **プレビュー期間**: 追加料金なし

---

## 効果・メリット

### FinOps 実践者へのメリット

- **業務効率化**: 手動分析作業の削減
- **迅速な対応**: リアルタイムのコスト異常検知
- **データドリブン**: 客観的な最適化データに基づく意思決定

### エンジニアリングチームへのメリット

- **コスト意識の向上**: リソース利用の透明性向上
- **自動化**: ワークフローの自動実行
- **統合性**: Jira/Slack との連携で既存ツールとのシームレス統合

---

## ユースケース

### 企業規模別の活用シーン

#### スタートアップ・小規模企業

- コスト最適化の初期段階でのコスト削減
- 限られたリソースでの効率的なコスト管理

#### 中規模企業

- 複数チーム間のコスト配分と責任管理
- 定期的なコスト異常検知と対応自動化

#### エンタープライズ

- グローバル規模でのコスト可視化と最適化
- 組織横断的なコスト管理ワークフローの自動化

---

## まとめ

### AWS FinOps Agent の位置づけ

- FinOps 実践者とエンジニアリングチームのための新しい AI エージェント
- コスト管理・最適化を自動化・効率化
- クラウドコストの可視化と削減を実現

### 次のステップ

1. **プレビュー利用の申請**: US East (N. Virginia) でアクセス開始
2. **評価・テスト**: 自社のコスト管理シナリオで試用
3. **ワークフロー統合**: Jira/Slack との連携設定
4. **本番運用**: 組織全体への展開を検討

---

## 参考リソース

- **AWS What's New**: [AWS FinOps Agent is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-finops-agent-preview/)

### 関連情報

- [Build a FinOps agent using Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-finops-agent-using-amazon-bedrock-agentcore)
- [Join us at FinOps X 2026: Your Guide to All Things AWS](https://aws.amazon.com/blogs/aws-cloud-financial-management/join-us-at-finops-x-2026-your-guide-to-all-things-aws)
- [AWS re:Invent 2025 FinOps Updates](https://www.finops.org/insights/aws-reinvent-2025-finops-updates)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
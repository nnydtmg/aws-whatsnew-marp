---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch がコーディングエージェント分析機能を発表

AIコーディングエージェントの導入効果を可視化

**発表日: 2026年7月20日**

---

## 概要

### Coding Agent Insights の3つの主要特徴

- **利用状況の可視化**: Claude Code、Codex、GitHub Copilotなどのコーディングエージェントからテレメトリーを自動収集
- **ROI分析**: チームごとのアクセス拡大、デリバリー加速、トークン予算の最適化を可視化
- **コスト最適化**: 各モデルのコスト対出力比率を特定し、ワークロードに最適なモデルを選択

### テレメトリー収集の方法

- **追加計装不要**: 既存のCloudWatchで自動統合
- **OpenTelemetry対応**: 標準メトリクスに基づいた実装
- **既存データとの統合**: 既存のCloudWatchオペレーショナルデータと並行表示

---

## 前提・背景

### 市場の課題

- AIコーディングエージェント導入の急速な増加
- エンタープライズ組織での採用効果の測定が困難
- トークン予算管理とコスト最適化の必要性
- チーム別の利用状況把握が不十分

### 関連する最近の動向

- AWS Summit NYC 2026での新AI agent innovations発表
- Amazon Bedrock AgentCore を中心としたエージェント機能の拡充
- クラウド環境でのAIエージェント運用の複雑性増加
- 生成AI可視化（GenAI observability）需要の急速な成長

---

## 主な機能と改善

### 1. 包括的なテレメトリー収集

- Claude Code、Codex、GitHub Copilot など主要なコーディングエージェントをサポート
- 追加の計装やSDK統合なしに自動的にテレメトリーを収集
- OpenTelemetryメトリクスに基づいた標準化された実装

### 2. 詳細な分析ダッシュボード

- チームごとのアクセス拡大の必要性を分析
- デリバリー加速の状況を可視化
- トークン予算の最適化機会を特定

### 3. コスト管理と最適化

- 支出トレンドの追跡
- プロアクティブなトークン課金アラート設定
- コミットスループットとプルリクエスト速度の改善との相関分析

---

<!-- _class: small -->

## 利用可能な地域と価格

### 利用可能リージョン

- **グローバルに展開**: ほぼすべてのAWSコマーシャルリージョンで利用可能
- **非対応リージョン**: 
  - 中東（UAE）
  - 中東（バーレーン）
  - イスラエル（テルアビブ）

### 価格設定

- **課金モデル**: 標準的なCloudWatch OpenTelemetryメトリクス取り込み価格を適用
- **メトリクス単価**: $0.30 / 1,000メトリクス
- **ログ取り込み**: 別途CloudWatch Logs料金が適用

---

## 効果・メリット

### 組織レベルのメリット

- **ROI最適化**: AIコーディングエージェント導入の効果を数値で証明
- **意思決定の高度化**: データに基づいたエージェント採用戦略の立案
- **コスト削減**: トークン予算の可視化により、ムダを排除

### チーム・エンジニアレベルのメリット

- **生産性向上**: コミットスループットとPR速度の改善を可視化
- **モデル選択の最適化**: 各モデルのコスト対出力比率から最適なモデルを選択
- **ボトルネック解析**: テレメトリーベースの詳細分析

### 運用上のメリット

- **簡易な運用**: 追加計装なしに自動的にテレメトリーを収集
- **既存ツールとの統合**: CloudWatchの既存ダッシュボード・アラートと統合
- **スケーラビリティ**: ハイブリッド・マルチクラウド環境での一元管理

---

## ユースケース

### 1. エンタープライズの導入効果測定

```
経営層 → 組織全体のAIエージェント投資効果を把握
管理者 → チーム別のトークン消費量とコスト追跡
エンジニア → 自分のコーディングエージェント利用状況を確認
```

### 2. コスト最適化プロジェクト

- 複数のコーディングエージェントを比較検討
- ワークロード別に最適なモデルを選択
- トークン予算を効率的に配分

### 3. 開発生産性の改善分析

- PR作成時間の短縮効果を測定
- コミットスループット向上の要因分析
- AIエージェント導入による工数削減を証明

---

## まとめ

### Coding Agent Insights の位置づけ

- Amazon CloudWatch の新しい生成AI可視化機能
- AIコーディングエージェント運用の透明性と効率性を大幅向上
- エンタープライズ組織のAI投資効果を最大化するための必須ツール

### 次のステップ

1. 現在使用中のコーディングエージェント（Claude Code など）の利用状況を確認
2. CloudWatch ダッシュボードで Coding Agent Insights を有効化
3. パイロットプロジェクトで ROI 分析を実施
4. 本番環境への段階的な展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-coding-agent-insights/
- **AWS Summit NYC 2026: AI Agent Innovations**: https://www.aboutamazon.com/news/aws/aws-summit-nyc-2026-ai-agents
- **Observing Agentic AI workloads**: https://aws.amazon.com/blogs/mt/observing-agentic-ai-workloads-using-amazon-cloudwatch
- **Generative AI observability - CloudWatch**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GenAI-observability.html
- **AgentWatch: Ambient monitoring**: https://aws.amazon.com/blogs/machine-learning/agentwatch-proactive-aws-monitoring-with-ambient-agents

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
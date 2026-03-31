---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Evaluations
一般提供開始

**発表日: 2026年3月31日**

---

## 概要

### AgentCore Evaluationsの3つの主要機能

- **継続的な品質監視**: 本番環境のエージェントパフォーマンスをリアルタイムに監視
- **プログラマティックテスト**: CI/CDパイプラインでの自動回帰テストに対応
- **包括的な評価機能**: 13個の組み込み評価器 + Ground Truth + カスタム評価器

### 利用可能な評価方式

- **オンライン評価**: 本番トラフィックをサンプリングしてスコアリング
- **オンデマンド評価**: 開発・テストワークフロー向けのプログラマティック評価

---

## 前提・背景

### AIエージェント運用の課題

- エージェントの品質を継続的に監視する仕組みがない
- 本番環境でのパフォーマンス低下を検知するまでに時間がかかる
- テスト品質の自動化とCI/CDパイプラインへの統合が困難
- エージェントの信頼性と安全性の測定方法が不明確

### 市場の動向

- AI エージェントの需要が高まる中、品質保証が重要課題に
- エンタープライズ環境でのAIエージェント本番運用が加速
- 自動化されたテスト・監視フレームワークへの要求が増加

---

## 主な機能と特徴

### 評価方式

<div class="columns-3">
<div>

### オンライン評価

- 本番環境を継続的に監視
- ライブトレースをサンプリング
- リアルタイムなパフォーマンス把握
- Observabilityと統合

</div>
<div>

### オンデマンド評価

- テストワークフロー対応
- CI/CDパイプライン統合
- 回帰テスト自動化
- インタラクティブな開発

</div>
<div>

### 評価メトリクス

- 応答品質
- 安全性検証
- タスク完了率
- ツール使用状況

</div>
</div>

---

## 評価器の種類と活用

### 13個の組み込み評価器

<div class="columns">
<div>

**品質評価**
- 応答の正確性
- 関連性スコア
- 完全性測定
- 一貫性確認

</div>
<div>

**安全性・運用**
- 有害性検出
- コンプライアンス確認
- ツール適切性
- エラーハンドリング

</div>
</div>

### Ground Truth による測定

- **参照回答**: 正解と照合
- **行動アサーション**: セッション目標の確認
- **ツール実行シーケンス**: 期待される手順の検証

---

<!-- _class: small -->

## カスタム評価器と高度な機能

### カスタム評価の実装方法

1. **LLMベース評価**
   - プロンプトとモデルをカスタマイズ
   - 業界固有の評価基準に対応
   - 拡張性が高い

2. **コードベース評価**
   - Python または JavaScript で実装
   - Lambda 関数でホスト
   - 複雑なロジックに対応

### AgentCore Observability との統合

- 統一的な監視ダッシュボード
- リアルタイムアラート機能
- パフォーマンストレース連携
- エラー検知と自動報告

---

## 効果とメリット

### 開発チームへの効果

- **品質保証の自動化**: テストの効率化と信頼性向上
- **迅速な検知**: 問題をいち早く検出・対応
- **CI/CD統合**: デプロイパイプラインへの組み込み
- **リスク低減**: 本番環境への安心したリリース

### 運用チームへの効果

- **継続的監視**: パフォーマンス低下を即座に把握
- **インシデント対応**: 問題の原因特定と迅速な対処
- **コスト最適化**: 不要な再実行やロールバックの削減
- **信頼性向上**: ユーザー満足度の向上

---

## ユースケース

### 活用シーン

- **金融機関**: コンプライアンス要件に基づいた評価
- **カスタマーサポート**: サポートエージェントの応答品質監視
- **製造業**: 業務プロセスの自動化エージェント品質管理
- **医療業**: 規制要件に対応した評価フレームワーク
- **小売業**: 推奨エンジンの精度測定と改善

---

## 利用可能なリージョン

### 9つのAWSリージョンで利用可能

**米国**
- US East (N. Virginia)
- US East (Ohio)
- US West (Oregon)

**アジア太平洋**
- Asia Pacific (Mumbai)
- Asia Pacific (Singapore)
- Asia Pacific (Sydney)
- Asia Pacific (Tokyo)

**ヨーロッパ**
- Europe (Frankfurt)
- Europe (Ireland)

---

## まとめ

### Amazon Bedrock AgentCore Evaluations の位置づけ

- AIエージェント開発・運用における品質保証の中核ツール
- 本番環境の信頼性と安全性の実現を可能にする
- 13個の組み込み評価器と拡張性で多様なニーズに対応
- AgentCore Observability と統合した統一的な監視

### 次のステップ

1. **評価要件の整理**: 自社エージェントに必要な評価基準を定義
2. **パイロット導入**: 既存エージェントで試験的に導入
3. **CI/CDパイプライン統合**: 自動テストワークフローの構築
4. **本番運用展開**: 段階的な全エージェントへの展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/agentcore-evaluations-generally-available/
- **ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations.html
- **スターターキット**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-toolkit.html
- **AWS Show and Tell**: https://www.youtube.com/watch?v=i0h7xA8cqYs
- **AWS News Blog**: https://aws.amazon.com/blogs/aws/category/artificial-intelligence/amazon-machine-learning/amazon-bedrock/amazon-bedrock-agentcore/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
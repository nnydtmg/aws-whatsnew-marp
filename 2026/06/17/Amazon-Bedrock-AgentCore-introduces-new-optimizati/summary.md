# Amazon Bedrock AgentCore に新しい最適化機能が登場、本番環境のエージェントを継続的に改善

Amazon Bedrock AgentCore introduces new optimization capabilities to continuously improve agents in production

**カテゴリ:** What's New
**公開日:** 2026-06-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-new-optimization-capabilities)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore introduces new optimization capabilities to continuously improve agents in production」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreの新しい最適化機能は、本番環境のトレースデータから継続的な改善を実現するもので、サイレント障害の検出、データ駆動型の改善提案、バッチ評価、A/Bテストを統合いたしました。

## このアップデートで何が変わったか

Amazon Bedrock AgentCoreは、本番環境のトレースデータを継続的な改善に変換する新しい最適化機能を導入いたしました。

### 3つの分析機能

- **Failure Insights**: エラーを発生させないサイレント障害を検出し、ダッシュボードでは見落とされやすい問題を特定
- **Intent Insights**: ユーザー意図の解釈エラーを検出し、エージェントの意図認識精度を改善
- **Trajectory Insights**: 数百のセッションにわたるエージェントの動作パターンを可視化

### 改善・検証機能

- **改善提案**: システムプロンプトとツール説明の改善提案を本番データに基づいて生成
- **バッチ評価**: 推奨事項を定義されたテストデータセットに対して検証し、複数の評価者による集計スコアを報告
- **A/Bテスト**: 本番トラフィックを分割して異なるエージェントバージョンを比較検証し、統計的証拠を得る

## 主な特徴

- 本番環境のトレースデータを継続的な改善に変換
- エラーを検出しないサイレント障害も特定可能
- データ駆動型の具体的で根拠のある改善提案
- バッチ評価と A/B テストで改善効果を統計的に検証

## 提供状況

- **Failure / Intent / Trajectory Insights**: プレビュー版として 13 の AWS リージョンで利用可能
- **バッチ評価・改善提案・A/B テスト**: 一般提供として 14 の AWS リージョンで利用可能

## 対応環境

- AgentCore ランタイム
- AWS Lambda
- Amazon EKS
- 非 AWS 環境

## 効果・メリット

- **本番環境での課題を早期発見**: サイレント障害を自動検出し、問題解決時間を短縮
- **データ駆動型の改善**: 本番データに基づいた具体的で根拠のある推奨事項を提供
- **品質保証の自動化**: バッチ評価と A/B テストで改善効果を統計的に検証
- **運用コスト削減**: 手作業による問題分析と改善提案の工数を大幅削減

## ユースケース

### 金融機関
- 顧客対応エージェントの応答品質を継続的に改善
- コンプライアンス違反につながるサイレント障害を検出

### EC サイト
- 商品推奨エージェントの精度向上を自動化
- ユーザー体験の低下を事前に検出

### サポートセンター
- サポートロボットのトラブルシューティング能力を継続的に強化
- 対応品質を一定水準以上に保証

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-new-optimization-capabilities)
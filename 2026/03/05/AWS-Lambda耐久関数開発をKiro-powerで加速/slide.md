---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda耐久関数開発をKiro powerで加速

Kiroを使用したAIエージェント支援開発

**発表日: 2026年3月5日**

---

## 概要

### 主要なポイント

- **新しいKiro power**: AWS Lambda耐久関数開発向けの専用AI支援ツール
- **AIエージェント支援**: 複雑なワークフロー開発を大幅に効率化
- **迅速な構築**: 耐久性のある長時間実行アプリケーションをすばやく開発可能
- **対象開発者**: AWS開発者およびソリューションアーキテクト

---

## 前提・背景

### 課題と市場背景

- **従来の課題**: マイクロサービスやAIワークフロー開発の複雑性
- **Lambda耐久関数の可能性**: 最大1年間実行可能な耐久性と信頼性
- **開発者の困難**: エラーハンドリング、リトライ戦略の実装が複雑

### Kiro プラットフォームの進化

- **Agentic AI の普及**: AIエージェントの需要が急速に増加
- **開発体験の向上**: AI支援による開発プロセスの最適化
- **関連動向**: AWS Observability、Lambda実行SDKの拡張

---

## 主な機能と改善

### 1. 開発支援機能

- **リプレイモデルのベストプラクティス** - エージェントが最適なパターンを提案
- **ステップ・ウェイト操作** - 複雑なタイミング制御を簡素化
- **並行実行パターン** - mapおよびparallel パターンの動的ガイダンス

### 2. エラーハンドリング支援

- **リトライ戦略** - 失敗時の再試行ロジックを自動生成
- **補償トランザクション** - ロールバック機能の実装をサポート
- **失敗に強いワークフロー** - 複数のステップにおける堅牢性

---

## 主な機能と改善（続き）

<!-- _class: small -->

### 3. デプロイメント対応

- **AWS CloudFormation** - Infrastructure as Code による構築
- **AWS CDK** - TypeScript/Pythonによるプログラマティック定義
- **AWS SAM** - Serverless Application Model での簡潔な定義

### 4. テスト・検証

- **テストパターン** - 組み込みテストフレームワークとベストプラクティス
- **ローカル開発環境** - Kiro IDEでの完全なエージェント支援
- **検証の簡素化** - 本番導入前の包括的なテスト

---

## 効果・メリット

### 開発効率の向上

- **開発時間の短縮**: AIエージェント支援により実装時間を大幅削減
- **品質の向上**: ベストプラクティスの自動適用
- **エラーの削減**: 複雑な実装パターンでの人的ミスを防止

### 導入の容易さ

- **ワンクリックインストール**: Kiro IDE から1クリックで利用開始可能
- **学習曲線の緩和**: AIガイダンスにより初心者も安心
- **チーム全体での効率化**: 開発チームの生産性向上

---

## ユースケース

### 実装可能なシナリオ

<div class="columns-3">
<div>

### 注文処理パイプライン

- 複数ステップの自動化
- 在庫確認
- 決済処理
- 配送手配

</div>
<div>

### AIエージェント
オーケストレーション

- 複数のAIタスク実行
- 人間承認ワークフロー
- 条件分岐処理
- ロールバック機能

</div>
<div>

### 支払い調整ワークフロー

- 複雑な計算処理
- エラーハンドリング
- 監査ログ記録
- リカバリー処理

</div>
</div>

---

## まとめ

### Lambda耐久関数 Kiro powerの位置づけ

- **AIエージェント時代の開発支援ツール**: 次世代の開発効率化
- **複雑さの削減**: ワークフロー開発の複雑性を大幅に低減
- **すぐに始められる**: ワンクリックでの導入と、即座に高品質な実装が可能

### 推奨次ステップ

1. Kiro IDE から Lambda durable functions power をインストール
2. サンドボックス環境でのパイロットプロジェクト実施
3. 既存ワークフロー開発への段階的適用
4. チーム全体への導入推進

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-durable-kiro-power/
- **Lambda 耐久関数 ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html
- **Kiro IDE**: https://kiro.dev/launch/powers/aws-lambda-durable-functions/
- **Kiro Powers**: https://kiro.dev/powers/

### 関連リソース

- **GitHub**: https://github.com/aws/aws-durable-execution-docs/tree/main/aws-lambda-durable-functions-power
- **AWS Observability Kiro Power**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-observability-kiro-power/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
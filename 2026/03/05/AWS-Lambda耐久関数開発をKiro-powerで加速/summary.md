# AWS Lambda耐久関数開発をKiro powerで加速

**カテゴリ:** What's New
**公開日:** 2026-03-05
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-durable-kiro-power/](https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-durable-kiro-power/)

---

## 要約

AWS Lambda耐久関数向けの新しいKiro powerが発表され、AIエージェント支援開発により、耐久性のある長時間実行マルチステップアプリケーションとAIワークフローを迅速に構築できるようになりました。このアップデートは、複雑なワークフロー開発を効率化したいAWS開発者およびソリューションアーキテクトに特に有用です。

## 詳細

### 新機能の概要

AWS Lambda耐久関数向けの新しいKiro powerが発表されました。このKiro powerにより、Lambda耐久関数の開発専門知識をエージェントAI開発に統合できます。

### 主要な特徴

#### 1. AIエージェント支援開発
- ローカル開発環境でAIエージェント支援による開発が可能
- 複雑なワークフロー開発の効率化
- 実装時間の大幅短縮

#### 2. 包括的なガイダンス
- **リプレイモデルのベストプラクティス** - 最適な実行パターンの提案
- **ステップ・ウェイト操作** - タイミング制御の複雑性を削減
- **並行実行パターン** - mapおよびparallelパターンの動的なガイダンス

#### 3. エラーハンドリングとリカバリー
- **リトライ戦略** - 失敗時の再試行ロジック
- **補償トランザクション** - ロールバック機能とエラーハンドリング
- **堅牢なワークフロー** - マルチステップアプリケーションの信頼性向上

#### 4. デプロイメント対応
- **AWS CloudFormation** - Infrastructure as Code による構築
- **AWS CDK** - TypeScript/Pythonでのプログラマティック定義
- **AWS SAM** - Serverless Application Model での定義

#### 5. テストパターン
- 組み込みテストフレームワーク
- ベストプラクティスに基づくテスト戦略
- 本番導入前の包括的な検証

### 利用方法

- **ワンクリック導入**: Kiro IDE から1クリックでインストール可能
- **Kiro Powers ページ**: 公式ポータルからのアクセスも可能
- **GitHub リソース**: 詳細情報および追加リソースはGitHubで確認可能

### ユースケース

#### 注文処理パイプライン
- 複数ステップの自動化
- 在庫確認、決済処理、配送手配のオーケストレーション
- エラー時の自動リトライと補償処理

#### AIエージェントオーケストレーション
- 複数のAIタスク実行の統合
- 人間承認ワークフローの実装
- 条件分岐処理とロールバック機能

#### 支払い調整ワークフロー
- 複雑な計算処理と検証
- 監査ログ記録とコンプライアンス
- 失敗からの自動リカバリー

### 利点と効果

#### 開発効率の向上
- **開発時間の短縮**: AI支援により実装時間を大幅削減
- **品質の向上**: ベストプラクティスの自動適用
- **エラー削減**: 複雑な実装パターンでの人的ミスを防止

#### 運用の容易さ
- **導入が簡単**: ワンクリックインストール
- **学習曲線の緩和**: AIガイダンスにより初心者も安心
- **チーム全体の効率化**: 開発チームの生産性向上

## 次のステップ

1. Kiro IDE から Lambda durable functions power をインストール
2. サンドボックス環境でのパイロットプロジェクト実施
3. 既存のワークフロー開発への段階的適用
4. チーム全体への導入推進

## 参考リソース

### 公式ドキュメント
- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-durable-kiro-power/
- **Lambda 耐久関数 ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html
- **Kiro IDE**: https://kiro.dev/launch/powers/aws-lambda-durable-functions/
- **Kiro Powers ポータル**: https://kiro.dev/powers/

### 関連リソース
- **GitHub - AWS Durable Execution**: https://github.com/aws/aws-durable-execution-docs/tree/main/aws-lambda-durable-functions-power
- **AWS Observability Kiro Power**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-observability-kiro-power/
- **Lambda Durable Execution SDK (Java)**: https://aws.amazon.com/about-aws/whats-new/2026/02/lambda-durable-execution-java-preview/
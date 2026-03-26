# Accelerate AI-assisted development with Agent Plugin for AWS Serverless

**カテゴリ:** What's New
**公開日:** 2026-03-25
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/agent-plugin-aws-serverless/](https://aws.amazon.com/about-aws/whats-new/2026/03/agent-plugin-aws-serverless/)

---

## 要約

AWS Serverless の Agent Plugin は、AI コーディングアシスタントを活用してサーバーレスアプリケーションの開発を加速化するツールであり、Lambda、EventBridge、API Gateway などの AWS サービスと統合された包括的なガイダンスとベストプラクティスを提供いたします。このアップデートは、生産環境対応のサーバーレスアプリケーションを効率的に構築、デプロイ、管理したいと考えている開発者およびアーキテクトの皆様に特に有用です。

## 詳細

### 発表内容

- AWS Serverless の Agent Plugin が発表され、Kiro、Claude Code、Cursor などの AI コーディングアシスタントを使用してサーバーレスアプリケーションの構築、デプロイ、トラブルシューティング、管理が容易になりました。

### Plugin の構成要素

- スキル、サブエージェント、フック、Model Context Protocol（MCP）サーバーをモジュール化されたユニットにパッケージ化
- 開発ライフサイクル全体を通じて関連するガイダンスと専門知識を動的に提供

### 対応サービス

- **AWS Lambda 関数**: 作成、デバッグ、最適化
- **Amazon EventBridge**: イベントソース統合ガイダンス
- **Amazon Kinesis**: ストリーミングデータ処理
- **AWS Step Functions**: ワークフローオーケストレーション
- **可観測性とパフォーマンス最適化**: ベストプラクティス内包

### Infrastructure as Code (IaC) サポート

- **AWS SAM (Serverless Application Model)**: テンプレートベースの自動生成
- **AWS CDK (Cloud Development Kit)**: 高レベルな構築サポート
- 再利用可能なコンストラクト、実証済みのアーキテクチャパターン
- 自動化された CI/CD パイプライン、ローカルテストワークフロー

### Lambda 耐久関数

- 長時間実行されるステートフルワークフロー対応
- チェックポイント再生モデル、高度なオーケストレーションパターン
- エラーハンドリング機能を備えた構築が可能

### API Gateway 対応

- REST API、HTTP API、WebSocket API 全体にわたるガイダンス
- API の設計と管理が効率化

### 互換性と導入

- オープン Agent Skills フォーマットでパッケージ化
- Kiro、Claude Code、Cursor など互換性のある AI ツール全体で利用可能
- Claude Code では、公式 Claude Marketplace から「/plugin install aws-serverless@claude-plugins-official」コマンドで簡単にインストール

## キーワード

Agent Plugin、AWS Serverless、AI コーディングアシスタント、Lambda、EventBridge、API Gateway、SAM、CDK、IaC、Model Context Protocol (MCP)、Agent Skills、Kiro、Claude Code、Cursor、Infrastructure as Code

## 参照

- [AWS What's New: Accelerate AI-assisted development with Agent Plugin for AWS Serverless](https://aws.amazon.com/about-aws/whats-new/2026/03/agent-plugin-aws-serverless/)
- [GitHub: Agent Plugins for AWS](https://github.com/awslabs/agent-plugins)
- [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/)
- [AWS Cloud Development Kit](https://aws.amazon.com/cdk/)
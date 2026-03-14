# New LZA MCP Server for AI-assisted configuration management

**カテゴリ:** What's New
**公開日:** 2026-03-12T19:23:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/new-lza-mcp-server-ai-assisted/](https://aws.amazon.com/about-aws/whats-new/2026/03/new-lza-mcp-server-ai-assisted/)

---

## 要約

LZA MCP Serverはオープンソース化され、自然言語会話によるAI支援型のLZAデプロイメント管理が可能になりました。このアップデートは、設定管理、ドキュメント検索、パイプライン監視を効率化したい組織に適しており、AWS Labs GitHubリポジトリから入手できます。

## 詳細

### サービス概要

- Landing Zone Accelerator on AWS（LZA）用のModel Context Protocol（MCP）サーバーがオープンソース化されました。
- 自然言語会話を通じてAIアシスタントとLZAデプロイメントを管理できるようになりました。
- 従来は手作業で時間がかかっていた設定タスクを効率化できます。

### 主な機能

- **20個の専門的なツール**: 複数のLZAバージョンのドキュメント検索、設定管理、パイプライン監視、デプロイメント失敗時の実行可能な洞察を提供します。
- **IDE互換性**: Kiro、Amazon Q Developer、Claude CodeなどのIDEと互換性のあるコンテナ化されたMCPエンドポイントとして動作します。
- **セキュリティ**: AWSのセキュリティベストプラクティスに従う一時認証情報を使用します。
- **入手可能性**: AWS Labs GitHubリポジトリでソースコードを確認、ダウンロード、開始できます。
- **リージョン対応**: Landing Zone Acceleratorがサポートされているすべての商用AWSリージョンおよびAWS GovCloud（US）リージョンで利用可能です。

### ユースケース

1. **マルチアカウント環境管理**: 複雑な設定を自然言語で制御
2. **設定検証**: ドキュメント検索による自動コンプライアンス確認
3. **デプロイメント監視**: パイプラインのリアルタイム監視と失敗解析
4. **効率化**: 手作業の削減と自動化によるコスト削減

### メリット

- 運用効率化による時間短縮
- 設定エラーの削減
- 開発者の生産性向上
- エンタープライズグレードのセキュリティ
- 複数IDEとの統合による柔軟な運用

### 対応する開発環境・IDE

- Kiro
- Amazon Q Developer
- Claude Code
- その他MCPに対応するAI支援ツール

### 関連AWS サービス

- Landing Zone Accelerator（LZA）
- AWS CloudFormation
- Amazon Q Developer
- AWS Bedrock
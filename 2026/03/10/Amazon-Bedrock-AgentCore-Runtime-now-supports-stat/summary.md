# Amazon Bedrock AgentCore Runtime now supports stateful MCP server features

**カテゴリ:** What's New
**公開日:** 2026-03-10
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-stateful-mcp/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-stateful-mcp/)

---

## 要約

Amazon Bedrock AgentCore Runtimeは、エリシテーション、サンプリング、進捗通知などのステートフルなMCP機能をサポートするようになり、開発者はより複雑でインタラクティブなエージェントワークフローを構築できるようになりました。この機能は14のAWSリージョンで利用可能です。

## 詳細

Amazon Bedrock AgentCore Runtimeが、ステートフルなModel Context Protocol（MCP）サーバー機能をサポートするようになりました。新機能には、エリシテーション、サンプリング、進捗通知が含まれており、既存のリソース、プロンプト、ツール機能と連携します。

### 主な機能

**エリシテーション機能**
- サーバーはツール実行中にユーザー入力を対話的に収集することができます

**サンプリング機能**
- サーバーはクライアントからAI生成テキストをリクエストでき、パーソナライズされた推奨事項などのタスクに活用できます

**進捗通知機能**
- フライト検索や予約処理などの長時間実行操作中にクライアントにリアルタイム更新を提供できます

### セッション管理

- ステートフルMCPセッションでは、各ユーザーセッションは専用のmicroVMで実行されます
- Mcp-Session-Idヘッダーを使用してセッションコンテキストが複数の相互作用にわたって維持されます
- 完全なリソース分離により、セキュリティと信頼性が向上します

### 対応リージョン

14のAWSリージョンでサポートされており、以下が含まれます：
- 米国東部（バージニア北部）、米国東部（オハイオ）、米国西部（オレゴン）
- アジアパシフィック（ムンバイ、ソウル、シンガポール、シドニー、東京）
- ヨーロッパ（フランクフルト、アイルランド、ロンドン、パリ、ストックホルム）

## ユースケース

- **旅行・予約システム**: フライト検索から予約完了まで、進捗通知とユーザー入力収集
- **エンタープライズワークフロー**: 承認プロセスの自動化、複数ステップのタスク実行
- **カスタマーサポート**: 対話的な情報収集、複雑な問い合わせへの段階的対応

## 参考リンク

- [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-stateful-mcp/)
- [Stateful MCP server features ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/mcp-stateful-features.html)
- [AgentCore Runtime ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agents-tools-runtime.html)
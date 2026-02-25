# Amazon Bedrock now supports server-side tool execution with AgentCore Gateway

**カテゴリ:** What's New
**公開日:** 2026-02-24
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-server-side-tool-execution-agentcore-gateway/](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-server-side-tool-execution-agentcore-gateway/)

---

## 要約

Amazon Bedrockは、AgentCore Gatewayとの統合によってResponses API内でサーバー側のツール実行を実現し、クライアント側のオーケストレーション構築が不要になりました。これにより、エージェントワークフローの複雑性とレイテンシーが削減され、すべてのAWS対応リージョンで一般提供されています。

## 詳細

- Amazon Bedrockは、Amazon Bedrock AgentCore Gatewayとの統合を通じて、Responses APIでサーバー側のツール実行をサポートするようになりました。
- AgentCore Gateway ARNをツールコネクタとして指定することで、クライアント側のオーケストレーションなしにサーバー側でツール実行が可能になります。
- Amazon Bedrockが自動的にゲートウェイから利用可能なツールを検出し、推論中にモデルに提示し、モデルが選択した場合にツール呼び出しを実行します。
- クライアント側のツールオーケストレーションループを構築・保守する必要がなくなり、アプリケーションの複雑性とエージェントワークフローのレイテンシーが削減されます。
- 既存のAgentCore Gateway設定とAWS IAM権限を通じて、ツールアクセスの完全な制御が保持されます。
- Responses APIで利用可能なすべてのモデルがサーバー側ツール実行に対応しており、複数のツール呼び出しが単一の会話ターン内でサポートされます。
- ツール結果はリアルタイムでクライアントにストリーミングバックされます。
- この機能は、Amazon BedrockのResponses APIとAmazon Bedrock AgentCore Gatewayの両方が利用可能なすべてのAWSリージョンで一般提供されています。

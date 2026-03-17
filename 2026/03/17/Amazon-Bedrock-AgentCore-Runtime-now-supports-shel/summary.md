# Amazon Bedrock AgentCore Runtime now supports shell command execution

**カテゴリ:** What's New
**公開日:** 2026-03-17T16:34:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/bedrock-agentcore-runtime-shell-command/](https://aws.amazon.com/about-aws/whats-new/2026/03/bedrock-agentcore-runtime-shell-command/)

---

## 要約

Amazon Bedrock AgentCore RuntimeがInvokeAgentRuntimeCommandという新しいAPIを提供するようになり、実行中のセッション内でシェルコマンドを直接実行し、リアルタイムで出力をストリーミングできるようになりました。このアップデートは、AIエージェントのワークフロー内で決定論的な操作とLLMベースの推論を並行実行する必要がある開発者にとって、カスタムコマンド実行ロジックの構築を不要にする価値があります。

---

## 詳細

### 新機能

**InvokeAgentRuntimeCommand API**
- Amazon Bedrock AgentCore Runtimeが新しいAPI「InvokeAgentRuntimeCommand」をサポートするようになりました
- このAPIにより、実行中のAgentCore Runtimeセッション内でシェルコマンドを直接実行できます

### 実行環境

- コマンドはエージェントセッションと同じコンテナ、ファイルシステム、環境内で実行
- エージェント呼び出しをブロックせずに同時実行可能
- 開発者はコマンドを送信し、HTTP/2でリアルタイムに出力をストリーミング
- 終了コードを受け取ることが可能

### 利用シナリオ

**AIエージェントの実行パターン:**
- テストの実行
- 依存関係のインストール
- gitコマンドの実行
- 決定論的な操作とLLMベースの推論の並行実行

### 従来の課題

従来は、開発者がコンテナ内にカスタムロジックを構築する必要がありました:
- エージェント呼び出しとシェルコマンドの区別
- 子プロセスの生成
- 標準出力と標準エラーのキャプチャ
- タイムアウト処理

InvokeAgentRuntimeCommandはプラットフォームレベルのAPIを提供することで、これらの差別化されていない作業を排除します。

### グローバルサポート

**対応リージョン（14リージョン）:**
- **北米**: us-east-1（バージニア北部）、us-east-1（オハイオ）、us-west-2（オレゴン）
- **カナダ**: ca-central-1（中部）
- **アジアパシフィック**: ap-south-1（ムンバイ）、ap-northeast-1（東京）、ap-northeast-2（ソウル）、ap-southeast-1（シンガポール）、ap-southeast-2（シドニー）
- **ヨーロッパ**: eu-central-1（フランクフルト）、eu-west-1（アイルランド）、eu-west-2（ロンドン）、eu-west-3（パリ）、eu-north-1（ストックホルム）

---

## 意義

### 開発効率の向上
- カスタムコマンド実行ロジックの構築が不要に
- 開発時間の短縮
- エラー率の低下
- 保守性の向上

### AIエージェントの実用性向上
- より複雑なワークフロー実現が可能
- 決定論的操作とLLMベース推論の効果的な組み合わせ
- 本番環境での信頼性向上

### ビジネス価値
- 開発コスト削減
- 市場投入時間短縮
- より高度なAIソリューション開発が可能に

---

## 関連リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/bedrock-agentcore-runtime-shell-command/
- **Execute commands in AgentCore Runtime sessions**: https://docs.aws.amazon.com/fr_fr/bedrock-agentcore/latest/devguide/runtime-execute-command.html
- **Amazon Bedrock AgentCore - AWS API Changes**: https://awsapichanges.info/archive/changes/dac0d1-bedrock-agentcore.html
- **Execute code and analyze data using Amazon Bedrock AgentCore**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/code-interpreter-tool.html
- **Get started with Amazon Bedrock AgentCore**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-toolkit.html

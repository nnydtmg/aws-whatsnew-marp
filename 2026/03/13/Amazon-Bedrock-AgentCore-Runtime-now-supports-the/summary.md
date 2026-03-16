# Amazon Bedrock AgentCore Runtime now supports the AG-UI protocol

**カテゴリ:** What's New
**公開日:** 2026-03-13
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-ag-ui-protocol/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-ag-ui-protocol/)

---

## 要約

Amazon Bedrock AgentCore Runtime が AG-UI プロトコルに対応することで、開発者はユーザー向けアプリケーションにおいてリアルタイムで応答性の高いエージェント体験をデプロイできるようになりました。このアップデートにより、認証やスケーリングなどのインフラストラクチャ管理が自動化され、インタラクティブなフロントエンド開発に注力することが可能になります。

## 詳細

### プロトコル対応

- Amazon Bedrock AgentCore Runtime が Agent-User Interaction (AG-UI) プロトコルに対応するようになりました
- AG-UI はイベントベースのオープンプロトコルであり、AI エージェントとユーザーインターフェースの通信を標準化しています
- MCP (Model Context Protocol) および A2A (Agent-to-Agent) プロトコルとの相補的な動作をサポート

### AG-UI サーバー機能

- AG-UI サーバーのデプロイが可能になり、ユーザー向けアプリケーションにおいてリアルタイムで応答性の高いエージェント体験を提供できます
- AgentCore Runtime が認証、セッション分離、スケーリングを処理するため、開発者はインタラクティブなフロントエンド構築に集中できるようになりました

### リアルタイムストリーミング

- テキストチャンク、推論ステップ、ツール結果をリアルタイムでフロントエンドにストリーミング配信できるようになりました
- リアルタイムな状態同期により、プログレスバーやダッシュボードなどの UI 要素を更新できるようになりました
- 構造化されたツール呼び出し可視化により、UI がエージェントアクションを透過的にレンダリングできるようになりました

### トランスポートと地域対応

- Server-Sent Events (SSE) と WebSocket の両方のトランスポートに対応し、双方向通信がサポートされています
- 14 の AWS リージョンで AG-UI サーバーがサポートされています
  - 米国: US East (N. Virginia), US East (Ohio), US West (Oregon)
  - アジア太平洋: Mumbai, Seoul, Singapore, Sydney, Tokyo
  - カナダ: Canada (Central)
  - ヨーロッパ: Frankfurt, Ireland, London, Paris, Stockholm

### 対象ユーザー

- エージェント技術を用いたユーザー向けアプリケーション開発を行う開発者やソリューションアーキテクトに適しています
- リアルタイムで応答性の高いエージェント体験を提供したいと考えている組織に有益です

## 活用シーン

### カスタマーサポート
- チャットボットがリアルタイムで支援内容を表示
- エージェントの推論プロセスをユーザーに可視化

### ビジネスインテリジェンス
- ダッシュボード上にライブデータ分析結果を反映
- プログレスバーで長時間処理の進捗を表示

### コード生成支援
- エディタ上でリアルタイムコード生成を表示
- ユーザーインタラクションに対応した動的生成

## 技術的特性

### インフラストラクチャ管理の自動化
- OAuth 2.0 および SigV4 による認証
- セッション単位のリソース分離
- 自動スケーリングとロードバランシング

### セキュリティ
- 専用 microVM による各セッションの隔離
- セッション終了時の自動メモリサニタイズ
- AgentCore Identity による AI エージェント認証

### パフォーマンス
- 消費量ベースの価格設定
- 最大 8 時間までの長時間ワークロード対応
- リアルタイムと非同期の両方の処理に対応

## 参考リソース

- [Deploy AG-UI servers in AgentCore Runtime](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-agui-protocol-contract.html)
- [Host agent or tools with Amazon Bedrock AgentCore Runtime](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agents-tools-runtime.html)
- [Understand the AgentCore Runtime service contract](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-service-contract.html)

# AWS SAM now supports WebSocket APIs for Amazon API Gateway

**カテゴリ:** What's New
**公開日:** 2026-05-05T18:31:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-websocket-apis-api-gateway/](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-websocket-apis-api-gateway/)

---

## 要約

AWS SAM が WebSocket API サポートを追加し、SAM テンプレートで最小限の設定で WebSocket API を定義できるようになりました。これにより、リアルタイムアプリケーション開発が簡素化され、IAM 権限などの一般的な問題のデバッグが容易になります。

## 詳細

- AWS SAM（Serverless Application Model）が Amazon API Gateway の WebSocket API をサポートするようになりました。

- SAM テンプレートで最小限の設定で完全な WebSocket API を定義できるようになりました。

- これまで SAM は WebSocket API をサポートしていなかったため、AWS CloudFormation で基盤となるリソースをすべて手動で設定する必要がありました。

- SAM がテンプレートから必要なリソースと権限を自動生成するため、Lambda 関数の IAM 権限不足などの一般的な問題のデバッグが容易になりました。

- この新しいリソースは、IAM 認可、Lambda 認可、カスタムドメイン、RouteSettings、Models、StageVariables など、API Gateway WebSocket API と同等の機能を提供しています。

- Globals サポートにより、複数の WebSocket API 間で共通設定を共有できます。

- $connect、$disconnect、$default ルートと、アプリケーションが必要とするカスタムルートの Lambda 関数ハンドラーを指定することで、ルートを定義できます。

- SAM が各ルートの統合と権限を自動的に設定します。

- 認可、ステージ設定、カスタムドメインをリソース定義内で直接設定できます。

- チャット、ライブダッシュボード、AI/LLM ストリーミング、IoT などのリアルタイムアプリケーションに対応しています。

## 主な利点

### 開発の簡素化

- SAM テンプレートで WebSocket API を最小限の設定で定義可能
- IAM 権限やリソース統合を自動生成
- 手動設定によるエラーを排除

### 運用の効率化

- IAM 権限不足などの一般的な問題のデバッグが容易
- Globals サポートで共通設定を共有
- 複数の WebSocket API を効率的に管理

### エンタープライズ機能

- IAM 認可、Lambda 認可
- カスタムドメイン
- RouteSettings、Models、StageVariables
- API Gateway WebSocket API との機能パリティ

## 対応するユースケース

- **チャットアプリケーション**: リアルタイムメッセージング
- **ライブダッシュボード**: リアルタイムデータ可視化
- **AI/LLM ストリーミング**: 生成結果の段階的配信
- **IoT プラットフォーム**: センサーデータのリアルタイム配信
- **コラボレーションツール**: マルチユーザーリアルタイム連携
- **金融取引プラットフォーム**: リアルタイム相場配信

## 技術的なポイント

- 新リソースタイプ: **AWS::Serverless::WebSocketApi**
- ルート: $connect、$disconnect、$default、カスタムルート
- 認可方式: IAM 認可、Lambda 認可
- 設定: 認可、ステージ設定、カスタムドメインをリソース定義内で直接設定
- Globals: 複数の WebSocket API 間で共通設定を共有
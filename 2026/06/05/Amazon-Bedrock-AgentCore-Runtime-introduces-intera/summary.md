# Amazon Bedrock AgentCore Runtime がエージェントセッションへのターミナルアクセス用インタラクティブシェルをサポート

Amazon Bedrock AgentCore Runtime introduces interactive shells for terminal access into agent sessions

**カテゴリ:** What's New
**公開日:** 2026-06-05
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-runtime/)

このドキュメントでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Runtime introduces interactive shells for terminal access into agent sessions」の内容を日本語で要約しています。

---

## 要約

Amazon Bedrock AgentCore Runtime に新しい **InvokeAgentRuntimeCommandShell API** が導入され、**WebSocket 経由でエージェントセッションへの永続的なインタラクティブターミナルアクセス** が可能になりました。

これにより、Claude Code などのコーディングエージェントをホストする開発者は、完全なターミナル体験を備えた microVM 環境に直接アクセスし、ファイル検査、アドホックコマンド実行、環境状態のデバッグなどを実行できるようになります。

---

## このアップデートで何が変わったか

### 1. 新しい InvokeAgentRuntimeCommandShell API

- WebSocket 経由でエージェントセッションへの永続的なターミナルアクセスが実現
- 従来の InvokeAgentRuntimeCommand API の一度限りのコマンド実行に加えて、インタラクティブなシェルセッションを実現

### 2. 完全なターミナル体験

- **色付き表示**: ANSI カラーサポート
- **タブ補完**: ファイルやコマンドの自動補完
- **Ctrl+C**: 実行中のコマンドを中断可能
- **ターミナルリサイズ**: ウィンドウサイズ変更に対応
- **ネットワーク切断時の自動再接続**: 接続が切れても自動で復帰

### 3. 特に有用なユースケース

- **Claude Code**: コーディングエージェント
- **OpenAI Codex**: コード生成エージェント
- **Amazon Kiro**: AWS 向けエージェント

### 4. セッション管理機能

- **セッション識別**: ランタイムセッション ID + シェル ID で識別
- **再接続機能**: 同じ ID で以前のセッションに復帰可能
- **状態の永続化**: 環境変数、作業ディレクトリ、コマンド履歴が維持される

### 5. 高度な並行処理

- **最大 10 個の同時シェル**: 単一のエージェントランタイムでサポート
- **複数ターミナル**: 複数の microVM に対する並列処理を監視可能

---

## 対象ユーザー

### 主なターゲット

1. **AI エージェント開発者**
   - Claude Code、OpenAI Codex などのコーディングエージェントをホストする開発者
   - Amazon Bedrock AgentCore Runtime を利用したエージェント開発者

2. **DevOps・SRE エンジニア**
   - エージェント実行環境のデバッグとモニタリングを担当者
   - 本番環境でのトラブルシューティング

3. **ソフトウェア開発企業**
   - 自動化ツール・エージェントを構築する組織
   - 複雑なワークフロー自動化を実施している企業

---

## 詳細

### 技術的な詳細

#### WebSocket ベースの永続接続

- 従来の HTTP リクエスト/レスポンスモデルから、WebSocket による双方向通信へ
- エージェントセッション内でのリアルタイムな対話が可能

#### PTY（疑似ターミナル）バックアップ

- microVM 内の完全なターミナル環境をシミュレート
- シェルの出力、入力の完全な制御が可能

#### セッション分離と並行実行

- ランタイムセッション ID とシェル ID の二重識別子によるセッション管理
- 単一のエージェントランタイムで最大 10 個の並行セッルをサポート

#### ネットワーク耐性

- **短い切断**: 自動的に再接続
- **長い切断**: 同じセッション ID を使用して手動で再開可能
- セッション内のすべての状態（環境変数、作業ディレクトリ、コマンド履歴）が保持される

### 使用方法

#### AgentCore CLI でのスタート

```bash
agentcore exec --it --runtime <runtime-arn>
```

このコマンドでインタラクティブシェルセッションを開始できます。

### 主なメリット

#### 開発効率の大幅な向上

- **即座なデバッグ**: エージェント実行中の環境をリアルタイムで確認
- **ファイル操作**: ファイルの検査・修正が容易
- **アドホックコマンド**: 柔軟なコマンド実行が可能
- **実行状態の把握**: 環境変数、作業ディレクトリなど、エージェント内部の状態を直接確認

#### 運用・保守の強化

- **問題診断**: 本番環境の状態を迅速に調査
- **スケーラビリティ**: 複数エージェントの並列監視
- **信頼性**: 自動再接続で接続性が向上
- **トレーサビリティ**: セッション ID による実行追跡が容易

---

## 実際のユースケース

### 1. コード生成エージェント（Claude Code）

- **シーン**: エージェントが新規プロジェクトのコードを生成
- **ターミナルアクセスの利点**:
  - 生成されたコードの依存関係をリアルタイムで確認
  - テストの実行結果を即座に確認
  - エラーが発生した場合、デバッグ環境を直接確認

### 2. 自動デプロイメント（Amazon Kiro）

- **シーン**: エージェントが AWS リソースのデプロイを自動化
- **ターミナルアクセスの利点**:
  - デプロイ手順をステップバイステップで検証
  - 問題発生時の環境状態をリアルタイムで調査
  - ロールバック実行時のログを即座に確認

### 3. データ分析エージェント

- **シーン**: エージェントが大規模データセットを処理
- **ターミナルアクセスの利点**:
  - データファイルの確認・変換を実施
  - 分析結果の確認をリアルタイムで実行
  - パフォーマンス問題を即座に診断

---

## 関連する最近の動向

### Amazon Bedrock AgentCore の進化

Amazon Bedrock AgentCore は、エージェント型 AI を本番環境で安全にデプロイするためのプラットフォームです。

- **セキュアなランタイム**: コンテナ化された microVM での実行により、エージェント間の隔離を実現
- **多様なフレームワーク対応**: CrewAI、LangGraph、LlamaIndex など、人気のエージェントフレームワークに対応
- **複数のモデル対応**: Anthropic Claude、OpenAI、Google Gemini、Meta Llama など、様々な基盤モデルをサポート

### WebSocket による双方向通信

AWS のサービスでは、WebSocket による双方向通信がますます重要になっています。

- **リアルタイム性**: 従来の HTTP より低遅延での通信
- **効率性**: 接続を保持することで、繰り返しのハンドシェイク オーバーヘッドを削減

---

## 参考リンク

- **元記事**: [Amazon Bedrock AgentCore Runtime introduces interactive shells for terminal access into agent sessions](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-runtime/)
- **Amazon Bedrock AgentCore ドキュメント**: [What Is Amazon Bedrock AgentCore?](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html)
- **Interactive Shells Documentation**: [Interactive Shells (Terminals)](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-get-started-command-shell.html)
- **Shell Execution Guide**: [Shell execution in AgentCore Runtime](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-shell-execution.html)
- **AgentCore Runtime の使用方法**: [Get started with the AgentCore CLI](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-get-started-cli.html)
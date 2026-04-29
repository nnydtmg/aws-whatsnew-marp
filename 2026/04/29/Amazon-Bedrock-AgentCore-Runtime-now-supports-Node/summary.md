# Amazon Bedrock AgentCore Runtime now supports Node.js for direct code deployment

**カテゴリ:** What's New
**公開日:** 2026-04-28
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-runtime/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-runtime/)

---

## 要約

Amazon Bedrock AgentCore RuntimeがNode.jsのマネージド言語ランタイムをサポート開始しました。開発者はコンテナイメージの構築なしに、zipファイルでパッケージ化したNode.jsエージェントを直接デプロイできるようになりました。このアップデートは、Node.js、TypeScript、またはStrands Agents SDKなどのエージェントフレームワークを使用する開発者にとって、デプロイメントプロセスを大幅に簡素化し、セッション分離や組み込み認証などのエンタープライズ機能を活用できるようになるため、特に有益です。

---

## 詳細

### 主な変更点

**言語ランタイムの拡張**
- Amazon Bedrock AgentCore Runtimeが、既存のPythonサポートに加えてNode.jsのマネージド言語ランタイムとしてのサポートを開始
- JavaScript、TypeScript（JavaScriptにコンパイル済み）、Strands Agents SDKなどのエージェントフレームワークで構築されたエージェントをデプロイ可能

**コンテナレスデプロイメント**
- 開発者は、Node.jsベースのエージェントコードと依存関係を.zipファイルにパッケージ化してデプロイ
- Dockerfileの構築やコンテナイメージの管理が不要に

### デプロイメント方法

**シンプルな3ステップ**
1. Node.jsでエージェントを作成
2. 依存関係とともにzipファイルに圧縮（またはesbuildでバンドル）
3. Amazon S3にアップロード → AgentCore Runtimeを作成

**パッケージングオプション**
- オプションA: `node_modules`フォルダをzipに含める
- オプションB: esbuildで単一JavaScriptファイルにバンドル（パッケージサイズ削減）

### Node.jsエージェントの機能

**エンタープライズ機能の統合**
- セッション分離：各実行ごとに独立したセッション管理
- セキュア認証：SigV4およびOAuth 2.0による組み込み認証
- 双方向ストリーミング：エージェント・クライアント間のリアルタイム通信
- マネージドセッションストレージ：セッション情報の自動保存・復旧

**可観測性**
- Amazon CloudWatchによるログ、メトリクス、トレース監視
- AWS Distro for OpenTelemetry Node.js自動計測パッケージで詳細な計測が可能

---

## メリット

### 開発効率の向上
- Dockerファイルの管理が不要で、コーディングに集中可能
- Node.js/TypeScript開発者がコンテナ知識なくAIエージェントを開発可能
- 既存のNode.jsアプリケーションやTypeScriptプロジェクトを迅速に移行

### デプロイメント時間の短縮
- コンテナイメージのビルド・テスト・デプロイの複雑な流れを排除
- zipファイルアップロードのみで本番環境対応

### エンタープライズ対応
- 認証、セッション管理、可観測性が自動で提供される
- コンテナ管理の複雑さなく本番環境での運用が実現

---

## 適用シーン

- **Node.js開発者向け**: 既存スキルを活かしたAIエージェント開発
- **TypeScript利用**: 型安全な開発が必要なエンタープライズ環境
- **既存資産の活用**: 実装済みNode.js/TSコードのAgentCore Runtimeへの移行
- **マルチランタイム環境**: Python + Node.jsの複数言語チーム構成

---

## まとめ

Amazon Bedrock AgentCore RuntimeのNode.jsサポートにより、開発者はコンテナ管理の複雑さから解放されて、zipファイルで直接AIエージェントをデプロイできるようになります。これにより、Node.js/TypeScript開発チームも簡単に本番環境対応のAIエージェントを構築・運用できるようになりました。
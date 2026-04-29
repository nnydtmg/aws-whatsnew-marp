---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Runtime
Node.js ダイレクトコードデプロイのサポート開始

**発表日: 2026年4月28日**

---

## 概要

### 3つの主要な改善

- **Node.js ランタイムのサポート**: 既存の Python に加えて、Node.js をマネージド言語ランタイムとして追加
- **コンテナレスデプロイメント**: Dockerfile やコンテナイメージの構築なしに、zip ファイルで直接デプロイ可能
- **複数フレームワーク対応**: Node.js、TypeScript、Strands Agents SDK などのエージェントフレームワークに対応

---

## 前提・背景

### 従来の課題

- エージェント開発時、デプロイのたびにコンテナイメージをビルド・管理する必要
- Docker 環境の構築が複雑で、開発効率が低下
- Node.js/TypeScript 開発者は Python ランタイムのみが対応

### AgentCore Runtime の進化

- マネージドエージェントハーネスにより、環境構築の複雑さを排除
- エンタープライズ機能（認証、セッション管理、可観測性）を標準提供
- 複数言語サポートにより、開発者の選択肢を拡大

---

## 主な機能と改善

### 1. Node.js ランタイムのサポート

- **言語対応**: Node.js（JavaScript）、TypeScript（JavaScript にコンパイル）
- **フレームワーク**: Strands Agents SDK などのエージェント構築フレームワーク対応
- **既存コード**: プレーンな Node.js アプリケーションもそのままデプロイ可能

### 2. シンプルなデプロイメントフロー

- エージェントコードと依存関係を `node_modules` フォルダに含めて zip ファイルに圧縮
- または esbuild で単一の JavaScript ファイルにバンドル
- Amazon S3 にアップロード → エージェントランタイム作成で完了

---

<!-- _class: small -->

## Node.js エージェントの機能

### エンタープライズ機能

- **セッション分離**: エージェント実行ごとに独立したセッションを管理
- **セキュア認証**: SigV4 および OAuth 2.0 による組み込み認証
- **双方向ストリーミング**: エージェントとクライアント間のリアルタイム通信
- **マネージドセッションストレージ**: セッション情報の自動保存・復旧

### 可観測性

- **CloudWatch 統合**: ログ、メトリクス、トレース情報をリアルタイム監視
- **OpenTelemetry 対応**: AWS Distro for OpenTelemetry Node.js 自動計測パッケージで詳細な計測

---

## デプロイメント方法

### ステップバイステップ

1. **エージェントコード作成**: Node.js/TypeScript でエージェントを実装
2. **依存関係のバンドル**:
   - 方法A: `node_modules` フォルダを含めて zip に圧縮
   - 方法B: esbuild で単一ファイルにバンドル（パッケージサイズ削減）
3. **S3 にアップロード**: zip ファイルを Amazon S3 に配置
4. **ランタイム作成**: AgentCore Runtime を作成し、S3 の zip を指定
5. **デプロイ完了**: 数分でエージェントが実行可能な状態に

---

## 効果・メリット

### 開発者向け

- **開発効率向上**: Dockerfile 管理が不要で、コーディングに集中可能
- **言語の自由度**: Node.js/TypeScript など好みの言語を選択可能
- **フレームワーク活用**: Strands Agents SDK など既存ツールが利用可能

### 運用向け

- **デプロイ簡素化**: zip ファイルのアップロードだけで完結
- **エンタープライズ対応**: 認証、セッション管理、可観測性が自動提供
- **本番環境準備**: コンテナ管理の複雑さなく本番運用が実現

---

## ユースケース

### 適用シーン

- **Node.js エージェント**: 既存の Node.js スキルを活かして AI エージェント開発
- **TypeScript プロジェクト**: 型安全な開発が必要な企業向け
- **既存アプリケーション移行**: 既に実装された Node.js/TS コードを AgentCore Runtime に迅速に移行
- **フレームワーク利用**: Strands Agents SDK を使った高度なエージェント構築

### 対象開発チーム

- Node.js/TypeScript 専門チーム
- マルチランタイム環境を構築したい企業（Python チームと Node.js チームが混在）
- コンテナ管理のオーバーヘッドを削減したい組織

---

## まとめ

### Amazon Bedrock AgentCore Runtime Node.js サポートの価値

- **言語拡張**: Node.js/TypeScript 開発者も簡単に AI エージェントを構築・デプロイ
- **デプロイ革新**: コンテナ管理不要で、zip ファイルだけで本番環境に対応
- **エンタープライズ対応**: セキュリティ、可観測性、セッション管理が統合

### 次のステップ

1. Node.js/TypeScript プロジェクトで AgentCore Runtime を評価
2. Strands Agents SDK または独自エージェント実装でパイロット
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: [Amazon Bedrock AgentCore Runtime now supports Node.js](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-runtime/)
- **Amazon Bedrock AgentCore ドキュメント**: [Get started - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/harness-get-started.html)
- **AgentCore Harness 構造**: [AgentCore harness [Preview]](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/harness.html)
- **実装例**: [Build a FinOps agent using Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-finops-agent-using-amazon-bedrock-agentcore/)
- **高度なユースケース**: [Omnichannel ordering with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/omnichannel-ordering-with-amazon-bedrock-agentcore-and-amazon-nova-2-sonic/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Runtime
シェルコマンド実行機能が利用可能に

**発表日: 2026年3月17日**

---

## 概要

### 何が変わったか

- **InvokeAgentRuntimeCommand API** が新規提供
- AgentCore Runtimeセッション内で **シェルコマンド直接実行** が可能に
- **HTTP/2リアルタイムストリーミング** で出力を受け取り
- 決定論的操作とLLMベース推論を **並行実行** できるように

---

## 前提・背景

### 従来の課題

- 開発者が **カスタムロジック** を手動でコンテナ内に構築する必要があった
- エージェント呼び出しとシェルコマンドの区別、プロセス管理が複雑
- 標準出力・標準エラーのキャプチャ、タイムアウト処理が必要
- 非効率で差別化されていない作業の繰り返し

### 市場の動向

- AI エージェントの実用化が進むにつれ、柔軟なコマンド実行の需要が増加
- テスト自動化、依存関係管理、バージョン管理などの自動化要求
- エンタープライズ向けAI基盤の包括的ツール化の期待

---

## 主な機能と改善

### InvokeAgentRuntimeCommand API の特徴

<div class="columns">
<div>

#### 実行環境

- **同一コンテナ** 内で実行
- **同一ファイルシステム** にアクセス
- **同一環境変数** を使用
- エージェント呼び出しをブロックしない

</div>
<div>

#### 実行結果の取得

- コマンド出力をリアルタイムストリーミング
- 標準出力・標準エラーを自動キャプチャ
- 終了コードを返却
- 並行実行対応

</div>
</div>

---

## ユースケース

### AIエージェントが実行可能な処理

- **テスト実行**: ユニットテスト、統合テストの自動実行
- **パッケージ管理**: npm、pip等での依存関係のインストール
- **バージョン管理**: git コマンドによるコード管理
- **ビルド処理**: コンパイル、デプロイメント準備
- **環境確認**: システムリソース、設定値の確認

---

## 効果・メリット

### 開発効率の向上

- **開発時間短縮**: カスタム実装が不要に
- **エラーの削減**: プラットフォームレベルの実装で堅牢性向上
- **保守性向上**: APIに統一された仕様を利用
- **スケーラビリティ**: プラットフォーム側で最適化

### ビジネス価値

- AIエージェントの実用性向上
- 開発コスト削減
- より複雑なワークフローの実現が可能に
- 本番環境での信頼性向上

---

## 地域別サポート

### 利用可能なリージョン（14リージョン）

| 地域 | リージョン |
|------|----------|
| **北米** | us-east-1（バージニア北部）、us-east-1（オハイオ）、us-west-2（オレゴン） |
| **カナダ** | ca-central-1（中部） |
| **アジアパシフィック** | ap-south-1（ムンバイ）、ap-northeast-1（東京）、ap-northeast-2（ソウル）、ap-southeast-1（シンガポール）、ap-southeast-2（シドニー） |
| **ヨーロッパ** | eu-central-1（フランクフルト）、eu-west-1（アイルランド）、eu-west-2（ロンドン）、eu-west-3（パリ）、eu-north-1（ストックホルム） |

---

## 実装のポイント

### 開発者の対応

- 既存のカスタムコマンド実行ロジックを **InvokeAgentRuntimeCommand に移行**
- APIリファレンスに基づいて実装
- HTTP/2 ストリーミングの取り扱いに注意

### ベストプラクティス

- **エラーハンドリング** を適切に実装
- **タイムアウト設定** を明示的に指定
- **ログ記録** で監視性を確保
- **セキュリティ検証** でコマンドの安全性を確認

---

## まとめ

### 主なポイント

- **InvokeAgentRuntimeCommand** で AgentCore Runtime からシェルコマンドが直接実行可能に
- **プラットフォームレベルAPI** により差別化されない作業が不要に
- **リアルタイムストリーミング** で効率的な結果取得が可能
- **14リージョン** でグローバルサポート

### 次のステップ

1. 現在のカスタムコマンド実行ロジックを評価
2. **InvokeAgentRuntimeCommand の導入検討**
3. 既存ワークフローの**段階的移行**
4. 本番環境での運用開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/bedrock-agentcore-runtime-shell-command/
- **AgentCore 開発者ガイド - コマンド実行**: https://docs.aws.amazon.com/fr_fr/bedrock-agentcore/latest/devguide/runtime-execute-command.html
- **Amazon Bedrock AgentCore ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-toolkit.html
- **AWS API Changes - Bedrock AgentCore**: https://awsapichanges.info/archive/changes/dac0d1-bedrock-agentcore.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**

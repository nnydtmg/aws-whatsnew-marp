---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Runtime がエージェントセッションへのターミナルアクセス用インタラクティブシェルをサポート

**発表日: 2026年6月5日**

---

## 概要

### 主な機能追加

- **新API**: InvokeAgentRuntimeCommandShell API がリリース
- **インタラクティブターミナル**: WebSocket 経由でエージェントセッションへの永続的なターミナルアクセスが可能
- **完全なターミナル体験**: 色付き表示、タブ補完、Ctrl+C、ターミナルリサイズ機能を提供
- **自動再接続**: ネットワーク切断時に自動的に再接続

---

## 前提・背景

### AI エージェント開発の課題

- **従来の制限**: InvokeAgentRuntimeCommand API は一度限りのコマンド実行のみ
- **デバッグの困難さ**: エージェント実行時の環境状態を確認しづらい
- **開発効率**: ファイル検査やアドホックコマンド実行が限定的

### 対応するユースケース

- **Claude Code**: コーディングエージェントとしての利用
- **OpenAI Codex**: コード生成エージェント
- **Amazon Kiro**: AWS 向けエージェント

---

## 主な機能

### 1. インタラクティブシェルセッション

- **WebSocket ベース**: 永続的な双方向通信
- **状態の永続化**: 環境変数、作業ディレクトリ、コマンド履歴が維持される
- **セッション識別**: ランタイムセッション ID + シェル ID で一意に識別
- **再接続機能**: 同じセッション ID で以前の状態に復帰可能

### 2. 充実したターミナル機能

- **色付き表示**: ANSI カラーサポート
- **タブ補完**: ファイルやコマンドの自動補完
- **シグナル処理**: Ctrl+C で実行中のコマンドを中断
- **ターミナルリサイズ**: ウィンドウサイズ変更に対応

---

## 技術仕様

### 並行シェル管理

- **最大 10 個の同時シェル**: 単一のエージェントランタイムでサポート
- **複数ターミナル**: 複数の microVM に対する並列処理を監視可能
- **独立した隔離**: CPU、メモリ、ファイルシステムが完全に隔離

### ネットワーク復旧

- **短い切断**: 自動的に再接続
- **長い切断**: 同じセッション ID を使用して手動で再開
- **状態保持**: セッション内のすべての状態が保持される

---

## 利用方法

### AgentCore CLI での実行

```
agentcore exec --it --runtime <runtime-arn>
```

### 主なコマンド

- **セッション開始**: WebSocket 接続を確立
- **コマンド実行**: ローカルターミナルと同じ感覚で操作
- **セッション再接続**: セッション ID で復帰

---

## メリット・効果

### 開発効率の向上

- **即座なデバッグ**: エージェント実行中の環境をリアルタイムで確認
- **ファイル操作**: ファイルの検査・修正が容易
- **アドホックコマンド**: 柔軟なコマンド実行が可能

### 運用の強化

- **問題診断**: 本番環境の状態を迅速に調査
- **スケーラビリティ**: 複数エージェントの並列監視
- **信頼性**: 自動再接続で接続性が向上

---

## ユースケース

### 1. コード生成エージェント

- Claude Code がコード生成時に依存関係を確認
- 実行環境のテストを即座に実施

### 2. 自動デプロイメント

- Amazon Kiro がデプロイ手順をステップバイステップで検証
- 問題発生時のデバッグが効率化

### 3. データ分析エージェント

- データファイルの確認・変換を実施
- 分析結果の確認をリアルタイムで実行

---

## まとめ

### Amazon Bedrock AgentCore Runtime の進化

- **インタラクティブシェル** で開発体験が大幅に向上
- **WebSocket ベース** の永続接続により信頼性が強化
- **複数エージェント管理** がより効率的に

### 次のステップ

1. 既存のエージェントで新 API の評価を開始
2. 本番環境へのパイロット導入を計画
3. チーム内での使用ガイドラインを策定

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-runtime/
- **Interactive Shells Documentation**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-get-started-command-shell.html
- **Shell Execution Guide**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-shell-execution.html
- **Amazon Bedrock AgentCore**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
# Amazon Bedrock AgentCore Memory が JSON ペイロードからメモリ抽出に対応

Amazon Bedrock AgentCore Memory now supports extracting memories from non-conversational JSON payloads

**カテゴリ:** What's New
**公開日:** 2026-08-20T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcore-memory-json-payloads)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Memory now supports extracting memories from non-conversational JSON payloads」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Memoryが、会話形式以外のJSON構造化データから直接長期メモリを抽出できるようになりました。これにより、開発者はデータの変換作業を行わずに、行動イベントやアクティビティログなどを効率的に処理できるようになります。

## このアップデートで何が変わったか

- Amazon Bedrock AgentCore Memoryが、会話形式以外のJSONペイロードからメモリを抽出できるようになりました。
- CreateEvent APIがJSON ペイロード型を受け入れるようになり、構造化データおよびマルチターン会話から長期メモリを抽出・統合できるようになりました。
- 開発者は、行動イベント、アクティビティログ、システムイベント、その他のJSONデータ（ペイロードあたり最大100 KB）を、合成会話メッセージに変換することなく、抽出パイプラインに直接渡すことができます。
- 抽出パイプラインは、JSONペイロードを会話と同じ方法で処理し、セマンティック、ユーザー設定、要約、エピソディックの4つの抽出戦略すべてにわたって長期メモリを生成します。
- 非会話型JSONペイロード取り込みは、AgentCore Memoryがサポートされているすべてのリージョンで利用可能です。
- 既存機能と完全に互換性があり、イベントにJSONペイロードを追加するだけで開始できます。

## 対象ユーザー

- Amazon Bedrock を使用している AI エージェント開発者
- 複雑なイベントデータやログを管理する必要があるシステム
- 構造化データから自動的にインサイトを抽出したいエンタープライズ
- AgentCore Memory の長期メモリ機能を活用したいチーム

## 詳細

### 主な機能改善

1. **JSON ペイロード型サポート**
   - CreateEvent API が `json` 型を受け入れるように拡張
   - 会話メッセージへの変換が不要に

2. **対応データ形式**
   - 行動イベント (Behavioral Events)
   - アクティビティログ (Activity Logs)
   - システムイベント (System Events)
   - その他の構造化 JSON データ（最大 100 KB/ペイロード）

3. **抽出戦略の統一処理**
   - セマンティック抽出
   - ユーザー設定抽出
   - 要約抽出
   - エピソディック抽出
   - これら4つの戦略がすべて JSON ペイロードに対応

4. **リージョン対応**
   - AgentCore Memory がサポートされているすべてのリージョンで利用可能

### 効果・メリット

- **開発効率向上**: 複雑なデータ変換処理が不要に
- **柔軟性**: 様々なデータソースを直接活用可能
- **互換性**: 既存機能と完全に互換性があり、イベントに JSON を追加するだけで開始可能
- **スケーラビリティ**: 大規模なイベントデータを効率的に処理
- **統一された処理**: 全データタイプに同じ品質の抽出を提供

### ユースケース

#### 顧客アクティビティ分析
- 顧客の購買履歴や閲覧ログを JSON で記録
- AI エージェントが自動的に顧客の好みやニーズを抽出
- パーソナライズされた推奨やサービスの実現

#### システムモニタリングと自動化
- システムイベントや監視ログを JSON ペイロードで送信
- AI エージェントが異常パターンや傾向を認識
- 自動化されたアラートや対応が可能

#### マルチエージェント環境
- 複数エージェント間の相互作用ログを効率的に保存
- 全体的なワークフロー最適化を支援

## 実装のポイント

1. **API 呼び出しの更新**
   - CreateEvent API に `json` ペイロード型を指定

2. **データフォーマット**
   - JSON データは最大 100 KB
   - 通常の構造化データ形式で送信可能

3. **既存システムとの互換性**
   - 会話メッセージベースの長期メモリ抽出と併用可能
   - グラデュアルなマイグレーションが可能

## 関連アップデート

- **2026年3月**: Amazon Bedrock AgentCore Memory - ストリーミング通知機能
- **2026年5月**: Amazon Bedrock AgentCore Memory - 厳密なメタデータ管理
- **2026年8月**: 本アップデート - JSON ペイロードからのメモリ抽出

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcore-memory-json-payloads)
- [AWS Bedrock AgentCore ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
- [Create an event API](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/create-event.html)
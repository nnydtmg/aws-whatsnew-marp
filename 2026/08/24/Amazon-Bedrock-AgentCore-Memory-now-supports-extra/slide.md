---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore Memory が JSON ペイロードからメモリ抽出に対応

Amazon Bedrock AgentCore Memory now supports extracting memories from non-conversational JSON payloads

**発表日: 2026年8月20日**

---

## 概要

- Amazon Bedrock AgentCore Memoryが、会話形式以外のJSON構造化データから直接長期メモリを抽出できるようになりました。
- これにより、開発者はデータの変換作業を行わずに、行動イベントやアクティビティログなどを効率的に処理できるようになります。

---

## 前提・背景

### 従来の課題

- AgentCore Memory では会話形式のデータのみで長期メモリ抽出が可能
- イベント、ログなどの非会話型データを活用するには、会話メッセージへの変換が必要
- データ変換による処理の複雑化と追加コスト

### 市場の動向

- AI エージェントが扱うデータの多様化
- ストリーミング機能 (2026年3月) や厳密なメタデータ管理 (2026年5月) など、機能の充実化
- エンタープライズでの複雑なワークフロー対応が必要に

---

## 変更内容・新機能

### 1. JSON ペイロード型のサポート

- **CreateEvent API** が `json` ペイロード型を受け入れるように拡張
- JSON データ（最大 100 KB）をそのまま送信可能
- 変換作業を削減し、開発効率が向上

### 2. 対応するデータ形式

- **行動イベント** (Behavioral Events)
- **アクティビティログ** (Activity Logs)
- **システムイベント** (System Events)
- **その他の構造化 JSON データ**

### 3. 抽出パイプラインの統一処理

- JSON ペイロードを会話メッセージと同じ方法で処理
- **4つの抽出戦略** で長期メモリを生成：
  - セマンティック (Semantic)
  - ユーザー設定 (User Preference)
  - 要約 (Summarization)
  - エピソディック (Episodic)

---

## 効果・メリット

- **開発効率の向上**: データ変換作業が不要に
- **柔軟なデータ取り込み**: 様々なデータソースを直接活用可能
- **既存機能との互換性**: イベントに JSON ペイロードを追加するだけで開始可能
- **全リージョン対応**: AgentCore Memory がサポートされるすべてのリージョンで利用可能
- **包括的なメモリ抽出**: 構造化データでも同じ質のインサイト生成が可能

---

## ユースケース

### 1. 顧客アクティビティ分析

- 顧客の購買履歴、閲覧ログなどを JSON で記録
- AI エージェントが自動的に顧客の好みやニーズを抽出
- パーソナライズされた推奨が可能に

### 2. システムモニタリング

- システムイベントや監視ログを JSON ペイロードで送信
- AI エージェントが異常パターンや傾向を認識
- 自動化されたアラートや対応が実現

### 3. マルチエージェント環境

- 複数エージェント間の相互作用ログを保存
- 全体的なワークフロー最適化を支援

---

## まとめ

### 主な改善点

1. **新しい柔軟性**: JSON データをそのまま送信可能
2. **統一された処理**: 全データタイプに対して同じ抽出戦略を適用
3. **シンプルな統合**: 既存システムへの統合が容易
4. **グローバル対応**: すべてのサポート対象リージョンで利用可能

### 次のステップ

1. CreateEvent API のドキュメントを確認
2. 非会話型データを JSON ペイロードで送信するテスト開始
3. 本番環境への段階的展開

---

## 参考URL

- **元記事**: [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcore-memory-json-payloads)
- **AWS Bedrock AgentCore ドキュメント**: [Release Notes](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
- **関連アップデート**: [Memory Streaming (2026年3月)](https://aws.amazon.com/about-aws/whats-new/2026/03/agentcore-memory-streaming-ltm)
- **関連アップデート**: [Strictly Consistent Metadata (2026年5月)](https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-memory-scmetadata)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
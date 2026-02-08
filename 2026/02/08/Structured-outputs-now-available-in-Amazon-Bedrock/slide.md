---
marp: true
theme: default
paginate: true
---

# Structured outputs now available in Amazon Bedrock

**What's New** | 2026-02-04T19:30:00

---

## 概要

- Amazon Bedrockの構造化出力機能により、定義されたJSONスキーマに準拠した機械可読応答が保証され、本番環境ワークフローの予測可能性が向上し、運用オーバーヘッドが削減されます。
- この機能はAnthropicのClaude 4.5モデルと選定されたオープンウェイトモデルで一般提供されており、複数のAPIで利用可能です。

---

## 前提・背景

### 課題
- フォーマットエラーによるダウンストリームシステムへの悪影響
- モデルの出力が予測可能な形式である保証がない
- カスタム検証ロジックによる複雑性と運用オーバーヘッド

### 関連する最近の動向
- Structured outputs on Amazon Bedrock: Schema-compliant AI responses
- Bedrockの新機能としてStructured Outputsが一般提供開始

---

## 変更内容・新機能

### 構造化出力機能
- **JSONスキーマに準拠した応答**: ユーザー定義のJSONスキーマに従った一貫性のある応答を保証
- **ツール定義のサポート**: 厳密なツール定義を使用してツール呼び出しが仕様に一致することを保証
- **複数API対応**: Converse、ConverseStream、InvokeModel、InvokeModelWithResponseStream APIで利用可能

### サポート対象
- **モデル**: Anthropic Claude 4.5、選定されたオープンウェイトモデル
- **リージョン**: Amazon Bedrockがサポートされているすべての商用AWSリージョン

---

## ユースケース

- キーフィールドの抽出タスク
- APIツールを使用するワークフロー駆動
- 機械可読な構造化データの生成が必要なアプリケーション
- エンタープライズワークフロー自動化

---

## 効果・メリット

- **運用オーバーヘッド削減**: カスタム検証ロジックの不要化
- **エラー削減**: 失敗したリクエストと再試行の減少
- **予測可能性向上**: 本番環境ワークフローの予測可能性と復元力の向上
- **複雑性削減**: 小さなフォーマットエラーによるシステム障害を事前に防止

---

## まとめ

- Amazon Bedrockの構造化出力機能により、モデルの出力を完全にコントロール可能に
- JSONスキーマベースの検証により、本番ワークフローの信頼性が大幅に向上
- Claude 4.5およびオープンウェイトモデルで一般提供開始
- エンタープライズアプリケーションの開発効率と安定性が向上

---

## 参考URL

- [元記事: Structured outputs now available in Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/02/structured-outputs-available-amazon-bedrock/)
- [AWS Bedrock Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/structured-output.html)
- [AWS ML Blog: Structured outputs on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/structured-outputs-on-amazon-bedrock-schema-compliant-ai-responses/)

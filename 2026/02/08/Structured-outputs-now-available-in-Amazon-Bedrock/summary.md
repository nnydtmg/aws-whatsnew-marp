# Structured outputs now available in Amazon Bedrock

**カテゴリ:** What's New
**公開日:** 2026-02-04T19:30:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/structured-outputs-available-amazon-bedrock/](https://aws.amazon.com/about-aws/whats-new/2026/02/structured-outputs-available-amazon-bedrock/)

---

## 要約

Amazon Bedrockの構造化出力機能により、定義されたJSONスキーマに準拠した機械可読応答が保証され、本番環境ワークフローの予測可能性が向上し、運用オーバーヘッドが削減されます。この機能はAnthropicのClaude 4.5モデルと選定されたオープンウェイトモデルで一般提供されており、複数のAPIで利用可能です。

## 詳細

- Amazon Bedrockで構造化出力機能が利用可能になりました。

- この機能は、定義されたJSONスキーマに準拠した一貫性のある機械可読応答をファウンデーションモデルから提供します。

- JSONスキーマを定義するか、厳密なツール定義を使用して、モデルのツール呼び出しが仕様に一致することを保証できます。

- キーフィールドの抽出やAPIツールを使用するワークフローの駆動など、一般的な本番環境タスクに役立ちます。

- カスタム検証ロジックの必要性を削減し、失敗したリクエストと再試行の減少を通じて運用オーバーヘッドを低減します。

- Anthropic Claude 4.5モデルと選定されたオープンウェイトモデルで一般提供されています。

- Converse、ConverseStream、InvokeModel、InvokeModelWithResponseStream APIで利用可能です。

- Amazon Bedrockがサポートされているすべての商用AWSリージョンで提供されています。

- 小さなフォーマットエラーがダウンストリームシステムを破壊する可能性がある場合に、本番環境ワークフローの予測可能性と復元力が向上します。

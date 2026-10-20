---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon BedrockのすべてのClaudeモデルで構造化出力が利用可能に

Structured outputs for Claude models available on Amazon Bedrock

**What's New** | 2026-10-20T14:00:00

---

## 概要

- Amazon Bedrockは、すべてのAnthropic Claudeモデルでスキーマ準拠のJSONを返す構造化出力をサポートするようになりました。
- bedrock-runtimeおよびbedrock-mantleの両エンドポイントで利用でき、カスタムの解析・リトライロジック・後処理は不要です。
- 金融、医療、製品カタログ、契約分析、サポートチケットルーティングなどの用途に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Structured outputs for Anthropic Claude models on Amazon Bedrock**
  [詳細](https://aws.amazon.com/blogs/machine-learning/structured-outputs-for-anthropic-claude-models-on-amazon-bedrock)

- **Structured outputs for Claude models available on Amazon Bedrock**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)

- **Structured outputs now a...

---

## 変更内容・新機能

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outputs use constrained decoding to enforce JSON schema during token generation, making output formatting deterministic rather than probabilistic. Two complementary mechanisms are available: JSON Schema o

---

## 効果・メリット

- Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outputs use constrained decoding to enforce JSON schema during token generation, making output formatt

---

## ユースケース

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outp

---

## まとめ

- Structured outputs for Claude models available on Amazon Bedrock について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)

### 関連情報

- [Structured outputs for Anthropic Claude models on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/structured-outputs-for-anthropic-claude-models-on-amazon-bedrock)
- [Structured outputs for Claude models available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)
- [Structured outputs now available in Amazon Bedrock - AWS](https://aws.amazon.com/about-aws/whats-new/2026/02/structured-outputs-available-amazon-bedrock)
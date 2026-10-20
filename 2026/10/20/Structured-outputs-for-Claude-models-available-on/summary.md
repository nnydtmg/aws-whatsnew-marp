# Amazon BedrockのすべてのClaudeモデルで構造化出力が利用可能に

Structured outputs for Claude models available on Amazon Bedrock

**カテゴリ:** What's New
**公開日:** 2026-10-20T14:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)

このページでは、AWS What's Newで発表された「Structured outputs for Claude models available on Amazon Bedrock」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrockは、すべてのAnthropic Claudeモデルでスキーマ準拠のJSONを返す構造化出力をサポートするようになりました。bedrock-runtimeおよびbedrock-mantleの両エンドポイントで利用でき、カスタムの解析・リトライロジック・後処理は不要です。金融、医療、製品カタログ、契約分析、サポートチケットルーティングなどの用途に適しています。

## このアップデートで何が変わったか

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outputs use constrained decoding to enforce JSON schema during token generation, making output formatting deterministic rather than probabilistic. Two complementary mechanisms are available: JSON Schema o

## 対象ユーザー

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outp

## 活用シーン

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outp

## 詳細

Amazon Bedrock now supports structured outputs for all Anthropic Claude models across both the bedrock-runtime and bedrock-mantle endpoints. Users can receive schema-compliant JSON responses that conform to a defined structure, without custom parsing, retry logic, or post-processing. Structured outputs use constrained decoding to enforce JSON schema during token generation, making output formatting deterministic rather than probabilistic. Two complementary mechanisms are available: JSON Schema output format (for data extraction, report generation, API responses) and Strict tool use (for agentic workflows, function calling, multi-step automation). Benefits include valid JSON with no parse errors, type-safe fields, no retries for schema violations, reduced output token count, and lower inference costs. It works with batch inference, cross-Region inference, and streaming. Use cases include extracting required fields from financial earnings reports and compliance documents, parsing clinical notes into Electronic Health Records (EHR), enriching product catalogs with validated results, analyzing contracts for key terms/parties/obligations, and intelligent support ticket routing. Available wherever Claude models are available.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)
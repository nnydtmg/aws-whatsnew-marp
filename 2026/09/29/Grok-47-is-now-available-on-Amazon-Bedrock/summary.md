# Amazon BedrockでxAIのGrok 4.7が利用可能に

Grok 4.7 is now available on Amazon Bedrock

**カテゴリ:** What's New
**公開日:** 2026-09-28T18:29:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-grok-4-7/)

このページでは、AWS What's Newで発表された「Grok 4.7 is now available on Amazon Bedrock」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon BedrockでxAIのGrok 4.7が利用可能になり、コーディングや長時間実行エージェント、ナレッジワークを行うお客様にご活用いただけます。500Kトークンのコンテキストウィンドウと、low / medium / high / xhigh の4段階の推論努力レベルを備えています。US Geoおよびグローバルのクロスリージョン推論に対応しています。

## このアップデートで何が変わったか

Amazon BedrockでxAIのGrok 4.7が利用可能になりました。本モデルはコーディング、長時間実行エージェント、ナレッジワーク向けに構築されています。

主な仕様:
- 500Kトークンのコンテキストウィンドウ
- 4段階の推論努力レベル（low / medium / high / xhigh、デフォルトはhigh）
- テキスト・画像入力、テキスト出力、ツール呼び出し対応
- US Geo（us.xai.grok-4.7）およびグローバル（global.xai.grok-4.7）のクロスリージョン推論
- Responses API、Chat Completions API、InvokeModel、Converse APIに対応
- OpenAI互換エンドポイント経由で利用可能

## 対象ユーザー

Amazon BedrockでxAIのGrok 4.7が利用可能になりました。本モデルはコーディング、長時間実行エージェント、ナレッジワーク向けに構築されています。

## 詳細

Amazon BedrockでxAIのGrok 4.7が利用可能になりました。本モデルはコーディング、長時間実行エージェント、ナレッジワーク向けに構築されています。

主な仕様:
- 500Kトークンのコンテキストウィンドウ
- 4段階の推論努力レベル（low / medium / high / xhigh、デフォルトはhigh）
- テキスト・画像入力、テキスト出力、ツール呼び出し対応
- US Geo（us.xai.grok-4.7）およびグローバル（global.xai.grok-4.7）のクロスリージョン推論
- Responses API、Chat Completions API、InvokeModel、Converse APIに対応
- OpenAI互換エンドポイント経由で利用可能

Grok 4.6からの改善:
- 混合ドキュメント処理の向上
- リポジトリ規模のコーディング（計画立案・エラー回復）の強化
- ブラウザ利用エージェントの強化
- 自己検証（self-verification）の向上
- Intelligence Index: 46（44から向上）
- Coding Agent Index: 56（47から向上）
- ハルシネーション率: 29%（34%から改善）

Amazon Bedrock機能との統合:
- 暗黙的プロンプトキャッシュ
- Amazon Bedrock Guardrails
- 構造化出力（JSON Schema）
- CloudWatchへの呼び出しロギング
- サービスタイア: Standard / Priority / Flex

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-grok-4-7/)
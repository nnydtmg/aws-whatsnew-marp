---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon BedrockでxAIのGrok 4.7が利用可能に

Grok 4.7 is now available on Amazon Bedrock

**What's New** | 2026-09-28T18:29:00

---

## 概要

- Amazon BedrockでxAIのGrok 4.7が利用可能になり、コーディングや長時間実行エージェント、ナレッジワークを行うお客様にご活用いただけます。
- 500Kトークンのコンテキストウィンドウと、low / medium / high / xhigh の4段階の推論努力レベルを備えています。
- US Geoおよびグローバルのクロスリージョン推論に対応しています。

---

## 前提・背景

### 関連する最近の動向

- **Grok 4.7 is now available on Amazon Bedrock | Amazon Web Services**
  [詳細](https://aws.amazon.com/blogs/machine-learning/grok-4-7-is-now-available-on-amazon-bedrock)

- **Grok 4.7 is now available on Amazon Bedrock - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-grok-4-7/)

- **Grok 4.7 on Amazon Bedrock: AWS vs xAI API**
  [詳細](https://www.expla...

---

## 変更内容・新機能

Amazon BedrockでxAIのGrok 4.7が利用可能になりました。本モデルはコーディング、長時間実行エージェント、ナレッジワーク向けに構築されています。

主な仕様:
- 500Kトークンのコンテキストウィンドウ
- 4段階の推論努力レベル（low / medium / high / xhigh、デフォルトはhigh）
- テキスト・画像入力、テキスト出力、ツール呼び出し対応
- US Geo（us.xai.grok-4.7）およびグローバル（global.xai.grok-4.7）のクロスリージョン推論
- Responses API、Chat Completions API、InvokeModel、Converse APIに対応
- OpenAI互換エンドポイント経由で利用可能

---

## 効果・メリット

- Grok 4.6からの改善:
- - 混合ドキュメント処理の向上
- - リポジトリ規模のコーディング（計画立案・エラー回復）の強化
- - ブラウザ利用エージェントの強化
- - 自己検証（self-verification）の向上

---

## まとめ

- Grok 4.7 is now available on Amazon Bedrock について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-grok-4-7/)

### 関連情報

- [Grok 4.7 is now available on Amazon Bedrock | Amazon Web Services](https://aws.amazon.com/blogs/machine-learning/grok-4-7-is-now-available-on-amazon-bedrock)
- [Grok 4.7 is now available on Amazon Bedrock - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-grok-4-7/)
- [Grok 4.7 on Amazon Bedrock: AWS vs xAI API](https://www.explainx.ai/blog/grok-4-7-amazon-bedrock-launch-2026)
- [xAI's Grok 4.7 Goes Live on Amazon Bedrock With 500K Context](https://aiweekly.co/alerts/xais-grok-47-goes-live-on-amazon-bedrock-with-500k-context)
- [Introducing Grok 4.7](https://x.ai/news/grok-4-7)
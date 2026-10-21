# Amazon Bedrock GuardrailsがコンテキストグラウンディングチェックのStandardティアをサポート

Amazon Bedrock Guardrails now supports Standard tier for contextual grounding checks

**カテゴリ:** What's New
**公開日:** 2026-10-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-guardrails-grounding-standard/)

このページでは、AWS What's Newで発表された「Amazon Bedrock Guardrails now supports Standard tier for contextual grounding checks」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock GuardrailsがコンテキストグラウンディングチェックのStandardティアを提供開始し、会話型アプリケーション向けのハルシネーション検出機能が強化されました。

## このアップデートで何が変わったか

利用可能リージョン: US East (N. Virginia), US East (Ohio), US West (N. California), US West (Oregon), Europe (Frankfurt), Europe (Ireland), Europe (Milan), Europe (Paris), Europe (Spain), Europe (Stockholm), Asia Pacific (Tokyo)

## 対象ユーザー

Amazon Bedrock GuardrailsがコンテキストグラウンディングチェックのStandardティアを提供開始しました。この機能はモデル応答が参照ソースに根拠しているか、かつユーザーの質問に関連しているかを確認することでハルシネーションを検出・フィルタリングします。

## 詳細

Amazon Bedrock GuardrailsがコンテキストグラウンディングチェックのStandardティアを提供開始しました。この機能はモデル応答が参照ソースに根拠しているか、かつユーザーの質問に関連しているかを確認することでハルシネーションを検出・フィルタリングします。

StandardティアはClassicティアよりも堅牢であり、以下の特徴を備えています。
- 推論や会話内容を含むレスポンスに対応
- 同一の意味を持つ異なる表現のレスポンスをより一貫してスコアリング
- より包括的な言語サポート（コンテンツフィルターやDenied TopicsのStandardティアと同等）

これまでのコンテキストグラウンディングチェックは、要約・パラフレーズ・質問応答向けの厳密なグラウンディングを適用していました。Standardティアでは、会話型アプリケーションやソースに基づいて推論する応答にも適用できます。

ティアはAmazon BedrockコンソールまたはAPIでガードレールごとに選択できます。既存のガードレールは変更するまでClassicティアのままです。価格は両ティア共通です。Standardティアを使用するには、ガードレールがガードレールプロファイルによるクロスリージョン推論を使用する必要があります。

利用可能リージョン: US East (N. Virginia), US East (Ohio), US West (N. California), US West (Oregon), Europe (Frankfurt), Europe (Ireland), Europe (Milan), Europe (Paris), Europe (Spain), Europe (Stockholm), Asia Pacific (Tokyo)

Amazon Bedrock GuardrailsはApplyGuardrail APIを通じて、いかなる基礎モデルに対しても設定可能なセーフガードを提供します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-guardrails-grounding-standard/)
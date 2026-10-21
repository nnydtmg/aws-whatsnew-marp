---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Advanced Prompt Optimizationがプロンプト短縮をサポート

Amazon Bedrock Advanced Prompt Optimization now supports prompt shortening

**What's New** | 2026-10-20T08:00:00

---

## 概要

- Amazon Bedrock Advanced Prompt Optimizationに、評価スコアを維持しつつプロンプトを短縮する新機能が追加されました。
- 本機能は、トークンコストの削減やレイテンシーの改善を重視するお客様に適しております。

---

## 前提・背景

### これまでの課題

Amazon Bedrock Advanced Prompt Optimizationがプロンプト短縮をサポートしました。本機能は、評価スコアを維持または向上させながらプロンプトの長さを削減するオプション設定です。これまで最適化は品質のみに焦点を当てており、最適化されたプロンプトは元のプロンプトより長くなることが多く、入力トークンコストの増加や最初のトークンまでの時間（TTFT）の増加を招いていました。プロンプト短縮を有効にすると、オプティマイザーがプロンプトの長さを削減します。最適化されたプロ

---

### 関連する最近の動向

- **Amazon Bedrock Advanced Prompt Optimization now supports prompt shortening - AWS**
  [詳細](https://aws.amazon.co...

---

## 変更内容・新機能

Amazon Bedrock Advanced Prompt Optimizationがプロンプト短縮をサポートしました。本機能は、評価スコアを維持または向上させながらプロンプトの長さを削減するオプション設定です。これまで最適化は品質のみに焦点を当てており、最適化されたプロンプトは元のプロンプトより長くなることが多く、入力トークンコストの増加や最初のトークンまでの時間（TTFT）の増加を招いていました。プロンプト短縮を有効にすると、オプティマイザーがプロンプトの長さを削減します。最適化されたプロンプトは、元のプロンプトより短く、かつ評価スコアが同等以上の場合にのみ返されます。それ以外の場合は元のプロンプトが返されるため、より長くスコアの低いプロンプトになることはありません。結果には圧縮率と元・最適化後のトークン数が出力ファイルおよびコンソール結果ページに含まれます。例えば圧縮率0.7は最適化プロンプトが30%少ないトークンを使用することを意味します。プロンプト短縮はステアリング基準、LLM-as-a-judgeルーブリック、カスタムLambda評価など任意の評価方法で動作します。本アッ

---

## 効果・メリット

- Amazon Bedrock Advanced Prompt Optimizationがプロンプト短縮をサポートしました。
- 本機能は、評価スコアを維持または向上させながらプロンプトの長さを削減するオプション設定です。
- これまで最適化は品質のみに焦点を当てており、最適化されたプロンプトは元のプロンプトより長くなることが多く、入力トークンコストの増加や最初のトークンまでの時間（TTFT）の増加を招いていました。
- プロンプト短縮を有効にすると、オプティマイザーがプロンプトの長さを削減します。
- 最適化されたプロンプトは、元のプロンプトより短く、かつ評価スコアが同等以上の場合にのみ返されます。

---

## ユースケース

Amazon Bedrock Advanced Prompt Optimizationがプロンプト短縮をサポートしました。本機能は、評価スコアを維持または向上させながらプロンプトの長さを削減するオプション設定です。これまで最適化は品質のみに焦点を当てており、最適化されたプロンプトは元のプロンプトより長くなることが多く、入力トークンコストの増加や最初のトークンまでの時間（TTFT）の増加を招いていました。プロンプト短縮を有効にすると、オプティマイザーがプロンプトの長さを削減します。最適化されたプロンプトは、元のプロンプトより短く、かつ評価スコアが同等以上の場合にのみ返されます。それ以外の場合は元

---

## まとめ

- Amazon Bedrock Advanced Prompt Optimization now supports prompt shortening について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-prompt-optimization-shortening/)

### 関連情報

- [Amazon Bedrock Advanced Prompt Optimization now supports prompt shortening - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-prompt-optimization-shortening)
- [Trying to Bedrock Advanced Prompt Optimization | AWS Builder Center](https://builder.aws.com/content/3Dk3bpkRCxEGMA1Ojak6pERuB3T/trying-to-bedrock-advanced-prompt-optimization)
- [Bedrock Advanced Prompt Optimization Cuts Model Switching Cost - Futurum](https://futurumgroup.com/insights/bedrock-advanced-prompt-optimization-cuts-the-cost-of-model-switching)
- [Amazon Bedrock introduces new advanced prompt optimization and migration tool | AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-bedrock-introduces-new-advanced-prompt-optimization-and-migration-tool)
- [Migrate your prompts to new models and optimize them on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/migrate-your-prompts-to-new-models-and-optimize-them-on-amazon-bedrock)
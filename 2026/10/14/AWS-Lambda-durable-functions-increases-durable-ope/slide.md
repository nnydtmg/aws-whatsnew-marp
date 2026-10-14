---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functions が操作上限を3万件、チェックポイントを1 MBに拡大

AWS Lambda durable functions increases durable operation and checkpoint payload limits

**What's New** | 2026-10-13T22:00:00

---

## 概要

- AWS Lambda durable functionsのdurable操作上限が3万件、チェックポイントサイズが1 MBに拡大されました。
- 複雑なマルチステップワークフローやエージェントアプリケーションの構築に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda durable functions increases durable operation and checkpoint payload limits  - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase)

- **AWS Lambda Durable Functions Practical Guide**
  [詳細](https://hidekazu-konishi.com/entry/aws_lambda_durable_functions_practical_guide.html)

- **Lambda durable functions - AWS Lambda*...

---

## 変更内容・新機能

- 新機能は、AWS Lambda durable functionsの実行あたりのdurable操作上限を3,000から30,000へ、チェックポイントペイロードサイズを256 KBから1 MBへ引き上げるものでございます。
- 単一実行内で反復ループの拡大、長期間のポーリング、複雑なロールバックパスの構築が可能になります。
- 1 MBのチェックポイントは非同期Lambda呼び出し、Amazon SQS、Amazon EventBridgeの最大ペイロードサイズと一致いたします。
- 本アップデートは、最長1年実行される耐障害性の高いマルチステップアプリケーションやAIワークフローを構築されるお客様に適しております。
- 数千のモデル呼び出しやツール呼び出しを行うエージェントアプリケーションにも有用でございます。

---

## まとめ

- AWS Lambda durable functions increases durable operation and checkpoint payload limits について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)

### 関連情報

- [AWS Lambda durable functions increases durable operation and checkpoint payload limits  - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase)
- [AWS Lambda Durable Functions Practical Guide](https://hidekazu-konishi.com/entry/aws_lambda_durable_functions_practical_guide.html)
- [Lambda durable functions - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html)
- [AWS Lambda durable execution SDK for .NET is now generally available  - AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/lambdadf-dotnet)
- [Basic concepts - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/durable-basic-concepts.html)
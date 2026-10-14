# AWS Lambda durable functions が操作上限を3万件、チェックポイントを1 MBに拡大

AWS Lambda durable functions increases durable operation and checkpoint payload limits

**カテゴリ:** What's New
**公開日:** 2026-10-13T22:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)

このページでは、AWS What's Newで発表された「AWS Lambda durable functions increases durable operation and checkpoint payload limits」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda durable functionsのdurable操作上限が3万件、チェックポイントサイズが1 MBに拡大されました。複雑なマルチステップワークフローやエージェントアプリケーションの構築に適しております。

## このアップデートで何が変わったか

- 新機能は、AWS Lambda durable functionsの実行あたりのdurable操作上限を3,000から30,000へ、チェックポイントペイロードサイズを256 KBから1 MBへ引き上げるものでございます。
- 単一実行内で反復ループの拡大、長期間のポーリング、複雑なロールバックパスの構築が可能になります。
- 1 MBのチェックポイントは非同期Lambda呼び出し、Amazon SQS、Amazon EventBridgeの最大ペイロードサイズと一致いたします。
- 本アップデートは、最長1年実行される耐障害性の高いマルチステップアプリケーションやAIワークフローを構築されるお客様に適しております。
- 数千のモデル呼び出しやツール呼び出しを行うエージェントアプリケーションにも有用でございます。

## 詳細

- 新機能は、AWS Lambda durable functionsの実行あたりのdurable操作上限を3,000から30,000へ、チェックポイントペイロードサイズを256 KBから1 MBへ引き上げるものでございます。
- 単一実行内で反復ループの拡大、長期間のポーリング、複雑なロールバックパスの構築が可能になります。
- 1 MBのチェックポイントは非同期Lambda呼び出し、Amazon SQS、Amazon EventBridgeの最大ペイロードサイズと一致いたします。
- 本アップデートは、最長1年実行される耐障害性の高いマルチステップアプリケーションやAIワークフローを構築されるお客様に適しております。
- 数千のモデル呼び出しやツール呼び出しを行うエージェントアプリケーションにも有用でございます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)
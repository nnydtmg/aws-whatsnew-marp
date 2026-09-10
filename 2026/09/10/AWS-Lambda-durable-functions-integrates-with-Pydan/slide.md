---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda durable functions が Pydantic AI との統合を発表

AWS Lambda durable functions integrates with Pydantic AI

**What's New** | 2026-09-10T18:45:00

---

## 概要

- AWS Lambda durable functions が Pydantic AI と統合され、AI エージェントの進捗を保存して中断後に再開できるようになりました。
- 本機能は、高価なモデル呼び出しの再実行や副作用を避けたい Python 開発者に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda durable functions integrates with Pydantic AI - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-durable-pydantic-ai)

- **AWS Lambda announces durable functions for multi-step applications and AI workflows**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/12/lambda-durable-multi-step-applications-ai-workflows)

- **AWS Lambda Durabili...

---

## 変更内容・新機能

新機能は、AWS Lambda durable functions と Python 向けオープンソース AI エージェントフレームワークである Pydantic AI の統合です。エージェントの進捗が保存され、タイムアウトなどの中断後に最後に完了したステップから再開できます。チェックポイントとリトライのロジックをご自身で実装する必要がなく、耐障害性を獲得できます。各モデル呼び出しとツール呼び出しが耐久実行ステップとなるため、完了済みの処理は繰り返されません。本アップデートは、文書レビューや複数ソースの調査など、高価なモデル呼び出しチェーンを扱う開発者に適しています。再開時の二重請求などの望ましくない副作用を避けたい利用者にも有益です。Python の AWS Lambda durable functions をご利用のお客様が対象であり、サーバー管理は不要で使用したコンピューティング分のみ課金されます。

---

## まとめ

- AWS Lambda durable functions integrates with Pydantic AI について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-durable-pydantic-ai/)

### 関連情報

- [AWS Lambda durable functions integrates with Pydantic AI - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-durable-pydantic-ai)
- [AWS Lambda announces durable functions for multi-step applications and AI workflows](https://aws.amazon.com/about-aws/whats-new/2025/12/lambda-durable-multi-step-applications-ai-workflows)
- [AWS Lambda Durability | Pydantic Docs](https://pydantic.dev/docs/ai/harness/aws-lambda)
- [Build multi-step applications and AI workflows with AWS Lambda durable functions](https://aws.amazon.com/blogs/aws/build-multi-step-applications-and-ai-workflows-with-aws-lambda-durable-functions)
- [GitHub - aws-samples/sample-ai-workflows-in-aws-lambda-durable-functions](https://github.com/aws-samples/sample-ai-workflows-in-aws-lambda-durable-functions)
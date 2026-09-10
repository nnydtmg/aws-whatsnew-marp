# AWS Lambda durable functions が Pydantic AI との統合を発表

AWS Lambda durable functions integrates with Pydantic AI

**カテゴリ:** What's New
**公開日:** 2026-09-10T18:45:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-durable-pydantic-ai/)

このページでは、AWS What's Newで発表された「AWS Lambda durable functions integrates with Pydantic AI」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda durable functions が Pydantic AI と統合され、AI エージェントの進捗を保存して中断後に再開できるようになりました。本機能は、高価なモデル呼び出しの再実行や副作用を避けたい Python 開発者に適しています。

## このアップデートで何が変わったか

新機能は、AWS Lambda durable functions と Python 向けオープンソース AI エージェントフレームワークである Pydantic AI の統合です。エージェントの進捗が保存され、タイムアウトなどの中断後に最後に完了したステップから再開できます。チェックポイントとリトライのロジックをご自身で実装する必要がなく、耐障害性を獲得できます。各モデル呼び出しとツール呼び出しが耐久実行ステップとなるため、完了済みの処理は繰り返されません。本アップデートは、文書レビューや複数ソースの調査など、高価なモデル呼び出しチェーンを扱う開発者に適しています。再開時の二重請求などの望ましくない副作用を避けたい利用者にも有益です。Python の AWS Lambda durable functions をご利用のお客様が対象であり、サーバー管理は不要で使用したコンピューティング分のみ課金されます。

## 対象ユーザー

新機能は、AWS Lambda durable functions と Python 向けオープンソース AI エージェントフレームワークである Pydantic AI の統合です。エージェントの進捗が保存され、タイムアウトなどの中断後に最後に完了したステップから再開できます。チェックポイントとリトライのロジックをご自身で実装する必要がなく、耐障害性を獲得できます。各モデル呼び出しとツール呼び出しが耐久実行ステップとなるため、完了済みの処理は繰り返されません。本アップデートは、文書レビューや複数ソースの調査など、高価なモデル呼び出しチェーンを扱う開発者に適しています。再開時の二重請求などの望ま

## 詳細

新機能は、AWS Lambda durable functions と Python 向けオープンソース AI エージェントフレームワークである Pydantic AI の統合です。エージェントの進捗が保存され、タイムアウトなどの中断後に最後に完了したステップから再開できます。チェックポイントとリトライのロジックをご自身で実装する必要がなく、耐障害性を獲得できます。各モデル呼び出しとツール呼び出しが耐久実行ステップとなるため、完了済みの処理は繰り返されません。本アップデートは、文書レビューや複数ソースの調査など、高価なモデル呼び出しチェーンを扱う開発者に適しています。再開時の二重請求などの望ましくない副作用を避けたい利用者にも有益です。Python の AWS Lambda durable functions をご利用のお客様が対象であり、サーバー管理は不要で使用したコンピューティング分のみ課金されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-durable-pydantic-ai/)
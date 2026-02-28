# Amazon Bedrock batch inference now supports the Converse API format

**カテゴリ:** What's New
**公開日:** 2026-02-27T19:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-batch-inference-supports-converse-api-format/](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-batch-inference-supports-converse-api-format/)

---

## 要約

Amazon Bedrockのバッチ推論がConverse APIフォーマットをサポートするようになり、リアルタイム推論とバッチ推論で統一されたリクエストフォーマットを使用できるようになりました。これにより、プロンプト管理が簡素化され、複数モデル間の切り替えに必要な労力が削減されます。

## 詳細

- Amazon Bedrockのバッチ推論がConverse APIフォーマットをサポートするようになりました。
- これまでバッチ推論ではInvokeModel APIを使用した、モデル固有のリクエストフォーマットが必要でした。
- 今後は、バッチ推論ジョブ作成時にConverseをモデル呼び出しタイプとして選択できるようになりました。
- 標準的なConverse APIリクエストフォーマットを使用してバッチ推論を構成できます。
- Converseバッチジョブの出力はConverse APIレスポンスフォーマットに従います。
- リアルタイム推論とバッチ推論の両方で統一されたリクエストフォーマットを使用できるようになりました。
- プロンプト管理が簡素化され、モデル間の切り替えに必要な労力が削減されます。
- Amazon BedrockコンソールとAPIの両方でConverseモデル呼び出しタイプを設定できます。
- この機能はAmazon Bedrockバッチ推論をサポートするすべてのAWSリージョンで利用可能です。
- このアップデートは、複数のモデルを使用する開発者やエンタープライズユーザーに有益です。
- バッチ処理ワークロードの管理を簡素化したいデータサイエンティストやMLエンジニアに適しています。
# Amazon Bedrock reinforcement fine-tuning adds support for open-weight models with OpenAI-compatible APIs

**カテゴリ:** What's New
**公開日:** 2026-02-17
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-reinforcement-fine-tuning-openai](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-reinforcement-fine-tuning-openai)

---

## 要約

Amazon Bedrockが、OpenAI GPT-OSSおよびQwenモデルに対する強化学習ファインチューニングのサポートを拡張し、OpenAI互換APIを導入することで、開発者が機械学習の専門知識や大量のラベル付きデータなしにモデルの精度を向上させることが可能になりました。このアップデートは、ファインチューニング完了後にセキュアな環境内でモデルを即座に推論に使用できるため、ビジネス要件に適応したファウンデーションモデルの導入を簡素化します。

## 詳細

- Amazon Bedrockが、OpenAI GPT-OSSおよびQwenモデルを含む人気のあるオープンウェイトモデルに対して、強化学習ファインチューニング(RFT)のサポートを拡張しました。
- OpenAI互換のファインチューニングAPIが導入され、開発者がディープラーニングの専門知識や大量のラベル付きデータなしにモデルの精度を向上させることが可能になりました。
- 強化学習ファインチューニングにより、少数のプロンプトからモデルが複数の応答に対するフィードバックを学習でき、従来の大規模なトレーニングデータセットが不要になります。
- 顧客は、ルールベースのグレーダーまたはAIベースのジャッジを使用して報酬関数を定義でき、コード生成や数学推論などの客観的なタスク、および命令追従や会話品質などの主観的なタスク用の組み込みテンプレートが提供されます。
- AWS Lambda関数を使用したカスタム採点ロジックと中間モデルチェックポイントへのアクセスにより、反復速度とトレーニング効率が向上します。
- すべての専有データはカスタマイズプロセス全体を通じてAWSのセキュアで管理された環境内に留まります。
- ファインチューニング完了後、顧客はAmazon BedrockのOpenAI互換API（Responses APIおよびChat Completions API）を通じて、追加のデプロイメント手順なしで、ファインチューニングされたモデルをオンデマンド推論に即座に使用できます。
- サポートされるモデルはqwen.qwen3-32bおよびopenai.gpt-oss-20bです。
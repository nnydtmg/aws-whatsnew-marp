# AWS Step Functions が AgentCore によるエージェント推論ステップに対応

AWS Step Functions adds AgentCore-powered agentic reasoning step

**カテゴリ:** What's New
**公開日:** 2026-06-03T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/)

このページでは、AWS What's Newで発表された「AWS Step Functions adds AgentCore-powered agentic reasoning step」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Step Functions が Amazon Bedrock AgentCore と統合され、ワークフローに AI エージェントの推論ステップを追加できるようになりました。このアップデートは、ドキュメント分類や非構造化データの処理など、複雑な推論タスクを自動化し、監査可能性を確保したい組織に最適です。

## このアップデートで何が変わったか

- AWS Step Functions が Amazon Bedrock AgentCore との統合により、ワークフローに AI エージェントの推論ステップを追加できるようになりました。

- 複数のエージェントを並列または順序立てて実行でき、重要なアクション前に人間の承認を追加できます。

## 対象ユーザー

このアップデートは、ワークフロー内で AI エージェントの推論機能を必要とする企業や開発者に適しています。

## 詳細

- AWS Step Functions が Amazon Bedrock AgentCore との統合により、ワークフローに AI エージェントの推論ステップを追加できるようになりました。

- ドキュメント分類や非構造化フォームからの要素抽出など、ワークフロー内の推論タスクを自動化することが可能です。

- 複数のエージェントを並列または順序立てて実行でき、重要なアクション前に人間の承認を追加できます。

- ワークフロー実行履歴にはエージェント入力、出力、トークン使用量、実行時間が表示され、CloudWatch でエージェント決定を追跡・監査できます。

- Workflow Studio から既存のハーネスを再利用するか、新しいハーネスを直接作成できます。

- モデル、システムプロンプト、ツールなどの呼び出しごとのオーバーライドにより、設定を複製することなくエージェントを適応させられます。

- セッション ID を使用してエージェントコンテキストをワークフロー実行内または実行間で永続化できます。

- 米国東部（バージニア北部）、米国西部（オレゴン）、ヨーロッパ（フランクフルト）、アジアパシフィック（シドニー）で利用可能です。

- Step Functions の標準料金が適用され、統合に追加料金は発生せず、Bedrock と AgentCore の標準料金のみが適用されます。

このアップデートは、ワークフロー内で AI エージェントの推論機能を必要とする企業や開発者に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/)
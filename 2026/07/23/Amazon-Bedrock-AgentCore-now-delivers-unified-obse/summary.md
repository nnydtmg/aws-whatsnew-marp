# Amazon Bedrock AgentCore の統合オブザーバビリティ機能が利用可能に

Amazon Bedrock AgentCore now delivers unified observability with traces and logs in a single log group

**カテゴリ:** What's New
**公開日:** 2026-07-23T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-unified-observability-single-log-group/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore now delivers unified observability with traces and logs in a single log group」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreの新機能により、エージェントのトレース、プロンプト、ログがすべて単一のCloudWatchログループに統合されるようになり、デバッグ効率の向上とセキュリティ制御の強化が実現されました。この更新は、複数のログ宛先を管理する複雑性を軽減し、マルチエージェントシステムの運用を簡素化する必要があるエンタープライズ組織に特に有益です。

## このアップデートで何が変わったか

- 新機能により、すべてのエージェントテレメトリー（トレース、プロンプト、構造化ログ、標準出力）が単一のエージェント専用ログループ（`/aws/bedrock-agentcore/runtimes/<agent_id>-<endpoint_name>`）に配信されます。

- この機能は、AgentCoreランタイムがサポートされているすべてのAWSコマーシャルリージョンで利用可能です。

## 詳細

- Amazon Bedrock AgentCoreは、エージェントのトレースとログを単一のCloudWatchログループに統合して配信するようになりました。

- 従来は、トレーススパンとイベントログが複数の異なる宛先に分散していたため、デバッグ時に複数のログループを検索する必要がありました。

- 新機能により、すべてのエージェントテレメトリー（トレース、プロンプト、構造化ログ、標準出力）が単一のエージェント専用ログループ（`/aws/bedrock-agentcore/runtimes/<agent_id>-<endpoint_name>`）に配信されます。

- トレースとログを一箇所で相関させることができ、IAMポリシーとカスタマー管理キー（CMK）暗号化を個別のエージェントレベルでスコープ設定できるようになりました。

- 2026年7月20日以降に作成される新規エージェントは、デフォルトで統合オブザーバビリティが有効になります。

- 既存のエージェントについては、エージェントランタイムで`UNIFIED_TRACES_DESTINATION_ENABLED=true`環境変数を設定し、ADOTをバージョン0.17.1以上にアップグレードする必要があります。

- この機能は、AgentCoreランタイムがサポートされているすべてのAWSコマーシャルリージョンで利用可能です。

- マルチエージェントシステムでは、各エージェントの完全な実行履歴が一箇所に保持されるため、エンドツーエンドのデバッグが容易になります。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-unified-observability-single-log-group/)
- [Amazon Bedrock AgentCore ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/)
- [CloudWatch オブザーバビリティ設定](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/observability-configure.html)
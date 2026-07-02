# Amazon CloudWatch ログクエリからのアラーム作成に対応

Amazon CloudWatch supports creating alarms from log queries

**カテゴリ:** What's New
**公開日:** 2026-07-01T21:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-log-alarms/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch supports creating alarms from log queries」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatchは、ログクエリから直接アラームを作成できる新機能をリリースしました。これにより、メトリクスフィルターなどの中間ステップが不要になり、ログの異常検知と監視がより効率的になります。

## このアップデートで何が変わったか

- この機能は、中東（UAE）と中東（バーレーン）を除くすべての商用AWSリージョンで利用可能です。

- このアップデートは、ログデータの異常を監視および検出する必要があるDevOpsエンジニア、SRE、およびシステム管理者に適しています。

## 対象ユーザー

- CloudWatchコンソール、AWS CLI、AWS CloudFormation、およびAWS SDKを使用してログクエリベースのアラームを作成できます。

## 詳細

- Amazon CloudWatchがログクエリからアラームを直接作成できるようになりました。

- メトリクスフィルターやカスタムメトリクスを中間ステップとして作成する必要がなくなり、ログ分析ワークフローが簡素化されました。

- ログクエリベースのアラームは、Amazon SNS通知やAmazon EventBridge統合を含むすべての標準CloudWatchアラームアクションをサポートしています。

- この機能は、中東（UAE）と中東（バーレーン）を除くすべての商用AWSリージョンで利用可能です。

- CloudWatchコンソール、AWS CLI、AWS CloudFormation、およびAWS SDKを使用してログクエリベースのアラームを作成できます。

- ユーザーは単一のワークフロー内でエラー率をカウントするクエリを作成し、しきい値を設定し、ログコンテキスト付きのアラーム通知を受け取ることができます。

- このアップデートは、ログデータの異常を監視および検出する必要があるDevOpsエンジニア、SRE、およびシステム管理者に適しています。

- ログ分析から迅速にアラームを設定したいユーザーにとって、ワークフローが大幅に短縮されるため有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-log-alarms/)

# Amazon CloudWatch Logs がログイベントを AWS リソースタグで拡張

Amazon CloudWatch Logs enriches log events with AWS resource tags

**カテゴリ:** What's New
**公開日:** 2026-06-30T21:15:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-resource-tags/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs enriches log events with AWS resource tags」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Logsは、ログ取り込み時にAWSリソースタグを自動的に追加する新機能を提供し、ロギング計装の変更なしにタグベースのフィルタリングと分析が可能になりました。この機能は追加費用なしで、ほぼすべての商用AWSリージョンで利用可能です。

## このアップデートで何が変わったか

- Amazon CloudWatch Logsが、AWS リソースタグでログイベントを自動的に拡張する新機能を提供するようになりました。

- ログ取り込み時にリソースタグが直接ログイベントに追加されるため、ロギング計装の変更が不要です。

## 詳細

- Amazon CloudWatch Logsが、AWS リソースタグでログイベントを自動的に拡張する新機能を提供するようになりました。

- ログ取り込み時にリソースタグが直接ログイベントに追加されるため、ロギング計装の変更が不要です。

- チームの所有権、環境、コストセンター、アプリケーション名などのメタデータを使用して、ログをフィルタリング、検索、分析することが容易になります。

- カスタムパイプラインの構築やアプリケーションログへの手動コンテキスト追加が不要になります。

- ログクエリでタグを即座に使用でき、特定のチームが所有する本番環境リソースのすべてのログを迅速にフィルタリングできます。

- インシデント調査中にコストセンター別のフィルタリングが可能です。

- この機能は、中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）を除くすべての商用AWSリージョンで利用可能です。

- Amazon CloudWatch設定またはAWS CLI、AWS SDKを通じてテレメトリのリソースタグを有効にすることで、既存のAWSリソースタグを使用してログイベントを拡張できます。

- タグ拡張機能は追加費用なしで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-resource-tags/)
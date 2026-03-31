# Amazon CloudWatch now supports multi-account and region log centralization based on data source

**カテゴリ:** What's New
**公開日:** 2026-03-30T23:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-centralization-datasource/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-centralization-datasource/)

---

## 要約

Amazon CloudWatchのログ一元化機能が、データソース名とタイプに基づくルール定義に対応し、複数のAWSアカウントとリージョンからのログをより柔軟に一元化できるようになりました。この更新は、組織全体のログ管理を効率化したい中央セキュリティチームやクラウド運用チームに特に有益です。

## 詳細

- Amazon CloudWatchのログ一元化機能が、データソース名とタイプに基づくルール定義に対応するようになりました。

- 複数のAWSアカウントとリージョンからのログを単一の宛先アカウントにコピーする際に、ロググループ名だけでなく、VPC Flow LogsやEKS Audit Logs、CloudTrail Logsなどのデータソースを指定して集約できるようになりました。

- データソース名とタイプはAWSサービスログについては自動的に検出され、アプリケーションログについてはロググループタグに基づいて識別されます。

- 中央セキュリティチームは、個別のロググループ名のリストを管理することなく、組織全体のCloudTrailおよびVPCデータソースからのすべてのログを一元化するルールを作成できるようになりました。

- CloudWatchコンソールまたはAWS CLIおよびAWS SDKを使用して、一元化ルールを作成または変更し、ルール設定でデータソース選択基準を指定できます。

- このデータソース選択機能は、CloudWatchログ一元化が利用可能なすべてのAWSコマーシャルリージョンで利用可能です。

- ログの取り込み、ストレージ、データ転送には標準的なCloudWatch Logsの料金が適用されます。

# Amazon CloudWatch Logs Insightsがクエリ実行前のスキャンバイト数見積もりをサポート

Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query

**カテゴリ:** What's New
**公開日:** 2026-09-29T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs Insights now lets you estimate bytes scanned before running a query」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Logs Insightsでは、クエリを実行せずにスキャンされるバイト数を見積もることができます。本機能は、実行前に条件を調整してコストを最適化したいお客様に適しています。

## このアップデートで何が変わったか

- Amazon CloudWatch Logs Insightsでは、クエリ実行前にスキャンされるログデータのバイト数を見積もることができるようになりました。
- 選択したロググループと時間範囲に対して、クエリを実行せずにスキャン量をバイト単位で推定できます。
- コンソールでは条件変更時に見積もりが自動表示され、CLIやAPIではestimateコマンドで明示的にリクエストできます。
- estimateコマンドを使用するクエリにはクエリ料金が発生せず、すべてのAWS商用リージョンでご利用いただけます。
- 本アップデートは、クエリ実行前にロググループや時間範囲、フィルターを調整したいお客様に適しています。
- スキャン量を事前に把握し、コストを最適化したいユーザーにとって有用です。

## 対象ユーザー

- Amazon CloudWatch Logs Insightsでは、クエリ実行前にスキャンされるログデータのバイト数を見積もることができるようになりました。
- 選択したロググループと時間範囲に対して、クエリを実行せずにスキャン量をバイト単位で推定できます。
- コンソールでは条件変更時に見積もりが自動表示され、CLIやAPIではestimateコマンドで明示的にリクエストできます。
- estimateコマンドを使用するクエリにはクエリ料金が発生せず、すべてのAWS商用リージョンでご利用いただけます。
- 本アップデートは、クエリ実行前にロググループや時間範囲、フィルターを調整したいお客

## 詳細

- Amazon CloudWatch Logs Insightsでは、クエリ実行前にスキャンされるログデータのバイト数を見積もることができるようになりました。
- 選択したロググループと時間範囲に対して、クエリを実行せずにスキャン量をバイト単位で推定できます。
- コンソールでは条件変更時に見積もりが自動表示され、CLIやAPIではestimateコマンドで明示的にリクエストできます。
- estimateコマンドを使用するクエリにはクエリ料金が発生せず、すべてのAWS商用リージョンでご利用いただけます。
- 本アップデートは、クエリ実行前にロググループや時間範囲、フィルターを調整したいお客様に適しています。
- スキャン量を事前に把握し、コストを最適化したいユーザーにとって有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-logs-estimate-bytes-scanned/)
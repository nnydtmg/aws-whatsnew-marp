# AWS Lambda durable functions のデフォルト実行・APIクォータが引き上げ

AWS Lambda durable functions increases default execution and API quotas

**カテゴリ:** What's New
**公開日:** 2026-11-05T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)

このページでは、AWS What's Newで発表された「AWS Lambda durable functions increases default execution and API quotas」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda耐久関数のデフォルトクォータが引き上げられ、注文処理や文書パイプラインなどのワークロードがより多くの並列実行を行えるようになります。

## このアップデートで何が変わったか

AWS Lambda durable functions の実行中実行数およびAPIリクエストレートのデフォルトクォータが引き上げられた。実行中の耐久実行数は100万から500万へ、関連APIのリクエストレートも大幅に増加。新クォータは全AWSリージョンに適用されるが、US East (N. Virginia)、US West (Oregon)、Europe (Ireland) は2倍のクォータを持つ。注文処理や文書パイプラインなどのワークロードに適している。外部作業の待機後に多数の実行を一斉に再開する場合や、ダッシュボードやスクリプトで実行を監視・管理するケースにも有益。ステータス確認、実行一覧、履歴読み取り、実行停止を少なくとも10倍の頻度で実行できるようになった。

## 詳細

AWS Lambda durable functions の実行中実行数およびAPIリクエストレートのデフォルトクォータが引き上げられた。実行中の耐久実行数は100万から500万へ、関連APIのリクエストレートも大幅に増加。新クォータは全AWSリージョンに適用されるが、US East (N. Virginia)、US West (Oregon)、Europe (Ireland) は2倍のクォータを持つ。注文処理や文書パイプラインなどのワークロードに適している。外部作業の待機後に多数の実行を一斉に再開する場合や、ダッシュボードやスクリプトで実行を監視・管理するケースにも有益。ステータス確認、実行一覧、履歴読み取り、実行停止を少なくとも10倍の頻度で実行できるようになった。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-functions-default-quotas/)
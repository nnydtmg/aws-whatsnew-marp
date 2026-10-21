# Amazon CloudWatch Alarmsがアラームアクションのペイロードでタグをサポート

Amazon CloudWatch Alarms now supports tags in alarm actions payload

**カテゴリ:** What's New
**公開日:** 2026-10-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-cloudwatch-tags-on-alarm-actions-payload)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Alarms now supports tags in alarm actions payload」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Alarmsは、アクションペイロードにアラームタグを含める新機能を発表しました。有効化すると、アラーム状態変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。共有通知パイプラインで多数のアラームを処理するお客様に適しており、タグ照合のための追加ルックアップを回避できます。

## このアップデートで何が変わったか

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルーティングしていたチームは、以前は各イベントごとにListTagsForResourceを呼び出して所有チームを特定する必要がありましたが、本機能によりタグが通知メッセージに含まれるため、メッセージから直接ルーティングできます。Amazon CloudWatchが利用可能なすべてのAWSリージョン（中東（UAE）および中東（バーレーン）を除く）で利用可能です。

## 対象ユーザー

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルー

## 活用シーン

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルー

## 詳細

Amazon CloudWatch Alarmsは、アラームアクションのペイロードおよびAmazon EventBridgeイベントにタグを含める機能をサポートするようになりました。有効化すると、アラーム状態の変更時にAmazon SNS、AWS Lambda、Amazon EventBridgeへ送信されるメッセージへアラームタグが追加されます。本設定はデフォルトでオフであり、アラームごとにすべてのタグ、選択したキーのみ、または除外キー以外を含められます。メトリックアラーム、複合アラーム、ログアラームでサポートされます。例えば、単一のSNSトピック経由で百数のアラームをLambda関数へルーティングしていたチームは、以前は各イベントごとにListTagsForResourceを呼び出して所有チームを特定する必要がありましたが、本機能によりタグが通知メッセージに含まれるため、メッセージから直接ルーティングできます。Amazon CloudWatchが利用可能なすべてのAWSリージョン（中東（UAE）および中東（バーレーン）を除く）で利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-cloudwatch-tags-on-alarm-actions-payload)
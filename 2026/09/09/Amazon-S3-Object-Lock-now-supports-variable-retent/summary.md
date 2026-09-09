# Amazon S3 Object Lockがイベントホールドによる可変保持をサポート

Amazon S3 Object Lock now supports variable retention with event holds

**カテゴリ:** What's New
**公開日:** 2026-09-08T04:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-object-lock-variable-retention/)

このページでは、AWS What's Newで発表された「Amazon S3 Object Lock now supports variable retention with event holds」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 Object Lockは、将来のイベントを起点とする可変保持に対応したイベントホールドを新たにサポートします。契約締結や監査完了などの将来イベントから保持期間が始まるオブジェクトにWORM保護を適用できます。ホールド解除後に指定期間の保持が開始されるため、イベントベースの保持要件やSEC Rule 17a-4(f)、FINRA Rule 4511、CFTC Regulation 1.31などの規制準拠に適しています。

## このアップデートで何が変わったか

Amazon S3 Object Lock が可変保持（variable retention）とイベントホールドをサポートしました。契約締結や監査完了など、将来のイベントから保持期間が始まるオブジェクトに WORM（Write Once Read Many）保護を適用できます。イベントホールドを保持期間とともにオブジェクトに設定すると、ホールド中は S3 がオブジェクトを保護します。ホールドを解除すると、S3 は解除時点から指定した期間オブジェクトを保持します。法的ホールド（legal hold）は解除すると直ちに保護が終了しますが、イベントホールドはトリガーイベント後に必要な保持期間の WORM 準拠を提供するため、ポリシーが要求する期間を超えてデータを保持することなくイベントベースの保持要件を満たせます。イベントホールドは個別オブジェクトへの適用、バケットデフォルトとしての設定、S3 Batch Operations での一括適用が可能です。新規の AWS IAM およびバケットポリシーの条件キーで、ホールドの設定・解除権限や最小・最大保持期間を制御できます。AWS CloudTr

## 対象ユーザー

Amazon S3 Object Lock が可変保持（variable retention）とイベントホールドをサポートしました。契約締結や監査完了など、将来のイベントから保持期間が始まるオブジェクトに WORM（Write Once Read Many）保護を適用できます。イベントホールドを保持期間とともにオブジェクトに設定すると、ホールド中は S3 がオブジェクトを保護します。ホールドを解除すると、S3 は解除時点から指定した期間オブジェクトを保持します。法的ホールド（legal hold）は解除すると直ちに保護が終了しますが、イベントホールドはトリガーイベント後に必要な保持期間の WO

## 詳細

Amazon S3 Object Lock が可変保持（variable retention）とイベントホールドをサポートしました。契約締結や監査完了など、将来のイベントから保持期間が始まるオブジェクトに WORM（Write Once Read Many）保護を適用できます。イベントホールドを保持期間とともにオブジェクトに設定すると、ホールド中は S3 がオブジェクトを保護します。ホールドを解除すると、S3 は解除時点から指定した期間オブジェクトを保持します。法的ホールド（legal hold）は解除すると直ちに保護が終了しますが、イベントホールドはトリガーイベント後に必要な保持期間の WORM 準拠を提供するため、ポリシーが要求する期間を超えてデータを保持することなくイベントベースの保持要件を満たせます。イベントホールドは個別オブジェクトへの適用、バケットデフォルトとしての設定、S3 Batch Operations での一括適用が可能です。新規の AWS IAM およびバケットポリシーの条件キーで、ホールドの設定・解除権限や最小・最大保持期間を制御できます。AWS CloudTrail が全てのホールド操作を記録し、S3 Inventory がバケット全体のホールド状態を報告します。保持期間の最小値は1日、最大値は100年です。本機能は中国リージョンを含む全 AWS リージョンで追加料金なしで利用可能です。Cohasset Associates により SEC Rule 17a-4(f)、FINRA Rule 4511、CFTC Regulation 1.31 の対象環境での使用が評価されています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-object-lock-variable-retention/)
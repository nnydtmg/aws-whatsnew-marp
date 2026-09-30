# IAM Identity Center の Identity Store API がリソースARNの直接指定に対応

AWS IAM Identity Center Identity Store APIs now accept resource ARNs in addition to resource IDs

**カテゴリ:** What's New
**公開日:** 2026-09-30T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/iam-identity-center-apis-arns/)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center Identity Store APIs now accept resource ARNs in addition to resource IDs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity CenterのIdentity Store APIがリソースARNを直接受け付けるようになりました。本機能はARNをお持ちの開発者の方の実装簡素化に役立ちます。

## このアップデートで何が変わったか

AWS IAM Identity CenterのIdentity Store APIがリソースIDに加えてリソースARNを受け付けるようになりました。ユーザー、グループ、グループメンバーシップ、またはアイデンティティストアのARNを直接渡すことができます。既存の統合は変更なく動作し続けます。本アップデートはIdentity Store APIを利用して構築されている開発者の方に適しています。IAMポリシー評価やCloudTrailイベントからARNをお持ちの方のコード簡素化に役立ちます。ARNサポートは追加的な機能であり、既存の統合は変更なく動作し続けます。これまではARNからリソースIDを抽出してからAPIを呼び出す必要がありましたが、この変更によりどちらの形式も直接渡せるようになり、アプリケーションコードが簡素化され、パースエラーのリスクが排除されます。この変更はIdentity Store APIのすべてのリクエスト識別子フィールドに適用されます。レスポンスは従来どおりリソースIDを返します。不正な形式やリソースタイプが異なるARNはValidationExceptionを返しま

## 対象ユーザー

AWS IAM Identity CenterのIdentity Store APIがリソースIDに加えてリソースARNを受け付けるようになりました。ユーザー、グループ、グループメンバーシップ、またはアイデンティティストアのARNを直接渡すことができます。既存の統合は変更なく動作し続けます。本アップデートはIdentity Store APIを利用して構築されている開発者の方に適しています。IAMポリシー評価やCloudTrailイベントからARNをお持ちの方のコード簡素化に役立ちます。ARNサポートは追加的な機能であり、既存の統合は変更なく動作し続けます。これまではARNからリソースIDを抽

## 詳細

AWS IAM Identity CenterのIdentity Store APIがリソースIDに加えてリソースARNを受け付けるようになりました。ユーザー、グループ、グループメンバーシップ、またはアイデンティティストアのARNを直接渡すことができます。既存の統合は変更なく動作し続けます。本アップデートはIdentity Store APIを利用して構築されている開発者の方に適しています。IAMポリシー評価やCloudTrailイベントからARNをお持ちの方のコード簡素化に役立ちます。ARNサポートは追加的な機能であり、既存の統合は変更なく動作し続けます。これまではARNからリソースIDを抽出してからAPIを呼び出す必要がありましたが、この変更によりどちらの形式も直接渡せるようになり、アプリケーションコードが簡素化され、パースエラーのリスクが排除されます。この変更はIdentity Store APIのすべてのリクエスト識別子フィールドに適用されます。レスポンスは従来どおりリソースIDを返します。不正な形式やリソースタイプが異なるARNはValidationExceptionを返します。この機能はIAM Identity Centerが提供されているすべてのAWSリージョンで追加料金なしで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/iam-identity-center-apis-arns/)
---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Identity Center の Identity Store API がリソースARNの直接指定に対応

AWS IAM Identity Center Identity Store APIs now accept resource ARNs in addition to resource IDs

**What's New** | 2026-09-30T08:00:00

---

## 概要

- AWS IAM Identity CenterのIdentity Store APIがリソースARNを直接受け付けるようになりました。
- 本機能はARNをお持ちの開発者の方の実装簡素化に役立ちます。

---

## 前提・背景

### これまでの課題

AWS IAM Identity CenterのIdentity Store APIがリソースIDに加えてリソースARNを受け付けるようになりました。ユーザー、グループ、グループメンバーシップ、またはアイデンティティストアのARNを直接渡すことができます。既存の統合は変更なく動作し続けます。本アップデートはIdentity Store APIを利用して構築されている開発者の方に適しています。IAMポリシー評価やCloudTrailイベントからARNをお持ちの方のコード簡素化に役立ちます。ARNサ

---

### 関連する最近の動向

- **Welcome - Identity Store**
  [詳細](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/Wel...

---

## 変更内容・新機能

AWS IAM Identity CenterのIdentity Store APIがリソースIDに加えてリソースARNを受け付けるようになりました。ユーザー、グループ、グループメンバーシップ、またはアイデンティティストアのARNを直接渡すことができます。既存の統合は変更なく動作し続けます。本アップデートはIdentity Store APIを利用して構築されている開発者の方に適しています。IAMポリシー評価やCloudTrailイベントからARNをお持ちの方のコード簡素化に役立ちます。ARNサポートは追加的な機能であり、既存の統合は変更なく動作し続けます。これまではARNからリソースIDを抽出してからAPIを呼び出す必要がありましたが、この変更によりどちらの形式も直接渡せるようになり、アプリケーションコードが簡素化され、パースエラーのリスクが排除されます。この変更はIdentity Store APIのすべてのリクエスト識別子フィールドに適用されます。レスポンスは従来どおりリソースIDを返します。不正な形式やリソースタイプが異なるARNはValidationExceptionを返しま

---

## まとめ

- AWS IAM Identity Center Identity Store APIs now accept resource ARNs in addition to resource IDs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/iam-identity-center-apis-arns/)

### 関連情報

- [Welcome - Identity Store](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/Welcome.html)
- [Announcing new AWS IAM Identity Center APIs to manage users and groups at scale](https://aws.amazon.com/blogs/security/announcing-new-aws-iam-identity-center-apis-to-manage-users-and-groups-at-scale)
- [AWS IAM Identity Center Identity Store APIs now accept resource ARNs in addition to resource IDs](https://aws.amazon.com/about-aws/whats-new/2026/09/iam-identity-center-apis-arns/)
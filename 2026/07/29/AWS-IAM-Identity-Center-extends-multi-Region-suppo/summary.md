# AWS IAM Identity Center、Identity Center ディレクトリでマルチリージョン対応拡大

AWS IAM Identity Center extends multi-Region support to Identity Center directory

**カテゴリ:** What's New
**公開日:** 2026-07-29T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center extends multi-Region support to Identity Center directory」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity Centerが、Identity Center directoryを使用するインスタンスにおいてマルチリージョンサポートを拡張し、プライマリリージョンから追加リージョンへのアイデンティティと権限のレプリケーションが可能になりました。これにより、プライマリリージョンの障害時にもユーザーアクセスが継続され、ビジネスニーズに応じたリージョンへのアプリケーション展開が実現します。

## このアップデートで何が変わったか

- AWS IAM Identity Centerが、Identity Center directoryを使用する場合のマルチリージョンサポートを拡張したことが新機能です。

- プライマリリージョンから選択した追加リージョンへ、アイデンティティ、権限付与、その他の情報が自動的にレプリケーションされます。

## 対象ユーザー

- プライマリリージョンで障害が発生した場合でも、ユーザーは追加リージョンでプロビジョニングされた権限を使用してAWSアカウントへのアクセスを継続できます。

## 詳細

- AWS IAM Identity Centerが、Identity Center directoryを使用する場合のマルチリージョンサポートを拡張したことが新機能です。

- 以前はExternal identity providersに接続されたインスタンスのみマルチリージョン対応でしたが、今回Identity Center directoryを使用するインスタンスにも対応するようになりました。

- プライマリリージョンから選択した追加リージョンへ、アイデンティティ、権限付与、その他の情報が自動的にレプリケーションされます。

- プライマリリージョンで障害が発生した場合でも、ユーザーは追加リージョンでプロビジョニングされた権限を使用してAWSアカウントへのアクセスを継続できます。

- アプリケーション管理者は標準的なアプリケーションデプロイメントワークフローを使用して追加リージョンにアプリケーションをデプロイできます。

- このアップデートはユーザーアクセスの復元力を向上させ、データレジデンシーやユーザー近接性などのビジネスニーズに合わせたAWSリージョンへのアプリケーション展開を可能にします。

- マルチリージョンサポートは17の商用AWSリージョンで利用可能であり、マルチリージョンカスタマーマネージドKMSキーの設定が必要です。

- IAM Identity Centerは追加費用なく提供されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory)
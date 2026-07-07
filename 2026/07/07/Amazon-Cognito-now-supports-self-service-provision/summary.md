# Amazon CognitoがセルフサービスのAPIレート制限設定をサポート

Amazon Cognito now supports self-service provisioned API rate limits

**カテゴリ:** What's New
**公開日:** 2026-07-06T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/cognito-provisioned-limits)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports self-service provisioned API rate limits」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognitoは、セルフサービスによるプロビジョニングAPIレート制限の調整機能を新たに提供開始いたしました。これにより、ユーザーはコンソールまたはAPI操作を通じてレート制限を即座に変更でき、アプリケーションのトラフィック変動に柔軟に対応することが可能になります。

## このアップデートで何が変わったか

- セルフサービスプロビジョニング制限は、Amazon Cognitoが利用可能なすべてのAWSリージョンで調整可能なAPIカテゴリに対して利用可能です。

- この機能は追加機能として有料で提供されており、詳細な価格情報はAmazon Cognitoの価格ページで確認できます。

## 対象ユーザー

Amazon Cognitoを利用しており、APIレート制限の柔軟な調整が必要なユーザー

## 詳細

- Amazon Cognitoは、プロビジョニングされたAPIレート制限をオンデマンドで増減できるようになりました。

- 従来は、Service Quotasを通じてレート制限の増加をリクエストする必要があり、手動レビューされていました。

- 新しいセルフサービスモデルでは、Amazon Cognitoコンソールまたは新しいリミットプロビジョニングAPI操作を使用して、アカウントレベルの最大制限までレート制限を設定できます。

- レート制限の変更は即座に有効になります。

- この機能により、事前に予測してレート制限を計画する必要がなくなり、アプリケーションのトラフィックパターンに迅速に対応できるようになります。

- セルフサービスプロビジョニング制限は、Amazon Cognitoが利用可能なすべてのAWSリージョンで調整可能なAPIカテゴリに対して利用可能です。

- この機能は追加機能として有料で提供されており、詳細な価格情報はAmazon Cognitoの価格ページで確認できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/cognito-provisioned-limits)
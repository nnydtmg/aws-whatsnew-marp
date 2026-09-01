# Amazon Cognito がユーザープールドメインなしでマシン間認可に対応

Amazon Cognito now supports machine-to-machine authorization without a user pool domain

**カテゴリ:** What's New
**公開日:** 2026-08-31
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports machine-to-machine authorization without a user pool domain」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognitoはユーザープールドメインなしでマシン間認可を実現するGetClientToken APIを新たに提供いたします。これによりサービス間通信の認可がより柔軟になります。

## このアップデートで何が変わったか

新機能といたしましては、Amazon CognitoがGetClientToken APIオペレーションをサポートし、ユーザープールドメインを設定せずにAWS SDK、CLI、またはAPIを通じてマシン間認可用のアクセストークンを取得できるようになったことです。この更新は、アプリケーション、マイクロサービス、および自動化されたワークロードにおけるサービス間通信の認可を必要とするお客様に適しております。

## 対象ユーザー

新機能といたしましては、Amazon CognitoがGetClientToken APIオペレーションをサポートし、ユーザープールドメインを設定せずにAWS SDK、CLI、またはAPIを通じてマシン間認可用のアクセストークンを取得できるようになったことです。この更新は、アプリケーション、マイクロサービス、および自動化されたワークロードにおけるサービス間通信の認可を必要とするお客様に適しております。

## 詳細

新機能といたしましては、Amazon CognitoがGetClientToken APIオペレーションをサポートし、ユーザープールドメインを設定せずにAWS SDK、CLI、またはAPIを通じてマシン間認可用のアクセストークンを取得できるようになったことです。この更新は、アプリケーション、マイクロサービス、および自動化されたワークロードにおけるサービス間通信の認可を必要とするお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-get-client-token/)
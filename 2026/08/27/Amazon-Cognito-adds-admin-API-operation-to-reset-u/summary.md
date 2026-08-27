# Amazon Cognito で TOTP 設定をリセットする管理 API 操作が利用可能に

Amazon Cognito adds admin API operation to reset user TOTP configurations

**カテゴリ:** What's New
**公開日:** 2026-08-26T22:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-totp-reset/)

このページでは、AWS What's Newで発表された「Amazon Cognito adds admin API operation to reset user TOTP configurations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognito は TOTP MFA 設定をリセットする新しい管理 API 操作を提供することで、ユーザーがデバイスを紛失した場合の復旧プロセスを簡素化しました。これにより、アカウント再作成の必要性を排除しながら、多要素認証の強制を維持することができます。

## このアップデートで何が変わったか

- Amazon Cognito に、ユーザーの TOTP（時間ベースのワンタイムパスワード）多要素認証設定をリセットする新しい管理 API 操作が追加されました。

- この新しい機能は、Amazon Cognito が利用可能なすべての AWS リージョンで提供されています。

## 対象ユーザー

- Amazon Cognito を使用してユーザー認証を実装している企業
- TOTP MFA を必須にしているシステム管理者
- ユーザーサポートを提供する組織

## 詳細

- Amazon Cognito に、ユーザーの TOTP（時間ベースのワンタイムパスワード）多要素認証設定をリセットする新しい管理 API 操作が追加されました。

- ユーザーが TOTP デバイスへのアクセスを失った場合、管理者はデバイスの関連付けを削除し、ユーザーが次回のサインイン時に新しいデバイスを登録できるようにすることができます。

- この機能により、TOTP デバイスを紛失したロックアウトされたユーザーを復旧するためにアカウントを再作成する必要がなくなります。

- 多要素認証の強制を維持しながら、ユーザーの復旧パスを提供することができます。

- この新しい機能は、Amazon Cognito が利用可能なすべての AWS リージョンで提供されています。

- AdminDeleteSoftwareToken API を使用して、AWS CLI、SDK、または API を通じてアクセスできます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-totp-reset/)
- [Amazon Cognito ドキュメント](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa-totp.html)
- [Cognito API リファレンス](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/)
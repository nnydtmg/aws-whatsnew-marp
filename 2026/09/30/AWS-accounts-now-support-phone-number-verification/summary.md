# AWSアカウントが主要連絡先の電話番号検証をサポート

AWS accounts now support phone number verification

**カテゴリ:** What's New
**公開日:** 2026-09-30T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-accounts-phone-number-verification/)

このページでは、AWS What's Newで発表された「AWS accounts now support phone number verification」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWSアカウントの主要連絡先電話番号をSMS OTPで検証できるようになりました。AWS Organizationsをご利用のお客様は、管理アカウントの検証済みステータスをメンバーアカウントへ継承できます。

## このアップデートで何が変わったか

新機能は、AWSアカウントの主要連絡先電話番号をSMSワンタイムパスコードで検証できることです。お客様はコンソールまたはSendPhoneNumberVerification APIで6桁のOTPを送信し、VerifyPhoneNumber APIで検証を完了できます。電話番号変更時は再検証が必要となり、GetContactInformation APIで検証状態を確認できます。本アップデートは、連絡先電話番号の真正性を確保したいAWSのお客様に適しております。AWS Organizationsをご利用のお客様は、管理アカウントから検証済み状態を継承できるため、多数のアカウントをお持ちの場合に特に有益です。

## 対象ユーザー

AWS Accounts now support phone number verification for primary contact phone numbers. Previously, phone numbers in AWS account contact information were validated for format but never verified through an out-of-band mechanism. Now, customers can verify their phone numbers via SMS one-time passcode (O

## 詳細

AWS Accounts now support phone number verification for primary contact phone numbers. Previously, phone numbers in AWS account contact information were validated for format but never verified through an out-of-band mechanism. Now, customers can verify their phone numbers via SMS one-time passcode (OTP).

To verify a phone number, customers initiate verification through the AWS Management Console or programmatically via the new SendPhoneNumberVerification API, which sends a 6-digit OTP. After entering the code, the VerifyPhoneNumber API validates and persists the verified status. When a phone number is changed through the PutContactInformation API, customers will be prompted to complete verification again. The GetContactInformation API now exposes verification status, enabling customers to confirm which phone numbers have been verified.

For AWS Organizations customers, phone number verification supports inheritance from the management account. When a verified phone number is applied to member accounts from the management account, those member accounts inherit the verified status if the number matches the management account, eliminating the need to verify the same number across thousands of accounts. Member accounts that independently change their own phone numbers will need to complete verification separately.

This feature is available in all AWS commercial regions. To learn more about phone number verification, visit the AWS Account Management documentation.

新機能は、AWSアカウントの主要連絡先電話番号をSMSワンタイムパスコードで検証できることです。お客様はコンソールまたはSendPhoneNumberVerification APIで6桁のOTPを送信し、VerifyPhoneNumber APIで検証を完了できます。電話番号変更時は再検証が必要となり、GetContactInformation APIで検証状態を確認できます。本アップデートは、連絡先電話番号の真正性を確保したいAWSのお客様に適しております。AWS Organizationsをご利用のお客様は、管理アカウントから検証済み状態を継承できるため、多数のアカウントをお持ちの場合に特に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-accounts-phone-number-verification/)
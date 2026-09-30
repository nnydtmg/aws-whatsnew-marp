---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWSアカウントが主要連絡先の電話番号検証をサポート

AWS accounts now support phone number verification

**What's New** | 2026-09-30T08:00:00

---

## 概要

- AWSアカウントの主要連絡先電話番号をSMS OTPで検証できるようになりました。
- AWS Organizationsをご利用のお客様は、管理アカウントの検証済みステータスをメンバーアカウントへ継承できます。

---

## 前提・背景

### これまでの課題

AWS Accounts now support phone number verification for primary contact phone numbers. Previously, phone numbers in AWS account contact information were validated for format but never verified through an out-of-band mechanism. Now, customers can verif

---

### 関連する最近の動向

- **AWS accounts now support phone number verification - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/20...

---

## 変更内容・新機能

新機能は、AWSアカウントの主要連絡先電話番号をSMSワンタイムパスコードで検証できることです。お客様はコンソールまたはSendPhoneNumberVerification APIで6桁のOTPを送信し、VerifyPhoneNumber APIで検証を完了できます。電話番号変更時は再検証が必要となり、GetContactInformation APIで検証状態を確認できます。本アップデートは、連絡先電話番号の真正性を確保したいAWSのお客様に適しております。AWS Organizationsをご利用のお客様は、管理アカウントから検証済み状態を継承できるため、多数のアカウントをお持ちの場合に特に有益です。

---

## まとめ

- AWS accounts now support phone number verification について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-accounts-phone-number-verification/)

### 関連情報

- [AWS accounts now support phone number verification - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-accounts-phone-number-verification/)
- [Update the primary contact for your AWS account - AWS Account Management](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-primary.html)
- [Welcome - AWS Account Management](https://docs.aws.amazon.com/accounts/latest/APIReference/Welcome.html)
- [AWS Account Management and AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html)
- [Resolve issues verifying a new AWS account with a call or PIN | AWS re:Post](https://repost.aws/knowledge-center/phone-verify-no-call)
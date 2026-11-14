---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hub CSPMがAWS Organizationsの宣言型ポリシーによる一元設定をサポート

AWS Security Hub CSPM now supports centralized configuration with AWS Organizations declarative policies

**What's New** | 2026-11-13T08:00:00

---

## 概要

- AWS Security Hub CSPMがAWS Organizationsの宣言型ポリシーに対応し、組織全体での有効化と設定ドリフトの防止が可能になりました。
- 複数アカウントを運用されるお客様に適した機能でございます。

---

## 前提・背景

### 関連する最近の動向

- **Managing Security Hub CSPM for multiple accounts with AWS Organizations - AWS Security Hub**
  [詳細](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html)

- **Enabling Security Hub CSPM - AWS Security Hub**
  [詳細](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html)

- **Introducing new central configuration capa...

---

## 変更内容・新機能

-新機能は、AWS Security Hub CSPMがAWS Organizationsの宣言型ポリシーをサポートすることです。
- 組織内のすべてのアカウントとリージョンでSecurity Hub CSPMを有効化し、セキュリティ標準とコントロールを定義できます。
- ポリシーは全体または特定のアカウントとリージョンの組み合わせに適用でき、設定ドリフトを防止できます。
- 新規アカウントにも自動適用され、作成時からベースライン設定を開始できます。
- 本更新は、AWS Organizationsで複数アカウントを管理するお客様に適しております。
- Security Hub CSPMの設定を組織全体で統一したいお客様にとって有用です。

---

## まとめ

- AWS Security Hub CSPM now supports centralized configuration with AWS Organizations declarative policies について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-cspm-org-policies/)

### 関連情報

- [Managing Security Hub CSPM for multiple accounts with AWS Organizations - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html)
- [Enabling Security Hub CSPM - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html)
- [Introducing new central configuration capabilities in AWS Security Hub](https://aws.amazon.com/blogs/security/introducing-new-central-configuration-capabilities-in-aws-security-hub)
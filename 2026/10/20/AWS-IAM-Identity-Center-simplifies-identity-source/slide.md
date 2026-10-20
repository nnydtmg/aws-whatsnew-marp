---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Identity CenterがActive Directoryからのアイデンティティソース変更を簡素化

AWS IAM Identity Center simplifies identity source changes from Active Directory

**What's New** | 2026-10-20T08:00:00

---

## 概要

- AWS IAM Identity Centerの新機能により、Active Directoryからのアイデンティティソース変更時に既存の割り当てが保持されます。
- Active Directoryから外部IdP（OktaやMicrosoft Entra ID）やIdentity Centerディレクトリへ変更する際、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。
- 以前はこれらをIAM Identity Centerで再...

---

## 前提・背景

### これまでの課題

AWS IAM Identity Centerは、Active Directoryから外部アイデンティティプロバイダ（IdP）（OktaやMicrosoft Entra IDなど）またはIdentity Centerディレクトリへアイデンティティソースを変更する際、ワークフォースのアイデンティティと割り当てを保持するようになりました。具体的には、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこの変更にあたりIAM Iden

---

### 関連する最近の動向

- **AWS IAM Identity Center (Formerly AWS SSO): The Complete 2026 Guide**
  [詳細](https://www.joekarlsson.com/blog/a...

---

## 変更内容・新機能

AWS IAM Identity Centerは、Active Directoryから外部アイデンティティプロバイダ（IdP）（OktaやMicrosoft Entra IDなど）またはIdentity Centerディレクトリへアイデンティティソースを変更する際、ワークフォースのアイデンティティと割り当てを保持するようになりました。具体的には、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこの変更にあたりIAM Identity Centerでこれらを再作成する必要がありました。Active Directoryからアイデンティティソースを変更すると、既存のアイデンティティストアはそのまま残るため、ユーザーとグループは同じIDを維持します。その結果、ユーザーはAWSアカウントおよびアプリケーションへのアクセスを維持し、ユーザーID、グループID、アイデンティティストアIDを参照するポリシーもそのまま動作し続けます。この変更を行うには、ユーザーがサインインするための標準セットアップで新しいアイデンティティソースを構

---

## まとめ

- AWS IAM Identity Center simplifies identity source changes from Active Directory について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-center-chg-id-src-from-ad/)

### 関連情報

- [AWS IAM Identity Center (Formerly AWS SSO): The Complete 2026 Guide](https://www.joekarlsson.com/blog/aws-identity-center-guide)
- [AWS IAM Identity Center Setup: 12 Steps [2026]](https://tech-insider.org/how-to-set-up-aws-iam-identity-center-2026)
- [Considerations for changing your identity source - AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-considerations.html)
- [Change your identity source - AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-change.html)
- [Using Active Directory as an identity source - AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/gs-ad.html)
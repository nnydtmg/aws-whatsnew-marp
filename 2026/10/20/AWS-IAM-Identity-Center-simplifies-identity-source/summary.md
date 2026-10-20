# IAM Identity CenterがActive Directoryからのアイデンティティソース変更を簡素化

AWS IAM Identity Center simplifies identity source changes from Active Directory

**カテゴリ:** What's New
**公開日:** 2026-10-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-center-chg-id-src-from-ad/)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center simplifies identity source changes from Active Directory」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity Centerの新機能により、Active Directoryからのアイデンティティソース変更時に既存の割り当てが保持されます。Active Directoryから外部IdP（OktaやMicrosoft Entra ID）やIdentity Centerディレクトリへ変更する際、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこれらをIAM Identity Centerで再作成する必要がありました。この更新はスムーズな移行を求める組織に有益です。

## このアップデートで何が変わったか

AWS IAM Identity Centerは、Active Directoryから外部アイデンティティプロバイダ（IdP）（OktaやMicrosoft Entra IDなど）またはIdentity Centerディレクトリへアイデンティティソースを変更する際、ワークフォースのアイデンティティと割り当てを保持するようになりました。具体的には、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこの変更にあたりIAM Identity Centerでこれらを再作成する必要がありました。Active Directoryからアイデンティティソースを変更すると、既存のアイデンティティストアはそのまま残るため、ユーザーとグループは同じIDを維持します。その結果、ユーザーはAWSアカウントおよびアプリケーションへのアクセスを維持し、ユーザーID、グループID、アイデンティティストアIDを参照するポリシーもそのまま動作し続けます。この変更を行うには、ユーザーがサインインするための標準セットアップで新しいアイデンティティソースを構

## 対象ユーザー

AWS IAM Identity Centerは、Active Directoryから外部アイデンティティプロバイダ（IdP）（OktaやMicrosoft Entra IDなど）またはIdentity Centerディレクトリへアイデンティティソースを変更する際、ワークフォースのアイデンティティと割り当てを保持するようになりました。具体的には、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこの変更にあたりIAM Identity Centerでこれらを再作成する必要がありました。Active Directoryからアイ

## 詳細

AWS IAM Identity Centerは、Active Directoryから外部アイデンティティプロバイダ（IdP）（OktaやMicrosoft Entra IDなど）またはIdentity Centerディレクトリへアイデンティティソースを変更する際、ワークフォースのアイデンティティと割り当てを保持するようになりました。具体的には、ユーザー、グループ、グループメンバーシップ、パーミッションセット割り当て、アプリケーション割り当てが保存されます。以前はこの変更にあたりIAM Identity Centerでこれらを再作成する必要がありました。Active Directoryからアイデンティティソースを変更すると、既存のアイデンティティストアはそのまま残るため、ユーザーとグループは同じIDを維持します。その結果、ユーザーはAWSアカウントおよびアプリケーションへのアクセスを維持し、ユーザーID、グループID、アイデンティティストアIDを参照するポリシーもそのまま動作し続けます。この変更を行うには、ユーザーがサインインするための標準セットアップで新しいアイデンティティソースを構成します。変更後、ワークフォースはデュアルスタックのAWSアクセスポータルURLを通じてサインインします。逆方向、つまりActive Directoryへの変更は以前と同様に動作します。この機能はIAM Identity Centerが利用可能なすべてのAWSリージョンで、IAM Identity Centerのオーガナイゼーションインスタンスに対して利用できます。IAM Identity Centerは追加コストなしで提供されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/iam-identity-center-chg-id-src-from-ad/)
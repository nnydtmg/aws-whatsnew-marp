# AWS STS が GetScopedCredentials を発表、実行時の権限絞り込みが可能に

AWS STS announces GetScopedCredentials to scope down permissions at runtime

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)

このページでは、AWS What's Newで発表された「AWS STS announces GetScopedCredentials to scope down permissions at runtime」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS STSのGetScopedCredentialsにより、既存の一時認証情報の権限を実行時に絞り込むことが可能になりました。エージェントやワークロードへ必要最小限の認証情報を付与したいお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、既存の一時的なセキュリティ認証情報の権限を実行時に絞り込むGetScopedCredentials APIです。
- 権限やセッション期間、またはその両方を縮小でき、呼び出し元の元のIDは保持されます。
- 権限とセッション期間は単調に縮小され、呼び出し元の範囲を超えることはありません。
- IAMポリシーでアクセスが制御され、各呼び出しはAWS CloudTrailに記録されます。
- この更新は、エージェント、サブエージェント、ワークロードに必要な権限のみの認証情報を付与したいお客様に適しております。
- すべてのAWS商用リージョン、AWS GovCloud (US)、AWS European Sovereign Cloud (Germany)、中国リージョンで利用可能です。

## 詳細

- 新機能は、既存の一時的なセキュリティ認証情報の権限を実行時に絞り込むGetScopedCredentials APIです。
- 権限やセッション期間、またはその両方を縮小でき、呼び出し元の元のIDは保持されます。
- 権限とセッション期間は単調に縮小され、呼び出し元の範囲を超えることはありません。
- IAMポリシーでアクセスが制御され、各呼び出しはAWS CloudTrailに記録されます。
- この更新は、エージェント、サブエージェント、ワークロードに必要な権限のみの認証情報を付与したいお客様に適しております。
- すべてのAWS商用リージョン、AWS GovCloud (US)、AWS European Sovereign Cloud (Germany)、中国リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)
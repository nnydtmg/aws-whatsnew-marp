---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS STS が GetScopedCredentials を発表、実行時の権限絞り込みが可能に

AWS STS announces GetScopedCredentials to scope down permissions at runtime

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS STSのGetScopedCredentialsにより、既存の一時認証情報の権限を実行時に絞り込むことが可能になりました。
- エージェントやワークロードへ必要最小限の認証情報を付与したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS STS announces GetScopedCredentials to scope down permissions at runtime**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)

- **GetScopedCredentials - AWS Security Token Service**
  [詳細](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetScopedCredentials.html)

- **Request temporary security credentials - AWS Identity and Access M...

---

## 変更内容・新機能

- 新機能は、既存の一時的なセキュリティ認証情報の権限を実行時に絞り込むGetScopedCredentials APIです。
- 権限やセッション期間、またはその両方を縮小でき、呼び出し元の元のIDは保持されます。
- 権限とセッション期間は単調に縮小され、呼び出し元の範囲を超えることはありません。
- IAMポリシーでアクセスが制御され、各呼び出しはAWS CloudTrailに記録されます。
- この更新は、エージェント、サブエージェント、ワークロードに必要な権限のみの認証情報を付与したいお客様に適しております。
- すべてのAWS商用リージョン、AWS GovCloud (US)、AWS European Sovereign Cloud (Germany)、中国リージョンで利用可能です。
- 一時認証情報（AssumeRole やフェデレーテッドセッション）でのみ呼び出し可能で、IAMユーザーやルート認証情報では呼び出せません。
- STSグローバルエンドポイントでは利用できません。
- DurationSecondsは1秒から129,600秒（36時間）、Policyは最大2

---

## まとめ

- AWS STS announces GetScopedCredentials to scope down permissions at runtime について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)

### 関連情報

- [AWS STS announces GetScopedCredentials to scope down permissions at runtime](https://aws.amazon.com/about-aws/whats-new/2026/11/sts-getscopedcredentials/)
- [GetScopedCredentials - AWS Security Token Service](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetScopedCredentials.html)
- [Request temporary security credentials - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html)
- [Create fine-grained session permissions using IAM managed policies](https://aws.amazon.com/blogs/security/create-fine-grained-session-permissions-using-iam-managed-policies)
- [AWS IAM Security Best Practices in 2026](https://dev.to/karaniph/aws-iam-security-best-practices-in-2026-a-complete-guide-o14)
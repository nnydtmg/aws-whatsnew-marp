# AWS IAM のロールあたりのマネージドポリシー制限が20に拡大

AWS IAM now supports 20 managed policies per role by default

**カテゴリ:** What's New
**公開日:** 2026-08-19T15:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-quota-increase/)

このページでは、AWS What's Newで発表された「AWS IAM now supports 20 managed policies per role by default」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM のマネージドポリシーのデフォルトクォータがロールあたり 10 から 20 に増加され、すべての商用リージョンおよび GovCloud、中国リージョンで自動的に適用されました。この変更により、IAM ベストプラクティスの実装やパートナー製品のオンボーディングがより容易になり、必要に応じて最大 25 までのクォータ増加をリクエストできるようになりました。

## このアップデートで何が変わったか

- ロールあたりのマネージドポリシーのデフォルトクォータが 10 から 20 に増加
- すべての商用 AWS リージョン、AWS GovCloud、中国リージョンで自動適用
- 20 を超えるマネージドポリシーが必要な場合は、Service Quotas で最大 25 まで増加可能
- ユーザー側での操作は不要（自動的に適用）

## 対象ユーザー

- IAM ロールを使用するすべての AWS アカウント
- 複数のマネージドポリシーを付与する必要があるユーザー
- パートナー製品やマルチサービス構成を使用する組織

## 詳細

### 主な変更内容

- **AWS IAM は、ロールあたりのマネージドポリシーのデフォルトクォータを 10 から 20 に増加させました。**

- 現在のクォータ（20）でも不足する場合は Service Quotas を使用して最大 25 までクォータ増加をリクエストできます

- この変更により、IAM のベストプラクティスに従う際や AWS パートナー製品のオンボーディング時に、サービスクォータリクエストを提出する必要性が軽減されます

- この変更はすべての商用 AWS リージョン、AWS GovCloud (US)、および中国リージョンで利用可能です

- アカウント内のすべての IAM ロールに自動的に適用され、ユーザー側での操作は不要です

## メリット

1. **権限管理の柔軟性向上**: より詳細な権限分割が可能になる
2. **クォータ増加リクエストの削減**: ベストプラクティス実装が容易になる
3. **パートナー製品統合の簡素化**: 複数ポリシー付与が容易になる
4. **セキュリティ強化**: 最小権限の原則をより実践的に実装できる
5. **運用負荷低減**: 自動適用により管理作業が不要

## ユースケース

### マイクロサービスアーキテクチャ
各マイクロサービスに対して、サービス固有のポリシーを個別に割り当て可能

### マルチパーティ・SaaS
複数の顧客ごとに異なるアクセス権限をきめ細かく管理

### 複合システム統合
複数のパートナー製品やツールを同一ロールに統合可能

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-quota-increase/)
- [IAM クォータドキュメント](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html)
- [IAM ベストプラクティス](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Service Quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html)

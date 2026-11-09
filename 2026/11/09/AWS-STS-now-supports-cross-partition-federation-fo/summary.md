# AWS STSがクロスパーティションフェデレーションに対応

AWS STS now supports cross-partition federation for AWS identities

**カテゴリ:** What's New
**公開日:** 2026-11-09T20:03:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)

このページでは、AWS What's Newで発表された「AWS STS now supports cross-partition federation for AWS identities」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS STSがクロスパーティションフェデレーションに対応し、長期認証情報なしで異なるパーティション間の一時認証情報取得が可能になりました。本機能はパーティションをまたいで運用する組織のセキュリティ向上に役立ちます。

## このアップデートで何が変わったか

新機能は、AWS STSがクロスパーティションフェデレーションをサポートし、あるパーティションのIAMアイデンティティで別パーティションのIAMロールの一時認証情報を取得できることでございます。長期認証情報を保存せず、GetWebIdentityTokenおよびAssumeRoleWithWebIdentity APIで短期間トークンを交換できます。本アップデートは、パーティションをまたいでワークロードを運用し、これまで長期認証情報に依存していた組織に適しております。統合的なセキュリティおよびコンプライアンス報告や集中運用ツールを必要とするお客様に有益でございます。

## 詳細

新機能は、AWS STSがクロスパーティションフェデレーションをサポートし、あるパーティションのIAMアイデンティティで別パーティションのIAMロールの一時認証情報を取得できることでございます。長期認証情報を保存せず、GetWebIdentityTokenおよびAssumeRoleWithWebIdentity APIで短期間トークンを交換できます。本アップデートは、パーティションをまたいでワークロードを運用し、これまで長期認証情報に依存していた組織に適しております。統合的なセキュリティおよびコンプライアンス報告や集中運用ツールを必要とするお客様に有益でございます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)
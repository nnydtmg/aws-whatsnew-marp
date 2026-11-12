# Amazon Route 53 Domainsが期限切れ・削除ドメインのセルフサービス復元に対応

Amazon Route 53 Domains now supports self-service restore for expired and deleted domains

**カテゴリ:** What's New
**公開日:** 2026-11-12T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-domains-self-service-restore/)

このページでは、AWS What's Newで発表された「Amazon Route 53 Domains now supports self-service restore for expired and deleted domains」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53 Domainsは、期限切れや削除されたドメインをセルフサービスで復元できる機能を追加いたしました。更新漏れや誤削除でドメインを失ったお客様が、ご自身で復旧できるようになりました。

## このアップデートで何が変わったか

Amazon Route 53 Domainsは、期限切れや削除されたドメインをセルフサービスで復元できる機能を追加いたしました。更新漏れや誤削除でドメインを失ったお客様が、ご自身で復旧できるようになりました。

## 詳細

Amazon Route 53 Domains now lets you restore an expired or recently deleted domain yourself, using the Amazon Route 53 console, AWS CLI, or AWS SDKs. Previously, restoring a domain required a request to AWS Support. Now you can recover a domain lost to a missed renewal, an expired payment method, or an accidental deletion, and restore the website, email, and applications that depend on it. To restore a domain, you enter the domain name, review the restoration price, accept the charge, and submit the request. Route 53 works with the top-level domain (TLD) registry to reactivate the registration and return the domain to your AWS account. Most TLD registries support restoration, and each registry sets how long after expiration or deletion a domain can still be restored. Restoring a domain typically costs more than registering or renewing one. To learn more, see Restoring an expired or deleted domain in the Route 53 Developer Guide.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-domains-self-service-restore/)
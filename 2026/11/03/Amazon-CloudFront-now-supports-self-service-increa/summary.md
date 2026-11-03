# Amazon CloudFrontがAWS Service Quotasでのセルフサービス引き上げに対応

Amazon CloudFront now supports self-service increases in AWS Service Quotas

**カテゴリ:** What's New
**公開日:** 2026-11-02T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-self-service-quotas/)

このページでは、AWS What's Newで発表された「Amazon CloudFront now supports self-service increases in AWS Service Quotas」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontがAWS Service Quotasによるセルフサービスでのクォータ引き上げに対応し、Business Support以上では公開しきい値内の申請が自動承認されるようになりました。サポートケースなしで上限を引き上げ、CloudWatchで使用量を監視できます。

## このアップデートで何が変わったか

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポートケースなしで引き上げ可能です。
- 一部のクォータはAmazon CloudWatchに5分ごとに使用量メトリクスを公開し、上限到達前にアラーム設定と申請が可能です。
- 本更新は、ディストリビューションやキャッシュポリシーなどのクォータを迅速に増やしたいお客様に適しています。
- 特にAWS Business Support以上をご利用で、使用状況を監視したいお客様にとって有益です。

## 活用シーン

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポートケースなしで引き上げ可能です。
- 一部のクォータはAmazon CloudWatchに5分ごとに使

## 詳細

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポートケースなしで引き上げ可能です。
- 一部のクォータはAmazon CloudWatchに5分ごとに使用量メトリクスを公開し、上限到達前にアラーム設定と申請が可能です。
- 本更新は、ディストリビューションやキャッシュポリシーなどのクォータを迅速に増やしたいお客様に適しています。
- 特にAWS Business Support以上をご利用で、使用状況を監視したいお客様にとって有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-self-service-quotas/)
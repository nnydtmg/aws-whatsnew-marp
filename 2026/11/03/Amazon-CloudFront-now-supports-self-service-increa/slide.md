---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontがAWS Service Quotasでのセルフサービス引き上げに対応

Amazon CloudFront now supports self-service increases in AWS Service Quotas

**What's New** | 2026-11-02T08:00:00

---

## 概要

- Amazon CloudFrontがAWS Service Quotasによるセルフサービスでのクォータ引き上げに対応し、Business Support以上では公開しきい値内の申請が自動承認されるようになりました。
- サポートケースなしで上限を引き上げ、CloudWatchで使用量を監視できます。

---

## 前提・背景

### これまでの課題

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポート

---

### 関連する最近の動向

- **Amazon CloudFront now supports self-service increases in AWS Service Quotas - AWS**
  [詳細](https://aws.amazon.c...

---

## 変更内容・新機能

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポートケースなしで引き上げ可能です。
- 一部のクォータはAmazon CloudWatchに5分ごとに使用量メトリクスを公開し、上限到達前にアラーム設定と申請が可能です。
- 本更新は、ディストリビューションやキャッシュポリシーなどのクォータを迅速に増やしたいお客様に適しています。
- 特にAWS Business Support以上をご利用で、使用状況を監視したいお客様にとって有益です。

---

## ユースケース

- 新機能は、Amazon CloudFrontがAWS Service Quotasに対応し、28のクォータをService QuotasコンソールまたはAPIから確認・監視・引き上げ申請できることです。
- 従来はサポートケースと手動レビューが必要でしたが、AWS Business Support以上では公開しきい値内の申請が自動承認されます。
- 例えば、ディストリビューションクォータを500から1,000へ、またはディストリビューションあたりの代替ドメイン名を100から500へ、サポートケースなしで引き上げ可能です。
- 一部のクォータはAmazon CloudWatchに5分ごとに使

---

## まとめ

- Amazon CloudFront now supports self-service increases in AWS Service Quotas について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-self-service-quotas/)

### 関連情報

- [Amazon CloudFront now supports self-service increases in AWS Service Quotas - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-self-service-quotas)
- [Requesting a quota increase - Service Quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html)
- [AWS Service Quotas adds now support for automatic quota management](https://aws.amazon.com/about-aws/whats-new/2025/11/automatic-quota-management-service-quota-management)
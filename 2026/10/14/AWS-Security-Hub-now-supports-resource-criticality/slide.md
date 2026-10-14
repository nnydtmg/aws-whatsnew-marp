---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hubがリソース重要度による優先順位付けをサポート

AWS Security Hub now supports resource criticality for prioritization

**What's New** | 2026-10-14T01:00:00

---

## 概要

- AWS Security Hubはリソース重要度による露出の優先順位付けをサポートし、中央セキュリティチームが重要なリソースへの脅威に集中できるようになります。
- この機能は追加費用なしですべてのお客様に提供されます。

---

## 前提・背景

### 関連する最近の動向

- **Exposure findings in Security Hub - AWS Security Hub**
  [詳細](https://docs.aws.amazon.com/securityhub/latest/userguide/exposure-findings.html)

- **AWS Security Hub - AWS**
  [詳細](https://aws.amazon.com/security-hub)

- **Unify your security with the new AWS Security Hub for risk prioritization and response at scale**
  [詳細](https://aws.amazon.com/blogs/aws/unify-your-security-w...

---

## 変更内容・新機能

AWS Security Hubは露出（exposure）の優先順位付けにリソース重要度（resource criticality）を追加する新機能をサポートします。この更新により、中央セキュリティチームはビジネス上最も重要なリソースを脅かす露出に焦点を当てられます。自動化ルールで重要度を設定可能で、例えば特定アカウント内のすべてのコンピュートリソースをVery Highとマーキングできます。ルールは既存のインベントリリソースと、Security Hubが新規発見するリソースの両方に適用されます。また、リソースタグやリソース名から設定なしで重要度を推論し、どのソースが値を決定したかを記録します。重要度はResourcesページのカラムとして表示され、ソート・フィルター・グルーピングが可能です。またexposure findingのImpact assessmentタブにも表示されます。Security Hub Essentialsに含まれ、追加費用なしですべてのお客様に常に有効です。

---

## ユースケース

AWS Security Hubは露出（exposure）の優先順位付けにリソース重要度（resource criticality）を追加する新機能をサポートします。この更新により、中央セキュリティチームはビジネス上最も重要なリソースを脅かす露出に焦点を当てられます。自動化ルールで重要度を設定可能で、例えば特定アカウント内のすべてのコンピュートリソースをVery Highとマーキングできます。ルールは既存のインベントリリソースと、Security Hubが新規発見するリソースの両方に適用されます。また、リソースタグやリソース名から設定なしで重要度を推論し、どのソースが値を決定したかを記録します

---

## まとめ

- AWS Security Hub now supports resource criticality for prioritization について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality/)

### 関連情報

- [Exposure findings in Security Hub - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/exposure-findings.html)
- [AWS Security Hub - AWS](https://aws.amazon.com/security-hub)
- [Unify your security with the new AWS Security Hub for risk prioritization and response at scale](https://aws.amazon.com/blogs/aws/unify-your-security-with-the-new-aws-security-hub-for-risk-prioritization-and-response-at-scale-preview)
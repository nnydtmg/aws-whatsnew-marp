---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAFが簡素化された新料金体系を導入、保護対象に応じた予測可能なコストに

AWS WAF introduces simplified pricing

**What's New** | 2026-11-23T18:51:00

---

## 概要

- AWS WAFが簡素化された料金体系を導入しました。
- 料金はルール構成ではなく、保護するリソース、検査するトラフィック、適用する保護レベルの3つの次元に従うようになりました。
- 各Web ACLに最大2,500 WCUが追加料金なしで含まれ、Bot Controlの一般保護やAnti-DDoSルールグループも追加料金なしで使用できます。
- 現行のお客様は2027年2月1日に新料金へ移行します。

---

## 前提・背景

### これまでの課題

AWS WAFは、設定方法ではなく保護対象に応じた簡素化料金を導入しました。以前はWeb ACL、ルール、ルールグループの購読、容量ティアごとに別料金が発生し、すべてのセキュリティ意思決定が請求計算になっていました。新料金では、(1) 保護リソースごとのリソース料金（$0.01/時間、約$7.30/月）、(2) 検査リクエストごとの基本リクエスト料金（$0.60/百万件）、(3) Bot Control Targeted、Fraud Control、API Security、AI Securit

---

### 関連する最近の動向

- **AWS WAF introduces simplified pricing - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf...

---

## 変更内容・新機能

AWS WAFは、設定方法ではなく保護対象に応じた簡素化料金を導入しました。以前はWeb ACL、ルール、ルールグループの購読、容量ティアごとに別料金が発生し、すべてのセキュリティ意思決定が請求計算になっていました。新料金では、(1) 保護リソースごとのリソース料金（$0.01/時間、約$7.30/月）、(2) 検査リクエストごとの基本リクエスト料金（$0.60/百万件）、(3) Bot Control Targeted、Fraud Control、API Security、AI Securityなどの高度保護にのみ適用されるプレミアムリクエスト料金（$5.00/百万件）の3次元で請求されます。各Web ACLには最大2,500 WCUが追加料金なしで含まれ（1,500から拡充）、容量超過でもリクエスト単価は上昇しません。Bot Controlの一般保護やAnti-DDoSルールグループは追加料金なしで使用可能です。ルールの追加・変更・並べ替えで料金は変わりません。リクエストボディ検査もリソース種別の上限まで追加料金なしです。Security analytics dashboardは2

---

## まとめ

- AWS WAF introduces simplified pricing について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-introduces-simplified-pricing/)

### 関連情報

- [AWS WAF introduces simplified pricing - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-introduces-simplified-pricing)
- [Introducing AWS WAF simplified pricing | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-aws-waf-simplified-pricing)
- [AWS WAF Pricing - Web Application Firewall Cost - AWS](https://aws.amazon.com/waf/pricing)
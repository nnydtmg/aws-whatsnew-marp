---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAFがリアルタイム調査向けSecurity Analytics Dashboardを発表

AWS WAF launches new Security Analytics Dashboard for real-time investigations

**What's New** | 2026-11-19T18:00:00

---

## 概要

- AWS WAFの新しいセキュリティ分析ダッシュボードは、すべてのウェブACLのトラフィックを一元的に分析しコンソール上でログ検索とブロックができる機能です。
- 複数アプリケーションを管理するお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS WAF launches new Security Analytics Dashboard for real-time investigations - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-waf-security-analytics-dashboard/)

- **Deploy a dashboard for AWS WAF with minimal effort | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/deploy-dashboard-for-aws-waf-minimal-effort)

- **Document history - AWS W...

---

## 変更内容・新機能

- 新しい機能は、すべての保護パックのトラフィックを単一ビューで分析できるAWS WAFセキュリティ分析ダッシュボードです。
- コンソール上でリクエストログを検索でき、ログパイプラインの構築は不要です。
- 21日間のフルフィデリティデータを追加費用なしでご利用いただけます。
- IPアドレスや国などの次元でフィルタでき、不要なトラフィックをページから直接ブロックできます。
- 本アップデートは複数のアプリケーションを横断して不要なトラフィックを調査したいお客様に適しております。
- リージョナルリソースとAmazon CloudFront分散の両方を保護するprotection packs (web ACLs)のトラフィックを単一ビューに集約。
- 既存のprotection pack (WebACL)ごとのダッシュボードは継続して利用可能。
- フィルタ次元: クライアントIPアドレス、国、ASN、ユーザーエージェント、JA4フィンガープリント、ホスト、パス、トリガーされたルール、ラベル。
- データはサンプリングではなくフルフィデリティ。フィルタはダッシュボード全体に適用。
-

---

## まとめ

- AWS WAF launches new Security Analytics Dashboard for real-time investigations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-waf-security-analytics-dashboard/)

### 関連情報

- [AWS WAF launches new Security Analytics Dashboard for real-time investigations - AWS](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-waf-security-analytics-dashboard/)
- [Deploy a dashboard for AWS WAF with minimal effort | AWS Security Blog](https://aws.amazon.com/blogs/security/deploy-dashboard-for-aws-waf-minimal-effort)
- [Document history - AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/doc-history.html)
- [Introducing AI traffic analysis dashboards for AWS WAF | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-ai-traffic-analysis-dashboards-for-aws-waf)
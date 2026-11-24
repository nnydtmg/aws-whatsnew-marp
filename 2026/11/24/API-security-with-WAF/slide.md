---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS WAF API Security と API Portal が一般提供開始

API security with WAF

**What's New** | 2026-11-23T08:00:00

---

## 概要

- 新しいAPI PortalとAWS WAF API Securityにより、AWS環境内のAPIを自動検出から保護まで一貫して提供します。
- お客様はカスタムルールを書くことなくAPIを保護できます。

---

## 前提・背景

### 関連する最近の動向

- **Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/introducing-api-and-ai-security-on-aws-from-discovery-to-protection)

- **API security with WAF - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/api-security-with-waf)

- **AWS WAF API Security**
  [詳細](https://docs.aws.amazon.c...

---

## 変更内容・新機能

Automated API discovery and protection are now generally available. Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下の全APIをAWS Organization全体で自動検出し、AWS WAFで保護できる。API Portalはエージェント不要でトラフィックログとサービス設定からAPIを自動識別し、ゾンビAPIやシャドウAPI、オーファンAPIを特定してセキュリティ所見を報告する。AWS WAF API Securityマネージドルールグループは、BOLA（Broken Object Level Authorization）、認証の不備とクレデンシャルスタッフィング、API偵察と列挙から保護する。単一リクエストのルール（トークン改ざんなど）とトラフィック学習による振る舞い検知の両方を提供。WAFの検出イベントはAPI Portalの所見に集約される。API Portalは32のAWSリージョンで利用可能。API SecurityはGovCl

---

## まとめ

- API security with WAF について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/api-security-with-waf/)

### 関連情報

- [Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-api-and-ai-security-on-aws-from-discovery-to-protection)
- [API security with WAF - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/api-security-with-waf)
- [AWS WAF API Security](https://docs.aws.amazon.com/waf/latest/developerguide/waf-api-security.html)